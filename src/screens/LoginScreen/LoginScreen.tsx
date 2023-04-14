import React, { useState } from 'react';
import {
  Container,
  HeaderContent,
  Footer,
  FooterContainer
} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { LoginModal } from '../../components/Modals';

export function LoginScreen() {
  const [LoginModalVisible, setLoginModalVisible] = useState(false);
  const [FilterModalVisible, setFilterModalVisible] = useState(false);

  function handleLoginModalVisible() {
    setLoginModalVisible(!LoginModalVisible);
  }

  function handleFilterModalVisible() {
    setFilterModalVisible(!FilterModalVisible);
  }

  return (
    <>
      <LoginModal
        isVisible={LoginModalVisible}
        onClose={handleLoginModalVisible}
      />

      <Container source={{ uri: '../../assets/imgs/bg-login.png' }} resizeMode="cover">
        <HeaderContent>
          <Header />
        </HeaderContent>

        <Footer>
          <FooterContainer>
            <Button onPress={handleLoginModalVisible}>
              Modal Login
            </Button>
            <Button onPress={handleFilterModalVisible}>
              Modal Filter
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
    </>
  );
}
