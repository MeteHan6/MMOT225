import React from 'react';
import {View,Text, ScrollView,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default class RC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      restoran:null,
      yorum:[]
    }
  }
  componentDidMount(){
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=ist&sort=rating&order=desc',{
      method:'GET',
      headers:{
        'user-key':'d3dcd147d59a8ce385536ad3bd125109'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(rr=>{
      this.setState({restoran:rr.restaurants});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  asd(id){
    var str = 'https://developers.zomato.com/api/v2.1/reviews?res_id=16694272';
    fetch(str,{
      method:'GET',
      headers:{
        'user-key':'d3dcd147d59a8ce385536ad3bd125109'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(rr=>{
      this.setState({yorum:rr.user_reviews});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  render(){
    if (!this.state.restoran){
      return (<View></View>);
    }
    return(
      <View>
        <ScrollView>
        {
          this.state.restoran.map(ea=>{
            return(<TouchableOpacity onPress={()=>this.asd(ea.restaurant.id)}>
              <Text key={ea.restaurant.id}>{ea.restaurant.name}</Text>
              </TouchableOpacity>)
          })
        }
        </ScrollView>
          <Text>Müşteri Yorumları</Text>
          <ScrollView style={{backgroundColor:'black',padding:20}} >
            {this.state.yorum.map(ea=>{
              return(<Text style={{color:'white'}} key={ea.review.id}>{ea.review.review_text}</Text>)
            })}
          </ScrollView>
        </View>
)
  }
}