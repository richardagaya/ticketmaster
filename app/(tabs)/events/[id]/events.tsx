// app/event/[id].tsx
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function EventDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Event ID: {id}</Text>
    </View>
  );
}
