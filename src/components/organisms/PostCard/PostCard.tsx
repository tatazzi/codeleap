import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PostCardProps} from './types';
import styles from './styles';
import {IconButton} from '../../atoms/IconButton';
import {theme} from '../../../theme';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/types';

export const PostCard: FC<PostCardProps> = ({
  postTitle,
  date,
  username,
  onClickTrash,
  onClickEdit,
  content,
}) => {
  const name = useSelector((state: AppState) => state.app.name);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>{postTitle}</Text>
        {username === name && (
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.trash}>
              <IconButton
                onPress={onClickTrash}
                color={theme.colors.white}
                iconName="trash-bin"
                iconSize={20}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconButton
                onPress={onClickEdit}
                color={theme.colors.white}
                iconName="create-outline"
                iconSize={20}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.nameAndDate}>
        <Text style={styles.username}>{`@${username}`}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};
