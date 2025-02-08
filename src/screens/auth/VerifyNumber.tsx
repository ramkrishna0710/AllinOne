import {
  FlatList,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../constants/theme';
import LottieView from "lottie-react-native";
import Icon from 'react-native-vector-icons/Entypo';
import LoadingModal from '../../components/LoadingModal';

type Props = {
  navigation: any;
}

const VerifyNumber = ({ navigation }: Props) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true)
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        if (!isMounted) return;

        let areaData = data.map((item: any) => ({
          code: item.alpha2Code,
          name: item.name,
          callingCode: `+${item.callingCodes[0]}`,
          flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`
        }));

        setAreas(areaData);
        setIsLoading(false);
        let defaultData = areaData.find(a => a.code === 'IN');
        if (defaultData) {
          setSelectedArea(defaultData);
        }
      });

    return () => { isMounted = false; };
  }, []);

  const renderAreasCodeModal = () => {
    const renderItem = ({ item }: { item: any }) => (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          setSelectedArea(item);
          setModalVisible(false);
        }}
      >
        <Image
          source={{ uri: item.flag }}
          resizeMode="contain"
          style={styles.flagIcon}
        />
        <Text style={styles.listText}>{item.name} ({item.callingCode})</Text>
      </TouchableOpacity>
    );

    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Icon name="cross" size={20} color={theme.colors.black} />
              </TouchableOpacity>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                style={{ padding: 20 }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      {isLoading ? <LoadingModal visible={isLoading} /> :
        <View style={styles.lottieStyles}>
          <LottieView
            source={require('../../assets/lottie/login.json')}
            autoPlay
            loop
            style={{ width: 300, height: 300 }}
          />
          <>
            <Text style={styles.textHeader}>Enter Your Mobile Number</Text>
            <Text style={styles.subText}>We will send you a confirmation code</Text>

            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.selectedFlagContainer}
                onPress={() => setModalVisible(true)}
              >
                {selectedArea && (
                  <>
                    <Image
                      source={{ uri: selectedArea.flag }}
                      resizeMode="contain"
                      style={styles.flagIcon}
                    />
                    <Text style={styles.callingCodeText}>{selectedArea.callingCode}</Text>
                  </>
                )}
                <Icon name="chevron-down" size={20} color={theme.colors.white} />
              </TouchableOpacity>
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                keyboardType="phone-pad"
                style={styles.input}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('OtpScreen')}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>VERIFY</Text>
            </TouchableOpacity>

            <View style={styles.bottomContainer}>
              <Text style={styles.termsText}>By continuing, you agree to the Calorie Challenge</Text>
              <Text style={styles.termsLink}>Terms of Use and Privacy Policy</Text>
            </View>
          </>
        </View>
      }

      {renderAreasCodeModal()}
    </View>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  lottieStyles: {
    alignItems: 'center',
    flex: 1,
    marginTop: 80,
  },
  textHeader: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
  subText: {
    color: theme.colors.white,
    opacity: 0.7,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    borderColor: theme.colors.white,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 24,
    alignItems: 'center',
    padding: 5,
  },
  selectedFlagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flagIcon: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  callingCodeText: {
    color: theme.colors.white,
    fontSize: 14,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.white,
  },
  buttonContainer: {
    backgroundColor: '#FF69B4',
    width: '90%',
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  termsText: {
    color: theme.colors.white,
    textAlign: 'center',
    fontSize: 13,
  },
  termsLink: {
    color: theme.colors.white,
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    width: '80%',
    paddingVertical: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listText: {
    fontSize: 14,
    marginLeft: 10,
  },
});
