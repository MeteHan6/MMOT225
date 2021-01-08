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
  ScrollView,
  View,
  Text,
 
} from 'react-native';


import NewsItem from './App2';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <NewsItem type='teknoloji' title='Türksat 5A uzaya fırlatıldı.' description='Türkiye nin beşinci nesil uydusu Türksat 5A, Türkiye saatine göre saat 05.15’te ABD nin Florida eyaletinde bulunan Cape Canaveral üssünden SpaceX firmasına ait Falcon 9 roketiyle uzaya gönderildi.'/>
    <NewsItem type='kultursanat' title='Troya nın 3 bin 500 yıllık su kemeri restore ediliyor' description='Çanakkale de yer alan Troya Antik Kentindeki 3 bin 500 yıllık su kemeri restorasyonla geleceğe taşınıyor'/>
    <NewsItem type='egitim' title='TRT EBA Anaokulu yayın hayatına  başladı' description='Corona virüs tedbirleri kapsamında okulların kapanmasıyla birlikte sınıfları stüdyoya çeviren ve uzaktan eğitim için çok kısa bir sürede TRT EBA İlkokul, TRT EBA Ortaokul ve TRT EBA Lise’yi kuran TRT, eğitim kanallarını dört farklı içeriğe çıkararak “TRT EBA Anaokulu”nu yayına aldı.'/>
    <NewsItem type='teknoloji' title='İklim değişikliğine karşı iglolu çözüm' description='İranlı Sajjad Navidi adlı mimar geliştirdiği, Penguen Koruma Sistemiyle  küresel Isınmanın neden olduğu buzulların erimesi ve penguenlerin yaşam koşullarını kolaylaştırmayı başardı.'/>
    <NewsItem type='kultursanat' title='Komana Pontika Antik Kentinde Mısır mührü bulundu' description='Tokattaki Komana Pontika Antik Kentinde sürdürülen kazı çalışmalarında Mısır mührü bulundu.'/>
    <NewsItem type='egitim' title='SON DAKİKA HABERİ | Karne notu için yüz yüze sınav' description='SON DAKİKA HABERİ: Milli Eğitim Bakanlığı uzaktan eğitim sürecinde öğrencilere birinci sınav notlarıyla karne verileceğini açıklamıştı. Birinci sınavlarını tamamlamamış olan öğrenciler okullara çağrılarak yüz yüze sınava alınacak. Velilere tarih bildirimi yapılmaya başlandı.'/>
    </ScrollView>
  </SafeAreaView>
  );
};



export default App;