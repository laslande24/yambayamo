import React, { useState } from 'react';
import {
    Center, Text, Image, VStack, HStack, Stack, Box, ScrollView, Avatar, View
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

const CourseDetail = () => {
    return (
        <ScrollView px="2">
            <Text color="#547ebb" fontSize="30">Lessons</Text>
            <VStack mb="2">
                <Collapse>
                    <CollapseHeader>
                        <HStack justifyContent="space-between" alignItems="center">
                            <Text fontSize="xl" mb="2">Chapter 1 - Introduction</Text>
                            <Icon type={Icons.Ionicons} name="ios-chevron-down-outline" size={25} color="#547ebb" />
                        </HStack>
                    </CollapseHeader>
                    <CollapseBody>
                        <VStack space={2}>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>01</Avatar>
                                    <Text>What is Biology</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#547ebb" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#547ebb" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>02</Avatar>
                                    <Text>Branches of Biology</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#547ebb" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#547ebb" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>02</Avatar>
                                    <Text>Importance of Biology</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#d4d4d4" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#d4d4d4" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>02</Avatar>
                                    <Text>Unit of Classification</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#d4d4d4" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#547ebb" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                        </VStack>
                    </CollapseBody>
                </Collapse>
            </VStack>
            <VStack mb="2">
                <Collapse>
                    <CollapseHeader>
                        <HStack justifyContent="space-between" alignItems="center">
                            <Text fontSize="xl" mb="2">Chapter 2 - Classifications</Text>
                            <Icon type={Icons.Ionicons} name="ios-chevron-down-outline" size={25} color="#547ebb" />
                        </HStack>
                    </CollapseHeader>
                    <CollapseBody>
                        <VStack space={2}>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>01</Avatar>
                                    <Text>What is Classification</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#547ebb" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#547ebb" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>02</Avatar>
                                    <Text>Plants & Animals</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#547ebb" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#d4d4d4" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>02</Avatar>
                                    <Text>Signifance of Classification</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#547ebb" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#547ebb" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center" px="6">
                                <HStack alignItems="center" space={4} w="2/3">
                                    <Avatar bg="gray.300" size={"sm"}>02</Avatar>
                                    <Text>Unit of Classification</Text>
                                </HStack>
                                <HStack space={4}>
                                    <TouchableOpacity><Icon type={Icons.Ionicons} name="play-circle-sharp" size={25} color="#d4d4d4" /></TouchableOpacity>
                                    <TouchableOpacity><Icon type={Icons.FontAwesome5} name="file-pdf" size={25} color="#547ebb" /></TouchableOpacity>
                                </HStack>
                            </HStack>
                        </VStack>
                    </CollapseBody>
                </Collapse>
            </VStack>
            <Text fontSize="xl" mb="3">Chapter 3 - The Cell</Text>
            <Text fontSize="xl" mb="3">Chapter 4 - Cell Physiology</Text>
            <Text fontSize="xl" mb="3">Chapter 5 - Nutrition in Plants and Animals</Text>
        </ScrollView >

    )
}

export default CourseDetail;