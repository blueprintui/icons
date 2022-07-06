
export default { 
  library: {
    entryPoints: ['./src/**/index.ts', './src/include.ts'],
    externals: [/^@blueprintui\/icons/, /^lit/],
  },
  drafter: {
    dist: './dist/drafter',
    schema: './dist/lib/custom-elements.json',
    examples: './src/**/*.examples.js',
    aliases: [
      { find: /^@blueprintui\/icons\/(.+)\.js$/, replacement: `./dist/lib/$1.js` },
      { find: /^@blueprintui\/icons\/include\/(.+)\.js$/, replacement: `./dist/lib/include/$1.js` },
      { find: /^@blueprintui\/layout\/(.+)\.css$/, replacement: `../layout/dist/lib/$1.css` },
      { find: /^@blueprintui\/tokens\/(.+)\.css$/, replacement: `../tokens/dist/lib/$1.css` },
      { find: /^@blueprintui\/themes\/(.+)\.css$/, replacement: `../themes/dist/lib/$1.css` },
    ],
    head: () => {
      return /* html */`
        <script type="module">
          import 'modern-normalize/modern-normalize.css';
          import '@blueprintui/layout/index.min.css';
          import '@blueprintui/tokens/index.min.css';
        </script>
        <style>
          body {
            padding: 24px;
            margin: 0;
            background: var(--bp-layer-canvas-background);
          }

          :not(:defined) {
            visibility: hidden;
          }
        </style>
      `;
    }
  }
};
