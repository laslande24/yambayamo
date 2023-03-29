import React, { useState, useEffect, useCallback } from 'react';
import { View } from "native-base";
import Icon, { Icons } from '../Components/Icons';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

const Messages = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Everyone',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Hello Sir',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                position: "absolute",
                bottom: -500,
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: {
                position: 'absolute',
                height: "8%",
                bottom: 8,
                right: 16,
                left: 16,
                borderRadius: 16,
            }
        });
    }, [navigation]);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <Icon
                        type={Icons.MaterialCommunityIcons}
                        name="send-circle"
                        size={32}
                        style={{ marginBottom: 5, marginRight: 5 }}
                    />
                </View>
            </Send>
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#2e64e5',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#fff',
                    },
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return (
            <Icon
                type={Icons.FontAwesome}
                name="angle-double-down" size={22}
                color='#333'
            />

        );
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
    );
}

export default Messages;