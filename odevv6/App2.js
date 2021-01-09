import React from 'react';
import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';
export default class Vericekme extends React.Component{
    constructor(props){
        super(props);
        this.state={
        ea:[],
        }
    }
    componentDidMount = async ()=>{
        let aa =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(a=>a.json());
        
            this.setState({ea:aa})
    };
    handlePress = id =>{
        this.setState({x:id})
    }
    liste(){
        let render=[];
        this.state.ea.map((x,y)=>{

            if(x.id===this.state.x){
               render.push(
               <Text style={{minHeight:350, fontSize:15,backgroundColor:'grey',color:'white'}}>
              <Text style={{ fontSize:15,color:'blue'}}>id:</Text> {x.id}
               <Text style={{ fontSize:15, color:'blue'}}>{"\n"}title:</Text>{x.title}
               <Text style={{ fontSize:15,color:'blue'}}>{"\n"}body:</Text>{x.body}</Text>
               
               )
            }
        }
        )
        return render
    }
    render(){
        return(
        <View style={{flex:1}}>
            <FlatList style = {{flex:1,minHeight:257,backgroundColor: 'red'}}
                let data = {this.state.ea}
                renderItem={({item})=>{
                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{minHeight: 15, backgroundColor: 'white'}}>
                           <Text style={{textAlign:'center',color:'white', backgroundColor:'green',fontSize:15}}>{item.title}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                />
             <ScrollView style={{flex:1,minHeight:400}}>
                {this.liste()}
                </ScrollView>
        </View>
        )
    }
}