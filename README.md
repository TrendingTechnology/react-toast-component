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
  isOpen
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

`toastReducer.js` : Add the reducer to your redux store.

```
import { ToastReducer } from 'react-toast-component'
```

```
combineReducers({
  ...yourExistingReducers,
  ToastReducer,
})
```

```
import { ToastContainer } from 'react-toast-component'
```

```
<ToastContainer
  isOpen={false}
>
  <h1>Your custom elements can go in here.</h1>
</ToastContainer>
```

`toastActions.js` : Dispatch action when toast should display.

```
import { ToastActions } from 'react-toast-component'
```

#### Without Redux (HOC)
