<<<<<<< HEAD
import React from 'react';
import { Text, Box, Button, View, FlatList, HStack, VStack, } from "native-base";
import {
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from './../styles/MessageStyles';
import Header from '../Components/Header';

const Messages = [
    {
        id: '1',
        userName: 'Biology Class',
        userImg: require('./../../assets/images/biology.jpg'),
        messageTime: '4 mins ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '2',
        userName: 'Chemistry Class',
        userImg: require('./../../assets/images/chemistry.jpg'),
        messageTime: '2 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'Physics Class',
        userImg: require('./../../assets/images/physics.jpg'),
        messageTime: '1 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '4',
        userName: 'Computer Class',
        userImg: require('./../../assets/images/computer_science.jpg'),
        messageTime: '1 day ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '5',
        userName: 'Mathematics Class',
        userImg: require('./../../assets/images/math.jpg'),
        messageTime: '2 days ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '6',
        userName: 'Geogrqphy Class',
        userImg: require('./../../assets/images/geography.jpg'),
        messageTime: '1 week ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
];

const Chat = ({ navigation }) => {
    return (
        <VStack px="4" space={2}>
            <Header />
            <FlatList
                data={Messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card onPress={() => navigation.navigate('Messages', { userName: item.userName })}>
                        <UserInfo>
                            <UserImgWrapper>
                                <UserImg source={item.userImg} />
                            </UserImgWrapper>
                            <TextSection>
                                <UserInfoText>
                                    <UserName>{item.userName}</UserName>
                                    <PostTime>{item.messageTime}</PostTime>
                                </UserInfoText>
                                <MessageText>{item.messageText}</MessageText>
                            </TextSection>
                        </UserInfo>
                    </Card>
                )}
            />
        </VStack>
    );
}

export default Chat;
=======
import React from 'react';
import { Text, Box, Button, View, FlatList, HStack, VStack, } from "native-base";
import {
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from './../styles/MessageStyles';
import Header from '../Components/Header';

const Messages = [
    {
        id: '1',
        userName: 'Biology Class',
        userImg: require('./../../assets/images/biology.jpg'),
        messageTime: '4 mins ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '2',
        userName: 'Chemistry Class',
        userImg: require('./../../assets/images/chemistry.jpg'),
        messageTime: '2 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'Physics Class',
        userImg: require('./../../assets/images/physics.jpg'),
        messageTime: '1 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '4',
        userName: 'Computer Class',
        userImg: require('./../../assets/images/computer_science.jpg'),
        messageTime: '1 day ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '5',
        userName: 'Mathematics Class',
        userImg: require('./../../assets/images/math.jpg'),
        messageTime: '2 days ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '6',
        userName: 'Geogrqphy Class',
        userImg: require('./../../assets/images/geography.jpg'),
        messageTime: '1 week ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
];

const Chat = ({ navigation }) => {
    return (
        <VStack px="4" space={2}>
            <Header />
            <FlatList
                data={Messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card onPress={() => navigation.navigate('Messages', { userName: item.userName })}>
                        <UserInfo>
                            <UserImgWrapper>
                                <UserImg source={item.userImg} />
                            </UserImgWrapper>
                            <TextSection>
                                <UserInfoText>
                                    <UserName>{item.userName}</UserName>
                                    <PostTime>{item.messageTime}</PostTime>
                                </UserInfoText>
                                <MessageText>{item.messageText}</MessageText>
                            </TextSection>
                        </UserInfo>
                    </Card>
                )}
            />
        </VStack>
    );
}

export default Chat;
>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
