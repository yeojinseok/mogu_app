import React from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';

export const WebViewContainer = React.memo(
  ({webViewRef}: {webViewRef: React.RefObject<WebView>}) => {
    const handleOnMessage = e => {
      console.log(e.nativeEvent.data);
    };
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
        }}>
        <Text>asdfdsaf</Text>
        <WebView
          onMessage={handleOnMessage}
          ref={ref => {
            webViewRef.current = ref;
          }}
          source={{
            uri: 'http://localhost:3000/',
          }}
        />
      </View>
    );
  },
);
