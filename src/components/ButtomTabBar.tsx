import { View, StyleSheet, Platform, LayoutChangeEvent } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { theme } from '../constants/theme';
import TabBarButton from './TabBarBotton';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors } = useTheme();
    const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

    const buttonWidth = dimensions.width / state.routes.length;
    const onTabbarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        })
    }

    const tabPositionX = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: tabPositionX.value }]
        }
    })

    return (
        <View onLayout={onTabbarLayout} style={styles.tabbar}>
            {/* <Animated.View style={[animatedStyle,{
                position: 'absolute',
                backgroundColor: '#723FEB',
                borderRadius: 30,
                marginHorizontal: 12,
                height: dimensions.height - 15,
                width: buttonWidth - 25
            }]}/> */}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    tabPositionX.value = withSpring(buttonWidth * index, { duration: 1500 });
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        color={isFocused ? theme.colors.rose : theme.colors.white}
                        label={label}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 0,
        // left: 50,
        // right: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderTopWidth: 0.5,
        borderTopColor: theme.colors.white,
        
        // paddingVertical: 6,
        // paddingHorizontal: 12,
        // borderRadius: 40,
        // shadowColor: Platform.OS === 'ios' ? theme.colors.black : '#000',
        // shadowOffset: { width: 1, height: 5 },
        // shadowOpacity: 0.1,
        // shadowRadius: 10,
        // elevation: 20,
    },
});

export default TabBar;
