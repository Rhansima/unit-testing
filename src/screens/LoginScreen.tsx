import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useAuthStore } from '../store/authStore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  Login: undefined;
  MLOwner: undefined;
  GSMBOfficer: undefined;
  GeneralPublic: undefined;
  PoliceOfficer: undefined;
};

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const login = useAuthStore((state) => state.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    const users = {
      'mlowner': 'MLOwner',
      'gsmb': 'GSMBOfficer',
      'police': 'PoliceOfficer',
      'public': 'GeneralPublic',
    };

    const role = users[username];
    if (role && password === '123') {
      login(role);
      navigation.navigate(role);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN IN</Text>

      {/* Username Input */}
      <Text style={styles.label}>Username / පරිශීලක නාමය / பயனர் பெயர்</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password / මුරපදය / கடவுச்சொல்</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#444444" />
        </TouchableOpacity>
      </View>

      {/* Keep Me Logged In Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={keepLoggedIn ? 'checked' : 'unchecked'}
          onPress={() => setKeepLoggedIn(!keepLoggedIn)}
        />
        <Text style={styles.checkboxText}>Keep me logged in</Text>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Google Sign-In */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../../assets/google.jpg')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Sign up with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#781424',
    marginBottom: 80,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 12,
    marginBottom: 12,
    color: '#781424',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000F44',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000F44',
    borderRadius: 8,
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom:15,
  },
  inputPassword: {
    flex: 1,
    height: '100%',
    width:'100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: '#44444',
  },
  signInButton: {
    backgroundColor: '#781424',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    marginTop: 15,
    fontSize: 14,
    color: '#444444',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default LoginScreen;
