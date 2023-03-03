/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
import {checkPermission} from './util/checkPermission';
import {onDisplayNotification} from './util/getNotification';

function App(): JSX.Element {
  const [imgURL, setImgURL] = useState<any>('');
  const defaultImg =
    'https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const getImageFrom = async () => {
    checkPermission();

    request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY).then(async result => {
      console.log(result);
      if (result === 'granted') {
        await launchImageLibrary({mediaType: 'mixed'}, res => {
          res.assets?.forEach(img => {
            setImgURL(img.uri);
          });
        });
      }
    });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hi</Text>
        <Image
          source={{uri: imgURL ? imgURL : defaultImg}}
          style={{width: 200, height: 200, borderRadius: 10}}
        />
        <Button title="Get image" onPress={getImageFrom} />
        <Button
          title="Get Notification"
          onPress={async () => await onDisplayNotification()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
