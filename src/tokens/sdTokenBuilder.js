const StyleDictionary = require('style-dictionary');
//const { minifyDictionary } = StyleDictionary.formatHelpers;
function minifyDictionary(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty('value')) {
    return obj.value;
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        function camelize(str) {
          return str.replace('-', ' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
          });
        }
        const camelCaseName = camelize(name);
        toRet[camelCaseName] = minifyDictionary(obj[name]);
      }
    }
  }
  return toRet;
}

StyleDictionary.registerFormat({
  name: 'javascript/nested',
  formatter: function (dictionary) {
    return `export default ${JSON.stringify(minifyDictionary(dictionary.tokens), null, 2)};`;
  },
});

const sd = StyleDictionary.extend({
  source: ['tokens/output.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/',
      files: [
        {
          destination: '../src/tokens/tokens.js',
          format: 'javascript/nested',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
