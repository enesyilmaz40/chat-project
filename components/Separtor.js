import react from "react";
import {View,StyleSheet} from 'react-native';

const Separator = () => {
    return (
        <View style={styles.sepratorr}></View>
    )
}

const styles = StyleSheet.create({
    seprator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:'#E2E2E2',
        marginStart:88
        
    }
})

export default Separator;