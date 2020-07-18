import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    image: {
        width:150,
        height:150,
        marginBottom: 40,
        alignSelf: "center"
    },
    text: {
        color:"white",
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center"
    }
})

export default Styles