import React, { useEffect, useState } from 'react';
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
import Dsa from '../screens/dsa/Dsa';
import Search from '../screens/bottomTab/Search';
import Queue from '../screens/dsa/Queue';
import StackScreen from '../screens/dsa/StackScreen';
import LinkedList from '../screens/dsa/LinkedList';
import GraphScreen from '../screens/dsa/Graph';
import Dp from '../screens/dsa/Dp';
import Aptitude from '../screens/aptitude/Aptitude';
import Interview from '../screens/interview/Interview';
import VerifyNumber from '../screens/auth/VerifyNumber';
import OtpScreen from '../screens/auth/OtpScreen';
import auth from '@react-native-firebase/auth'

export type RootStackParamList = {
    Home: undefined;
    BitManupulation: undefined;
    PointerSlidingWindow: undefined;
    DynamicProgramming: undefined;
    Graph: undefined;
    Algorithm: undefined;
    Dsa: undefined;
    Aptitude: undefined;
    Interview: undefined;
    StackScreen: undefined;
    Queue: undefined;
    LinkedList: undefined;
    GraphScreen: undefined;
    Dp: undefined;
    VideoPlayer: {
        title: string;
        thumbnails: { medium: { url: string } };
        videoId: string;
        videoDes: string;
        fullVideoList: Array<any>;
    };
    VerifyNumber: undefined;
    OtpScreen: undefined;
};

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
        <Stack.Screen name="Dsa" component={Dsa} />
        <Stack.Screen name="Aptitude" component={Aptitude} />
        <Stack.Screen name="Interview" component={Interview} />
        <Stack.Screen name="StackScreen" component={StackScreen} />
        <Stack.Screen name="Queue" component={Queue} />
        <Stack.Screen name="LinkedList" component={LinkedList} />
        <Stack.Screen name="GraphScreen" component={GraphScreen} />
        <Stack.Screen name="Dp" component={Dp} />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name='VerifyNumber' component={VerifyNumber} />
        <AuthStack.Screen name='OtpScreen' component={OtpScreen} />
    </AuthStack.Navigator>
)

const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();

    // const onAuthStateSave = (user: any) => setUser(user);

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateSave);
    //     return subscriber;
    // })

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
                    <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
                    <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
                    <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
                    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                </Tab.Navigator>
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    );
};

export default Navigation;
