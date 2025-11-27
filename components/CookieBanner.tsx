"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-black">
      <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base font-light text-cc-dark">
            We use cookies to analyze site traffic and improve your experience.
            By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
            <Link href="/cookies" className="underline hover:text-cc-grey">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-cc-dark hover:text-cc-grey transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium bg-cc-dark text-white rounded-full hover:bg-black transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
