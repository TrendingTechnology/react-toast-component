# React Toast Component 🍞 (Work in Progress)

https://www.npmjs.com/package/react-toast-component

A lightweight React toast notification component.

## Installation

`npm i react-toast-component`

## Options

| Prop          | Default | Optional |
| ------------- | ------- | -------- |
| `isOpen`      | `false` | `true`   |
| `hasCloseBtn` | `true`  | `true`   |
| `duration`    | `3000`  | `true`   |
| `title`       |         | `true`   |
| `description` |         | `true`   |
| `children`    |         | `true`   |

Examples: `.jsx`

#### Pure Component

```
<Toast
  isOpen
  title="Successfully Added"
  description="Your item was successfully added to your cart."
/>
```

```
<Toast
  isOpen={false}
  duration={2000}
  title="Successfully Deleted"
  description="Your item was successfully deleted from your cart."
>
  <h1>Add your own custom elements in here.</h1>
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

Add `ToastContainer` with optional children.

```
import { ToastContainer } from 'react-toast-component'
```

```
<ToastContainer />
```

```
<ToastContainer>
  <h1>Your custom elements can go in here.</h1>
</ToastContainer>
```

`toastActions.js` : Dispatch actions to update toast properties.

```
import { ToastActions } from 'react-toast-component'
```

```
toastActions.showToast({
  title: 'Added',
  description: 'Your item was added.',
  duration: '5000',
});
```

#### Features Coming Soon

- #### Without Redux (HOC)
