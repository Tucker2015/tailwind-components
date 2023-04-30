# React Tailwind Components

## Installation

#### NPM

```bash
npm install @kevtucker/tailwind-components
```

#### Yarn

```bash
yarn add @kevtucker/tailwind-components
```

#### Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

- classnames
- tailwindcss

#### Tailwind Config

This package requires the following tailwind config to be added to your project:

```js
// tailwind.config.js

module.exports = {
  // ...
  content: ['./node_modules/@kevtucker/tailwind-components/dist/**/*.js'],
  // ...
};
```

## Toast Component Usage

Inside your \_app.tsx or \_app.js file, wrap your app with the ToastProvider component.

```tsx
import { ToastProvider } from '@kevtucker/tailwind-components';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
```

Then, inside any component, you can use the useToast hook to access the toast functionality.

```tsx
import { useToast } from '@kevtucker/tailwind-components';

function MyComponent() {
  const { showToast } = useToast();

  return (
    <>
      <button onClick={() => showToast('Hello World!', 'success')}>
        Show Toast
      </button>
    </>
  );
}

export default MyComponent;
```
