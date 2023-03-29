<<<<<<< HEAD
import React, { useState } from 'react';
import {
    Center, Text, Image, VStack, HStack, Stack, Box, useColorModeValue, ScrollView
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SceneMap, TabView } from 'react-native-tab-view';
import CircularProgress from 'react-native-circular-progress-indicator';

const Courses = ({ navigation }) => {

    const FirstRoute = () => <ScrollView py="4" showsVerticalScrollIndicator={false}>
        <HStack flexWrap="wrap" space={{
            base: "4",
            md: "6",
            sm: "6"
        }} alignItems="center">
            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Physics</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Chemistry</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Physics</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Chemistry</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>
        </HStack>
    </ScrollView>;``

    const SecondRoute = () => <ScrollView my="4" showsVerticalScrollIndicator={false}>
        <Stack space={3} h="full" w="full">
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Biology</Text>
                        </HStack>
                        <Text fontSize={"md"}>5 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Jacob</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={56}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Physics</Text>
                        </HStack>
                        <Text fontSize={"md"}>2 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Priscillia</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={23}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Mathematics</Text>
                        </HStack>
                        <Text fontSize={"md"}>7 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Eng Wade</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={74}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Chemistry</Text>
                        </HStack>
                        <Text fontSize={"md"}>6 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Claire</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={67}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
        </Stack>
    </ScrollView>;

    const ThirdRoute = () => <ScrollView my="4" showsVerticalScrollIndicator={false}>
        <Stack space={3} h="full" w="full">
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Biology</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Jacob</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Physics</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Priscillia</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Mathematics</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Eng Wade</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Chemistry</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Claire</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
        </Stack>
    </ScrollView>;

    const initialLayout = {
        width: Dimensions.get('window').width
    };

    const [index, setIndex] = useState(0);

    const [routes] = useState([{
        key: 'first',
        title: 'All courses'
    }, {
        key: 'second',
        title: 'Ongoing'
    }, {
        key: 'third',
        title: 'Completed'
    }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    const renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return <Box flexDirection="row">
            {props.navigationState.routes.map((route, i) => {
                const opacity = props.position.interpolate({
                    inputRange,
                    outputRange: inputRange.map((inputIndex) => inputIndex === i ? 1 : 0.5)
                });
                const color = index === i ? useColorModeValue('#547ebb', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
                const borderColor = index === i ? '#547ebb' : useColorModeValue('coolGray.200', 'gray.400');
                return <Box key={i} borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
                    <TouchableOpacity onPress={() => { setIndex(i); }}>
                        <Animatable.Text style={{ color: color }}>{route.title} </Animatable.Text>
                    </TouchableOpacity>
                </Box>;
            })}
        </Box>;
    };

    return (
        <VStack px="3" w="full" h="88%">
            <Header />
            <HStack justifyContent="space-between" mb="3">
                <HStack space={3} justifyContent="center">
                    <Icon type={Icons.Entypo} name="open-book" size={30} color="#547ebb" />
                    <Text fontSize="lg">My Courses</Text>
                </HStack>
                <HStack space={4}>
                    <Icon type={Icons.Ionicons} name="search" size={25} />
                    <Icon type={Icons.Entypo} name="dots-three-horizontal" size={25} />
                </HStack>
            </HStack>
            <TabView navigationState={{
                index,
                routes
            }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
                marginTop: StatusBar.currentHeight
            }} />
        </VStack>
    );
}

export default Courses;
=======
import React, { useState } from 'react';
import {
    Center, Text, Image, VStack, HStack, Stack, Box, useColorModeValue, ScrollView
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SceneMap, TabView } from 'react-native-tab-view';
import CircularProgress from 'react-native-circular-progress-indicator';

const Courses = ({ navigation }) => {

    const FirstRoute = () => <ScrollView py="4" showsVerticalScrollIndicator={false}>
        <HStack flexWrap="wrap" space={{
            base: "4",
            md: "6",
            sm: "6"
        }} alignItems="center">
            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Physics</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Chemistry</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Physics</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Chemistry</Text>
                </VStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Course Detail") }}>
                <VStack space={2} alignItems="center">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="lg" rounded="lg" resizeMode='cover' />
                    <Text fontSize={"lg"}>Biology</Text>
                </VStack>
            </TouchableOpacity>
        </HStack>
    </ScrollView>;``

    const SecondRoute = () => <ScrollView my="4" showsVerticalScrollIndicator={false}>
        <Stack space={3} h="full" w="full">
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Biology</Text>
                        </HStack>
                        <Text fontSize={"md"}>5 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Jacob</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={56}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Physics</Text>
                        </HStack>
                        <Text fontSize={"md"}>2 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Priscillia</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={23}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Mathematics</Text>
                        </HStack>
                        <Text fontSize={"md"}>7 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Eng Wade</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={74}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Chemistry</Text>
                        </HStack>
                        <Text fontSize={"md"}>6 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Claire</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={67}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
        </Stack>
    </ScrollView>;

    const ThirdRoute = () => <ScrollView my="4" showsVerticalScrollIndicator={false}>
        <Stack space={3} h="full" w="full">
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Biology</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Jacob</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Physics</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Priscillia</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Mathematics</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Eng Wade</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                <HStack w="75%" h="full" alignItems="center" space={4}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                        alt="Alternate Text" size="md" rounded="lg" resizeMode='cover' />
                    <VStack>
                        <HStack bg={"info.100"} rounded="md" alignItems="center" justifyContent="center" p="1">
                            <Text>Chemistry</Text>
                        </HStack>
                        <Text fontSize={"md"}>10 / 10 chapters</Text>
                        <Text fontSize={"sm"}>By Dr Claire</Text>
                        <HStack space={6}>
                            <TouchableOpacity><Icon type={Icons.Ionicons} name="videocam-sharp" size={22} color="#547ebb" /></TouchableOpacity>
                            <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={20} color="#547ebb" /></TouchableOpacity>
                        </HStack>
                    </VStack>
                </HStack>
                <CircularProgress
                    value={100}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={35}
                />
            </HStack>
        </Stack>
    </ScrollView>;

    const initialLayout = {
        width: Dimensions.get('window').width
    };

    const [index, setIndex] = useState(0);

    const [routes] = useState([{
        key: 'first',
        title: 'All courses'
    }, {
        key: 'second',
        title: 'Ongoing'
    }, {
        key: 'third',
        title: 'Completed'
    }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    const renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return <Box flexDirection="row">
            {props.navigationState.routes.map((route, i) => {
                const opacity = props.position.interpolate({
                    inputRange,
                    outputRange: inputRange.map((inputIndex) => inputIndex === i ? 1 : 0.5)
                });
                const color = index === i ? useColorModeValue('#547ebb', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
                const borderColor = index === i ? '#547ebb' : useColorModeValue('coolGray.200', 'gray.400');
                return <Box key={i} borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
                    <TouchableOpacity onPress={() => { setIndex(i); }}>
                        <Animatable.Text style={{ color: color }}>{route.title} </Animatable.Text>
                    </TouchableOpacity>
                </Box>;
            })}
        </Box>;
    };

    return (
        <VStack px="3" w="full" h="88%">
            <Header />
            <HStack justifyContent="space-between" mb="3">
                <HStack space={3} justifyContent="center">
                    <Icon type={Icons.Entypo} name="open-book" size={30} color="#547ebb" />
                    <Text fontSize="lg">My Courses</Text>
                </HStack>
                <HStack space={4}>
                    <Icon type={Icons.Ionicons} name="search" size={25} />
                    <Icon type={Icons.Entypo} name="dots-three-horizontal" size={25} />
                </HStack>
            </HStack>
            <TabView navigationState={{
                index,
                routes
            }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
                marginTop: StatusBar.currentHeight
            }} />
        </VStack>
    );
}

export default Courses;
>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
