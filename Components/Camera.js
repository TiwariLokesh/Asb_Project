import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, PermissionsAndroid, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Camera = () => {
  const [imageUri, setImageUri] = useState(null);

  const requestCameraPermission = async () => {
    
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs camera access to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      Alert.alert('Camera permission is required to use this feature.');
      return;
    }

    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  const savePhotoToGallery = async () => {
    if (imageUri) {
      try {
        const fileName = imageUri.split('/').pop();
        const destPath = `${RNFS.ExternalStorageDirectoryPath}/DCIM/${fileName}`;
        await RNFS.copyFile(imageUri, destPath);
        Alert.alert('Photo saved to gallery!');
      } catch (error) {
        console.log('Error saving photo: ', error);
        Alert.alert('Error saving photo');
      }
    } else {
      Alert.alert('No photo to save');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Capture and Save Photo</Text>
      <Button title="Take a Photo" onPress={openCamera} color="#6200EE" />
      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <Button title="Download Photo" onPress={savePhotoToGallery} color="#03DAC5" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#fff',
    backgroundColor:'#333',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:50
  },
  image: {
    width: 350,
    height: 500,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6200EE',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default Camera;
