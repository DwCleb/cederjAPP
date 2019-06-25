import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import styles from './styles';

const WebViewModal = (props) => {
  const { url, isVisible, toggleModal } = props;
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
    >
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={ () => { toggleModal(); }}
        activeOpacity={0.8}
      >
        <Text style={styles.textBack}> Voltar à compra </Text>
      </TouchableOpacity>
      <WebView url={url} bounces={false} />
    </Modal>);
};

WebViewModal.propTypes = {
  url: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default WebViewModal;
