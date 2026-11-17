// PostHog analytics: page views, clicks and session replays.
// Next.js runs this file in the browser before the app starts.
// Dashboard: https://us.posthog.com
import posthog from "posthog-js";

// Project API key. It is a public key, designed to be shipped to browsers.
const POSTHOG_KEY = "phc_zWcPkicqVKeie9ku43kxwh8ztRjip4JRAMcZ2ptpVkSY";

// Skip local previews so testing does not count as real visits.
// To test locally, run localStorage.setItem("ph_test", "1") in the browser console.
function shouldTrack(): boolean {
  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  if (!isLocal) return true;
  try {
    return localStorage.getItem("ph_test") === "1";
  } catch {
    return false;
  }
}

const CASE_STUDY_PAGES: Record<string, string> = {
  "/fitness-ai": "Fitness AI",
  "/hollis": "Hollis",
  "/pill-pal": "Pill Pal",
  "/swiftcart": "Swiftcart",
  "/pockit": "Pockit",
};

// Gives the clicks recruiters care about clear names in the dashboard.
// Every other click is still recorded by PostHog's autocapture.
function trackKeyClicks() {
  document.addEventListener(
    "click",
    (event) => {
      const link = (event.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!link || !href) return;

      const from_page = window.location.pathname;
      const label = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 80);

      if (href.startsWith("/cv/")) {
        posthog.capture("cv_downloaded", { from_page });
      } else if (href.startsWith("mailto:")) {
        posthog.capture("email_clicked", { from_page });
      } else if (href.includes("linkedin.com")) {
        posthog.capture("linkedin_clicked", { from_page });
      } else if (href.includes("wa.me")) {
        posthog.capture("whatsapp_clicked", { from_page });
      } else if (href.includes("behance.net/gallery/")) {
        const project = href.split("/gallery/")[1]?.split("/")[1]?.replace(/-/g, " ") ?? href;
        posthog.capture("behance_project_opened", { project, from_page, label });
      } else if (href.includes("behance.net")) {
        posthog.capture("behance_profile_opened", { from_page });
      } else if (CASE_STUDY_PAGES[href] && href !== from_page) {
        posthog.capture("case_study_opened", { project: CASE_STUDY_PAGES[href], from_page, label });
      } else if (/^https?:\/\//.test(href) && !href.includes(window.location.hostname)) {
        posthog.capture("external_link_clicked", { url: href, from_page, label });
      }
    },
    { capture: true },
  );
}

if (shouldTrack()) {
  posthog.init(POSTHOG_KEY, {
    // Sent through this site (see rewrites in next.config.ts) so ad blockers do not drop visits.
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    // Recommended defaults: page views on every page change, page leave, autocapture.
    defaults: "2026-08-30",
    // Session replay: hide anything typed into inputs.
    session_recording: {
      maskAllInputs: true,
    },
    // Only create person profiles for visitors who are identified; keeps usage low.
    person_profiles: "identified_only",
  });
  trackKeyClicks();
}
