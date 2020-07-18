import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    name: {
        textAlign: 'center',
        color:'white',
        fontSize: 24,
        marginBottom: 5,
        marginTop: 5,
        fontWeight: 'bold'
    },
    email: {
        textAlign: 'center',
        color:'white',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 0
    },
    avatar: {
        width:150,
        height:150,
        borderRadius:150
    },
    background:{
        marginTop:150, 
        width:158, 
        height:158, 
        borderRadius:158, 
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center'
    },
})

export default Styles