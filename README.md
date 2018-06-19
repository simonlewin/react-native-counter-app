# Counter App

The counter app is the first app we build on the course. It is a one-screen app which is intended to cover the fundamentals of a React Native app.

## Wireframe

The following wireframe should be used as a guide when building the app.

<img src="wireframe.png" height="500">

## Requirements

The app should:

- Display a title `'The Count'` and a picture of Count von Count (image files can be found in the [assets](./assets/) folder).
- Render the counter value and controls:
  - The counter value should be flanked on either side by an increment and decrement button.
  - The increment button should add one to the counter value when pressed.
  - The decrement button should subtract one from the counter value when pressed.
  - The counter value should only display a value from 0 - 10.
  - If the counter value is at its lower or upper bound, the respective button should be disabled, so the value cannot exceed its bounds.
- Every time the counter is incremented or decremented, the operation should be added to a history list:
  - Each history item in the list should display:
    - the time when the operation occurred
    - the type of operation (Increment/Decrement)
    - the counter values before & after the operation.
  - The most recent operation should be shown at the top of the history list.
  - If the history list becomes longer than its container, it should be scrollable.
- The headings and buttons should be styled using the primary theme colour `#5a2961`.

## Extras

These requirements are not part of the core project, but can be implemented as enhancements.

- A button should be present to reset the counter value.
- A button should be present to reset the history list.
- When the app is restarted, it should remember the previous counter value, and all history. (Hint: the app should use Redux, and [Redux Persist](https://github.com/rt2zz/redux-persist))

## Completed app

The completed app should resemble the following:

![](./demo.gif)

The source code for the completed app can be found [here](https://github.com/studiozeffa/counter-app).