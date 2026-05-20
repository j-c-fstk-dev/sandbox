"use client";

import React, { useEffect } from "react";

const DonateForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.zeffy.com/embed/v2/zeffy-embed.js";
    script.async = true;
    script.onerror = () => {
      document.querySelectorAll("[data-zeffy-embed-fallback]").forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.display = "block";
        }
      });
    };
    document.body.appendChild(script);

    return () => {
      const scriptElement = document.querySelector(
        'script[src="https://www.zeffy.com/embed/v2/zeffy-embed.js"]'
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <>
      <div
        data-zeffy-embed
        data-form-url="/embed/donation-form/environmental-stewardship"
      />

      {/* Fallback iframe shown if the Zeffy script fails to load */}
      <div data-zeffy-embed-fallback style={{ display: "none" }}>
        <div className="relative w-full overflow-hidden" style={{ height: 450 }}>
          <iframe
            title="Donation form powered by Zeffy"
            src="https://www.zeffy.com/embed/donation-form/environmental-stewardship"
            allow="payment"          /* replaces the non-standard allowPaymentRequest */
            style={{
              position: "absolute",
              border: 0,
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DonateForm;