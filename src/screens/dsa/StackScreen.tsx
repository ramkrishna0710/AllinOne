import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { theme } from '../../constants/theme';

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/comming-soon.jpg')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.heading}>Coming Soon...</Text>
      <Text style={styles.subHeading}>We're working hard to bring you something exciting!</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Stay tuned for updates on StackScreen</Text>
      </View>
    </View>
  );
};

export default StackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  icon: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: theme.colors.white,
  },
});
