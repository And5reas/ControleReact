import { StyleSheet } from 'react-native';

const sty = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    containerLeft: {
        flex: 1,
    },
    containerRight: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    space: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default sty