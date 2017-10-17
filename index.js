module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "jest": true
  },
  "rules": {
    "no-extra-semi": 1,
    "semi": [1, "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-curly-brace-presence": 0,
    "function-paren-newline": 0,
    "comma-dangle": [1, "never"]
  }
}
