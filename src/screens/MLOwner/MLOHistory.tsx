import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface LorryLicense {
  id: string;
  lorryNumber: string;
  mlNumber: string;
  mlOwner: string;
  mlContact: string;
  startLocation: string;
  mineralType: string;
  driverContact: string;
  load: number;
  destination: string;
  validity: string;
  printedDate: string;
}

const lorryLicenses: LorryLicense[] = [
  { id: '1', lorryNumber: 'LE2334', mlNumber: 'LLL/100/105', mlOwner: 'Pasindu Lakshan', mlContact: '0788329244', startLocation: 'Colombo', mineralType: 'Sand', driverContact: '3333333333', load: 3, destination: 'Uhana, Ampara', validity: '2025-02-06 to 2025-02-13', printedDate: '2025-02-06' },
  { id: '3', lorryNumber: 'LE2334', mlNumber: 'LLL/100/105', mlOwner: 'Pasindu Lakshan', mlContact: '0788329244', startLocation: 'Colombo', mineralType: 'Sand', driverContact: '3333333333', load: 3, destination: 'Uhana, Ampara', validity: '2025-02-06 to 2025-02-13', printedDate: '2025-02-06' },
  { id: '4', lorryNumber: 'LE2334', mlNumber: 'LLL/100/105', mlOwner: 'Pasindu Lakshan', mlContact: '0788329244', startLocation: 'Colombo', mineralType: 'Sand', driverContact: '3333333333', load: 3, destination: 'Uhana, Ampara', validity: '2025-02-06 to 2025-02-13', printedDate: '2025-02-06' },
  { id: '2', lorryNumber: 'KL5678', mlNumber: 'LLL/200/210', mlOwner: 'Nuwan Perera', mlContact: '0777456123', startLocation: 'Galle', mineralType: 'Gravel', driverContact: '0712345678', load: 5, destination: 'Kandy, Central Province', validity: '2025-02-07 to 2025-02-14', printedDate: '2025-02-07' },
];

const MLOHistory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLicenses = lorryLicenses.filter((license) => {
    const query = searchQuery.toLowerCase();

   
    return (
      license.lorryNumber.toLowerCase().includes(query) || 
      license.driverContact.includes(query) || 
      license.printedDate.includes(query)
    );
  });

  const renderLorryTile = ({ item }: { item: LorryLicense }) => (
    <View style={styles.tile}>
      <Text style={styles.tileHeader}>{item.lorryNumber}</Text>
      <Text style={styles.label}>LORRY NUMBER: <Text style={styles.value}>{item.lorryNumber}</Text></Text>
      <Text style={styles.label}>ML NUMBER: <Text style={styles.value}>{item.mlNumber}</Text></Text>
      <Text style={styles.label}>ML OWNER: <Text style={styles.value}>{item.mlOwner}</Text></Text>
      <Text style={styles.label}>ML CONTACT: <Text style={styles.value}>{item.mlContact}</Text></Text>
      <Text style={styles.label}>START LOCATION: <Text style={styles.value}>{item.startLocation}</Text></Text>
      <Text style={styles.label}>MINERAL TYPE: <Text style={styles.value}>{item.mineralType}</Text></Text>
      <Text style={styles.label}>DRIVER CONTACT: <Text style={styles.value}>{item.driverContact}</Text></Text>
      <Text style={styles.label}>LOAD (CUBES): <Text style={styles.value}>{item.load}</Text></Text>
      <Text style={styles.label}>DESTINATION: <Text style={styles.value}>{item.destination}</Text></Text>
      <Text style={styles.label}>VALIDITY: <Text style={styles.value}>{item.validity}</Text></Text>
      <Text style={styles.label}>PRINTED DATE: <Text style={styles.value}>{item.printedDate}</Text></Text>

      <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('MLOPrintTPL')}>
        <Text style={styles.dispatchText}>Print your missed prints</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tileHeader}>Lorry License Details</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search by Lorry Number, Driver Contact, or Printed Date" 
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          keyboardType="default"
        />
      </View>

      {/* FlatList instead of ScrollView */}
      <FlatList
        data={filteredLicenses}
        renderItem={renderLorryTile}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.tileList}
      />

<TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MLOwner')}>
  <Text style={styles.navText}>Back to Home</Text>
</TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, // Add this line
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f1e3',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    width: '100%',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  tileList: {
    width: '100%',
  },
  tile: {
    backgroundColor: '#e3c29b',
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
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
    color: '#000000',
    fontWeight: 'bold',
  },
  historyButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 10,
    alignItems: 'center',
  },
  historyText: {
    color: '#000000',
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

export default MLOHistory;
