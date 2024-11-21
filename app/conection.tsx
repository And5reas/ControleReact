import { TextInput, ToastAndroid, View } from "react-native";
import { Stack, router, useFocusEffect } from "expo-router";
import { useState } from "react";


import conectionStyle from "./../assets/style/conectionStyle"
import { saveIp } from "./../services/localStorage"

import * as ScreenOrientation from 'expo-screen-orientation';

export default function conection() {

    const [ip, setIp] = useState("");

    function savingIp() {
        // save the ip to local storage or database
        saveIp(ip)
        router.back();
        ToastAndroid.show(`IP atualizado: ${ip} :D`, ToastAndroid.SHORT);
    }

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    
    useFocusEffect(() => {
        setTimeout(() => {
            changeScreenOrientation();
        })
    });

    return (
        <View style={conectionStyle.container}>
            <Stack.Screen
                options={{
                    title: "Configuração",
                }}
            />
            <TextInput
                style={conectionStyle.textInput}
                keyboardType="number-pad"
                placeholder="Insira o IP do ESP"
                onChangeText={c => setIp(c)}
                autoFocus={true}
                value={ip}
                onEndEditing={savingIp}
            />
        </View>
  );
}
