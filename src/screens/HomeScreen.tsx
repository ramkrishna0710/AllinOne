import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BitManupulation from './BitManupulation'
import PointerSlidingWindow from './PointerSlidingWindow'
import DynamicProgramming from './DynamicProgramming';
import Graph from './Graph';
import Curousel from './autoplayCurousel/Curousel';
import { theme } from '../constants/theme';
import Algorithm from './Algorithm';

type Props = {
    navigation: any;
};

interface VideoItem {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
    };
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>

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
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    }
})