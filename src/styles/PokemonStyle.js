import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002247',
    },

    backScreen:{
        marginTop: 40,
        marginLeft: 40,
        display: 'flex',
    },
    iconImage:{
        width: 50,
        height: 50,
        marginLeft: 115,
        position: 'absolute',
    },
    pokemonName:{
        color: "#000",
        fontFamily: 'serif',
        fontSize: 30,
        marginTop: 10,
    },
    cardNameImage:{
        backgroundColor:"#E7E7E7",
        height: 280,
        width: 280,
        borderRadius: 30,
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 55,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,
    },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
        
    },
    image:{
        width: 200,
        height: 200,
        marginTop: 10,
    },
    cardAbility:{
        backgroundColor: "#FFCB88",
        width: 150,
        height: 180,
        marginLeft: 165,
        marginTop: 50,
        borderRadius: 30,
        alignItems: 'center',
        zIndex: 1000,

        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
    },
    titleAbility:{
        fontFamily: 'serif',
        color: "#000",
        fontSize: 20,
        marginTop: 10,
    },
    ability:{
        color: "#000",
        fontSize: 15,
        marginTop: 10,
        backgroundColor: "#E7E7E7",
        padding: 6,
        marginTop: 20,
        
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    imagePokeball:{
        width: 200,
        height: 200,
    },
    pokeball:{
        position: 'absolute',
        marginLeft: 0,
        bottom:0,
        zIndex: 0,
    },
    message:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMessage:{
        fontFamily: 'serif',
        color: "#fff",
        fontSize: 25,
        marginTop: 40,
        width: 250,
        textAlign: 'center'
    }
});

module.exports = styles;