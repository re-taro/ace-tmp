module.exports = {
  specs: {
    ".tsx?$": "@markuplint/react-spec",
  },
  parser: {
    ".tsx?$": "@markuplint/jsx-parser",
  },
  extends: ["markuplint:recommended"],
};
