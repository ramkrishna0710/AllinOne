import { View, Text, ListRenderItemInfo, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { videoDataList } from '../../utils/striver';
import { VideoItem } from '../../utils/Movies';
import { theme } from '../../constants/theme';
import Icon from 'react-native-vector-icons/Feather'

type Props = {
  navigation: any;
};

const GraphScreen: React.FC<Props> = ({ navigation }) => {
  const filteredVideos = videoDataList[0].items.filter((item: VideoItem) =>
      item.snippet.title.includes('G-')
    );
  
    const firstItem = filteredVideos[0];
    const restItem = filteredVideos.slice(1).reverse();
  
    const finalVideos = [firstItem, ...restItem];  
  
    const extractVideoId = (thumbnailUrl: string) => {
      const parts = thumbnailUrl.split('/vi/');
      return parts.length > 1 ? parts[1].split('/')[0] : '';
    };
  
  const renderItem = ({ item }: { item: any }) => {
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
          navigation.navigate('VideoPlayer', { title, thumbnails, videoId, videoDes, fullVideoList: finalVideos })
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
  
    return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary, paddingVertical: 25 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 12, color: theme.colors.white }}>Graph</Text>
        <FlatList
          data={finalVideos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
    );
}

export default GraphScreen