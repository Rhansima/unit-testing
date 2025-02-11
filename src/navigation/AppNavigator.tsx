import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import PrivateRoute from "./PrivateRoute";
import WelcomeScreen from "../screens/welcomeScreen";

//gssmb
import GSMBOficerDashboard from "../screens/GSMBOfficer/DashboardScreen";
import RegisterNewOwner from "../screens/GSMBOfficer/GSMBRegisterNewOwner";
import AddNewLicense from "../screens/GSMBOfficer/GSMBAddNewLicense";
import LicenseView from "../screens/GSMBOfficer/GSMBView";

//police
import PoliceDashboard from "../screens/PoliceOfficer/DasboardScreen";
import POLicenseDetail from "../screens/PoliceOfficer/POLicenseDetail";
import POReportgsmb from "../screens/PoliceOfficer/PLReportgsmb";
// general
import GenaralPublicDashboard from "../screens/GenaralPublic/DashboardScreen";
//mlowner

import MLOwnerHome from '../screens/MLOwner/MLOwnerHomeScreen';
import MLOLicenses from '../screens/MLOwner/MLOLicenses';
import MLOHistory from '../screens/MLOwner/MLOHistory';
import DispatchLoadPage from '../screens/MLOwner/DispatchLoadPage';
import MLOPrintTPL from '../screens/MLOwner/MLOPrintTPL';




//navbar and footer
import Header from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";


// Define the route types
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
  //mlowner
  MLOwner: undefined;
  MLOLicenses: undefined;
  MLDispatch: undefined;
  MLOHistory: undefined;
  MLOPrintTPL: undefined;
  //gsmb
  GSMBOfficer: undefined;
  RegisterNewOwner: undefined;
  AddNewLicense: undefined;
  LicenseView: undefined;
  //police
  PoliceOfficer: undefined;
  LicenseDetail: undefined;
  Reportgsmb: undefined;
  //general
  GeneralPublic: undefined;

  PrivateRoute: undefined;
};

// Define the stack navigator with proper types
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false, // Hide header for this screen
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* mlowner */}
        <Stack.Screen name="MLOwner" component={MLOwnerHome} />
        <Stack.Screen
          name="MLDispatch"
          component={DispatchLoadPage}
          options={{
            header: () => <Header />, // Use a custom component for the header
          }}
        />
        <Stack.Screen name="MLOLicenses" component={MLOLicenses} />
        <Stack.Screen name="MLOHistory" component={MLOHistory} />
        
        <Stack.Screen name="MLOPrintTPL" component={MLOPrintTPL} />

        {/* gsmb */}
        <Stack.Screen name="GSMBOfficer" component={GSMBOficerDashboard} />
        <Stack.Screen name="RegisterNewOwner" component={RegisterNewOwner} />
        <Stack.Screen name="AddNewLicense" component={AddNewLicense} />
        <Stack.Screen name="LicenseView" component={LicenseView} />

        {/* police */}
        <Stack.Screen name="PoliceOfficer" component={PoliceDashboard} />
        <Stack.Screen name="LicenseDetail" component={POLicenseDetail} />
        <Stack.Screen name="Reportgsmb" component={POReportgsmb} />

        {/* general */}
        <Stack.Screen name="GeneralPublic" component={GenaralPublicDashboard} />
      

        <Stack.Screen name="PrivateRoute" component={PrivateRoute} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default AppNavigator;
