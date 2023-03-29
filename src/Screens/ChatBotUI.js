import React, { useState, useEffect } from 'react';
import { View, useToast } from "native-base";
import { useSelector, useDispatch } from 'react-redux';
import { chatBotSelector, clearState, sendMessage } from '../redux/feature/ChatBotSlice';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import Icon, { Icons } from '../Components/Icons';

const ChatBotUI = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch();

    const { loading, errorMessage } = useSelector(chatBotSelector)

    const toast = useToast();

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

    useEffect(() => {
        dispatch(clearState())
        setMessages([
            {
                _id: 1,
                text: 'Hello \nHow Can I help you ?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('./../../assets/images/bot.png'),
                },
            },
        ]);
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

    const onSend = async (newMessages = []) => {

        setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
        console.log("cmessage -->", newMessages[0].text)
        dispatch(sendMessage(newMessages[0].text)).then((response) => {
            const chatbotMessage = {
                _id: response.payload.id,
                text: response.payload.text,
                createdAt: response.payload.createdAt,
                user: {
                    _id: response.payload.user.id,
                    name: response.payload.user.name,
                },
            };
            setMessages((previousMessages) => GiftedChat.append(previousMessages, [chatbotMessage]));
        })
    };

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
                        backgroundColor: 'red',
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
            onSend={onSend}
            user={{
                _id: 'user',
                name: 'romaric',
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            isTyping={loading === "pending" ? true : false}
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            placeholder="Ask me anything"
            showAvatarForEveryMessage
        />
    );
};

export default ChatBotUI