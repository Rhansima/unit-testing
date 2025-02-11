import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        {/* Logo and Text */}
        <View style={styles.logoTextContainer}>
          <Image
            source={require("../../../assets/gsmblogo2.png")}
            style={styles.logo}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.mainText, styles.leftAlign]}>Geological Survey & Mines Bureau</Text>
            <Text style={[styles.subText, styles.leftAlign]}>භූ විද්‍යා මිනින්දෝරු හා පතල් කාර්යාංශය</Text>
            <Text style={[styles.subText, styles.leftAlign]}>புவியியல் ஆய்வு மற்றும் சுரங்கப் பணியகம்</Text>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator}></View>

        {/* Footer Text */}
        <Text style={styles.footerText}>
          © 2025 Geological Survey & Mines Bureau. All Rights Reserved. {"\n"}
          Designed and Developed by Aasa IT
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#FCD5D0", // bg-pink-200
    paddingVertical: 8, // Smaller height
    paddingHorizontal: 16, // Horizontal padding
  },
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  logoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8, // Space between logo and text
    width: "100%",
  },
  logo: {
    height: 60, // Slightly smaller logo height
    width: 60, // Slightly smaller logo width
  },
  textContainer: {
    // No textAlign here, it's handled by styles.leftAlign
  },
  mainText: {
    fontSize: 14, // text-lg
    fontWeight: "400", // font-normal
  },
  subText: {
    fontSize: 10, // text-sm
  },
  leftAlign: {
    textAlign: "left", // Apply textAlign here to Text components
  },
  separator: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#800000", // border-maroon
    marginVertical: 16, // my-4
  },
  footerText: {
    fontSize: 10, // text-xs
    textAlign: "center",
    width: "100%",
  },
});

export default Footer;
