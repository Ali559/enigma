import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { Link } from "expo-router";
import { MotiView } from "moti";

const { width, height } = Dimensions.get("window");

type Slide = {
  key: number;
  title: string;
  description: string;
  image: any;
};

const slides: Slide[] = [
  {
    key: 1,
    title: "Secure Everything",
    description:
      "Enigma keeps all your passwords encrypted and safe in one place — only you have the key.",
    image: require("../assets/images/first-image.png"),
  },
  {
    key: 2,
    title: "Log in Instantly",
    description:
      "Seamlessly fill in credentials with one tap — on any app or browser.",
    image: require("../assets/images/second-image.png"),
  },
  {
    key: 3,
    title: "Just One Master Password",
    description:
      "You only need to remember one strong password — Enigma handles the rest.",
    image: require("../assets/images/third-image.png"),
  },
];

export default function OnboardingScreen(): JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item }: ListRenderItemInfo<Slide>): JSX.Element => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      {currentIndex === slides.length - 1 && (
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} delay={100}>
          <Link href="/(tabs)" style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Link>
        </MotiView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6c4ccf",
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#ffffff22",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 24,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
