import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import styles from './styles';
import SubjectCard from '../SubjectCard';

class SubjectList extends Component {
  keyExtractor = (item, index) => item.id || index

  renderItem = ({ item }) => (
    <SubjectCard
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

SubjectList.defaultProps = {
  data: [],
};

export default SubjectList;
