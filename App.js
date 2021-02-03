import React, { Component } from 'react';
import  WebView  from 'react-native-webview';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://aashish2008.github.io/Racing-Bike-MOBILE/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
