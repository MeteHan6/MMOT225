import React, { useContext,Component} from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs, Button } from 'native-base';
import Tab1 from '../screens/tabOne';
import Tab2 from '../screens/tabTwo';
import Tab3 from '../screens/tabThree';
import { abs } from 'react-native-reanimated';


const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);

        return (
            <Container>
                <Header style={{ backgroundColor: '#2427FF' }} hasTabs >
                    <Left />
                       <Button transparent style={styles.btn1} buttonTitle='Logout' onPress={() => logout()} ><Text>Çıkış Yap</Text></Button>
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Genel">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Teknoloji">
                        <Tab3 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Kaydedilenler">
                        <Tab2 />
                    </Tab>
                </Tabs>    
            </Container>
            
        );
    
}
export default HomeScreen;
const styles = StyleSheet.create({
  navButton: {
    marginTop: 15,
  },
  btn1 : {
      position: 'absolute',
      top:0,
      left:0,
  }
})