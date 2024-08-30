import React, { useState, useRef, useEffect } from 'react';
import { View, Button, StyleSheet, PermissionsAndroid, Alert, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const VideoCapture = () => {
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);

  // Request permissions
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);

      if (
        granted['android.permission.CAMERA'] !== PermissionsAndroid.RESULTS.GRANTED ||
        granted['android.permission.RECORD_AUDIO'] !== PermissionsAndroid.RESULTS.GRANTED ||
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== PermissionsAndroid.RESULTS.GRANTED ||
        granted['android.permission.READ_EXTERNAL_STORAGE'] !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        Alert.alert('Permissions required', 'You need to grant all permissions to use the camera and record audio.');
        return false;
      }
    } else {
      const cameraStatus = await check(PERMISSIONS.IOS.CAMERA);
      const microphoneStatus = await check(PERMISSIONS.IOS.MICROPHONE);

      if (cameraStatus !== RESULTS.GRANTED) {
        await request(PERMISSIONS.IOS.CAMERA);
      }

      if (microphoneStatus !== RESULTS.GRANTED) {
        await request(PERMISSIONS.IOS.MICROPHONE);
      }
    }
    return true;
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  // Start video recording
  const startRecording = async () => {
    if (cameraRef.current && (await requestPermissions())) {
      try {
        setIsRecording(true);
        const videoData = await cameraRef.current.recordAsync();
        console.log('Video recorded: ', videoData);
        // Add code here to save or process the recorded video
      } catch (error) {
        console.error('Error while recording video: ', error);
      }
    }
  };

  // Stop video recording
  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}  // You can change this to .Type.front for front camera
        captureAudio={true}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title={isRecording ? 'Stop Recording' : 'Start Recording'}
          onPress={isRecording ? stopRecording : startRecording}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default VideoCapture;
