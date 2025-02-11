import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// In your navigation setup file (e.g., AppNavigator.tsx)
//sahan


const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WELCOME</Text>
      <Text style={styles.subHeader}>TO</Text>
      <Text style={styles.brand}>mmPro</Text>

      <Text style={styles.description}>
        Welcome to mmPro—your advanced solution for efficient mining and mineral production monitoring. Designed for the Geological Survey and Mines Bureau (GSMB), mmPro streamlines tracking, analysis, and reporting to enhance resource management, compliance, and productivity. Empower your decisions and drive sustainable mining with precision.
      </Text>

      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('Login')} // Navigate to 'Login' screen
    >
      <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop:20,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeader: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  brand: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#800020', // Dark red color
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#800020', // Dark red button color
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
