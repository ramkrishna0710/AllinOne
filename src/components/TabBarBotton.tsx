import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { icon } from '../constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = ({
    onPress,
    onLongPress,
    isFocused,
    routeName,
    color,
    label
}: {
    onPress: () => void,
    onLongPress: () => void,
    isFocused: boolean,
    routeName: string,
    color: string,
    label: string
}) => {
    const IconComponent = icon?.[routeName];
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0, { damping: 10, stiffness: 100 });
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value, [1,0], [9, 0])
        return {
            transform: [{ scale: scaleValue }],
            top
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return { opacity };
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
        >
            <View style={styles.centeredContent}>
                <Animated.View style={animatedIconStyle}>
                    {IconComponent && <IconComponent color={color} />}
                </Animated.View>
                <Animated.Text style={[styles.label, { color }, animatedTextStyle]}>
                    {label}
                </Animated.Text>
            </View>
        </Pressable>
    );
};

export default TabBarButton;

const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
    },
    centeredContent: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 2
    },
});
