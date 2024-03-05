import { View,Text } from "react-native"
function Header (){
    return(
        <View className="  p-2 pt-8 flex-row justify-between items-center bg-slate-400 mb-4 ">
        <Text className="text-white text-lg">NewsAPP</Text>
        <Text>Hello user name</Text>
      </View>
    )
}

export default Header