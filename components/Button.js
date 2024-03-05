import { TouchableOpacity, Text } from "react-native";
export default function Button({ btnText, isActive, setIsActive }) {
  return (
    <TouchableOpacity onPress={setIsActive} className={`mr-2 bg-slate-400  px-4 py-2 rounded-2xl text-center ${isActive ? 'bg-blue-500' : 'bg-black'}`}>
      <Text className="text-white  " onPress={() => console.log(btnText)}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
}
