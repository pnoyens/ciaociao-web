"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics as GA } from "@next/third-parties/google";

const GA_ID = "G-0Q7VNLJWB7";

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      setHasConsent(consent === "accepted");
    };

    checkConsent();

    window.addEventListener("cookie-consent-updated", checkConsent);
    return () => {
      window.removeEventListener("cookie-consent-updated", checkConsent);
    };
  }, []);

  if (!hasConsent) return null;

  return <GA gaId={GA_ID} />;
}
