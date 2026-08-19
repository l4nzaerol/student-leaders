/**
 * Update these values for your seminar.
 * Drop the official e-cert template at public/certificate-template.png
 * and set `useCustomTemplate` to true. Name placement is in fractions of
 * the template width/height so it stays aligned at any download size.
 */
export const seminar = {
  title: "Student Leaders' Investiture",
  subtitle: "Certificate of Participation",
  dateLabel: "Youth Month 2026",
  organization: "CYSDO",
};

export const lookup = {
  /** Deployed Apps Script web app URL ending in /exec */
  appsScriptUrl: import.meta.env.VITE_APPS_SCRIPT_URL ?? "",
  /** Public Google Form respondents already submitted */
  feedbackFormUrl: import.meta.env.VITE_FEEDBACK_FORM_URL ?? "",
};

export const certificateLayout = {
  /** Set true after you add public/certificate-template.png */
  useCustomTemplate: false,
  templateUrl: "/certificate-template.png",
  /** Landscape certificate size in CSS pixels (also PNG export size). */
  width: 1400,
  height: 990,
  name: {
    x: 0.5,
    y: 0.5,
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: 64,
    color: "#1a2744",
    maxWidth: 0.78,
  },
};
