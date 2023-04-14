import React, { useState } from 'react';
import { Modal, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../Button';
import { Text } from '../../Text';
import { Overlay, ModalBody, Header, Form, Input } from './styles';
import { TModal } from './TLoginModal';

export function LoginModal({ isVisible, onClose }: TModal) {
  const [email, setEmail] = useState('');

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay shadow="transparent" behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <ModalBody>
            <Header>
              <Text weight="600">Acesse sua conta</Text>
            </Header>
            <Form>
              <Input
                placeholder="Email"
                placeholderTextColor="#666"
                onChangeText={setEmail}
              />
              {email.length > 5 && (
                <Input
                  keyboardType="number-pad"
                  placeholder="Password"
                  placeholderTextColor="#666"
                  onChangeText={setEmail}
                />
              )}
              <Button onPress={onClose} disabled={email.length === 0}>
                {email.length > 5 ? 'Entrar' : 'Avançar'}
              </Button>
              {email.length > 5 && (
                <Text size={12} color="rgba(37, 167, 219, 1)" style={{ textAlign: 'center', marginTop: 16 }}>
                  Esqueci minha senha
                </Text>
              )}
            </Form>
          </ModalBody>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
