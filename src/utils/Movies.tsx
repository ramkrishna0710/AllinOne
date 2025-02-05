import { ImageSourcePropType } from 'react-native';
import { videoDataList } from '../utils/striver';
import { videoDataListGW } from './gatewallah';

export interface VideoItem {
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

const graphFetch = videoDataList[0].items.filter((item: VideoItem) =>
  item.snippet.title.includes('G-')
);

const gwDsaFetch = videoDataListGW[0].items.filter((item: VideoItem) =>
  item.snippet.title.includes('Ultimate DSA Roadmap 2024')
);

const dpFetch = videoDataList[0].items.filter((item: VideoItem) =>
  item.snippet.title.includes('DP ')
);

const ptrFetch = videoDataList[0].items.filter((item: VideoItem) =>
  item.snippet.title.includes('2 Pointers and Sliding Window Playlist')
);

const bitManupulationFetch = videoDataList[0].items
  .filter((item: VideoItem, index: number) =>
    item.snippet.title.includes('Bit Manipulation')).reverse();

export interface MovieType {
  name: string;
  image: ImageSourcePropType;
  titleImage: ImageSourcePropType;
}

export const movies: MovieType[] = [
  {
    name: graphFetch[0].snippet.title,
    image: { uri: graphFetch[0].snippet.thumbnails.standard.url },
    titleImage: { uri: graphFetch[0].snippet.thumbnails.standard.url },
  },
  {
    name: gwDsaFetch[0].snippet.title,
    image: { uri: gwDsaFetch[0].snippet.thumbnails.standard.url },
    titleImage: { uri: gwDsaFetch[0].snippet.thumbnails.standard.url },
  },
  {
    name: dpFetch[0].snippet.title,
    image: { uri: dpFetch[0].snippet.thumbnails.standard.url },
    titleImage: { uri: dpFetch[0].snippet.thumbnails.standard.url },
  },
  {
    name: ptrFetch[0].snippet.title,
    image: { uri: ptrFetch[0].snippet.thumbnails.standard.url },
    titleImage: { uri: ptrFetch[0].snippet.thumbnails.standard.url },
  },
  {
    name: bitManupulationFetch[0].snippet.title,
    image: { uri: bitManupulationFetch[0].snippet.thumbnails.standard.url },
    titleImage: { uri: bitManupulationFetch[0].snippet.thumbnails.standard.url },
  },
];