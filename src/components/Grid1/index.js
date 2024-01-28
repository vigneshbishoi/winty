import { Text, Header, TextInput, Button } from '../../components/index'
import Icon from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { AppData } from '../../../App';
import { BaseColor } from '../../config';

const Grid1 = ({
  description,
  title,
  style,
  image,
  costPrice,
  salePrice,
  onPress,
  isFavorite,
  loading = false
}) => {

  const getAppContext = useContext(AppData)
  let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
  const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

  // if (loading) {
  //   return <Loading style={style}/>;
  // }

  return (
    <TouchableOpacity style={[styles.grid1, style]} onPress={onPress}>
      <ImageBackground
        source={image}
        style={styles.imageBackgroundGrid1}
        imageStyle={{ borderRadius: 8 }}
      >
        <TouchableOpacity style={styles.heartIcon}>
          <Icon
            name="heart"
            solid={isFavorite}
            size={16}
            color={isFavorite ? handleColor : BaseColor.white}
          ></Icon>
        </TouchableOpacity>
      </ImageBackground>

      <View>
        <Text semiBold numberOfLines={2} extraStyle={{ marginTop: 4, fontSize: 15 }}>
          {title}
        </Text>
        <Text light numberOfLines={1} extraStyle={{ color: BaseColor.silver }}>
          {description}
        </Text>
        <View style={{ flexDirection: "row"}}>
          <Text semiBold extraStyle={{ fontSize: 16 }}>
            {salePrice}
          </Text>
          <Text semiBold extraStyle={styles.costPrice}>
            {costPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Grid1.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node.isRequired,
  costPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  salePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  isFavorite: PropTypes.bool,
};

Grid1.defaultProps = {
  description: "",
  title: "",
  style: {},
  image: "",
  costPrice: "",
  salePrice: "",
  onPress: () => { },
  isFavorite: false,
};

export default Grid1;
