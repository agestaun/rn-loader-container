# RN Loader Container

Useful container to show animated views while you get and load the data to display.

https://user-images.githubusercontent.com/9607291/148540925-f18a7ae4-d652-4213-b58f-974ac9b7f830.mov

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
      <LoaderContainer total={4}>{MockupItem}</LoaderContainer>
    </View>
  );
}

export default MyListScreen;
```

## Properties

// TODO
