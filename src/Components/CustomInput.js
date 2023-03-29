import React from 'react';
import { View, Text, Input, Pressable, } from "native-base";
import { Controller } from 'react-hook-form';
import Icon, { Icons } from './../Components/Icons';

const CustomInput = ({ control, name, rules = {}, placeholder, leftIconName, RightIconName, variant,
    type, bg, size, rounded, mb, isDisabled }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={{ borderColor: error ? 'rgba(255,0,0,0.8)' : '#f2f2f2' }}>
                    <Input variant={variant} type={type} bg={bg} size={size} round={rounded} mb={mb}
                        w={{
                            base: "100%",
                            md: "50%"
                        }} InputLeftElement={
                            <Icon type={Icons.Ionicons} name={leftIconName} size={20} style={{ marginRight: 10 }} color="#a3a3a3" />
                        }
                        InputRightElement={
                            <Icon type={Icons.Ionicons} name={RightIconName} size={20} color="#a3a3a3" style={{ marginRight: 8 }} />
                        }
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder} 
                        isDisabled={isDisabled}/>
                    {error && (<Text style={{ color: 'rgba(255,0,0,0.9)', opacity: 0.5, alignSelf: 'flex-start', marginTop: 5 }}>{error.message}</Text>)}
                </View>
            )
            }
        />
    )
}
export default CustomInput;