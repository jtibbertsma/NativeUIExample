/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from './MapView';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MapView style={{ flex: 1 }} />
    );
  }
}
