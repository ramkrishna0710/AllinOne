import { StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { theme } from '../constants/theme'
import { MovieType } from '../utils/Movies'

type Props = {
    item: MovieType,
    index: number,
    x: SharedValue<number>
}

const TextInfo = ({ item, index, x }: Props) => {
    const {width} = useWindowDimensions();

    const animatedStyle = useAnimatedStyle(() => {
            const opacityAnim = interpolate(
                x.value,
                [(index - 1) * width, index * width, (index + 1) * width],
                [-2, 1, -2],
                Extrapolation.CLAMP
            );        
            return {
                opacity: opacityAnim,
            }
        })

    return (
        <Animated.Text style={[styles.text, animatedStyle]} numberOfLines={1}>{item.name}</Animated.Text>
    )
}

export default TextInfo

const styles = StyleSheet.create({
    text: {
        color: theme.colors.white,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 14,
        paddingHorizontal: 8
    }
})