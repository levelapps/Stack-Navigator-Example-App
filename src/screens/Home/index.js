import React from "react";
import Button from "../../components/Button";
import { Heading, Container, WelcomeContainer, WelcomeImage } from "./styles";
import { handleHelpPress, DevelopmentModeNotice } from "./helpers";

const developer = {
  name: "David Pears",
  photo:
    "https://media-exp1.licdn.com/dms/image/C4D03AQELrQFg9rkp2w/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=xusupmO_W6sBg9S4w8EALPjjYjN-VU8sSOpGuXKA0ZM",
  title: "Software Developer",
  home: "London",
  language: "React-Native"
};

function Home(props) {
  const { navigation } = props;
  const name = developer.name;
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeImage
          /* eslint-disable global-require */
          source={
            __DEV__
              ? require("../../../assets/images/dev.png")
              : require("../../../assets/images/prod.png")
          }
          /* eslint-enable global-require */
        />
      </WelcomeContainer>

      <Heading>Who is...</Heading>
      <Button
        text={name}
        onPress={() => navigation.navigate("Detail", { item: developer })}
      />

      <Button text={"Level Studio"} onPress={handleHelpPress} />
    </Container>
  );
}

export default Home;
