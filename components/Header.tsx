import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.headerRow}>
      <Image 
        source={require('../assets/images/back-icon.png')} 
        style={styles.backIcon}
      />
      <Text style={styles.header}>{title}</Text>
      <Image 
        source={require('../assets/images/notification-bell.png')} 
        style={styles.bellIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
