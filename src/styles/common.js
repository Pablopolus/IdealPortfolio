import { StyleSheet } from 'react-native'

export const commonStyles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        backgroundColor: 'white',
        flex: 1
    },
    titleSection: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 15
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    listContainer: {
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10
    },
    listText: {
        fontSize: 16
    },
    text: {
        fontSize: 15,
        marginBottom: 2
    }
})
