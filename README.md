# React Toast Component

https://www.npmjs.com/package/react-toast-component

A lightweight React toast notification component.

<i>Default:</i>
<img src="http://sioanis.com/toast.png?" width="400px" />

## Installation

`npm i react-toast-component`

## Options

| Prop            | Default | Optional | Description                                                                                 |
| --------------- | ------- | -------- | ------------------------------------------------------------------------------------------- |
| `isOpen`        | `false` | `true`   | Boolean triggers the notification to open.                                                  |
| `hasCloseBtn`   | `true`  | `true`   | Boolean adds/hides close button from toast.                                                 |
| `autoDismiss`   | `true`  | `true`   | Boolean auto dismisses/keeps toast in view.                                                 |
| `closeCallback` | `null`  | `true`   | Function triggered after toast closes.                                                      |
| `duration`      | `3000`  | `true`   | Number duration of toast before it dismissed.                                               |
| `title`         |         | `true`   | String for toast header.                                                                    |
| `description`   |         | `true`   | String for toast description.                                                               |
| `children`      |         | `true`   | Elements to add inside toast.                                                               |
| `classNames`    | `[]`    | `true`   | Array of class names to add to the toast. (existing: `success`, `info`, `warning`, `error`) |

Examples: `.jsx`

<i>Success:</i>
<img src="http://sioanis.com/toast-success.png" width="400px" />

<i>Error:</i>
<img src="http://sioanis.com/toast-error.png" width="400px" />

<i>Info:</i>
<img src="http://sioanis.com/toast-info.png" width="400px" />

<i>Warning:</i>
<img src="http://sioanis.com/toast-warning.png" width="400px" />

#### Pure Component

```
<Toast
  isOpen={isOpen}
  title="App Notification 🍞"
  description="Dunc the Lunk, thick as a castle wall. Your action has been completed."
  autoDismiss={false}
  duration={TOAST_NO_REDUX_DURATION}
    closeCallback={() => setToast(false)}
    classNames={["success"]}
/>
```

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

#### With Redux (wip)

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
- #### Swipe gestures
- #### Drag
- #### Multi-notifications
