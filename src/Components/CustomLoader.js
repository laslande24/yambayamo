<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View, Text } from 'native-base';
import LottieView from 'lottie-react-native';

const CustomLoader = ({ loaderUri, color, opacity, style, containerStyle, fontSize, fontColor, text }) => {

    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container, containerStyle,
        { backgroundColor: color, opacity: opacity, }]}>
            <LottieView source={loaderUri} autoPlay loop style={style} />
            <Text fontSize={fontSize} color={fontColor} fontWeight="semibold">{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        height: Dimensions.get("screen").height
    },
});

export default CustomLoader;
=======
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View, Text } from 'native-base';
import LottieView from 'lottie-react-native';

const CustomLoader = ({ loaderUri, color, opacity, style, containerStyle, fontSize, fontColor, text }) => {

    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container, containerStyle,
        { backgroundColor: color, opacity: opacity, }]}>
            <LottieView source={loaderUri} autoPlay loop style={style} />
            <Text fontSize={fontSize} color={fontColor} fontWeight="semibold">{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        height: Dimensions.get("screen").height
    },
});

export default CustomLoader;
>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
