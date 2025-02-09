import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '../../constants/theme'
import auth from '@react-native-firebase/auth'

const Profile = () => {

  const onLogout = () => {
    auth()
     .signOut()
     .then(response => {
      Alert.alert('User logged out')
     })
     .catch(error => {
      Alert.alert('Failed to log out', error.message)
     })
  }

  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.primary }}>
      <TouchableOpacity 
      onPress={onLogout}
      style={styles.logout}
      >
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  logout: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20
  }
})