# React Toast Component 
<img src="https://img.shields.io/npm/dt/react-toast-component.svg" /> <img src="https://img.shields.io/npm/dw/react-toast-component.svg" />

A lightweight React toast notification component. 

<i>Default:</i>
<img src="http://sioanis.com/toast-default.png" width="400px" />

<b>Live Demo:</b> http://sioanis.com/react-toast-component/

(npm: [NPM](https://www.npmjs.com/package/react-toast-component)
github: [Github](https://github.com/tumfoodery/react-toast-component/blob/master/README.md))

## Installation

Prerequisite: <i>React version 16.8+</i>

`npm i react-toast-component`

## Options

| Prop             | Default | Optional | Description                                                                                 |
| ---------------- | ------- | -------- | ------------------------------------------------------------------------------------------- |
| `isOpen`         | `false` | `true`   | Boolean triggers the notification to open.                                                  |
| `hasCloseBtn`    | `false` | `true`   | Boolean adds/hides close button from toast.                                                 |
| `hasAutoDismiss` | `true`  | `true`   | Boolean auto dismisses/keeps toast in view.                                                 |
| `closeCallback`  | `null`  | `true`   | Function triggered after toast closes.                                                      |
| `duration`       | `2000`  | `true`   | Number duration of toast before it dismissed.                                               |
| `title`          |         | `true`   | String for toast header.                                                                    |
| `description`    |         | `true`   | String for toast description.                                                               |
| `children`       |         | `true`   | Elements to add inside toast.                                                               |
| `classNames`     | `[]`    | `true`   | Array of class names to add to the toast. (existing: `success`, `info`, `warning`, `error`) |

Examples: `.jsx`

### Pure Component

```
import Toast from 'react-toast-component'
```
```
<Toast
  isOpen
  title="Successfully Added"
  description="Your item was successfully added to your cart."
/>
```

Configure your options.
```
<Toast
  isOpen={isOpen}
  title="App Notification 🍞"
  description="Dunc the Lunk, thick as a castle wall. Your action has been completed."
  autoDismiss={false}
  duration={3000}
  closeCallback={() => setToast(false)}
  classNames={["success"]}
/>
```

<i>success:</i>
<img src="http://sioanis.com/toast-success.png" width="400px" />

<i>error:</i>
<img src="http://sioanis.com/toast-error.png" width="400px" />

<i>info:</i>
<img src="http://sioanis.com/toast-info.png" width="400px" />

<i>warning:</i>
<img src="http://sioanis.com/toast-warning.png" width="400px" />

Add options with custom elements.
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

### With Redux (Coming Soon)

Connect toast to store.

`toastReducer.js` : Add the reducer to your redux store.

```
import toastReducer from 'react-toast-component'
```

```
combineReducers({
  ...yourExistingReducers,
  ToastReducer,
})
```

Add `ToastContainer` with optional children.

```
import ToastContainer from 'react-toast-component'
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
import toastActions from 'react-toast-component'
```

```
toastActions.showToast({
  title: 'Added',
  description: 'Your item was added.',
  duration: '5000',
});
```

#### Features Coming Soon

- #### ToastContainer
- #### Redux actions and reducer
- #### Without Redux (HOC)
- #### Swipe gestures
- #### Drag
- #### Multi-notifications
