import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { articles } from "../data";
import Header from "../components/Header";
export default function ArticleDetail({}) {
  const route = useRoute();
  const { id } = route.params;
  const findAr = articles.find((article) => article.id === id);

  return (
    <SafeAreaView>
      <Header />
      <View className="items-center justify-center ">
        <Image className="w-60 h-60 " source={{ uri: findAr.image }} />
        <Text>{findAr.title}</Text>
      </View>
    </SafeAreaView>
  );
}
