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

const DEFAULT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzZlAtTRwBK6ogHj2GFM60hssOE22O2KJ1FanVd69kCZbOJ38Opqek8GJ5GbSiuUPxT/exec";

const DEFAULT_FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/1MqY0zLilkT2CUckM-az3lXPfdCxHl8YANEIJPaH5_dE/viewform";

export const lookup = {
  appsScriptUrl: (import.meta.env.VITE_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL).trim(),
  feedbackFormUrl: (import.meta.env.VITE_FEEDBACK_FORM_URL || DEFAULT_FEEDBACK_FORM_URL).trim(),
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
