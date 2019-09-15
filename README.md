# React Toast Component 🍞 (Work in Progress)

https://www.npmjs.com/package/react-toast-component

A lightweight React toast notification component.

## Installation

`npm i react-toast-component`

## Options

| Prop        | Default          | Optional |
| ----------- | ---------------- | -------- |
| `isOpen`    | `false`          | `false`  |
| `animation` | `1s ease-in-out` | `true`   |

Examples: `.jsx`

#### Pure Component

```
<Toast
  isOpen={true}
/>
```

```
<Toast
  isOpen={false}
>
  <h1>Your custom elements can go in here.</h1>
</Toast>
```

#### With Redux

Connect toast to store.

`import { ToastContainer } from 'react-toast-component'`

toastActions.js

```

```

toastReducers.js

```

```

#### Without Redux (HOC)
