import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
const FiveStars = props => {
  const {numberOfStars} = props;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      {[0, 1, 2, 3, 4].map(item => (
        <Icon
          key={`${item}`}
          name="star"
          size={12}
          color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
        />
      ))}
    </View>
  );
};

export default FiveStars;
