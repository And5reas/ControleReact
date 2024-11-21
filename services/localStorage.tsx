import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveIp(value: string) {
    await AsyncStorage.setItem('ip', value);
}

export async function getIp() {
    return await AsyncStorage.getItem('ip');
}