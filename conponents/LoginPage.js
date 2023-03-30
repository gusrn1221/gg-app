import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';



class LoginPage extends Component {

    render() {
        const {navigation} = this.props;
        
        return (
            <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>일러스트 필요</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
          </View>
            // <View style={{flex: 1, justifyContent: 'center'}}>
            //     <TouchableOpacity
            //             onPress={()=> {navigation.navigate("Second")}}
            //     >
            //         <Text>
            //             This is First
            //         </Text>
            //     </TouchableOpacity>
            // </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      //flex: 1은 전체 화면을 가져간다는 뜻입니다
      flex: 1,
      //영역의 배경 색을 결정합니다
      backgroundColor: '#fff',
      //아래 두 속성은 영역 안의 컨텐츠들의 배치를 결정합니다. 
      //flex를 자세히 다룰때 같이 자세히 다룹니다
      justifyContent:"center",
      alignContent:"center"
    },
    textContainer: {
      //영역의 바깥 공간 이격을 뜻합니다
      margin:50,
      //영역 안의 컨텐츠 이격 공간을 뜻합니다
      padding: 10,
      //테두리의 구부러짐을 결정합니다
      borderRadius:10,
      //테두리의 두께를 결정합니다
      borderWidth:2,
      //테두리 색을 결정합니다
      borderColor:"#000",
      //테구리 스타일을 결정합니다. 실선은 solid 입니다
      borderStyle:"dotted",
  
    },
    textStyle: {
      //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
      color:"red",
      //글자의 크기를 결정합니다
      fontSize:20,
      //글자의 두께를 결정합니다
      fontWeight:"700",
      //가로기준으로 글자의 위치를 결정합니다
      textAlign:"center"
    },
    button: {
      backgroundColor:"orange",
      padding:20,
      borderRadius:15,
      margin:10,
    },
    buttonText: {
      color:"#fff",
      fontSize:15,
      fontWeight:"700",
      textAlign:"center",
    }
  });

export default LoginPage;