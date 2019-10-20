# React Toast Component

<img src="https://img.shields.io/npm/dt/react-toast-component.svg" /> <img src="https://img.shields.io/npm/dw/react-toast-component.svg" /> [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A lightweight React toast notification component.

<img src="http://sioanis.com/demo-.gif" width="400px" />

<b>Live Demo:</b> http://toast.monster

(npm: [NPM](https://sue.fyi/NPM)
github: [Github](https://github.com/tumfoodery/react-toast-component/blob/master/README.md))

## Installation

Prerequisite: <i>React version 16.8+</i>

`npm i --save react-toast-component`


## Options

| Prop             | Default | Type       | Description                                                                        |
| ---------------- | ------- | ---------- | ---------------------------------------------------------------------------------- |
| `isOpen`         | `false` | `boolean`  | Triggers the notification to open.                                                 |
| `hasCloseBtn`    | `false` | `boolean`  | Adds/hides close button from toast.                                                |
| `hasAutoDismiss` | `true`  | `boolean`  | Auto dismisses/keeps toast in view.                                                |
| `closeCallback`  | `null`  | `function` | Triggers after toast closes.                                                       |
| `duration`       | `2000`  | `number`   | Duration of toast before it's dismissed.                                             |
| `title`          |         | `string`   | Toast header.                                                                      |
| `description`    |         | `string`   | Toast description.                                                                 |
| `children`       |         | `node`     | Custom elements to add inside toast.                                               |
| `classNames`     | `[]`    | `array`    | Class names to add to the toast. (existing: `success`, `info`, `warning`, `error`) |


## Usage 

```
import React, { useState } from 'react';
import Toast from 'react-toast-component';
import './App.css';

function App() {
  const [isOpen, setToast] = useState(true);
  return (
    <div className="App">
      <Toast
        isOpen={isOpen}
        autoDismiss={false}
        closeCallback={() => setToast(false)}
        hasCloseBtn
        description="There's some great info here."
        title="App Notification!!"
        classNames={['info']}
      />
    </div>
  );
}

export default App;
```

Optional custom elements:
```
<Toast
  isOpen={isOpen}
  autoDismiss={false}
  closeCallback={() => setToast(false)}
  hasCloseBtn
  description="There's some great info here."
  title="App Notification!!"
  classNames={['info']}
/>
  <h1>Add your own custom elements in here.</h1>
</Toast>
```
Default:

<img src="http://sioanis.com/toast.png" width="400px" />

Optional built-in class names:

`success`

<img src="http://sioanis.com/toast-success.png" width="400px" />

`error`

<img src="http://sioanis.com/toast-error.png" width="400px" />

`info`

<img src="http://sioanis.com/toast-info.png" width="400px" />

`warning`

<img src="http://sioanis.com/toast-warning.png" width="400px" />

