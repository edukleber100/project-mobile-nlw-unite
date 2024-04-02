import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { colors } from "@/styles/colors";
import { isLoading } from "expo-font";

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button( { title, isLoading = false, ...rest }: Props ){
    return (
        <TouchableOpacity 
        activeOpacity={0.7}
        disabled={isLoading} 
        style={styles.button}>
            {
                isLoading ? <ActivityIndicator className="text-green-500"/>

                :
                
                <Text style={styles.buttonText}>
                    {title}
                </Text>
                
                }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      width: "100%",
      height: 50,
      backgroundColor: colors.orange[500],
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    buttonText: {
      color: colors.green[500],
      fontSize: 16,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  });