
import React from 'react';
import {
    Center, Text, VStack, HStack, Stack, Box,
    Flex, Avatar, ScrollView, Divider, Heading
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';

const Setting = ({ navigation }) => {

    return (
        <ScrollView w="full" h="92%" mt={12}>
            <Heading>Profile</Heading>
            <Center mb={6}>
                <Box position="relative">
                    <Avatar bg="green.500" color={"white"} size={"2xl"} source={{
                        uri: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                    }}>
                        RL
                    </Avatar>
                    <Box bg="blue.600" p="0.5" rounded="lg" position="absolute" top="24" right="0">
                        <TouchableOpacity>
                            <Icon type={Icons.MaterialIcons} name="edit" size={25} color={"#fff"} />
                        </TouchableOpacity>
                    </Box>
                </Box>
                <Text fontSize="2xl" fontWeight="bold">Romaric Laslande</Text>
                <Text lineHeight="sm">laslande.romaric@gmail.com</Text>
            </Center>
            <VStack w="full" px={3} space={4}>
                <TouchableOpacity onPress={() => { navigation.navigate("User Profile") }}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <HStack alignItems="center" justifyContent="space-between" space={2}>
                            <Icon type={Icons.Feather} name="user" size={25} />
                            <Text fontWeight="medium">Edit Profile</Text>
                        </HStack>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </HStack>
                </TouchableOpacity>
                <HStack alignItems="center" justifyContent="space-between" space={2}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <Icon type={Icons.Feather} name="bell" size={25} />
                        <Text fontWeight="medium">Notification</Text>
                    </HStack>
                    <TouchableOpacity>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </TouchableOpacity>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between" space={2}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <Icon type={Icons.Ionicons} name="ios-language" size={25} />
                        <Text fontWeight="medium">Language</Text>
                    </HStack>
                    <TouchableOpacity>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </TouchableOpacity>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between" space={2}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <Icon type={Icons.MaterialCommunityIcons} name="toggle-switch-outline" size={25} />
                        <Text fontWeight="medium">Dark Mode</Text>
                    </HStack>
                    <TouchableOpacity>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </TouchableOpacity>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between" space={2}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <Icon type={Icons.Feather} name="lock" size={25} />
                        <Text fontWeight="medium">Privacy & Policy</Text>
                    </HStack>
                    <TouchableOpacity>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </TouchableOpacity>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between" space={2}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <Icon type={Icons.Feather} name="help-circle" size={25} />
                        <Text fontWeight="medium">Help Center</Text>
                    </HStack>
                    <TouchableOpacity>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </TouchableOpacity>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between" space={2}>
                    <HStack alignItems="center" justifyContent="space-between" space={2}>
                        <Icon type={Icons.Feather} name="users" size={25} />
                        <Text fontWeight="medium">Invite Friend</Text>
                    </HStack>
                    <TouchableOpacity>
                        <Icon type={Icons.Feather} name="chevron-right" size={25} />
                    </TouchableOpacity>
                </HStack>
            </VStack>
        </ScrollView>
    );
}

export default Setting;
