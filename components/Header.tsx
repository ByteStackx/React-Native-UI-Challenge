import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
  onNotificationPress?: () => void;
};

export function Header({ title, onBackPress, onNotificationPress }: HeaderProps) {
  return (
    <View style={styles.headerRow}>
      <TouchableOpacity onPress={onBackPress} activeOpacity={0.7}>
        <Image 
          source={require('../assets/images/back-icon.png')} 
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      <TouchableOpacity onPress={onNotificationPress} activeOpacity={0.7}>
        <Image 
          source={require('../assets/images/notification-bell.png')} 
          style={styles.bellIcon}
        />
      </TouchableOpacity>
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
