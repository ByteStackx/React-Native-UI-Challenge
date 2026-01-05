import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
  onNotificationPress?: () => void;
  hasNotification?: boolean;
};

export function Header({ title, onBackPress, onNotificationPress, hasNotification = true }: HeaderProps) {
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
        {hasNotification && (
          <View style={styles.badge} />
        )}
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
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#fe716aff',
    borderRadius: 4,
    width: 8,
    height: 8,
  }
});
