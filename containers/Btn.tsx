import { View, StyleSheet, Vibration, ToastAndroid } from "react-native"
import { useState } from "react";

import { getIp } from "./../services/localStorage"

export default function Btn(props: {command: string, backgroundColor: any, icone: any}) {

    const [clicked, setClicked] = useState(false);
    
    async function handlePressIn() {
        try{
            const request = await fetch(`http://${await getIp()}/?comando=${props.command}`, {
                method: 'POST',
            });

            if (props.command == "L" || props.command == "X") {
                Vibration.vibrate(160, false);
                setClicked(click => !click);
            } else
            if (request.ok) {
                Vibration.vibrate(160, false);
                setClicked(true);
            }
        } catch (e: any) {
            const errorMessage = e.message || String(e);
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
    }

    async function handlePressOut() {
        if (props.command == "L" || props.command == "X") {
            // pass
            return;
        }

        const request = await fetch(`http://${await getIp()}/?comando=${props.command}`, {
            method: 'POST',
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