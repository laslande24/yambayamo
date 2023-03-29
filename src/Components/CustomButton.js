import React from "react";
import { Text, Box } from "native-base";
import { TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, text, }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Box bg="#547ebb" p="3" rounded="full" mt="5">
                <Text textAlign="center" fontSize="lg" color="white" fontWeight="medium">{text}</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default CustomButton