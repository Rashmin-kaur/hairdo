import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import CustomTextInput from '../generic/CustomTextInput';
import CustomDropdown from '../generic/CustomDropdown';
import countryList from '../assets/Json/country.json';
import FormDisplay from './FormDisplay';

const BusinessDetails = ({ formData, onEventChange }) => {


    useEffect(() => {
    }, []);

    const businessFormField = [
        { label: '', placeholder: 'Business email address', key: 'state', component: CustomTextInput, parentKey: 'businessInformation' },
        { label: '', placeholder: 'Store Name', key: 'country', component: CustomTextInput, parentKey: 'businessInformation' },
        { label: '', placeholder: 'Street/house number', key: 'street', component: CustomTextInput, parentKey: 'businessAddressInformation' },
        { label: '', placeholder: 'City/Town', key: 'city', component: CustomTextInput, parentKey: 'businessAddressInformation' },
        { label: '', placeholder: 'Postal/ZIP Code', key: 'pincode', component: CustomTextInput, parentKey: 'businessAddressInformation', type: 'numeric' },
        { label: '', placeholder: 'Country', key: 'country', component: CustomTextInput, parentKey: 'businessAddressInformation' },
        { label: '', placeholder: 'Province/states', key: 'state', component: CustomTextInput, parentKey: 'businessAddressInformation' },
    ];

    const [countries, setCountries] = useState([...countryList]);

    return (
        <View>
            <FormDisplay
                formFields={businessFormField}
                formData={formData}
                onEventChange={(key, value, parentKey) => onEventChange(key, value, parentKey)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     padding: 20,   //
    //   },
    fullWidthInput: {
        width: '100%',
    },
    form: {
        marginBottom: 4,
    },
    container: {
        flex: 1,
        // margin: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        // paddingHorizontal: 30,
        paddingVertical: 40,
        paddingTop: 40,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    },

    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // backgroundColor: 'lightgray',
        padding: 10,
        zIndex: 1,
    },

    // nestedContainer: {
    //     // width:'80%',
    //     marginHorizontal: '10px'
    // },
    //   title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //   },
    scrollViewContent: {
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 10
        // Adjust this value to match header height
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,

    },
    inputContainer: {
        marginBottom: 15,

    },
    label: {
        fontSize: 13,
        fontWeight: 500,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#00000061',
        padding: 8,
        borderRadius: 6,
    },
    flexInput: {
        borderWidth: 1.5,
        borderColor: '#b9b9b9',
        padding: 8,
        borderRadius: 6,
        width: '75%'
    },
    picker: {
        borderWidth: 1,
        borderColor: '#00000061',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20
    },

    saveButton: {
        width: '40%',
        backgroundColor: '#F1ECEC',
        padding: 7,
        borderRadius: 5,
        alignItems: 'center',
        boxShadow: 'grey 0px 1px 15px 0px',

    },
    saveButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500,
    },
    flexContainer: {
        flexDirection: 'row',
        // width: 'inherit'
    },

    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '13px'
    },
    dropdownWidth: {
        width: '38%',
    },
    textWidth: {
        width: '50%'
    }
});

export default BusinessDetails;