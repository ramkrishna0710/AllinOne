import React from 'react';
import { FlatList, View, Text, Image, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { videoDataList } from '../utils/striver';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../constants/theme';

interface VideoItem {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
    };
}

const BitManupulation: React.FC = () => {
    const navigation = useNavigation();
    const filteredVideos = videoDataList[0].items
        .filter((item: VideoItem, index: number) =>
            item.snippet.title.includes('Bit Manipulation') && index % 2 === 0
        )
        .reverse();

    const extractVideoId = (thumbnailUrl: string) => {
        const parts = thumbnailUrl.split('/vi/');
        return parts.length > 1 ? parts[1].split('/')[0] : '';
    };

    const renderItem = ({ item }: ListRenderItemInfo<VideoItem>) => {
        const title = item.snippet.title;
        const thumbnails = item.snippet.thumbnails;
        const thumbnailUrl = thumbnails.medium.url;
        const videoId = extractVideoId(thumbnailUrl);
        const videoDes = item.snippet.description;

        const videoTitle = title.replace(' | Bit Manipulation', '');

        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('VideoPlayer', { title, thumbnails, videoId, videoDes, fullVideoList: filteredVideos })
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
        <>
            <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 12, color: theme.colors.white }}>Bit Manipulation</Text>
            <FlatList
                data={filteredVideos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

export default BitManupulation;
