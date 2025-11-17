import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image 
          source={require('../assets/images/back-icon.png')} 
          style={styles.backIcon}
        />
        <Text style={styles.header}>Exchange</Text>
        <Image 
          source={require('../assets/images/notification-bell.png')} 
          style={styles.bellIcon}
        />
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* ETH Section */}
        <View style={styles.section}>
          <View style={styles.labelLeft}>
            <Image 
              source={require('../assets/images/ethereum.png')} 
              style={styles.currencyIcon}
            />
            <Text style={styles.label}>ETH</Text>
            <Image 
              source={require('../assets/images/expand-arrow.png')} 
              style={styles.expandArrow}
            />
          </View>
          <Text style={styles.amount}>12,695</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.balanceAmount}>293.0187</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <View style={styles.exchangeArrowsContainer}>
            <Image 
              source={require('../assets/images/exchange-arrows.png')} 
              style={styles.exchangeArrows}
            />
          </View>
        </View>

        {/* USD Section */}
        <View style={styles.section}>
          <View style={styles.labelLeft}>
            <Image 
              source={require('../assets/images/us-dollar.png')} 
              style={styles.currencyIcon}
            />
            <Text style={styles.label}>USD</Text>
            <Image 
              source={require('../assets/images/expand-arrow.png')} 
              style={styles.expandArrow}
            />
          </View>
          <Text style={styles.amount}>43,937.4</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.balanceAmount}>12,987.21</Text>
          </View>
        </View>
      </View>

      <Text style={styles.rate}>1 ETH = 3,461.02 USD</Text>

      {/* Buy Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy ETH</Text>
      </TouchableOpacity>

      {/* Footer Details */}
      <View style={styles.footer}>
        <FooterRow title="Estimate fee" value="4.28 USD" />
        <FooterRow title="You will receive" value="43,941.68 USD" />
        <FooterRow title="Spread" value="0.2%" />
        <FooterRow title="Gas fee" value="0.0045 ETH" />
      </View>
    </View>
  );
}

// Reusable Footer Row Component
type FooterRowProps = {
  title: string;
  value: string;
};

function FooterRow({ title, value }: FooterRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{title}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0F',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  header: {
    color: 'white',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
    
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  card: {
    backgroundColor: '#1A1A1E',
    borderRadius: 20,
    padding: 20,
  },
  section: {
    paddingVertical: 20,
  },
  labelLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currencyIcon: {
    width: 40,
    height: 40,
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  expandArrow: {
    width: 10,
    height: 10,
  },
  amount: {
    color: 'white',
    fontSize: 44,
    fontWeight: 400,
    marginVertical: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balance: {
    color: '#888',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#888',
    fontSize: 14,
  },
  dividerContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  divider: {
    height: 2,
    backgroundColor: '#0D0D0F',
    marginHorizontal: -20,
  },
  exchangeArrowsContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: '#0D0D0F',
    padding: 8,
    borderRadius: 10,
  },
  exchangeArrows: {
    width: 24,
    height: 24,
  },
  rate: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  rowTitle: {
    color: '#999',
  },
  rowValue: {
    color: 'white',
  },
});
