import React from 'react';
import { FlatList, View, Text, Image, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { videoDataList } from '../utils/striver';
import Icon from 'react-native-vector-icons/Feather'
import { theme } from '../constants/theme';
import { useRoute } from '@react-navigation/native';

interface VideoItem {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
}

type Props = {
  navigation: any;
  horizontal?: boolean;
};

const PointerSlidingWindow: React.FC<Props> = ({ navigation }) => {

  const route = useRoute();
  const horizontal = route.params?.horizontal ?? true;

  const filteredVideos = videoDataList[0].items.filter((item: VideoItem) =>
    item.snippet.title.includes('2 Pointers and Sliding Window Playlist')
  ).reverse();

  const filteredFirstVideos = videoDataList[0].items.filter((item: VideoItem) =>
    item.snippet.title.includes('L1. Introduction to Sliding Window and 2 Pointers')
  );

  const firstVideos = filteredFirstVideos[0];

  const finalVideo = [firstVideos, ...filteredVideos];

  const extractVideoId = (thumbnailUrl: string) => {
    const parts = thumbnailUrl.split('/vi/');
    return parts.length > 1 ? parts[1].split('/')[0] : '';
  };

  const renderItemVertical = ({ item }: ListRenderItemInfo<VideoItem>) => {
    const title = item.snippet.title;
    const thumbnails = item.snippet.thumbnails;
    const thumbnailUrl = thumbnails.medium.url;
    const videoId = extractVideoId(thumbnailUrl);
    const videoDes = item.snippet.description;
    const channelName = item.snippet.channelTitle;
    const uploadTime = item.snippet.publishedAt;
    const formattedDate = new Date(uploadTime).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const videoTitle = title.replace(' | 2 Pointers and Sliding Window Playlist', '');

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VideoPlayer', { title, thumbnails, videoId, videoDes, fullVideoList: filteredVideos })
        }}
        style={{ marginLeft: 4, paddingVertical: 4, flexDirection: 'row' }}
      >
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: thumbnailUrl }}
            style={{ width: 140, height: 90, borderRadius: 8, resizeMode: 'stretch' }}
          />
        </View>

        <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 8 }}>
          <Text
            style={{ fontSize: 13, fontWeight: 'bold', color: theme.colors.white }}
            numberOfLines={2}
          >
            {videoTitle}
          </Text>

          <Text
            style={{ fontSize: 12, color: theme.colors.gray, marginTop: 2 }}
          >
            {channelName}
          </Text>

          <Text
            style={{ fontSize: 11, color: theme.colors.gray, marginTop: 2 }}
          >
            {formattedDate}
          </Text>
        </View>

        <Icon name="more-vertical" size={18} color={theme.colors.white} />
      </TouchableOpacity>
    );
  };

  const renderItemHorizontal = ({ item }: ListRenderItemInfo<VideoItem>) => {
    // const { title, thumbnails } = item.snippet;
    const title = item.snippet.title;
    const thumbnails = item.snippet.thumbnails;
    const thumbnailUrl = thumbnails.medium.url;
    const videoId = extractVideoId(thumbnailUrl);
    const videoDes = item.snippet.description;
    const channelName = item.snippet.channelTitle;

    const videoTitle = title.replace(' | 2 Pointers and Sliding Window Playlist', '');

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VideoPlayer', { title, thumbnails, videoId, videoDes, fullVideoList: filteredVideos, channelName })
        }}
        style={{ marginLeft: 12 }}
      >
        <Image
          source={{ uri: thumbnailUrl }}
          style={{ width: 140, height: 90, borderRadius: 4, resizeMode: 'stretch' }}
        />
        <View style={{ flexDirection: 'row', width: 140, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 2 }}>
          <Text style={{ flex: 1, fontSize: 11, fontWeight: 'bold', color: theme.colors.white }} numberOfLines={1}>
            {videoTitle}
          </Text>
          <Icon name="more-vertical" size={14} color={theme.colors.white} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[{ flex: 1, backgroundColor: theme.colors.primary }, horizontal ? null : {paddingVertical: 30} ]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4 }}>
        <Text style={[{ fontWeight: 'bold', margin: 12, color: theme.colors.white }, horizontal ? {fontSize: 16} : {fontSize:20, alignItems: 'center'}]}>2 Pointers and Sliding Window</Text>
        <>
          {horizontal ?
            <TouchableOpacity onPress={() => {
              navigation.navigate('PointerSlidingWindow', { horizontal: false, })
            }}>
              <Icon name='chevron-right' size={24} color={theme.colors.white} style={{ marginRight: 4}} />
            </TouchableOpacity> : null
          }
        </>
      </View>
      <FlatList
        data={finalVideo}
        keyExtractor={(item) => item.id}
        renderItem={horizontal ? renderItemHorizontal : renderItemVertical}
        horizontal={horizontal}
        showsVerticalScrollIndicator={!horizontal}
        showsHorizontalScrollIndicator={horizontal}
        style={{ paddingHorizontal: 4 }}
        contentContainerStyle={ horizontal ? null : { paddingBottom: 40 }}
      />
    </View>
  );
};

export default PointerSlidingWindow;
