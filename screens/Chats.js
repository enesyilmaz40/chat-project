import React from "react";
import { View, SafeAreaView,StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separtor";
const Chats = () => {
    return(
        <SafeAreaView>
            <ContactRow
            name="Enes Yılmaz"
            subtitle ="React Native Başlandı"
            onPress={()=>{
                alert('Hi, Enes Yılmaz Touched')
            }}
            />
            <Separator/>
            <ContactRow
            name="Zeynep Yılmaz"
            subtitle="Naber"
            onPress={()=>{
                alert('Hi, Enes Yılmaz Touched')
            }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    seprator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:'#E2E2E2',
        marginStart:88
        
    }
})


export default Chats;