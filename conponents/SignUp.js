import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



class SignUp extends Component {
    state = {
        id : '',
        passWd : '',
        name : '',

    }
    render() {
        const {navigation} = this.props;
        
        return (
        <View style={styles.container}>
            <Text style={styles.headerText}>회원가입</Text>
            <View style={styles.textBody}>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>아이디 :    </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {this.setState({id: text})}}
                    placeholder="아무거나 입력해주세요."
                />
            </View>
            <View style={styles.textBody}>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>비밀번호 : </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {this.setState({passWd: text})}}
                    placeholder="아무거나 입력해주세요."
                />
            </View>
            <View style={styles.textBody}>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>이름 :       </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => {this.setState({name: text})}}
                    placeholder="아무거나 입력해주세요."
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={this.goSingUp}>
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
    
    goSingUp = () => {
        console.log(this.state.id, this.state.passWd, this.state.name);
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
    //   justifyContent:"center",
    //   alignContent:"center"
    },
    headerText: {
        paddingTop: 50,
        alignItems: 'center',
        fontSize: 30,
        textAlign:"center",
        marginBottom : 100,
    },
    textBody:{
        padding : 10,
        flexDirection : "row",
        justifyContent: "flex-start"
    },
    questionView:{
        justifyContent :"center",
        marginRight : 10
    },
    questionText:{
        justifyContent :"center",
        marginTop: 10,
        marginBottom: 10,
    },
    textInput: {
        
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        width : "80%"
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
      marginTop : "20%"
    },
    buttonText: {
      color:"#fff",
      fontSize:15,
      fontWeight:"700",
      textAlign:"center",
    }
  });

export default SignUp;