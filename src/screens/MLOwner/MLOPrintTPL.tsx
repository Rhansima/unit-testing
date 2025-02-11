import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  Platform,
} from 'react-native';
// import * as Print from 'expo-print';
import { useNavigation } from '@react-navigation/native';

export default function ReceiptView() {
  const navigation = useNavigation();

  // const handleShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message: 'Your receipt details',
  //       title: 'Receipt'
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handlePrint = async () => {
  //   try {
  //     await Print.printAsync({
  //       html: `
  //         <html>
  //           <body style="padding: 20px;">
  //             <h1 style="text-align: center;">Print or Save Your Receipt</h1>
  //             <div style="margin-bottom: 20px;">
  //               <p><strong>Lorry Number:</strong> LA4545</p>
  //               <p><strong>ML Number:</strong> LLL/100/105</p>
  //               <p><strong>ML Owner:</strong> Pasindu Lakshan</p>
  //               <p><strong>ML Contact:</strong> 0788329244</p>
  //               <p><strong>Start Location:</strong> Colombo</p>
  //               <p><strong>Mineral Type:</strong> Sand</p>
  //               <p><strong>Driver Contact:</strong> 0792631548</p>
  //               <p><strong>Load (Cube):</strong> 2</p>
  //               <p><strong>Destination:</strong> a, Ampara District, Eastern Province, Sri Lanka</p>
  //               <p><strong>Validity:</strong> 2025-02-06 to 2025-02-28</p>
  //               <p><strong>Printed Date:</strong> 2025-02-06</p>
  //             </div>
  //           </body>
  //         </html>
  //       `
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Print or Save Your Receipt</Text>

        <View style={styles.logoContainer}>
          <Image
            source={{ uri: Image.resolveAssetSource(require(`../../../assets/gsmblogo2.png`)).uri }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.detailsContainer}>
          <DetailRow label="Lorry Number" value="LA4545" />
          <DetailRow label="ML Number" value="LLL/100/105" />
          <DetailRow label="ML Owner" value="Pasindu Lakshan" />
          <DetailRow label="ML Contact" value="0788329244" />
          <DetailRow label="Start Location" value="Colombo" />
          <DetailRow label="Mineral Type" value="Sand" />
          <DetailRow label="Driver Contact" value="0792631548" />
          <DetailRow label="Load (Cube)" value="2" />
          <DetailRow
            label="Destination"
            value="a, Ampara District, Eastern Province, Sri Lanka"
          />
          <DetailRow label="Validity" value="2025-02-06 to 2025-02-28" />
          <DetailRow label="Printed Date" value="2025-02-06" />
        </View>

        
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.printButton]}
            // onPress={Platform.OS === 'web' ? handlePrint : handleShare}
          >
            <Text style={styles.printButtonText}>
              {Platform.OS === 'web' ? 'Print Receipt' : 'Share Receipt'}
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f1e3',
  },
  content: {
    padding: 16,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  value: {
    color: '#666',
    flex: 2,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    margin:20
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#FFB800',
  },
  backButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  printButton: {
    backgroundColor: '#8B1D24',
  },
  printButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});