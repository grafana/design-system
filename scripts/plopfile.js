module.exports = function (plop) {
  plop.setGenerator('documentation', {
    description: 'Generate a @grafana/ui component documentation',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name (uppercase):',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Storybook path to the component (the part after "path=" in URL):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${__dirname}../../docs/05-Components/{{dashCase componentName}}.mdx`,
        templateFile: 'templates/component.mdx.hbs',
      },
    ],
  });
};
