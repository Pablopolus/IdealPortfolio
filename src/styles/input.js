import { StyleSheet } from 'react-native'

export const inputStyle = StyleSheet.create({
    textStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 14,
        lineHeight: 21,
        flex: 1
    },
    textBlue: {
        color: 'blue'
    },
    labelStyle: {
        fontSize: 14,
        flex: 1
    },
    containerStyle: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    listStyle: {
        flex: 1
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerContainerStyle: {
        flexDirection: 'column'
    }
})
