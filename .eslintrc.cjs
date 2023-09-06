/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  plugins: ["unused-imports", "strict-dependencies"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    yoda: "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "no-multi-spaces": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": ["error", { int32Hint: false }],
    "func-style": ["error", "expression"],
    "prefer-arrow-callback": "error",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["TemplateLiteral *"],
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "import/newline-after-import": [
      "error",
      {
        count: 1,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom,next/**}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "strict-dependencies/strict-dependencies": [
      "error",
      [
        /**
         * Example:
         * Limit the dependencies in the following directions
         * app -> providers -> features -> domains
         */
        {
          module: "src/provider",
          allowReferenceFrom: ["src/app"],
          allowSameModule: true,
        },
        {
          module: "src/feature",
          allowReferenceFrom: ["src/provider"],
          allowSameModule: false,
        },
        {
          module: "src/domain",
          allowReferenceFrom: ["src/feature"],
          allowSameModule: false,
        },
      ],
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/space-infix-ops": ["error", { int32Hint: false }],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["TemplateLiteral *", "TSTypeParameterInstantiation"],
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/jsx-boolean-value": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "never",
        attributes: true,
        children: true,
      },
    ],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: false,
        checkInlineFunction: false,
      },
    ],
    "react/jsx-newline": [
      "error",
      {
        prevent: true,
      },
    ],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: "ignore",
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        locale: "auto",
      },
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/self-closing-comp": "error",
  },
};
