import React from "react";

interface Props {
  title: string;
}

import { Containter, Category, Icon } from "./styles";

export function CategorySelect({ title }: Props) {
  return (
    <Containter>
      <Category>
        {title}
        <Icon name="chevron-down" />
      </Category>
    </Containter>
  );
}
