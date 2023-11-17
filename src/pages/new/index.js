import { Text, View , StyleSheet} from "react-native";

export function New(){
    return(
        <View styles={styles.container}>
            <Text>New</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
    flex:1,
 },
});