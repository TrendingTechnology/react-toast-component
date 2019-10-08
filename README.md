# React Toast Component

<img src="https://img.shields.io/npm/dt/react-toast-component.svg" /> <img src="https://img.shields.io/npm/dw/react-toast-component.svg" />

A lightweight React toast notification component.

<i>Default:</i>
<img src="http://sioanis.com/toast.png?" width="400px" />

<b>Live Demo:</b> http://sioanis.com/react-toast-component/

(npm: [NPM](https://sue.fyi/NPM)
github: [Github](https://github.com/tumfoodery/react-toast-component/blob/master/README.md))

## Installation

Prerequisite: <i>React version 16.8+</i>

`npm i react-toast-component`

## Options

| Prop             | Default | Type       | Description                                                                        |
| ---------------- | ------- | ---------- | ---------------------------------------------------------------------------------- |
| `isOpen`         | `false` | `boolean`  | Triggers the notification to open.                                                 |
| `hasCloseBtn`    | `false` | `boolean`  | Adds/hides close button from toast.                                                |
| `hasAutoDismiss` | `true`  | `boolean`  | Auto dismisses/keeps toast in view.                                                |
| `closeCallback`  | `null`  | `function` | Triggers after toast closes.                                                       |
| `duration`       | `2000`  | `number`   | Duration of toast before it dismissed.                                             |
| `title`          |         | `string`   | Toast header.                                                                      |
| `description`    |         | `string`   | Toast description.                                                                 |
| `children`       |         | `node`     | Custom elements to add inside toast.                                               |
| `classNames`     | `[]`    | `array`    | Class names to add to the toast. (existing: `success`, `info`, `warning`, `error`) |

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

Add toast with optional custom elements.

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

#### Features Coming Soon:

- #### ToastContainer
- #### Redux actions and reducer
- #### Without Redux (HOC)
