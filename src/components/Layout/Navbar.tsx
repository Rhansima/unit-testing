import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Menu } from "lucide-react-native";
import Modal from "react-native-modal";

const Navbar = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
       <Image source={require('../../../assets/LOGO.png')} style={styles.logoImage} />

      {/* Hamburger Menu */}
      <TouchableOpacity onPress={() => setMenuVisible(!isMenuVisible)}>
        <Menu size={30} color="black" />
      </TouchableOpacity>

      {/* Dropdown Menu */}
      <Modal
        isVisible={isMenuVisible}
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        backdropOpacity={0.3}
        onBackdropPress={() => setMenuVisible(false)}
        style={styles.modalContainer}
      >
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => alert("Profile Clicked")}>
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => alert("Logout Clicked")}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    paddingTop: 40,
  },
  light: {
    color: "#d62d42", // Light red color
  },
  bold: {
    color: "#730c18", // Darker red color
  },
  logoImage: {
    width: 150, // Adjust width as needed
    height: 40, // Adjust height as needed
    resizeMode: "contain", // Ensure it fits properly
  },
  modalContainer: {
    position: "absolute",
    top: 25,
    right: 0,
    width: 150,
  },
  menu: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 5, // Shadow effect for Android
    shadowColor: "#000", // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuItem: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
};

export default Navbar;
