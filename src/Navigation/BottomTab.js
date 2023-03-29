; import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Easing, StyleSheet, TouchableOpacity } from 'react-native'
import Icon, { Icons } from './../Components/Icons';
import Colors from './../Constants/Colors';
import * as Animatable from 'react-native-animatable';
import Home from './../Screens/Home';
import Setting from './../Screens/Setting';
import Chat from './../Screens/Chat';
import Courses from './../Screens/Courses'
import CourseDetail from '../Screens/CourseDetail';
import Messages from '../Screens/Message';
import { View, HStack, VStack, Avatar, Text } from "native-base";
import Assignment from '../Screens/Assignment';
import ChatBotUI from '../Screens/ChatBotUI';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";
import UserProfile from '../Screens/UserProfile';

const CourseStack = createNativeStackNavigator();

const HomeStack = createStackNavigator();

const ChatStack = createNativeStackNavigator();

const SettingStack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const CourseStackScreen = () => {
  return (
    <CourseStack.Navigator screenOptions={{
      headerShown: true,
      headerBackVisible: true,
    }}>
      <CourseStack.Screen name="Course" backBehavior='initialRoute' component={Courses} options={{ headerShown: false }} />
      <CourseStack.Screen name="Course Detail" component={CourseDetail} />
    </CourseStack.Navigator>
  );
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}>
      <HomeStack.Screen name="HomeScreen" backBehavior='initialRoute' component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="Assignment" component={Assignment} />
      <HomeStack.Screen name="ChatBot" component={ChatBotUI} options={{
        gestureDirection: 'vertical',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
      }} />
    </HomeStack.Navigator>
  );
}

const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator screenOptions={{
      headerShown: true,
      headerBackVisible: true,
    }}>
      <ChatStack.Screen name="Chat" backBehavior='initialRoute' component={Chat} options={{ headerShown: false }} />
      <ChatStack.Screen name="Messages" component={Messages} options={({ route }) => ({
        headerLeft: () => (
          <HStack space={4} alignItems="center" justifyContent="center">
            <Avatar bg="green.500" color={"white"} size={"sm"} source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
              RL
            </Avatar>
            <VStack>
              <Text fontSize="lg" fontWeight="semibold" lineHeight="0">{route.params.userName}</Text>
              <Text fontSize="sm" fontWeight="light" lineHeight="0">Last class: 4 min ago</Text>
            </VStack>
          </HStack>
        ),
        title: "",
        headerRight: () => (
          <HStack space={4} alignItems="center" justifyContent="center">
            <Icon type={Icons.Ionicons} name="ios-call" size={20} />
            <Icon type={Icons.Ionicons} name="ios-videocam" size={20} />
            <Icon type={Icons.MaterialCommunityIcons} name="dots-horizontal-circle-outline" size={25} />
          </HStack>
        ),
      })} />
    </ChatStack.Navigator >
  );
}

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={{
      headerShown: true,
      headerBackVisible: true,
    }}>
      <SettingStack.Screen name="Setting" backBehavior='initialRoute' component={Setting} options={{ headerShown: false }} />
      <SettingStack.Screen name="User Profile" component={UserProfile} />
    </SettingStack.Navigator >
  );
}

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: HomeStackScreen },
  { route: 'Classes', label: 'Classes', type: Icons.MaterialIcons, icon: 'class', component: Assignment },
  { route: 'Courses', label: 'Courses', type: Icons.MaterialIcons, icon: 'my-library-books', component: CourseStackScreen },
  { route: 'ChatStack', label: 'Chat', type: Icons.Ionicons, icon: 'chatbubbles', component: ChatStackScreen },
  { route: 'SettingStack', label: 'Setting', type: Icons.Ionicons, icon: 'ios-settings-sharp', component: SettingStackScreen },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function BottomTab() {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Messages') {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          item.route === "ChatStack" ?
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={({ route }) => ({
                tabBarVisible: getTabBarVisibility(route),
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              })}
            /> :
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={({ route }) => ({
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              })}
            />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: "8%",
    position: 'absolute',
    bottom: 8,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  }
})