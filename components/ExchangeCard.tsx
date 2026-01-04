import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CurrencySection } from './CurrencySection';

type ExchangeCardProps = {
  fromCurrency: {
    icon: any;
    label: string;
    amount: string;
    balanceLabel?: string;
    balanceAmount?: string;
  };
  toCurrency: {
    icon: any;
    label: string;
    amount: string;
    balanceLabel?: string;
    balanceAmount?: string;
  };
  onFromCurrencyPress?: () => void;
  onToCurrencyPress?: () => void;
  onSwapPress?: () => void;
};

export function ExchangeCard({ 
  fromCurrency, 
  toCurrency, 
  onFromCurrencyPress, 
  onToCurrencyPress,
  onSwapPress 
}: ExchangeCardProps) {
  return (
    <View style={styles.card}>
      <CurrencySection
        currencyIcon={fromCurrency.icon}
        currencyLabel={fromCurrency.label}
        amount={fromCurrency.amount}
        balanceLabel={fromCurrency.balanceLabel}
        balanceAmount={fromCurrency.balanceAmount}
        onCurrencyPress={onFromCurrencyPress}
      />

      {/* Divider with Exchange Arrows */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <TouchableOpacity 
          style={styles.exchangeArrowsContainer}
          onPress={onSwapPress}
          activeOpacity={0.7}
        >
          <Image 
            source={require('../assets/images/exchange-arrows.png')} 
            style={styles.exchangeArrows}
          />
        </TouchableOpacity>
      </View>

      <CurrencySection
        currencyIcon={toCurrency.icon}
        currencyLabel={toCurrency.label}
        amount={toCurrency.amount}
        balanceLabel={toCurrency.balanceLabel}
        balanceAmount={toCurrency.balanceAmount}
        onCurrencyPress={onToCurrencyPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1E',
    borderRadius: 20,
    padding: 20,
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
});
