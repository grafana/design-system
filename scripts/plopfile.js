module.exports = function (plop) {
  plop.setGenerator('documentation', {
    description: 'Generate a @grafana/ui component documentation',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name (uppercase):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${__dirname}../../docs/05-Components/{{lowerCase componentName}}.mdx`,
        templateFile: 'templates/component.mdx.hbs',
      },
    ],
  });
};
