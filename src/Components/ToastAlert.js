import React from 'react'
import { Text, VStack, HStack, Alert, } from "native-base";

const ToastAlert = ({ message, variant, status, color }) => {
    return (
        <Alert w="100%" variant={variant} colorScheme={status} status={status}>
            <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack space={2} flexShrink={1} alignItems="center">
                        <Alert.Icon />
                        <Text color={color}>
                            {message}
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </Alert>
    );
}

export default ToastAlert