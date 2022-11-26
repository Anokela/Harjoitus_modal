
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modal: {
        marginTop: 100,
        padding: 20,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#333',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5  
      },
      close: {
        marginTop: 50,
        color: '#333',
        fontWeight: 'bold',
      }
})
