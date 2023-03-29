import React, { useState } from 'react';
import {
    Center, VStack, Box, Select, Input, ScrollView, Avatar
} from "native-base";
import { TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../Components/Icons';
import { useSelector } from 'react-redux';
import CustomInput from '../Components/CustomInput';
import { useForm } from "react-hook-form";

const UserProfile = () => {

    const userData = useSelector((state) => state.auth.userData);

    const [gender, setGender] = useState(userData.gender);

    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            firstName: userData.name.first,
            lastName: userData.name.last,
            email: userData.email,
            calendar: userData.dob.date,
            phone: userData.phone
        },
    })

    return (
        <VStack space={4}>
            <Center mt={3}>
                <Box position="relative">
                    <Avatar bg="gray.300" color={"white"} size={"2xl"} source={{
                        uri: userData.picture.large
                    }}>
                    </Avatar>
                    <Box bg="blue.600" p="0.5" rounded="lg" position="absolute" top="24" right="0">
                        <TouchableOpacity>
                            <Icon type={Icons.MaterialIcons} name="edit" size={25} color={"#fff"} />
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Center>
            <ScrollView h="full" px="2">
                <CustomInput
                    name="firstName"
                    placeholder="First Name"
                    control={control}
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 5,
                            message: 'first name should be at least 5 characters long',
                        },
                    }}
                    variant="Filled"
                    type="text"
                    bg="gray.200" size={15} rounded="full" mb="3"
                    isDisabled={true}
                />
                <CustomInput
                    name="lastName"
                    placeholder="Last Name"
                    control={control}
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 5,
                            message: 'last name should be at least 5 characters long',
                        },
                    }}
                    variant="Filled"
                    type="text"
                    bg="gray.200" size={15} rounded="full" mb="3"
                    isDisabled={true}
                />
                <CustomInput
                    name="email"
                    placeholder="Email"
                    variant="Filled"
                    control={control}
                    rules={{
                        required: 'Email is required',
                    }}
                    RightIconName="ios-mail"
                    type="text"
                    bg="gray.200" size={15} rounded="full" mb="3"
                    isDisabled={true}
                />
                <CustomInput
                    name="calendar"
                    type="date"
                    placeholder="Date of Birth"
                    variant="Filled"
                    control={control}
                    rules={{
                        required: 'Email is required',
                    }}
                    RightIconName="ios-calendar"
                    bg="gray.200" size={15} rounded="full" mb="3"
                    isDisabled={true}
                />
                <Select selectedValue={gender} minWidth="200" mb="3" accessibilityLabel="Gender"
                    placeholder="Gender" isDisabled={true} _selectedItem={{
                        bg: "teal.600",
                        endIcon: <Icon type={Icons.Ionicons} name="ios-checkmark-circle" size={5} color="#a3a3a3" />
                    }} mt={1} onValueChange={itemValue => setGender(itemValue)}>
                    <Select.Item label="Male" value="male" />
                    <Select.Item label="Female" value="female" />
                </Select>
                <CustomInput
                    name="phone"
                    control={control}
                    type="number"
                    placeholder="Phone number"
                    variant="Filled"
                    RightIconName="ios-call"
                    bg="gray.200" size={15} rounded="full" mb="3"
                    isDisabled={true}
                />
            </ScrollView>
        </VStack>
    )
}

export default UserProfile;