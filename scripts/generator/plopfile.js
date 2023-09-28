module.exports = function (plop) {
  plop.setGenerator('documentation', {
    description: 'Generate a @grafana/ui component documentation',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'docs/05-Components/{{properCase name}}.js',
        templateFile: 'scripts/generator/templates/component.mdx.hbs',
      },
    ],
  });
};
