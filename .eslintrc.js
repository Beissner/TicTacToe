// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["prettier", "react", "jest"],
  rules: {
    "prettier/prettier": "warn",
  },
};
