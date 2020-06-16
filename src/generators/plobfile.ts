// plopfile.ts
import { NodePlopAPI } from "plop";

module.exports = (plop: NodePlopAPI): void => {
  plop.setGenerator("component", {
    description: "create component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your components name?"
      },
    ],
    actions: [
      // Typescript Component
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "components/Component.tsx.hbs",
      },
      // Typescript Sanity Tests
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "components/Component.test.tsx.hbs",
      },
      // Storybook story
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "components/Component.stories.tsx.hbs",
      },
      // New Component Index Page
      {
        type: "add",
        path: "../components/{{pascalCase name}}/index.ts",
        templateFile: "components/index.ts.hbs",
      },
      // Components Index Page
      {
        type: "add",
        path: "../components/index.ts",
        templateFile: "index.ts.hbs",
        skipIfExists: true,
      },
      // Add Component to index
      {
        type: "append",
        path: "../components/index.ts",
        template: "export { {{pascalCase name}} } from \"./{{pascalCase name}}\";\nexport type { {{pascalCase name}}Props } from \"./{{pascalCase name}}\";\n",
      },
    ]
  });
};