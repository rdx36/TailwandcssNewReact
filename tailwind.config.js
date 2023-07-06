/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      white: "#fff",
      "primary-persian-blue-25": "#f8f9fd",
      "primary-persian-blue-125": "#1334b3",
      "sand-100": "#233244",
      "secondary-iss-dark-blue-50": "#686687",
      "primary-persian-blue-100": "#153ac7",
      "red-25": "#fdf5f6",
      "red-100": "#e84754",
      "grey-light-75": "#ececec",
      "secondary-iss-dark-blue-100": "#030037",
      "grey-dark-150": "#939596",
      "grey-light-100": "#e6e6e6",
    },
    fontFamily: {
      "typeface-nunito-sans-body-1": "'Nunito Sans'",
    },
  },
  fontSize: {
    base: "16px",
    "13xl": "32px",
    xs: "12px",
    sm: "14px",
  },
};
export const corePlugins = {
  preflight: false,
};
