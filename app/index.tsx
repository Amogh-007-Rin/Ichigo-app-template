import { Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="bg-black text-cyan-200">This is a starter template for React Native Application</Text>
      <Text className="bg-black text-cyan-200">Hello from React Native</Text>
      <TouchableOpacity>
        <Text className="bg-blue-200 p-2 m-2">Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
