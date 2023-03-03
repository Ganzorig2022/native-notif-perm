npx react-native run-ios
OR

npm run ios

ios/Podfile ruu

```js
Amgalan — Today at 10:22
permissions_path = '../node_modules/react-native-permissions/ios'
target 'homework' do
  config = use_native_modules!
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-PhotoLibraryAddOnly', :path => "#{permissions_path}/PhotoLibraryAddOnly"
```

https://github.com/react-native-image-picker/react-native-image-picker
https://github.com/zoontek/react-native-permissions
