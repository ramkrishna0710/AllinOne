import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { theme } from '../../constants/theme';
import LottieView from "lottie-react-native";
import LoadingModal from '../../components/LoadingModal';

type Props = {
    navigation: any;
}

const OtpScreen = ({ navigation }: Props) => {
    const [visible, setVisible] = useState(true);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef<Array<TextInput | null>>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false); // Hide loading modal after 2 seconds
        }, 2000);
        
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    const handleChange = (text: string, index: number) => {
        if (text.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (text: string, index: number) => {
        if (!text && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 4) {
            Alert.alert("Invalid OTP", "Please enter a 4-digit OTP.");
            return;
        }
        Alert.alert("Success", "OTP Verified!");
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <LoadingModal visible={visible} />
            {!visible && (
                <>
                    <LottieView
                        source={require('../../assets/lottie/otp.json')}
                        autoPlay
                        loop
                        style={styles.lottie}
                    />

                    <Text style={styles.header}>Enter OTP</Text>
                    <Text style={styles.subText}>We have sent a 4-digit code to your phone</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                style={styles.otpInput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === "Backspace") {
                                        handleBackspace(digit, index);
                                    }
                                }}
                                autoFocus={index === 0}
                            />
                        ))}
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleVerify}>
                        <Text style={styles.buttonText}>VERIFY</Text>
                    </TouchableOpacity>

                    <Text style={styles.resendText}>
                        Didn't receive the OTP? <Text style={styles.resendLink}>Resend</Text>
                    </Text>
                </>
            )}
        </View>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    lottie: {
        width: 200,
        height: 200,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.white,
        marginBottom: 10,
    },
    subText: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.7)",
        textAlign: "center",
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#FFF",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: theme.colors.black,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: "#FF69B4",
        width: "80%",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#FF69B4",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: theme.colors.white,
        fontWeight: "bold",
        fontSize: 18,
    },
    resendText: {
        color: "rgba(255, 255, 255, 0.7)",
        marginTop: 20,
        fontSize: 14,
    },
    resendLink: {
        color: "#FF69B4",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});
