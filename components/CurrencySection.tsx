import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type CurrencySectionProps = {
  currencyIcon: ImageSourcePropType;
  currencyLabel: string;
  amount: string;
  balanceLabel?: string;
  balanceAmount?: string;
  onCurrencyPress?: () => void;
};

export function CurrencySection({
  currencyIcon,
  currencyLabel,
  amount,
  balanceLabel,
  balanceAmount,
  onCurrencyPress,
}: CurrencySectionProps) {
  return (
    <View style={styles.section}>
      <TouchableOpacity 
        style={styles.labelLeft} 
        onPress={onCurrencyPress}
        activeOpacity={0.6}
      >
        <Image 
          source={currencyIcon} 
          style={styles.currencyIcon}
        />
        <Text style={styles.label}>{currencyLabel}</Text>
        <Image 
          source={require('../assets/images/expand-arrow.png')} 
          style={styles.expandArrow}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.amount}
        value={amount}
        onChangeText={() => {}}
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor="#444"
      />
      {balanceLabel && balanceAmount && (
        <View style={styles.balanceRow}>
          <Text style={styles.balance}>{balanceLabel}</Text>
          <Text style={styles.balanceAmount}>{balanceAmount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: '400',
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
});
