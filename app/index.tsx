import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Screen() {

   const getProducts = async () => {
        const response = await fetch('https://site.com/products');
        const json = await response.json();

        //armazena os produtos em algum lugar
   }

   useEffect(() => {
        //monitora state pois está com array vazio
        getProducts();
   }, []);

    return (
        <View style={styles.container}>
            <Text>Tela Inicial</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});