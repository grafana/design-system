import { createTheme } from '@grafana/data';
import { join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const { spacing, colors: _colors, typography: _typography, shape } = createTheme({ colors: { mode: 'dark' } });

const { emphasize, getContrastText, gradients, ...colors } = _colors;
const { pxToRem, ...typography } = _typography;

const rootTokens = {
  spacing: spacing.gridSize,
  borderRadius: shape.radius.default,
  ...gradients,
  ...typography,
  ...colors,
};

const tokensToCss = (object: object, base = '-'): string =>
  Object.entries(object).reduce((css, [key, value]) => {
    let newBase = base + `-${key}`;
    if (typeof value !== 'object') {
      return css + newBase + `: ${value};\n`;
    }
    return css + tokensToCss(value, newBase);
  }, '');

const saveCSSFile = async (outFile: string, tokens: string) => {
  try {
    await writeFile(outFile, tokens);
  } catch (e) {
    console.log('There was an error while saving a file.\n', e);
  }
};

try {
  const outFile = join(__dirname, '..', 'src', 'css', 'theme.css');

  const rootCSSVariables = tokensToCss(rootTokens);
  let cssContent = `:root {\n${rootCSSVariables.replaceAll('--', '  --')}}\n`;

  saveCSSFile(outFile, cssContent);
} catch (e) {
  console.log('Provide a correct argument - a relative path to design tokens.\n', e);
}
