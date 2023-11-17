import { Text, View , StyleSheet} from "react-native";

export function Profile(){
    return(
        <View styles={styles.container}>
            <Text>profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
    flex:1,
 },
});