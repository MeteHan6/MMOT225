/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
let marmara = [
{
  sehir:"İstanbul",
  bolge:"marmara"
},
{
  sehir:"Bursa",
  bolge:"marmara"
},
{
  sehir:"Kocaeli",
  bolge:"marmara"
},
{
  sehir:"Balıkesir",
  bolge:"marmara"
},
{
  sehir:"Çanakkale",
  bolge:"marmara"
},
{
  sehir:"Sakarya",
  bolge:"marmara"
},
{
  sehir:"Tekirdağ",
  bolge:"marmara"
},
{
  sehir:"Edirne",
  bolge:"marmara"
},
{
  sehir:"Kırklareli",
  bolge:"marmara"
},
{
  sehir:"Yalova",
  bolge:"marmara"
},
{
  sehir:"Bilecik",
  bolge:"marmara"
}
];
let ege = [
{
  sehir:"İzmir",
  bolge:"ege"
},
{
  sehir:"Manisa",
  bolge:"ege"
},
{
  sehir:"Aydın",
  bolge:"ege"
},
{
  sehir:"Denizli",
  bolge:"ege"
},
{
  sehir:"Muğla",
  bolge:"ege"
},
{
  sehir:"Afyonkarahisar",
  bolge:"ege"
},
{
  sehir:"Kütahya",
  bolge:"ege"
},
{
  sehir:"Uşak",
  bolge:"ege"
}
];
let icanadolu = [
{
  sehir:"Ankara",
  bolge:"icanadolu"
},
{
  sehir:"Konya",
  bolge:"icanadolu"
},
{
  sehir:"Kayseri",
  bolge:"icanadolu"
},
{
  sehir:"Eskişehir",
  bolge:"icanadolu"
},
{
  sehir:"Sivas",
  bolge:"icanadolu"
},
{
  sehir:"Yozgat",
  bolge:"icanadolu"
},
{
  sehir:"Aksaray",
  bolge:"icanadolu"
},
{
  sehir:"Niğde",
  bolge:"icanadolu"
},
{
  sehir:"Nevşehir",
  bolge:"icanadolu"
},
{
  sehir:"Kırıkkale",
  bolge:"icanadolu"
},
{
  sehir:"Karaman",
  bolge:"icanadolu"
},
{
  sehir:"Kırşehir",
  bolge:"icanadolu"
},
{
  sehir:"Çankırı",
  bolge:"icanadolu"
}
];
let akdeniz = [
{
  sehir:"Antalya",
  bolge:"akdeniz"
},
{
  sehir:"Adana",
  bolge:"akdeniz"
},
{
  sehir:"Mersin",
  bolge:"akdeniz"
},
{
  sehir:"Hatay",
  bolge:"akdeniz"
},
{
  sehir:"Kahramanmaraş",
  bolge:"akdeniz"
},
{
  sehir:"Osmaniye",
  bolge:"akdeniz"
},
{
  sehir:"Isparta",
  bolge:"akdeniz"
},
{
  sehir:"Burdur",
  bolge:"akdeniz"
}
];
let danadolu = [
{
  sehir:"Malatya",
  bolge:"doguanadolu"
},
{
  sehir:"Van",
  bolge:"doguanadolu"
},
{
  sehir:"Erzurum",
  bolge:"doguanadolu"
},
{
  sehir:"Elazığ",
  bolge:"doguanadolu"
},
{
  sehir:"Ağrı",
  bolge:"doguanadolu"
},
{
  sehir:"Şırnak",
  bolge:"doguanadolu"
},
{
  sehir:"Muş",
  bolge:"doguanadolu"
},
{
  sehir:"Bitlis",
  bolge:"doguanadolu"
},
{
  sehir:"Kars",
  bolge:"doguanadolu"
},
{
  sehir:"Bingöl",
  bolge:"doguanadolu"
},
{
  sehir:"Erzincan",
  bolge:"doguanadolu"
},
{
  sehir:"Iğdır",
  bolge:"doguanadolu"
},
{
  sehir:"Hakkari",
  bolge:"doguanadolu"
},
{
  sehir:"Ardahan",
  bolge:"doguanadolu"
},
{
  sehir:"Tunceli",
  bolge:"doguanadolu"
}
];
let gdanadolu = [
{
  sehir:"Şanlıurfa",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Gaziantep",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Diyarbakır",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Mardin",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Adıyaman",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Batman",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Siirt",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Kilis",
  bolge:"guneydoguanadolu"
}
];
let karadeniz = [
  {
    sehir:"Samsun",
    bolge:"karadeniz"
  },
  {
    sehir:"Trabzon",
    bolge:"karadeniz"
  },
  {
    sehir:"Ordu",
    bolge:"karadeniz"
  },
  {
    sehir:"Tokat",
    bolge:"karadeniz"
  },
  {
    sehir:"Zonguldak",
    bolge:"karadeniz"
  },
  {
    sehir:"Çorum",
    bolge:"karadeniz"
  },
  {
    sehir:"Giresun",
    bolge:"karadeniz"
  },
  {
    sehir:"Düzce",
    bolge:"karadeniz"
  },
  {
    sehir:"Kastamonu",
    bolge:"karadeniz"
  },
  {
    sehir:"Rize",
    bolge:"karadeniz"
  },
  {
    sehir:"Amasya",
    bolge:"karadeniz"
  },
  {
    sehir:"Bolu",
    bolge:"karadeniz"
  },
  {
    sehir:"Karabük",
    bolge:"karadeniz"
  },
  {
    sehir:"Sinop",
    bolge:"karadeniz"
  },
  {
    sehir:"Bartın",
    bolge:"karadeniz"
  },
  {
    sehir:"Artvin",
    bolge:"karadeniz"
  },
  {
    sehir:"Gümüşhane",
    bolge:"karadeniz"
  },
  {
    sehir:"Bayburt",
    bolge:"karadeniz"
  }
];
let Liste1 = [];

class App extends React.Component {

  constructor(props) {super(props);this.state = { liste: Liste1 };}
  
  marmaraw() {this.setState({liste:marmara});}
  egew() {this.setState({liste:ege});}
  akdenizw() {this.setState({liste:akdeniz});}
  icAnadoluw() {this.setState({liste:icanadolu});}
  dAnadoluw() {this.setState({liste:danadolu});}
  gdAnadoluw() {this.setState({liste:gdanadolu});}
  karadenizw() {this.setState({liste:karadeniz});}

  render(){

  return (
    <>
      <SafeAreaView style={styles.safearea}>

        <View style={styles.c}>
          <TouchableOpacity onPress={() => this.marmaraw()}>
            <Text>Marmara Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.egew()}>
            <Text>Ege Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.akdenizw()}>
            <Text>Akdeniz Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.icAnadoluw()}>
            <Text>İç Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.dAnadoluw()}>
            <Text>Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.gdAnadoluw()}>
            <Text>Güney Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.karadenizw()}>
            <Text>Karadeniz Bölgesi</Text>
          </TouchableOpacity>

        </View>
        <View>

          <FlatList
            data={this.state.liste}
            keyExtractor={(item) => item.sehir}
            renderItem={({item}) => (
              <ScrollView>
              <View>
                <Text style={styles.yazi}>{item.sehir}</Text>
              </View>
              </ScrollView>
              )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
};
const styles = StyleSheet.create({
    safearea:{
      flex:1
    },
    c:{
      borderWidth:1,
    },
});
export default App;
