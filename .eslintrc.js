vmodule.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    "plugins": ["react", "@typescript-eslint", "prettier", "react-hooks"],
    "env": {
      "node": true,
      "browser": true,
      "jest": true,
      "es6": true
    },
    "rules": {
      "prettier/prettier": ["error", {
        "singleQuote": true,
        "endOfLine": "auto",
      }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prefer-template": "warn" 
    },
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    "parser": "@typescript-eslint/parser"
  };