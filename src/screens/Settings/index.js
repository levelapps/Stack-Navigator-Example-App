import React from "react";

import Button from "../../components/Button";
import { Heading, Container } from "./styles";

function Settings(props) {
  const { navigation } = props;
  return (
    <Container>
      <Heading>Settings</Heading>
      <Button text={"Go to Home"} onPress={() => navigation.popToTop()} />
    </Container>
  );
}

export default Settings;
