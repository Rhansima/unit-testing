import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  Alert,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dialog from "react-native-dialog";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../../components/Layout/Navbar";

export default function DispatchLoadPage() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use the typed navigation
  const [dateTime, setDateTime] = useState(new Date());
  const [licenseNumber, setLicenseNumber] = useState("LLL/100/105");
  const [destination, setDestination] = useState("");
  const [lorryNumber, setLorryNumber] = useState("");
  const [driverContact, setDriverContact] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [cubes, setCubes] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisible] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(); // Custom format if needed
  };

  const handleSubmit = () => {
    setVisible(true);
  };

  const printreceipt = () => {
    navigation.navigate("MLOPrintTPL");
    setVisible(false);
  };

  const fetchLocations = async (query: string) => {
    if (query.length === 0) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&countrycodes=LK&q=${query}`,
        {
          headers: {
            "User-Agent": "MyReactNativeApp",
          },
        }
      );
      const data = await response.json();

      setSuggestions(data.map((place: any) => place.display_name));
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchLocations(destination);
    }, 500); // Debounce API calls
    return () => clearTimeout(timeoutId);
  }, [destination]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dispatch Your Load Here</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>DATE & TIME</Text>
          <TextInput
            style={styles.input}
            value={dateTime.toLocaleString()}
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>LICENSE NUMBER</Text>
          <TextInput
            style={styles.input}
            value={licenseNumber}
            editable={false}
          />
        </View>

        <View style={[styles.formGroup, { position: "relative" }]}>
          <Text style={styles.label}>DESTINATION</Text>
          <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
          />

          {suggestions.length > 0 && (
            <View style={styles.dropdown}>
              <FlatList
                data={suggestions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      setDestination(item);
                      setSuggestions([]);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>LORRY NUMBER</Text>
          <TextInput
            style={styles.input}
            value={lorryNumber}
            onChangeText={setLorryNumber}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>DRIVER CONTACT</Text>
          <TextInput
            style={styles.input}
            value={driverContact}
            onChangeText={setDriverContact}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>DUE DATE</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            {/* If dueDate is empty, show a placeholder text */}
            <Text>{dueDate ? dueDate : ""}</Text>
            <Icon name="calendar-today" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>CUBES</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setCubes(Math.max(1, cubes - 1))}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{cubes}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setCubes(cubes + 1)}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Dialog.Container
          visible={visible}
          contentStyle={styles.dialogContainer}
        >
          <Dialog.Title style={styles.dialogTitle}>
            <Icon name="check-circle" size={60} color="green" />
          </Dialog.Title>
          <Dialog.Description style={styles.dialogDescription}>
            Dispatched successfully.
          </Dialog.Description>
          <View style={styles.dialogButtonContainer}>
            <Dialog.Button
              label="Back"
              onPress={() => setVisible(false)}
              style={styles.backbutton}
            />
            <Dialog.Button
              label="Print Receipt"
              onPress={printreceipt}
              style={styles.printbutton}
            />
          </View>
        </Dialog.Container>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={dueDate ? new Date(dueDate) : new Date()} // Handle empty date state
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              const formattedDate = formatDate(selectedDate); // Format the selected date
              setDueDate(formattedDate); // Update the dueDate state
            }
          }}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    fontSize: 20,
    color: "#E41E31",
    fontWeight: "bold",
  },
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: "#8B1D24",
    marginBottom: 24,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  counterButton: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  counterButtonText: {
    fontSize: 20,
    color: "#666",
  },
  counterValue: {
    fontSize: 18,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  submitButton: {
    backgroundColor: "#8B1D24",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#FFD700",
  },
  cancelButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  footer: {
    padding: 16,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    maxHeight: 150,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
  },
  dialogContainer: {
    backgroundColor: "#fff", // Custom background color
    borderRadius: 10, // Rounded corners
    padding: 30,
    paddingBottom: 40,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  dialogDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  backbutton: {
    color: "#000",
    fontWeight: "bold",
    backgroundColor: "#FFD700",
    borderRadius: 8,
    alignItems: "center",
  },
  printbutton: {
    backgroundColor: "#8B1D24",
    color: "#FFF", // Custom button color
    fontWeight: "bold",
    borderRadius: 8,
    alignItems: "center",
  },
  icon: {
    color: "#000",
  },
  dialogButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
