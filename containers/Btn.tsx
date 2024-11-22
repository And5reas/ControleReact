import { View, StyleSheet, Vibration, ToastAndroid } from "react-native"
import { useState } from "react";

import { getIp } from "./../services/localStorage"

export default function Btn(props: {command: string, backgroundColor: any, icone: any}) {

    const [clicked, setClicked] = useState(false);
    
    async function handlePressIn() {
        const request = await fetch(`http://${await getIp()}/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `comando=${props.command}`
        });

        
        if (request.ok) {
            Vibration.vibrate(160, false);
            setClicked(true);
        }
    }

    async function handlePressOut() {
        const request = await fetch(`http://${await getIp()}/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'comando=I',
        });

        if (request.ok) {
            setClicked(false);
        }
    }

    return (
        <View
            onTouchStart={handlePressIn}
            onTouchEnd={handlePressOut}
            style={[styles.container, {backgroundColor: clicked ? props.backgroundColor.pressed : props.backgroundColor.default}]}
        >
            {props.icone}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 50
    }
});