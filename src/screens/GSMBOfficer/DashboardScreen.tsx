import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

// Define the License interface
interface License {
  id: string;
  type: string;
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
    id: '1',
    type: 'Mining',
    licenseNumber: 'IML/B/TEST/5178/LRS',
    owner: 'JAYANTHA PERERA',
    location: 'RATHNAPURA',
    capacity: 100,
    status: 'ACTIVE',
    startDate: '01.01.2025',
    validUntil: '01.05.2025',
    used: 20,
    remaining: 80,
    royaltyDue: 45255.20,
  },
  {
    id: '2',
    type: 'Mining',
    licenseNumber: 'IML/B/TEST/5178/LRS',
    owner: 'JAYANTHA PERERA',
    location: 'RATHNAPURA',
    capacity: 100,
    status: 'ACTIVE',
    startDate: '01.01.2025',
    validUntil: '01.05.2025',
    used: 20,
    remaining: 80,
    royaltyDue: 45255.20,
  },
  {
    id: '3',
    type: 'Transport',
    licenseNumber: 'TML/B/TEST/5179/LRS',
    owner: 'KAMAL PERERA',
    location: 'COLOMBO',
    capacity: 150,
    status: 'INACTIVE',
    startDate: '01.01.2025',
    validUntil: '01.05.2025',
    used: 50,
    remaining: 100,
    royaltyDue: 60255.20,
  },
  {
    id: '4',
    type: 'Complaints',
    licenseNumber: 'IML/B/TEST/5178/LRS',
    owner: 'JAYANTHA PERERA',
    location: 'RATHNAPURA',
    capacity: 100,
    status: 'ACTIVE',
    startDate: '01.01.2025',
    validUntil: '01.05.2025',
    used: 20,
    remaining: 80,
    royaltyDue: 45255.20,
  },
];

const GSMBOficerDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use the typed navigation

  const handleRegisterNewOwner = () => {
    navigation.navigate('RegisterNewOwner');  // Navigate to the RegisterNewOwner screen
  };

  const handleNewLicense = () => {
    navigation.navigate('AddNewLicense');  // Navigate to the AddNewLicense screen
  };

  const handleview = () => {
    navigation.navigate('LicenseView');  // Navigate to the LicenseView screen
  };

  const [activeTab, setActiveTab] = useState('Mining');

  // Filter licenses based on the selected tab
  const filteredLicenses = licenses.filter((item) => item.type === activeTab);

  const renderLicenseTile = ({ item }: { item: License }) => (
    <View style={styles.tile}>
      <Text style={styles.tileHeader}>{item.type.toUpperCase()} LICENSE</Text>
      <View style={styles.tileContent}>
        <Text style={styles.label}>LICENSE NUMBER:</Text>
        <Text style={styles.value}>{item.licenseNumber}</Text>

        <Text style={styles.label}>OWNER:</Text>
        <Text style={styles.value}>{item.owner}</Text>

        <Text style={styles.label}>LOCATION:</Text>
        <Text style={styles.value}>{item.location}</Text>

        <Text style={styles.label}>CAPACITY:</Text>
        <Text style={styles.value}>{item.capacity}</Text>

        <Text style={styles.label}>STATUS:</Text>
        <Text style={item.status === 'ACTIVE' ? styles.statusActive : styles.statusInactive}>
          ● {item.status}
        </Text>

        <Text style={styles.label}>START DATE:</Text>
        <Text style={styles.value}>{item.startDate}</Text>

        <Text style={styles.label}>VALID UNTIL:</Text>
        <Text style={styles.value}>{item.validUntil}</Text>

        <TouchableOpacity style={styles.dispatchButton} onPress={handleview}>
          <Text style={styles.dispatchText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabs}>
        {['Mining', 'Transport', 'Complaints'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab} License
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer2}>
        <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search License" />
      </View>

      {/* Filtered License Data */}
      <FlatList
        horizontal
        data={filteredLicenses}
        renderItem={renderLicenseTile}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tileList}
      />

      {/* View Licenses & View History Buttons */}
      <TouchableOpacity style={styles.navButton} onPress={handleRegisterNewOwner}>
        <Text style={styles.navText}>+ Register New owner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={handleNewLicense}>
        <Text style={styles.navText}>+ Add New License</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f1e3',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 14,
    color: 'black',
  },
  activeTabText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  searchContainer2: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 40,  // Add enough left margin to avoid overlap with the icon
  },
  tileList: {
    paddingVertical: 10,
  },
  tile: {
    backgroundColor: '#e3c29b',
    borderRadius: 10,
    width: 300,
    marginRight: 15,
    padding: 15,
    elevation: 4,
  },
  tileHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
  },
  tileContent: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#444',
    marginTop: 5,
  },
  value: {
    fontSize: 12,
    color: '#222',
    marginBottom: 5,
  },
  statusActive: {
    color: 'green',
    fontWeight: 'bold',
  },
  statusInactive: {
    color: 'red',
    fontWeight: 'bold',
  },
  dispatchButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b33939',
    marginTop: 10,
    alignItems: 'center',
  },
  dispatchText: {
    color: '#b33939',
    fontWeight: 'bold',
  },
  navButton: {
    backgroundColor: '#d35400',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default GSMBOficerDashboard;
