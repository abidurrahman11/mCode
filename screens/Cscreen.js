import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const ActivityIndicatorElement = () => {
  return <ActivityIndicator color="#009688" size="large" style={styles.activityIndicatorStyle} />
};

export default function Cscreen({ url }) {

  const [visible, setVisible] = useState(false);

  const webViewRef = useRef(null);

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
      };
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          <WebView
          ref={webViewRef}
              style={{flex: 1}}
              source={{uri: url}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
          />
          {visible ? <ActivityIndicatorElement /> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
