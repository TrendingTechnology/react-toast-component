const OPTIONS = (defaultOptions) => [
  defaultOptions,
  {
    isOpen: true,
    autoDismiss: false,
    description: "",
    hasCloseBtn: true,
    text: "No Dimiss",
    customChild: true
  },
  {
    isOpen: true,
    description:
      "Your action has been completed. This will go away in a few seconds.",
    autoDismiss: true,
    classNames: ["success"],
    text: "Success"
  },
  {
    isOpen: true,
    description:
      "Uh oh. There's something wrong. To close this toast, press x.",
    classNames: ["error"],
    hasCloseBtn: true,
    autoDismiss: false,
    text: "Error"
  },
  {
    isOpen: true,
    description:
      "Some really great info is in here. This will go away in a few seconds.",
    autoDismiss: true,
    classNames: ["info"],
    text: "Info"
  },
  {
    isOpen: true,
    description:
      "Uh oh. There might be something wrong. This will go away in a few seconds.",
    autoDismiss: true,
    classNames: ["warning"],
    text: "Warning"
  }
]

export default OPTIONS;