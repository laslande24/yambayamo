import React, { useState, useCallback } from 'react';
import {
    Center, Text, Image, VStack, HStack, Box, Heading, ScrollView,
    CheckIcon, Select, Radio
} from "native-base";
import { TouchableOpacity } from 'react-native';
import bg3 from './../../assets/images/Bg/3.png'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Register = ({ navigation }) => {

    const [service, setService] = useState("");

    const [industrialService, setIndustrialService] = useState("");

    const [value, setValue] = useState("");

    const [MET, setMET] = useState("")

    const [EET, setEET] = useState("")

    const [CET, setCET] = useState("")

    const [AFT, setAFT] = useState("")

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBoldItalic': require('./../../assets/fonts/Poppins-SemiBoldItalic.ttf'),
        'Inter-Regular': require('./../../assets/fonts/Inter-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView h="90%" onLayout={onLayoutRootView}>
            <Animatable.View animation="fadeInUp" duration={1000} style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <Center mb={5} mt={10}>
                    {/* <Image resizeMode='contain' source={bg3} alt="Background head" size={200} width="full" /> */}
                    <LottieView
                        autoPlay={true}
                        loop={true}
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        source={require('./../../assets/lottie/27637-welcome.json')}
                    />
                </Center>
            </Animatable.View>
            <VStack py={1} px={4}>
                <Animatable.View animation="fadeInRight" duration={500} delay={1000}>
                    <Heading fontFamily="Poppins-SemiBoldItalic" textAlign="center" mb={5}>Get Started by creating your account</Heading>
                </Animatable.View>
                <VStack space={6} mb="4">
                    <Box maxW="full">
                        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose your domain" placeholder="Choose your domain" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Teacher Trainning" value="TT" />
                            <Select.Item label="General Education" value="GE" />
                            <Select.Item label="Technical Vocational Education" value="TVE" />
                        </Select>
                    </Box>
                </VStack>
                <VStack>
                    {
                        service === "TT" &&
                        <VStack>
                            <Radio.Group name="myRadioGroup" accessibilityLabel="Trainning Method" defaultValue="Segmentation">
                                <Radio value="Segmentation" my={1}>Segmentation</Radio>
                                <Radio value="Instruments" my={1}>Instruments</Radio>
                                <Radio value="Aims" my={1}>Aims</Radio>
                            </Radio.Group>
                        </VStack>
                    }

                    {
                        service === "GE" &&
                        <VStack>
                            <Radio.Group name="geRadioGroup" accessibilityLabel="GE Trainning Method">
                                <Radio value="PR" my={1}>PR</Radio>
                                <Radio value="Sponsoring" my={1}>Sponsoring</Radio>
                                <Radio value="Media" my={1}>Media</Radio>
                                <Radio value="Event" my={1}>Event</Radio>
                            </Radio.Group>
                        </VStack>
                    }
                    {
                        service === "TVE" &&
                        <VStack>
                            <Radio.Group name="tveRadioGroup" accessibilityLabel="TVE Trainning Method" value={value} onChange={nextValue => {
                                setValue(nextValue);
                            }}>
                                <HStack space={8} mb={3}>
                                    <Radio value="Commercial" my={1}>Commercial</Radio>
                                    <Radio value="Industrial" my={1}>Industrial</Radio>
                                </HStack>
                            </Radio.Group>
                            {
                                value === "Commercial" &&
                                <Radio.Group name="commercialRadioGroup" accessibilityLabel="commericial Trainning">
                                    <VStack space={2}>
                                        <Radio value="ACA" my={1}>ACA</Radio>
                                        <Radio value="ACC" my={1}>ACC</Radio>
                                        <Radio value="CG" my={1}>CG</Radio>
                                        <Radio value="ESF" my={1}>ESF</Radio>
                                    </VStack>
                                </Radio.Group>
                            }
                            {
                                value === "Industrial" &&
                                <VStack space={6} mb="4">
                                    <Box maxW="400">
                                        <Select selectedValue={industrialService} minWidth="200" accessibilityLabel="Choose your industrial domain" placeholder="Choose your industrial domain" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setIndustrialService(itemValue)}>
                                            <Select.Item label="Mechanical Engineering Technique" value="MET" />
                                            <Select.Item label="Electrical Engineering Technique" value="EET" />
                                            <Select.Item label="Civil Engineering Technique" value="CET" />
                                            <Select.Item label="Arts and Fashion Technique" value="AFT" />
                                        </Select>
                                    </Box>
                                </VStack>
                            }
                            {
                                industrialService === "MET" &&
                                <VStack space={6} mb="4">
                                    <Box maxW="400">
                                        <Select selectedValue={MET} minWidth="200" accessibilityLabel="Choose your industrial domain" placeholder="Choose your industrial domain" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setMET(itemValue)}>
                                            <Select.Item label="CAPA" value="CAPA" />
                                            <Select.Item label="COOM" value="COOM" />
                                            <Select.Item label="MAEL" value="MAEL" />
                                            <Select.Item label="MAIN" value="MAIN" />
                                            <Select.Item label="MARE" value="MARE" />
                                            <Select.Item label="MEFA" value="MEFA" />
                                            <Select.Item label="MEFE" value="MEFE" />
                                            <Select.Item label="BUO" value="BUO" />
                                            <Select.Item label="E" value="E" />
                                            <Select.Item label="F1" value="F1" />
                                            <Select.Item label="MA" value="MA" />
                                            <Select.Item label="MEM" value="MEM" />
                                            <Select.Item label="MF/CM" value="MF/CM" />
                                        </Select>
                                    </Box>
                                </VStack>
                            }
                            {
                                industrialService === "EET" &&
                                <VStack space={6} mb="4">
                                    <Box maxW="400">
                                        <Select selectedValue={EET} minWidth="200" accessibilityLabel="Choose your industrial domain" placeholder="Choose your industrial domain" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setEET(itemValue)}>
                                            <Select.Item label="AICB" value="AICB" />
                                            <Select.Item label="AICI" value="AICI" />
                                            <Select.Item label="ELME" value="ELME" />
                                            <Select.Item label="ELNI" value="ELNI" />
                                            <Select.Item label="FRCL" value="FRCL" />
                                            <Select.Item label="CI" value="CI" />
                                            <Select.Item label="F1" value="F1" />
                                            <Select.Item label="F2" value="F2" />
                                            <Select.Item label="F3" value="F3" />
                                            <Select.Item label="F5" value="F5" />
                                            <Select.Item label="F7" value="F7" />
                                            <Select.Item label="F8" value="F8" />
                                            <Select.Item label="MEHB" value="MEHB" />
                                            <Select.Item label="MISE" value="MISE" />
                                        </Select>
                                    </Box>
                                </VStack>
                            }
                            {
                                industrialService === "CET" &&
                                <VStack space={6} mb="4">
                                    <Box maxW="400">
                                        <Select selectedValue={CET} minWidth="200" accessibilityLabel="Choose your industrial domain" placeholder="Choose your industrial domain" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setCET(itemValue)}>
                                            <Select.Item label="CARR" value="CARR" />
                                            <Select.Item label="DEBA" value="DEBA" />
                                            <Select.Item label="MACO" value="MACO" />
                                            <Select.Item label="MENU" value="MENU" />
                                            <Select.Item label="EF" value="EF" />
                                            <Select.Item label="F4BA Building" value="F4BA Building" />
                                            <Select.Item label="F4BA Drafting" value="F4BA Drafting" />
                                            <Select.Item label="F4TP" value="F4TP" />
                                            <Select.Item label="OTTO" value="OTTO" />
                                            <Select.Item label="IB" value="IB" />
                                            <Select.Item label="IS" value="IS" />
                                            <Select.Item label="MEB" value="MEB" />
                                        </Select>
                                    </Box>
                                </VStack>
                            }
                            {
                                industrialService === "AFT" &&
                                <VStack space={6} mb="4">
                                    <Box maxW="400">
                                        <Select selectedValue={AFT} minWidth="200" accessibilityLabel="Choose your industrial domain" placeholder="Choose your industrial domain" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setAFT(itemValue)}>
                                            <Select.Item label="COME" value="COME" />
                                            <Select.Item label="DECOR" value="DECOR" />
                                            <Select.Item label="ESCO" value="ESCO" />
                                            <Select.Item label="IH" value="IH" />
                                        </Select>
                                    </Box>
                                </VStack>
                            }
                        </VStack>
                    }
                </VStack>
                <VStack mb={4}>
                    <TouchableOpacity mb={4} onPress={() => { navigation.navigate("Register") }}>
                        <Box bg="#547ebb" p="3" rounded="full" mt="5">
                            <Text textAlign="center" fontSize="lg" color="white" fontWeight="medium">Next</Text>
                        </Box>
                    </TouchableOpacity>
                </VStack>
                <Animatable.View animation="fadeInLeft" duration={500} delay={1200}>
                    <HStack space="3" alignItems="center">
                        <Text fontSize="md" fontWeight="light" mb="1">Already have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text ontSize="md" fontWeight="light" mb="1" color="blue.400">Sign in</Text>
                        </TouchableOpacity>
                    </HStack>
                </Animatable.View>
            </VStack>
        </ScrollView >
    )
}

export default Register