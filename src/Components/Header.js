<<<<<<< HEAD
import React, { useState } from 'react';
import {
    Center, Text, VStack, HStack, Box, Avatar, Pressable, Menu, Button, Modal
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Header = (props) => {

    const [showModal, setShowModal] = useState(false)

    const userData = useSelector((state) => state.auth.userData);

    return (
        <Center>
            <Box px={3} mt={10} mb={5} rounded="2xl" bg="#fff" shadow="4" w="full">
                <HStack mb="0.5" mt="1.5" alignItems="center" justifyContent="space-between" >
                    <HStack alignItems="center" space={3} maxW="full">
                        <TouchableOpacity>
                            <Avatar bg="green.500" color={"white"} size={"lg"} source={{
                                uri: userData.picture.medium
                            }}>
                                {userData.name.first + userData.name.last}
                            </Avatar>
                        </TouchableOpacity>
                        <VStack>
                            <Text fontSize={"lg"}>{userData.name.first + " " + userData.name.last}</Text>
                            <Text fontSize={"sm"}>{userData.email}</Text>
                        </VStack>
                    </HStack>
                    <VStack space={2} justifyContent="center" alignItems="center">
                        <TouchableOpacity>
                            <Menu w="190" trigger={triggerProps => {
                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <Icon type={Icons.Ionicons} name="ios-menu" size={25} />
                                </Pressable>;
                            }}>
                                <Menu.Item>
                                    <Icon type={Icons.FontAwesome} name="video-camera" size={25} />
                                    Live
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon type={Icons.FontAwesome} name="book" size={25} />
                                    Assignments
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon type={Icons.FontAwesome} name="power-off" size={25} />
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate("Assignment") }}>
                            <Icon type={Icons.Entypo} name="open-book" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setShowModal(true) }}>
                            <Icon type={Icons.Feather} name="bell" size={25} />
                        </TouchableOpacity>
                    </VStack>
                </HStack>
            </Box>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Notifications</Modal.Header>
                    <Modal.Body>
                        <Text fontSize="lg">No Notifications</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal(false);
                            }}>
                                OK
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
}

export default Header;
=======
import React, { useState } from 'react';
import {
    Center, Text, VStack, HStack, Box, Avatar, Pressable, Menu, Button, Modal
} from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Header = (props) => {

    const [showModal, setShowModal] = useState(false)

    const userData = useSelector((state) => state.auth.userData);

    return (
        <Center>
            <Box p={2} mt={10} mb={5} rounded="2xl" bg="#fff" shadow="4" w="full">
                <HStack mb="0.5" mt="1.5" alignItems="center" justifyContent="space-between" >
                    <HStack alignItems="center" space={3} maxW="2/3">
                        <TouchableOpacity>
                            <Avatar bg="green.500" color={"white"} size={"lg"} source={{
                                uri: userData.picture.medium
                            }}>
                                {userData.name.first + userData.name.last}
                            </Avatar>
                        </TouchableOpacity>
                        <VStack maxW="70%">
                            <Text fontSize={"lg"}>{userData.name.first + " " + userData.name.last}</Text>
                            <Text fontSize={"sm"}>{userData.email}</Text>
                        </VStack>
                    </HStack>
                    <HStack space={3} justifyContent="center" alignItems="center">
                        <TouchableOpacity onPress={() => { setShowModal(true) }}>
                            <Icon type={Icons.Feather} name="bell" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate("Assignment") }}>
                            <Icon type={Icons.Entypo} name="open-book" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Menu w="190" trigger={triggerProps => {
                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <Icon type={Icons.Ionicons} name="ios-menu" size={25} />
                                </Pressable>;
                            }}>
                                <Menu.Item>
                                    <Icon type={Icons.FontAwesome} name="video-camera" size={25} />
                                    Live
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon type={Icons.FontAwesome} name="book" size={25} />
                                    Assignments
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon type={Icons.FontAwesome} name="power-off" size={25} />
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </TouchableOpacity>
                    </HStack>
                </HStack>
            </Box>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Notifications</Modal.Header>
                    <Modal.Body>
                        <Text fontSize="lg">No Notifications</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal(false);
                            }}>
                                OK
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
}

export default Header;
>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
