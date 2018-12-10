import { TouchableOpacity, Platform } from "react-native";

const Touchable =
  Platform.OS === "android" ? TouchableOpacity : TouchableOpacity;

export default Touchable;
