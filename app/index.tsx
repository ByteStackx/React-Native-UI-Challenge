import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BuyButton,
  ExchangeCard,
  ExchangeRate,
  Footer,
  Header,
} from '../components';

export default function Index() {
  return (
    <View style={styles.container}>
      <Header title="Exchange" />

      <ExchangeCard
        fromCurrency={{
          icon: require('../assets/images/ethereum.png'),
          label: 'ETH',
          amount: '12,695',
          balanceLabel: 'Balance',
          balanceAmount: '293.0187',
        }}
        toCurrency={{
          icon: require('../assets/images/us-dollar.png'),
          label: 'USD',
          amount: '43,937.4',
          balanceLabel: 'Balance',
          balanceAmount: '12,987.21',
        }}
      />

      <ExchangeRate rate="1 ETH = 3,461.02 USD" />

      <BuyButton text="Buy ETH" />

      <Footer
        details={[
          { title: 'Estimate fee', value: '4.28 USD' },
          { title: 'You will receive', value: '43,941.68 USD' },
          { title: 'Spread', value: '0.2%' },
          { title: 'Gas fee', value: '0.0045 ETH' },
        ]}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0F',
    padding: 20,
  },
});
