import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

const PoliceDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [vehicleNumber, setVehicleNumber] = useState('');

  const validateVehicleNumber = (number: string) => {
    const vehicleRegex = /^[A-Z]{2,3}-\d{4}$/; // Example: "ABC-1234" or "AB-1234"
    return vehicleRegex.test(number);
  };

  const handleCheck = () => {
    if (validateVehicleNumber(vehicleNumber)) {
      navigation.navigate('LicenseDetail', { vehicleNumber});
    } else {
      navigation.navigate('Reportgsmb');
    }
  };

  const handleReport = () => {
    navigation.navigate('Reportgsmb');
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/gsmblogo2.png")} style={styles.logo} />
      <Text style={styles.title}>GEOLOGICAL SURVEY & MINES BUREAU</Text>
      <Text style={styles.paragraph}>
        Police officers can verify a vehicle's validity by entering its registration number.
        The system checks the details against the database and provides an instant result,
        confirming whether the vehicle is valid or invalid, ensuring compliance and road safety.
      </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter Vehicle Number" 
        value={vehicleNumber}
        onChangeText={setVehicleNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    marginTop: 10,
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#781424",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#781424",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#781424",
  },
  button: {
    backgroundColor: "#781424",
    paddingVertical: 10,
    width: '80%',
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
  },
});

export default PoliceDashboard;
