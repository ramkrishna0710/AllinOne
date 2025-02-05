import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import BitManupulation from '../screens/BitManupulation';
import PointerSlidingWindow from '../screens/PointerSlidingWindow';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
import DynamicProgramming from '../screens/DynamicProgramming';
import Graph from '../screens/Graph';
import Algorithm from '../screens/Algorithm';
import { TabBar } from '../components/ButtomTabBar';
import Profile from '../screens/bottomTab/Profile';
import Explore from '../screens/bottomTab/Explore';

export type RootStackParamList = {
    Home: undefined;
    BitManupulation: undefined;
    PointerSlidingWindow: undefined;
    DynamicProgramming: undefined;
    Graph: undefined;
    Algorithm: undefined;
    VideoPlayer: { 
        title: string; 
        thumbnails: { medium: { url: string } }; 
        videoId: string; 
        videoDes: string; 
        fullVideoList: Array<any>;
    };
};

// Create Stack Navigator for screens
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='BitManupulation' component={BitManupulation} />
        <Stack.Screen name='PointerSlidingWindow' component={PointerSlidingWindow} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
        <Stack.Screen name="DynamicProgramming" component={DynamicProgramming} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="Algorithm" component={Algorithm} />
    </Stack.Navigator>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
                <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
                <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
