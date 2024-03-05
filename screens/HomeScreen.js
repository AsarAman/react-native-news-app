import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Image,
} from "react-native";

import { articles } from "../data";
import Header from "../components/Header";

import CustomButton from "../components/Button";
import {  useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [active, setActive] = useState(0);

  const [data, setData] = useState(articles);
  const navigation = useNavigation();

  const handlePress = (index) => {
    setActive(index);
  };

  return (
    <SafeAreaView className="">
      <ScrollView>
        <Header />
        <View className="px-2 mb-4 flex-row items-center">
          <TextInput
            className="border text-left px-2 rounded-lg flex-1 mr-3"
            placeholder="Search me..."
          ></TextInput>
          <View>
            <Button title="Search" />
          </View>
        </View>
        <ScrollView horizontal className="px-2 mb-4  ">
          {data.map((categoryBtn, index) => {
            const { category } = categoryBtn;
            return (
              <CustomButton
                isActive={index === active}
                setIsActive={() => handlePress(index)}
                key={categoryBtn.id}
                btnText={category}
              />
            );
          })}
        </ScrollView>
        <View className="mb-4 px-2">
          <Text className="text-blue-600 font-bold text-lg">Top Headlines</Text>
          <ScrollView className="mt-4" horizontal={true}>
            {data.map((article, index) => {
              return (
                <View className=" mr-4 " key={index}>
                  <Image
                    className=" w-60 h-40 object-cover "
                    source={{ uri: article.image }}
                  />

                  <Text
                    onPress={() =>
                      navigation.navigate("Article Detail", { id: article.id })
                    }
                    className="w-60 mt-2"
                  >
                    {article.title}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View className="p-2">
          <Text className="text-2xl font-bold text-blue-600 mb-4 ">Latest</Text>
          <View>
            {data.slice(5).map((item) => {
              return (
                <View
                  key={item.id}
                  className="flex-row items-center gap-3 mb-4"
                >
                  <Image source={{ uri: item.image }} className="w-40 h-16" />
                  <Text
                    onPress={() =>
                      navigation.navigate("Article Detail", { id: item.id })
                    }
                  >
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
