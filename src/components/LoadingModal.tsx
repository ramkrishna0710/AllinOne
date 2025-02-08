import { Modal, StyleSheet, View } from 'react-native';
import React from 'react';
import LottieView from "lottie-react-native";

type Props = {
    visible: boolean;
};

console.log(LottieView);

const LoadingModal = ({ visible }: Props) => {
    return (
        <Modal
            animationType="fade"
            transparent
            visible={visible}
        >
            <View style={styles.container}>
                <LottieView
                    source={require('../assets/lottie/loading.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
            </View>
        </Modal>
    );
};

export default LoadingModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        width: 300,
        height: 300,
    },
});
