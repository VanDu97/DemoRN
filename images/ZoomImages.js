import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
const images = [
  {
    url:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
export default class ZoomImages extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          marginTop: 50,
          //justifyContent: "space-between",
        //   flexDirection: "row",
        //   flexWrap: "wrap",
        //   alignSelf: "center",
          //flexDirection: "row",
        }}
      >
        <ImageViewer
          imageUrls={images}
          style={{ width: Dimensions.get("window").width }}
        />
      </View>
    );
  }
}

{
  /*** {images.map((ele, index) => {
          return (
            <TouchableOpacity key={index}>
              <Image
                source={{ uri: ele.url }}
                style={{
                  width: Dimensions.get("window").width * 0.3,
                  height: Dimensions.get("window").width * 0.3,
                  marginVertical: 5,
                  marginHorizontal: 2,
                }}
              />
            </TouchableOpacity>
          );
        })} */
}
