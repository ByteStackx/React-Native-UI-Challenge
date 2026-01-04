import React from 'react';
import { StyleSheet, Text } from 'react-native';

type ExchangeRateProps = {
  rate: string;
};

export function ExchangeRate({ rate }: ExchangeRateProps) {
  return <Text style={styles.rate}>{rate}</Text>;
}

const styles = StyleSheet.create({
  rate: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 20,
  },
});
