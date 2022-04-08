# RN Loader Container - WIP 🚧

Useful container to show animated views while you get and load the data to display.

<p float="left">
  <img src="https://user-images.githubusercontent.com/9607291/148542031-be04224d-8a74-4524-9ec0-5e8f760e3492.gif" width="250"/>
  <img src="https://user-images.githubusercontent.com/9607291/148541676-a9c7812b-488a-44ba-acae-e35f412b287a.gif" width="250"/>
</p>

## Commands

Install the dependency

```bash
npm i rn-loader-container
```

## Usage example

```jsx
import React from 'react';
import LoaderContainer from 'rn-loader-container';
import MockupItem from './components/MockupItem';
import {View} from 'react-native';

// MockupItem is the view to display with the effect inside the container.
const MyListScreen = () => {
  return (
    <View>
      <LoaderContainer total={2}>{MockupItem}</LoaderContainer>
    </View>
  );
}

export default MyListScreen;
```

## Properties

| Prop     | Description | Default       |
|----------|-------------|:-------------:|
| total    | Number of items. If the value is greater than 1, the content will be multiplied by that number.  | 1
| opacity  | The opacity to apply with the animation.                                                         | 0.5
| duration | Animation duration in milliseconds.                                                              | 700
