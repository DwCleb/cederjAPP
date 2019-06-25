import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from 'themes';

const SubjectCard = (props) => {
  const {
    title,
    status,
    grade,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.subjectContainer, {
          borderLeftColor: colors[status],
        }]}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <Text style={styles.grade}>
              {grade}
            </Text>
            <Text style={styles.finalGrade}>
              Nota final
            </Text>
          </View>
          <View style={{ justifyContent: 'center', flex: 4 }}>
            <Text style={styles.subjectTitle}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubjectCard;
