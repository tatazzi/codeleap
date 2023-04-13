import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {EditItemRequest, HomeProps, PostData} from './types';
import styles from './styles';
import {
  CreatePost,
  MainModal,
  PostCard,
  DeleteModal,
  EditModal,
} from '../../components/organisms';
import {MainInput} from '../../components/molecules';
import {theme} from '../../theme';
import {formatDistanceToNow, parseISO} from 'date-fns';
import api from '../../services/Api/Api';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/types';

export const Home: FC<HomeProps> = ({}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postData, setPostData] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  const name = useSelector((state: AppState) => state.app.name);

  const createPost = async () => {
    const data = {
      username: name,
      title,
      content,
    };
    try {
      const response = await api.post('/careers/', data);
      await getPosts();
      clearData();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const clearData = () => {
    setTitle('');
    setContent('');
  };

  const getPosts = async () => {
    setLoading(true);
    const data = await api.get('/careers/');
    setLoading(false);
    setPostData(data.data.results);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleModalClose = () => {
    setDeleteModalVisible(false);
    setEditModalVisible(false);
    setSelectedPost(null);
  };

  const handleDeletePost = async () => {
    try {
      const response = await api.delete(`/careers/${selectedPost?.id}/`);
      console.log('response', response.data);
    } catch (error) {
      console.log('error', error);
    }
    handleModalClose();
    await getPosts();
  };

  const handleEditPost = async (item: EditItemRequest) => {
    try {
      const response = await api.patch(`/careers/${selectedPost?.id}/`, item);
      await getPosts();
      clearData();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    handleModalClose();
    await getPosts();
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.headerTitle}>CodeLeap Network</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <CreatePost
          bgColor={
            title.length < 2
              ? theme.colors.grey[200]
              : theme.colors.blue && content.length < 2
              ? theme.colors.grey[200]
              : theme.colors.blue
          }
          onPress={createPost}>
          <MainInput
            value={title}
            placeholder="Hello world"
            title="Title"
            onChangeText={setTitle}
          />
          <MainInput
            value={content}
            height={60}
            placeholder="Content here"
            title="Content"
            onChangeText={setContent}
          />
        </CreatePost>
        {loading === true ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={postData}
            style={styles.flatlist}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemSeparator} />;
            }}
            renderItem={({item}) => (
              <PostCard
                content={item?.content}
                onClickTrash={() => {
                  setSelectedPost(item);
                  setDeleteModalVisible(true);
                }}
                onClickEdit={() => {
                  setSelectedPost(item);
                  setEditModalVisible(true);
                }}
                date={formatDistanceToNow(parseISO(item?.created_datetime), {
                  addSuffix: true,
                  includeSeconds: false,
                })}
                username={item?.username}
                postTitle={item?.title}
              />
            )}
          />
        )}

        <MainModal
          visible={deleteModalVisible || editModalVisible}
          onClose={handleModalClose}>
          {deleteModalVisible && (
            <DeleteModal
              onCancelPress={handleModalClose}
              onDeletePress={handleDeletePost}
            />
          )}
          {editModalVisible && (
            <EditModal
              onCancelPress={handleModalClose}
              onEditPress={handleEditPost}
              post={selectedPost}
            />
          )}
        </MainModal>
      </View>
    </>
  );
};
