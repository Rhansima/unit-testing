import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';
import DashboardScreen from '../screens/GSMBOfficer/DashboardScreen';
import PoliceOfficerScreen from '../screens/PoliceOfficer/DasboardScreen';
import GeneralPublicScreen from '../screens/GenaralPublic/DashboardScreen';
import MLOwnerHome from '../screens/MLOwner/MLOwnerHomeScreen';


const Stack = createNativeStackNavigator();

const PrivateRoute = () => {
  const { user } = useAuthStore();

  return (
    <Stack.Navigator>

      {user?.role === 'GSMBOfficer' && <Stack.Screen name="GSMBOfficer" component={DashboardScreen} />}
      {user?.role === 'PoliceOfficer' && <Stack.Screen name="PoliceOfficer" component={PoliceOfficerScreen} />}
      {user?.role === 'GeneralPublic' && <Stack.Screen name="GeneralPublic" component={GeneralPublicScreen} />}
      {user?.role === 'MLOwner' && <Stack.Screen name="MLOwner" component={MLOwnerHome} />}

    </Stack.Navigator>
  );
};

export default PrivateRoute;
