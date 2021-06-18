import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Containter, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Containter {...rest}>
      <Title>{title}</Title>
    </Containter>
  );
}
