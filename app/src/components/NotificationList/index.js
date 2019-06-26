import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import styles from './styles';
import NotificationCard from '../NotificationCard';

class NotificationList extends Component {
  keyExtractor = (item, index) => item.id || index

  renderItem = ({ item }) => (
    <NotificationCard
      {...item}
    />
  )

  render() {
    const { data } = this.props;

    return (
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          scrollEnabled={false}
          style={styles.list}
          accessibilityLabel="Lista das disciplinas"
        />
      </ScrollView>
    );
  }
}

NotificationList.defaultProps = {
  data: [],
};

export default NotificationList;
