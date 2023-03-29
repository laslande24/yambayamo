import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Dimensions } from 'react-native';
import store from './src/redux/app/store';
import RootStack from './src/Navigation/RootStack';

export default function App() {

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <RootStack />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider >
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    flex: 1
  }
})