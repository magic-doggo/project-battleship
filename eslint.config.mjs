import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: ["jest"],
    extends: ["plugin:jest/recommended"],
    env: {
      jest: true,
    }
  },
  pluginJs.configs.recommended,
];


// remember to add jest to eslint