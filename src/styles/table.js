import { StyleSheet } from 'react-native'

export const tableStyles = StyleSheet.create({
    head: {
        paddingTop: 8,
        paddingBottom: 8,
        alignContent: 'center',
        flex: 1
    },
    headText: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 14,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f8ff',
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    container: {
        marginBottom: 15
    }
})
