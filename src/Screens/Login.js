import React, { useState, useCallback, useEffect } from 'react';
import {
    Center, Text, Image, VStack, HStack, Box, Input, ScrollView,
    Pressable, ZStack, KeyboardAvoidingView, useToast,
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import CustomInput from '../Components/CustomInput';
import PasswordInput from '../Components/PasswordInput';
import CustomButton from '../Components/CustomButton';
import { userLogin, clearState, authSelector, userData } from '../redux/feature/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomLoader from '../Components/CustomLoader';
import ToastAlert from '../Components/ToastAlert';

SplashScreen.preventAutoHideAsync();

const Login = ({ navigation }) => {

    const [show, setShow] = useState(false);

    const [form, setForm] = useState("begin");

    const dispatch = useDispatch();

    const toast = useToast();

    const { loading, errorMessage } = useSelector(authSelector);

    useEffect(() => {
        dispatch(clearState());
    }, []);

    useEffect(() => {
        if (loading === "failed") {
            toast.show({
                placement: "bottom",
                render: () => {
                    return (
                        <ToastAlert
                            message={errorMessage}
                            color="coolGray.800"
                            variant="left-accent"
                            status="error"
                        />)
                }
            })
            dispatch(clearState())
        }
    }, [loading]);

    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Enter a valid Email")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Your Password must be at least 8 character long")
            .required("Password is required"),
        username: yup
            .string()
            .min(5, "Your username must be at least 5 character long")
            .required("Username is required")
    }).required();

    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            username: '',
            password: '',
            email: '',
        },
    })

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBoldItalic': require('./../../assets/fonts/Poppins-SemiBoldItalic.ttf'),
        'Lato-Bold': require('./../../assets/fonts/Lato-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const onSignInPressed = async (data) => {
        dispatch(userData()).then((response) => {
            dispatch(userLogin(data)).unwrap()
                .then(() => {
                    navigation.navigate("BottomTab")
                })
        })
    }

    const loader = () => {
        return (
            <CustomLoader
                loaderUri={require('./../../assets/lottie/book-idea-black.json')}
                color={"black"}
                opacity={0.5}
                fontColor="white"
                fontSize="20"
                text="Loading..."
                style={{ width: 200, height: 200 }}
            />
        )
    }

    return (
        <KeyboardAvoidingView behavior={"padding"} flex={1} h="90%" onLayout={onLayoutRootView}>
            <ScrollView h="full">
                <Animatable.View animation="fadeInDown" duration={500} style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <Center px={10} mb={5} mt={10}>
                        {/* <Image resizeMode='contain' source={bg1} alt="Background head" size={200} width="full" /> */}
                        <LottieView
                            autoPlay={true}
                            loop={true}
                            style={{
                                width: 280,
                                height: 280,
                            }}
                            source={require('./../../assets/lottie/81124-student.json')}
                        />
                    </Center>
                </Animatable.View>
                <VStack py={5} px={4}>
                    <Animatable.View animation="fadeInRight" duration={500} delay={1000}>
                        <Text fontFamily="Poppins-SemiBoldItalic" textAlign="center" mb={5} fontSize="2xl" lineHeight="sm">Sign in to your account to get started</Text>
                    </Animatable.View>
                    {form === "begin" ?
                        <VStack space={3}>
                            <Animatable.View animation="fadeInLeft" duration={500} delay={1500}>
                                <Text fontFamily="Lato-Bold" fontSize="lg" fontWeight={"medium"}>Are you</Text>
                            </Animatable.View>
                            <Animatable.View animation="fadeInRight" duration={500} delay={2000}>
                                <TouchableOpacity onPress={() => setForm("student")}>
                                    <Box w="full" h="24">
                                        <ZStack alignItems="flex-start" justifyContent="center" w="full" h="full">
                                            <Image source={{
                                                uri: "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc3R1ZGVudCUyMGluJTIwY2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                                            }} alt="image" w="full" h="full" rounded="lg" />
                                            <Text fontFamily="Lato-Bold" fontSize="lg" color="white" fontWeight="medium" >Member of a school</Text>
                                        </ZStack>
                                    </Box>
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInRight" duration={500} delay={2500}>
                                <TouchableOpacity onPress={() => setForm("independent")}>
                                    <Box w="full" h="24">
                                        <ZStack alignItems="flex-start" justifyContent="center" w="full" h="full">
                                            <Image source={{
                                                uri: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            }} alt="image" w="full" h="full" rounded="lg" />
                                            <Text fontFamily="Lato-Bold" fontSize="lg" color="white" fontWeight="medium">Working as an independent</Text>
                                        </ZStack>
                                    </Box>
                                </TouchableOpacity>
                            </Animatable.View>
                        </VStack> :
                        <VStack>
                            {form === "student" ?
                                <VStack>
                                    <VStack space={6} px={3} mb="4">
                                        <Animatable.View animation="slideInUp" duration={500} >
                                            <CustomInput
                                                name="email"
                                                placeholder="username"
                                                control={control}
                                                rules={{
                                                    required: 'Username is required',
                                                    minLength: {
                                                        value: 5,
                                                        message: 'Username should be at least 5 characters long',
                                                    },
                                                }}
                                                leftIconName="person"
                                                variant="underlined"
                                            />
                                        </Animatable.View>

                                        <Animatable.View animation="slideInUp" duration={500} delay={200}>
                                            <PasswordInput
                                                name="password"
                                                placeholder="personal password"
                                                control={control}
                                                rules={{
                                                    required: 'Password is required',
                                                    minLength: {
                                                        value: 8,
                                                        message: 'Password should be at least 8 characters long',
                                                    }
                                                }}
                                                leftIconName="lock"
                                                show={show}
                                                setShow={setShow}
                                            />
                                        </Animatable.View>

                                        <Animatable.View animation="slideInUp" duration={500} delay={400}>
                                            <CustomButton text="Sign in" onPress={handleSubmit(onSignInPressed)} />
                                        </Animatable.View>
                                    </VStack>
                                    <Animatable.View animation="slideInLeft" duration={500} delay={400}>
                                        <Text fontSize="sm" fontWeight="light" mb="1">Working as an independent ?</Text>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <TouchableOpacity onPress={() => setForm("independent")}>
                                                <Text color="blue.400">Login to your account</Text>
                                            </TouchableOpacity>
                                            <Text>Or</Text>
                                            <TouchableOpacity onPress={() => { navigation.navigate("Register") }}>
                                                <Text color="blue.400">Create your account</Text>
                                            </TouchableOpacity>
                                        </HStack>
                                    </Animatable.View>
                                </VStack> :
                                <VStack>
                                    <VStack space={6} px={3} mb="4">
                                        <Animatable.View animation="zoomIn" duration={500} delay={200}>
                                            <Input variant="underlined" w={{
                                                base: "100%",
                                                md: "50%"
                                            }} InputLeftElement={
                                                <Icon type={Icons.Ionicons} name="person" size={20} style={{ marginRight: 10 }} color="#a3a3a3" />
                                            }
                                                InputRightElement={
                                                    <Icon type={Icons.Ionicons} name="mail" size={20} color="#a3a3a3" />
                                                }
                                                placeholder="Email or username" place />
                                        </Animatable.View>

                                        <Animatable.View animation="zoomIn" duration={500} delay={400}>
                                            <Input variant="underlined" w={{
                                                base: "100%",
                                                md: "50%"
                                            }} type={show ? "text" : "password"} InputLeftElement={
                                                <Icon type={Icons.FontAwesome} name="lock" size={20} color="#a3a3a3" style={{ marginRight: 16 }} />
                                            }
                                                InputRightElement={
                                                    <Pressable onPress={() => setShow(!show)}>
                                                        <Icon type={Icons.Ionicons} name={show ? "eye" : "eye-off"} size={20} color="#a3a3a3" />
                                                    </Pressable>
                                                } placeholder="school password" />
                                        </Animatable.View>

                                        <Animatable.View animation="zoomIn" duration={500} delay={600}>
                                            <TouchableOpacity onPress={() => { navigation.navigate("BottomTab") }}>
                                                <Box bg="#547ebb" p="3" rounded="full" mt="5">
                                                    <Text textAlign="center" fontSize="lg" color="white" fontWeight="medium">Sign in</Text>
                                                </Box>
                                            </TouchableOpacity>
                                        </Animatable.View>
                                    </VStack>

                                    <Animatable.View animation="zoomIn" duration={500} delay={600}>
                                        <HStack space="3" alignItems="center">
                                            <Text fontSize="md" fontWeight="light" mb="1">Don't have an account ?</Text>
                                            <Pressable onPress={() => { navigation.navigate("IndependentView") }}>
                                                <Text ontSize="md" fontWeight="light" mb="1" color="blue.400">Register</Text>
                                            </Pressable>
                                        </HStack>
                                    </Animatable.View>

                                    <Animatable.View animation="zoomIn" duration={500} delay={800}>
                                        <TouchableOpacity onPress={() => setForm("student")}>
                                            <Text ontSize="md" fontWeight="light" mb="1" color="blue.400">Already in a school</Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                </VStack>
                            }
                        </VStack>
                    }
                </VStack>
            </ScrollView>
            {loading === "pending" && loader()}
        </KeyboardAvoidingView>
    );
}
export default Login;