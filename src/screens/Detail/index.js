import React from "react";

import Button from "../../components/Button";
import Card from "../../components/Card/styles";
import {
  Heading,
  Container,
  ImageContainer,
  RoundImage,
  BodyText
} from "./styles";

function Detail(props) {
  const { route, navigation } = props;
  const { item } = route.params;
  const { name, photo, home, language, title } = item;
  return (
    <Container>
      <Heading>Detail Screen</Heading>
      <Card>
        <ImageContainer>
          <RoundImage
            source={{
              uri: photo
            }}
          />
        </ImageContainer>
        <BodyText>Name: {name}</BodyText>
        <BodyText>Title: {title} </BodyText>
        <BodyText>Location: {home}</BodyText>
        <BodyText>Language: {language}</BodyText>
      </Card>

      <Button
        text={"Go to Settings"}
        onPress={() => navigation.navigate("Settings")}
      />
    </Container>
  );
}

export default Detail;
