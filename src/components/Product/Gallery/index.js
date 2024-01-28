import React from "react";
import { View, TouchableOpacity } from "react-native";
import Image from "src/components/Image";
import Text from "src/components/Text copy";
import { Images, useTheme } from "src/config";
import { parseHexTransparency } from "src/utils";
import styles from "./styles";

const imagesInit = [
  {
    id: 1,
    image: Images.profile1,
  },
  {
    id: 1,
    image: Images.profile1,
  },
  {
    id: 1,
    image: Images.profile1,
  },
  {
    id: 1,
    image: Images.profile1,
  },
  {
    id: 1,
    image: Images.profile1,
  },
  {
    id: 1,
    image: Images.profile1,
  },
];

const ProductGallery = ({ images = imagesInit, onPress = () => {} }) => {
  const { colors } = useTheme();
  if (images.length == 0 || !images) {
    return null;
  }
  return (
    <View style={{ flexDirection: "row", height: 160 }}>
      {images?.[0] && (
        <View style={{ flex: 2, padding: 4 }}>
          <Image source={images?.[0]?.image} style={styles.image} />
        </View>
      )}
      {images?.[1] && (
        <View style={{ flex: 3 }}>
          {images?.[1] && (
            <View style={{ flex: 1, padding: 4 }}>
              <Image source={images?.[1]?.image} style={styles.image} />
            </View>
          )}
          {images?.[2] && (
            <View style={{ flex: 1, flexDirection: "row" }}>
              {images?.[2] && (
                <View style={{ flex: 3, padding: 4 }}>
                  <Image source={images?.[2]?.image} style={styles.image} />
                </View>
              )}
              {images?.[3] && (
                <TouchableOpacity style={{ flex: 2, padding: 4, position: "relative" }} onPress={onPress}>
                  <Image source={images?.[3]?.image} style={styles.image} />
                  {images?.[4] && (
                    <View style={styles.viewMore}>
                      <Text title3 whiteColor>
                        {`${images.length - 4}+`}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ProductGallery;
