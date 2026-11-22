"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const TICKS = Array.from({ length: 101 }, (_, i) => i);
const IDLE_HIDE_DELAY_MS = 1200;

/**
 * Custom Compact Vertical Ruler Scrollbar (0-100 scale)
 * - Auto-hides smoothly when idle (no scrolling, hovering, or dragging).
 * - Uses requestAnimationFrame + direct DOM refs for zero React re-renders during scroll.
 *
 * @param {{
 *   className?: string;
 *   accentColor?: string;
 * }} props
 */
export default function RulerScrollbar({
  className = "",
  accentColor = "#FFFFFF",
}) {
  const pathname = usePathname();
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const viewportBoxRef = useRef(null);
  const indicatorRef = useRef(null);
  const labelRefs = useRef({});
  const activeMajorRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const isScrollableRef = useRef(true);
  const idleTimerRef = useRef(0);
  const rafIdRef = useRef(0);
  const showRulerRef = useRef(() => {});
  const scheduleHideRef = useRef(() => {});

  useEffect(() => {
    const clearIdleTimer = () => {
      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
        idleTimerRef.current = 0;
      }
    };

    const hideRuler = () => {
      const rootEl = rootRef.current;
      if (!rootEl) return;
      if (isDraggingRef.current || isHoveredRef.current) return;
      rootEl.style.opacity = "0";
      rootEl.style.transform = "translateX(8px)";
    };

    const scheduleHide = () => {
      clearIdleTimer();
      if (!isScrollableRef.current) return;
      if (isDraggingRef.current || isHoveredRef.current) return;
      idleTimerRef.current = window.setTimeout(hideRuler, IDLE_HIDE_DELAY_MS);
    };

    const showRuler = () => {
      const rootEl = rootRef.current;
      if (!rootEl || !isScrollableRef.current) return;
      rootEl.style.opacity = "1";
      rootEl.style.transform = "translateX(0px)";
      scheduleHide();
    };

    showRulerRef.current = showRuler;
    scheduleHideRef.current = scheduleHide;

    const syncScrollDom = (revealOnSync = false) => {
      rafIdRef.current = 0;
      const rootEl = rootRef.current;
      const viewportEl = viewportBoxRef.current;
      const indicatorEl = indicatorRef.current;
      if (!rootEl || !viewportEl || !indicatorEl) return;

      const docEl = document.documentElement;
      const scrollHeight = Math.max(docEl.scrollHeight, document.body.scrollHeight);
      const innerHeight = window.innerHeight;
      const maxScroll = Math.max(0, scrollHeight - innerHeight);

      // Disable and hide completely if page is not scrollable
      if (maxScroll <= 0 || scrollHeight <= innerHeight) {
        isScrollableRef.current = false;
        clearIdleTimer();
        rootEl.style.opacity = "0";
        rootEl.style.transform = "translateX(8px)";
        rootEl.style.pointerEvents = "none";
        return;
      }

      isScrollableRef.current = true;
      rootEl.style.pointerEvents = "auto";

      if (revealOnSync) {
        showRuler();
      }

      const scrollY = Math.max(0, Math.min(maxScroll, window.scrollY));
      const progress = scrollY / maxScroll;

      // Update Viewport Box (Transparent Thumb) height & top position
      const thumbHeightPct = Math.min(100, Math.max(2, (innerHeight / scrollHeight) * 100));
      const thumbTopPct = Math.min(
        100 - thumbHeightPct,
        Math.max(0, (scrollY / scrollHeight) * 100)
      );
      viewportEl.style.height = `${thumbHeightPct.toFixed(3)}%`;
      viewportEl.style.top = `${thumbTopPct.toFixed(3)}%`;

      // Update Active Indicator Bar (0% to 100%)
      const progressPct = progress * 100;
      indicatorEl.style.top = `calc(${progressPct.toFixed(3)}% - 1.5px)`;

      // Highlight nearest multiple-of-5 label in bright white
      const nearestMajor = Math.min(100, Math.max(0, Math.round(progressPct / 5) * 5));
      if (nearestMajor !== activeMajorRef.current) {
        const prevEl = labelRefs.current[activeMajorRef.current];
        if (prevEl) {
          prevEl.classList.remove("text-white", "font-bold");
          prevEl.classList.add("text-white/50");
        }
        const nextEl = labelRefs.current[nearestMajor];
        if (nextEl) {
          nextEl.classList.remove("text-white/50");
          nextEl.classList.add("text-white", "font-bold");
        }
        activeMajorRef.current = nearestMajor;
      }
    };

    const requestScrollSync = () => {
      showRuler();
      if (!rafIdRef.current) {
        rafIdRef.current = window.requestAnimationFrame(() => syncScrollDom(true));
      }
    };

    const requestResizeSync = () => {
      if (!rafIdRef.current) {
        rafIdRef.current = window.requestAnimationFrame(() => syncScrollDom(false));
      }
    };

    // Initialize active label (0), compute initial metrics, and hide while idle
    const initialEl = labelRefs.current[activeMajorRef.current];
    if (initialEl) {
      initialEl.classList.remove("text-white/50");
      initialEl.classList.add("text-white", "font-bold");
    }
    syncScrollDom(false);
    hideRuler();

    window.addEventListener("scroll", requestScrollSync, { passive: true });
    window.addEventListener("resize", requestResizeSync, { passive: true });

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(requestResizeSync);
      resizeObserver.observe(document.body);
      resizeObserver.observe(document.documentElement);
    }

    return () => {
      window.removeEventListener("scroll", requestScrollSync);
      window.removeEventListener("resize", requestResizeSync);
      if (resizeObserver) resizeObserver.disconnect();
      clearIdleTimer();
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
    };
  }, [pathname]);

  const scrollToPointerY = (clientY) => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const rect = trackEl.getBoundingClientRect();
    if (rect.height <= 0) return;

    const ratio = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
    const docEl = document.documentElement;
    const scrollHeight = Math.max(docEl.scrollHeight, document.body.scrollHeight);
    const maxScroll = Math.max(0, scrollHeight - window.innerHeight);
    if (maxScroll <= 0) return;

    window.scrollTo({
      top: ratio * maxScroll,
      behavior: "auto",
    });
  };

  const handlePointerEnter = () => {
    isHoveredRef.current = true;
    showRulerRef.current();
  };

  const handlePointerLeave = () => {
    isHoveredRef.current = false;
    scheduleHideRef.current();
  };

  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    isDraggingRef.current = true;
    showRulerRef.current();
    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    scrollToPointerY(e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    scrollToPointerY(e.clientY);
  };

  const handlePointerEnd = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (
      e.currentTarget.hasPointerCapture &&
      e.currentTarget.hasPointerCapture(e.pointerId)
    ) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    scheduleHideRef.current();
  };

  return (
    <aside
      ref={rootRef}
      aria-label="Ruler Scrollbar 0–100"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      style={{ opacity: 0, transform: "translateX(8px)" }}
      className={`fixed top-0 right-0 z-50 hidden md:block h-dvh w-14 bg-transparent border-r border-white/15 cursor-ns-resize select-none touch-none transition-[opacity,transform] duration-300 ease-out ${className}`}
    >
      {/* Inner Track with 10px vertical padding so 0 and 100 labels are never clipped */}
      <div
        ref={trackRef}
        className="relative h-full w-full py-2.5 drop-shadow-[0_1px_2px_rgba(35,31,32,0.85)]"
      >
        <div className="relative h-full w-full">
          {/* Viewport Box (Transparent Thumb) */}
          <div
            ref={viewportBoxRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 bg-white/8 border-y border-white/25"
            style={{ top: "0%", height: "15%" }}
          />

          {/* 101 Ticks (0 to 100) */}
          <div
            aria-hidden="true"
            className="pointer-events-none flex h-full w-full flex-col justify-between items-end"
          >
            {TICKS.map((tick) => {
              const isMajor = tick % 5 === 0;
              if (isMajor) {
                return (
                  <div
                    key={tick}
                    className="flex items-center justify-end leading-none"
                  >
                    <span
                      ref={(el) => {
                        labelRefs.current[tick] = el;
                      }}
                      className="ruler-mono mr-1.5 text-[9px] leading-none text-white/50 transition-colors duration-100"
                    >
                      {tick}
                    </span>
                    <span className="h-px w-4 bg-white/55" />
                  </div>
                );
              }
              return (
                <span
                  key={tick}
                  className="h-px w-2 bg-white/25"
                />
              );
            })}
          </div>

          {/* Active Indicator Bar (3px solid white bar) */}
          <div
            ref={indicatorRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 h-0.75 w-full bg-white shadow-xs"
            style={{
              top: "calc(0% - 1.5px)",
              backgroundColor: accentColor || "#FFFFFF",
            }}
          />
        </div>
      </div>
    </aside>
  );
}
