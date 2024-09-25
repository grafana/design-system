module.exports = function (plop) {
  // A helper to add special characters (e.g., brackets) to a string
  plop.setHelper('append', (str) => str);

  plop.setGenerator('documentation', {
    description: 'Generate a @elastiflow/epic-ui component documentation',
    prompts: [
      {
        type: 'list',
        name: 'type',
        choices: () => [
          { name: 'Component documentation', value: 'component' },
          { name: 'Template', value: 'template' },
        ],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name (uppercase):',
        when: ({ type }) => type === 'component',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Storybook path to the component (the part after "path=" in URL):',
        when: ({ type }) => type === 'component',
      },
      // Template actions
      {
        type: 'input',
        name: 'templateName',
        message: 'Template name (uppercase):',
        when: ({ type }) => type === 'template',
      },
    ],
    actions: ({ type }) =>
      type === 'component'
        ? [
            {
              type: 'add',
              path: `${__dirname}../../docs/05-Components/{{dashCase componentName}}.mdx`,
              templateFile: 'templates/component.mdx.hbs',
            },
          ]
        : [
            {
              type: 'add',
              path: `${__dirname}../../docs/07-Templates/{{dashCase templateName}}.mdx`,
              templateFile: 'templates/template.mdx.hbs',
            },
            {
              type: 'add',
              path: `${__dirname}../../src/components/templates/{{properCase templateName}}/{{properCase templateName}}.tsx`,
              templateFile: 'templates/TemplateComponent.tsx.hbs',
            },
            {
              type: 'add',
              path: `${__dirname}../../src/components/templates/{{properCase templateName}}/DataProvider.tsx`,
              templateFile: 'templates/DataProvider.tsx.hbs',
            },
            {
              type: 'add',
              path: `${__dirname}../../src/components/templates/{{properCase templateName}}/types.ts`,
              templateFile: 'templates/types.ts.hbs',
            },
          ],
  });
};
