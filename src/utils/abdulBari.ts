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
        standard?: Thumbnail;  // Standard and maxres may not always exist
        maxres?: Thumbnail;
    };
    channelTitle: string;
    type: "playlistItem" | "video" | "other"; // Restrict to known types
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

export const videoDataListAbdulBari : VideoListData[] = [
    {
        "kind": "youtube#activityListResponse",
        "etag": "hOMVj1u3Ccrk4-U1w5iJYIhEw7c",
        "items": [
            {
                "kind": "youtube#activity",
                "etag": "VvgXUaEDcIqSgkM1O1kQCoUCwgo",
                "id": "MTE1NTgwNjYyODAxNTU4MDY2MjgwMDAwNDQx",
                "snippet": {
                    "publishedAt": "2019-05-17T04:11:20+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "[New] Matrix Chain Multiplication using Dynamic Programming Formula",
                    "description": "Matrix Chain Multiplication using Dynamic Programming Formula\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9I5IxxeUQpeSSMt7lYoW4o5fGnM",
                "id": "MTUxNTU3Njc3NDM2MTU1NzY3NzQzNjAwMDQ5NQ",
                "snippet": {
                    "publishedAt": "2019-05-12T16:10:36+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "[New] Matrix Chain Multiplication using Dynamic Programming Formula",
                    "description": "Matrix Chain Multiplication using Dynamic Programming Formula\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/_WncuhSJZyA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ZdATGmgC3NkEyPskEAfuTIXVN_w",
                "id": "MTE1NTQyNjgyNzUxNTU0MjY4Mjc1MDAwNzg2",
                "snippet": {
                    "publishedAt": "2019-04-03T05:11:15+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.6.2 [New] Optimal Binary Search Tree Successful and Unsuccessful Probability - Dynamic Programming",
                    "description": "Optimal Binary Search Tree using Successful and Unsuccessful Search Probabilities\u200b\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "LOgopK_QO0NPEwztC9Rql0ZfK-4",
                "id": "MTUxNTU0MjM4ODYyMTU1NDIzODg2MjAwMDcyNQ",
                "snippet": {
                    "publishedAt": "2019-04-02T21:01:02+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.6.2 [New] Optimal Binary Search Tree Successful and Unsuccessful Probability - Dynamic Programming",
                    "description": "Optimal Binary Search Tree using Successful and Unsuccessful Search Probabilities\u200b\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/wAy6nDMPYAE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wDGZSoRxCNfm6YoBxhh9AiJL-xg",
                "id": "MTUxNTUyNjI3NDEzMTU1MjYyNzQxMzAwMDg0Mg",
                "snippet": {
                    "publishedAt": "2019-03-15T05:23:33+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Bresenham's Line Drawing Algorithm",
                    "description": "PATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225\n\n\nBresenham's Line Drawing Algorithm\n------------------------------------------------------------\n1. Basics\n2. Drawback of DDA\n3. Problem with Floats\n4. Derivation of Bresenhams\n5. Algorithm\n6. Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/RGB-wlatStc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/RGB-wlatStc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/RGB-wlatStc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/RGB-wlatStc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "J6EdcyRuFNvfSFzsyLMKNSxCzJc",
                "id": "MTE1NTIwNzYxMjExNTUyMDc2MTIxMDAwNTAx",
                "snippet": {
                    "publishedAt": "2019-03-08T20:15:21+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.6.3 Heap - Heap Sort - Heapify - Priority Queues",
                    "description": "PATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225\n\nTopics Covered \n1. Array Representation of Binary Tree\n2. Complete Binary Tree\n3. Heap\n4. Heap Sort\n5. Heapify\n6. Priority Queue",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "UZPlWX06yvLeSHW9Hd1ZwMoRL4Y",
                "id": "MTUxNTUyMDc2MDc3MTU1MjA3NjA3NzAwMDA0NA",
                "snippet": {
                    "publishedAt": "2019-03-08T20:14:37+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.6.3 Heap - Heap Sort - Heapify - Priority Queues",
                    "description": "PATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225\n\nTopics Covered \n1. Array Representation of Binary Tree\n2. Complete Binary Tree\n3. Heap\n4. Heap Sort\n5. Heapify\n6. Priority Queue",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HqPJF2L5h9U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ylCQ-q4XXvWFOmAw9sJEF6knCyo",
                "id": "MTE1NDQyMzgyODUxNTQ0MjM4Mjg1MDAwODE3",
                "snippet": {
                    "publishedAt": "2018-12-08T03:04:45+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.11 Best Worst and Average Case Analysis",
                    "description": "Case Analysis Discussed in this video\n\n1. Best\n2. Worst\n3.Average \n\nExamples Taken\n\n1. Linear Search\n2. Binary Search Tree\n\nMin time in Worst Case\nMax time in Worst Case \nare also discussed.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hSle0W7y-d7JikNYaaF7rJ2eGnQ",
                "id": "MTE1NDMyMTg5MjQxNTQzMjE4OTI0MDAwMDc5",
                "snippet": {
                    "publishedAt": "2018-11-26T07:55:24+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.7 [New] Traveling Salesman Problem - Dynamic Programming using Formula",
                    "description": "Traveling Salesman Problem - Dynamic Programming - Explained using Formula\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Q4zHb-Swzro/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Q4zHb-Swzro/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Q4zHb-Swzro/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5p7uL2x7SkGKrcHqnkg-5K4uASA",
                "id": "MTE1Mjk0OTkwMDUxNTI5NDk5MDA1MDAwOTcw",
                "snippet": {
                    "publishedAt": "2018-06-20T12:50:05+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.4 Hamiltonian Cycle - Backtracking",
                    "description": "Hamiltonian Cycle using Backtracking\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "p3qtqsN_RXdj_nlNuhxw-uXzjGU",
                "id": "MTE1MjYyODg2MDYxNTI2Mjg4NjA2MDAwOTI4",
                "snippet": {
                    "publishedAt": "2018-05-14T09:03:26+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.6 Dijkstra Algorithm - Single Source Shortest Path - Greedy Method",
                    "description": "Dijkstra Algorithm for Single Source Shortest Path\nProcedure\nExamples\nTime Complexity\nDrawbacks\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "dUjXNHwDjFBjl3-GoRHwrMRlpEA",
                "id": "MTE1MjQxNTY5MjUxNTI0MTU2OTI1MDAwODQ2",
                "snippet": {
                    "publishedAt": "2018-04-19T16:55:25+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.9 Longest Common Subsequence (LCS)  - Recursion and Dynamic Programming",
                    "description": "Longest Common Subsequence Problem using\n1. Recursion\n2. Memoization\n3. Dynamic Programming\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "I6_MfLw1pzMJb-ubwb9Bw2T0wMA",
                "id": "MTUxNTI0MTU2OTIzMTUyNDE1NjkyMzAwMDUxNQ",
                "snippet": {
                    "publishedAt": "2018-04-19T16:55:23+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.9 Longest Common Subsequence (LCS)  - Recursion and Dynamic Programming",
                    "description": "Longest Common Subsequence Problem using\n1. Recursion\n2. Memoization\n3. Dynamic Programming\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/sSno9rV8Rhg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8o1OJLvRQeT-teYxBYS_xLOHkwc",
                "id": "MTE1MjM4MDQyNzcxNTIzODA0Mjc3MDAwMDky",
                "snippet": {
                    "publishedAt": "2018-04-15T14:57:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.3.1 Matrix Chain Multiplication (Program) - Dynamic Programming",
                    "description": "Matrix Chain Multiplication Program and Explanation\n\nto learn Dynamic Programming Approach  visit https://youtu.be/prx1psByp7U\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hlMsc-1tFVFhdoFNDocmZoIYteM",
                "id": "MTE1MjM2NTM5MzExNTIzNjUzOTMxMDAwMjM1",
                "snippet": {
                    "publishedAt": "2018-04-13T21:12:11+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7.3 Traveling Salesman Problem - Branch and Bound",
                    "description": "Traveling Salesman Problem - Branch and Bound\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HOrjlTqSNDXqXy9rFQQx_TY5dOk",
                "id": "MTUxNTIzNjUzOTI5MTUyMzY1MzkyOTAwMDE1OQ",
                "snippet": {
                    "publishedAt": "2018-04-13T21:12:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7.3 Traveling Salesman Problem - Branch and Bound",
                    "description": "Traveling Salesman Problem - Branch and Bound\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1FEP_sNb62k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "t5BVTT1m6CHScnnB0IbE3ba8Kms",
                "id": "MTUxNTIzNTY3MjQyMTUyMzU2NzI0MjAwMDI0Ng",
                "snippet": {
                    "publishedAt": "2018-04-12T21:07:22+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "DDA Line Drawing Algorithm - Computer Graphics",
                    "description": "DDA explained using Examples.\nDDA (Digital Differential Analyzer) Line Drawing Algorithm\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/W5P8GlaEOSI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/W5P8GlaEOSI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/W5P8GlaEOSI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "qCZh-KYUTb3Y0gnZEkjcMEbpav4",
                "id": "MTE1MjM0NzYyMzUxNTIzNDc2MjM1MDAwNDYy",
                "snippet": {
                    "publishedAt": "2018-04-11T19:50:35+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.8 Reliability Design - Dynamic Programming",
                    "description": "Reliability Design\nSystem Design\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "CplPhMztWDq_-oFp-xH-QRijiUs",
                "id": "MTUxNTIzNDc2MjMzMTUyMzQ3NjIzMzAwMDc3Nw",
                "snippet": {
                    "publishedAt": "2018-04-11T19:50:33+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.8 Reliability Design - Dynamic Programming",
                    "description": "Reliability Design\nSystem Design\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/uJOmqBwENB8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tUHV7JdQOmmlQmhcW5ztsTcuvik",
                "id": "MTE1MjMyOTkxNDQxNTIzMjk5MTQ0MDAwNjQ5",
                "snippet": {
                    "publishedAt": "2018-04-09T18:39:04+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "8.1 NP-Hard Graph Problem - Clique Decision Problem",
                    "description": "NP-Hard Graph Problem - Clique Decision Problem \n\nCDP is proved as NP-Hard\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qZs767KQcvE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qZs767KQcvE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qZs767KQcvE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "B7-9WpYZgThjsalk0-J9PqpZGkw",
                "id": "MTUxNTIzMjk5MTQyMTUyMzI5OTE0MjAwMDU5Mw",
                "snippet": {
                    "publishedAt": "2018-04-09T18:39:02+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "8.1 NP-Hard Graph Problem - Clique Decision Problem",
                    "description": "NP-Hard Graph Problem - Clique Decision Problem \n\nCDP is proved as NP-Hard\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qZs767KQcvE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qZs767KQcvE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qZs767KQcvE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "TTOPOTuvzABi9kKnRb084GQ193o",
                "id": "MTUxNTIzMTI2MzMwMTUyMzEyNjMzMDAwMDA5Mg",
                "snippet": {
                    "publishedAt": "2018-04-07T18:38:50+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.4 Hamiltonian Cycle - Backtracking",
                    "description": "Hamiltonian Cycle using Backtracking\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dQr4wZCiJJ4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2TKUii98JHCP6BUOOaT5JNCWEv4",
                "id": "MTE1MjI5MzI0NDgxNTIyOTMyNDQ4MDAwODMz",
                "snippet": {
                    "publishedAt": "2018-04-05T12:47:28+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.12 Disjoint Sets Data Structure - Weighted Union and Collapsing Find",
                    "description": "Disjoint Sets Data Structure - Weighted Union and Collapsing Find\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wU6udHRIkcc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wU6udHRIkcc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wU6udHRIkcc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "sRaG_4plkvgl_TMcboWarZabm5M",
                "id": "MTUxNTIyODY0Mjg2MTUyMjg2NDI4NjAwMDIzMw",
                "snippet": {
                    "publishedAt": "2018-04-04T17:51:26+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.12 Disjoint Sets Data Structure - Weighted Union and Collapsing Find",
                    "description": "Disjoint Sets Data Structure - Weighted Union and Collapsing Find\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wU6udHRIkcc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wU6udHRIkcc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wU6udHRIkcc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "G07V7sieQeLOM71ywX8esowpK_8",
                "id": "MTUxNTIyNjk5ODQ3MTUyMjY5OTg0NzAwMDM3Ng",
                "snippet": {
                    "publishedAt": "2018-04-02T20:10:47+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.7 [New] Traveling Salesman Problem - Dynamic Programming using Formula",
                    "description": "Traveling Salesman Problem - Dynamic Programming - Explained using Formula\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Q4zHb-Swzro/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Q4zHb-Swzro/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Q4zHb-Swzro/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5zEO8Ofs5JeJzcnXZIQ3UO8wI80",
                "id": "MTE1MjI1NTkzNzIxNTIyNTU5MzcyMDAwMTg0",
                "snippet": {
                    "publishedAt": "2018-04-01T05:09:32+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6. Everything about Variables in JAVA",
                    "description": "Variables explained in details. all attributes of variables and how they are provided in JAVA\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "AfWlgWkywsp3O98HGXCX3wFNOwo",
                "id": "MTUxNTIyNTU5MzcwMTUyMjU1OTM3MDAwMDA5NA",
                "snippet": {
                    "publishedAt": "2018-04-01T05:09:30+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6. Everything about Variables in JAVA",
                    "description": "Variables explained in details. all attributes of variables and how they are provided in JAVA\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/h1Sq8p2GL2g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "B594feiFZvs1p1DaIV1Wm-eTXow",
                "id": "MTE1MjI0MzgyMDExNTIyNDM4MjAxMDAwNTc5",
                "snippet": {
                    "publishedAt": "2018-03-30T19:30:01+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "9.2 Rabin-Karp String Matching Algorithm",
                    "description": "Rabin-Karp String Matching Algorithm\n\nIt is useful for matching multiple patterns simultaneously.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qQ8vS2btsxI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qQ8vS2btsxI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qQ8vS2btsxI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tU7TEq3byE7gxsuHPijBp80XajI",
                "id": "MTUxNTIyNDM4MTk5MTUyMjQzODE5OTAwMDk1MA",
                "snippet": {
                    "publishedAt": "2018-03-30T19:29:59+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "9.2 Rabin-Karp String Matching Algorithm",
                    "description": "Rabin-Karp String Matching Algorithm\n\nIt is useful for matching multiple patterns simultaneously.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qQ8vS2btsxI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qQ8vS2btsxI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qQ8vS2btsxI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "enjQBMWDl9uJaUuasxrS9pHzQL0",
                "id": "MTUxNTIyNDA1MzQ3MTUyMjQwNTM0NzAwMDI4NQ",
                "snippet": {
                    "publishedAt": "2018-03-30T10:22:27+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "10.2  B Trees and B+ Trees. How they are useful in Databases",
                    "description": "This video explains \nB Trees and B+ Trees and how they are used in databases.\n\nInsertion, Deletion and Analysis will be covered in next video.\n\nEach node of a B+ Tree is a block on Disk. The degree of a Tree is decided based number of keys and child pointers that can fit inside a block.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "FQMQ02A_SJpyV0-KfmWu7PCDHY0",
                "id": "MTE1MjI0MDUzMzkxNTIyNDA1MzM5MDAwMjA4",
                "snippet": {
                    "publishedAt": "2018-03-30T10:22:19+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "10.2  B Trees and B+ Trees. How they are useful in Databases",
                    "description": "This video explains \nB Trees and B+ Trees and how they are used in databases.\n\nInsertion, Deletion and Analysis will be covered in next video.\n\nEach node of a B+ Tree is a block on Disk. The degree of a Tree is decided based number of keys and child pointers that can fit inside a block.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/aZjYr87r1b8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "zxrsoYvxvJQH_O6LOvtggZzXAKU",
                "id": "MTE1MjIxMzMxMTgxNTIyMTMzMTE4MDAwNTc2",
                "snippet": {
                    "publishedAt": "2018-03-27T06:45:18+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "9.1 Knuth-Morris-Pratt KMP String Matching Algorithm",
                    "description": "In P3,  b is also matching , lps should be 0 1 0 0 1 0 1 2 3 0\n\nNaive Algorithm\nDrawbacks of Naive Algorithm\nPrefix and Suffix of Pattern\nKMP Algorithm\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "LeCRIv-dORpJe8VU2n5SS3rdAbQ",
                "id": "MTE1MjIwODM2MzExNTIyMDgzNjMxMDAwNDMx",
                "snippet": {
                    "publishedAt": "2018-03-26T17:00:31+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "5. Everything about JAVA Data Types",
                    "description": "Java Data Types Explained in detail\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "nI9UCfYD5ZDURxCk67BDtglN0wo",
                "id": "MTUxNTIyMDgzNjI5MTUyMjA4MzYyOTAwMDIzNQ",
                "snippet": {
                    "publishedAt": "2018-03-26T17:00:29+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "5. Everything about JAVA Data Types",
                    "description": "Java Data Types Explained in detail\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/MuALK4KcNMc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tTsjEJjd9RobZMYhJzoC51cFd1g",
                "id": "MTE1MjIwODM1ODkxNTIyMDgzNTg5MDAwNDQz",
                "snippet": {
                    "publishedAt": "2018-03-26T16:59:49+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4. Why public static void main(String args[ ]) ? JAVA",
                    "description": "Why main should be declared as public static void main\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "LSDgafAtZ6o7VqwN7hfHyLAXonA",
                "id": "MTUxNTIyMDgzNTg4MTUyMjA4MzU4ODAwMDcxMQ",
                "snippet": {
                    "publishedAt": "2018-03-26T16:59:48+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4. Why public static void main(String args[ ]) ? JAVA",
                    "description": "Why main should be declared as public static void main\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/On9mzziI2pU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_Vz-gMEqClg-WfKxJ9hVgpsCQnE",
                "id": "MTE1MjIwODM1NTkxNTIyMDgzNTU5MDAwMzI2",
                "snippet": {
                    "publishedAt": "2018-03-26T16:59:19+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3. Why to Set Path ? JAVA",
                    "description": "Why we should set the Path to Compile and Run JAVA programs\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2v_vA6A7peq8ACndBmlUjttG2BE",
                "id": "MTUxNTIyMDgzNTU3MTUyMjA4MzU1NzAwMDI2OQ",
                "snippet": {
                    "publishedAt": "2018-03-26T16:59:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3. Why to Set Path ? JAVA",
                    "description": "Why we should set the Path to Compile and Run JAVA programs\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/OnbpCg96w0I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "u2kcqlKgCNrdvvvk7z2o9waxHgA",
                "id": "MTUxNTIxOTY3MDU5MTUyMTk2NzA1OTAwMDY3Mw",
                "snippet": {
                    "publishedAt": "2018-03-25T08:37:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "9.1 Knuth-Morris-Pratt KMP String Matching Algorithm",
                    "description": "In P3,  b is also matching , lps should be 0 1 0 0 1 0 1 2 3 0\n\nNaive Algorithm\nDrawbacks of Naive Algorithm\nPrefix and Suffix of Pattern\nKMP Algorithm\n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/V5-7GzOfADQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Xh1SPPY8e29t4K5p_vYhz-UxoWw",
                "id": "MTE1MjE1NTE3OTExNTIxNTUxNzkxMDAwNjkz",
                "snippet": {
                    "publishedAt": "2018-03-20T13:16:31+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2. Why and How Java is platform independent",
                    "description": "Compiler vs Interpreter\nHow Programs run on Computer\nHow Java programs run on Computer\nWhat is Distributed System?\nHow Java helped Distributed Systems?\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "7EnzeBS-JCPjFN-WzGqv6iuH0bk",
                "id": "MTUxNTIxNTUxMDk5MTUyMTU1MTA5OTAwMDA5NA",
                "snippet": {
                    "publishedAt": "2018-03-20T13:04:59+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2. Why and How Java is platform independent",
                    "description": "Compiler vs Interpreter\nHow Programs run on Computer\nHow Java programs run on Computer\nWhat is Distributed System?\nHow Java helped Distributed Systems?\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1xz7OxASXUc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tFjUKK8ked4D0lh1XlXc6caVDAM",
                "id": "MTE1MjEzODQxNzIxNTIxMzg0MTcyMDAwMjI1",
                "snippet": {
                    "publishedAt": "2018-03-18T14:42:52+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1. Why One should Learn Java - Introduction to Java",
                    "description": "Where Java is used.\nThe Fetaures of Programming Languages\nBuzz Words of Java\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "fx0lZS0Mocn7gSzobl3G9jN3U0Y",
                "id": "MTUxNTIxMzg0MTcxMTUyMTM4NDE3MTAwMDYzMg",
                "snippet": {
                    "publishedAt": "2018-03-18T14:42:51+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1. Why One should Learn Java - Introduction to Java",
                    "description": "Where Java is used.\nThe Fetaures of Programming Languages\nBuzz Words of Java\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-JYLuv7mmxM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Qn23RTkR_k8qBW85g-p48vLt5Q0",
                "id": "MTE1MjEyMTk3NjAxNTIxMjE5NzYwMDAwNzg4",
                "snippet": {
                    "publishedAt": "2018-03-16T17:02:40+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "10.1 AVL Tree - Insertion and Rotations",
                    "description": "AVL Trees\n-----------------\nBinary Search Trees\nDrawbacks of Binary Search Tree\nWhat are AVL Trees\nRotations in AVL Trees\nCreating AVL Trees\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MXX2idl68LlLQbF-xifaSr6xwaM",
                "id": "MTUxNTIxMjE3NDY4MTUyMTIxNzQ2ODAwMDQ4MQ",
                "snippet": {
                    "publishedAt": "2018-03-16T16:24:28+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "10.1 AVL Tree - Insertion and Rotations",
                    "description": "AVL Trees\n-----------------\nBinary Search Trees\nDrawbacks of Binary Search Tree\nWhat are AVL Trees\nRotations in AVL Trees\nCreating AVL Trees\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jDM6_TnYIqE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2AXqvRcHz0fsdAl3mpKYbk2GRyo",
                "id": "MTUxNTIwMjc5NzcxMTUyMDI3OTc3MTAwMDczMQ",
                "snippet": {
                    "publishedAt": "2018-03-05T19:56:11+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.3.1 Matrix Chain Multiplication (Program) - Dynamic Programming",
                    "description": "Matrix Chain Multiplication Program and Explanation\n\nto learn Dynamic Programming Approach  visit https://youtu.be/prx1psByp7U\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/eKkXU3uu2zk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "geWfTSfqLDmKvQ2MV8CZZPE7HBM",
                "id": "MTE1MjAxOTkxODYxNTIwMTk5MTg2MDAwNjUy",
                "snippet": {
                    "publishedAt": "2018-03-04T21:33:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "8. NP-Hard and NP-Complete Problems",
                    "description": "P vs NP\nSatisfiability\nReduction\nNP-Hard vs NP-Complete\nP=NP\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCORRECTION: Ignore Spelling Mistakes\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/e2cF8a5aAhE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/e2cF8a5aAhE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/e2cF8a5aAhE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "oWty9VUTQFxOhe36dMUgIRHTTvU",
                "id": "MTE1MjAxOTkwMzkxNTIwMTk5MDM5MDAwMjE1",
                "snippet": {
                    "publishedAt": "2018-03-04T21:30:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.5.1 0/1 Knapsack Problem (Program) - Dynamic Programming",
                    "description": "0/1 Knapsack Problem explained using Program\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uOgzyIGZxRMq1KBJlf7QF5wxtFY",
                "id": "MTUxNTIwMTk4OTk1MTUyMDE5ODk5NTAwMDIzNQ",
                "snippet": {
                    "publishedAt": "2018-03-04T21:29:55+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.5.1 0/1 Knapsack Problem (Program) - Dynamic Programming",
                    "description": "0/1 Knapsack Problem explained using Program\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zRza99HPvkQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "PP30xvTvjTdW1LN_iQQMvR8qkk0",
                "id": "MTUxNTIwMTk4NTM3MTUyMDE5ODUzNzAwMDUxMA",
                "snippet": {
                    "publishedAt": "2018-03-04T21:22:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.1 Priori Analysis and Posteriori Testing",
                    "description": "Difference between Priori Analysis and Posteriori Testing\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-JTq1BFBwmo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-JTq1BFBwmo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-JTq1BFBwmo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ukQ3QOmVLh06nlP0qAfYGcHdzJA",
                "id": "MTE1MjAxOTYyMjYxNTIwMTk2MjI2MDAwMTIz",
                "snippet": {
                    "publishedAt": "2018-03-04T20:43:46+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.1.1 MultiStage Graph (Program) - Dynamic Programming",
                    "description": "Multistage graph Program and explanation \n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BZ1KfveQyGTbUR0FZRzVXBiW7ec",
                "id": "MTUxNTIwMTk1NTEzMTUyMDE5NTUxMzAwMDQ1OA",
                "snippet": {
                    "publishedAt": "2018-03-04T20:31:53+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.1.1 MultiStage Graph (Program) - Dynamic Programming",
                    "description": "Multistage graph Program and explanation \n\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/FcScLYJI42E/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "D9J7DV3FkGpSZIzk3LfjHickSMA",
                "id": "MTUxNTE5ODE5NzAwMTUxOTgxOTcwMDAwMDQ1Nw",
                "snippet": {
                    "publishedAt": "2018-02-28T12:08:20+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "8. NP-Hard and NP-Complete Problems",
                    "description": "P vs NP\nSatisfiability\nReduction\nNP-Hard vs NP-Complete\nP=NP\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCORRECTION: Ignore Spelling Mistakes\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/e2cF8a5aAhE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/e2cF8a5aAhE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/e2cF8a5aAhE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "imhEHqKu6zoQfxwA0ylOsxzSNMs",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwOTAy",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7.1 Job Sequencing with Deadline - Branch and Bound",
                    "description": "Job Sequencing using Branch and Bound\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Gb0dLYp6s-jwKihZsYDDna3gLLc",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwNzM1",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6 Introduction to Backtracking - Brute Force Approach",
                    "description": "Introduction to Backtracking\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5oFOM3x4aQfJdOeGF4y7EVetUOs",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwNjU1",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7.2 0/1 Knapsack using Branch and Bound",
                    "description": "0/1 Knapsack using Branch and Bound\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yV1d-b_NeK8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yV1d-b_NeK8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yV1d-b_NeK8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4FMzSnY_qCpGU8wOLnfhdQrepsU",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwMzkw",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "5.2 Articulation Point and Biconnected Components",
                    "description": "Articulation point is a vertex in a graph, if it is removed, graph will split into components.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "L84rAkXWFhGWfT28XLsLusofo0g",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwMzM0",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.1 N Queens Problem using Backtracking",
                    "description": "N-Queens problem\nstate space tree\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "jCDWePgtVr-NQkTegwIL0RXBjDU",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwMjc1",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.2 Sum Of Subsets Problem - Backtracking",
                    "description": "Sum of Subsets problem\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kyLxTdsT8ws/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kyLxTdsT8ws/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kyLxTdsT8ws/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "lNIw_v1qIO-nm1BFc0EDNf28Ff4",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwMjA3",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7 Branch and Bound Introduction",
                    "description": "Introduction to Branch and Bound\nState Space Trees\nFIFO Branch and Bound\nLIFO Branch and Bound\nLC Branch and Bound\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "AE3skfdV_CNbGYIP9dOLeeNWfwI",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwMTc5",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search",
                    "description": "Breadth First Search\nDepth First Search\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "xa284-xMfIuWN2Pquwx2kkHuwjE",
                "id": "MTE1MTk3NTQzNzkxNTE5NzU0Mzc5MDAwMTIy",
                "snippet": {
                    "publishedAt": "2018-02-27T17:59:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.3 Graph Coloring Problem - Backtracking",
                    "description": "CORRECTION: at the end of this video, in a MAP, region 1 is also Adjacent to region 4 \n\nGraph coloring problem using Backtracking\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Ts1mfwrV3NUw217FheOw2uOXvaI",
                "id": "MTUxNTE5NjU4ODgzMTUxOTY1ODg4MzAwMDQ5Ng",
                "snippet": {
                    "publishedAt": "2018-02-26T15:28:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7.2 0/1 Knapsack using Branch and Bound",
                    "description": "0/1 Knapsack using Branch and Bound\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yV1d-b_NeK8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yV1d-b_NeK8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yV1d-b_NeK8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "QxXjwirdz3ptQRqA9qnexjkcUcU",
                "id": "MTUxNTE5NjU4ODI1MTUxOTY1ODgyNTAwMDg4NQ",
                "snippet": {
                    "publishedAt": "2018-02-26T15:27:05+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7.1 Job Sequencing with Deadline - Branch and Bound",
                    "description": "Job Sequencing using Branch and Bound\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/M7Fl_z7_J2k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Eycx75lfdKTyLCcII56R6SF9jyQ",
                "id": "MTUxNTE5NjU0NDMyMTUxOTY1NDQzMjAwMDI1MA",
                "snippet": {
                    "publishedAt": "2018-02-26T14:13:52+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.3 Graph Coloring Problem - Backtracking",
                    "description": "CORRECTION: at the end of this video, in a MAP, region 1 is also Adjacent to region 4 \n\nGraph coloring problem using Backtracking\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/052VkKhIaQ4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kHbM3eDu_ffrCAVnBz4xFznlnRw",
                "id": "MTUxNTE5NjUzNDI1MTUxOTY1MzQyNTAwMDk5MQ",
                "snippet": {
                    "publishedAt": "2018-02-26T13:57:05+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "7 Branch and Bound Introduction",
                    "description": "Introduction to Branch and Bound\nState Space Trees\nFIFO Branch and Bound\nLIFO Branch and Bound\nLC Branch and Bound\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/3RBNPc0_Q6g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "zazgvUMogUr9Jlfed18DzntgS8Q",
                "id": "MTUxNTE5NDcyOTc4MTUxOTQ3Mjk3ODAwMDUxMg",
                "snippet": {
                    "publishedAt": "2018-02-24T11:49:38+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.2 Sum Of Subsets Problem - Backtracking",
                    "description": "Sum of Subsets problem\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kyLxTdsT8ws/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kyLxTdsT8ws/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kyLxTdsT8ws/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "eq5D0kgPztEEloCM52szRJt5yyY",
                "id": "MTUxNTE5NDcyMTI5MTUxOTQ3MjEyOTAwMDQ3NA",
                "snippet": {
                    "publishedAt": "2018-02-24T11:35:29+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6.1 N Queens Problem using Backtracking",
                    "description": "N-Queens problem\nstate space tree\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xFv_Hl4B83A/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ToNRGzNmmBSEJmiNVTrbxMtUF2k",
                "id": "MTUxNTE5NDcxMTA0MTUxOTQ3MTEwNDAwMDA5NQ",
                "snippet": {
                    "publishedAt": "2018-02-24T11:18:24+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "6 Introduction to Backtracking - Brute Force Approach",
                    "description": "Introduction to Backtracking\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DKCbsiDBN6c/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "56v4-gOdjj5P47Ma-YDHVYreOmE",
                "id": "MTUxNTE5NDY5MjgzMTUxOTQ2OTI4MzAwMDU1MQ",
                "snippet": {
                    "publishedAt": "2018-02-24T10:48:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "5.2 Articulation Point and Biconnected Components",
                    "description": "Articulation point is a vertex in a graph, if it is removed, graph will split into components.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jFZsDDB0-vo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "eGCn-03ACFDu5WH5FdXAErwaP9Y",
                "id": "MTUxNTE5NDY5MjQ1MTUxOTQ2OTI0NTAwMDE1OQ",
                "snippet": {
                    "publishedAt": "2018-02-24T10:47:25+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search",
                    "description": "Breadth First Search\nDepth First Search\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9G5guulBr81mUq0DQIBRCSugzjc",
                "id": "MTUxNTE5NDA5NTUxMTUxOTQwOTU1MTAwMDg2Mw",
                "snippet": {
                    "publishedAt": "2018-02-23T18:12:31+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Abdul Bari Live Stream",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eRuk9Y48s0k/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eRuk9Y48s0k/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eRuk9Y48s0k/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "bJ15D9DHd77vuz97uhM9t1XugDA",
                "id": "MTE1MTkzMDQxNjkxNTE5MzA0MTY5MDAwODYy",
                "snippet": {
                    "publishedAt": "2018-02-22T12:56:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.6 Optimal Binary Search Tree (Successful Search Only) - Dynamic Programming",
                    "description": "This problem is a partial, considering only successful search.\n\nWhat is Binary Search Tree?\nWhat is Optimal Binary Search Tree?\nHow to create Optimal Binary Search Tree by applying Dynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "qjv3SInNxB_8bT9g2zHEG67dYTo",
                "id": "MTUxNTE5MzA0MTY3MTUxOTMwNDE2NzAwMDY3NA",
                "snippet": {
                    "publishedAt": "2018-02-22T12:56:07+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.6 Optimal Binary Search Tree (Successful Search Only) - Dynamic Programming",
                    "description": "This problem is a partial, considering only successful search.\n\nWhat is Binary Search Tree?\nWhat is Optimal Binary Search Tree?\nHow to create Optimal Binary Search Tree by applying Dynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/vLS-zRCHo-Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "jtOG3PQOTanbLf7XbU6B7N8rkeo",
                "id": "MTUxNTE5MzAzNTgwMTUxOTMwMzU4MDAwMDY2Ng",
                "snippet": {
                    "publishedAt": "2018-02-22T12:46:20+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.7 Traveling Salesperson Problem - Dynamic Programming",
                    "description": "4.7 Traveling Salesman Problem - Dyn Prog -Explained  using Formula\n\nhttps://youtu.be/Q4zHb-Swzro\n\nCORRECTION:  while writing level 3 values, mistakenly I wrote 4 level values\n\nTravelling Salesperson problem is solved using Brute Force approach and Dynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XaXsJJh-Q5Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XaXsJJh-Q5Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XaXsJJh-Q5Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XaXsJJh-Q5Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XaXsJJh-Q5Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "M3TJXsui_iG0AOO5jukpzJ3K4nc",
                "id": "MTE1MTkxNjA2NjIxNTE5MTYwNjYyMDAwMzUw",
                "snippet": {
                    "publishedAt": "2018-02-20T21:04:22+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.5 0/1 Knapsack - Two Methods - Dynamic Programming",
                    "description": "0/1 Knapsack Problem\nDynamic Programming\nTwo Methods to solve the problem\n\nTabulation Method\nSets Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "p8kHgqAg82TnqjGhXk-6mMkYnAQ",
                "id": "MTUxNTE5MTYwNjYxMTUxOTE2MDY2MTAwMDc1Mw",
                "snippet": {
                    "publishedAt": "2018-02-20T21:04:21+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.5 0/1 Knapsack - Two Methods - Dynamic Programming",
                    "description": "0/1 Knapsack Problem\nDynamic Programming\nTwo Methods to solve the problem\n\nTabulation Method\nSets Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/nLmhmB6NzcM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "B96xPWOo7Jb4jZ3DpSv7-ud1h48",
                "id": "MTE1MTg4NDIzNDExNTE4ODQyMzQxMDAwMDA2",
                "snippet": {
                    "publishedAt": "2018-02-17T04:39:01+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4 Principle  of Optimality  - Dynamic Programming introduction",
                    "description": "Introduction to Dynamic Programming\nGreedy vs Dynamic Programming\nMemoization vs Tabulation\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aph2DAw_qn5b7CPQoJ_arnGrvFs",
                "id": "MTE1MTg3ODEwNzgxNTE4NzgxMDc4MDAwNzE1",
                "snippet": {
                    "publishedAt": "2018-02-16T11:37:58+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.4 Bellman Ford Algorithm - Single Source Shortest Path - Dynamic Programming",
                    "description": "Bellman Ford\nSingle Source Shortest Path\nDynamic Programming\nDrawbacks\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3kOvT0sIPTos6Oxpp8Vv9WvgVFQ",
                "id": "MTUxNTE4NzgxMDc3MTUxODc4MTA3NzAwMDM5Mw",
                "snippet": {
                    "publishedAt": "2018-02-16T11:37:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.4 Bellman Ford Algorithm - Single Source Shortest Path - Dynamic Programming",
                    "description": "Bellman Ford\nSingle Source Shortest Path\nDynamic Programming\nDrawbacks\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/FtN3BYH2Zes/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "F5e3ERG5Q7JkeELP32js9H3xP6E",
                "id": "MTUxNTE4Nzc4MTMzMTUxODc3ODEzMzAwMDQzMw",
                "snippet": {
                    "publishedAt": "2018-02-16T10:48:53+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.3 Matrix Chain Multiplication - Dynamic Programming",
                    "description": "Matrix Chain Multiplication\nDynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BgYfGUsd9GsWEjOIHLg-Kq_P1Y4",
                "id": "MTUxNTE4Nzc4MDcyMTUxODc3ODA3MjAwMDE1Nw",
                "snippet": {
                    "publishedAt": "2018-02-16T10:47:52+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.1 MultiStage Graph - Dynamic Programming",
                    "description": "Multistage Graph Problem\nSolved using Dynamic Programming\nForward Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kelJrEoD3WXDety4pjFGDD0rMK0",
                "id": "MTE1MTg3Nzc5MzkxNTE4Nzc3OTM5MDAwMDk1",
                "snippet": {
                    "publishedAt": "2018-02-16T10:45:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.2 All Pairs Shortest Path (Floyd-Warshall) - Dynamic Programming",
                    "description": "Floyd-Warshall All Pairs Shortest Path Problem\nDynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "P5q0kVxFvNKraBwWBS9iKgvbxTc",
                "id": "MTUxNTE4Nzc3OTM4MTUxODc3NzkzODAwMDE0Mw",
                "snippet": {
                    "publishedAt": "2018-02-16T10:45:38+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.2 All Pairs Shortest Path (Floyd-Warshall) - Dynamic Programming",
                    "description": "Floyd-Warshall All Pairs Shortest Path Problem\nDynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/oNI0rf2P9gE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "N7pgDM89frIWhTXTFCzUyjICIig",
                "id": "MTUxNTE4Nzc3MTUyMTUxODc3NzE1MjAwMDMzMw",
                "snippet": {
                    "publishedAt": "2018-02-16T10:32:32+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4 Principle  of Optimality  - Dynamic Programming introduction",
                    "description": "Introduction to Dynamic Programming\nGreedy vs Dynamic Programming\nMemoization vs Tabulation\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/5dRGRueKU3M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5bcZ1ce_yFHY83viRdjfZrBTo74",
                "id": "MTE1MTg3NjU2NTQxNTE4NzY1NjU0MDAwMDYz",
                "snippet": {
                    "publishedAt": "2018-02-16T07:20:54+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.3 Matrix Chain Multiplication - Dynamic Programming",
                    "description": "Matrix Chain Multiplication\nDynamic Programming\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/prx1psByp7U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "a9y0dLCDaer4nrA_YInIyZ0gDA0",
                "id": "MTE1MTg3NjQ4MzAxNTE4NzY0ODMwMDAwMTUz",
                "snippet": {
                    "publishedAt": "2018-02-16T07:07:10+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "4.1 MultiStage Graph - Dynamic Programming",
                    "description": "Multistage Graph Problem\nSolved using Dynamic Programming\nForward Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9iE9Mj4m8jk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "6Z3HyeiUDrrhiPRhCvUQqkcO2vQ",
                "id": "MTUxNTE4MjA4NTY2MTUxODIwODU2NjAwMDkwMw",
                "snippet": {
                    "publishedAt": "2018-02-09T20:36:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.6 Dijkstra Algorithm - Single Source Shortest Path - Greedy Method",
                    "description": "Dijkstra Algorithm for Single Source Shortest Path\nProcedure\nExamples\nTime Complexity\nDrawbacks\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XB4MIexjvY0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aR7sc691FHvD6GcIlMqdA3TCQH4",
                "id": "MTE1MTgxNTM4ODgxNTE4MTUzODg4MDAwMDY5",
                "snippet": {
                    "publishedAt": "2018-02-09T05:24:48+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.5 Prims and Kruskals Algorithms - Greedy Method",
                    "description": "Whats a Spanning Tree ?\nWhat is a Minimum Cost Spanning Tree?\n\nPrims Algorithm\nKruskals Algorithm\n\nProblems for Spanning Tree\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wT3cnwpK_4Zey05lFW37QBJXXFk",
                "id": "MTUxNTE4MTUzODg3MTUxODE1Mzg4NzAwMDczMg",
                "snippet": {
                    "publishedAt": "2018-02-09T05:24:47+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.5 Prims and Kruskals Algorithms - Greedy Method",
                    "description": "Whats a Spanning Tree ?\nWhat is a Minimum Cost Spanning Tree?\n\nPrims Algorithm\nKruskals Algorithm\n\nProblems for Spanning Tree\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4ZlRH0eK-qQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "UPJAhl-ccmEQQx30-3RFftIj-Cs",
                "id": "MTE1MTgwOTM0NzgxNTE4MDkzNDc4MDAwODQ3",
                "snippet": {
                    "publishedAt": "2018-02-08T12:37:58+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.4 Huffman Coding - Greedy Method",
                    "description": "How to Compress a Message using\nFixed sized codes\nVariable sized codes (Huffman Coding)\n\nhow to decode\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "y4tG9fVIAm9wGD-4jUynJ23p88g",
                "id": "MTUxNTE4MDkzNDc3MTUxODA5MzQ3NzAwMDY3OA",
                "snippet": {
                    "publishedAt": "2018-02-08T12:37:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.4 Huffman Coding - Greedy Method",
                    "description": "How to Compress a Message using\nFixed sized codes\nVariable sized codes (Huffman Coding)\n\nhow to decode\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/co4_ahEDCho/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "YW-BBYuBB-chuJuKqHYg7jfKW_g",
                "id": "MTE1MTgwMzk1MDgxNTE4MDM5NTA4MDAwODY5",
                "snippet": {
                    "publishedAt": "2018-02-07T21:38:28+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.2 Job Sequencing with Deadlines - Greedy Method",
                    "description": "Job Sequencing with Deadlines\n2 problems are solved\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_9z9Um67adKqZv78XAv_N6erjp0",
                "id": "MTUxNTE4MDM5NTA3MTUxODAzOTUwNzAwMDY3MA",
                "snippet": {
                    "publishedAt": "2018-02-07T21:38:27+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.2 Job Sequencing with Deadlines - Greedy Method",
                    "description": "Job Sequencing with Deadlines\n2 problems are solved\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zPtI8q9gvX8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "rpVkMLjB0mK-qTsmxrw2g1cZ1-0",
                "id": "MTE1MTgwMzg1ODIxNTE4MDM4NTgyMDAwNTI4",
                "snippet": {
                    "publishedAt": "2018-02-07T21:23:02+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.3 Optimal Merge Pattern - Greedy Method",
                    "description": "What is Merging?\nWhat is Optimal Merge Pattern Problem ?\nIt useful for Huffman Coding\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "VEYDXj8b34Pzm51Mmz4TfgIGM6M",
                "id": "MTUxNTE4MDM4NTgxMTUxODAzODU4MTAwMDk5MQ",
                "snippet": {
                    "publishedAt": "2018-02-07T21:23:01+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.3 Optimal Merge Pattern - Greedy Method",
                    "description": "What is Merging?\nWhat is Optimal Merge Pattern Problem ?\nIt useful for Huffman Coding\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HHIc5JZyenI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "YfCcsKmTt5pNOlb9CvWrxw2imXI",
                "id": "MTE1MTc5NzI1MTQxNTE3OTcyNTE0MDAwNjI5",
                "snippet": {
                    "publishedAt": "2018-02-07T03:01:54+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.8.2 QuickSort Analysis",
                    "description": "Analysis of QuickSort Algorithm\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "oxNcEj37m2WpuNxCUT_CB3rHom0",
                "id": "MTE1MTc5NzI1MDYxNTE3OTcyNTA2MDAwNTcy",
                "snippet": {
                    "publishedAt": "2018-02-07T03:01:46+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.8.1  QuickSort Algorithm",
                    "description": "Quick Sort Algorithm Explained\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4O4eLnfF1a58DbLsT2D7l9tjJ-o",
                "id": "MTE1MTc5NDc4NzYxNTE3OTQ3ODc2MDAwNTcy",
                "snippet": {
                    "publishedAt": "2018-02-06T20:11:16+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.1 Knapsack Problem - Greedy Method",
                    "description": "what is knapsack problem?\nhow to apply greedy method\nExample problem\n\nSecond Object profit/weight=1.66\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "pkMiEEpbXiBxniOCmsGgBrS0JRM",
                "id": "MTUxNTE3OTQ3ODc0MTUxNzk0Nzg3NDAwMDMzNg",
                "snippet": {
                    "publishedAt": "2018-02-06T20:11:14+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3.1 Knapsack Problem - Greedy Method",
                    "description": "what is knapsack problem?\nhow to apply greedy method\nExample problem\n\nSecond Object profit/weight=1.66\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/oTTzNMHM05I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kSKS8EPy14duXjptnfexsprKWwQ",
                "id": "MTE1MTc5NDcwNzExNTE3OTQ3MDcxMDAwNjQ1",
                "snippet": {
                    "publishedAt": "2018-02-06T19:57:51+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.9 Strassens Matrix Multiplication",
                    "description": "Simple Matrix Multiplication Method\nDivide and Conquer Method\n\nStrassen's Matrix Multiplication Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "IfAO1vxs1Xnqu06Ib31Pcb1eW5s",
                "id": "MTE1MTc5NDQxMzYxNTE3OTQ0MTM2MDAwMTYy",
                "snippet": {
                    "publishedAt": "2018-02-06T19:08:56+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3. Greedy Method -  Introduction",
                    "description": "Introduction to Greedy Method\nWhat are Feasible and Optimal Solutions\nGeneral Method of Greedy\nExamples to Explain Greedy Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ARvQcqJ_-NY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ARvQcqJ_-NY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ARvQcqJ_-NY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "UM7V5NGx5slLkr5pk_7qUF6iYxI",
                "id": "MTUxNTE3OTQ0MTM0MTUxNzk0NDEzNDAwMDA2Mw",
                "snippet": {
                    "publishedAt": "2018-02-06T19:08:54+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "3. Greedy Method -  Introduction",
                    "description": "Introduction to Greedy Method\nWhat are Feasible and Optimal Solutions\nGeneral Method of Greedy\nExamples to Explain Greedy Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ARvQcqJ_-NY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ARvQcqJ_-NY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ARvQcqJ_-NY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tmnhg_-0YeCkGg0ir07vv0x0TI4",
                "id": "MTUxNTE3ODg3NzM2MTUxNzg4NzczNjAwMDkzMA",
                "snippet": {
                    "publishedAt": "2018-02-06T03:28:56+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.9 Strassens Matrix Multiplication",
                    "description": "Simple Matrix Multiplication Method\nDivide and Conquer Method\n\nStrassen's Matrix Multiplication Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0oJyNmEbS4w/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "DmT7K3fNiaz-M-LiylV7Ew2ya8M",
                "id": "MTUxNTE3NTUxMzc3MTUxNzU1MTM3NzAwMDAyNQ",
                "snippet": {
                    "publishedAt": "2018-02-02T06:02:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.8.2 QuickSort Analysis",
                    "description": "Analysis of QuickSort Algorithm\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-qOVVRIZzao/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "OVAnke1pNGdkIAmsGY3eqeO9-sg",
                "id": "MTUxNTE3NTUxMzY2MTUxNzU1MTM2NjAwMDE2MQ",
                "snippet": {
                    "publishedAt": "2018-02-02T06:02:46+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.8.1  QuickSort Algorithm",
                    "description": "Quick Sort Algorithm Explained\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/7h1s2SojIRw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BneUvtrjVCIAYH7l-zrdGpcXYSQ",
                "id": "MTE1MTc1MTg5NTQxNTE3NTE4OTU0MDAwMDE1",
                "snippet": {
                    "publishedAt": "2018-02-01T21:02:34+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.7.3 MergeSort in-depth Analysis",
                    "description": "Pro and Cons of MergeSort\nDrawbacks\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "YwQfcC5RfQ4Y8yDwiF-pFP2f0J4",
                "id": "MTUxNTE3NTE4OTUyMTUxNzUxODk1MjAwMDAzNg",
                "snippet": {
                    "publishedAt": "2018-02-01T21:02:32+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.7.3 MergeSort in-depth Analysis",
                    "description": "Pro and Cons of MergeSort\nDrawbacks\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ak-pz7tS5DE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9ay1vjkN-d3LExQzaFAJNTLcHVc",
                "id": "MTE1MTc0ODYwNTYxNTE3NDg2MDU2MDAwODI0",
                "snippet": {
                    "publishedAt": "2018-02-01T11:54:16+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.5.3 Time Complexity of While and if #3",
                    "description": "Time Complexity of While and if statements\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2ePAKvyi8unvQM4P6EarCeJX4eY",
                "id": "MTUxNTE3NDg2MDU0MTUxNzQ4NjA1NDAwMDI3Mw",
                "snippet": {
                    "publishedAt": "2018-02-01T11:54:14+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.5.3 Time Complexity of While and if #3",
                    "description": "Time Complexity of While and if statements\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/p1EnSvS3urU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "sWID0hayf-eCdNfstMah9CZ8jTI",
                "id": "MTE1MTczOTk5NDAxNTE3Mzk5OTQwMDAwOTI5",
                "snippet": {
                    "publishedAt": "2018-01-31T11:59:00+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.7.2.  Merge Sort Algorithm",
                    "description": "You should already know what is merging and merge patterns\nyou can watch here https://youtu.be/6pV2IF0fgKY\n\nMergeSort Recursive Method\n\nTracing of MergeSort Algorithm\nAnalysis of MergeSort Algorithm\nDraw backs of MergeSort\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HiUQeXgxfCLQ0YkFodcXoc8emYI",
                "id": "MTUxNTE3Mzk5OTM4MTUxNzM5OTkzODAwMDQ1Mw",
                "snippet": {
                    "publishedAt": "2018-01-31T11:58:58+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.7.2.  Merge Sort Algorithm",
                    "description": "You should already know what is merging and merge patterns\nyou can watch here https://youtu.be/6pV2IF0fgKY\n\nMergeSort Recursive Method\n\nTracing of MergeSort Algorithm\nAnalysis of MergeSort Algorithm\nDraw backs of MergeSort\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/mB5HXBb_HY8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ywVrFJxaI7qTVYAVBvYfp8uFEp4",
                "id": "MTE1MTczOTkwNDMxNTE3Mzk5MDQzMDAwNzcx",
                "snippet": {
                    "publishedAt": "2018-01-31T11:44:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.7.1  Two Way MergeSort - Iterative method",
                    "description": "Video Covers\nWhat is Merging ?\nWhat is M-Way Merge ?\nWhat are Merge Patterns ?\n\nTwo Way MergeSort is Different from Merge Sort\n\nTwo way MergeSort is Iterative Procedure\nMergeSort is Recursive Procedure\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "By_67XKd4Unl3Uq0i9arjFMkIAc",
                "id": "MTUxNTE3Mzk5MDQyMTUxNzM5OTA0MjAwMDcxMg",
                "snippet": {
                    "publishedAt": "2018-01-31T11:44:02+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.7.1  Two Way MergeSort - Iterative method",
                    "description": "Video Covers\nWhat is Merging ?\nWhat is M-Way Merge ?\nWhat are Merge Patterns ?\n\nTwo Way MergeSort is Different from Merge Sort\n\nTwo way MergeSort is Iterative Procedure\nMergeSort is Recursive Procedure\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6pV2IF0fgKY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "D7JUL271Rhx2YDRQiPzJr5VPyLQ",
                "id": "MTE1MTcyNTczNzIxNTE3MjU3MzcyMDAwMTQw",
                "snippet": {
                    "publishedAt": "2018-01-29T20:22:52+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.6.1 Binary Search Iterative Method",
                    "description": "Divide and Conquer Method \nBinary Search Method\nIterative Algorithm\nAnalysis of Binary Search Algorithm\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "rMRMw8WSk4D9z6s6T3qCQD4ImL8",
                "id": "MTUxNTE3MjU3MzcxMTUxNzI1NzM3MTAwMDQ4MQ",
                "snippet": {
                    "publishedAt": "2018-01-29T20:22:51+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.6.1 Binary Search Iterative Method",
                    "description": "Divide and Conquer Method \nBinary Search Method\nIterative Algorithm\nAnalysis of Binary Search Algorithm\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/C2apEw9pgtw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "6yDqRylORHD8I8T2c95H133pr70",
                "id": "MTE1MTcyNTY5MTMxNTE3MjU2OTEzMDAwNzc1",
                "snippet": {
                    "publishedAt": "2018-01-29T20:15:13+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.6.2 Binary Search Recursive Method",
                    "description": "Divide and Conquer\nBinary search Recursive method\nAnalysis\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "zQNXrdA2XtqVff2XkjLzwFN7_JY",
                "id": "MTUxNTE3MjU2OTExMTUxNzI1NjkxMTAwMDk4NA",
                "snippet": {
                    "publishedAt": "2018-01-29T20:15:11+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.6.2 Binary Search Recursive Method",
                    "description": "Divide and Conquer\nBinary search Recursive method\nAnalysis\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/uEUXGcc2VXM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ckUv54PiJVFz3oDbBfLrodDfV2k",
                "id": "MTE1MTY5NTI3MTMxNTE2OTUyNzEzMDAwNzk2",
                "snippet": {
                    "publishedAt": "2018-01-26T07:45:13+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.3.2 Recurrence Relation Dividing [ T(n)=T(n/2)+ n].   #2",
                    "description": "Recurrence Relation for Dividing Functions\nExample : T(n)= T(n/2) + n\n\nsolved using Recursion Tree and Back Substitution Method\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XcZw01FuH18/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XcZw01FuH18/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XcZw01FuH18/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "bYM1cuO6GN6OzqZRMe35OA2bV8E",
                "id": "MTE1MTY5NTI3MDcxNTE2OTUyNzA3MDAwNDI2",
                "snippet": {
                    "publishedAt": "2018-01-26T07:45:07+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.3.3 Recurrence Relation [ T(n)= 2T(n/2) +n]  #3",
                    "description": "Recurrence Relation for Dividing Function\n\nExample : T(n)= 2T(n/2) + n\n\nSolved using Recursion Tree and Back Substitution Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1K9ebQJosvo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1K9ebQJosvo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1K9ebQJosvo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BdBC-c-hj8UTRLwB4jtSHP6ZWhY",
                "id": "MTE1MTY5NTI3MDMxNTE2OTUyNzAzMDAwODkx",
                "snippet": {
                    "publishedAt": "2018-01-26T07:45:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.5 Root function (Recurrence Relation)",
                    "description": "Recurrence Relation for Root Function\n\nsolved using Substitution method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8nqhJQFIsOBMzRU1snJ_BpeAAH8",
                "id": "MTE1MTY5NTI2OTcxNTE2OTUyNjk3MDAwNDUy",
                "snippet": {
                    "publishedAt": "2018-01-26T07:44:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.4.1 Masters Theorem in Algorithms for Dividing Function #1",
                    "description": "Masters Theorem for Dividing Functions\nExplained All cases with Examples\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OynWkEj0S-s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OynWkEj0S-s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OynWkEj0S-s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "CwGYcTUm6rFtesqybvPFS3vJkwI",
                "id": "MTE1MTY5NTI2OTIxNTE2OTUyNjkyMDAwMDAw",
                "snippet": {
                    "publishedAt": "2018-01-26T07:44:52+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.4.2 Examples for Master Theorem #2",
                    "description": "Examples for all cases of  Master Theorem\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "zRRkFi48hgHeVd3fdMXKx1YiQbc",
                "id": "MTUxNTE2OTUyNTQyMTUxNjk1MjU0MjAwMDU5Mg",
                "snippet": {
                    "publishedAt": "2018-01-26T07:42:22+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.4.2 Examples for Master Theorem #2",
                    "description": "Examples for all cases of  Master Theorem\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/kGcO-nAm9Vc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "rBhnW8lJ5HeJkufpj-7geSzVNmM",
                "id": "MTUxNTE2OTQ5MDY0MTUxNjk0OTA2NDAwMDY2Ng",
                "snippet": {
                    "publishedAt": "2018-01-26T06:44:24+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.4.1 Masters Theorem in Algorithms for Dividing Function #1",
                    "description": "Masters Theorem for Dividing Functions\nExplained All cases with Examples\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OynWkEj0S-s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OynWkEj0S-s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OynWkEj0S-s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "US6yPFWviD4S4CM1FsTzMZJrZdg",
                "id": "MTUxNTE2OTQyMjM4MTUxNjk0MjIzODAwMDc5Ng",
                "snippet": {
                    "publishedAt": "2018-01-26T04:50:38+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.5 Root function (Recurrence Relation)",
                    "description": "Recurrence Relation for Root Function\n\nsolved using Substitution method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9rVuyjxzwgM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "cbZKauwOy6zX0BuxKFVkW59KDFw",
                "id": "MTUxNTE2OTQxNjk1MTUxNjk0MTY5NTAwMDUzMQ",
                "snippet": {
                    "publishedAt": "2018-01-26T04:41:35+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.3.3 Recurrence Relation [ T(n)= 2T(n/2) +n]  #3",
                    "description": "Recurrence Relation for Dividing Function\n\nExample : T(n)= 2T(n/2) + n\n\nSolved using Recursion Tree and Back Substitution Method\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1K9ebQJosvo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1K9ebQJosvo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1K9ebQJosvo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "L8iM00cxQBDREcSxAhz2orV3rlY",
                "id": "MTUxNTE2OTQwMTM5MTUxNjk0MDEzOTAwMDU2NA",
                "snippet": {
                    "publishedAt": "2018-01-26T04:15:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.3.2 Recurrence Relation Dividing [ T(n)=T(n/2)+ n].   #2",
                    "description": "Recurrence Relation for Dividing Functions\nExample : T(n)= T(n/2) + n\n\nsolved using Recursion Tree and Back Substitution Method\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XcZw01FuH18/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XcZw01FuH18/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XcZw01FuH18/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "WpQgJLQfG_RlH9gTaDhObMxJUeQ",
                "id": "MTE1MTY4MjA2MDYxNTE2ODIwNjA2MDAwNDU5",
                "snippet": {
                    "publishedAt": "2018-01-24T19:03:26+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.3.1 Recurrence Relation Dividing Function T(n)=T(n/2)+1 #1",
                    "description": "Recurrence Relation for Dividing Function\nExample : T(n) = T(n/2) +1 \n\nexplained using Recursion Tree and Back Substitution Method\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "6BLeGETJdJl2LctUDx4wFeAoVwM",
                "id": "MTE1MTY4MjA1OTkxNTE2ODIwNTk5MDAwNzY2",
                "snippet": {
                    "publishedAt": "2018-01-24T19:03:19+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.2 Masters Theorem Decreasing Function",
                    "description": "Masters Theorem for Decreasing Function\n\nT(n)=a T(n-b) +f(n)\n\ncase 1: if a less than 1 then T(n)=O(f(n))\ncase 2: if equal 1 then T(n)=O(n*f(n))\ncase 3: if a greater than 1 then T(n)=O(f(n) a n/b)\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Ng-Vm341MxEQwfG4bJ4XI3ThY3o",
                "id": "MTE1MTY4MjA1OTIxNTE2ODIwNTkyMDAwNjc2",
                "snippet": {
                    "publishedAt": "2018-01-24T19:03:12+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.4 Recurrence Relation T(n)=2 T(n-1)+1  #4",
                    "description": "Recurrence Relation for Decreasing/ Subtracting Functions\n\nExample : T(n) = 2 T(n-1) +1\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JvcqtZk2mng/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JvcqtZk2mng/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JvcqtZk2mng/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wzd8E2y8CzQ8o-AAHF1k1VFKwXU",
                "id": "MTUxNTE2ODIwNDkzMTUxNjgyMDQ5MzAwMDczNg",
                "snippet": {
                    "publishedAt": "2018-01-24T19:01:33+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.3.1 Recurrence Relation Dividing Function T(n)=T(n/2)+1 #1",
                    "description": "Recurrence Relation for Dividing Function\nExample : T(n) = T(n/2) +1 \n\nexplained using Recursion Tree and Back Substitution Method\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8gt0D0IqU5w/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9jrpew51XiEvcKrV_VK3iItKSVE",
                "id": "MTUxNTE2ODIwMTM5MTUxNjgyMDEzOTAwMDM5OQ",
                "snippet": {
                    "publishedAt": "2018-01-24T18:55:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.2 Masters Theorem Decreasing Function",
                    "description": "Masters Theorem for Decreasing Function\n\nT(n)=a T(n-b) +f(n)\n\ncase 1: if a less than 1 then T(n)=O(f(n))\ncase 2: if equal 1 then T(n)=O(n*f(n))\ncase 3: if a greater than 1 then T(n)=O(f(n) a n/b)\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/CyknhZbfMqc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HD1QMNAjxQ4tQnjoremz7In7E9c",
                "id": "MTUxNTE2ODIwMDM5MTUxNjgyMDAzOTAwMDc0Nw",
                "snippet": {
                    "publishedAt": "2018-01-24T18:53:59+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.4 Recurrence Relation T(n)=2 T(n-1)+1  #4",
                    "description": "Recurrence Relation for Decreasing/ Subtracting Functions\n\nExample : T(n) = 2 T(n-1) +1\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JvcqtZk2mng/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JvcqtZk2mng/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JvcqtZk2mng/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Za5U3Fg5JhuHSl1rj6UA_PaHZt8",
                "id": "MTE1MTY3ODAzNTQxNTE2NzgwMzU0MDAwNjg1",
                "snippet": {
                    "publishedAt": "2018-01-24T07:52:34+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.3 Recurrence Relation (T(n)= T(n-1) + log n) #3",
                    "description": "Recurrence Relation for Decreasing Function\nExample : T(n)= T(n-1) + log n\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Vzwun--Ygbzz8a2OZxWj11jqvig",
                "id": "MTUxNTE2NzQxODg0MTUxNjc0MTg4NDAwMDQ2NQ",
                "snippet": {
                    "publishedAt": "2018-01-23T21:11:24+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.3 Recurrence Relation (T(n)= T(n-1) + log n) #3",
                    "description": "Recurrence Relation for Decreasing Function\nExample : T(n)= T(n-1) + log n\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/MhT7XmxhaCE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "VGdyvsDaM-JGXtqN5vQvD4Qbwns",
                "id": "MTE1MTY3NDAxOTExNTE2NzQwMTkxMDAwMDg5",
                "snippet": {
                    "publishedAt": "2018-01-23T20:43:11+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.2 Recurrence Relation (T(n)= T(n-1) + n) #2",
                    "description": "Recurrence Relation for Decreasing Function\nExample : T(n)= T(n-1) +n\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "csGKDpn2Efrc5paDAEoyeDAOzpA",
                "id": "MTUxNTE2NzQwMTg5MTUxNjc0MDE4OTAwMDY4Nw",
                "snippet": {
                    "publishedAt": "2018-01-23T20:43:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.2 Recurrence Relation (T(n)= T(n-1) + n) #2",
                    "description": "Recurrence Relation for Decreasing Function\nExample : T(n)= T(n-1) +n\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/IawM82BQ4II/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hTFik7Lm82DD1jrUnwKQpWg4ISg",
                "id": "MTE1MTY2NTI3NjYxNTE2NjUyNzY2MDAwMjQ4",
                "snippet": {
                    "publishedAt": "2018-01-22T20:26:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.1 Recurrence Relation (T(n)= T(n-1) + 1) #1",
                    "description": "Recurrence Relation for Decreasing Function\nExample : T(n)= T(n-1) +1\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "KlqhH1Gw8fg4kOjv8SmFfFJ9dQU",
                "id": "MTUxNTE2NjQ4ODg0MTUxNjY0ODg4NDAwMDg5Nw",
                "snippet": {
                    "publishedAt": "2018-01-22T19:21:24+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2.1.1 Recurrence Relation (T(n)= T(n-1) + 1) #1",
                    "description": "Recurrence Relation for Decreasing Function\nExample : T(n)= T(n-1) +1\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4V30R3I1vLI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2Vl61vs0RceNKVgN2vfYMyht338",
                "id": "MTE1MTY2NDQ0ODkxNTE2NjQ0NDg5MDAwNzg0",
                "snippet": {
                    "publishedAt": "2018-01-22T18:08:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2 Divide And Conquer",
                    "description": "What is Divide and Conquer Strategy\nGeneral Method for Divide and Conquer\nTypes of Problems\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "JnmSqmQOPufNOmIqOEs95ZEOOP8",
                "id": "MTUxNTE2NjQ0NDg3MTUxNjY0NDQ4NzAwMDc0Ng",
                "snippet": {
                    "publishedAt": "2018-01-22T18:08:07+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "2 Divide And Conquer",
                    "description": "What is Divide and Conquer Strategy\nGeneral Method for Divide and Conquer\nTypes of Problems\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2Rr2tW9zvRg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "N0IukKdFsgUuu3WJZPWWVBk6NZc",
                "id": "MTUxNTE2NTY3MTk2MTUxNjU2NzE5NjAwMDEwNw",
                "snippet": {
                    "publishedAt": "2018-01-21T20:39:56+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.11 Best Worst and Average Case Analysis",
                    "description": "Case Analysis Discussed in this video\n\n1. Best\n2. Worst\n3.Average \n\nExamples Taken\n\n1. Linear Search\n2. Binary Search Tree\n\nMin time in Worst Case\nMax time in Worst Case \nare also discussed.\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lj3E24nnPjI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "FBR057JRvowNJ-dbHS2fY9GbmkM",
                "id": "MTE1MTYzNDQ2NjcxNTE2MzQ0NjY3MDAwOTkx",
                "snippet": {
                    "publishedAt": "2018-01-19T06:51:07+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.9 Properties of Asymptotic Notations",
                    "description": "Properties of Asymptotic Notation\n\nGeneral Property\nReflexive Property\nSymmetric Property\nTranspose Property\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "gn0o1V0gxVTPBJQT9P1VG_8_DyI",
                "id": "MTE1MTYzNDMyNTQxNTE2MzQzMjU0MDAwNjc2",
                "snippet": {
                    "publishedAt": "2018-01-19T06:27:34+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.10.1 Comparison of Functions #1",
                    "description": "Comparing Complex Functions\n\nTwo functions can be compared by\n\n1.Substitution\n2. Applying Log\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "n9Xg3-CEVJ5BCITLqiEtwqqAdsc",
                "id": "MTE1MTYzNDMyNTQxNTE2MzQzMjU0MDAwMzc5",
                "snippet": {
                    "publishedAt": "2018-01-19T06:27:34+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.8.2 Asymptotic Notations - Big Oh - Omega - Theta #2",
                    "description": "Asymptotic Notations\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "6t7HlZXyApUwJeN94hU7doXxiAE",
                "id": "MTE1MTYzNDMyNTQxNTE2MzQzMjU0MDAwMDY3",
                "snippet": {
                    "publishedAt": "2018-01-19T06:27:34+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.10.2 Comparison of Functions #2",
                    "description": "Comparing Complex Functions\n\nTwo functions can be compared by\n\n1.Substitution\n2. Applying Log\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "XBMwq-O7862XZEC6cWU50Sn2i9c",
                "id": "MTUxNTE2MzQxNjY0MTUxNjM0MTY2NDAwMDA4MA",
                "snippet": {
                    "publishedAt": "2018-01-19T06:01:04+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.10.2 Comparison of Functions #2",
                    "description": "Comparing Complex Functions\n\nTwo functions can be compared by\n\n1.Substitution\n2. Applying Log\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WlBBTSL0ZRc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Dc1nz9cIqzbCUh0h1Twr_BOVhgs",
                "id": "MTUxNTE2MzQxMDMwMTUxNjM0MTAzMDAwMDM0NQ",
                "snippet": {
                    "publishedAt": "2018-01-19T05:50:30+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.10.1 Comparison of Functions #1",
                    "description": "Comparing Complex Functions\n\nTwo functions can be compared by\n\n1.Substitution\n2. Applying Log\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/mwN18xfwNhk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "xtwVWgG1HlvqakFMiXWJbDowdN0",
                "id": "MTUxNTE2MzM1NDQ0MTUxNjMzNTQ0NDAwMDc3OQ",
                "snippet": {
                    "publishedAt": "2018-01-19T04:17:24+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.9 Properties of Asymptotic Notations",
                    "description": "Properties of Asymptotic Notation\n\nGeneral Property\nReflexive Property\nSymmetric Property\nTranspose Property\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/NI4OKSvGAgM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "7xUAAI5Xs-OB8UXUFok7_kxbu8g",
                "id": "MTE1MTYyODM3NDcxNTE2MjgzNzQ3MDAwMDAw",
                "snippet": {
                    "publishedAt": "2018-01-18T13:55:47+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.5.2 Time Complexity Example #2",
                    "description": "Time Complexity Examples\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9SgLBjXqwd4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9SgLBjXqwd4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9SgLBjXqwd4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "iN3g5YdGE6z0LsuM5M9fNyH6d6U",
                "id": "MTE1MTYyODM3MTYxNTE2MjgzNzE2MDAwOTE4",
                "snippet": {
                    "publishedAt": "2018-01-18T13:55:16+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.6 Classes of functions",
                    "description": "classes of time and space functions\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Cbbz1WLwQIoYEjeHDkuEDAIzCw0",
                "id": "MTE1MTYyODM2OTcxNTE2MjgzNjk3MDAwODAy",
                "snippet": {
                    "publishedAt": "2018-01-18T13:54:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.7 Compare Class of Functions",
                    "description": "Compare Class of Functions\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "0HG9t3MK5whQKA7l0rgxcRacufw",
                "id": "MTE1MTYyODM2NDAxNTE2MjgzNjQwMDAwODgx",
                "snippet": {
                    "publishedAt": "2018-01-18T13:54:00+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.8.1 Asymptotic Notations Big Oh - Omega - Theta #1",
                    "description": "Asymptotic Notations #1\nBig - Oh \nOmega\nTheta\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-CRE6FdoJVEfEY7VGDI0TlH9fMU",
                "id": "MTE1MTYyODM1ODYxNTE2MjgzNTg2MDAwNzgw",
                "snippet": {
                    "publishedAt": "2018-01-18T13:53:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.1 Priori Analysis and Posteriori Testing",
                    "description": "Difference between Priori Analysis and Posteriori Testing\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-JTq1BFBwmo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-JTq1BFBwmo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-JTq1BFBwmo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kpIZaZgvor_c1GpR8DLkGat4ogc",
                "id": "MTE1MTYyODM1NjYxNTE2MjgzNTY2MDAwMzc1",
                "snippet": {
                    "publishedAt": "2018-01-18T13:52:46+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.2 Characteristics of Algorithm",
                    "description": "Characteristics of Algorithms\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "zYaIiklDtO0odiPWml5CV8TNVKE",
                "id": "MTE1MTYyODM1MzExNTE2MjgzNTMxMDAwOTQ0",
                "snippet": {
                    "publishedAt": "2018-01-18T13:52:11+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.3 How Write and Analyze Algorithm",
                    "description": "How to Write Algorithm\nHow to Analyse Simple Algorithm.\nCriteria for Analysing Algorithm\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hslVzV0avYZ5ke3yPSg500SDixc",
                "id": "MTE1MTYyODM1MTExNTE2MjgzNTExMDAwOTc3",
                "snippet": {
                    "publishedAt": "2018-01-18T13:51:51+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.4 Frequency Count Method",
                    "description": "Frequency count method\n\nAnalysis of Algorithm with loops\n\nnested loops\n\nSum of All elements in an array\n\nAdding 2 Matrices\n\nMultiplying 2 Matrices\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1U3Uwct45IY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1U3Uwct45IY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1U3Uwct45IY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "xabpcj-r6MD_WUkPsf-sxAeWkG0",
                "id": "MTE1MTYyODM0OTYxNTE2MjgzNDk2MDAwODcw",
                "snippet": {
                    "publishedAt": "2018-01-18T13:51:36+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.5.1 Time Complexity #1",
                    "description": "Finding Time Complexity of Different kind of snippets\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "c_p5MSlkn9Wk4KwW0PWtbCTCZiE",
                "id": "MTE1MTYyODMzNDUxNTE2MjgzMzQ1MDAwNDky",
                "snippet": {
                    "publishedAt": "2018-01-18T13:49:05+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1. Introduction to Algorithms",
                    "description": "Introduction to Algorithms\n\nIntroduction to course.\n\nWhy we write Algorithm?\nWho writes Algorithm?\nWhen Algorithms are written?\n\nDifferences between Algorithms and Programs\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "dHr1civbhrV-_kGxCfb74ZBoEcc",
                "id": "MTUxNTE2MjgwMjk3MTUxNjI4MDI5NzAwMDYzMA",
                "snippet": {
                    "publishedAt": "2018-01-18T12:58:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.8.2 Asymptotic Notations - Big Oh - Omega - Theta #2",
                    "description": "Asymptotic Notations\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Nd0XDY-jVHs/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "M8KelFltcvywoQd55OqsjLPJVW0",
                "id": "MTUxNTE2MjgwMjc4MTUxNjI4MDI3ODAwMDQzMg",
                "snippet": {
                    "publishedAt": "2018-01-18T12:57:58+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.8.1 Asymptotic Notations Big Oh - Omega - Theta #1",
                    "description": "Asymptotic Notations #1\nBig - Oh \nOmega\nTheta\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/A03oI0znAoc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "xpCDHQ6Xn0aC1JmxKTJRh1Tjh2Q",
                "id": "MTUxNTE2MjgwMjU4MTUxNjI4MDI1ODAwMDc0NA",
                "snippet": {
                    "publishedAt": "2018-01-18T12:57:38+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.7 Compare Class of Functions",
                    "description": "Compare Class of Functions\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/5v-tKX2uRAk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uWFdsUYP4JI__O51KjSIGYGPlAw",
                "id": "MTUxNTE2MjgwMjM1MTUxNjI4MDIzNTAwMDQ3MQ",
                "snippet": {
                    "publishedAt": "2018-01-18T12:57:15+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.6 Classes of functions",
                    "description": "classes of time and space functions\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/w7t4_JUUTeg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BN0LS4LsFhTvxcJEU7rqDhBIaek",
                "id": "MTUxNTE2MjgwMjA5MTUxNjI4MDIwOTAwMDg5MQ",
                "snippet": {
                    "publishedAt": "2018-01-18T12:56:49+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.5.2 Time Complexity Example #2",
                    "description": "Time Complexity Examples\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9SgLBjXqwd4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9SgLBjXqwd4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9SgLBjXqwd4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EhtmNgajuP6RKp1SujnAHzAkBv0",
                "id": "MTUxNTE2MjgwMTg3MTUxNjI4MDE4NzAwMDE4Ng",
                "snippet": {
                    "publishedAt": "2018-01-18T12:56:27+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.5.1 Time Complexity #1",
                    "description": "Finding Time Complexity of Different kind of snippets\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9TlHvipP5yA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "1D-Mb78s1EnULYtAdzIU61tZBuA",
                "id": "MTUxNTE2MjgwMTYzMTUxNjI4MDE2MzAwMDU5MA",
                "snippet": {
                    "publishedAt": "2018-01-18T12:56:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.4 Frequency Count Method",
                    "description": "Frequency count method\n\nAnalysis of Algorithm with loops\n\nnested loops\n\nSum of All elements in an array\n\nAdding 2 Matrices\n\nMultiplying 2 Matrices\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1U3Uwct45IY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1U3Uwct45IY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1U3Uwct45IY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "X5mnkoDuYUbrdWVP4ni5UD76WcI",
                "id": "MTUxNTE2MjgwMTI2MTUxNjI4MDEyNjAwMDM4OA",
                "snippet": {
                    "publishedAt": "2018-01-18T12:55:26+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.3 How Write and Analyze Algorithm",
                    "description": "How to Write Algorithm\nHow to Analyse Simple Algorithm.\nCriteria for Analysing Algorithm\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xGYsEqe9Vl0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "h_Ct_zBGcqnIqTSoP2uGsLFbLS4",
                "id": "MTUxNTE2MjgwMDk3MTUxNjI4MDA5NzAwMDMzMQ",
                "snippet": {
                    "publishedAt": "2018-01-18T12:54:57+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1.2 Characteristics of Algorithm",
                    "description": "Characteristics of Algorithms\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/FbYzBWdhMb0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "t6rxZzH2-0JL5lZf5WJizzkuslg",
                "id": "MTUxNTE2MjgwMDY5MTUxNjI4MDA2OTAwMDkwNA",
                "snippet": {
                    "publishedAt": "2018-01-18T12:54:29+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "1. Introduction to Algorithms",
                    "description": "Introduction to Algorithms\n\nIntroduction to course.\n\nWhy we write Algorithm?\nWho writes Algorithm?\nWhen Algorithms are written?\n\nDifferences between Algorithms and Programs\n\nPATREON : https://www.patreon.com/bePatron?u=20475192\n\nCourses on Udemy\n================\nJava Programming\nhttps://www.udemy.com/course/java-se-programming/?referralCode=C71BADEAA4E7332D62B6\n\nData Structures using C and C++\nhttps://www.udemy.com/course/datastructurescncpp/?referralCode=BD2EF8E61A98AB5E011D\n\nC++ Programming\nhttps://www.udemy.com/course/cpp-deep-dive/?referralCode=E4246A516919D7E84225",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0IAPZzGSbME/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3I26mMAO1_jYJbJ1ni6Ajk7QYmE",
                "id": "MTUxNDgzNjMyMTk3MTQ4MzYzMjE5NzAwMDA3OQ",
                "snippet": {
                    "publishedAt": "2017-01-05T16:03:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Why Object Orientation - Hindi",
                    "description": "This video is for Engineering Graduate, to understand the different Programming styles.\ndrawback of each style are explained and how the new styles have developed.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bldw3Q6Z-ME/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bldw3Q6Z-ME/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bldw3Q6Z-ME/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bldw3Q6Z-ME/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bldw3Q6Z-ME/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "eZVlzzfDB2qycDD04_LThHiC85M",
                "id": "MTE0ODMzNzY0NDgxNDgzMzc2NDQ4MDAwMzEw",
                "snippet": {
                    "publishedAt": "2017-01-02T17:00:48+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Listeners Coding Styles #7",
                    "description": "There various styles of writing code in java, in AWT programming, there is possibility of using different styles. depending on the design.\nthis video cover 5 styles of coding for same AWT application",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "a54NQdTOUe-qN8lOJOil6Q6_NFE",
                "id": "MTUxNDgzMzc2MzYwMTQ4MzM3NjM2MDAwMDQ3OA",
                "snippet": {
                    "publishedAt": "2017-01-02T16:59:20+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Listeners Coding Styles #7",
                    "description": "There various styles of writing code in java, in AWT programming, there is possibility of using different styles. depending on the design.\nthis video cover 5 styles of coding for same AWT application",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8-h_UVoznwY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "lqDikkb9ZvjUz8WOfFODHT8M14U",
                "id": "MTE0ODMzNDM5MjExNDgzMzQzOTIxMDAwNjQ3",
                "snippet": {
                    "publishedAt": "2017-01-02T07:58:41+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Coding Styles #6",
                    "description": "Three different Styles of writing code to develop same application.\nThis application is without event handling.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "y4HeBNe9UDDJqSQ0ABod689tZSw",
                "id": "MTE0ODMzNDM5MTYxNDgzMzQzOTE2MDAwNTA4",
                "snippet": {
                    "publishedAt": "2017-01-02T07:58:36+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Event Listeners #5",
                    "description": "Listener interfaces for Java AWT Event Handling.\nListeners and their methods",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "TeOH6rp-EB16i1DAxA6nUylZfJ0",
                "id": "MTE0ODMzNDM5MTAxNDgzMzQzOTEwMDAwNTkw",
                "snippet": {
                    "publishedAt": "2017-01-02T07:58:30+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Event Classes #4",
                    "description": "Events in Java AWT.\nEvent classes. Methods and constants of Event classes.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "QUrn00Va19Pt2uYUxHNC8DmeG2Q",
                "id": "MTUxNDgzMjg2NzA0MTQ4MzI4NjcwNDAwMDQzNg",
                "snippet": {
                    "publishedAt": "2017-01-01T16:05:04+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Coding Styles #6",
                    "description": "Three different Styles of writing code to develop same application.\nThis application is without event handling.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/O5ykzt7Hgxk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "dF5FD7YdIafnygKkjMDICSHX84E",
                "id": "MTUxNDgzMjgyMjI3MTQ4MzI4MjIyNzAwMDIyMw",
                "snippet": {
                    "publishedAt": "2017-01-01T14:50:27+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Event Listeners #5",
                    "description": "Listener interfaces for Java AWT Event Handling.\nListeners and their methods",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8L92MCmdUHw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Zjwc4indbda_k2sWcOs0-i7IU-0",
                "id": "MTUxNDgzMjc5MDY0MTQ4MzI3OTA2NDAwMDM1NA",
                "snippet": {
                    "publishedAt": "2017-01-01T13:57:44+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Event Classes #4",
                    "description": "Events in Java AWT.\nEvent classes. Methods and constants of Event classes.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/CM7fnItrNr0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "h0AgHTJcg4qUrWgddlYj0dQ7ALo",
                "id": "MTE0ODMyNzQ4MDgxNDgzMjc0ODA4MDAwNTkw",
                "snippet": {
                    "publishedAt": "2017-01-01T12:46:48+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Event Handling #3",
                    "description": "How to handle a event. Event Delegation in Java. with an example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uGabadYi4tbzKkNtgIiBqWN-NMQ",
                "id": "MTUxNDgzMjc0Mjk5MTQ4MzI3NDI5OTAwMDIzNw",
                "snippet": {
                    "publishedAt": "2017-01-01T12:38:19+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Event Handling #3",
                    "description": "How to handle a event. Event Delegation in Java. with an example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/UaenPz_ERVU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MLXqTjzutfXlxjhb4wrv4-dkvDA",
                "id": "MTE0ODMxOTQwNjYxNDgzMTk0MDY2MDAwOTU0",
                "snippet": {
                    "publishedAt": "2016-12-31T14:21:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Pointer Arithmetic - *p++;  *++p; ++*p;",
                    "description": "Arithmetic Operations allowed on pointers, Result of each operation",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "b5Din6LAoAgQodzOOJw5-R_BomY",
                "id": "MTE0ODMxOTQwNjYxNDgzMTk0MDY2MDAwOTAw",
                "snippet": {
                    "publishedAt": "2016-12-31T14:21:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Why Pointers?",
                    "description": "Accessing Heap , Files and other resources using pointers.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EohR8664zNAkyN9ii67rMgMfmPc",
                "id": "MTE0ODMxOTQwNjYxNDgzMTk0MDY2MDAwNzIx",
                "snippet": {
                    "publishedAt": "2016-12-31T14:21:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Pointer to Array",
                    "description": "Pointer to 1D Arrays and 2D Arrays. This covers All possible Syntax of statements, when pointer is pointing to an Array.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "alPiDReqlNn5361SlwTMe70rS98",
                "id": "MTE0ODMxOTQwNjYxNDgzMTk0MDY2MDAwNjM4",
                "snippet": {
                    "publishedAt": "2016-12-31T14:21:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Stack vs Heap",
                    "description": "How Stack and Heap Memory is used by programs",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tMvezMe-VNS7Ip30Mx__E4Pfug8",
                "id": "MTE0ODMxOTQwNjYxNDgzMTk0MDY2MDAwMzg1",
                "snippet": {
                    "publishedAt": "2016-12-31T14:21:06+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Recursion and Stack - English",
                    "description": "This video explains how stack is used for running recursive functions. Tracing of Function calls, Nested Calls and Recursive functions.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "nZVBeNRABIZm1n2NES0CXl9jJT8",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwOTkw",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Asymptotic Notations - Simplified",
                    "description": "Asymptotic Notations. big Oh O notation, Omega and Theta Notation.\nA very simple and easy way to understand Asymptotic notations",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "PcXzEUOQbG5ESLXuJdlDoaw0Cyo",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwOTcz",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Hashing Technique - Simplified",
                    "description": "Hashing Technique : its a searching technique, designed using mathematical model of functions. its fastest searching technique. ideal hashing takes O(1)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "1bZbi6mr69IiwFfi0hCcQXXCT2A",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwNDg5",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Shortest Path Algorithms (Dijkstra and Bellman-Ford)  - Simplified",
                    "description": "Shortest path algorithms, Dijkstra and Bellman-Ford algorithm.\nAlgorithms explained with multiple examples, in a different way.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MJnvNAT-u80LrySlheSt1TQg4Po",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwNDU3",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Tower of Hanoi Problem - Made Easy",
                    "description": "This video shows how to device an Algorithm for Tower of Hanoi Problem and also Trace the Algorithm for 3 Discs Problem.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Cy1xpwM6AciAKuFJcsHUT3Mi0Qs",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwMzMx",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Merge Sort Algorithm - Hindi",
                    "description": "Merge Sort Algorithm Explained in Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "WAEDkMKZG-eFPozb4rlHjEhy-0s",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwMDA5",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "BFS DFS - Simplified",
                    "description": "Breadth First Search and Depth First Search Traversal Methods of a Graph. with valid and invalid examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "bZP2xmfV85c2ea7E6dWlxx4txQ0",
                "id": "MTE0ODMxOTM5NDMxNDgzMTkzOTQzMDAwMDA3",
                "snippet": {
                    "publishedAt": "2016-12-31T14:19:03+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Row-Major and Column-Major Mapping",
                    "description": "Relative address is used by compiler to get the address of any location in an Array. For Arrays with more than 2D, compilers use Row-Major or Column-Major Mapping",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Cw3rdYKXV0TR8CvXiOVljFWPq6w",
                "id": "MTE0ODMxOTM4MTIxNDgzMTkzODEyMDAwMjkw",
                "snippet": {
                    "publishedAt": "2016-12-31T14:16:52+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT - #1",
                    "description": "Introduction to Java AWT Components. \nWhat are Components? explained with examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uV0XPVOo2IbYNZW8ZCk2SFv4M2o",
                "id": "MTE0ODMxOTM3ODcxNDgzMTkzNzg3MDAwOTQ2",
                "snippet": {
                    "publishedAt": "2016-12-31T14:16:27+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Simple App #2",
                    "description": "Developing User Interface using Java AWT.\nSimple application\n\nEvent Handling in next video.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "vP7xi1XXBULdwgtuwS8SUMkLet8",
                "id": "MTUxNDgzMTg5NzUxMTQ4MzE4OTc1MTAwMDU4OA",
                "snippet": {
                    "publishedAt": "2016-12-31T13:09:11+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT Simple App #2",
                    "description": "Developing User Interface using Java AWT.\nSimple application\n\nEvent Handling in next video.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/hxyzF4sp8No/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "lyrCc6HfNJN9egho2IlxD4zjcuc",
                "id": "MTUxNDgzMTQwNzcxMTQ4MzE0MDc3MTAwMDM2Nw",
                "snippet": {
                    "publishedAt": "2016-12-30T23:32:51+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Java AWT - #1",
                    "description": "Introduction to Java AWT Components. \nWhat are Components? explained with examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/8D80vZHcs0g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8FvKy9Ctccccj48aMT7L6WxqWb4",
                "id": "MTUxNDgzMDU1MTA5MTQ4MzA1NTEwOTAwMDQ1MA",
                "snippet": {
                    "publishedAt": "2016-12-29T23:45:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "How Java is Platform Independent",
                    "description": "How and Why Java is platform independent, Java uses Middleware to run on different operating systems. Java is a language for internet.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/deXGenXXoaI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/deXGenXXoaI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/deXGenXXoaI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/deXGenXXoaI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/deXGenXXoaI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "laU0XTI1h1nWmbzJd4axTx7Eij8",
                "id": "MTUxNDgyNDE4ODk3MTQ4MjQxODg5NzAwMDIyNA",
                "snippet": {
                    "publishedAt": "2016-12-22T15:01:37+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Shortest Path Algorithms (Dijkstra and Bellman-Ford)  - Simplified",
                    "description": "Shortest path algorithms, Dijkstra and Bellman-Ford algorithm.\nAlgorithms explained with multiple examples, in a different way.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2raV0H9KqY8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "H-iVtR3FWJF09exvTTG1w9iYVZc",
                "id": "MTUxNDU3MzUxMjI5MTQ1NzM1MTIyOTAwMDgzOQ",
                "snippet": {
                    "publishedAt": "2016-03-07T11:47:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Websites  vs WebApps",
                    "description": "Websites are collection of web pages. developed using HTML, CSS etc.\nwhere as Web Applications are developed using HTML+CSS and with a back end support of web services or web methods.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/oj0SA_AVFNI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/oj0SA_AVFNI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/oj0SA_AVFNI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/oj0SA_AVFNI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/oj0SA_AVFNI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aHbNtFM3G_daOv1wahfXI-Y_uVk",
                "id": "MTUxNDQ1NTk1ODU3MTQ0NTU5NTg1NzAwMDMzOQ",
                "snippet": {
                    "publishedAt": "2015-10-23T10:24:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "BFS DFS - Simplified",
                    "description": "Breadth First Search and Depth First Search Traversal Methods of a Graph. with valid and invalid examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kyUpc_5705s/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "GGnAw9BXcue0urVcXj4x5Sw_k6s",
                "id": "MTUxNDQyNTE2MzQ5MTQ0MjUxNjM0OTAwMDc3MA",
                "snippet": {
                    "publishedAt": "2015-09-17T18:59:09+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Asymptotic Notations - Simplified",
                    "description": "Asymptotic Notations. big Oh O notation, Omega and Theta Notation.\nA very simple and easy way to understand Asymptotic notations",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ddsP7NecEBk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ZanVkrmZ2fDvkeL5hFM_jO2Zcuk",
                "id": "MTUxNDQyNDM2NTg3MTQ0MjQzNjU4NzAwMDA5NA",
                "snippet": {
                    "publishedAt": "2015-09-16T20:49:47+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Row-Major and Column-Major Mapping",
                    "description": "Relative address is used by compiler to get the address of any location in an Array. For Arrays with more than 2D, compilers use Row-Major or Column-Major Mapping",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MJZd6uPi88E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hGUXE04nnMUNlegXuo5cM8VyIZA",
                "id": "MTUxNDQyNDI5NTMzMTQ0MjQyOTUzMzAwMDgzMA",
                "snippet": {
                    "publishedAt": "2015-09-16T18:52:13+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Pointer to Array",
                    "description": "Pointer to 1D Arrays and 2D Arrays. This covers All possible Syntax of statements, when pointer is pointing to an Array.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/868qXWoGS9E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "gOxrbXfXJAP5rXYIUC3nw2MdsEQ",
                "id": "MTUxNDQyNDAyNjAzMTQ0MjQwMjYwMzAwMDE2OA",
                "snippet": {
                    "publishedAt": "2015-09-16T11:23:23+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Hashing Technique - Simplified",
                    "description": "Hashing Technique : its a searching technique, designed using mathematical model of functions. its fastest searching technique. ideal hashing takes O(1)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mFY0J5W8Udk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9UdQKyGyYgSW31OKW7tNbnR939g",
                "id": "MTUxNDQyMzUwODUwMTQ0MjM1MDg1MDAwMDk5MQ",
                "snippet": {
                    "publishedAt": "2015-09-15T21:00:50+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Pointer Arithmetic - *p++;  *++p; ++*p;",
                    "description": "Arithmetic Operations allowed on pointers, Result of each operation",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uMGwjNuidZU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Or9kKc4cFAmF3Sn9VhD4wmkuCso",
                "id": "MTUxNDQyMzQ5NDc5MTQ0MjM0OTQ3OTAwMDM1NQ",
                "snippet": {
                    "publishedAt": "2015-09-15T20:37:59+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Why Pointers?",
                    "description": "Accessing Heap , Files and other resources using pointers.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/OqLt2GfX6jg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "GQT9caMds96dSMcGiw0bDp4B_SY",
                "id": "MTUxNDQxOTAwNzcyMTQ0MTkwMDc3MjAwMDQ4NA",
                "snippet": {
                    "publishedAt": "2015-09-10T15:59:32+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Merge Sort Algorithm - Hindi",
                    "description": "Merge Sort Algorithm Explained in Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zXhWPrMLXGo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5BlfPJ7W8sMO4J99vGLtEUA5fjw",
                "id": "MTUxNDQxNjg2MTY3MTQ0MTY4NjE2NzAwMDQ3OQ",
                "snippet": {
                    "publishedAt": "2015-09-08T04:22:47+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Tree Traversal",
                    "description": "Shortcut to Tree Traversals Methods. Preorder , Inorder and Postorder",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xo41NfT8218/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xo41NfT8218/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xo41NfT8218/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xo41NfT8218/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "N26mY5vn-pj6eCwDRqwonAN-Tf8",
                "id": "MTUxNDQxNjg0MzMwMTQ0MTY4NDMzMDAwMDI1MQ",
                "snippet": {
                    "publishedAt": "2015-09-08T03:52:10+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Stack vs Heap",
                    "description": "How Stack and Heap Memory is used by programs",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PdvGEI-P3-M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3x-5LmGnzV0A7piuLvvZj9Gc778",
                "id": "MTEzOTk3NjE5NzcxMzk5NzYxOTc3MDAwMDI4",
                "snippet": {
                    "publishedAt": "2014-05-10T22:46:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing Benefits - Hindi - # 4",
                    "description": "Benefits of Cloud Computing. This is #4 video on Cloud Computing. Please Watch videos in sequence to get general but complete idea of Cloud Computing.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NE5yEMy9pw4QQHbPtsv9WlhcFOA",
                "id": "MTEzOTk3NjE5NjExMzk5NzYxOTYxMDAwOTcx",
                "snippet": {
                    "publishedAt": "2014-05-10T22:46:01+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing Services - Hindi - #3",
                    "description": "What type of Services provided in the Cloud. Who should use which service. Job Opportunities in Cloud Computing.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EX_Kxh7vneAuPAV4jW_H8R3L4IU",
                "id": "MTEzOTk3NjE5MzkxMzk5NzYxOTM5MDAwMjE5",
                "snippet": {
                    "publishedAt": "2014-05-10T22:45:39+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing - Hindi - #2",
                    "description": "This video is about Evolution of Cloud Computing. Starting with Evolution of Internet,  New Trends in internet and then the Formation of Clouds in Internet.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "pRiPpbIw9xd2wQ16dfAbrbuUyeU",
                "id": "MTEzOTk3NjE4OTkxMzk5NzYxODk5MDAwNjIw",
                "snippet": {
                    "publishedAt": "2014-05-10T22:44:59+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing - Hindi - #1",
                    "description": "Introduction to Cloud Computing. Cloud Computing have different aspects. this video explains technical aspect. Please give your  comment. it may help me to make better videos.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "yPJGgvXd1QxMJ30k_kHHBFWKzSY",
                "id": "MTUxMzk5NDkxNzE4MTM5OTQ5MTcxODAwMDI5Mw",
                "snippet": {
                    "publishedAt": "2014-05-07T19:41:58+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Tower of Hanoi Problem - Made Easy",
                    "description": "This video shows how to device an Algorithm for Tower of Hanoi Problem and also Trace the Algorithm for 3 Discs Problem.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q6RicK1FCUs/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "fWrzqK1Dn-5KGZ4oghUTRvn-0RY",
                "id": "MTUxMzk5NDIxMTE2MTM5OTQyMTExNjAwMDEzNg",
                "snippet": {
                    "publishedAt": "2014-05-07T00:05:16+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Middleware Technologies Explained in Hindi",
                    "description": "This video gives overview of all Middle-ware Technologies. like RPC , CORBA, RMI, Web Services  etc.\nObjective is to discuss usage of various technologies available for developing Distributed Application and their differences.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/coQAvsrHwkw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/coQAvsrHwkw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/coQAvsrHwkw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/coQAvsrHwkw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/coQAvsrHwkw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "fxea6Ul3B33CwJMliWxhMsZCdh8",
                "id": "MTUxMzk5MzI1Mjk0MTM5OTMyNTI5NDAwMDkxMg",
                "snippet": {
                    "publishedAt": "2014-05-05T21:28:14+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Recursion and Stack - English",
                    "description": "This video explains how stack is used for running recursive functions. Tracing of Function calls, Nested Calls and Recursive functions.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ygK0YON10sQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "jjGquAxnAfczR_0w3c7GGzGxmM0",
                "id": "MTUxMzk4OTc4NDk3MTM5ODk3ODQ5NzAwMDgxOA",
                "snippet": {
                    "publishedAt": "2014-05-01T21:08:17+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Model View Controller ( MVC ) - Explained in Hindi",
                    "description": "Model View Controller Architecture is a common architecture used with all the latest technologies, like Java, .NET etc.\nThis video explains how a software is developed into parts and linked.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CGoI2-kIkkc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CGoI2-kIkkc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CGoI2-kIkkc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "80dREO-PwF9FAkmru0qrUkPeR8Q",
                "id": "MTUxMzk4ODk3ODM1MTM5ODg5NzgzNTAwMDA0MQ",
                "snippet": {
                    "publishedAt": "2014-04-30T22:43:55+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing Benefits - Hindi - # 4",
                    "description": "Benefits of Cloud Computing. This is #4 video on Cloud Computing. Please Watch videos in sequence to get general but complete idea of Cloud Computing.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-v0Rp6hYf7g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MWWqLZWL3et4oIiQwdQG8SMQcY8",
                "id": "MTUxMzk4ODA0NzY2MTM5ODgwNDc2NjAwMDkzNw",
                "snippet": {
                    "publishedAt": "2014-04-29T20:52:46+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing Services - Hindi - #3",
                    "description": "What type of Services provided in the Cloud. Who should use which service. Job Opportunities in Cloud Computing.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Tu_AmhKOMH4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "CABw1bPDZUBq0dY9iEMY0mqG4lQ",
                "id": "MTUxMzk4MjA3OTMzMTM5ODIwNzkzMzAwMDQ0NQ",
                "snippet": {
                    "publishedAt": "2014-04-22T23:05:33+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing - Hindi - #2",
                    "description": "This video is about Evolution of Cloud Computing. Starting with Evolution of Internet,  New Trends in internet and then the Formation of Clouds in Internet.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4SZPm26nUEA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "K8Pltv2Y331WIMsttd406o8YqMU",
                "id": "MTUxMzk3OTg1OTgyMTM5Nzk4NTk4MjAwMDI5OA",
                "snippet": {
                    "publishedAt": "2014-04-20T09:26:22+00:00",
                    "channelId": "UCZCFT11CWBi3MHNlGf019nw",
                    "title": "Cloud Computing - Hindi - #1",
                    "description": "Introduction to Cloud Computing. Cloud Computing have different aspects. this video explains technical aspect. Please give your  comment. it may help me to make better videos.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/OcKm6vLJcA0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Abdul Bari",
                    "type": "upload"
                }
            }
        ],
        "pageInfo": {
            "totalResults": 222,
            "resultsPerPage": 256
        }
    }

]