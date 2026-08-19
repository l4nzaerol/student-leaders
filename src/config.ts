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

const DEFAULT_FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/1MqY0zLilkT2CUckM-az3lXPfdCxHl8YANEIJPaH5_dE/viewform";

/** Spreadsheet ID and sheet GID from the responses spreadsheet URL */
const SPREADSHEET_ID = "1_G75nQ0Z_pbCfmitZMCBfs_E2zcvTYYw0E3PgU9NsQE";
const SHEET_GID = "0";

export const lookup = {
  spreadsheetId: (import.meta.env.VITE_SPREADSHEET_ID || SPREADSHEET_ID).trim(),
  sheetGid: (import.meta.env.VITE_SHEET_GID || SHEET_GID).trim(),
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
