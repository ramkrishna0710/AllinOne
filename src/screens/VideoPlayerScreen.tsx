import { ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Linking, Image } from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Navigation';
import YoutubeIframe from 'react-native-youtube-iframe';
import { FlatList } from 'react-native-gesture-handler';
import { theme } from '../constants/theme';
import Icon from 'react-native-vector-icons/Feather'


type VideoPlayerScreenRouteProp = RouteProp<RootStackParamList, 'VideoPlayer'>;

type Props = {
  route: VideoPlayerScreenRouteProp;
  navigation: any;
};

const VideoPlayerScreen: React.FC<Props> = ({ route, navigation }) => {
  const { title, thumbnails, videoId, videoDes, fullVideoList } = route.params;

  const [loading, setLoading] = useState(true);
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  const toggleTitle = () => {
    setIsTitleExpanded(prevState => !prevState);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const renderDescriptionWithLinks = (description: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const parts = description.split(urlRegex);
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <Text
            key={index}
            style={styles.link}
            onPress={() => handleLinkPress(part)}
          >
            {part}
          </Text>
        );
      }
      return <Text key={index} style={{ color: theme.colors.white, fontSize: 14, lineHeight: 14 }}>{part}</Text>;
    });
  };

  const extractVideoId = (thumbnailUrl: string) => {
    const parts = thumbnailUrl.split('/vi/');
    return parts.length > 1 ? parts[1].split('/')[0] : '';
  };

  if (loading) {
    <ActivityIndicator size="large" color="#ff0000" style={{ justifyContent: 'center', alignItems: 'center' }} />
  }


  const renderListItem = ({ item }: { item: any }) => {
    const videoThumbnail = item.snippet.thumbnails.medium.url;
    const extractedVideoId = extractVideoId(videoThumbnail);
    const videoTitle = item.snippet.title;
    const isPlaying = extractedVideoId === videoId;

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VideoPlayer', {
            title: item.snippet.title,
            thumbnails: item.snippet.thumbnails,
            videoId: extractedVideoId,
            videoDes: item.snippet.description,
            fullVideoList
          });
        }}
        style={{ marginLeft: 4 }}
      >
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: videoThumbnail }}
            style={{ width: 140, height: 90, borderRadius: 8, resizeMode: 'stretch' }}
          />
          {isPlaying && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 140,
                height: 90,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <Text style={{ color: theme.colors.white, fontSize: 14, fontWeight: 'bold' }}>Playing</Text>
            </View>
          )}
        </View>
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
    <ScrollView style={styles.container}>

      <View style={styles.videoPlayerWrapper}>
        <YoutubeIframe
          videoId={videoId}
          height={190}
          play={true}
          onReady={() => setLoading(false)}
          onChangeState={(state) => { }}
        />
      </View>

      <TouchableOpacity onPress={toggleTitle}>
        <Text style={styles.title} numberOfLines={isTitleExpanded ? undefined : 2}>
          {title}
        </Text>
        {
          isTitleExpanded &&
          <View style={styles.description}>
            {renderDescriptionWithLinks(videoDes)}
          </View>
        }
      </TouchableOpacity>
      <View style={{ marginVertical: 12, marginHorizontal: 4 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginHorizontal: 4 }}>All Videos</Text>
        <FlatList
          data={fullVideoList}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default VideoPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingTop: 30
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    color: theme.colors.white
  },
  videoPlayerWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode: 'center',
    padding: 4
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    color: theme.colors.white,
    marginHorizontal: 8
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },

});
