import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type FooterRowProps = {
  title: string;
  value: string;
};

export function FooterRow({ title, value }: FooterRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{title}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  rowTitle: {
    color: '#999',
  },
  rowValue: {
    color: '#bdbdbdff',
  },
});
