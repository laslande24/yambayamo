
import React, { useState, useCallback } from 'react';
import {
    Center, Text, Image, VStack, HStack, Box, Heading, Input, ScrollView, Pressable, View
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import bg3 from './../../assets/images/Bg/3.png'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Register = ({ navigation }) => {

    const [show, setShow] = useState(false);

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBoldItalic': require('./../../assets/fonts/Poppins-SemiBoldItalic.ttf'),
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
            <View style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <Center mb={5} mt={10}>
                    {/* <Image resizeMode='contain' source={bg3} alt="Background head" size={200} width="full" /> */}
                    <LottieView
                        autoPlay
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        source={require('./../../assets/lottie/27637-welcome.json')}
                    />
                </Center>
            </View>
            <VStack py={1} px={4}>
                <View>
                    <Heading fontFamily="Poppins-SemiBoldItalic" textAlign="center" mb={5}>Fill the form below to get complete</Heading>
                </View>
                <VStack space={6} px={3} mb="4">
                    <Animatable.View animation="fadeIn" duration={500} delay={500}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} placeholder="First name" type='text' />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={700}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} placeholder="Last name" type='text' />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={900}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} placeholder="Email" type='text' />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={1100}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} placeholder="Phone number" type="text" />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={1300}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} placeholder="Date of birth" type='text' />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={1500}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} type={show ? "text" : "password"}
                            InputRightElement={
                                <Pressable onPress={() => setShow(!show)}>
                                    <Icon type={Icons.Ionicons} name={show ? "eye" : "eye-off"} size={20} color="#a3a3a3" />
                                </Pressable>
                            } placeholder="Password" />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={1700}>
                        <Input variant="underlined" w={{
                            base: "100%",
                            md: "50%"
                        }} type={show ? "text" : "password"}
                            InputRightElement={
                                <Pressable onPress={() => setShow(!show)}>
                                    <Icon type={Icons.Ionicons} name={show ? "eye" : "eye-off"} size={20} color="#a3a3a3" />
                                </Pressable>
                            } placeholder="Confirm Password" />
                    </Animatable.View>

                    <Animatable.View animation="fadeIn" duration={500} delay={1900}>
                        <TouchableOpacity onPress={() => { navigation.navigate("BottomTab") }}>
                            <Box bg="#547ebb" p="3" rounded="full" mt="5">
                                <Text textAlign="center" fontSize="lg" color="white" fontWeight="medium">Register</Text>
                            </Box>
                        </TouchableOpacity>
                    </Animatable.View>
                </VStack>

                <Animatable.View animation="fadeInLeft" duration={500} delay={2100}>
                    <HStack space="3" alignItems="center">
                        <Text fontSize="md" fontWeight="light" mb="1">Already have an account ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text ontSize="md" fontWeight="light" mb="1" color="blue.400">Sign in</Text>
                        </TouchableOpacity>
                    </HStack>
                </Animatable.View>
            </VStack>
        </ScrollView>
    )
}

export default Register