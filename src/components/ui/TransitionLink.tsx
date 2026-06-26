"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { useTransition } from "./TransitionContext";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Extra click handler (e.g. close a mobile menu). Runs before navigating. */
  onClick?: () => void;
}

/**
 * Drop-in replacement for next/link. On a plain left-click it intercepts the
 * event, fires the green wipe-in immediately (via the transition context), and
 * lets the context handle navigation once the screen is covered. Modifier
 * clicks (new tab, etc.) and same-page clicks fall through to default behaviour.
 */
export default function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const { triggerTransition } = useTransition();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Let the browser handle new-tab / download / middle-click natively.
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    e.preventDefault();
    onClick?.();

    // No transition when navigating to the page we are already on.
    if (href === pathname) return;

    triggerTransition(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
