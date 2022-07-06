import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { readdir } from 'fs/promises';
import { resolve }  from 'path';

const files = (await readdir('./svgs')).filter(f => f.includes('.svg'));
const icons = { };
files.forEach(file => {
  const svg = readFileSync(resolve('./svgs', file), 'utf8').toString().replace('<svg height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">', '').replace('</svg>', '');
  const solid = file.includes('-solid.svg');
  const name = file.replace('./svgs/', '').replace('-line.svg', '').replace('-solid.svg', '');
  icons[name] = { ...icons[name], name };
  solid ? icons[name].solid = svg : icons[name].default = svg;
});

const names = Object.keys(icons).map(key => icons[key].name);

if (!existsSync('./src/shapes')) {
  mkdirSync('./src/shapes');
}

Object.keys(icons).forEach(key => {
  const icon = icons[key];
  const file = `./src/shapes/${icon.name}.ts`;
  writeFileSync(file, generateIcon(icon));
});

writeFileSync('./src/shapes/shapes.ts', `export const shapes = [${names.map(n => `'${n}'`).join(', ')}];`);

writeFileSync('./src/shapes/index.ts', `
export * from './shapes.js';
${Object.keys(icons).map(key => `export * from './${icons[key].name}.js';`).join('\n')}`);

function kebabCaseToCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase());
}

function generateIcon(icon) {
  const name = kebabCaseToCamelCase(icon.name);
  return `import { IconService, IconDefinition } from '@blueprintui/icons/internals';
export const ${name}Icon = {
  name: '${icon.name}',
  type: {
    default: '${icon.default}',${icon.solid ? `\n    solid: '${icon.solid}'` : ''}
  }
};

declare module '@blueprintui/icons' {
  interface IconRegistry {
    ['${icon.name}']: IconDefinition;
  }
}

IconService.add(${name}Icon);
`;
}