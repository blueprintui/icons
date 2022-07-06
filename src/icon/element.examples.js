import { shapes } from '../../dist/lib/shapes/shapes.js';

export const metadata = {
  name: 'icon',
  elements: ['bp-icon']
};

export function example() {
  return /* html */`
<script type="module">
  import '@blueprintui/icons/include.js';
  import '@blueprintui/icons/shapes/user.js';
</script>
<div bp-layout="inline gap:md">
  <bp-icon></bp-icon>
  <bp-icon shape="user"></bp-icon>
</div>`;
}

// export function sizes() {
//   return /* html */`
// <script type="module">
//   import '@blueprintui/components/include.js';
//   import '@blueprintui/icons/home.js';
// </script>
// <div bp-layout="inline gap:md">
//   <bp-icon shape="home" size="sm"></bp-icon>
//   <bp-icon shape="home" size="md"></bp-icon>
//   <bp-icon shape="home" size="lg"></bp-icon>
//   <bp-icon shape="home" size="xl"></bp-icon>

//   <bp-icon shape="home" size="16"></bp-icon>
//   <bp-icon shape="home" size="24"></bp-icon>
//   <bp-icon shape="home" size="48"></bp-icon>
//   <bp-icon shape="home" size="64"></bp-icon>
// </div>
//   `;
// }

// export function status() {
//   return /* html */`
// <script type="module">
//   import '@blueprintui/components/include.js';
//   import '@blueprintui/icons/user.js';
// </script>
// <div bp-layout="inline gap:md">
//   <bp-icon shape="user" size="lg"></bp-icon>
//   <bp-icon shape="user" status="accent" size="lg"></bp-icon>
//   <bp-icon shape="user" status="success" size="lg"></bp-icon>
//   <bp-icon shape="user" status="warning" size="lg"></bp-icon>
//   <bp-icon shape="user" status="danger" size="lg"></bp-icon>
//   <bp-icon shape="user" size="lg" solid></bp-icon>
//   <bp-icon shape="user" status="accent" size="lg" solid></bp-icon>
//   <bp-icon shape="user" status="success" size="lg" solid></bp-icon>
//   <bp-icon shape="user" status="warning" size="lg" solid></bp-icon>
//   <bp-icon shape="user" status="danger" size="lg" solid></bp-icon>
// </div>
// `;
// }

// export function direction() {
//   return /* html */`
// <script type="module">
//   import '@blueprintui/components/include.js';
//   import '@blueprintui/icons/image.js';
// </script>
// <div bp-layout="inline gap:md">
//   <bp-icon shape="image" size="lg" direction="up"></bp-icon>
//   <bp-icon shape="image" size="lg" direction="left"></bp-icon>
//   <bp-icon shape="image" size="lg" direction="down"></bp-icon>
//   <bp-icon shape="image" size="lg" direction="right"></bp-icon>
// </div>
// `;
// }

// export function flip() {
//   return /* html */`
// <script type="module">
//   import '@blueprintui/components/include.js';
//   import '@blueprintui/icons/image.js';
// </script>
// <div bp-layout="inline gap:md">
//   <bp-icon shape="image" size="lg"></bp-icon>
//   <bp-icon shape="image" size="lg" flip="horizontal"></bp-icon>
// </div>
// `;
// }

export function all() {
  return /* html */`
<script type="module">
  import '@blueprintui/icons/include.js';
  ${shapes.map(s => `import '@blueprintui/icons/shapes/${s}.js'`).join('\n')}
</script>
<div bp-layout="inline gap:md">
  ${shapes.map(s => /* html */`<bp-icon shape="${s}"></bp-icon>`).join('\n')}
</div>
`;
}

export function solid() {
  return /* html */`
<script type="module">
  import '@blueprintui/icons/include.js';
  ${shapes.map(s => `import '@blueprintui/icons/shapes/${s}.js'`).join('\n')}
</script>
<div bp-layout="inline gap:md">
  ${shapes.map(s => /* html */`<bp-icon shape="${s}" type="solid"></bp-icon>`).join('\n')}
</div>
`;
}

export function badge() {
  return /* html */`
<script type="module">
  import '@blueprintui/icons/include.js';
  ${shapes.map(s => `import '@blueprintui/icons/shapes/${s}.js'`).join('\n')}
</script>
<div bp-layout="inline gap:md">
  ${shapes.map(s => /* html */`
  <bp-icon shape="${s}" badge="accent"></bp-icon>
  <bp-icon shape="${s}" badge="success"></bp-icon>
  <bp-icon shape="${s}" badge="warning"></bp-icon>  
  <bp-icon shape="${s}" badge="danger"></bp-icon>
`).join('\n')}
</div>
`;
}

export function size() {
  return /* html */`
<script type="module">
  import '@blueprintui/icons/include.js';
  ${shapes.map(s => `import '@blueprintui/icons/shapes/${s}.js'`).join('\n')}
</script>
<div bp-layout="inline gap:md">
  ${shapes.map(s => /* html */`
  <bp-icon shape="${s}" size="sm"></bp-icon>
  <bp-icon shape="${s}" size="md"></bp-icon>
  <bp-icon shape="${s}" size="lg"></bp-icon>  
  <bp-icon shape="${s}" size="xl"></bp-icon>
`).join('\n')}
</div>
`;
}