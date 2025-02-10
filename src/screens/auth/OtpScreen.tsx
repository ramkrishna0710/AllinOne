import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { theme } from '../../constants/theme';
import LottieView from "lottie-react-native";
import LoadingModal from '../../components/LoadingModal';

type Props = {
    navigation: any;
}

const OtpScreen = ({ navigation }: Props) => {
    const [visible, setVisible] = useState(true);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const [resendDisabled, setResendDisabled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (text: string, index: number) => {
        if (text.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 5) {
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
        if (enteredOtp.length < 6) {
            Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
            return;
        }
        Alert.alert("Success", "OTP Verified!");
        navigation.navigate('Home');
    };

    const handleResendOtp = () => {
        setResendDisabled(true);
        Alert.alert("OTP Resent", "A new OTP has been sent to your phone.");
        setTimeout(() => setResendDisabled(false), 30000); // Disable resend for 30 seconds
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
                        speed={0.7}
                        style={styles.lottie}
                    />

                    <Text style={styles.header}>Enter OTP</Text>
                    <Text style={styles.subText}>We have sent a 6-digit code to your phone</Text>

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

                    <View style={styles.resendContainer}>
                        <Text style={styles.resendText}>Didn't receive the OTP?</Text>
                        <Pressable onPress={handleResendOtp} disabled={resendDisabled}>
                            <Text style={[styles.resendLink, resendDisabled && { opacity: 0.5 }]}>Resend OTP</Text>
                        </Pressable>
                    </View>
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
        marginTop: 15,
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
        width: "85%",
        marginBottom: 30,
    },
    otpInput: {
        width: 45,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#FFF",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: theme.colors.black,
        shadowColor: theme.colors.white,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3
    },
    button: {
        backgroundColor: "#FF69B4",
        width: "85%",
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
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    resendText: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 14,
        marginRight: 5,
    },
    resendLink: {
        color: "#FF69B4",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});
