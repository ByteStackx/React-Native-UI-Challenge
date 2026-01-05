import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type BuyButtonProps = {
  onPress?: () => void;
  text?: string;
};

export function BuyButton({ onPress, text = 'Buy ETH' }: BuyButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
