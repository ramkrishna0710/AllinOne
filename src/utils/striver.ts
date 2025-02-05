interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelTitle: string;
  type: string;
}

interface VideoData {
  kind: string;
  etag: string;
  id: string; 
  snippet: VideoSnippet;
}

interface VideoListData {
  kind: string;
  etag: string;
  items: VideoData[];
}


export const videoDataList: VideoListData[] = [
  {
    "kind": "youtube#activityListResponse",
    "etag": "pIBFTFR-nhDGEjThb4X0Altn6VQ",
    "items": [
      {
        "kind": "youtube#activity",
        "etag": "vP4Nvjh6lP7sn_heEYNB-DZEM4o",
        "id": "MTUxNzExNTEzNTAwMTcxMTUxMzUwMDAwMDY1NA",
        "snippet": {
          "publishedAt": "2024-03-27T04:25:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L12. Minimum Window Substring | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1O82fjuywAaeZBZ3xzGyYL-hTrI",
        "id": "MTUxNzExNTEzMjAwMTcxMTUxMzIwMDAwMDY1Mw",
        "snippet": {
          "publishedAt": "2024-03-27T04:20:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L11. Subarray with k different integers | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "kOHwVX8d9aOC8KRp2pIrMXFtr8w",
        "id": "MTUxNzExNTEyOTAxMTcxMTUxMjkwMTAwMDI1Mw",
        "snippet": {
          "publishedAt": "2024-03-27T04:15:01+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L10. Count number of Nice subarrays | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "JwAHqVTZYW1UxzrkQDjO3DFJlAA",
        "id": "MTUxNzExNTEyNjAwMTcxMTUxMjYwMDAwMDE1Mg",
        "snippet": {
          "publishedAt": "2024-03-27T04:10:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L9. Binary Subarrays With Sum | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "rnTcxWvG0T3iA8_SerquBXvEdcM",
        "id": "MTUxNzExNTEyMzAwMTcxMTUxMjMwMDAwMDgwMA",
        "snippet": {
          "publishedAt": "2024-03-27T04:05:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. Longest Repeating Character Replacement | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YlYBBTy9r1eWimhmggBrsq91eVA",
        "id": "MTUxNzExNTEyMDI4MTcxMTUxMjAyODAwMDQ4NQ",
        "snippet": {
          "publishedAt": "2024-03-27T04:00:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Number of Substrings Containing All Three Characters | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QFpoWJQU5fTLSukzaCDfft6p7cE",
        "id": "MTUxNzExNTExNzAwMTcxMTUxMTcwMDAwMDMyOQ",
        "snippet": {
          "publishedAt": "2024-03-27T03:55:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Longest Substring With At Most K Distinct Characters | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5BBLq0OFWL0WDCXMl81FDdjqvNE",
        "id": "MTUxNzExNTExNDAwMTcxMTUxMTQwMDAwMDkyNg",
        "snippet": {
          "publishedAt": "2024-03-27T03:50:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Fruit Into Baskets | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "KCQlgdnZrvnTsZQ9VOKPIQYEuqU",
        "id": "MTUxNzExNTExMTAwMTcxMTUxMTEwMDAwMDQ1NA",
        "snippet": {
          "publishedAt": "2024-03-27T03:45:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Max Consecutive Ones III | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4gEIYZ-77arqtPfI7fajY0iBUrA",
        "id": "MTUxNzExNTEwODAwMTcxMTUxMDgwMDAwMDIyMw",
        "snippet": {
          "publishedAt": "2024-03-27T03:40:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Longest Substring Without Repeating Characters | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BGRUhqzApBbe74it8PP9bMI0bjk",
        "id": "MTUxNzExNTEwNTAwMTcxMTUxMDUwMDAwMDA0NQ",
        "snippet": {
          "publishedAt": "2024-03-27T03:35:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Maximum Points You Can Obtain from Cards | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "SwO4EZ_7JGayIPqoV0obeNQ3U-I",
        "id": "MTUxNzExNTEwMjA1MTcxMTUxMDIwNTAwMDU2Nw",
        "snippet": {
          "publishedAt": "2024-03-27T03:30:05+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L1. Introduction to Sliding Window and 2 Pointers | Templates | Patterns",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "a3xp3KWtRph5UphHT2PUmURlCOE",
        "id": "MTE3MTE0Nzc2MDgxNzExNDc3NjA4MDAwNjUz",
        "snippet": {
          "publishedAt": "2024-03-26T18:26:48+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L12. Minimum Window Substring | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WJaij9ffOIY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wLtVsKqa5OokuGb9Vo7YLC3pqoQ",
        "id": "MTE3MTE0Nzc1MTIxNzExNDc3NTEyMDAwNDUy",
        "snippet": {
          "publishedAt": "2024-03-26T18:25:12+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L11. Subarray with k different integers | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7wYGbV_LsX4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Ad25VlqLnCdZGO8PYjgcjJgrCs4",
        "id": "MTE3MTE0Nzc0MTgxNzExNDc3NDE4MDAwMzU2",
        "snippet": {
          "publishedAt": "2024-03-26T18:23:38+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L10. Count number of Nice subarrays | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/j_QOv9OT9Og/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3g84C-FVOasw8OvF_15xViRu3-0",
        "id": "MTE3MTE0NzczMTUxNzExNDc3MzE1MDAwODU0",
        "snippet": {
          "publishedAt": "2024-03-26T18:21:55+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L9. Binary Subarrays With Sum | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/XnMdNUkX6VM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "sz_kdtZlRYuV28n7985BmXh1kQE",
        "id": "MTE3MTE0NzcxODIxNzExNDc3MTgyMDAwMjA0",
        "snippet": {
          "publishedAt": "2024-03-26T18:19:42+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. Longest Repeating Character Replacement | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_eNhaDCr6P0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "dknF9YhbdGUYcqWyIt2K5pgoB3A",
        "id": "MTE3MTE0NzcwNTUxNzExNDc3MDU1MDAwNDMz",
        "snippet": {
          "publishedAt": "2024-03-26T18:17:35+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Number of Substrings Containing All Three Characters | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xtqN4qlgr8s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "769rfkqrfYuM-vrbMgHCVletNaY",
        "id": "MTE3MTE0NzY4NzgxNzExNDc2ODc4MDAwMTIy",
        "snippet": {
          "publishedAt": "2024-03-26T18:14:38+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Longest Substring With At Most K Distinct Characters | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/teM9ZsVRQyc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0corj9PCy2bKh1lH8iYEjMztorY",
        "id": "MTE3MTE0NzY3MDQxNzExNDc2NzA0MDAwNjk2",
        "snippet": {
          "publishedAt": "2024-03-26T18:11:44+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Fruit Into Baskets | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/e3bs0uA1NhQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "GaFAK3GYOoSAe0LItxNzgRWFpVA",
        "id": "MTE3MTE0NzY2MTAxNzExNDc2NjEwMDAwNjQw",
        "snippet": {
          "publishedAt": "2024-03-26T18:10:10+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Max Consecutive Ones III | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3E4JBHSLpYk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "aZyIoi3VzRzM-Ofr-QkxsK5gpJg",
        "id": "MTE3MTE0NzY1MjIxNzExNDc2NTIyMDAwNDU5",
        "snippet": {
          "publishedAt": "2024-03-26T18:08:42+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Longest Substring Without Repeating Characters | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-zSxTJkcdAo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "TpDR_6snJeWYR9URW62u5FTVAKw",
        "id": "MTE3MTE0NzYyMjExNzExNDc2MjIxMDAwMDUx",
        "snippet": {
          "publishedAt": "2024-03-26T18:03:41+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Maximum Points You Can Obtain from Cards | 2 Pointers and Sliding Window Playlist",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pBWCOCS636U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FxWQIn00Pl9aREc9z5ONXh5aZic",
        "id": "MTE3MTE0NzU5MDYxNzExNDc1OTA2MDAwMDIw",
        "snippet": {
          "publishedAt": "2024-03-26T17:58:26+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L1. Introduction to Sliding Window and 2 Pointers | Templates | Patterns",
          "description": "Notes/Codes/Problem links under step 10 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL\n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9kdHxplyl5I/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1WhpuY-ODbEkxnrcaCyUSwiWCTw",
        "id": "MTUxNzEwNjk4NDA5MTcxMDY5ODQwOTAwMDA3Ng",
        "snippet": {
          "publishedAt": "2024-03-17T18:00:09+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. Smallest Prime Factor (SPF) | Prime Factorisation | Query Based Problem | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qetcyZRNvFNo7Q5TMB2YozhUNf8",
        "id": "MTE3MTA2OTgyODQxNzEwNjk4Mjg0MDAwMDkx",
        "snippet": {
          "publishedAt": "2024-03-17T17:58:04+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. Smallest Prime Factor (SPF) | Prime Factorisation | Query Based Problem | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/glKWkmKFlMw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "t50P22oDZGLiPjClPqih62fQU04",
        "id": "MTUxNzEwNjk4MTE5MTcxMDY5ODExOTAwMDI2OQ",
        "snippet": {
          "publishedAt": "2024-03-17T17:55:19+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Count Prime in a range L-R | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ZhsFPiBQQB4GhqxTt_nze55Y-14",
        "id": "MTE3MTA2OTgwNjIxNzEwNjk4MDYyMDAwNjY4",
        "snippet": {
          "publishedAt": "2024-03-17T17:54:22+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Count Prime in a range L-R | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/os82DjD2-MA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2nouIHrftdM-RTDHxOcrY-MQeBY",
        "id": "MTUxNzEwNjk3OTkyMTcxMDY5Nzk5MjAwMDUyNg",
        "snippet": {
          "publishedAt": "2024-03-17T17:53:12+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Sieve of Eratosthenes | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "cXADiM9MM_haty3h8ylK5b9Qphs",
        "id": "MTE3MTA2OTc4OTcxNzEwNjk3ODk3MDAwMzMx",
        "snippet": {
          "publishedAt": "2024-03-17T17:51:37+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Sieve of Eratosthenes | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/g5Fuxn_AvSk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "T0ylDOxvFVu99jLXsEtBUidXMSc",
        "id": "MTUxNzEwNjk3NzIwMTcxMDY5NzcyMDAwMDM2NQ",
        "snippet": {
          "publishedAt": "2024-03-17T17:48:40+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Power Exponentiation | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3fJCx273oheYiLoyU44qGu57czY",
        "id": "MTE3MTA2OTc2NzAxNzEwNjk3NjcwMDAwMzM1",
        "snippet": {
          "publishedAt": "2024-03-17T17:47:50+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Power Exponentiation | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/hFWckDXE-K8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "j-fFz7sxnvgSzCvylH8uVsuMZAQ",
        "id": "MTUxNzEwNjk3NTY0MTcxMDY5NzU2NDAwMDI0OA",
        "snippet": {
          "publishedAt": "2024-03-17T17:46:04+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Print all prime factors of a Number | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DOjkHGUN5eJAtsBvXK8tlGJ1KU0",
        "id": "MTE3MTA2OTc0OTIxNzEwNjk3NDkyMDAwMDY1",
        "snippet": {
          "publishedAt": "2024-03-17T17:44:52+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Print all prime factors of a Number | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LT7XhVdeRyg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3sUvRbdHvFAP1FgVOxugr1mGywU",
        "id": "MTUxNzEwNjk3NDI5MTcxMDY5NzQyOTAwMDk4Mg",
        "snippet": {
          "publishedAt": "2024-03-17T17:43:49+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Check if a Number if Prime or not | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "vVM_do4epYOeywBYc5_fAFNcsPo",
        "id": "MTE3MTA2OTczNjgxNzEwNjk3MzY4MDAwOTk5",
        "snippet": {
          "publishedAt": "2024-03-17T17:42:48+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Check if a Number if Prime or not | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MJcckSfoYdI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Mhn4lcPtkSwoyup5w0HUoDSEUck",
        "id": "MTUxNzEwNjk3MjQ0MTcxMDY5NzI0NDAwMDI4Nw",
        "snippet": {
          "publishedAt": "2024-03-17T17:40:44+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Print all Divisors of a Number | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "okr1ON3QKolTj6_oNS5iforDhpM",
        "id": "MTE3MTA2OTcxNDcxNzEwNjk3MTQ3MDAwMjY0",
        "snippet": {
          "publishedAt": "2024-03-17T17:39:07+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Print all Divisors of a Number | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "UizfElPnYIo04SvslhOSslhoDZE",
        "id": "MTE3MTA2OTcxMzQxNzEwNjk3MTM0MDAwMjEw",
        "snippet": {
          "publishedAt": "2024-03-17T17:38:54+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Basic Maths for DSA | Euclidean Algorithm | Strivers A2Z DSA Course",
          "description": "Full Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nThere is a slight mistake on the logic of Armstrong, it will be 1634 = (1^4 + 6^4 + 3^4 + 4^4), basically digits raised to the power count of digits, so sum = sum + pow(ld, cntDigits) will be the change, where the cntDigits is the number of digits. \n\nNotes:\nCount Digits: https://takeuforward.org/data-structure/count-digits-in-a-number/\nReverse a Number: https://takeuforward.org/c-programs/reverse-a-number-in-c/\nCheck Palindrome: https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/\nGcd or HCF: https://takeuforward.org/data-structure/find-gcd-of-two-numbers/\nArmstrong Number: https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/\nPrint all Divisors: https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/\nCheck for prime: https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/\n\nSubmit the problems here: \nCount Digits: https://bit.ly/3X17nIr\nReverse Number: https://bit.ly/3vCeBXS\nPalindrome: https://bit.ly/3vylgCi\nArmstrong: https://bit.ly/3vBfkbD\nPrint Divisors: https://bit.ly/3vzQ7yr\nCheck Prime: https://bit.ly/3ZdiWOO\nHCF/GCD: https://bit.ly/3GB4Mj8 \n\nIn case you are thinking to buy courses, please check below: \n\nLink to get 20% additional Discount at Coding Ninjas: https://bit.ly/3wE5aHx\n\nYou can follow me across social media, all my handles are below: \nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1xNbjMdbjug/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1xNbjMdbjug/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1xNbjMdbjug/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/1xNbjMdbjug/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/1xNbjMdbjug/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "EdUhBByX0lCnrvu7yK5Dzwaa_Cw",
        "id": "MTE3MTA2OTY3ODMxNzEwNjk2NzgzMDAwMjY0",
        "snippet": {
          "publishedAt": "2024-03-17T17:33:03+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Print all Divisors of a Number | Maths Playlist",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nEntire playlist: https://www.youtube.com/playlist?list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ae_Ag_saG9s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "lomkU9i3BHzCrydtGT7AKAZh3tQ",
        "id": "MTE3MDk5NzUxNjgxNzA5OTc1MTY4MDAwODUy",
        "snippet": {
          "publishedAt": "2024-03-09T09:06:08+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L9. Divide Two Integers without using Multiplication and Division Operators | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "rX5VnTyWBuEh2_GFmhmsPA13_jY",
        "id": "MTUxNzA5OTc1MTY4MTcwOTk3NTE2ODAwMDMzNg",
        "snippet": {
          "publishedAt": "2024-03-09T09:06:08+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L9. Divide Two Integers without using Multiplication and Division Operators | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pBD4B1tzgVc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "MxV-SJIv4CYNbEvauEcpOSqBgE8",
        "id": "MTUxNzA5OTc1MDM5MTcwOTk3NTAzOTAwMDgwNw",
        "snippet": {
          "publishedAt": "2024-03-09T09:03:59+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. XOR of Numbers in a Given Range | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "TDTS8MDme7QAOxM8jLYAr7uBEgg",
        "id": "MTE3MDk5NzQ5ODcxNzA5OTc0OTg3MDAwOTgx",
        "snippet": {
          "publishedAt": "2024-03-09T09:03:07+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. XOR of Numbers in a Given Range | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WqGb7159h7Q/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "hZBRfCzpDiSatDQBtWkDmBw3CSo",
        "id": "MTUxNzA5OTc0OTI0MTcwOTk3NDkyNDAwMDczNQ",
        "snippet": {
          "publishedAt": "2024-03-09T09:02:04+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Single Number III | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2Ok6ArSfrGXA-9yylAOSxr8f6hA",
        "id": "MTE3MDk5NzQ4NjYxNzA5OTc0ODY2MDAwNDQy",
        "snippet": {
          "publishedAt": "2024-03-09T09:01:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Single Number III | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/UA5JnV1J2sI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "HkrWW9qzQUzIpImX3wA4__rvku8",
        "id": "MTUxNzA5OTc0NzkzMTcwOTk3NDc5MzAwMDQwMA",
        "snippet": {
          "publishedAt": "2024-03-09T08:59:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Single Number II | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "zcYGCpmsACCU6Q2_5SVZVjCxSrE",
        "id": "MTE3MDk5NzQ3MzUxNzA5OTc0NzM1MDAwNDE1",
        "snippet": {
          "publishedAt": "2024-03-09T08:58:55+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Single Number II | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/5Bb2nqA40JY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1fAihpK8nwX_8IOTox7HIx4_r3U",
        "id": "MTUxNzA5OTc0Njk2MTcwOTk3NDY5NjAwMDczNQ",
        "snippet": {
          "publishedAt": "2024-03-09T08:58:16+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Single Number-I | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "54aCZPMXH8pKg0uPRY88nlFqeII",
        "id": "MTE3MDk5NzQ2NTgxNzA5OTc0NjU4MDAwMTc5",
        "snippet": {
          "publishedAt": "2024-03-09T08:57:38+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Single Number-I | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sFBCAl8yBfE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "IpQCDRIXwRE79z9sbAiyrUFsqqI",
        "id": "MTUxNzA5OTc0NTcyMTcwOTk3NDU3MjAwMDYzMg",
        "snippet": {
          "publishedAt": "2024-03-09T08:56:12+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Power Set | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "OJL30QqVB0UDwzSNYodMRL2VsJ4",
        "id": "MTE3MDk5NzQ0NDYxNzA5OTc0NDQ2MDAwNTM3",
        "snippet": {
          "publishedAt": "2024-03-09T08:54:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Power Set | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LqKaUv1G3_I/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "vEkRut3OIjg4WCphn7JTnNxM858",
        "id": "MTUxNzA5OTczOTI0MTcwOTk3MzkyNDAwMDM0Mw",
        "snippet": {
          "publishedAt": "2024-03-09T08:45:24+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Minimum Bit Flips to Convert Number | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "CuU2oNsOmHDIZa-4GuNzHw0x2XE",
        "id": "MTE3MDk5NzM3OTkxNzA5OTczNzk5MDAwMjc5",
        "snippet": {
          "publishedAt": "2024-03-09T08:43:19+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Minimum Bit Flips to Convert Number | Bit Manipulation",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/OOdrmcfZXd8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wS617Mwl4qlRmLnTPy9PsG-UPaY",
        "id": "MTUxNzA5OTczNjY4MTcwOTk3MzY2ODAwMDg1Mw",
        "snippet": {
          "publishedAt": "2024-03-09T08:41:08+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Must Know Tricks in Bit Manipulation | Swap two numbers without third variable",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "KFoAKyPRPoLpfjetliQpgxGn7Ok",
        "id": "MTE3MDk5NzM0NzcxNzA5OTczNDc3MDAwMDg4",
        "snippet": {
          "publishedAt": "2024-03-09T08:37:57+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Must Know Tricks in Bit Manipulation | Swap two numbers without third variable",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/nttpF8kwgd4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "F_04m47qUCGJvF3DqGL-3JeCDjA",
        "id": "MTUxNzA5OTYzOTczMTcwOTk2Mzk3MzAwMDMwNA",
        "snippet": {
          "publishedAt": "2024-03-09T05:59:33+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L1. Introduction to Bit Manipulation | 1's 2's Compliment | Bit Operators",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "fPcXRsWb_Wd3g3R4Q071o_Zpzsw",
        "id": "MTE3MDk5NjM3OTAxNzA5OTYzNzkwMDAwMDYx",
        "snippet": {
          "publishedAt": "2024-03-09T05:56:30+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L1. Introduction to Bit Manipulation | 1's 2's Compliment | Bit Operators",
          "description": "Notes/Codes/Problem links under day 8 of A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nFollow us on our other social media handles: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qQd-ViW7bfk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AWFGJENeKJl7K4Qn1ZP2wW3psEA",
        "id": "MTUxNzA5MjczMTA3MTcwOTI3MzEwNzAwMDI0MA",
        "snippet": {
          "publishedAt": "2024-03-01T06:05:07+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Don't watch my A2Z DSA Course",
          "description": "Get amazing mentors here: https://explore.preplaced.in/6V44yP\n\nIn this video, I will be telling you about \n\n- Why not follow the YT channel\n- How to get the best output \n- People misleading about the course\n- Do you need to do all 455 modules? \n- What to do apart from this?",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2ABYsjKJ_oW1p2qlxuEAWIS5RHI",
        "id": "MTE3MDkxNzc1MjcxNzA5MTc3NTI3MDAwNzY4",
        "snippet": {
          "publishedAt": "2024-02-29T03:32:07+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Don't watch my A2Z DSA Course",
          "description": "Get amazing mentors here: https://explore.preplaced.in/6V44yP\n\nIn this video, I will be telling you about \n\n- Why not follow the YT channel\n- How to get the best output \n- People misleading about the course\n- Do you need to do all 455 modules? \n- What to do apart from this?",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0bHoB32fuj0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "_ZYuLGcRe8Qz9S_HyVi1HBeaxuI",
        "id": "MTUxNzA0MDg5MTYzMTcwNDA4OTE2MzAwMDI5NQ",
        "snippet": {
          "publishedAt": "2024-01-01T06:06:03+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L28. Design a Browser History | LinkedList Implementation",
          "description": "Problem Link: https://bit.ly/3tHiY6k\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2P-FTRgs3X8_2IfzQwdtFbdzWqY",
        "id": "MTUxNzA0MDg5MTU5MTcwNDA4OTE1OTAwMDQyNg",
        "snippet": {
          "publishedAt": "2024-01-01T06:05:59+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L27. Clone a LinkedList with Next and Random Pointers | Copy List with Random Pointers",
          "description": "Problem Link: https://tinyurl.com/ytkm6xuz\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "knl2oDEyKLBbmoRO2R8QOMTAcII",
        "id": "MTUxNzA0MDg5MTU0MTcwNDA4OTE1NDAwMDEyNQ",
        "snippet": {
          "publishedAt": "2024-01-01T06:05:54+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L26. Sort a Linked List | Merge Sort and Brute Force",
          "description": "Problem Link: https://bit.ly/4aSKrTF\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "u1qIjUSKT90ynb9Wb-f-vP0d4IM",
        "id": "MTUxNzA0MDg5MTQ4MTcwNDA4OTE0ODAwMDc5MQ",
        "snippet": {
          "publishedAt": "2024-01-01T06:05:48+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L24. Flattening a LinkedList | Multiple Approaches with Dry Run",
          "description": "Problem Link: https://tinyurl.com/2p9ns48e\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "g0SiDM7Swi7Kt_y-RS6flo_d3-8",
        "id": "MTUxNzA0MDg4OTk3MTcwNDA4ODk5NzAwMDUwMQ",
        "snippet": {
          "publishedAt": "2024-01-01T06:03:17+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L25. Merge K Sorted Lists | Multiple Approaches",
          "description": "Problem Link: https://bit.ly/4aCpvQx\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "vH9zwS0Eb7kMuj2BEMk5k1YVDL8",
        "id": "MTUxNzA0MDg4OTQxMTcwNDA4ODk0MTAwMDcxNg",
        "snippet": {
          "publishedAt": "2024-01-01T06:02:21+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L23. Merge two sorted Linked Lists",
          "description": "Problem Link: https://bit.ly/3vjuaGQ\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Io6nxIUzI_DF7ODeKo_kQQDUAa4",
        "id": "MTE3MDQwMDQ2NjQxNzA0MDA0NjY0MDAwOTAw",
        "snippet": {
          "publishedAt": "2023-12-31T06:37:44+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L28. Design a Browser History | LinkedList Implementation",
          "description": "Problem Link: https://bit.ly/3tHiY6k\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mG3KLugbOdc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "oPy_v1DaxWu7OHptiMHY3ofL3yI",
        "id": "MTE3MDQwMDQ1NDMxNzA0MDA0NTQzMDAwOTI2",
        "snippet": {
          "publishedAt": "2023-12-31T06:35:43+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L27. Clone a LinkedList with Next and Random Pointers | Copy List with Random Pointers",
          "description": "Problem Link: https://tinyurl.com/ytkm6xuz\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/q570bKdrnlw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "hgkrBNKhV0M84V762KHUFGSOaiE",
        "id": "MTE3MDQwMDQ0MzUxNzA0MDA0NDM1MDAwMjQz",
        "snippet": {
          "publishedAt": "2023-12-31T06:33:55+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L26. Sort a Linked List | Merge Sort and Brute Force",
          "description": "Problem Link: https://bit.ly/4aSKrTF\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/8ocB7a_c-Cc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YcPTDbTjmYuwlD9L_ZKRSzjieXA",
        "id": "MTE3MDQwMDQyODQxNzA0MDA0Mjg0MDAwMDEw",
        "snippet": {
          "publishedAt": "2023-12-31T06:31:24+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L25. Merge K Sorted Lists | Multiple Approaches",
          "description": "Problem Link: https://bit.ly/4aCpvQx\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/1zktEppsdig/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ZIL7Z4aY08ojU0YlAo6jAmBHb8I",
        "id": "MTE3MDQwMDQxMzQxNzA0MDA0MTM0MDAwMjQw",
        "snippet": {
          "publishedAt": "2023-12-31T06:28:54+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L24. Flattening a LinkedList | Multiple Approaches with Dry Run",
          "description": "Problem Link: https://tinyurl.com/2p9ns48e\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ykelywHJWLg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DS6i-05xf0pHJ-Qahi8b9DsEOxU",
        "id": "MTE3MDQwMDM4NTAxNzA0MDAzODUwMDAwNjIy",
        "snippet": {
          "publishedAt": "2023-12-31T06:24:10+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L23. Merge two sorted Linked Lists",
          "description": "Problem Link: https://bit.ly/3vjuaGQ\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/jXu-H7XuClE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "CVsVLxqvwClNxnqwbh_An-rnC3M",
        "id": "MTUxNzAxMzMwMDUzMTcwMTMzMDA1MzAwMDYzOQ",
        "snippet": {
          "publishedAt": "2023-11-30T07:40:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L22. Rotate a LinkedList",
          "description": "Problem Link: https://tinyurl.com/ye23ua58\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5JLe5Sze1HFILiJrNgYRlRnr17M",
        "id": "MTE3MDEzMzAwNTMxNzAxMzMwMDUzMDAwMjc4",
        "snippet": {
          "publishedAt": "2023-11-30T07:40:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L22. Rotate a LinkedList",
          "description": "Problem Link: https://tinyurl.com/ye23ua58\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/uT7YI7XbTY8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qdcOy6UC3RMQSxqSEWhyECm73Qg",
        "id": "MTUxNzAxMzI5OTE2MTcwMTMyOTkxNjAwMDk4Nw",
        "snippet": {
          "publishedAt": "2023-11-30T07:38:36+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L21. Reverse Nodes in K Group Size of LinkedList",
          "description": "Problem Link: https://tinyurl.com/4dbz8fnn\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "RmG0VZ7EkHuOW1q4u3oG8a4zEuU",
        "id": "MTE3MDEzMjk4NjUxNzAxMzI5ODY1MDAwNzk4",
        "snippet": {
          "publishedAt": "2023-11-30T07:37:45+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L21. Reverse Nodes in K Group Size of LinkedList",
          "description": "Problem Link: https://tinyurl.com/4dbz8fnn\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lIar1skcQYI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "CKSupqnQXmhz1yr4nX1Y9PS79y0",
        "id": "MTUxNzAxMzI5NzY1MTcwMTMyOTc2NTAwMDYzNw",
        "snippet": {
          "publishedAt": "2023-11-30T07:36:05+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L20. Remove duplicates from sorted DLL",
          "description": "Problem Link: https://tinyurl.com/5n8ndcuu\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "MqiQJjUJiS3H6MNXnlIaQjuI33o",
        "id": "MTE3MDEzMjk3MDYxNzAxMzI5NzA2MDAwMjg2",
        "snippet": {
          "publishedAt": "2023-11-30T07:35:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L20. Remove duplicates from sorted DLL",
          "description": "Problem Link: https://tinyurl.com/5n8ndcuu\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YJKVTnOJXSY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "aNAEDqObVhAnDNRlOko785mxQmE",
        "id": "MTUxNzAxMzI5NjUxMTcwMTMyOTY1MTAwMDEwOQ",
        "snippet": {
          "publishedAt": "2023-11-30T07:34:11+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L19. Find all Pairs with given Sum in DLL",
          "description": "Problem Link: https://tinyurl.com/y4xca7e5\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ISgx80eqZz9jB55519bWPENdY-8",
        "id": "MTE3MDEzMjk2MDAxNzAxMzI5NjAwMDAwNzMy",
        "snippet": {
          "publishedAt": "2023-11-30T07:33:20+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L19. Find all Pairs with given Sum in DLL",
          "description": "Problem Link: https://tinyurl.com/y4xca7e5\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YitR4dQsddE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YzOWGW2lKui-_qqz2_8OKAP-f3w",
        "id": "MTUxNzAxMzI5NTM0MTcwMTMyOTUzNDAwMDQ0Nw",
        "snippet": {
          "publishedAt": "2023-11-30T07:32:14+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L18. Delete all occurrences of a Key in DLL",
          "description": "Problem Link: https://tinyurl.com/yc7znssk\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "aqYbXEX7tHI9UDc-3uOdOWI1jAM",
        "id": "MTE3MDEzMjk0NTExNzAxMzI5NDUxMDAwNDI4",
        "snippet": {
          "publishedAt": "2023-11-30T07:30:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L18. Delete all occurrences of a Key in DLL",
          "description": "Problem Link: https://tinyurl.com/yc7znssk\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Mh0NH_SD92k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Sb5RWMWEl_Q-L5Z8IUSE9bJ2SUU",
        "id": "MTUxNzAxMjcxNTAyMTcwMTI3MTUwMjAwMDA4OQ",
        "snippet": {
          "publishedAt": "2023-11-29T15:25:02+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L17. Find the starting point of the Loop/Cycle in LinkedList | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/4c5a64xv\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "dZzwKOJEvSZiD8rvCQFhVc2tWNk",
        "id": "MTE3MDEyNzE0NDQxNzAxMjcxNDQ0MDAwMzk5",
        "snippet": {
          "publishedAt": "2023-11-29T15:24:04+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L17. Find the starting point of the Loop/Cycle in LinkedList | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/4c5a64xv\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2Kd0KKmmHFc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "I9QXcUYUWp3jTJNlk0046OK3pgM",
        "id": "MTUxNzAxMjY4Mzk5MTcwMTI2ODM5OTAwMDk1NA",
        "snippet": {
          "publishedAt": "2023-11-29T14:33:19+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L16. Delete the middle node of the LinkedList",
          "description": "Problem Link: https://tinyurl.com/y2r52yz8\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YBJkCibjvrbL1pYqUDZAMh6hRTs",
        "id": "MTE3MDEyNjgzMDUxNzAxMjY4MzA1MDAwNzY1",
        "snippet": {
          "publishedAt": "2023-11-29T14:31:45+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L16. Delete the middle node of the LinkedList",
          "description": "Problem Link: https://tinyurl.com/y2r52yz8\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ePpV-_pfOeI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "cbfu09QvzN37DfR-F1I2CLs_k50",
        "id": "MTUxNzAxMjY2NjE0MTcwMTI2NjYxNDAwMDgwMg",
        "snippet": {
          "publishedAt": "2023-11-29T14:03:34+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L15. Find the length of the Loop in LinkedList",
          "description": "Problem Link: https://tinyurl.com/5n78kcda\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "6-4GniE7G9gRbCWUoFrUJ0ZEpW4",
        "id": "MTE3MDEyNjY2MTMxNzAxMjY2NjEzMDAwNjcw",
        "snippet": {
          "publishedAt": "2023-11-29T14:03:33+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L15. Find the length of the Loop in LinkedList",
          "description": "Problem Link: https://tinyurl.com/5n78kcda\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/I4g1qbkTPus/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "m0_vd01Ph4uyU30MfN8c_W-2dfI",
        "id": "MTUxNzAxMjY2MjQ0MTcwMTI2NjI0NDAwMDM3NA",
        "snippet": {
          "publishedAt": "2023-11-29T13:57:24+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L14. Detect a loop or cycle in LinkedList | With proof and Intuition",
          "description": "Problem Link: https://tinyurl.com/3rxwup5c\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "pUoWWbHtfUtJ9MS6N5TlwPyTljQ",
        "id": "MTUxNzAxMjY2MDc0MTcwMTI2NjA3NDAwMDc5MA",
        "snippet": {
          "publishedAt": "2023-11-29T13:54:34+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L13. Find the middle element of the LinkedList | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/ykfyj5cd\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "p0LqVIEjNlvUHQ_BOQvKFdjQaxg",
        "id": "MTE3MDEyNjU5NzYxNzAxMjY1OTc2MDAwODk1",
        "snippet": {
          "publishedAt": "2023-11-29T13:52:56+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L14. Detect a loop or cycle in LinkedList | With proof and Intuition",
          "description": "Problem Link: https://tinyurl.com/3rxwup5c\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/wiOo4DC5GGA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "SK4sXlQAoeoi4QjC88e9Ax7qcyQ",
        "id": "MTE3MDEyNjU3NDkxNzAxMjY1NzQ5MDAwNjcx",
        "snippet": {
          "publishedAt": "2023-11-29T13:49:09+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L13. Find the middle element of the LinkedList | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/ykfyj5cd\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7LjQ57RqgEc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Pe2Y-NgS3oNyowGzjAA78k4n8cU",
        "id": "MTUxNzAxMjY0MzQyMTcwMTI2NDM0MjAwMDQ4MA",
        "snippet": {
          "publishedAt": "2023-11-29T13:25:42+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L12. Find the intersection point of Y LinkedList",
          "description": "Problem Link: https://tinyurl.com/yc344rnt\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "MbfJLhJAhfjZ817wq56WEUq40Po",
        "id": "MTE3MDEyNjQyOTkxNzAxMjY0Mjk5MDAwMDM4",
        "snippet": {
          "publishedAt": "2023-11-29T13:24:59+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L12. Find the intersection point of Y LinkedList",
          "description": "Problem Link: https://tinyurl.com/yc344rnt\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0DYoPz2Tpt4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "S4-cV17bOuSeCkKZLwEgko1UilY",
        "id": "MTUxNzAxMjY0MjMzMTcwMTI2NDIzMzAwMDk4Nw",
        "snippet": {
          "publishedAt": "2023-11-29T13:23:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L11. Add 1 to a number represented by LinkedList",
          "description": "Problem Link: https://tinyurl.com/3hrjsb36\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "pE7IMOmDcqsJk2gclwfMUcJxFa4",
        "id": "MTE3MDEyNjQxNzcxNzAxMjY0MTc3MDAwMDg0",
        "snippet": {
          "publishedAt": "2023-11-29T13:22:57+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L11. Add 1 to a number represented by LinkedList",
          "description": "Problem Link: https://tinyurl.com/3hrjsb36\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/aXQWhbvT3w0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Ogq0nlH_FVWAuRqHRmqs2psLUjI",
        "id": "MTUxNzAxMDE5NDAzMTcwMTAxOTQwMzAwMDI5Mg",
        "snippet": {
          "publishedAt": "2023-11-26T17:23:23+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L10. Check if a LinkedList is Palindrome or Not | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/2p869csv\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "i19afJNvnrzZEKtRaW-PtQKzvwA",
        "id": "MTE3MDEwMTkzNTkxNzAxMDE5MzU5MDAwMzkz",
        "snippet": {
          "publishedAt": "2023-11-26T17:22:39+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L10. Check if a LinkedList is Palindrome or Not | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/2p869csv\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lRY_G-u_8jk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "94oBLmVd8he_tf0R4tCEh_ToiKo",
        "id": "MTUxNzAxMDE5MTkwMTcwMTAxOTE5MDAwMDkyMA",
        "snippet": {
          "publishedAt": "2023-11-26T17:19:50+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L9. Reverse a LinkedList | Iterative and Recursive",
          "description": "Problem Link: https://tinyurl.com/2ajt9262\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "B7zNKHp6roUF-qhODWjteTJ_mro",
        "id": "MTE3MDEwMTkxMzkxNzAxMDE5MTM5MDAwNzAx",
        "snippet": {
          "publishedAt": "2023-11-26T17:18:59+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L9. Reverse a LinkedList | Iterative and Recursive",
          "description": "Problem Link: https://tinyurl.com/2ajt9262\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/D2vI2DNJGd8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FjWn00hG7G2AMZ1-XjeiZnmSc7A",
        "id": "MTUxNzAxMDE4MzAxMTcwMTAxODMwMTAwMDg5MA",
        "snippet": {
          "publishedAt": "2023-11-26T17:05:01+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. Remove Nth Node from the end of the LinkedList | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/4txecfpz\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0-mPJLRBvL_ABs7vt_r_QMsI9Q0",
        "id": "MTE3MDEwMTgzMDAxNzAxMDE4MzAwMDAwNTc5",
        "snippet": {
          "publishedAt": "2023-11-26T17:05:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L8. Remove Nth Node from the end of the LinkedList | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/4txecfpz\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3kMKYQ2wNIU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "u8v6XSkl4rKkbhiI_qORYRCs3wo",
        "id": "MTUxNzAxMDE2NjEzMTcwMTAxNjYxMzAwMDczMQ",
        "snippet": {
          "publishedAt": "2023-11-26T16:36:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Sort a LinkedList of 0's, 1's and 2's | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/4mv3k36t\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "jn2ORmJDVnXGZX7cz0V-WXlqZj4",
        "id": "MTE3MDEwMTY2MTIxNzAxMDE2NjEyMDAwMTY5",
        "snippet": {
          "publishedAt": "2023-11-26T16:36:52+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L7. Sort a LinkedList of 0's, 1's and 2's | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/4mv3k36t\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/gRII7LhdJWc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "W_MM0O12YWONU0UshgaOlsTGKpI",
        "id": "MTUxNzAxMDE2NDkzMTcwMTAxNjQ5MzAwMDk1Nw",
        "snippet": {
          "publishedAt": "2023-11-26T16:34:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Odd Even Linked List | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/47fu86tm\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QOclFa4Tkl-gk-36irjC31hLaeQ",
        "id": "MTE3MDEwMTY0OTIxNzAxMDE2NDkyMDAwMzI5",
        "snippet": {
          "publishedAt": "2023-11-26T16:34:52+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L6. Odd Even Linked List | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/47fu86tm\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qf6qp7GzD5Q/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9CKUcWpQHOiPjQ7A2JOuaMB0lCw",
        "id": "MTE3MDEwMTY0MDgxNzAxMDE2NDA4MDAwMzQ4",
        "snippet": {
          "publishedAt": "2023-11-26T16:33:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Paid LinkedList Bootcamp - Launch Video",
          "description": "Get a mentor for your journey: https://visit.preplaced.in/njh\nUse STRIVER1000 to get extra credits. \n\nIn this video, I will be talking about \n- the number of videos\n- the number of problems\n- the sub-topics that I will cover \n- doubt support \n- the best way to cover this bootcamp to be a master\n- the language used in the videos \n- the price of the boot camp\n- launch date\n\nFollow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9GLvpDravxfalfiF2PrRbwAV630",
        "id": "MTUxNzAxMDE2MDIyMTcwMTAxNjAyMjAwMDYwNw",
        "snippet": {
          "publishedAt": "2023-11-26T16:27:02+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Add 2 numbers in LinkedList | Dummy Node Approach",
          "description": "Problem Link: https://tinyurl.com/5n98urdv \n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4lWvPQufIAnFjeSS91inp_ZpkxQ",
        "id": "MTE3MDEwMTU5MjgxNzAxMDE1OTI4MDAwODMw",
        "snippet": {
          "publishedAt": "2023-11-26T16:25:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L5. Add 2 numbers in LinkedList | Dummy Node Approach",
          "description": "Problem Link: https://tinyurl.com/5n98urdv \n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/XmRrGzR6udg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-2Yjx0H1fwl-XtsaEjqiQbCcYbw",
        "id": "MTUxNzAxMDEwODMwMTcwMTAxMDgzMDAwMDk5Mg",
        "snippet": {
          "publishedAt": "2023-11-26T15:00:30+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Reverse a DLL | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/mw45vuf6\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "VWW4PdJgeSa-SDJQRxsx4Ozn-Zg",
        "id": "MTE3MDEwMTA3OTYxNzAxMDEwNzk2MDAwNzY4",
        "snippet": {
          "publishedAt": "2023-11-26T14:59:56+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L4. Reverse a DLL | Multiple Approaches",
          "description": "Problem Link: https://tinyurl.com/mw45vuf6\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/u3WUW2qe6ww/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "B9iDZZAy92DkipT-CeomF_m2fO0",
        "id": "MTUxNzAwOTgwNjAyMTcwMDk4MDYwMjAwMDg0Mg",
        "snippet": {
          "publishedAt": "2023-11-26T06:36:42+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Introduction to Doubly LinkedList | Insertions and Deletions",
          "description": "Convert Array to DLL: https://tinyurl.com/3fj6tvrt \nDeletion of head of the DLL: https://tinyurl.com/mubc6f26\nDeletion of tail of the DLL: https://tinyurl.com/mubc6f26\nDeletion of the Kth node of the DLL: https://tinyurl.com/ytau6hwn\nDeletion of a given node(!head): https://tinyurl.com/2aady8f7\nInsertion before the head: https://tinyurl.com/58fyn6d8\nInsert after a given Node: https://tinyurl.com/26yh8tv7\nInsert at end: https://tinyurl.com/4a9e8ceu\n\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XBKJal8Ev5eFtxe--NNFuye4Nps",
        "id": "MTE3MDA5ODAyNjAxNzAwOTgwMjYwMDAwODAw",
        "snippet": {
          "publishedAt": "2023-11-26T06:31:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L3. Introduction to Doubly LinkedList | Insertions and Deletions",
          "description": "Convert Array to DLL: https://tinyurl.com/3fj6tvrt \nDeletion of head of the DLL: https://tinyurl.com/mubc6f26\nDeletion of tail of the DLL: https://tinyurl.com/mubc6f26\nDeletion of the Kth node of the DLL: https://tinyurl.com/ytau6hwn\nDeletion of a given node(!head): https://tinyurl.com/2aady8f7\nInsertion before the head: https://tinyurl.com/58fyn6d8\nInsert after a given Node: https://tinyurl.com/26yh8tv7\nInsert at end: https://tinyurl.com/4a9e8ceu\n\n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0eKMU10uEDI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XRYmk3Nk7eETaR2HfPC79AHBYpA",
        "id": "MTUxNzAwOTc5OTEzMTcwMDk3OTkxMzAwMDg2NA",
        "snippet": {
          "publishedAt": "2023-11-26T06:25:13+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Deletion and Insertion in LL | 8 Problems",
          "description": "Entire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4BrhznnAlsjSZk2EgkDRSihNA8E",
        "id": "MTE3MDA5Nzk3MzgxNzAwOTc5NzM4MDAwODAx",
        "snippet": {
          "publishedAt": "2023-11-26T06:22:18+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L2. Deletion and Insertion in LL | 8 Problems",
          "description": "Entire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VaECK03Dz-g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "T0mYC-5dSAf-PycGk2bjbKEeYfo",
        "id": "MTUxNzAwOTYyMjEwMTcwMDk2MjIxMDAwMDcyMw",
        "snippet": {
          "publishedAt": "2023-11-26T01:30:10+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L1. Introduction to LinkedList | Traversal | Length | Search an Element",
          "description": "Convert an array to LL: https://tinyurl.com/55cy4jtd\nLength of LL: https://tinyurl.com/kvdu6t2s \nSearch an element: https://tinyurl.com/27c9b349 \n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ZiPvFS3eKXbKuat2WmmtFN9Vfik",
        "id": "MTE3MDA5Mzc2NjAxNzAwOTM3NjYwMDAwMTY4",
        "snippet": {
          "publishedAt": "2023-11-25T18:41:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L1. Introduction to LinkedList | Traversal | Length | Search an Element",
          "description": "Convert an array to LL: https://tinyurl.com/55cy4jtd\nLength of LL: https://tinyurl.com/kvdu6t2s \nSearch an element: https://tinyurl.com/27c9b349 \n\nEntire LL Sheet: https://takeuforward.org/linked-list/top-linkedlist-interview-questions-structured-path-with-video-solutions/ \n\nCheck our A2Z DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/ \n\nPlease do give us a like, and subscribe to us if you are new to our channel. \n\nDo follow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Nq7ok-OyEpg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "a-BvaNx19FP32EC0BlwH_XXX4uc",
        "id": "MTUxNzAwODgzMDExMTcwMDg4MzAxMTAwMDEwNw",
        "snippet": {
          "publishedAt": "2023-11-25T03:30:11+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Paid LinkedList Bootcamp - Launch Video",
          "description": "Get a mentor for your journey: https://visit.preplaced.in/njh\nUse STRIVER1000 to get extra credits. \n\nIn this video, I will be talking about \n- the number of videos\n- the number of problems\n- the sub-topics that I will cover \n- doubt support \n- the best way to cover this bootcamp to be a master\n- the language used in the videos \n- the price of the boot camp\n- launch date\n\nFollow us on our socials: https://linktr.ee/takeuforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cg6JGiXhQ9c/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "A8pyz0ajZV1P-SmthcK5zZEYqWs",
        "id": "MTUxNjk3MTg4MTY2MTY5NzE4ODE2NjAwMDA4OA",
        "snippet": {
          "publishedAt": "2023-10-13T09:09:26+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "System Design Roadmap. Special thanks to @gkcs for helping with this one ♥️",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/plG_kKIBD1k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/plG_kKIBD1k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/plG_kKIBD1k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/plG_kKIBD1k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/plG_kKIBD1k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Ex9EZ7oO190uQ7YZs9mddJNlBJk",
        "id": "MTUxNjk2NTg2Mjk0MTY5NjU4NjI5NDAwMDI2OA",
        "snippet": {
          "publishedAt": "2023-10-06T09:58:14+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "What caused facebook to go down?",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UoMsWjrr7Zw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UoMsWjrr7Zw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UoMsWjrr7Zw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/UoMsWjrr7Zw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/UoMsWjrr7Zw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "X8ILND75xLKmJ5Fo33779eF7P9A",
        "id": "MTUxNjk1Nzk4Mjc1MTY5NTc5ODI3NTAwMDI2MA",
        "snippet": {
          "publishedAt": "2023-09-27T07:04:35+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "How to setup VS code for DSA and CP | Input / Output split format",
          "description": "Bookmark Crio's project ideas and check free trial here: https://rebrand.ly/va1bcl3\n\nDetailed steps for C+:+  https://takeuforward.org/set-up/how-to-set-up-visual-studio-code-for-c-cp-and-dsa/\nDetailed steps for Java: https://takeuforward.org/set-up/how-to-set-up-visual-studio-code-for-java-programming-cp-and-dsa/\nDetailed steps for Python: https://takeuforward.org/set-up/how-to-set-up-visual-studio-code-for-python-programming-cp-or-dsa/\nDetailed steps for Javascript: \n\n\nA2Z Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\n\nIn this video, we learn how to set up VSCode for practicing DSA and CP. You can use the editor of your choice, but most of us use VSCode.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "J9_XvLRh5r7EhXxZZCipzg0pLjM",
        "id": "MTE2OTU3OTgxMTExNjk1Nzk4MTExMDAwNzMw",
        "snippet": {
          "publishedAt": "2023-09-27T07:01:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "How to setup VS code for DSA and CP | Input / Output split format",
          "description": "Bookmark Crio's project ideas and check free trial here: https://rebrand.ly/va1bcl3\n\nDetailed steps for C+:+  https://takeuforward.org/set-up/how-to-set-up-visual-studio-code-for-c-cp-and-dsa/\nDetailed steps for Java: https://takeuforward.org/set-up/how-to-set-up-visual-studio-code-for-java-programming-cp-and-dsa/\nDetailed steps for Python: https://takeuforward.org/set-up/how-to-set-up-visual-studio-code-for-python-programming-cp-or-dsa/\nDetailed steps for Javascript: \n\n\nA2Z Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\n\nIn this video, we learn how to set up VSCode for practicing DSA and CP. You can use the editor of your choice, but most of us use VSCode.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/h3uDCJ5mvgw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "94mMLED7aWpkgYBuSlN4OqbDufg",
        "id": "MTE2OTQ4OTYwMjcxNjk0ODk2MDI3MDAwNzQ2",
        "snippet": {
          "publishedAt": "2023-09-16T20:27:07+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-1. Introduction to Graph | Types | Different Conventions Used",
          "description": "Notes Link: https://takeuforward.org/graph/introduction-to-graph/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/M3_pLsDdeuU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/M3_pLsDdeuU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/M3_pLsDdeuU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/M3_pLsDdeuU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "zIRsdLGDGTo2xVtah0Zd5Nzu2Rc",
        "id": "MTE2OTQ4OTU5MDgxNjk0ODk1OTA4MDAwOTE4",
        "snippet": {
          "publishedAt": "2023-09-16T20:25:08+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 1. Introduction to Dynamic Programming | Memoization | Tabulation | Space Optimization Techniques",
          "description": "Lecture Notes: https://takeuforward.org/data-structure/dynamic-programming-introduction/\n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\n\n\nIn this video, we have discussed what is memoization, what is tabulation, what is space optimisation with the classic Fibonacci problem. You might feel that this question has been done by you, but I will still urge you to watch this till the end because this is going to teach you a bunch of stuff. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tyB0ztf0DNY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tyB0ztf0DNY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tyB0ztf0DNY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/tyB0ztf0DNY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/tyB0ztf0DNY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4BF9lwAjgVU9fkM17XOJ_ooG_wU",
        "id": "MTE2OTQ4OTU2NzkxNjk0ODk1Njc5MDAwNzM0",
        "snippet": {
          "publishedAt": "2023-09-16T20:21:19+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 56. Count Square Submatrices with All Ones | DP on Rectangles 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3tYAUY7\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Count Square Submatrices with All Ones problem. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/auS1fynpnjo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/auS1fynpnjo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/auS1fynpnjo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/auS1fynpnjo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/auS1fynpnjo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XBNS26N9CodKV6CYDsSRtrXNpeo",
        "id": "MTE2OTQ4OTU2MTQxNjk0ODk1NjE0MDAwNzA0",
        "snippet": {
          "publishedAt": "2023-09-16T20:20:14+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 55. Maximum Rectangle Area with all 1's | DP on Rectangles",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/33HFz61\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Maximum Rectangle Area with all 1's problem. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tOylVCugy9k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tOylVCugy9k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tOylVCugy9k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/tOylVCugy9k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/tOylVCugy9k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "xQ3W3NxUfcndroOtOTtUI3RnFls",
        "id": "MTE2OTQ4OTU1NzcxNjk0ODk1NTc3MDAwMzU4",
        "snippet": {
          "publishedAt": "2023-09-16T20:19:37+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 54. Partition Array for Maximum Sum | Front Partition 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3HJTeIl\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Partition Array for Maximum Sum. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PhWWJmaKfMc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PhWWJmaKfMc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PhWWJmaKfMc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/PhWWJmaKfMc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/PhWWJmaKfMc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "d8jakMEpOiU1rz3S885HKPHXhdE",
        "id": "MTE2OTQ4OTU1NDExNjk0ODk1NTQxMDAwODk5",
        "snippet": {
          "publishedAt": "2023-09-16T20:19:01+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 53. Palindrome Partitioning - II | Front Partition 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3jNRzqX\n\nPalindrome Partitioning: https://www.youtube.com/watch?v=WBgsABoClE0\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Palindrome Partitioning - II problem. You learn about how to write the front partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_H8V5hJUGd0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_H8V5hJUGd0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_H8V5hJUGd0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_H8V5hJUGd0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_H8V5hJUGd0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DcrRm4fkm-mITypKkt1lpPE_-ps",
        "id": "MTE2OTQ4OTU1MDQxNjk0ODk1NTA0MDAwMDc2",
        "snippet": {
          "publishedAt": "2023-09-16T20:18:24+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 52. Evaluate Boolean Expression to True | Partition DP",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/32tAMUW\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the question evaluate boolean expression to true. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MM7fXopgyjw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MM7fXopgyjw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MM7fXopgyjw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MM7fXopgyjw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MM7fXopgyjw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "l2GtVRInbrl9Z1h3-f3tSjuWPas",
        "id": "MTE2OTQ4OTU0NzIxNjk0ODk1NDcyMDAwMDA1",
        "snippet": {
          "publishedAt": "2023-09-16T20:17:52+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 51. Burst Balloons | Partition DP | Interactive G-Meet Session Update",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3Kgck9N\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the burst balloons problem which is a part of partition DP.\n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Yz4LlDSlkns/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Yz4LlDSlkns/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Yz4LlDSlkns/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Yz4LlDSlkns/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Yz4LlDSlkns/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YQpOa-phCI8T_9asuh7MwNQFzWg",
        "id": "MTE2OTQ4OTU0NDAxNjk0ODk1NDQwMDAwNDAy",
        "snippet": {
          "publishedAt": "2023-09-16T20:17:20+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 50. Minimum Cost to Cut the Stick",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3rWLMnC\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the MCM Dp, this is the first problem on the pattern Partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xwomavsC86c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xwomavsC86c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xwomavsC86c/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xwomavsC86c/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xwomavsC86c/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9CrK_d41F0mXTk8ciGiqI4i2kuE",
        "id": "MTE2OTQ4OTUzOTkxNjk0ODk1Mzk5MDAwNTU1",
        "snippet": {
          "publishedAt": "2023-09-16T20:16:39+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 49. Matrix Chain Multiplication | Bottom-Up | Tabulation",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3nXqfce\n\nFirst Part of the Video: https://youtu.be/vRVfmbCFW7Y\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the MCM Dp with tabulation, this is the first problem on the pattern Partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pDCXsbAw5Cg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pDCXsbAw5Cg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pDCXsbAw5Cg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pDCXsbAw5Cg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pDCXsbAw5Cg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7Zpva2thwzTr7Bat-uf_xtzINS4",
        "id": "MTE2OTQ4OTUzNTAxNjk0ODk1MzUwMDAwNDAw",
        "snippet": {
          "publishedAt": "2023-09-16T20:15:50+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 48. Matrix Chain Multiplication | MCM | Partition DP Starts 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3nXqfce\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the MCM Dp, this is the first problem on the pattern Partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/vRVfmbCFW7Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/vRVfmbCFW7Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/vRVfmbCFW7Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/vRVfmbCFW7Y/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/vRVfmbCFW7Y/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "uOXNtaZzEgsomMZq-Jo0BfL_ZqE",
        "id": "MTE2OTQ4OTUzMTExNjk0ODk1MzExMDAwNDg3",
        "snippet": {
          "publishedAt": "2023-09-16T20:15:11+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 47. Number of Longest Increasing Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3fTRGiz\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the MCM Dp, this is the first problem on the pattern Partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cKVl1TFdNXg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cKVl1TFdNXg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cKVl1TFdNXg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cKVl1TFdNXg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cKVl1TFdNXg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QwgezI5Q-VPYyQEarjfaeGXjbeg",
        "id": "MTE2OTQ4OTUyNzYxNjk0ODk1Mjc2MDAwMDkw",
        "snippet": {
          "publishedAt": "2023-09-16T20:14:36+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 46. Longest Bitonic Subsequence | LIS",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3r4o1JB\n\nFree Class: https://unacademy.com/class/ask-me-anything-career-guidance/WBEKTX1P \nAlso, check out all classes by me: https://unacademy.onelink.me/SXoE/bmkitbcg\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Longet Bitonic Subsequence, you need to watch the Dp 41 and 42 prior to this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/y4vN0WNdrlg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/y4vN0WNdrlg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/y4vN0WNdrlg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/y4vN0WNdrlg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/y4vN0WNdrlg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ZvOEXlKmpaXu92TAhuPc6pmzh3k",
        "id": "MTE2OTQ4OTUyMzkxNjk0ODk1MjM5MDAwODc2",
        "snippet": {
          "publishedAt": "2023-09-16T20:13:59+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 45. Longest String Chain | Longest Increasing Subsequence | LIS",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3KHsl9J\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Longest String Chain, prior to this please solve dp 41 and dp 42. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YY8iBaYcc4g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YY8iBaYcc4g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YY8iBaYcc4g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YY8iBaYcc4g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YY8iBaYcc4g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BUip06QEZKqzLVB_ofQ08BEWSpQ",
        "id": "MTE2OTQ4OTUxOTkxNjk0ODk1MTk5MDAwMzQ4",
        "snippet": {
          "publishedAt": "2023-09-16T20:13:19+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 44. Largest Divisible Subset | Longest Increasing Subsequence",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3rON1Ef\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Largest divisible Subset, but please make sure to watch DP 41 and DP 42 prior to this video. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gDuZwBW9VvM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gDuZwBW9VvM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gDuZwBW9VvM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/gDuZwBW9VvM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/gDuZwBW9VvM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "6cDAD4zK0aVQ1pUO9gAzlII3dkU",
        "id": "MTE2OTQ4OTUxNjExNjk0ODk1MTYxMDAwNTA1",
        "snippet": {
          "publishedAt": "2023-09-16T20:12:41+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 43. Longest Increasing Subsequence | Binary Search | Intuition",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3rVoIoq\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Longest Increasing Subsequence problem using Dynamic Programming\n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/on2hvxBXJH4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/on2hvxBXJH4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/on2hvxBXJH4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/on2hvxBXJH4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/on2hvxBXJH4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "_Whvq2-6GhNATg3D_Irt9oOw_Xg",
        "id": "MTE2OTQ4OTUxMjcxNjk0ODk1MTI3MDAwMTc4",
        "snippet": {
          "publishedAt": "2023-09-16T20:12:07+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 42. Printing Longest Increasing Subsequence | Tabulation | Algorithm",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3rVoIoq\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the LIS DP using tabulation method, then we go on to print the LIS as well. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IFfYfonAFGc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IFfYfonAFGc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IFfYfonAFGc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/IFfYfonAFGc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/IFfYfonAFGc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "iFWyfLbyzyBfwAgymMr4TqIoImo",
        "id": "MTE2OTQ4OTUwOTAxNjk0ODk1MDkwMDAwMDM1",
        "snippet": {
          "publishedAt": "2023-09-16T20:11:30+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 41. Longest Increasing Subsequence | Memoization",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3rVoIoq\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the LIS problem with DP. In the next video we have learnt about the next method using tabulation. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ekcwMsSIzVc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ekcwMsSIzVc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ekcwMsSIzVc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ekcwMsSIzVc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ekcwMsSIzVc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "MooL_kgib1Z3YZKYHwmYbxr3yWA",
        "id": "MTE2OTQ4OTUwNDcxNjk0ODk1MDQ3MDAwNTA3",
        "snippet": {
          "publishedAt": "2023-09-16T20:10:47+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 40. Buy and Sell Stocks With Transaction Fee | Recursion to Space Optimisation",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3nZucNH\nCheck Session: https://unacademy.com/educator/class/placement-guidance-via-gate/M2AG4MNF \n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the MCM Dp, this is the first problem on the pattern Partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/k4eK-vEmnKg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/k4eK-vEmnKg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/k4eK-vEmnKg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/k4eK-vEmnKg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/k4eK-vEmnKg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "xGWKoL6kJWlh-K3CsUP5SoQgfNE",
        "id": "MTE2OTQ4OTUwMTMxNjk0ODk1MDEzMDAwNDcw",
        "snippet": {
          "publishedAt": "2023-09-16T20:10:13+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 39. Buy and Sell Stocks With Cooldown | Recursion to Space Optimisation",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3tZsYWA\n\nCheck session: https://unacademy.com/educator/class/discussion-on-career-guidance/PDTIT12O \n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the buy and sell stocks with cooldown problem. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IGIe46xw3YY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IGIe46xw3YY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IGIe46xw3YY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/IGIe46xw3YY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/IGIe46xw3YY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5_QhAukj6CWkJCyulCP1QHV-OIg",
        "id": "MTE2OTQ4OTQ5NzYxNjk0ODk0OTc2MDAwMjk2",
        "snippet": {
          "publishedAt": "2023-09-16T20:09:36+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 38. Buy and Stock Sell IV | Recursion to Space Optimisation",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/346R72e\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Buy and Stocks IV.\n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IV1dHbk5CDc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IV1dHbk5CDc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IV1dHbk5CDc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/IV1dHbk5CDc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/IV1dHbk5CDc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4-1HeBr42gNNUjXj9OxSO8z75wE",
        "id": "MTE2OTQ4OTQ5MzgxNjk0ODk0OTM4MDAwMTQ4",
        "snippet": {
          "publishedAt": "2023-09-16T20:08:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 37. Buy and Sell Stocks III | Recursion to Space Optimisation",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3rLHkqQ\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the third problem on Buy and Sell stocks. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-uQGzhYj8BQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-uQGzhYj8BQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-uQGzhYj8BQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-uQGzhYj8BQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-uQGzhYj8BQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "cndtDvESMAApnOtIqCKphjWNg4c",
        "id": "MTE2OTQ4OTQ5MDExNjk0ODk0OTAxMDAwNjgz",
        "snippet": {
          "publishedAt": "2023-09-16T20:08:21+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 36. Buy and Sell Stock - II | Recursion to Space Optimisation",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3nYO17H\n\nPlease watch the video at 1.25x for a better experience. \n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Buy and Sell Stock II. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nGJmxkUJQGs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nGJmxkUJQGs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nGJmxkUJQGs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/nGJmxkUJQGs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/nGJmxkUJQGs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "JFq88_DtyeUI7UrbMIWhGT16GrI",
        "id": "MTE2OTQ4OTQ4MjYxNjk0ODk0ODI2MDAwNjkx",
        "snippet": {
          "publishedAt": "2023-09-16T20:07:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 34. Wildcard Matching | Recursive to 1D Array Optimisation 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3qXtORt\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the wildcard matching problem, which is a leetcode hard problem. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZmlQ3vgAOMo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZmlQ3vgAOMo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZmlQ3vgAOMo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZmlQ3vgAOMo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZmlQ3vgAOMo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qsFDdzy4vsBMFOxcL-VJwN_QVGM",
        "id": "MTE2OTQ4OTQ3ODcxNjk0ODk0Nzg3MDAwMDY5",
        "snippet": {
          "publishedAt": "2023-09-16T20:06:27+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 33. Edit Distance | Recursive to 1D Array Optimised Solution 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3HcTJdy\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Edit Distance problem. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fJaKO8FbDdo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fJaKO8FbDdo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fJaKO8FbDdo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/fJaKO8FbDdo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/fJaKO8FbDdo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wk-Up1UrkCtpvn6ixOeT6z1HDkg",
        "id": "MTE2OTQ4OTQ3NDgxNjk0ODk0NzQ4MDAwNTU0",
        "snippet": {
          "publishedAt": "2023-09-16T20:05:48+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 32. Distinct Subsequences | 1D Array Optimisation Technique 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3nZNxy7\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the distinct subsequences problems, which is a pattern in DP on Strings. Here we learn how to match strings. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nVG7eTiD2bY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nVG7eTiD2bY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nVG7eTiD2bY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/nVG7eTiD2bY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/nVG7eTiD2bY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wpCv0s6t6LKImvr7bFnRkLbfzY0",
        "id": "MTE2OTQ4OTQ3MDAxNjk0ODk0NzAwMDAwMjMw",
        "snippet": {
          "publishedAt": "2023-09-16T20:05:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 31. Shortest Common Supersequence | DP on Strings",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3vEYKce\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Longest Common Supersequence, please watch LCS video before solving this problem. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xElxAuBcvsU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xElxAuBcvsU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xElxAuBcvsU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xElxAuBcvsU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xElxAuBcvsU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2wXaScHnHxhEZ-oaXukBWvxb3S4",
        "id": "MTE2OTQ4OTQ2NjQxNjk0ODk0NjY0MDAwNDU1",
        "snippet": {
          "publishedAt": "2023-09-16T20:04:24+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 30. Minimum Insertions/Deletions to Convert String A to String B",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3pya8CP\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the minimum insertions and deletions to convert a String A to String B. Please watch the LCS video before doing this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/yMnH0jrir0Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/yMnH0jrir0Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/yMnH0jrir0Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/yMnH0jrir0Q/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/yMnH0jrir0Q/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AalZGVoh0x4w2leZBZrpCs8K_0g",
        "id": "MTE2OTQ4OTQ2MjcxNjk0ODk0NjI3MDAwMTYx",
        "snippet": {
          "publishedAt": "2023-09-16T20:03:47+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 29. Minimum Insertions to Make String Palindrome",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3H2ZtGP\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the minimum insertions to make a string palindrome, before watching this please make sure to watch the DP 28 video. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xPBLEj41rFU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xPBLEj41rFU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xPBLEj41rFU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xPBLEj41rFU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xPBLEj41rFU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "r2G5Ypfr1IQUXZAsr48pXLi9c5U",
        "id": "MTE2OTQ4OTQ1OTIxNjk0ODk0NTkyMDAwODY4",
        "snippet": {
          "publishedAt": "2023-09-16T20:03:12+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 28. Longest Palindromic Subsequence",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3pvkqUd\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the Longest Palindromic Subsequence, please watch the LCS Dp video before solving this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/6i_T5kkfv4A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/6i_T5kkfv4A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/6i_T5kkfv4A/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/6i_T5kkfv4A/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/6i_T5kkfv4A/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "uveSzm1DwXo3Z9lxbJ36NcvNkkE",
        "id": "MTE2OTQ4OTQ1NTAxNjk0ODk0NTUwMDAwODA2",
        "snippet": {
          "publishedAt": "2023-09-16T20:02:30+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 27. Longest Common Substring | DP on Strings 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3H2M3KS\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the MCM Dp, this is the first problem on the pattern Partition DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_wP9mWNPL5w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_wP9mWNPL5w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_wP9mWNPL5w/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_wP9mWNPL5w/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_wP9mWNPL5w/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0IGoD6uAtRwOqhAkKhPhziHNsyw",
        "id": "MTE2OTQ4OTQ1MTYxNjk0ODk0NTE2MDAwOTc2",
        "snippet": {
          "publishedAt": "2023-09-16T20:01:56+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 26. Print Longest Common Subsequence | Dp on Strings",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3pvkqUd\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we print the LCS. Please watch DP 25 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-zI4mrF2Pb4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-zI4mrF2Pb4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-zI4mrF2Pb4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-zI4mrF2Pb4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-zI4mrF2Pb4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0TqGSn0xNu9sI5Tq4oENepTr1JM",
        "id": "MTE2OTQ4OTQ0ODAxNjk0ODk0NDgwMDAwMzA5",
        "snippet": {
          "publishedAt": "2023-09-16T20:01:20+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Dp 25. Longest Common Subsequence | Top Down | Bottom-Up | Space Optimised | DP on Strings",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3pvkqUd\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the LCS Dp, this is the first problem on the pattern Strings on DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NPZn9jBrX8U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NPZn9jBrX8U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NPZn9jBrX8U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/NPZn9jBrX8U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/NPZn9jBrX8U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2p4qKAv_2nvFY7_VQcAqRMPZi_I",
        "id": "MTE2OTQ4OTQ0NDQxNjk0ODk0NDQ0MDAwNzE5",
        "snippet": {
          "publishedAt": "2023-09-16T20:00:44+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 24. Rod Cutting Problem | 1D Array Space Optimised Approach",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3H10kYJ\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of cutting rod. We start with memoization, then tabulation, then two-row space optimization, ending up with single row optimisation. This problem is the last problem on DP on Subsequences Pattern. Please watch DP 23 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mO8XpGoJwuo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mO8XpGoJwuo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mO8XpGoJwuo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mO8XpGoJwuo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mO8XpGoJwuo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AifS1ABH0U_d9I_F0wSpamHqdEY",
        "id": "MTE2OTQ4OTQ0MDYxNjk0ODk0NDA2MDAwNTg4",
        "snippet": {
          "publishedAt": "2023-09-16T20:00:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 23. Unbounded Knapsack | 1-D Array Space Optimised Approach",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3IvPdXS\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of minimum coins. We start with memoization, then tabulation, then two-row space optimization. This problem is the seventh problem on DP on Subsequences Pattern. Please watch DP 14 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OgvOZ6OrJoY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OgvOZ6OrJoY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OgvOZ6OrJoY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/OgvOZ6OrJoY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/OgvOZ6OrJoY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "V-lLeNbFgHDGBudxWbVX-t8yGD8",
        "id": "MTE2OTQ4OTQzNjYxNjk0ODk0MzY2MDAwODg1",
        "snippet": {
          "publishedAt": "2023-09-16T19:59:26+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 22. Coin Change 2 | Infinite Supply Problems  | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/33Kd8o2\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of ways to form Coin Change. We start with memoization, then tabulation, then two-row space optimization. This problem is the eighth problem on DP on Subsequences Pattern. Please watch DP 14 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HgyouUi11zk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HgyouUi11zk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HgyouUi11zk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/HgyouUi11zk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/HgyouUi11zk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0RCH7JRFea_Z7BlC65oPmvSL8yk",
        "id": "MTE2OTQ4OTQzMjgxNjk0ODk0MzI4MDAwMjIw",
        "snippet": {
          "publishedAt": "2023-09-16T19:58:48+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 21. Target Sum | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3swy5uL\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of the target sum. This problem is the eighth problem on DP on the Subsequences Pattern. Please watch DP 18 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/b3GD8263-PQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/b3GD8263-PQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/b3GD8263-PQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/b3GD8263-PQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/b3GD8263-PQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "CbY_Kcs7HqQkD3VEY5OUEPOfgrQ",
        "id": "MTE2OTQ4OTQyOTUxNjk0ODk0Mjk1MDAwOTA2",
        "snippet": {
          "publishedAt": "2023-09-16T19:58:15+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 20. Minimum Coins | DP on Subsequences | Infinite Supplies Pattern",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3HJTeIl\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of minimum coins. We start with memoization, then tabulation, then two-row space optimization. This problem is the seventh problem on DP on Subsequences Pattern. Please watch DP 14 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/myPeWb3Y68A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/myPeWb3Y68A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/myPeWb3Y68A/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/myPeWb3Y68A/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/myPeWb3Y68A/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Vq_yfDExs6-dBNupNtisPpK6KcY",
        "id": "MTE2OTQ4OTQyNTkxNjk0ODk0MjU5MDAwOTYz",
        "snippet": {
          "publishedAt": "2023-09-16T19:57:39+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 19. 0/1 Knapsack | Recursion to Single Array Space Optimised Approach | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3KHpP3v\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of 0/1 Knapsack. We start with memoization, then tabulation, then two-row space optimization, then single row optimisation. This problem is the fifth problem on DP on Subsequences Pattern. Please watch DP 17 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GqOmJHQZivw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GqOmJHQZivw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GqOmJHQZivw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GqOmJHQZivw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GqOmJHQZivw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Nl00RAVjt17H1Uez0bu1UuaG8VU",
        "id": "MTE2OTQ4OTQyMjYxNjk0ODk0MjI2MDAwMTcx",
        "snippet": {
          "publishedAt": "2023-09-16T19:57:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 18. Count Partitions With Given Difference | Dp on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3r8mG5b\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of count partitions with given difference. This problem is the fifth problem on DP on Subsequences Pattern. Please watch DP 17 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zoilQD1kYSg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zoilQD1kYSg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zoilQD1kYSg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zoilQD1kYSg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zoilQD1kYSg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QNg9-6hXNzQr2ItHJg7AsgVlwS4",
        "id": "MTE2OTQ4OTQxOTMxNjk0ODk0MTkzMDAwNjMx",
        "snippet": {
          "publishedAt": "2023-09-16T19:56:33+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 17. Counts Subsets with Sum K | Dp on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3B5JBkU\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of count subsets which gives sum equal to K. This problem is the fourth problem on DP on Subsequences Pattern. Please watch DP 14 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZHyb-A2Mte4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZHyb-A2Mte4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZHyb-A2Mte4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZHyb-A2Mte4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZHyb-A2Mte4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "l7JWC6TAEp5QHa6fH6ZXBBpDa-A",
        "id": "MTE2OTQ4OTQxNjAxNjk0ODk0MTYwMDAwNzk4",
        "snippet": {
          "publishedAt": "2023-09-16T19:56:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "Dp 16. Partition A Set Into Two Subsets With Minimum Absolute Sum Difference | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/\nProblem Link: https://bit.ly/3t62bqQ\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of Partition a set into two subsets such that the difference of subset sums is minimum. This problem is the third problem on DP on Subsequences Pattern. Please watch DP 14 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GS_OqZb2CWc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GS_OqZb2CWc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GS_OqZb2CWc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GS_OqZb2CWc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GS_OqZb2CWc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AGWx8JGfsMCp7dZgIO_KM0KwoLo",
        "id": "MTE2OTQ4OTQxMTMxNjk0ODk0MTEzMDAwOTc2",
        "snippet": {
          "publishedAt": "2023-09-16T19:55:13+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 15. Partition Equal Subset Sum | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/partition-equal-subset-sum-dp-15/\nProblem Link: https://bit.ly/34iIIsH\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem of Partition Equal Subset Sum. This problem is the second problem on DP on Subsequences Pattern. Please watch DP 14 before watching this. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7win3dcgo3k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7win3dcgo3k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7win3dcgo3k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7win3dcgo3k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7win3dcgo3k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FZwi82a3tVj6J5xrSdRplWGLD7o",
        "id": "MTE2OTQ4OTQwODAxNjk0ODk0MDgwMDAwNzk0",
        "snippet": {
          "publishedAt": "2023-09-16T19:54:40+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 14. Subset Sum Equals to Target | Identify DP on Subsequences and Ways to Solve them",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/subset-sum-equal-to-target-dp-14/\nProblem Link:https://bit.ly/3ukNmRZ\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem subsets sum equal to K. This problem is the first problem on DP on Subsequences Pattern. Please watch this video to have a clear concept of take/notTake concept. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fWX9xDmIzRI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fWX9xDmIzRI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fWX9xDmIzRI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/fWX9xDmIzRI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/fWX9xDmIzRI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "T_aDE3EAQCxdCAdcr-NUP8y5YSw",
        "id": "MTE2OTQ4OTQwNDMxNjk0ODk0MDQzMDAwNTM2",
        "snippet": {
          "publishedAt": "2023-09-16T19:54:03+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 13. Cherry Pickup II | 3D DP Made Easy | DP On Grids",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/3-d-dp-ninja-and-his-friends-dp-13/ \nProblem Link:https://bit.ly/3KQELfy\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem cherry pickup question where we have two people moving from first row to the last row and this problem teaches us how to solve 3D DP. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/QGfn7JeXK54/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/QGfn7JeXK54/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/QGfn7JeXK54/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/QGfn7JeXK54/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/QGfn7JeXK54/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "54ZskHK8_HP4wwt54B-KY5uqdWM",
        "id": "MTE2OTQ4OTQwMDYxNjk0ODk0MDA2MDAwNzkx",
        "snippet": {
          "publishedAt": "2023-09-16T19:53:26+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 12. Minimum/Maximum Falling Path Sum | Variable Starting and Ending Points | DP on Grids",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/minimum-maximum-falling-path-sum-dp-12/ \nProblem Link: https://bit.ly/3F436dK\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem Minimum Falling Path sum which teaches us about DP on Grids when we have Fixed Starting and Ending Points. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/N_aJ5qQbYA0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/N_aJ5qQbYA0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/N_aJ5qQbYA0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/N_aJ5qQbYA0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/N_aJ5qQbYA0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "rLLo_GuLkbNYaq5-jYtlKY5O7J0",
        "id": "MTE2OTQ4OTM5NjgxNjk0ODkzOTY4MDAwMDU0",
        "snippet": {
          "publishedAt": "2023-09-16T19:52:48+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 11. Triangle | Fixed Starting Point and Variable Ending Point | DP on GRIDS",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/minimum-path-sum-in-triangular-grid-dp-11/\nProblem Link: https://bit.ly/3K1cvqv\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem triangle which teaches you about solving DP on Grids when we have Fixed Starting and Variable Ending Points. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SrP-PiLSYC0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SrP-PiLSYC0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SrP-PiLSYC0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/SrP-PiLSYC0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/SrP-PiLSYC0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "kc8wmxwjBF6iNKrIDHyHbedEmAs",
        "id": "MTE2OTQ4OTM5MzQxNjk0ODkzOTM0MDAwMzM2",
        "snippet": {
          "publishedAt": "2023-09-16T19:52:14+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 10. Minimum Path Sum in Grid | Asked to me In Microsoft Internship Interview | DP on GRIDS",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/minimum-path-sum-in-a-grid-dp-10/\nProblem Link: https://bit.ly/3q5sqfu\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \na\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we solve the problem Minimum Path sum which teaches you about path sum property in grids. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_rgTlyky1uQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_rgTlyky1uQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_rgTlyky1uQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_rgTlyky1uQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_rgTlyky1uQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0u93ZXAIaDQXLqYFKtvcA0rPk30",
        "id": "MTE2OTQ4OTM4OTgxNjk0ODkzODk4MDAwNzkw",
        "snippet": {
          "publishedAt": "2023-09-16T19:51:38+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 9. Unique Paths 2 | DP on Grid with Maze Obstacles",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/grid-unique-paths-2-dp-9/\nProblem Link: https://bit.ly/3JMHc2l\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we will be solving the grid unique paths problem with obstacles. Its an extension of the previous problem, so please make sure you watch the previous problem in order to understand this in depth. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/TmhpgXScLyY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/TmhpgXScLyY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/TmhpgXScLyY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/TmhpgXScLyY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/TmhpgXScLyY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "mKKvkabtP4RjtyeONbad6Vz4Oxs",
        "id": "MTE2OTQ4OTM4NDYxNjk0ODkzODQ2MDAwNDM0",
        "snippet": {
          "publishedAt": "2023-09-16T19:50:46+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 8. Grid Unique Paths | Learn Everything about DP on Grids | ALL TECHNIQUES 🔥",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/ \nProblem Link: https://bit.ly/34uoYCG\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9\n\nOptimal Solution using Combinatorics:  https://www.youtube.com/watch?v=t_f0nwwdg5o\n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we are starting with 2D DP on Grids. We solve the problem of Grid Unique paths to start with DP on Grids. I have taught this problem in-depth to understand how do we write recurrence, use memoization, write tabular DP, do space optimization. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sdE0A2Oxofw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sdE0A2Oxofw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sdE0A2Oxofw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sdE0A2Oxofw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sdE0A2Oxofw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Umg8Vxlb4831PGjgeb9Aw8ft8bw",
        "id": "MTE2OTQ4OTM4MTExNjk0ODkzODExMDAwMzc5",
        "snippet": {
          "publishedAt": "2023-09-16T19:50:11+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 7. Ninja's Training | MUST WATCH for 2D CONCEPTS 🔥 | Vacation | Atcoder | 2D DP |",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/dynamic-programming-ninjas-training-dp-7/\nProblem Link: https://bit.ly/3F4yl8z\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we are starting with 2D DP. We solve the problem Ninja's Training which teaches you how to think of other parameters apart from index. We also learn space optimization in 2D Dp. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AE39gJYuRog/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AE39gJYuRog/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AE39gJYuRog/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/AE39gJYuRog/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/AE39gJYuRog/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "j_3AJOnSvq00AwgpA2y4-PoFkyg",
        "id": "MTE2OTQ4OTM3NjgxNjk0ODkzNzY4MDAwMDg1",
        "snippet": {
          "publishedAt": "2023-09-16T19:49:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 6. House Robber 2 | 1D DP | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/\nProblem Link: https://bit.ly/3F6q83P\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we have discussed how to solve the House Robber 2 problem, this is a slight variation of the previous problem that we solved in Lecture 5 of DP series. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3WaxQMELSkw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3WaxQMELSkw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3WaxQMELSkw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3WaxQMELSkw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3WaxQMELSkw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "nnVujIUI80mjA3saG2osytleqFo",
        "id": "MTE2OTQ4OTM3MzExNjk0ODkzNzMxMDAwNjI4",
        "snippet": {
          "publishedAt": "2023-09-16T19:48:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 5. Maximum Sum of Non-Adjacent Elements | House Robber | 1-D | DP on Subsequences",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/\nProblem Link: https://bit.ly/3q5rlUY\n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we have discussed how to solve the problem of the maximum sum without taking adjacent elements. Here the concept of pick non pick has been explained. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GrMBfJNk_NY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GrMBfJNk_NY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GrMBfJNk_NY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GrMBfJNk_NY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GrMBfJNk_NY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FKyFl61mdXsgzxR6wsYXvgXd3q8",
        "id": "MTE2OTQ4OTM2OTMxNjk0ODkzNjkzMDAwMDA2",
        "snippet": {
          "publishedAt": "2023-09-16T19:48:13+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 4. Frog Jump with K Distance | Lecture 3 Follow Up Question",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/dynamic-programming-frog-jump-with-k-distances-dp-4/\nProblem Link: https://atcoder.jp/contests/dp/tasks/dp_b \n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we have discussed how to solve the frog jump problem with K distance allowed. I have taught you how you should write a 1D recurrence. This problem is a follow-up to Lecture 3's follow-up question. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Kmh3rhyEtB8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Kmh3rhyEtB8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Kmh3rhyEtB8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Kmh3rhyEtB8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Kmh3rhyEtB8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-cXdJ_c3kZEJ1iuMRI7DsijJ9AA",
        "id": "MTE2OTQ4OTM2NTUxNjk0ODkzNjU1MDAwNDEw",
        "snippet": {
          "publishedAt": "2023-09-16T19:47:35+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 3. Frog Jump | Dynamic Programming | Learn to write 1D DP",
          "description": "Lecture Notes/C++/Java Codes: https://takeuforward.org/data-structure/dynamic-programming-frog-jump-dp-3/ \nProblem Link: https://bit.ly/3JPcoOx\n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we have discussed how to solve the frog jump problem. I have taught you how you should write a 1D recurrence. Also, I have given you a follow-up problem to which you can answer in the comments. We will solve that follow-up problem in the L4. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/EgG3jsGoPvQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/EgG3jsGoPvQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/EgG3jsGoPvQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/EgG3jsGoPvQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/EgG3jsGoPvQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "NtjwHjWiNZmMDxv7S13muXmhl2g",
        "id": "MTE2OTQ4OTM2MTkxNjk0ODkzNjE5MDAwMzU5",
        "snippet": {
          "publishedAt": "2023-09-16T19:46:59+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "DP 2. Climbing Stairs | Learn How to Write 1D Recurrence Relations",
          "description": "Lecture Note: https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/ \nProblem Link: https://bit.ly/3t1Sjyx\n\nMake sure to join our telegram group for discussions: https://linktr.ee/takeUforward\n\nPre-req for this Series: https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9 \n\nFull Playlist: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nIn this video, we have discussed how to write recurrence relations using the problem of climbing stairs. I have told you three important points which can help you in writing any recurrence relations. \n\nIf you have not yet checked our SDE sheet, you should definitely do it: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/ \n\nYou can also get in touch with me at my social handles: https://linktr.ee/takeUforward",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mLfjzJsN8us/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mLfjzJsN8us/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mLfjzJsN8us/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mLfjzJsN8us/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mLfjzJsN8us/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "G7xEsV1wHzWs3I204TC-w64PyPk",
        "id": "MTE2OTQ4OTM0ODQxNjk0ODkzNDg0MDAwMDA2",
        "snippet": {
          "publishedAt": "2023-09-16T19:44:44+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-56. Articulation Point in Graph",
          "description": "Pre-req: https://www.youtube.com/watch?v=qrAub5z8FeA&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=55\n\nGfG-Problem Link: https://bit.ly/3w9lfp1\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/articulation-point-in-graph-g-56/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j1QDfU21iZk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j1QDfU21iZk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j1QDfU21iZk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/j1QDfU21iZk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/j1QDfU21iZk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Xmbbt1wmvuax3gQXz3_lPFYCq7Q",
        "id": "MTE2OTQ4OTM0NTYxNjk0ODkzNDU2MDAwOTI0",
        "snippet": {
          "publishedAt": "2023-09-16T19:44:16+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-55. Bridges in Graph - Using Tarjan's Algorithm of time in and low time",
          "description": "Leetcode-Problem Link: https://leetcode.com/problems/critical-connections-in-a-network\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/bridges-in-graph-using-tarjans-algorithm-of-time-in-and-low-time-g-55/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qrAub5z8FeA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qrAub5z8FeA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qrAub5z8FeA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qrAub5z8FeA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qrAub5z8FeA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FoDixzXKrHpGFvbBVIAwCsSSaSU",
        "id": "MTE2OTQ4OTM0MjYxNjk0ODkzNDI2MDAwNTcz",
        "snippet": {
          "publishedAt": "2023-09-16T19:43:46+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-54. Strongly Connected Components - Kosaraju's Algorithm",
          "description": "GfG-Problem Link: https://bit.ly/3R6LzID\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/strongly-connected-components-kosarajus-algorithm-g-54/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/R6uoSjZ2imo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/R6uoSjZ2imo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/R6uoSjZ2imo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/R6uoSjZ2imo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/R6uoSjZ2imo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AdA74v3qF4nlxhMX5fBJ-h_x_eQ",
        "id": "MTE2OTQ4OTMzOTUxNjk0ODkzMzk1MDAwOTkw",
        "snippet": {
          "publishedAt": "2023-09-16T19:43:15+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-53. Most Stones Removed with Same Row or Column - DSU",
          "description": "GfG-Problem Link: https://bit.ly/3QHZuE6\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/most-stones-removed-with-same-row-or-column-dsu-g-53/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OwMNX8SPavM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OwMNX8SPavM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OwMNX8SPavM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/OwMNX8SPavM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/OwMNX8SPavM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "71vTIhH2iQA95YshgqDTKK4bVWE",
        "id": "MTE2OTQ4OTMzNjMxNjk0ODkzMzYzMDAwNjg1",
        "snippet": {
          "publishedAt": "2023-09-16T19:42:43+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-52. Making a Large Island - DSU",
          "description": "GfG-Problem Link: https://bit.ly/3xeLjzF\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/making-a-large-island-dsu-g-52/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lgiz0Oup6gM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lgiz0Oup6gM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lgiz0Oup6gM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lgiz0Oup6gM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lgiz0Oup6gM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "LgihMkxBM91Yn46_dXYd5vaTXBU",
        "id": "MTE2OTQ4OTMzMzUxNjk0ODkzMzM1MDAwNzg3",
        "snippet": {
          "publishedAt": "2023-09-16T19:42:15+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-51. Number of Islands - II - Online Queries - DSU",
          "description": "GfG-Problem Link: https://bit.ly/3w9REfj\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/number-of-islands-ii-online-queries-dsu-g-51/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Rn6B-Q4SNyA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Rn6B-Q4SNyA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Rn6B-Q4SNyA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Rn6B-Q4SNyA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Rn6B-Q4SNyA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qxeIFnPciCBQ-MdzGpdLbVYiObo",
        "id": "MTE2OTQ4OTMzMDcxNjk0ODkzMzA3MDAwNzgx",
        "snippet": {
          "publishedAt": "2023-09-16T19:41:47+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-50. Accounts Merge - DSU",
          "description": "GfG-Problem Link: https://bit.ly/3sl2Xia\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/accounts-merge-dsu-g-50/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FMwpt_aQOGw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FMwpt_aQOGw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FMwpt_aQOGw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/FMwpt_aQOGw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/FMwpt_aQOGw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "tolEaPhlsHinDqWAMQ0XGFzW22Y",
        "id": "MTE2OTQ4OTMyNzcxNjk0ODkzMjc3MDAwNzUz",
        "snippet": {
          "publishedAt": "2023-09-16T19:41:17+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-49. Number of Operations to Make Network Connected - DSU",
          "description": "GfG-Problem Link: https://bit.ly/3QGtkcd\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/number-of-operations-to-make-network-connected-dsu-g-49/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FYrl7iz9_ZU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FYrl7iz9_ZU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FYrl7iz9_ZU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/FYrl7iz9_ZU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/FYrl7iz9_ZU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "GZPLOjVk_dArlepdZ1fG1IBTe0c",
        "id": "MTE2OTQ4OTMyNDUxNjk0ODkzMjQ1MDAwNjAx",
        "snippet": {
          "publishedAt": "2023-09-16T19:40:45+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-48. Number of Provinces - Disjoint Set",
          "description": "GfG-Problem Link: https://bit.ly/3pl2tr3\nC++/Java/Codes and Notes Link: Soon\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZGr5nX-Gi6Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZGr5nX-Gi6Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZGr5nX-Gi6Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZGr5nX-Gi6Y/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZGr5nX-Gi6Y/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "yRdOmGk2racm2xMk1i2YH5apZQc",
        "id": "MTE2OTQ4OTMyMTYxNjk0ODkzMjE2MDAwODUx",
        "snippet": {
          "publishedAt": "2023-09-16T19:40:16+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-47. Kruskal's Algorithm - Minimum Spanning Tree - C++ and Java",
          "description": "GfG-Problem Link: https://bit.ly/3eLuYvH\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/kruskals-algorithm-minimum-spanning-tree-g-47/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DMnDM_sxVig/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DMnDM_sxVig/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DMnDM_sxVig/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DMnDM_sxVig/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DMnDM_sxVig/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Lf9sLxomMd9P0W8-FjQtcLm5Wxc",
        "id": "MTE2OTQ4OTMxODMxNjk0ODkzMTgzMDAwMDUy",
        "snippet": {
          "publishedAt": "2023-09-16T19:39:43+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-46. Disjoint Set | Union by Rank | Union by Size | Path Compression",
          "description": "In this video, I have shown you such a code snippet, which can solve any problem on Disjoint Set on any platform. \n\nC++ Code Snippet of DS: https://ide.geeksforgeeks.org/392f3f85-cb79-4631-9da2-3dd78e775873 \nJava Code Snippet of DS: https://ide.geeksforgeeks.org/fde794b7-8b6f-41e8-8efc-0826b3d318e6\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/disjoint-set-union-by-rank-union-by-size-path-compression-g-46/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/aBxjDBC4M1U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/aBxjDBC4M1U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/aBxjDBC4M1U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/aBxjDBC4M1U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/aBxjDBC4M1U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Xjp2K37rAAq4JSe6566CDfIjYlE",
        "id": "MTE2OTQ4OTMxMDgxNjk0ODkzMTA4MDAwODc0",
        "snippet": {
          "publishedAt": "2023-09-16T19:38:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-45. Prim's Algorithm - Minimum Spanning Tree - C++ and Java",
          "description": "GfG-Problem Link: https://bit.ly/3ABwwRP\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/prims-algorithm-minimum-spanning-tree-c-and-java-g-45/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mJcZjjKzeqk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mJcZjjKzeqk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mJcZjjKzeqk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mJcZjjKzeqk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mJcZjjKzeqk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "E9sjwSYLWuFDSRZNAayAzaZtBLU",
        "id": "MTE2OTQ4OTMwNzgxNjk0ODkzMDc4MDAwMTEx",
        "snippet": {
          "publishedAt": "2023-09-16T19:37:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-44. Minimum Spanning Tree - Theory",
          "description": "GfG-Problem Link: NA\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/minimum-spanning-tree-theory-g-44/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZSPjZuZWCME/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZSPjZuZWCME/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZSPjZuZWCME/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZSPjZuZWCME/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZSPjZuZWCME/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "yq2oVV2doBPL2IFYAEFYj41j6hw",
        "id": "MTE2OTQ4OTMwNTAxNjk0ODkzMDUwMDAwNjQw",
        "snippet": {
          "publishedAt": "2023-09-16T19:37:30+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-43. Find the City With the Smallest Number of Neighbours at a Threshold Distance",
          "description": "GfG-Problem Link: https://bit.ly/3PoGo5v\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/find-the-city-with-the-smallest-number-of-neighbours-at-a-threshold-distance-g-43/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PwMVNSJ5SLI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PwMVNSJ5SLI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PwMVNSJ5SLI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/PwMVNSJ5SLI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/PwMVNSJ5SLI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Lh7LOvFQ01qrL6SkdAIfTiss2cs",
        "id": "MTE2OTQ4OTMwMjIxNjk0ODkzMDIyMDAwMTYy",
        "snippet": {
          "publishedAt": "2023-09-16T19:37:02+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-42. Floyd Warshall Algorithm",
          "description": "GfG-Problem Link: https://bit.ly/3JZlk4a\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/floyd-warshall-algorithm-g-42/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YbY8cVwWAvw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YbY8cVwWAvw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YbY8cVwWAvw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YbY8cVwWAvw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YbY8cVwWAvw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wYM_a__L8o3j-qDT6Jc-sAIho4A",
        "id": "MTE2OTQ4OTI5OTMxNjk0ODkyOTkzMDAwNTY0",
        "snippet": {
          "publishedAt": "2023-09-16T19:36:33+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-41. Bellman Ford Algorithm",
          "description": "GfG-Problem Link: https://bit.ly/3K7emug\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/bellman-ford-algorithm-g-41/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0vVofAhAYjc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0vVofAhAYjc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0vVofAhAYjc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0vVofAhAYjc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0vVofAhAYjc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DumGyvUjkP6ZOXmojCnAXkxEztI",
        "id": "MTE2OTQ4OTI5NjAxNjk0ODkyOTYwMDAwMDI4",
        "snippet": {
          "publishedAt": "2023-09-16T19:36:00+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-40. Number of Ways to Arrive at Destination",
          "description": "GfG-Problem Link: https://bit.ly/3Aro6Mq\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/g-40-number-of-ways-to-arrive-at-destination/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_-0mx0SmYxA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_-0mx0SmYxA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_-0mx0SmYxA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_-0mx0SmYxA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_-0mx0SmYxA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4tNUKEnI5XnWDCP-XoOCskcHVnM",
        "id": "MTE2OTQ4OTI5MjcxNjk0ODkyOTI3MDAwMDMy",
        "snippet": {
          "publishedAt": "2023-09-16T19:35:27+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-39. Minimum Multiplications to Reach End",
          "description": "GfG-Problem Link: https://bit.ly/3AugzNb\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/g-39-minimum-multiplications-to-reach-end/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_BvEJ3VIDWw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_BvEJ3VIDWw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_BvEJ3VIDWw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_BvEJ3VIDWw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_BvEJ3VIDWw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0KtsAQBPiSxii6xazga10PQg2zw",
        "id": "MTE2OTQ4OTI4OTExNjk0ODkyODkxMDAwNjY5",
        "snippet": {
          "publishedAt": "2023-09-16T19:34:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-38. Cheapest Flights Within K Stops",
          "description": "GfG-Problem Link: https://bit.ly/3UIneer\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/g-38-cheapest-flights-within-k-stops/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9XybHVqTHcQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9XybHVqTHcQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9XybHVqTHcQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9XybHVqTHcQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9XybHVqTHcQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "sy5jU4qKjpnzSXTxRVLxCIqHweU",
        "id": "MTE2OTQ4OTI4NjAxNjk0ODkyODYwMDAwODAy",
        "snippet": {
          "publishedAt": "2023-09-16T19:34:20+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-37. Path With Minimum Effort",
          "description": "GfG-Problem Link: https://bit.ly/3dMBvq6\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/g-37-path-with-minimum-effort/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0ytpZyiZFhA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0ytpZyiZFhA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0ytpZyiZFhA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0ytpZyiZFhA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0ytpZyiZFhA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "80-Fm3DLK-vxZeR58Je4N7RoQYg",
        "id": "MTE2OTQ4OTI4MzExNjk0ODkyODMxMDAwOTQ2",
        "snippet": {
          "publishedAt": "2023-09-16T19:33:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-36. Shortest Distance in a Binary Maze",
          "description": "GfG-Problem Link: https://bit.ly/3QLxjET\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/g-36-shortest-distance-in-a-binary-maze/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/U5Mw4eyUmw4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/U5Mw4eyUmw4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/U5Mw4eyUmw4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/U5Mw4eyUmw4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/U5Mw4eyUmw4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "M4PNMEF1-GRatyOU0MlTPo8irNo",
        "id": "MTE2OTQ4OTI4MDIxNjk0ODkyODAyMDAwNzk3",
        "snippet": {
          "publishedAt": "2023-09-16T19:33:22+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-35. Print Shortest Path - Dijkstra's Algorithm",
          "description": "Disclaimer: Please watch Part-1 and Part-2 \nPart-1: https://www.youtube.com/watch?v=V6H1qAeB-l4&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=32\nPart-2: https://www.youtube.com/watch?v=PATgNiuTP20&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=33\n\nGfG-Problem Link: https://bit.ly/3SlYvLp\n\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/g-35-print-shortest-path-dijkstras-algorithm/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rp1SMw7HSO8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rp1SMw7HSO8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rp1SMw7HSO8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rp1SMw7HSO8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rp1SMw7HSO8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QZBEattWyDFkZ0jCHlMw7mBWjb0",
        "id": "MTE2OTQ4OTI3NzExNjk0ODkyNzcxMDAwNDk3",
        "snippet": {
          "publishedAt": "2023-09-16T19:32:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-34. Dijkstra's Algorithm - Why PQ and not Q, Intuition, Time Complexity Derivation - Part 3",
          "description": "Disclaimer: Please watch Part-1 and Part-2 \nPart-1: https://www.youtube.com/watch?v=V6H1qAeB-l4&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=32\nPart-2: https://www.youtube.com/watch?v=PATgNiuTP20&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=33\nGfG-Problem Link: https://bit.ly/3KeZZ7j\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/g-34-dijkstras-algorithm-intuition-and-time-complexity-derivation/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3dINsjyfooY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3dINsjyfooY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3dINsjyfooY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3dINsjyfooY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3dINsjyfooY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "kKTCg5dhy7ikbHwl_4tZ0PxSbZg",
        "id": "MTE2OTQ4OTI3MzkxNjk0ODkyNzM5MDAwOTg3",
        "snippet": {
          "publishedAt": "2023-09-16T19:32:19+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-33. Dijkstra's Algorithm - Using Set - Part 2",
          "description": "GfG-Problem Link: https://bit.ly/3KeZZ7j\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/dijkstras-algorithm-using-set-g-33/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PATgNiuTP20/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PATgNiuTP20/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PATgNiuTP20/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/PATgNiuTP20/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/PATgNiuTP20/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "dy6UylI5qhQiasT-U2-31GWizxk",
        "id": "MTE2OTQ4OTI3MTIxNjk0ODkyNzEyMDAwNDEy",
        "snippet": {
          "publishedAt": "2023-09-16T19:31:52+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-32. Dijkstra's Algorithm - Using Priority Queue - C++ and Java - Part 1",
          "description": "GfG-Problem Link: https://bit.ly/3KeZZ7j\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/dijkstras-algorithm-using-priority-queue-g-32/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/V6H1qAeB-l4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/V6H1qAeB-l4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/V6H1qAeB-l4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/V6H1qAeB-l4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/V6H1qAeB-l4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DwENSzpdHgo0ujnfTyOd1wQ-6VY",
        "id": "MTE2OTQ4OTI2ODUxNjk0ODkyNjg1MDAwOTg4",
        "snippet": {
          "publishedAt": "2023-09-16T19:31:25+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-31. Word Ladder - 2 | Optimised Approach for Leetcode",
          "description": "Leetcode Link: https://leetcode.com/problems/word-ladder-ii/\nGfG-Problem Link: https://bit.ly/3As1nQw\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/word-ladder-ii-optimised-approach-g-31/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AD4SFl7tu7I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AD4SFl7tu7I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AD4SFl7tu7I/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/AD4SFl7tu7I/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/AD4SFl7tu7I/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "rVhjV21g1qN1RFG0XAIvAFlTVwQ",
        "id": "MTE2OTQ4OTI2NTUxNjk0ODkyNjU1MDAwMDkw",
        "snippet": {
          "publishedAt": "2023-09-16T19:30:55+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-30. Word Ladder - 2 | Shortest Paths",
          "description": "GfG-Problem Link: https://bit.ly/3As1nQw\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/g-30-word-ladder-ii/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DREutrv2XD0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DREutrv2XD0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DREutrv2XD0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DREutrv2XD0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DREutrv2XD0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1zgXdQScsW1ZFyv5ZaDkIsCbRLw",
        "id": "MTE2OTQ4OTI2MjcxNjk0ODkyNjI3MDAwNTI4",
        "snippet": {
          "publishedAt": "2023-09-16T19:30:27+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-29. Word Ladder - I | Shortest Paths",
          "description": "GfG-Problem Link: https://bit.ly/3PuJxk3\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/word-ladder-i-g-29/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tRPda0rcf8E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tRPda0rcf8E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tRPda0rcf8E/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/tRPda0rcf8E/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/tRPda0rcf8E/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XrCFUpOeVCHBbLoQkFMUHCJsRf0",
        "id": "MTE2OTQ4OTI1OTgxNjk0ODkyNTk4MDAwOTgx",
        "snippet": {
          "publishedAt": "2023-09-16T19:29:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-28. Shortest Path in Undirected Graph with Unit Weights",
          "description": "GfG-Problem Link: https://bit.ly/3RGnHLH\n\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/shortest-path-in-undirected-graph-with-unit-distance-g-28/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/C4gxoTaI71U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/C4gxoTaI71U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/C4gxoTaI71U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/C4gxoTaI71U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/C4gxoTaI71U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "MFuMpozdxPkFofrRfQhKsoX_Aw4",
        "id": "MTE2OTQ4OTI1NjgxNjk0ODkyNTY4MDAwNjI1",
        "snippet": {
          "publishedAt": "2023-09-16T19:29:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-27. Shortest Path in Directed Acyclic Graph - Topological Sort",
          "description": "GfG-Problem Link: https://bit.ly/3dJdQXE\n\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/shortest-path-in-directed-acyclic-graph-topological-sort-g-27/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZUFQfFaU-8U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZUFQfFaU-8U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZUFQfFaU-8U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZUFQfFaU-8U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZUFQfFaU-8U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "6QrDjBezhTDGputa5VY75bhota4",
        "id": "MTE2OTQ4OTI1MzcxNjk0ODkyNTM3MDAwOTA5",
        "snippet": {
          "publishedAt": "2023-09-16T19:28:57+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-26. Alien Dictionary - Topological Sort",
          "description": "GfG-Problem Link: https://bit.ly/3C9N6ZU\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/alien-dictionary-topological-sort-g-26/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/U3N_je7tWAs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/U3N_je7tWAs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/U3N_je7tWAs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/U3N_je7tWAs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/U3N_je7tWAs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-5CidJP9e5dfoHFX3yNas6Ax6Eg",
        "id": "MTE2OTQ4OTI1MTAxNjk0ODkyNTEwMDAwNzU4",
        "snippet": {
          "publishedAt": "2023-09-16T19:28:30+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-25. Find Eventual Safe States - BFS - Topological Sort",
          "description": "GfG-Problem Link: https://bit.ly/3C90n59\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/find-eventual-safe-states-bfs-topological-sort-g-25/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2gtg3VsDGyc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2gtg3VsDGyc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2gtg3VsDGyc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2gtg3VsDGyc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2gtg3VsDGyc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3bAYOiYi91rON5qYmOh4PV7kMQs",
        "id": "MTE2OTQ4OTI0NzgxNjk0ODkyNDc4MDAwMzQx",
        "snippet": {
          "publishedAt": "2023-09-16T19:27:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-24. Course Schedule I and II | Pre-requisite Tasks | Topological Sort",
          "description": "GfG-Problem Link1: https://bit.ly/3ApDfOm\nGfG-Problem Link2: https://bit.ly/3SYjQvp\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WAOfKpxYHR8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WAOfKpxYHR8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WAOfKpxYHR8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WAOfKpxYHR8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WAOfKpxYHR8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2w3w1KdJxuCQHn6Tg_XZVxxOY60",
        "id": "MTE2OTQ4OTI0NDYxNjk0ODkyNDQ2MDAwMjQ1",
        "snippet": {
          "publishedAt": "2023-09-16T19:27:26+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-23. Detect a Cycle in Directed Graph | Topological Sort | Kahn's Algorithm | BFS",
          "description": "GfG-Problem Link: https://bit.ly/3QwPVsi\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/detect-a-cycle-in-directed-graph-topological-sort-kahns-algorithm-g-23/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/iTBaI90lpDQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/iTBaI90lpDQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/iTBaI90lpDQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/iTBaI90lpDQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/iTBaI90lpDQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QwPih1YgLQonhPVXdDYDcn_X3Ck",
        "id": "MTE2OTQ4OTI0MTcxNjk0ODkyNDE3MDAwMzMy",
        "snippet": {
          "publishedAt": "2023-09-16T19:26:57+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-22. Kahn's Algorithm | Topological Sort Algorithm | BFS",
          "description": "GfG-Problem Link: https://bit.ly/3PvBfsm\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-algorithm-bfs-g-22/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/73sneFXuTEg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/73sneFXuTEg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/73sneFXuTEg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/73sneFXuTEg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/73sneFXuTEg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-nuu4Ap1PICvfwMVkaZVCEaHP6s",
        "id": "MTE2OTQ4OTIzODgxNjk0ODkyMzg4MDAwNDQ3",
        "snippet": {
          "publishedAt": "2023-09-16T19:26:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-21. Topological Sort Algorithm | DFS",
          "description": "GfG-Problem Link: https://bit.ly/3PvBfsm\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/topological-sort-algorithm-dfs-g-21/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5lZ0iJMrUMk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5lZ0iJMrUMk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5lZ0iJMrUMk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/5lZ0iJMrUMk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/5lZ0iJMrUMk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "KmGXdmFSgXGhPCbOS8tqHc4y0Fc",
        "id": "MTE2OTQ4OTIzNTgxNjk0ODkyMzU4MDAwMjkz",
        "snippet": {
          "publishedAt": "2023-09-16T19:25:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-20. Find Eventual Safe States - DFS",
          "description": "GfG-Problem Link: https://bit.ly/3C90n59\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/find-eventual-safe-states-dfs-g-20/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/uRbJ1OF9aYM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/uRbJ1OF9aYM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/uRbJ1OF9aYM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/uRbJ1OF9aYM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/uRbJ1OF9aYM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4rfX9TQjFJb6WSIAiqodJARxLbs",
        "id": "MTE2OTQ4OTIzMjgxNjk0ODkyMzI4MDAwNTEy",
        "snippet": {
          "publishedAt": "2023-09-16T19:25:28+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-19. Detect cycle in a directed graph using DFS | Java | C++",
          "description": "GfG-Problem Link: https://bit.ly/3QwPVsi\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/detect-cycle-in-a-directed-graph-using-dfs-g-19/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9twcmtQj4DU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9twcmtQj4DU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9twcmtQj4DU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9twcmtQj4DU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9twcmtQj4DU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wCETX2Y5Emk53-3Df4O3LddN6lo",
        "id": "MTE2OTQ4OTIzMDExNjk0ODkyMzAxMDAwMTkz",
        "snippet": {
          "publishedAt": "2023-09-16T19:25:01+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-18. Bipartite Graph | DFS | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3SQQgId\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/bipartite-graph-dfs-implementation/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KG5YFfR0j8A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KG5YFfR0j8A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KG5YFfR0j8A/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KG5YFfR0j8A/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KG5YFfR0j8A/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "U2HC73OT8EUZA6ZTchdb5BPwk8Y",
        "id": "MTE2OTQ4OTIyNTMxNjk0ODkyMjUzMDAwMzE3",
        "snippet": {
          "publishedAt": "2023-09-16T19:24:13+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-17. Bipartite Graph | BFS | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3SQQgId\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/bipartite-graph-bfs-implementation/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-vu34sct1g8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-vu34sct1g8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-vu34sct1g8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-vu34sct1g8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-vu34sct1g8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ORdWK3q0Yc9Pcq3vy8AHktVAaCw",
        "id": "MTE2OTQ4OTIyMjMxNjk0ODkyMjIzMDAwMDkw",
        "snippet": {
          "publishedAt": "2023-09-16T19:23:43+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-16. Number of Distinct Islands | Constructive Thinking + DFS | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3AsA08W\nC++/Java/Codes and Notes Link: Soon\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7zmgQSJghpo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7zmgQSJghpo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7zmgQSJghpo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7zmgQSJghpo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7zmgQSJghpo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DLSPqT-E1SrGp-pOfx3uqK5Jqlg",
        "id": "MTE2OTQ4OTIxOTUxNjk0ODkyMTk1MDAwNzY1",
        "snippet": {
          "publishedAt": "2023-09-16T19:23:15+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-15. Number of Enclaves | Multi-source BFS | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3preQSc\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/number-of-enclaves/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rxKcepXQgU4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rxKcepXQgU4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rxKcepXQgU4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rxKcepXQgU4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rxKcepXQgU4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5WjqJNs0As4T9SYo4SLp2flRuLs",
        "id": "MTE2OTQ4OTIxNjQxNjk0ODkyMTY0MDAwNTQ5",
        "snippet": {
          "publishedAt": "2023-09-16T19:22:44+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-14. Surrounded Regions | Replace O's with X's | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3QyPr5g\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/surrounded-regions-replace-os-with-xs/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BtdgAys4yMk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BtdgAys4yMk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BtdgAys4yMk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/BtdgAys4yMk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/BtdgAys4yMk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "lYvU6gQHgFjaJVLJBEco3USqDZ0",
        "id": "MTE2OTQ4OTIxMzAxNjk0ODkyMTMwMDAwMDg5",
        "snippet": {
          "publishedAt": "2023-09-16T19:22:10+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-13. Distance of nearest cell having 1 | 0/1 Matrix | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3Cc8jlW\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/distance-of-nearest-cell-having-1/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/edXdVwkYHF8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/edXdVwkYHF8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/edXdVwkYHF8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/edXdVwkYHF8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/edXdVwkYHF8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qlg4py8LAf5HufD0HUvXpiu1aD4",
        "id": "MTE2OTQ4OTIwOTMxNjk0ODkyMDkzMDAwNjg0",
        "snippet": {
          "publishedAt": "2023-09-16T19:21:33+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-12. Detect a Cycle in an Undirected Graph using DFS | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3cZMJXp\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/detect-cycle-in-an-undirected-graph-using-dfs/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zQ3zgFypzX4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zQ3zgFypzX4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zQ3zgFypzX4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zQ3zgFypzX4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zQ3zgFypzX4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "eoty5oOqrKCmzJS0VjOq7wyi-Dc",
        "id": "MTE2OTQ4OTIwNTgxNjk0ODkyMDU4MDAwMDU5",
        "snippet": {
          "publishedAt": "2023-09-16T19:20:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-11. Detect a Cycle in an Undirected Graph using BFS | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3cZMJXp\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/detect-cycle-in-an-undirected-graph-using-bfs/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BPlrALf1LDU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BPlrALf1LDU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BPlrALf1LDU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/BPlrALf1LDU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/BPlrALf1LDU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "IW19sxfirqzhj2UtdD37yw8Ingc",
        "id": "MTE2OTQ4OTIwMjcxNjk0ODkyMDI3MDAwMTU3",
        "snippet": {
          "publishedAt": "2023-09-16T19:20:27+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-10. Rotten Oranges | C++ | Java",
          "description": "GfG-Problem Link: https://bit.ly/3oekoir\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/rotten-oranges/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/yf3oUhkvqA0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/yf3oUhkvqA0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/yf3oUhkvqA0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/yf3oUhkvqA0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/yf3oUhkvqA0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "aYS6Z2u3XMT1qR2hzFuunFIdSjA",
        "id": "MTE2OTQ4OTE5OTMxNjk0ODkxOTkzMDAwNzcx",
        "snippet": {
          "publishedAt": "2023-09-16T19:19:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-9. Flood Fill Algorithm | C++ | Java",
          "description": "GfG Problem Link: https://bit.ly/3bxY94d\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/flood-fill-algorithm-graphs/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/C-2_uSRli8o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/C-2_uSRli8o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/C-2_uSRli8o/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/C-2_uSRli8o/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/C-2_uSRli8o/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "soyil4IXxGP8WTjDP_-iELQN0NE",
        "id": "MTE2OTQ4OTE5NjUxNjk0ODkxOTY1MDAwNjc1",
        "snippet": {
          "publishedAt": "2023-09-16T19:19:25+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-8. Number of Islands | Number of Connected Components in Matrix | C++ | Java",
          "description": "GfG Problem Link: https://bit.ly/3oT9Ndg\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/breadth-first-search-bfs-level-order-traversal/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/muncqlKJrH0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/muncqlKJrH0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/muncqlKJrH0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/muncqlKJrH0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/muncqlKJrH0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "UIOXwk28K8VkxfJ9Kk6_idWMD2c",
        "id": "MTE2OTQ4OTE5MzcxNjk0ODkxOTM3MDAwNDEx",
        "snippet": {
          "publishedAt": "2023-09-16T19:18:57+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-7. Number of Provinces | C++ | Java | Connected Components",
          "description": "GfG-Problem Link: https://bit.ly/3yR3dIB\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/number-of-provinces/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ACzkVtewUYA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ACzkVtewUYA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ACzkVtewUYA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ACzkVtewUYA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ACzkVtewUYA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "TmRv4nZvqifjsJtACQS_Q9BMj40",
        "id": "MTE2OTQ4OTE5MTMxNjk0ODkxOTEzMDAwMzY4",
        "snippet": {
          "publishedAt": "2023-09-16T19:18:33+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-6. Depth-First Search (DFS) | C++ and Java | Traversal Technique in Graphs",
          "description": "GfG-Problem Link: https://bit.ly/3SocWyX\nC++/Java/Codes and Notes Link: https://takeuforward.org/data-structure/depth-first-search-dfs/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Qzf1a--rhp8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Qzf1a--rhp8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Qzf1a--rhp8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Qzf1a--rhp8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Qzf1a--rhp8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "GZIjKcMRGhikiEbSTb5436BSh08",
        "id": "MTE2OTQ4OTE4NzgxNjk0ODkxODc4MDAwMjI3",
        "snippet": {
          "publishedAt": "2023-09-16T19:17:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-5. Breadth-First Search (BFS) | C++ and Java | Traversal Technique in Graphs",
          "description": "GfG-Problem Link: https://bit.ly/3bn84K8\nC++/Java/Codes and Notes Link: https://takeuforward.org/graph/breadth-first-search-bfs-level-order-traversal/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-tgVpUgsQ5k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-tgVpUgsQ5k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-tgVpUgsQ5k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-tgVpUgsQ5k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-tgVpUgsQ5k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "JWDd8JPSubPgpji-mVFNzUECaH4",
        "id": "MTE2OTQ4OTE4NDMxNjk0ODkxODQzMDAwODA0",
        "snippet": {
          "publishedAt": "2023-09-16T19:17:23+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-4. What are Connected Components ?",
          "description": "Notes Link: https://takeuforward.org/graph/connected-components-in-graphs/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lea-Wl_uWXY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lea-Wl_uWXY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lea-Wl_uWXY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lea-Wl_uWXY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lea-Wl_uWXY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ywjLv5FZxnGjT8nWvwL1Af6QGJQ",
        "id": "MTE2OTQ4OTE4MTMxNjk0ODkxODEzMDAwNzQ2",
        "snippet": {
          "publishedAt": "2023-09-16T19:16:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-3. Graph Representation in Java | Two Ways to Represent",
          "description": "Notes Link: https://takeuforward.org/graph/graph-representation-in-c/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OsNklbh9gYI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OsNklbh9gYI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OsNklbh9gYI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/OsNklbh9gYI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/OsNklbh9gYI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "jux8jPGhSSf5r6oSxbPvZcIOjqg",
        "id": "MTE2OTQ4OTE3MjcxNjk0ODkxNzI3MDAwODM4",
        "snippet": {
          "publishedAt": "2023-09-16T19:15:27+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "G-2. Graph Representation in C++ | Two Ways to Represent",
          "description": "Notes Link: https://takeuforward.org/graph/graph-representation-in-c/\n\nDP Series: https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY \n\nSDE Sheet: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/\n\nCheck out our Website for curated resources: https://www.takeuforward.org/\nOur Second Channel: https://www.youtube.com/channel/UCvEKHATlVq84hm1jduTYm8g\n\nIn case you are thinking to buy courses, please check below: \n\nCode \"takeuforward\" for 15% off at GFG: https://practice.geeksforgeeks.org/courses\nCode \"takeuforward\" for 20% off on sys-design: https://get.interviewready.io?_aff=takeuforward\n\nCrypto, I use the Wazirx app: https://wazirx.com/invite/xexnpc4u \nTake 750 rs free Amazon Stock from me: https://indmoney.onelink.me/RmHC/idjex744 \nEarn 100 rs by making a Grow Account for investing: https://app.groww.in/v3cO/8hu879t0 \n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n---------------------------------------------------------------------------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3oI-34aPMWM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3oI-34aPMWM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3oI-34aPMWM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3oI-34aPMWM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3oI-34aPMWM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "MJvYK0dzQtezHxClfge9DSn1skI",
        "id": "MTE2OTQ4OTE1MDYxNjk0ODkxNTA2MDAwMTg3",
        "snippet": {
          "publishedAt": "2023-09-16T19:11:46+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L53. Largest BST in Binary Tree",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/X0oXMdtUDwo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/X0oXMdtUDwo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/X0oXMdtUDwo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/X0oXMdtUDwo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/X0oXMdtUDwo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "WnpbHWczeGnOEXhe3F9wCz_eb7A",
        "id": "MTE2OTQ4OTE0NjUxNjk0ODkxNDY1MDAwNzM2",
        "snippet": {
          "publishedAt": "2023-09-16T19:11:05+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L52. Recover BST | Correct BST with two nodes swapped",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZWGW7FminDM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZWGW7FminDM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZWGW7FminDM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZWGW7FminDM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZWGW7FminDM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "334yMAiJmci4IGfRtKsOWbja8RM",
        "id": "MTE2OTQ4OTE0MzgxNjk0ODkxNDM4MDAwMzcy",
        "snippet": {
          "publishedAt": "2023-09-16T19:10:38+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L51. Two Sum In BST | Check if there exists a pair with Sum K",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ssL3sHwPeb4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ssL3sHwPeb4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ssL3sHwPeb4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ssL3sHwPeb4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ssL3sHwPeb4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "nxU2BX6yoC2vn2ZidcPeDD3FSYY",
        "id": "MTE2OTQ4OTE0MTQxNjk0ODkxNDE0MDAwMjUw",
        "snippet": {
          "publishedAt": "2023-09-16T19:10:14+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L50. Binary Search Tree Iterator | BST | O(H) Space",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/D2jMcmxU4bs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/D2jMcmxU4bs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/D2jMcmxU4bs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/D2jMcmxU4bs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/D2jMcmxU4bs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "OZdYphCAlxCPjRuazLa8APrz8cw",
        "id": "MTE2OTQ4OTEzODIxNjk0ODkxMzgyMDAwMDQ5",
        "snippet": {
          "publishedAt": "2023-09-16T19:09:42+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L49. Inorder Successor/Predecessor in BST | 3 Methods",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SXKAD2svfmI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SXKAD2svfmI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SXKAD2svfmI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/SXKAD2svfmI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/SXKAD2svfmI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ik-b8-7a9hEDH4W0FxyF_JAjhxQ",
        "id": "MTE2OTQ4OTEzNDkxNjk0ODkxMzQ5MDAwNTQ4",
        "snippet": {
          "publishedAt": "2023-09-16T19:09:09+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L48. Construct a BST from a preorder traversal | 3 Methods",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UmJT3j26t1I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UmJT3j26t1I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UmJT3j26t1I/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/UmJT3j26t1I/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/UmJT3j26t1I/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "uWN3hTb5w2OHd7blxtiTKoAhMOc",
        "id": "MTE2OTQ4OTEzMTYxNjk0ODkxMzE2MDAwMzkz",
        "snippet": {
          "publishedAt": "2023-09-16T19:08:36+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L47. LCA in Binary Search Tree",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cX_kPV_foZc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cX_kPV_foZc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cX_kPV_foZc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cX_kPV_foZc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cX_kPV_foZc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "obkMkN5UIRjla_fXuamtdzOWh_8",
        "id": "MTE2OTQ4OTEyODYxNjk0ODkxMjg2MDAwODIy",
        "snippet": {
          "publishedAt": "2023-09-16T19:08:06+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L46. Check if a tree is a BST or BT | Validate a BST",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/f-sj7I5oXEI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/f-sj7I5oXEI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/f-sj7I5oXEI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/f-sj7I5oXEI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/f-sj7I5oXEI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "TdoWwX-VEYVVCaFof-a_b578B08",
        "id": "MTE2OTQ4OTEyNTUxNjk0ODkxMjU1MDAwNjQ4",
        "snippet": {
          "publishedAt": "2023-09-16T19:07:35+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L45. K-th Smallest/Largest Element in BST",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9TJYWh0adfk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9TJYWh0adfk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9TJYWh0adfk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9TJYWh0adfk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9TJYWh0adfk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "q3zfJwJc3-M3lZ_g9OcJwGzvJyY",
        "id": "MTE2OTQ4OTEyMTYxNjk0ODkxMjE2MDAwMDU4",
        "snippet": {
          "publishedAt": "2023-09-16T19:06:56+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L44. Delete a Node in Binary Search Tree | BST | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/kouxiP_H5WE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/kouxiP_H5WE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/kouxiP_H5WE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/kouxiP_H5WE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/kouxiP_H5WE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "xRQmPVGQDWNS5DTZH7uQB54AlJ8",
        "id": "MTE2OTQ4OTExODMxNjk0ODkxMTgzMDAwMDk4",
        "snippet": {
          "publishedAt": "2023-09-16T19:06:23+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L43. Insert a given Node in Binary Search Tree | BST | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FiFiNvM29ps/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FiFiNvM29ps/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FiFiNvM29ps/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/FiFiNvM29ps/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/FiFiNvM29ps/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "q_JJtjiWxRNlso2y2sc6wGPcL6w",
        "id": "MTE2OTQ4OTExMzkxNjk0ODkxMTM5MDAwODcy",
        "snippet": {
          "publishedAt": "2023-09-16T19:05:39+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L42. Floor in a Binary Search Tree | BST | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xm_W1ub-K-w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xm_W1ub-K-w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xm_W1ub-K-w/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xm_W1ub-K-w/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xm_W1ub-K-w/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-0GZCvk2I3IHvw8iIep4Zi0zGAc",
        "id": "MTE2OTQ4OTExMDExNjk0ODkxMTAxMDAwMDE2",
        "snippet": {
          "publishedAt": "2023-09-16T19:05:01+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L41. Ceil in a Binary Search Tree | BST | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KSsk8AhdOZA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KSsk8AhdOZA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KSsk8AhdOZA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KSsk8AhdOZA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KSsk8AhdOZA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "oyyjAkVrwnfFCSko1r9y7yrVCqk",
        "id": "MTE2OTQ4OTEwNjUxNjk0ODkxMDY1MDAwMjg4",
        "snippet": {
          "publishedAt": "2023-09-16T19:04:25+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L40. Search in a Binary Search Tree | BST | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KcNt6v_56cc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KcNt6v_56cc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KcNt6v_56cc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KcNt6v_56cc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KcNt6v_56cc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "mhL2wZqZvMyH_-PC2FsV-U2uy0Y",
        "id": "MTE2OTQ4OTEwMzExNjk0ODkxMDMxMDAwOTM2",
        "snippet": {
          "publishedAt": "2023-09-16T19:03:51+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L39. Introduction to Binary Search Tree | BST",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/p7-9UvDQZ3w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/p7-9UvDQZ3w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/p7-9UvDQZ3w/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/p7-9UvDQZ3w/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/p7-9UvDQZ3w/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "PfFZLLG_zuFUejIa8mqGIGiRpws",
        "id": "MTE2OTQ4OTA5OTcxNjk0ODkwOTk3MDAwMzYy",
        "snippet": {
          "publishedAt": "2023-09-16T19:03:17+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L38. Flatten a Binary Tree to Linked List | 3 Approaches | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sWf7k1x9XR4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sWf7k1x9XR4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sWf7k1x9XR4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sWf7k1x9XR4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sWf7k1x9XR4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9DlI97bywLZ_VJ6ayc9ETYFBWnI",
        "id": "MTE2OTQ4OTA5NjIxNjk0ODkwOTYyMDAwMjg1",
        "snippet": {
          "publishedAt": "2023-09-16T19:02:42+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L37. Morris Traversal | Preorder | Inorder | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/80Zug6D1_r4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/80Zug6D1_r4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/80Zug6D1_r4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/80Zug6D1_r4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/80Zug6D1_r4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "bgYR_Ze9u9c8M2FL86KasIEk7yY",
        "id": "MTE2OTQ4OTA5MjkxNjk0ODkwOTI5MDAwNTkx",
        "snippet": {
          "publishedAt": "2023-09-16T19:02:09+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L36. Serialize and De-serialize Binary Tree | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-YbXySKJsX8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-YbXySKJsX8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-YbXySKJsX8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-YbXySKJsX8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-YbXySKJsX8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "k3LCpVtRzBeOaUhKEwh2oaGc9co",
        "id": "MTE2OTQ4OTA4OTQxNjk0ODkwODk0MDAwMjQz",
        "snippet": {
          "publishedAt": "2023-09-16T19:01:34+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L35. Construct the Binary Tree from Postorder and Inorder Traversal | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LgLRTaEMRVc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LgLRTaEMRVc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LgLRTaEMRVc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LgLRTaEMRVc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LgLRTaEMRVc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "UHocik0qGrk1SLVAMKgtugTv_Fw",
        "id": "MTE2OTQ4OTA4NTMxNjk0ODkwODUzMDAwOTgw",
        "snippet": {
          "publishedAt": "2023-09-16T19:00:53+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L34. Construct a Binary Tree from Preorder and Inorder Traversal | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/aZNaLrVebKQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/aZNaLrVebKQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/aZNaLrVebKQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/aZNaLrVebKQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/aZNaLrVebKQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "F6GRhdLDEWso5yvIFANn8rfffxU",
        "id": "MTE2OTQ4OTA4MTAxNjk0ODkwODEwMDAwNTg5",
        "snippet": {
          "publishedAt": "2023-09-16T19:00:10+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L33. Requirements needed to construct a Unique Binary Tree | Theory",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9GMECGQgWrQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9GMECGQgWrQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9GMECGQgWrQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9GMECGQgWrQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9GMECGQgWrQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "6Re12G5trGhwdIJewmsvLESDTF8",
        "id": "MTE2OTQ4OTA3NzExNjk0ODkwNzcxMDAwNTg3",
        "snippet": {
          "publishedAt": "2023-09-16T18:59:31+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L32. Count total Nodes in a COMPLETE Binary Tree | O(Log^2 N) Approach | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/u-yWemKGWO0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/u-yWemKGWO0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/u-yWemKGWO0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/u-yWemKGWO0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/u-yWemKGWO0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "GhNaX0i7uMBzzrsaTQtSXzvqdBM",
        "id": "MTE2OTQ4OTA3MzgxNjk0ODkwNzM4MDAwNzY1",
        "snippet": {
          "publishedAt": "2023-09-16T18:58:58+00:00",
          "channelId": "UCJskGeByzRRSvmOyZOz61ig",
          "title": "L31. Minimum time taken to BURN the Binary Tree from a Node | C++ | Java",
          "description": "Entire DSA Course: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\nCheck our Website: https://www.takeuforward.org/\n\nLinkedin/Instagram/Telegram: https://linktr.ee/takeUforward \n\n#treeSeries #striver #placements",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2r5wLmQfD6g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2r5wLmQfD6g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2r5wLmQfD6g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2r5wLmQfD6g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2r5wLmQfD6g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "take U forward",
          "type": "playlistItem"
        }
      }
    ],
  }

];


