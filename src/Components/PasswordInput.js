import React from 'react';
import { View, Text, Input, Pressable, } from "native-base";
import { Controller } from 'react-hook-form';
import Icon, { Icons } from './Icons';

const PasswordInput = (props) => {
    return (
        <Controller
            control={props.control}
            name={props.name}
            rules={props.rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={{ borderColor: error ? 'rgba(255,0,0,0.8)' : '#f2f2f2' }}>
                    <Input variant="underlined" w={{
                        base: "100%",
                        md: "50%"
                    }} type={props.show ? "text" : "password"} InputLeftElement={
                        <Icon type={Icons.FontAwesome} name={props.leftIconName} size={20} color="#a3a3a3" style={{ marginRight: 16 }} />
                    }
                        InputRightElement={
                            <Pressable onPress={() => props.setShow(!props.show)}>
                                <Icon type={Icons.Ionicons} name={props.show ? "eye" : "eye-off"} size={20} color="#a3a3a3" />
                            </Pressable>
                        }
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={props.placeholder} />
                    {error && (<Text style={{ color: 'rgba(255,0,0,0.9)', opacity: 0.5, alignSelf: 'flex-start', marginTop: 5 }}>{error.message}</Text>)}
                </View>
            )
            }
        />
    )
}
export default PasswordInput;