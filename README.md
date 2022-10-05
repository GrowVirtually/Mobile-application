## How to setup the environment

1. Clone the repo

2. Create a file named **.env** on root direcotory.

3. Update the **.env** file with below info according to your workspace.
``` 
  HOST=192.168.1.101
  PORT=3000
  PROTOCOL=https

  HOST_PORT=https://grovi-backend.herokuapp.com

  GOOGLE_API_KEY=MY_API_KEY_HERE

```

4. Create the following file.
```
  /android/app/src/main/res/values/api-keys.xml
```

5. Add this code and replace API key with your Google API key. [How to create Google API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
```
  <?xml version="1.0" encoding="utf-8"?>
  <resources>
      <string name="google_api_key">MY_API_KEY_HERE</string>    
  </resources>
```

6. Run these commands after adding your API key.
```
  sudo yarn insall
  sudo yarn react-native start --reset-cache
  sudo yarn react-native run-android
```
