# RN Loader Container

Useful container to show animated views while you get and load the data to display.

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

// MockupItem is the to display with the effect.
const MyListScreen = () => {
  return (
    <View>
      <LoaderContainer total={4}>{MockupItem}</LoaderContainer>
    </View>
  );
}

export default MyListScreen;
```

## Properties

// TODO
