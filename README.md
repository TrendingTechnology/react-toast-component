# React Toast Component 🍞

https://www.npmjs.com/package/react-toast-component

A lightweight React toast notification component.

## Installation

`npm i react-toast-component`

## Options

| Prop        | Default          | Optional |
| ----------- | ---------------- | -------- |
| `isOpen`    | `false`          | `false`  |
| `animation` | `1s ease-in-out` | `true`   |

Example:

```
<Toast
  isOpen={}
  animation={}
/>
```

```
<Toast
  isOpen={}
  animation={}
>
  <h1>Your custom element</h1>
</Toast>
```

#### With Redux

connect toast to store

toastActions.js

```

```

toastReducers.js

```

```

#### Without Redux (HOC - wip)
