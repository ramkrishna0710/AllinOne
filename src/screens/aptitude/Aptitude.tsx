import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { theme } from '../../constants/theme';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
    navigation: any;
};

const Aptitude: React.FC<Props> =({ navigation }) => {
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
                <Text style={styles.footerText}>Stay tuned for updates on Aptitude</Text>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 70, alignSelf: 'center', gap: 6 }}>
                <View style={{ backgroundColor: theme.colors.white, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dsaTxt}>Aptitude</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: theme.colors.white, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Icon name='x' size={20} color={'black'} style={{ paddingVertical: 8, paddingHorizontal: 16 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Aptitude;

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
        bottom: 120,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: theme.colors.white,
    },
    dsaTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});
