import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const haber= this.props.type;
    let backgrnd ;

    if (haber=='teknoloji'){
        backgrnd = 'orange';
    } 
    else if (haber=='kultursanat') {
        backgrnd = 'purple';
    } 
    else if (haber=='egitim') {
        backgrnd = 'red';
    } 


    const baslik= this.props.title;
    const icerik= this.props.description;

    return(
      <View style={{backgroundColor:backgrnd}}>
        <Text style={{color:'white',fontSize: 20,}}>{baslik}</Text>
        <Text style={{color:'white',fontSize: 15, padding:15,}}>{icerik}</Text>
      </View>
    ) 
  }
}