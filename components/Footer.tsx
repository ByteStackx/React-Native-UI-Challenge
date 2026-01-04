import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FooterRow } from './FooterRow';

type FooterDetails = {
  title: string;
  value: string;
};

type FooterProps = {
  details: FooterDetails[];
};

export function Footer({ details }: FooterProps) {
  return (
    <View style={styles.footer}>
      {details.map((detail, index) => (
        <FooterRow key={index} title={detail.title} value={detail.value} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 10,
  },
});
