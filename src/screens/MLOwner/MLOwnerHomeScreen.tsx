import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
//route import krdddi ona wenwa
import { RootStackParamList } from "../../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define License type
interface License {
  id: string;
  licenseNumber: string;
  owner: string;
  location: string;
  capacity: number;
  status: string;
  startDate: string;
  validUntil: string;
  used: number;
  remaining: number;
  royaltyDue: number;
}

// Dummy Data for Licenses
const licenses: License[] = [
  {
    id: "1",
    licenseNumber: "IML/B/TEST/5178/LRS",
    owner: "JAYANTHA PERERA",
    location: "RATHNAPURA",
    capacity: 100,
    status: "ACTIVE",
    startDate: "01.01.2025",
    validUntil: "01.05.2025",
    used: 20,
    remaining: 80,
    royaltyDue: 45255.2,
  },
  {
    id: "1",
    licenseNumber: "IML/B/TEST/5178/LRS",
    owner: "JAYANTHA PERERA",
    location: "RATHNAPURA",
    capacity: 100,
    status: "ACTIVE",
    startDate: "01.01.2025",
    validUntil: "01.05.2025",
    used: 20,
    remaining: 80,
    royaltyDue: 45255.2,
  },
  {
    id: "1",
    licenseNumber: "IML/B/TEST/5178/LRS",
    owner: "JAYANTHA PERERA",
    location: "RATHNAPURA",
    capacity: 100,
    status: "ACTIVE",
    startDate: "01.01.2025",
    validUntil: "01.05.2025",
    used: 20,
    remaining: 80,
    royaltyDue: 45255.2,
  },
  {
    id: "1",
    licenseNumber: "IML/B/TEST/5178/LRS",
    owner: "JAYANTHA PERERA",
    location: "RATHNAPURA",
    capacity: 100,
    status: "ACTIVE",
    startDate: "01.01.2025",
    validUntil: "01.05.2025",
    used: 20,
    remaining: 80,
    royaltyDue: 45255.2,
  },
  {
    id: "1",
    licenseNumber: "IML/B/TEST/5178/LRS",
    owner: "JAYANTHA PERERA",
    location: "RATHNAPURA",
    capacity: 100,
    status: "ACTIVE",
    startDate: "01.01.2025",
    validUntil: "01.05.2025",
    used: 20,
    remaining: 80,
    royaltyDue: 45255.2,
  },

  {
    id: "2",
    licenseNumber: "IML/B/TEST/5178/LRS",
    owner: "JAYANTHA PERERA",
    location: "RATHNAPURA",
    capacity: 100,
    status: "INACTIVE",
    startDate: "01.01.2025",
    validUntil: "01.05.2025",
    used: 20,
    remaining: 80,
    royaltyDue: 45255.2,
  },
  // Add more licenses if needed
];

/**
 * MLOwnerHome is a functional component that renders the MLO (Ministry of Lands Owner) home screen.
 * It displays a list of licenses with details such as license number, owner, location, capacity, status, start date, valid until, remaining capacity, and royalty due.
 * The component also has a search bar for searching licenses, a button to view licenses, and a button to view the history of licenses.
 * The component is a part of the MLO (Ministry of Lands Owner) navigation flow.
 */
const MLOwnerHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use the typed navigation

  // Navigate to the 'Licenses' screen when the button is pressed
  const handleViewLicenses = () => {
    navigation.navigate("MLOLicenses"); // Navigate to 'Licenses' screen
  };
  const handleViewHistory = () => {
    navigation.navigate("MLOHistory"); // Navigate to 'Licenses' screen
  };
  const handleDispatchform = () => {
    navigation.navigate("MLODispatchloading"); // Navigate to 'Licenses' screen
  };

  const handleDispatchLoadViev = () => {
    navigation.navigate("MLDispatch");
  };

  const renderLicenseTile = ({ item }: { item: License }) => (
    <View style={styles.tile}>
      <Text style={styles.tileHeader}>LICENSE DETAILS</Text>
      <View style={styles.tileContent}>
        <Text style={styles.label}>LICENSE NUMBER:</Text>
        <Text style={styles.value}>{item.licenseNumber}</Text>

        <Text style={styles.label}>OWNER:</Text>
        <Text style={styles.value}>{item.owner}</Text>

        <Text style={styles.label}>LOCATION:</Text>
        <Text style={styles.value}>{item.location}</Text>

        <Text style={styles.label}>CAPACITY (CUBES):</Text>
        <Text style={styles.value}>{item.capacity}</Text>

        <Text style={styles.label}>STATUS:</Text>
        <Text
          style={
            item.status === "ACTIVE"
              ? styles.statusActive
              : styles.statusInactive
          }
        >
          ● {item.status}
        </Text>

        <Text style={styles.label}>START DATE:</Text>
        <Text style={styles.value}>{item.startDate}</Text>

        <Text style={styles.label}>VALID UNTIL:</Text>
        <Text style={styles.value}>{item.validUntil}</Text>

        <View style={styles.capacityContainer}>
          <Text style={styles.used}>USED - {item.used}</Text>
          <Text style={styles.remaining}>REMAINING - {item.remaining}</Text>
        </View>

        <View style={styles.royaltyContainer}>
          <Text style={styles.royaltyText}>ROYALTY (SAND) DUE</Text>
          <Text style={styles.royaltyAmount}>{item.royaltyDue.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.dispatchButton}
          onPress={handleDispatchLoadViev}
        >
          <Text style={styles.dispatchText}>DISPATCH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dispatchButton}
          onPress={handleViewHistory}
        >
          <Text style={styles.dispatchText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons
          name="search"
          size={24}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="IML/B/TEST/5178/LRS"
        />
      </View>

      {/* Horizontal License Tiles */}
      <FlatList
        horizontal
        data={licenses}
        renderItem={renderLicenseTile}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tileList}
      />

      {/* View Licenses & View History Buttons */}
      <TouchableOpacity style={styles.navButton} onPress={handleViewLicenses}>
        <Text style={styles.navText}>View Licenses</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.navButton} onPress={handleViewHistory}>
        <Text style={styles.navText}>View History</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f1e3",
  },
  searchContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Align items vertically at the center
    backgroundColor: "#fff", // Optional: Gives the container a background color
    paddingHorizontal: 10, // Optional: Add some padding on the sides
    borderRadius: 10, // Optional: Add border radius for rounded corners
    borderWidth: 1, // Optional: Add border if needed
    borderColor: "#ccc", // Optional: Set border color
  },
  searchIcon: {
    marginRight: 10, // Add space between the icon and the input field
  },
  searchInput: {
    flex: 1, // Take the remaining width
    paddingVertical: 10, // Add vertical padding
    fontSize: 14, // Adjust font size if needed
  },
  tileList: {
    paddingVertical: 10,
  },
  tile: {
    backgroundColor: "#e3c29b",
    borderRadius: 10,
    width: 300,
    marginRight: 15,
    padding: 15,
    elevation: 4,
  },
  tileHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
    textAlign: "center",
    marginBottom: 10,
  },
  tileContent: {
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#444",
    marginTop: 5,
  },
  value: {
    fontSize: 12,
    color: "#222",
    marginBottom: 5,
  },
  statusActive: {
    color: "green",
    fontWeight: "bold",
  },
  statusInactive: {
    color: "red",
    fontWeight: "bold",
  },
  capacityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  used: {
    backgroundColor: "#f7d794",
    padding: 5,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
  remaining: {
    backgroundColor: "#f7d794",
    padding: 5,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
  royaltyContainer: {
    backgroundColor: "#b33939",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  royaltyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  royaltyAmount: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  dispatchButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#b33939",
    marginTop: 10,
    alignItems: "center",
  },
  dispatchText: {
    color: "#b33939",
    fontWeight: "bold",
  },
  navButton: {
    backgroundColor: "#d35400",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MLOwnerHome;
