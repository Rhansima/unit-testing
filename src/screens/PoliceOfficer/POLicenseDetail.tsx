import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface POLicenceDetailProps {
  licenseDetails?: {
    licenseNumber: string;
    location: string;
    expiry: string;
    quantity: number;
    loadedDate: string;
    dueDate: string;
    loadNumber: string;
    destination: string;
    licenseHolder: string;
    status: 'Valid';
  };
}

const POLicenceDetail: React.FC<POLicenceDetailProps> = ({ 
  licenseDetails = {
    licenseNumber: 'TDL/R/TEST/623/LR/01',
    location: 'Colombo',
    expiry: '2025/12/31',
    quantity: 1000,
    loadedDate: '2025/01/08',
    dueDate: '2025/01/08',
    loadNumber: 'ABC 100',
    destination: 'Colombo',
    licenseHolder: 'Nimal',
    status: 'Valid'
  }
}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Status Banner */}
      <View style={[
        styles.statusBanner,
        styles.validBanner
      ]}>
        <Text style={styles.statusText}>{licenseDetails.status}</Text>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sand Mining License</Text>
      </View>

      {/* License Details Card */}
      <View style={styles.detailsCard}>
        <DetailRow label="License Number" value={licenseDetails.licenseNumber} />
        <DetailRow label="Location Started" value={licenseDetails.location} />
        <DetailRow label="Expire" value={licenseDetails.expiry} />
        <DetailRow label="Quantity" value={licenseDetails.quantity.toString()} />
        <DetailRow label="Loaded Date/Time" value={licenseDetails.loadedDate} />
        <DetailRow label="Due Date/Time" value={licenseDetails.dueDate} />
        <DetailRow label="Load Number" value={licenseDetails.loadNumber} />
        <DetailRow label="Destination" value={licenseDetails.destination} />
        <DetailRow label="License Holder" value={licenseDetails.licenseHolder} />
      </View>

      {/* Additional Information Section
      <View style={styles.infoSection}>
        <Text style={styles.infoHeader}>Additional Information</Text>
        <Text style={styles.infoText}>
          This license must be presented upon request. Valid only for the specified quantity and destination.
        </Text>
      </View> */}
    </ScrollView>
  );
};

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <View style={styles.detailRow}>
      <Text style={styles.label}>{label} :</Text>
      <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f1e3',
  },
  statusBanner: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  validBanner: {
    backgroundColor: 'green',
  },
  statusText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#b33939',
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  detailRow: {
    borderWidth: 1,
    borderColor: '#e3c29b',
    borderRadius: 8,
    marginVertical: 6,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelContainer: {
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },
  valueContainer: {
    marginTop: 2,
  },
  value: {
    fontSize: 16,
    color: '#2d3436',
    fontWeight: 'bold',
  },
  // infoSection: {
  //   margin: 15,
  //   padding: 15,
  //   backgroundColor: '#e3c29b',
  //   borderRadius: 10,
  // },
  // infoHeader: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#444',
  //   marginBottom: 8,
  // },
  // infoText: {
  //   fontSize: 14,
  //   color: '#444',
  //   lineHeight: 20,
  // },
});

export default POLicenceDetail;

// import React from 'react';
// import { View, Text} from 'react-native';


// const POLicenceDetail = () => {
  

//   return (
//     <View>
//       <Text>license detaij</Text>
      
    
//     </View>
//   );
// };

// export default POLicenceDetail;