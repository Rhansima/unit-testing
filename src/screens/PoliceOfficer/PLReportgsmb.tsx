import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';

const POReportgsmb = () => {
  
  const handleReport = () => {
    console.log('button pressed!');
    Alert.alert("Report Submitted", "Your report has been successfully submitted to GSMB.", [{ text: "OK" }]);
  };

  const textContent = {
    title: 'Geological Survey & Mines Bureau',
    invalidText: 'Invalid',
    reportButton: 'Report to GSMB',
    contacts: [
      { number: '+94-11-2886289', icon: '📞' },
      { number: '+94-11-2886290', icon: '📞' },
      { number: '901', icon: '📞' },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image source={require("../../../assets/gsmblogo2.png")} style={styles.logo} />
        <Text style={styles.title}>GEOLOGICAL SURVEY & MINES BUREAU</Text>
        <View style={styles.invalidContainer}>
          <Text style={styles.invalidText}>{textContent.invalidText}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleReport}>
          <Text style={styles.buttonText}>{textContent.reportButton}</Text>
        </TouchableOpacity>

        <View style={styles.contactsContainer}>
          {textContent.contacts.map((contact, index) => (
            <View key={index} style={styles.contactItem}>
              <TextInput
                style={styles.contactInput}
                value={contact.number}
                editable={false}
              />
              <Text style={styles.contactIcon}>{contact.icon}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mainContent: {
    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    width: '80%',
  },
  logo: {
    marginTop: 10,
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#781424",
    textAlign: "center",
  },
  
  invalidContainer: {
    backgroundColor: '#781424',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 10,
  },
  invalidText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactsContainer: {
    width: '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
  },
  contactIcon: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default POReportgsmb;
