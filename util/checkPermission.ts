import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Alert} from 'react-native';

export const checkPermission = () => {
  check(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          Alert.alert(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          Alert.alert('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          Alert.alert('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          Alert.alert('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      Alert.alert(error);
    });
};
