import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View } from 'native-base';
import TimeFormat from '../components/timeFormat'
import 'react-native-get-random-values';
import FB from '../firebase';
import {v4 as uuid} from 'uuid'

export default class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress =() =>{
        const {url,title} = this.data;
        this.props.onPress({url,title});
    }

    handleOnAddProductPress = () => {
        const id = uuid()
        const dataToDB = {
            title:this.data.title,
            name:this.data.source.name,
        }
        var haberRef = FB.database().ref('haber')
        var sRef = haberRef.child(id);
         FB.database()
        .ref(sRef)
        .set(dataToDB)
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{
                        uri: this.data.urlToImage != null
                            ? this.data.urlToImage : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={3}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{this.data.source.name}</Text>
                        <TimeFormat time={this.data.publishedAt} />
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>Haber İçeriği</Text>
                    </Button>

                    <Button transparent onPress={this.handleOnAddProductPress}>
                        <Text>Kaydet</Text>
                    </Button>
                    <Button transparent>
                        <Text>Daha Sonra Oku</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
}