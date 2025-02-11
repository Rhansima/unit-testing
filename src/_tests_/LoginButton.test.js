import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';

// Mock the navigation and auth store
jest.mock('../store/authStore', () => ({
  useAuthStore: jest.fn().mockReturnValue({
    user: { role: 'Admin' },
    logout: jest.fn(),
  }),
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const Stack = createNativeStackNavigator();

// Wrapper for navigation
const Wrapper = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={() => <></>} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('HomeScreen', () => {
  it('should navigate to Login screen when Login button is pressed', async () => {
    const { getByText } = render(<Wrapper />);

    // Find the login button and simulate a press
    const loginButton = getByText('LOGIN');
    fireEvent.press(loginButton);

    // Wait for the navigation to occur
    await waitFor(() => {
      expect(require('@react-navigation/native').useNavigation().navigate).toHaveBeenCalledWith('Login');
    });
  });
});
