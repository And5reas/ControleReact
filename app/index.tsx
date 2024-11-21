import { Stack, useRouter, useFocusEffect } from "expo-router";
import { View } from "react-native";
import { AntDesign, MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { setStatusBarStyle } from "expo-status-bar";

import sty from "./../assets/style/style";
import Colors from "../constants/Colors";
import { Btn } from "./../containers"

import * as ScreenOrientation from 'expo-screen-orientation';

export default function Index() {

  const router = useRouter();

  const iconeDirect = (typ:any) => <AntDesign name={typ} size={32} color="black"></AntDesign>

  const iconeTiro  = <MaterialCommunityIcons name="target" size={32} color="black"></MaterialCommunityIcons>
  const iconeBomba = <MaterialCommunityIcons name="minecraft" size={32} color="#3CA92F"></MaterialCommunityIcons>

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  useFocusEffect(() => {
    setTimeout(() => {
      setStatusBarStyle('light');
      changeScreenOrientation();
    })
  });

  return (
    <View style={sty.container} >
      <Stack.Screen
        options={{
          title: 'Controle Creeper',
          headerStyle: { backgroundColor: '#C7AF65' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <View onTouchStart={() => router.push("/conection")}>
              <FontAwesome6 name="gear" size={32} color="white"></FontAwesome6>
            </View>
          )
        }}
      />
      <View style={sty.containerLeft}>
        <View style={[sty.center, {alignItems: 'flex-end'}]}>
          <Btn command="F" backgroundColor={Colors.buttonDirect.bg} icone={iconeDirect("caretup")}></Btn>
        </View>
        <View style={sty.space}>
          <Btn command="E" backgroundColor={Colors.buttonDirect.bg} icone={iconeDirect("caretleft")}></Btn>
          <Btn command="D" backgroundColor={Colors.buttonDirect.bg} icone={iconeDirect("caretright")}></Btn>
        </View>
        <View style={[sty.center, {alignItems: 'flex-start'}]}>
          <Btn command="T" backgroundColor={Colors.buttonDirect.bg} icone={iconeDirect("caretdown")}></Btn>
        </View>
      </View>
      <View style={sty.containerRight}>
        <Btn command="L" backgroundColor={Colors.buttonFire.bg} icone={iconeTiro}></Btn>
        <Btn command="X" backgroundColor={Colors.buttonFire.creeper} icone={iconeBomba}></Btn>
      </View>
    </View>
  );
}
