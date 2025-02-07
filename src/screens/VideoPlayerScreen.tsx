import { ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Linking, Image, Dimensions } from 'react-native';
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
  const { title, videoId, videoDes, fullVideoList } = route.params;

  const [loading, setLoading] = useState(true);
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(
    fullVideoList.findIndex((video) => video.snippet.videoId === videoId)
  );

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

  const handleVideoEnd = () => {
    const nextIndex = (currentIndex + 1) % fullVideoList.length;
    const nextVideoId = extractVideoId(fullVideoList[nextIndex].snippet.thumbnails.medium.url);
    setCurrentIndex(nextIndex);
    navigation.navigate('VideoPlayer', {
      title: fullVideoList[nextIndex].snippet.title,
      videoId: nextVideoId,
      videoDes: fullVideoList[nextIndex].snippet.description,
      fullVideoList,
    });
  }

  if (loading) {
    <ActivityIndicator size="large" color="#ff0000" style={{ justifyContent: 'center', alignItems: 'center' }} />
  }


  const renderListItem = ({ item }: { item: any }) => {
    const videoThumbnail = item.snippet.thumbnails.medium.url;
    const extractedVideoId = extractVideoId(videoThumbnail);
    const videoTitle = item.snippet.title;
    const isPlaying = extractedVideoId === videoId;
    const channelName = item.snippet.channelTitle;

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VideoPlayer', {
            title: item.snippet.title,
            thumbnails: item.snippet.thumbnails,
            videoId: extractedVideoId,
            videoDes: item.snippet.description,
            fullVideoList,
          });
        }}
        style={{ marginLeft: 4, paddingVertical: 4, flexDirection: 'row' }}
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

        <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 8 }}>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', color: theme.colors.white }}
            numberOfLines={2}
          >
            {videoTitle}
          </Text>

          <Text
            style={{ fontSize: 12, color: theme.colors.gray, marginTop: 2 }}
          >
            {channelName}
          </Text>
        </View>

        <Icon name="more-vertical" size={18} color={theme.colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={[styles.videoPlayerWrapper]}>
        <YoutubeIframe
          videoId={videoId}
          height={210}
          play={true}
          onReady={() => setLoading(false)}
          onChangeState={(state) => {
            if (state === 'ended') {
              console.log("Video ended", state);
              handleVideoEnd();
            }
          }}
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
      <View style={{ marginVertical: 4, marginHorizontal: 4 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginHorizontal: 4, color: 'white' }}>All Videos</Text>
        <FlatList
          data={fullVideoList}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};

export default VideoPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingTop: 30
  },
  contentContainer: {
    paddingBottom: 380,
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
    padding: 0
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
