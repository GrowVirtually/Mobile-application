import React from 'react';
import { StyleSheet, View, Text,StatusBar, Image, Button  } from 'react-native';

import * as Colors from '../../../../styles/abstracts/colors';
import  AppHeader  from '../../../Common/AppHeader';

import ImagePicker from 'react-native-image-crop-picker';


function GigScreenImage ({navigation}) {

  
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }



  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="My Support" />
       <View style={styles.imagePicker}>
       <View style={styles.imagePreview}>
       <Text style={styles.text}>No image picked yet</Text>
       <Image style={styles.image}/>
       </View>
       <Button title="Take Image" onPress={choosePhotoFromLibrary} />
   
     
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center'
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#ccc',
    borderWidth: 1


  },
  image: {
    width: '100%',
    height: '100%'
  }
  

});

export default GigScreenImage;