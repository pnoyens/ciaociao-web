"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/retroui/Button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-50">
      <div className="max-w-[1380px] mx-auto">
        <div className="bg-background border-2 border-border shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base font-normal text-foreground">
              We use cookies to analyze site traffic and improve your experience.
              By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
              <Link href="/cookies" className="underline hover:text-muted-foreground transition-colors">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
