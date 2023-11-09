import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
     <View style={{
        borderWidth: 1,
        borderTopWidth: 5,
        borderBottomWidth: 10,
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderColor: '#33BEFF',
        alignItems: 'center', 
      }}>
        <Text>Hello Yinzers</Text>
      </View>

      <View style={[{ 
        backgroundColor: '#0077b6', 
        margin: 10,
        marginTop: 50, 
        marginLeft: 50, 
        marginRight: 100, 
        marginBottom: 50,
        padding: 10,  
        paddingTop: 100, 
        paddingLeft: 100, 
        paddingRight: 100,
        paddingBottom: 100, 
        paddingHorizontal: 50, 
        paddingVertical: 50,
      }]}>
        <Text style={{ fontSize: 10}}>Goodbye Yinzers</Text>
      </View>

      <View style={[{ backgroundColor: 'red'}]}>
        <Text style={[{ 
          color: 'white', 
          fontSize: 30, 
          fontWeight: 'bold',
          textAlign: 'center', 
          padding: 10, 
          }]} 
          >Welcome Back Yinzers
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default App;
