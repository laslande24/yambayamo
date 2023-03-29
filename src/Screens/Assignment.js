import React, { useState } from 'react';
import {
    ScrollView, Text, VStack, HStack, Box, Avatar, Pressable, Image, Button, Modal, View, Heading
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const Assignment = () => {
    return (
<<<<<<< HEAD
        <ScrollView px={3} mt={8} showsVerticalScrollIndicator={false} h="full">
=======
        <ScrollView px={3} py={4} showsVerticalScrollIndicator={false} h="full">
>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
            <HStack mb="4" px={5} py={3} background={"info.300"} rounded="2xl" alignItems="center" justifyContent="space-between">
                <VStack>
                    <Text fontSize="sm">2 Jan - 2 June 2023</Text>
                    <Text fontWeight="bold" fontSize="lg">All Assignment fullfillment</Text>
                </VStack>
                <CircularProgress
                    value={56}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    radius={30}
                />
            </HStack>
            <VStack background="indigo.100" rounded="2xl" p="4" space="4" mb="4">
                <HStack alignItems="center" justifyContent="space-between">
                    <HStack alignItems="center">
                        <Icon type={Icons.Ionicons} name="ios-time-outline" size={15} color="#547ebb" />
                        <Text>The deadline is almost up</Text>
                    </HStack>
                    <HStack space="2" alignItems="center" borderWidth="1" borderColor="gray.400" p="1" rounded="full">
                        <Icon type={Icons.MaterialCommunityIcons} name="fire" size={15} color="#547ebb" />
                        <Text fontWeight="bold">20:38</Text>
                    </HStack>
                </HStack>
                <HStack alignItems="center" position="relative" justifyContent="space-between">
                    <Heading w="80%">One Variable Linear Equations and Inequalities</Heading>
                    <Image source={require("./../../assets/images/math.jpg")} alt="Matheatic"
                        size="lg" rounded="lg" resizeMode='cover' position="relative" top="10" right="8" />
                </HStack>
                <Box alignSelf="flex-start" px="4" py="2" rounded="full" background="indigo.200">
                    <Text>Mathematics</Text>
                </Box>
            </VStack>
            <Text fontWeight="bold" fontSize="md" mb="4">Your Current assignments <Text color="coolGray.300" mb="4">Homeworks</Text></Text>
            <VStack space="3">
                <TouchableOpacity>
                    <HStack alignItems="center" space={5}>
                        <Text fontSize="3xl" fontWeight="medium" color="trueGray.400">01</Text>
                        <Image source={require("./../../assets/images/chemistry.jpg")} alt="Mathematic"
                            size="md" rounded="xl" resizeMode='cover' />
                        <VStack>
                            <Text fontSize="xl" fontWeight="bold">Substance Pressure</Text>
                            <Text fontSize="md">Chemistry</Text>
                        </VStack>
                    </HStack>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HStack alignItems="center" space={5}>
                        <Text fontSize="3xl" fontWeight="medium" color="trueGray.400">02</Text>
                        <Image source={require("./../../assets/images/geography.jpg")} alt="Mathematic"
                            size="md" rounded="xl" resizeMode='cover' />
                        <VStack>
                            <Text fontSize="xl" fontWeight="bold">The Earth the blue planet</Text>
                            <Text fontSize="md">CGeography</Text>
                        </VStack>
                    </HStack>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HStack alignItems="center" space={5}>
                        <Text fontSize="3xl" fontWeight="medium" color="trueGray.400">03</Text>
                        <Image source={require("./../../assets/images/computer_science.jpg")} alt="Mathematic"
                            size="md" rounded="xl" resizeMode='cover' />
                        <VStack>
                            <Text fontSize="xl" fontWeight="bold">Input/Output Devices</Text>
                            <Text fontSize="md">Computer Science</Text>
                        </VStack>
                    </HStack>
                </TouchableOpacity>
            </VStack>
        </ScrollView>
    )
}

export default Assignment;