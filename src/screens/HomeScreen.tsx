import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';
// import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

// Define the navigation type
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  PrivateRoute: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { user, logout } = useAuthStore();

  return (
    <View style={styles.container}>
      {/* <Navbar/> */}
   
     <View style={styles.container}>
          <Text style={styles.header}>WELCOME</Text>
          <Text style={styles.subHeader}>TO</Text>
          <Text style={styles.brand}>mmPro</Text>
    
          <Text style={styles.description}>
          Welcome to mmPro—your advanced solution for efficient mining and mineral production monitoring. Designed for the Geological Survey and Mines Bureau (GSMB), mmPro streamlines tracking, analysis, and reporting to enhance resource management, compliance, and productivity. Empower your decisions and drive sustainable mining with precision.
          </Text>
    
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        */}
    
      <Text>{user?.role}</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() =>{
        logout();
        navigation.navigate('Login');
      }}>
        <Text style={styles.buttonText}>LOGIN</Text>

      </TouchableOpacity>
      {/* <Button title="Go to Dashboard" onPress={() => navigation.navigate('PrivateRoute')} /> */}
      {/* <Button title="LOGIN" onPress={() => { logout(); navigation.navigate('Login'); }} /> */}
    </View>
    <Footer/>
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
    color: '#781424',
  },
  subHeader: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#781424',
  },
  brand: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#D63F54', // Dark red color
  },
  description: {
    fontSize: 16,
    color: '#000',
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

export default HomeScreen;
