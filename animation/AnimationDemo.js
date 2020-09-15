import React, { Component } from "react";
import { View, Text, ScrollView, Image, Animated } from "react-native";
HEADER_MAX_HEIGHT = 220;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
export default class AnimationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "extend",
    });
    const proflieImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      //extrapolate: "extend",
    });
    const viewHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.Image
          style={{
            flex: 1,
            width: "100%",
            height: headerHeight,
            position: "absolute",
          }}
          source={{
            uri:
              "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        />
        <Animated.ScrollView
          contentContainerStyle={{ marginTop: 10 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            {
              useNativeDriver: false,
            }
          )}
        >
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: "#fff",
              borderWidth: 3,
              overflow: "hidden",
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}
          >
            <Image
              style={{ flex: 1, width: null, height: null }}
              source={{
                uri:
                  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
              Van Du
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
          <View>
            <Text>
              The rules of baseball are complex. But the basic idea is simple. A
              player from one team throws a baseball. This player is the
              pitcher. He throws the ball to a player on the other team. This
              player is the batter. The batter tries to hit the ball with a bat
              - a long thin piece of wood. After the batter hits the ball, he
              runs and tries to touch four bases. If he touches all four bases,
              he earns a run, or point, for his team.
            </Text>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}
