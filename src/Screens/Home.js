<<<<<<< HEAD
import React, { useEffect } from 'react';
import {
    Center, Text, Image, VStack, HStack, Stack, Skeleton, Box,
    Flex, Input, ScrollView, Divider, useToast, Avatar
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import { Fab } from 'native-base';
import CustomLoader from './../Components/CustomLoader';
import { authSelector } from '../redux/feature/AuthSlice';
import { clearUsersState, usersList, usersSelector } from '../redux/feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ToastAlert from '../Components/ToastAlert';
import LottieView from "lottie-react-native";

const usersImages = [
    "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
]

const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const toast = useToast();

    const { loading } = useSelector(authSelector);

    const { usersLoading, usersErrorMessage } = useSelector(usersSelector)

    useEffect(() => {
        dispatch(usersList(7)).unwrap()
            .then(() => {
                dispatch(clearUsersState())
            })
    }, []);

    useEffect(() => {
        if (usersLoading === "failed") {
            toast.show({
                placement: "bottom",
                render: () => {
                    return (
                        <ToastAlert
                            message={usersErrorMessage}
                            color="coolGray.800"
                            variant="left-accent"
                            status="error"
                        />)
                }
            })
            dispatch(clearUsersState())
        }
    }, [usersLoading]);

    const listOfUsers = useSelector((state) => state.users.usersList);

    const loader = () => {
        return (
            <CustomLoader
                loaderUri={require('./../../assets/lottie/book-idea-black.json')}
                color={"white"}
                opacity={0.5}
                fontColor="black"
                fontSize="20"
                text="Loading..."
                style={{ width: 200, height: 200 }}
            />
        )
    }

    const SkeletonHeader = () => {
        return (
            <Center>
                <Box p={2} mt={10} mb={5} rounded="2xl" bg="#fff" shadow="4" w="full">
                    <HStack mb="0.5" mt="1.5" alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center" space={3} maxW="2/3">
                            <Skeleton size="75" rounded="full" />
                            <Skeleton.Text lines={2} maxW="70%" />
                        </HStack>
                        <HStack space={3} justifyContent="center" alignItems="center">
                            <Skeleton size="25" rounded="full" />
                            <Skeleton size="25" rounded="full" />
                            <Skeleton size="25" rounded="full" />
                        </HStack>
                    </HStack>
                </Box>
            </Center>
        )
    }

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }

    return (
        <VStack px="3" w="full" h="88%">
            {usersLoading === "pending" ? SkeletonHeader() : <Header navigation={navigation} />}

            {usersLoading !== "pending" &&
                <Fab onPress={() => { navigation.navigate("ChatBot") }} backgroundColor="#2baa70" renderInPortal={false} shadow={2} size="md"
                    icon={<LottieView source={require('./../../assets/lottie/chatbot.json')} autoPlay loop style={{ width: 50, height: 50 }} />}
                />
            }
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center>
                    {usersLoading === "pending" ?
                        <Skeleton h="10" rounded="full" w="full" mb={5} /> :
                        <Input variant="rounded" bg={"light.200"} mx="auto" mb={5} w={{
                            base: "100%",
                            md: "25%"
                        }} InputLeftElement={
                            <Icon type={Icons.Ionicons} name="search-outline" size={25} style={{ marginLeft: 15 }} />}
                            placeholder="Search"
                            InputRightElement={
                                <TouchableOpacity style={{ marginRight: 15 }}>
                                    <Icon type={Icons.Ionicons} name="filter-outline" size={25} />
                                </TouchableOpacity>
                            } />
                    }
                </Center>
                <Flex mb={5}>
                    {
                        usersLoading === "pending" ? <Skeleton h="4" mb={3} maxW="50%" /> :
                            <Text fontSize={"lg"} fontWeight="black" mb={3}>My Lecturers</Text>
                    }
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Stack direction="row" alignItems="center" space={2}>
                            {
                                usersLoading === "pending" ?
                                    Array(5).fill(true).map((_, i) =>
                                        <VStack key={i} space={2} alignItems="center">
                                            <Skeleton size="75" rounded="full" />
                                            <Skeleton h="4" rounded="full" />
                                        </VStack>
                                    )
                                    :
                                    listOfUsers.map((item, index) => {
                                        return (
                                            <VStack key={item.id} space={2} alignItems="center">
                                                <Avatar bg="green.500" color={"white"} size={"lg"} source={{
                                                    uri: getRandomItem(usersImages)
                                                }}>
                                                    {item.first_name + item.last_name}
                                                </Avatar>
                                                <Text>{item.first_name + " " + item.last_name}</Text>
                                            </VStack>
                                        )
                                    })
                            }
                        </Stack>
                    </ScrollView>
                </Flex>
                {
                    usersLoading === "pending" ?
                        <VStack space={2}>
                            <Skeleton h="6" mb={2} rounded="full" w="1/2" />
                            <VStack space={4}>
                                {
                                    Array(4).fill(true).map((_, i) =>
                                        <HStack key={i} space={8}>
                                            <Skeleton size="32" rounded="lg" />
                                            <VStack flex={1} space={3}>
                                                <HStack bg={"gray.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                                    <Skeleton h="5" rounded="full" />
                                                </HStack>
                                                <Skeleton h="5" rounded="full" />
                                                <Skeleton h="4" rounded="full" />
                                                <HStack>
                                                    <Skeleton h="4" mb={2} rounded="full" />
                                                    <Skeleton h="4" mb={2} rounded="full" />
                                                </HStack>
                                            </VStack>
                                        </HStack>
                                    )
                                }
                            </VStack>
                        </VStack> :
                        <VStack space={2}>
                            <Text fontSize={"lg"} fontWeight="black" mb={2}>Recently Did</Text>
                            <VStack space={4}>
                                <HStack space={8}>
                                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                                        alt="Biology image" size="lg" rounded="lg" resizeMode='cover' />
                                    <VStack flex={1}>
                                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                            <Text>Biology</Text>
                                        </HStack>
                                        <Text fontSize={"lg"}>Introduction to Biology</Text>
                                        <Text fontSize={"sm"}>By Dr Jacob</Text>
                                        <HStack>
                                            <Text fontSize={12}>Yesterday </Text>
                                            <Divider orientation="vertical" mx="3" />
                                            <Text fontSize={12}>73 Students Present</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <HStack space={8}>
                                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                                        alt="Alternate Text" size="lg" rounded="lg" />
                                    <VStack flex={1}>
                                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                            <Text>Chemistry</Text>
                                        </HStack>
                                        <Text fontSize={"lg"}>Group I Element</Text>
                                        <Text fontSize={"sm"}>By Dr Priscillia</Text>
                                        <HStack>
                                            <Text fontSize={12}>2 days ago</Text>
                                            <Divider orientation="vertical" mx="3" />
                                            <Text fontSize={12}>65 Students Present</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <HStack space={8}>
                                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                                        alt="Alternate Text" size="lg" rounded="lg" />
                                    <VStack flex={1}>
                                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                            <Text>Physics</Text>
                                        </HStack>
                                        <Text fontSize={"lg"}>Power & Energy</Text>
                                        <Text fontSize={"sm"}>By Eng Wade</Text>
                                        <HStack>
                                            <Text fontSize={12}>2 days ago</Text>
                                            <Divider orientation="vertical" mx="3" />
                                            <Text fontSize={12}>75 Students Present</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <HStack space={8}>
                                    <Image source={{ uri: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                                        alt="Alternate Text" size="lg" rounded="lg" />
                                    <VStack flex={1}>
                                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                            <Text>Mathematics</Text>
                                        </HStack>
                                        <Text fontSize={"lg"}>Decimals</Text>
                                        <Text fontSize={"sm"}>By Eng Kathryn</Text>
                                        <HStack>
                                            <Text fontSize={12}>5 days ago</Text>
                                            <Divider orientation="vertical" mx="3" />
                                            <Text fontSize={12}>90 Students Present</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </VStack>
                }
            </ScrollView>
            {(loading === "pending" || usersLoading === "pending") && loader()}
        </VStack>
    );
}

export default Home;
=======
import React, { useEffect } from 'react';
import {
    Center, Text, Image, VStack, HStack, Stack, Skeleton, Box,
    Flex, Input, ScrollView, Divider, useToast, Avatar
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import { Fab } from 'native-base';
import CustomLoader from './../Components/CustomLoader';
import { authSelector } from '../redux/feature/AuthSlice';
import { clearUsersState, usersList, usersSelector } from '../redux/feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ToastAlert from '../Components/ToastAlert';
import LottieView from "lottie-react-native";

const usersImages = [
    "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
]

const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const toast = useToast();

    const { loading } = useSelector(authSelector);

    const { usersLoading, usersErrorMessage } = useSelector(usersSelector)

    useEffect(() => {
        dispatch(usersList(7)).unwrap()
            .then(() => {
                dispatch(clearUsersState())
            })
    }, []);

    useEffect(() => {
        if (usersLoading === "failed") {
            toast.show({
                placement: "bottom",
                render: () => {
                    return (
                        <ToastAlert
                            message={usersErrorMessage}
                            color="coolGray.800"
                            variant="left-accent"
                            status="error"
                        />)
                }
            })
            dispatch(clearUsersState())
        }
    }, [usersLoading]);

    const listOfUsers = useSelector((state) => state.users.usersList);

    const loader = () => {
        return (
            <CustomLoader
                loaderUri={require('./../../assets/lottie/book-idea-black.json')}
                color={"white"}
                opacity={0.5}
                fontColor="black"
                fontSize="20"
                text="Loading..."
                style={{ width: 200, height: 200 }}
            />
        )
    }

    return (
        <VStack px="3" w="full" h="88%">
            {
                usersLoading === "pending" ?
                    <Box p={2} mt={10} mb={5} rounded="2xl" bg="#fff" shadow="4" w="full">
                        <HStack mb="0.5" mt="1.5" alignItems="center" justifyContent="space-between">
                            <HStack alignItems="center" space={3} maxW="2/3">
                                <Skeleton size="75" rounded="full" />
                                <Skeleton.Text lines={2} alignItems="start" maxW="70%" />
                            </HStack>
                            <HStack space={3} justifyContent="center" alignItems="center">
                                <Skeleton size="25" rounded="full" />
                                <Skeleton size="25" rounded="full" />
                                <Skeleton size="25" rounded="full" />
                            </HStack>
                        </HStack>
                    </Box> : <Header navigation={navigation} />
            }

            {usersLoading !== "pending" &&
                <Fab onPress={() => { navigation.navigate("ChatBot") }} backgroundColor="#2baa70" renderInPortal={false} shadow={2} size="md"
                    icon={<LottieView source={require('./../../assets/lottie/chatbot.json')} autoPlay loop style={{ width: 50, height: 50 }} />}
                />
            }
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center>
                    <Input variant="rounded" bg={"light.200"} mx="auto" mb={5} w={{
                        base: "100%",
                        md: "25%"
                    }} InputLeftElement={
                        <Icon type={Icons.Ionicons} name="search-outline" size={25} style={{ marginLeft: 15 }} />}
                        placeholder="Search"
                        InputRightElement={
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Icon type={Icons.Ionicons} name="filter-outline" size={25} />
                            </TouchableOpacity>
                        } />
                </Center>
                <Flex mb={5}>
                    <Text fontSize={"lg"} fontWeight="black" mb={3}>My Lecturers</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Stack direction="row" alignItems="center" space={2}>
                            {
                                usersLoading === "pending" ?
                                    Array(5).fill(true).map((_, i) =>
                                        <VStack key={i} space={2} alignItems="center">
                                            <Skeleton size="75" rounded="full" />
                                            <Skeleton h="4" rounded="full" />
                                        </VStack>
                                    )
                                    :
                                    listOfUsers.map((item, index) => {
                                        return (
                                            <VStack key={item.id} space={2} alignItems="center">
                                                <Avatar bg="green.500" color={"white"} size={"lg"} source={{
                                                    uri: usersImages[index]
                                                }}>
                                                    {item.first_name + item.last_name}
                                                </Avatar>
                                                <Text>{item.first_name + " " + item.last_name}</Text>
                                            </VStack>
                                        )
                                    })
                            }
                        </Stack>
                    </ScrollView>
                </Flex>
                <VStack space={2}>
                    <Text fontSize={"lg"} fontWeight="black" mb={2}>Recently Did</Text>
                    <VStack space={4}>
                        <HStack space={8}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                                alt="Biology image" size="lg" rounded="lg" resizeMode='cover' />
                            <VStack flex={1}>
                                <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                    <Text>Biology</Text>
                                </HStack>
                                <Text fontSize={"lg"}>Introduction to Biology</Text>
                                <Text fontSize={"sm"}>By Dr Jacob</Text>
                                <HStack>
                                    <Text fontSize={12}>Yesterday </Text>
                                    <Divider orientation="vertical" mx="3" />
                                    <Text fontSize={12}>73 Students Present</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <HStack space={8}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                                alt="Alternate Text" size="lg" rounded="lg" />
                            <VStack flex={1}>
                                <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                    <Text>Chemistry</Text>
                                </HStack>
                                <Text fontSize={"lg"}>Group I Element</Text>
                                <Text fontSize={"sm"}>By Dr Priscillia</Text>
                                <HStack>
                                    <Text fontSize={12}>2 days ago</Text>
                                    <Divider orientation="vertical" mx="3" />
                                    <Text fontSize={12}>65 Students Present</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <HStack space={8}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                                alt="Alternate Text" size="lg" rounded="lg" />
                            <VStack flex={1}>
                                <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                    <Text>Physics</Text>
                                </HStack>
                                <Text fontSize={"lg"}>Power & Energy</Text>
                                <Text fontSize={"sm"}>By Eng Wade</Text>
                                <HStack>
                                    <Text fontSize={12}>2 days ago</Text>
                                    <Divider orientation="vertical" mx="3" />
                                    <Text fontSize={12}>75 Students Present</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <HStack space={8}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                                alt="Alternate Text" size="lg" rounded="lg" />
                            <VStack flex={1}>
                                <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                                    <Text>Mathematics</Text>
                                </HStack>
                                <Text fontSize={"lg"}>Decimals</Text>
                                <Text fontSize={"sm"}>By Eng Kathryn</Text>
                                <HStack>
                                    <Text fontSize={12}>5 days ago</Text>
                                    <Divider orientation="vertical" mx="3" />
                                    <Text fontSize={12}>90 Students Present</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </VStack>
                </VStack>
            </ScrollView>
            {(loading === "pending" || usersLoading === "pending") && loader()}
        </VStack>
    );
}

export default Home;
>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
