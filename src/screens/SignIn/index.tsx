import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  TitleWrapper,
  Title,
  SigninTitle,
  Header,
  Footer,
  FooterWrapper,
} from "./styles";

import AppleSvg from "../../assets/google.svg";
import GoogleSvg from "../../assets/apple.svg";
import LogoSvg from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";

import { SignInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  const { user } = useAuth();
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>

          <SigninTitle>
            Faça seu login com {"\n"} umas das contas abaixo
          </SigninTitle>
        </TitleWrapper>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
