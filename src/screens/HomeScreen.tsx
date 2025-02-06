import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Curousel from './autoplayCurousel/Curousel';
import PointerSlidingWindow from './PointerSlidingWindow';
import Algorithm from './Algorithm';
import Graph from './Graph';
import DynamicProgramming from './DynamicProgramming';
import BitManupulation from './BitManupulation';
import { theme } from '../constants/theme';
import { videoDataList } from '../utils/striver';
import { VideoItem } from '../utils/Movies';
import { videoDataListAbdulBari } from '../utils/abdulBari';

type Props = {
    navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const prevOffsetY = useRef(0);
    const visibility = useSharedValue(0); 

    const handleScroll = (event: any) => {
        const currentOffsetY = event.nativeEvent.contentOffset.y;

        if (currentOffsetY > prevOffsetY.current) {
            visibility.value = withTiming(1, { duration: 400 });
        } else if (currentOffsetY < prevOffsetY.current) {
            visibility.value = withTiming(0, { duration: 400 });
        }

        prevOffsetY.current = currentOffsetY;
    };

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: visibility.value,
        transform: [{ translateY: visibility.value === 1 ? 0 : 10 }],
    }));
      
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.scrollTextContainer, animatedStyle]}>
                <TouchableOpacity>
                    <Text style={styles.scrollText}>DSA</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.scrollText}>Aptitude</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.scrollText}>Interview</Text>
                </TouchableOpacity>
            </Animated.View>

            <ScrollView
                contentContainerStyle={styles.contentContainer}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                <Curousel />
                <View style={{ marginTop: 8 }}>
                    <PointerSlidingWindow navigation={navigation} />
                </View>
                <View style={{ marginTop: 8 }}>
                    <Algorithm navigation={navigation} />
                </View>
                <View style={{ marginTop: 8 }}>
                    <Graph navigation={navigation} />
                </View>
                <View style={{ marginTop: 8 }}>
                    <DynamicProgramming navigation={navigation} />
                </View>
                <View style={{ marginTop: 8 }}>
                    <BitManupulation />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    contentContainer: {
        paddingBottom: 80,
    },
    scrollTextContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 60,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.white,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        gap: 7,
    },
    scrollText: {
        fontSize: 12,
        color: theme.colors.black,
        fontWeight: 'bold',
    },
});
