import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, withSpring, runOnJS } from 'react-native-reanimated';
import { theme } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const DSA_TOPICS = [
    { id: '1', title: 'Stack', screen: 'StackScreen' },
    { id: '2', title: 'Queue', screen: 'Queue' },
    { id: '3', title: 'Linked List', screen: 'LinkedList' },
    { id: '4', title: 'Graph', screen: 'GraphScreen' },
    { id: '5', title: 'Dynamic Programming', screen: 'Dp' },
];

const Dsa: React.FC = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#1E293B', '#0F172A']} style={styles.container}>
            <Text style={styles.header}>DSA Topics</Text>

            <FlatList
                data={DSA_TOPICS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TopicItem item={item} navigation={navigation} />}
                contentContainerStyle={styles.listContainer}
            />
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 70, alignSelf: 'center', gap: 6 }}>
                <View style={{ backgroundColor: theme.colors.white, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dsaTxt}>DSA</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: theme.colors.white, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Icon name='x' size={20} color={'black'} style={{ paddingVertical: 8, paddingHorizontal: 16 }} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const TopicItem: React.FC<{ item: { title: string; screen: string }; navigation: any }> = ({ item, navigation }) => {
    const scale = useSharedValue(1);

    const handlePress = () => {
        navigation.navigate(item.screen as never);
    };

    return (
        <Animated.View style={[styles.animatedContainer, { transform: [{ scale }] }]}>
            <TouchableOpacity
                style={styles.topicButton}
                onPress={() => {
                    scale.value = withSpring(0.95, { damping: 5, stiffness: 100 }, () => {
                        scale.value = withSpring(1);
                        runOnJS(handlePress)();
                    });
                }}
                activeOpacity={0.8}
            >
                <Text style={styles.topicText}>{item.title}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default Dsa;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    header: {
        fontSize: 26,
        fontWeight: '700',
        color: theme.colors.white,
        textAlign: 'center',
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    listContainer: {
        paddingTop: 10,
        paddingHorizontal: 20
    },
    animatedContainer: {
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden',
    },
    topicButton: {
        backgroundColor: '#334155',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    topicText: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.colors.white,
        textTransform: 'capitalize',
    },
    dsaTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});
