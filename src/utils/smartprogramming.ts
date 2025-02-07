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
        standard?: Thumbnail;
        maxres?: Thumbnail;
    };
    channelTitle: string;
    type: "playlistItem" | "video" | "other";
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

export const videoDataListSProgramming: VideoListData[] = [
    {
        "kind": "youtube#activityListResponse",
        "etag": "5RM-QTzXY87SB2j8O1C6CWLXXko",
        "items": [
            {
                "kind": "youtube#activity",
                "etag": "RBkDnK1640xfJwqRWv6_1DTVJe0",
                "id": "MTUxNzExMjk4MzkzMTcxMTI5ODM5MzAwMDg5OQ",
                "snippet": {
                    "publishedAt": "2024-03-24T16:39:53+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Core Java Interview Preparation & Projects by Deepak || DSA using Java Placement Course",
                    "description": "We are starting Core Java & DSA online Live Batch.\n\nJoin Free Demo Session from 26th March 2024.\n\nCall or Whats App on +91 62838-30308 or +91 98887-55565\n\nRegister on https://smartprogramming.in/registration-form-for-online-classes.php",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6WoV1mO85b8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6WoV1mO85b8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6WoV1mO85b8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6WoV1mO85b8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6WoV1mO85b8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "qSIdiFOE1HObsf3ybMfcNutmeMI",
                "id": "MTUxNzA0MDI2ODM0MTcwNDAyNjgzNDAwMDgzOA",
                "snippet": {
                    "publishedAt": "2023-12-31T12:47:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Spring Boot Roadmap or Syllabus || Spring Boot Online Classes from 1st January 2024 by Deepak",
                    "description": "#deepak #smartprogramming #java\n#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n☀ Website : https://courses.smartprogramming.in/\n\n------------------------------------------------------------------------------------------\n\nHow to Master Spring Boot - Complete Spring Boot Roadmap\nMaster Spring Boot without Spring ? Topics to learn to master spring boot in Hindi\nRoadmap for Spring Framework & Springboot || Should I Learn Spring before Springboot\nRoadmap To Learn Spring Framework || Resources For Spring Framework || How To Learn Spring Framework\nSpring Boot Tutorial For Beginners (in Hindi) \nLearning Spring Boot | Roadmap",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6Geg3kzTaR4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6Geg3kzTaR4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6Geg3kzTaR4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6Geg3kzTaR4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6Geg3kzTaR4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_P7NOFXLEQOREP5-su5ijnA9tfI",
                "id": "MTUxNzAzODU0ODM0MTcwMzg1NDgzNDAwMDg5NQ",
                "snippet": {
                    "publishedAt": "2023-12-29T13:00:34+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#9 Autowiring in Spring Framework || XML Based Autowiring (autowire, byName, byType, constructor)",
                    "description": "#deepak #smartprogramming #java\n#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nAutowiring in Spring Framework | Best Explanation | Spring Tutorial in HINDI\nXML Based Autowiring;\nSpring | Autowire | Dependency Injection | Spring Boot\n@Autowired Annotation for Autowiring | Autowiring in Spring Framework | Spring Framework Tutorial\nSpring & Spring Boot Annotations Series - @Autowired Annotation\nSpring boot @Autowired annotation with example\nWhy autowiring in spring | XML | @Autowired | @qualifier | spring annotation tutorial for beginners\n@Qualifier Annotation with Autowiring | Spring Framework Tutorial\nSpring Framework Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "h-EcNT0ZkaTLzH227bmla4_ZBZI",
                "id": "MTE3MDM4NTE3NTMxNzAzODUxNzUzMDAwNjY5",
                "snippet": {
                    "publishedAt": "2023-12-29T12:09:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#9 Autowiring in Spring Framework || XML Based Autowiring (autowire, byName, byType, constructor)",
                    "description": "#deepak #smartprogramming #java\n#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nAutowiring in Spring Framework | Best Explanation | Spring Tutorial in HINDI\nXML Based Autowiring;\nSpring | Autowire | Dependency Injection | Spring Boot\n@Autowired Annotation for Autowiring | Autowiring in Spring Framework | Spring Framework Tutorial\nSpring & Spring Boot Annotations Series - @Autowired Annotation\nSpring boot @Autowired annotation with example\nWhy autowiring in spring | XML | @Autowired | @qualifier | spring annotation tutorial for beginners\n@Qualifier Annotation with Autowiring | Spring Framework Tutorial\nSpring Framework Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/cUpUWuQldhU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "JB1ONui4spLAZOP5XLzaD3bcPaE",
                "id": "MTUxNzAzMjUwMDEzMTcwMzI1MDAxMzAwMDM4OA",
                "snippet": {
                    "publishedAt": "2023-12-22T13:00:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#8 Autowiring in Spring Framework || @Autowired & @Qualifier Annotations with Programs Hindi",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nAutowiring in Spring Framework | Best Explanation | Spring Tutorial in HINDI\nSpring | Autowire | Dependency Injection | Spring Boot\n@Autowired Annotation for Autowiring | Autowiring in Spring Framework | Spring Framework Tutorial\nSpring & Spring Boot Annotations Series - @Autowired Annotation\nSpring boot @Autowired annotation with example\nWhy autowiring in spring | XML | @Autowired | @qualifier | spring annotation tutorial for beginners\n@Qualifier Annotation with Autowiring | Spring Framework Tutorial\nSpring Framework Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aCg1rCczu5H2NSi1t71WIhjK22M",
                "id": "MTE3MDMyNDY2NDExNzAzMjQ2NjQxMDAwOTYx",
                "snippet": {
                    "publishedAt": "2023-12-22T12:04:01+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#8 Autowiring in Spring Framework || @Autowired & @Qualifier Annotations with Programs Hindi",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nAutowiring in Spring Framework | Best Explanation | Spring Tutorial in HINDI\nSpring | Autowire | Dependency Injection | Spring Boot\n@Autowired Annotation for Autowiring | Autowiring in Spring Framework | Spring Framework Tutorial\nSpring & Spring Boot Annotations Series - @Autowired Annotation\nSpring boot @Autowired annotation with example\nWhy autowiring in spring | XML | @Autowired | @qualifier | spring annotation tutorial for beginners\n@Qualifier Annotation with Autowiring | Spring Framework Tutorial\nSpring Framework Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AAJkZNG7d_M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "p8JZHJLY4DlCGNpHeNqGg9a6O50",
                "id": "MTUxNzAyOTkwODM1MTcwMjk5MDgzNTAwMDQyMw",
                "snippet": {
                    "publishedAt": "2023-12-19T13:00:35+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#7 Dependency Injection | Setter Method DI & Constructor DI using Java Configuration in Spring Hindi",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n-------------------------------\n\nTopics related to this tutorial are as below :-\nWays of Injecting dependencies | Types of dependencies handled by IOC Container | Spring Tutorial\nSetter & Constructor Injection in SPRING : Injecting literal values | DEPENDENCY injection in spring\nExplore spring dependency injection - step by step || injecting objects | spring framework tutorial\nSpring Tutorial 8 - Dependency Injection using setter method way ( Hands on using Eclipse IDE )\nDependency Injection Explained\nWhat is Dependency Injection and IOC in Spring ?",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "0NwK9Sbgd02tiUiI1B-WZDPqWxo",
                "id": "MTE3MDI5ODM0MDAxNzAyOTgzNDAwMDAwNzk1",
                "snippet": {
                    "publishedAt": "2023-12-19T10:56:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#7 Dependency Injection | Setter Method DI & Constructor DI using Java Configuration in Spring Hindi",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n-------------------------------\n\nTopics related to this tutorial are as below :-\nWays of Injecting dependencies | Types of dependencies handled by IOC Container | Spring Tutorial\nSetter & Constructor Injection in SPRING : Injecting literal values | DEPENDENCY injection in spring\nExplore spring dependency injection - step by step || injecting objects | spring framework tutorial\nSpring Tutorial 8 - Dependency Injection using setter method way ( Hands on using Eclipse IDE )\nDependency Injection Explained\nWhat is Dependency Injection and IOC in Spring ?",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bN-mJ5uIJ9E/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "RnxYegHM7tiLsdIDFMYFsIwrn2c",
                "id": "MTUxNjk4OTMwMDM2MTY5ODkzMDAzNjAwMDgxNQ",
                "snippet": {
                    "publishedAt": "2023-11-02T13:00:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#6 Ways of Injecting dependencies | Setter Method & Constructor Dependency Injection in Spring Hindi",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n-------------------------------\n\nTopics related to this tutorial are as below :-\nWays of Injecting dependencies | Types of dependencies handled by IOC Container | Spring Tutorial\nSetter & Constructor Injection in SPRING : Injecting literal values | DEPENDENCY injection in spring\nExplore spring dependency injection - step by step || injecting objects | spring framework tutorial\nSpring Tutorial 8 - Dependency Injection using setter method way ( Hands on using Eclipse IDE )\nDependency Injection Explained\nWhat is Dependency Injection and IOC in Spring ?",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "XQYOjn7dA3ZfoHGHt36USGD_7-g",
                "id": "MTE2OTg5MjI3MTAxNjk4OTIyNzEwMDAwMTI3",
                "snippet": {
                    "publishedAt": "2023-11-02T10:58:30+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#6 Ways of Injecting dependencies | Setter Method & Constructor Dependency Injection in Spring Hindi",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n-------------------------------\n\nTopics related to this tutorial are as below :-\nWays of Injecting dependencies | Types of dependencies handled by IOC Container | Spring Tutorial\nSetter & Constructor Injection in SPRING : Injecting literal values | DEPENDENCY injection in spring\nExplore spring dependency injection - step by step || injecting objects | spring framework tutorial\nSpring Tutorial 8 - Dependency Injection using setter method way ( Hands on using Eclipse IDE )\nDependency Injection Explained\nWhat is Dependency Injection and IOC in Spring ?",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/f-LpcRJz0n8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4DyxA19KQ5poTgXNh6Z5S6KD67c",
                "id": "MTUxNjk4MDY2MDE5MTY5ODA2NjAxOTAwMDIxMg",
                "snippet": {
                    "publishedAt": "2023-10-23T13:00:19+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#5 What is Dependency Injection in Spring || Use of DI || Spring Framework Tutorials by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nWhat is Dependency Injection? | Why | Spring\nWhat is Spring Framework | Dependency Injection | Inversion of Control | Spring Core Module | HINDI\nSpring framework tutorial for beginners\nWays of Injecting dependencies | Types of dependencies handled by IOC Container | Spring Tutorial\nWhat is Dependency Injection and IOC in Spring ?",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "GFh9TH3JPlyCoziOvvCTMcgCxo8",
                "id": "MTE2OTgwNTk4OTMxNjk4MDU5ODkzMDAwMTcy",
                "snippet": {
                    "publishedAt": "2023-10-23T11:18:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#5 What is Dependency Injection in Spring || Use of DI || Spring Framework Tutorials by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nWhat is Dependency Injection? | Why | Spring\nWhat is Spring Framework | Dependency Injection | Inversion of Control | Spring Core Module | HINDI\nSpring framework tutorial for beginners\nWays of Injecting dependencies | Types of dependencies handled by IOC Container | Spring Tutorial\nWhat is Dependency Injection and IOC in Spring ?",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GXSiORuiBxo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "RT4tS6j7ZY9RN5lqexURDttvFjs",
                "id": "MTUxNjk2NzY1MjU3MTY5Njc2NTI1NzAwMDk4Mw",
                "snippet": {
                    "publishedAt": "2023-10-08T11:40:57+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Spring Bean Life Cycle || What are Spring Beans ? || Spring Framework Tutorials in Hindi",
                    "description": "#deepak #java #javatutorials\n#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nLife Cycle methods of Spring Bean | Spring Framework Tutorial in HINDI\nImplementing Bean LifeCyle using Annotations | @PostConstruct | @PreDestroy | Spring Tutorial\nREAL-TIME: Spring Bean life cycle using @PostConstruct |@PreDestroy |init - method| destroy -method\nBean Lifecycle - Overview - Spring Framework Tutorial\nLife cycle of spring beans with bean creation process in detail\nSpring Tutorial - Bean Life Cycle\nWhat are spring beans? | Spring Tutorial | Spring basics | Spring Framework",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4cT8_nNXF5CEbyPP1jGHRtssNL8",
                "id": "MTE2OTY3NjMxMTcxNjk2NzYzMTE3MDAwOTc5",
                "snippet": {
                    "publishedAt": "2023-10-08T11:05:17+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Spring Bean Life Cycle || What are Spring Beans ? || Spring Framework Tutorials in Hindi",
                    "description": "#deepak #java #javatutorials\n#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nLife Cycle methods of Spring Bean | Spring Framework Tutorial in HINDI\nImplementing Bean LifeCyle using Annotations | @PostConstruct | @PreDestroy | Spring Tutorial\nREAL-TIME: Spring Bean life cycle using @PostConstruct |@PreDestroy |init - method| destroy -method\nBean Lifecycle - Overview - Spring Framework Tutorial\nLife cycle of spring beans with bean creation process in detail\nSpring Tutorial - Bean Life Cycle\nWhat are spring beans? | Spring Tutorial | Spring basics | Spring Framework",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/LJy0Bb-breQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5RPbvvtUHWkUW6sAfr5wKwLFZTQ",
                "id": "MTUxNjk2MjUxNjQ1MTY5NjI1MTY0NTAwMDk5MA",
                "snippet": {
                    "publishedAt": "2023-10-02T13:00:45+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Spring Annotations | @Component, @Value & @ComponentScan | Annotation Based Configurations",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nTopics related to this tutorial are :-\nStereotype Annotations | @Component Annotation | @Value Annotation | Spring Tutorial in HINDI\nJava Annotations | Spring Annotation | Stereotype Annotation | @Component\nImportant Interview Question of Spring annotation : @Component, @Controller, @Repository & @Service\nSpring annotation tutorial for beginners |All In1 spring core annotations |spring framework tutorial\nAnnotations in Spring with Explanation",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-t5q6iVDsjSCRFK0275IgVJs4Ws",
                "id": "MTE2OTYyNDU0OTgxNjk2MjQ1NDk4MDAwNTM3",
                "snippet": {
                    "publishedAt": "2023-10-02T11:18:18+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Spring Annotations | @Component, @Value & @ComponentScan | Annotation Based Configurations",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nTopics related to this tutorial are :-\nStereotype Annotations | @Component Annotation | @Value Annotation | Spring Tutorial in HINDI\nJava Annotations | Spring Annotation | Stereotype Annotation | @Component\nImportant Interview Question of Spring annotation : @Component, @Controller, @Repository & @Service\nSpring annotation tutorial for beginners |All In1 spring core annotations |spring framework tutorial\nAnnotations in Spring with Explanation",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/sCQphHUZmiE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9vNp5_D2B_MUjUlCCwaD3aMEhdk",
                "id": "MTUxNjk1NjQ2ODAyMTY5NTY0NjgwMjAwMDE1NQ",
                "snippet": {
                    "publishedAt": "2023-09-25T13:00:02+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Spring Java Based Configuration Program | Java vs XML Config | @Configuration & @Bean Annotation",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nSpring Java based configuration\nSpring Core Annotation | Configuration, Bean\nRemoving Complete XML for Spring Configuration | @Configuration | @Bean Annotation\nSpring Framework Tutorial | Using Spring Java Configuration\nSpring @Configuration Annotation\nSpring Framework Tutorial For Beginners | How to Create a Spring Application from Scratch?\nSpring Core Tutorial | Annotation Based Configuration",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HWEsGLNgTVNiVo8YaAREjpzzfE8",
                "id": "MTE2OTU2MzY4NzYxNjk1NjM2ODc2MDAwMDA0",
                "snippet": {
                    "publishedAt": "2023-09-25T10:14:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Spring Java Based Configuration Program | Java vs XML Config | @Configuration & @Bean Annotation",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nSpring Java based configuration\nSpring Core Annotation | Configuration, Bean\nRemoving Complete XML for Spring Configuration | @Configuration | @Bean Annotation\nSpring Framework Tutorial | Using Spring Java Configuration\nSpring @Configuration Annotation\nSpring Framework Tutorial For Beginners | How to Create a Spring Application from Scratch?\nSpring Core Tutorial | Annotation Based Configuration",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2VcUx-boRD4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_ymeGxYeoL277_JmwUMs6wdv_PM",
                "id": "MTUxNjk1MDQyMDM4MTY5NTA0MjAzODAwMDgyNw",
                "snippet": {
                    "publishedAt": "2023-09-18T13:00:38+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 What is Spring & Advantages | Spring IOC Container & Its Working | Spring First Program Eclipse",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nWhat is Spring Framework | Dependency Injection | Inversion of Control | Spring Core Module | HINDI\nWhat is the Spring framework really all about?\nSpring IOC Container | What is Spring IOC Container | Spring Tutorial\nSpring Framework Tutorial in Hindi || Complete Spring Course for beginners\nSpring framework tutorial for beginners with examples in eclipse | Why spring inversion of control ?\nHow to Create First Spring Application in Eclipse | First Spring Application Development\nSpring Framework Tutorial in Hindi\nDeveloping First Spring Application | Spring Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "onaBA60tksJx9L8Ag0OTdDnmaWI",
                "id": "MTE2OTUwMzQ2OTQxNjk1MDM0Njk0MDAwMjE3",
                "snippet": {
                    "publishedAt": "2023-09-18T10:58:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 What is Spring & Advantages | Spring IOC Container & Its Working | Spring First Program Eclipse",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nSimilar topics covered in this tutorial :-\nWhat is Spring Framework | Dependency Injection | Inversion of Control | Spring Core Module | HINDI\nWhat is the Spring framework really all about?\nSpring IOC Container | What is Spring IOC Container | Spring Tutorial\nSpring Framework Tutorial in Hindi || Complete Spring Course for beginners\nSpring framework tutorial for beginners with examples in eclipse | Why spring inversion of control ?\nHow to Create First Spring Application in Eclipse | First Spring Application Development\nSpring Framework Tutorial in Hindi\nDeveloping First Spring Application | Spring Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lAubwGoD9qU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "mZlYJOw3iRC1XV5Ae15WbIIX3JM",
                "id": "MTUxNjkzNzQ0ODI0MTY5Mzc0NDgyNDAwMDYxNg",
                "snippet": {
                    "publishedAt": "2023-09-03T12:40:24+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Roadmap for Spring Framework & Springboot || Should I Learn Spring before Springboot",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nBelow are the topics related to this topic\nRoadmap To Learn Spring Framework || Resources For Spring Framework || How To Learn Spring Framework\nSpring Boot Roadmap - How To Master Spring Boot\nSpring Boot Developer Roadmap | Java Spring Boot Developer\nBest Path to Spring Boot | Spring Boot Prerequisite\nHow to Master Spring Boot - Complete Spring Boot Roadmap\n(DON'T MISS) Springboot Java Backend Developer Roadmap | Springboot | Resources to learn Springboot\nComplete JAVA Backend Developer Roadmap | How To Become Java Developer\nSpring Framework Tutorial in Hindi\nSpring Framework Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tr2oxPcVYrAbolM2j2fy7w0oBuM",
                "id": "MTE2OTM3NDM0NjcxNjkzNzQzNDY3MDAwNDkz",
                "snippet": {
                    "publishedAt": "2023-09-03T12:17:47+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Roadmap for Spring Framework & Springboot || Should I Learn Spring before Springboot",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nBelow are the topics related to this topic\nRoadmap To Learn Spring Framework || Resources For Spring Framework || How To Learn Spring Framework\nSpring Boot Roadmap - How To Master Spring Boot\nSpring Boot Developer Roadmap | Java Spring Boot Developer\nBest Path to Spring Boot | Spring Boot Prerequisite\nHow to Master Spring Boot - Complete Spring Boot Roadmap\n(DON'T MISS) Springboot Java Backend Developer Roadmap | Springboot | Resources to learn Springboot\nComplete JAVA Backend Developer Roadmap | How To Become Java Developer\nSpring Framework Tutorial in Hindi\nSpring Framework Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dkvU3ZtmF8M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "o-g_ViHPOsYVR-AEUljva22wf3I",
                "id": "MTUxNjkzNDAxMTczMTY5MzQwMTE3MzAwMDUwNw",
                "snippet": {
                    "publishedAt": "2023-08-30T13:12:53+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Java Full Stack Developer Roadmap || Java Technologies to Learn in 2023",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nBelow are Java Fullstack Roadmap in Details full guide from Zero to Hero\n\n1. Learn the Basics:\n = Java Fundamentals: Learn the basics of Java programming\n = HTML, CSS, JavaScript: For front-end web development.\n = Database : SQL\n\n2. Back-End Development:\n = Java Frameworks: Spring (including Servlets + JSP)\n = (API) RESTful Web Services: Springboot\n\n3. Front-End Development:\n = JavaScript Frameworks: React, Angular, or Vue.js\n = UI Libraries: Bootstrap or Material-UI.\n\n4. Database :-\n = Database Framework : i.e. Hibernate\n        = ORM (Object-Relational Mapping): JPA, Data JPA\n\n4. Server Knowledge:\n = Application Servers: Apache Tomcat, WildFly (JBoss), WebLogic \n\n5. Build Tools:\n = Maven or Gradle for building and managing Java projects.\n\n6. Version Control and Collaboration:\n = Git (version control system)\n = GitHub (collaboration with projects)\n\n7. Testing:\n = Unit Testing: JUnit\n\n8. Advanced Topics:\n = DSA\n = Microservices: Explore the concept of building applications as a collection of loosely coupled services.\n = Cloud Services: Learn about cloud platforms like AWS, Azure, or Google Cloud for deploying and scaling applications.\n = DevOps : Understand basic DevOps principles for efficient development, deployment, and monitoring.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4zWdVAUiES1pufvo3FkGLOBaxNw",
                "id": "MTE2OTMzOTk0OTUxNjkzMzk5NDk1MDAwMjU2",
                "snippet": {
                    "publishedAt": "2023-08-30T12:44:55+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Java Full Stack Developer Roadmap || Java Technologies to Learn in 2023",
                    "description": "#java #javatutorials #deepak #smartprogramming\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nBelow are Java Fullstack Roadmap in Details full guide from Zero to Hero\n\n1. Learn the Basics:\n = Java Fundamentals: Learn the basics of Java programming\n = HTML, CSS, JavaScript: For front-end web development.\n = Database : SQL\n\n2. Back-End Development:\n = Java Frameworks: Spring (including Servlets + JSP)\n = (API) RESTful Web Services: Springboot\n\n3. Front-End Development:\n = JavaScript Frameworks: React, Angular, or Vue.js\n = UI Libraries: Bootstrap or Material-UI.\n\n4. Database :-\n = Database Framework : i.e. Hibernate\n        = ORM (Object-Relational Mapping): JPA, Data JPA\n\n4. Server Knowledge:\n = Application Servers: Apache Tomcat, WildFly (JBoss), WebLogic \n\n5. Build Tools:\n = Maven or Gradle for building and managing Java projects.\n\n6. Version Control and Collaboration:\n = Git (version control system)\n = GitHub (collaboration with projects)\n\n7. Testing:\n = Unit Testing: JUnit\n\n8. Advanced Topics:\n = DSA\n = Microservices: Explore the concept of building applications as a collection of loosely coupled services.\n = Cloud Services: Learn about cloud platforms like AWS, Azure, or Google Cloud for deploying and scaling applications.\n = DevOps : Understand basic DevOps principles for efficient development, deployment, and monitoring.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Fcome9-9KRg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "UmiliZ8zVs4BqRAsnaUpqyoO12Q",
                "id": "MTUxNjkyNzA5MjEzMTY5MjcwOTIxMzAwMDExOQ",
                "snippet": {
                    "publishedAt": "2023-08-22T13:00:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Login using Servlet and JSP + JDBC + MySQL Database - Practical",
                    "description": "Topics related to this tutorial are :-\nLogin using Servlet and JSP practical Part 1\nLogin and Registration using JSP + Servlet + JDBC + MySQL-Complete Video\nLogin Page using JSP + Servlet + JDBC + MySQL - Step by Step Tutorial\nLogin & Registration using JSP , Servlet & SQL",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "in95jNHHnfuM5_sCx8UFeINuJg0",
                "id": "MTE2OTI2OTcwMzMxNjkyNjk3MDMzMDAwMzcw",
                "snippet": {
                    "publishedAt": "2023-08-22T09:37:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Login using Servlet and JSP + JDBC + MySQL Database - Practical",
                    "description": "Topics related to this tutorial are :-\nLogin using Servlet and JSP practical Part 1\nLogin and Registration using JSP + Servlet + JDBC + MySQL-Complete Video\nLogin Page using JSP + Servlet + JDBC + MySQL - Step by Step Tutorial\nLogin & Registration using JSP , Servlet & SQL",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/D_HLMH8163M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "xFNoHj-3VeP5EUiYj1mfcgt1BHE",
                "id": "MTUxNjkyMTA0NDAyMTY5MjEwNDQwMjAwMDUwNg",
                "snippet": {
                    "publishedAt": "2023-08-15T13:00:02+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Registration using JSP + Servlet + JDBC + MySQL Database Practical",
                    "description": "Below are the topics related to this tutorial :-\nRegistration Form using JSP + Servlet + JDBC + MySQL Database Example\nLogin and Registration using JSP + Servlet + JDBC + MySQL\nSubmit Form to Servlet in HINDI | how to fetch data of form using servlet - Servlet & JSP\nRegistration page with saving data in DB using Servlet + JSP + JDBC + MySQL + Tomcate (Step by Step)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tdGF_eqR7whABtufuNXaFlbkmAU",
                "id": "MTE2OTIwOTc5OTUxNjkyMDk3OTk1MDAwMDkz",
                "snippet": {
                    "publishedAt": "2023-08-15T11:13:15+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Registration using JSP + Servlet + JDBC + MySQL Database Practical",
                    "description": "Below are the topics related to this tutorial :-\nRegistration Form using JSP + Servlet + JDBC + MySQL Database Example\nLogin and Registration using JSP + Servlet + JDBC + MySQL\nSubmit Form to Servlet in HINDI | how to fetch data of form using servlet - Servlet & JSP\nRegistration page with saving data in DB using Servlet + JSP + JDBC + MySQL + Tomcate (Step by Step)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1_MWCHpFsso/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_sgbGMg16RwjQ5PRC7Sw6sutFmU",
                "id": "MTUxNjg4NzM1MjIwMTY4ODczNTIyMDAwMDM1Mw",
                "snippet": {
                    "publishedAt": "2023-07-07T13:07:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Core Java & Spring Springboot Live Online Batch || Admission Open",
                    "description": "#live #onlinebatch #javaprogramming #spring #springboot \nWebsite : https://courses.smartprogramming.in/online-batch-schedule\n\nLive batches by Deepak Starting from 10th July, 2023.\nFor Admission Call or Whats App : 9888755565 or 6283830308\nWhats App : https://wa.me/919888755565\nWhats App : https://wa.me/916283830308",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ggLOFQ7lqos/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ggLOFQ7lqos/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ggLOFQ7lqos/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ggLOFQ7lqos/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ggLOFQ7lqos/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2f-SyL60t0S1KLsrb658usoMHaA",
                "id": "MTUxNjg3NjE2Njc2MTY4NzYxNjY3NjAwMDY0Mg",
                "snippet": {
                    "publishedAt": "2023-06-24T14:24:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#16 Expression Language (EL) in JSP | JSP & Servlet Tutorial",
                    "description": "#javaprogramming #advancejava #smartprogramming #deepakpanwar \nExpression Language (EL) Tutorial - JSP Servlets tutorial\nJSP Expression Language to Print Values\nImplicit Objects in JSP",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "DcgQVnXOKc9EFG7LqhASn-kuaDI",
                "id": "MTE2ODc2MTYzNzYxNjg3NjE2Mzc2MDAwNDgx",
                "snippet": {
                    "publishedAt": "2023-06-24T14:19:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#16 Expression Language (EL) in JSP | JSP & Servlet Tutorial",
                    "description": "#javaprogramming #advancejava #smartprogramming #deepakpanwar \nExpression Language (EL) Tutorial - JSP Servlets tutorial\nJSP Expression Language to Print Values\nImplicit Objects in JSP",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bQqWTRhkhWA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "a1kUVw4qx9C7VOPFyIJ64qN_SSA",
                "id": "MTUxNjg3MjY2MDM5MTY4NzI2NjAzOTAwMDE0MQ",
                "snippet": {
                    "publishedAt": "2023-06-20T13:00:39+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#15 Implicit Objects in JSP || Servlet and JSP Tutorial",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as below :-\nJSP implicit objects in Hindi | Implicit Objects in JSP | servlet\nJSP implicit objects || Web Technologies\nImplicit Objects in JSP\nJSP tutorial in hindi (Implicit object, JSP scripting tag in hindi)\nimplicit Objects with Example in JSP | Advance Java Servlet Jsp Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "m5riDNBFqNDXi5bNd1ZnY91Y6kY",
                "id": "MTE2ODcyNjAwNDYxNjg3MjYwMDQ2MDAwNDYw",
                "snippet": {
                    "publishedAt": "2023-06-20T11:20:46+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#15 Implicit Objects in JSP || Servlet and JSP Tutorial",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as below :-\nJSP implicit objects in Hindi | Implicit Objects in JSP | servlet\nJSP implicit objects || Web Technologies\nImplicit Objects in JSP\nJSP tutorial in hindi (Implicit object, JSP scripting tag in hindi)\nimplicit Objects with Example in JSP | Advance Java Servlet Jsp Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/r_r2njo_e2U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kAuvCSCmyA8vBavyQoGrmZe1eGQ",
                "id": "MTUxNjg2ODMyMTczMTY4NjgzMjE3MzAwMDE0NA",
                "snippet": {
                    "publishedAt": "2023-06-15T12:29:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#14 JSP Tags | Scripting | Scriptlet | Declarative | Expression | Servlet & JSP Tutorials",
                    "description": "#javaprogramming #java #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nImportant tags of jsp | Declarative | Scriptlet | Expressive tags | hindi | Servlet\nJSP Scriptlet Tag | Scripting elements | Web Technology\nJSP Scriptlet, Declarations, Expression, Comments, Directive and Actions\nJSP expression tag | Scripting elements\nJSP Tags | Scripting | Directive | Action | Servlet & JSP Tutorials\nJSP Tags | Scriptlet | Declaration | Directive | Expression\nJSP declaration tag | Scripting elements | Web Technology",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uS4JA16iijmwJA9KtMgzR3TKAWw",
                "id": "MTE2ODY4MzExNTYxNjg2ODMxMTU2MDAwNTgz",
                "snippet": {
                    "publishedAt": "2023-06-15T12:12:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#14 JSP Tags | Scripting | Scriptlet | Declarative | Expression | Servlet & JSP Tutorials",
                    "description": "#javaprogramming #java #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nImportant tags of jsp | Declarative | Scriptlet | Expressive tags | hindi | Servlet\nJSP Scriptlet Tag | Scripting elements | Web Technology\nJSP Scriptlet, Declarations, Expression, Comments, Directive and Actions\nJSP expression tag | Scripting elements\nJSP Tags | Scripting | Directive | Action | Servlet & JSP Tutorials\nJSP Tags | Scriptlet | Declaration | Directive | Expression\nJSP declaration tag | Scripting elements | Web Technology",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xSNndzSjmQw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NqoZP1NItpdDan9_QJJpOezHJXw",
                "id": "MTUxNjg2NTcxNTQyMTY4NjU3MTU0MjAwMDUzMA",
                "snippet": {
                    "publishedAt": "2023-06-12T12:05:42+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#13 JSP Tags | Scripting | Directive | Action | Servlet & JSP Tutorials",
                    "description": "#javaprogramming #java #servlets #jsp #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nImportant tags of jsp | Declarative | Scriptlet | Expressive tags | hindi | Servlet\nJSP Scriptlet Tag | Scripting elements | Web Technology\nJsp directives | Directive tags in Jsp | hindi | Servlet\nJSP Scriptlet, Declarations, Expression, Comments, Directive and Actions\nTypes of Tags in JSP\nJSP Directive | Page | Include | Taglib\nJSP Tags | Scriptlet | Declaration | Directive | Expression\nServlet and JSP Tutorial\nServlet and JSP Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "YV4HtLv9AXcbZwXoQXShrCAs4YQ",
                "id": "MTE2ODY1NzA3NDIxNjg2NTcwNzQyMDAwNzU3",
                "snippet": {
                    "publishedAt": "2023-06-12T11:52:22+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#13 JSP Tags | Scripting | Directive | Action | Servlet & JSP Tutorials",
                    "description": "#javaprogramming #java #servlets #jsp #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nImportant tags of jsp | Declarative | Scriptlet | Expressive tags | hindi | Servlet\nJSP Scriptlet Tag | Scripting elements | Web Technology\nJsp directives | Directive tags in Jsp | hindi | Servlet\nJSP Scriptlet, Declarations, Expression, Comments, Directive and Actions\nTypes of Tags in JSP\nJSP Directive | Page | Include | Taglib\nJSP Tags | Scriptlet | Declaration | Directive | Expression\nServlet and JSP Tutorial\nServlet and JSP Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0C4bRNm790Q/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "1uDkCJobixiw8QX6gDpZ03h79cY",
                "id": "MTUxNjg2MzE2NTAwMTY4NjMxNjUwMDAwMDc5MQ",
                "snippet": {
                    "publishedAt": "2023-06-09T13:15:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#10 HttpSession Session Management in Servlet || Session Tracking Hindi || Servlet and JSP",
                    "description": "#javaprogramming #java #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nSession Tracking in Servlet | State Management in Sevlet | HINDI | Servlet & JSP\nServlet and JSP Tutorial | HttpSession\nServlet Tutorial - Servlets : Session Tracking | User Authorization | Java Servlet \nSession tracking in servlets | Web Technology\nSession Tracking using HttpSession in Hindi | Servlet\nSession Management in Servlet Hindi \nHow to use Session in Servlet\nIntroduction to Servlets\nServlet Java Tutorial How to use HttpSession Session Management\nServlet and JSP Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "WInPY9la3xddccwLqZk65gaG3GQ",
                "id": "MTE2ODYzMTM4MjExNjg2MzEzODIxMDAwOTc4",
                "snippet": {
                    "publishedAt": "2023-06-09T12:30:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#10 HttpSession Session Management in Servlet || Session Tracking Hindi || Servlet and JSP",
                    "description": "#javaprogramming #java #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nSession Tracking in Servlet | State Management in Sevlet | HINDI | Servlet & JSP\nServlet and JSP Tutorial | HttpSession\nServlet Tutorial - Servlets : Session Tracking | User Authorization | Java Servlet \nSession tracking in servlets | Web Technology\nSession Tracking using HttpSession in Hindi | Servlet\nSession Management in Servlet Hindi \nHow to use Session in Servlet\nIntroduction to Servlets\nServlet Java Tutorial How to use HttpSession Session Management\nServlet and JSP Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6ASoqqSZY_g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "H92Vl-34Zi7940BIqODDiDcY_so",
                "id": "MTUxNjg1ODkyNzUzMTY4NTg5Mjc1MzAwMDM1Nw",
                "snippet": {
                    "publishedAt": "2023-06-04T15:32:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#9 sendRedirect() method || RequestDispatcher - Include vs Forward || Servlet and JSP Tutorial",
                    "description": "#javaprogramming #java #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nServlet and JSP Tutorial | RequestDispatcher and sendRedirect Theory\nServlet Java Tutorial Part use of Send Redirect\nHow to redirect from one page to another in jsp | Redirection in jsp | hindi\nSend Redirect vs. Forward | Servlets\nsendRedirect() method in Servlet in Hindi | Servlet Tutorial in Hindi\nServlet and JSP Tutorial | sendRedirect | URL Rewriting\nServlets Tutorial For Beginners| RequestDispatcher| SendRedirect | Include Vs Forward | In Hindi\nWelcome file list | RequestDispatcher | Complete Session | (HINDI)- Servlet & JSP\nServlet and JSP Tutorial | RequestDispatcher | Calling a Servlet from Servlet\nRequest Dispatcher in Servlet | Advance Java Servlet JSP Tutorial\nRequestDispatcher forward and include Login example\nsendRedirect() method in Servlet in Hindi | Servlet Tutorial in Hindi\nRequestDispatcher Example | Servlets",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "K4gZWtpd5KBCKonHYx7bQvDIygY",
                "id": "MTE2ODU4OTI0NTYxNjg1ODkyNDU2MDAwNDAx",
                "snippet": {
                    "publishedAt": "2023-06-04T15:27:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#9 sendRedirect() method || RequestDispatcher - Include vs Forward || Servlet and JSP Tutorial",
                    "description": "#javaprogramming #java #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nServlet and JSP Tutorial | RequestDispatcher and sendRedirect Theory\nServlet Java Tutorial Part use of Send Redirect\nHow to redirect from one page to another in jsp | Redirection in jsp | hindi\nSend Redirect vs. Forward | Servlets\nsendRedirect() method in Servlet in Hindi | Servlet Tutorial in Hindi\nServlet and JSP Tutorial | sendRedirect | URL Rewriting\nServlets Tutorial For Beginners| RequestDispatcher| SendRedirect | Include Vs Forward | In Hindi\nWelcome file list | RequestDispatcher | Complete Session | (HINDI)- Servlet & JSP\nServlet and JSP Tutorial | RequestDispatcher | Calling a Servlet from Servlet\nRequest Dispatcher in Servlet | Advance Java Servlet JSP Tutorial\nRequestDispatcher forward and include Login example\nsendRedirect() method in Servlet in Hindi | Servlet Tutorial in Hindi\nRequestDispatcher Example | Servlets",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AUa50Yy8214/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5waK_Wu0c8xrAyc293pDCMW0N1s",
                "id": "MTE2ODU3MTIxODgxNjg1NzEyMTg4MDAwMjYw",
                "snippet": {
                    "publishedAt": "2023-06-02T13:23:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#7 HttpServletRequest and HttpServletResponse Theory || Servlet & JSP Tutorials for Beginners",
                    "description": "#java #javaprogramming #advancejava #smartprogramming #deepakpanwar \nTopics related to this tutorial are as below :-\nHttpServletRequest and HttpServletResponse Theory\nHttpServletRequest and HttpServletResponse Complete Explanation\nCreate Servlet using HttpServlet in Hindi - Servlet & JSP\nHow objects are created for ServletRequest, ServletResponse interfaces in servlet? advance java\nServlet and JSP Tutorial\nServlet and Jsp (Server Side Programming in Java)\nHttp servlet request and response in servlets\nAdvance java tutorials for beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BtE_UEh7CQ_AFPyymh-6MMtrZNg",
                "id": "MTUxNjg1NzExNzk3MTY4NTcxMTc5NzAwMDE1Ng",
                "snippet": {
                    "publishedAt": "2023-06-02T13:16:37+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#7 HttpServletRequest and HttpServletResponse Theory || Servlet & JSP Tutorials for Beginners",
                    "description": "#java #javaprogramming #advancejava #smartprogramming #deepakpanwar \nTopics related to this tutorial are as below :-\nHttpServletRequest and HttpServletResponse Theory\nHttpServletRequest and HttpServletResponse Complete Explanation\nCreate Servlet using HttpServlet in Hindi - Servlet & JSP\nHow objects are created for ServletRequest, ServletResponse interfaces in servlet? advance java\nServlet and JSP Tutorial\nServlet and Jsp (Server Side Programming in Java)\nHttp servlet request and response in servlets\nAdvance java tutorials for beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dlG8WeoOlsg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "c6WAeElMUnUq0GQmHnKU10819AM",
                "id": "MTE2ODU1MDc2NzUxNjg1NTA3Njc1MDAwNTI5",
                "snippet": {
                    "publishedAt": "2023-05-31T04:34:35+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Difference between Core Java and Advance Java | Advance Java Syllabus by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifference between Core Java and Advance Java;\nAdvance Java Syllabus with Projects (JDBC, Servlets & JSP) by Deepak (Web Development);\nAdvance Java में कम से कम इतना तो ज़रूर सीखें\n\n1. Introduction\n2. Advance Java Introduction\n3. Software’s Installation\n---------------------------------------------------------------------------------------\n4. HTML & HTML 5\n5. XML\n6. CSS (Cascading Style Sheet)\n7. Create Web-Template\n8. JavaScript\n9. jQuery\n10. Bootstrap\n---------------------------------------------------------------------------------------\n11. Database Introduction\n12. SQL (Structured Query Language)\n13. JDBC Prerequisites\n14. JDBC Introduction\n15. JDBC Types of Driver\n16. JDBC Working with JDBC Practical with MySQL\n17. JDBC Working with JDBC Practical with Oracle\n18. JDBC Explanation of Class.forName(“--”);\n19. JDBC API (java.sql Package and javax.sql Package)\n20. JDBC Deep working of Java Application with Database\n21. JDBC Interview Questions \n22. JDBC PreparedStatement Concepts \n23. JDBC CallableStatement with Stored Procedure\n24. JDBC CallableStatement with Stored Function\n25. JDBC ResultSet Types (Theory & Practical)\n26. JDBC Database Connection Different Approach\n27. JDBC Transaction Management\n28. JDBC Batch Updations & SQL Injection\n29. JDBC MetaData & Date/Time/Timestamp in java\n30. JDBC BLOB & CLOB\n31. JDBC Connection Pooling\n32. JDBC RowSet\n33. JDBC RowId\n---------------------------------------------------------------------------------------\n34. Client Server Communication (Part 1)\n---------------------------------------------------------------------------------------\n35. Servlet Introduction & Servlet API\n36. web.xml file (standard deployment descriptor)\n37. Apache Tomcat Server\n38. Create Servlet First Program (Using Simple Editor)\n39. Deep Explanation of working of Servlet Program\n40. Request Object Explanation\n41. Servlet Program using IDE’s\n42. ServletContext\n43. ServletConfig\n44. Servlet Communication with Servlet, JSP & HTML\n45. Session Management using HttpSession\n46. HttpSession Deep Explanation\n47. Session Management using Cookies\n48. Session Management using URL-Rewriting\n49. Annotations in Java & Servlets\n50. Servlet Filter\n---------------------------------------------------------------------------------------\n51. JavaMail API\n---------------------------------------------------------------------------------------\n52. JSP Introduction\n53. JSP Life Cycle & Class Hierarchy\n54. JSP Tags Diagram\n55. JSP Directive Tags/Elements\n56. JSP Scripting Tags, Implicit Objects & JSP Scopes\n57. JSP Standard Action Tags\n58. JSP Custom Action Tags\n59. Expression Language (EL)\n60. Java Standard Tag Library (JSTL)\n---------------------------------------------------------------------------------------\n61. Job Portal Project\n---------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "X51yK56AiC_zVfcE4YMiNCBL1gA",
                "id": "MTUxNjg1MzY3MDAxMTY4NTM2NzAwMTAwMDkzMQ",
                "snippet": {
                    "publishedAt": "2023-05-29T13:30:01+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#12 Life Cycle of JSP || JSP Flow of Execution Hindi",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nAdvance Java Topics related to this tutorials are :-\nJSP Introduction | Life Cycle of JSP | JSP Execution Process | Web;\nTechnology Lectures Hindi;\nJSP Flow of Execution (JSP Life Cycle);\nLife cycle of JSP | Web Technology;\nLifeCycle of Servlet in Hindi - Servlet & JSP;\nIntroduction to Jsp (Java Server Pages) in hindi | Servlet;\nServlet and JSP Tutorial for Beginners;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5mrOx-S2_j2JWMZRkBVM24CdTJM",
                "id": "MTE2ODUzNjI3NTUxNjg1MzYyNzU1MDAwMTYy",
                "snippet": {
                    "publishedAt": "2023-05-29T12:19:15+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#12 Life Cycle of JSP || JSP Flow of Execution Hindi",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nAdvance Java Topics related to this tutorials are :-\nJSP Introduction | Life Cycle of JSP | JSP Execution Process | Web;\nTechnology Lectures Hindi;\nJSP Flow of Execution (JSP Life Cycle);\nLife cycle of JSP | Web Technology;\nLifeCycle of Servlet in Hindi - Servlet & JSP;\nIntroduction to Jsp (Java Server Pages) in hindi | Servlet;\nServlet and JSP Tutorial for Beginners;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/agYA2zCFzzo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4sNnFGCGxgAtJljdOTKhtKNuM7w",
                "id": "MTUxNjg1MTA1MjAyMTY4NTEwNTIwMjAwMDgwNg",
                "snippet": {
                    "publishedAt": "2023-05-26T12:46:42+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#11 Introduction to JSP || Why to use JSP || Difference b/w Servlet & JSP || Advance Java Tutorials",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as below :-\nIntroduction to Jsp (Java Server Pages) in hindi | Servlet\nJava Server Pages (JSP) | Introduction | Web Technology\nServlet and JSP Tutorial | Why JSP?\nWhy Jsp ? | Why to use Jsp | Disadvantages of Servlet | Servlet\nServlet and JSP Introduction | Servlets & JSP Online Training Syllabus by Deepak\nJSP Introduction | Life Cycle of JSP | JSP Execution Process | Web Technology Lectures Hindi\nServlet and JSP Tutorial\nIntroduction to JSP | What is JSP?\nJSP Tutorial | Introduction to JSP | Advanced Java\nServlet and Jsp (Server Side Programming in Java) \nServlet and JSP Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HNPQujR_21FcDcTxYh2O8Oh4tLk",
                "id": "MTE2ODUxMDQzNzMxNjg1MTA0MzczMDAwMDA4",
                "snippet": {
                    "publishedAt": "2023-05-26T12:32:53+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#11 Introduction to JSP || Why to use JSP || Difference b/w Servlet & JSP || Advance Java Tutorials",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as below :-\nIntroduction to Jsp (Java Server Pages) in hindi | Servlet\nJava Server Pages (JSP) | Introduction | Web Technology\nServlet and JSP Tutorial | Why JSP?\nWhy Jsp ? | Why to use Jsp | Disadvantages of Servlet | Servlet\nServlet and JSP Introduction | Servlets & JSP Online Training Syllabus by Deepak\nJSP Introduction | Life Cycle of JSP | JSP Execution Process | Web Technology Lectures Hindi\nServlet and JSP Tutorial\nIntroduction to JSP | What is JSP?\nJSP Tutorial | Introduction to JSP | Advanced Java\nServlet and Jsp (Server Side Programming in Java) \nServlet and JSP Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/I0YKLJv1KGU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aUkluyzU5fqTtHBl4oZgaIGcUUk",
                "id": "MTE2ODQ5ODE3ODgxNjg0OTgxNzg4MDAwNzY2",
                "snippet": {
                    "publishedAt": "2023-05-25T02:29:48+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#6 Servlet Annotations Configurations || @WebServlet Annotation || No need of web.xml",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming \nTopics related to this tutorial are as below :-\nServlet and JSP Tutorial | Servlet Annotation Configuration;\nServlet with Annotation | Servlets;\nServlet WebServlet Annotation;\nServlet and Jsp (Server Side Programming in Java);\nAnnotations in Java;\nServlet and JSP Tutorial for Beginners;\nWhat is Deployment Descriptor | Web.xml;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uKn7y6bChd_vwtXdVuhiixPim9Y",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwODky",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Java and MySQL connection eclipse | Insert data into table using PreparedStatement JDBC Practical",
                    "description": "#javaprogramming #java #javatutorial #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have deeply explain how to insert values in mysql database using java jdbc\nInsert data into table using PreparedStatement - JDBC\nJava and MySQL connection in eclipse (JDBC) by complete concepts\nJava Database Connectivity Practical\nHow to Insert Data into Database using PreparedStatement in JDBC\nInserting Data to Table with dynamic Input JDBC\nInserting data to database using JDBC | Best Practice | Jdbc Tutorial\nJava JDBC tutorial | Java Database Connectivity | Java Tutorial For Beginners\nConnect JAVA with MYSQL database | insert Data into Table Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "XzcVCDU151P0PUC7_myEaUJ4Ls8",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwNzY2",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#6 Servlet Annotations Configurations || @WebServlet Annotation || No need of web.xml",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming \nTopics related to this tutorial are as below :-\nServlet and JSP Tutorial | Servlet Annotation Configuration;\nServlet with Annotation | Servlets;\nServlet WebServlet Annotation;\nServlet and Jsp (Server Side Programming in Java);\nAnnotations in Java;\nServlet and JSP Tutorial for Beginners;\nWhat is Deployment Descriptor | Web.xml;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "54kKXOypCjX-1lGb0A7REvhUWVg",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwNzQw",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#8 Differences between Http Methods GET and POST || Servlet doGet() & doPost() methods",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nServlet and JSP Tutorial | Get and Post\nHTTP Methods - GET vs POST Method | Complete explanation [in Hindi]\nServlet Java Tutorial - doGet method() and doPost method()\nAdv Java || Differences between Http Methods GET and POST\nDifference between Get method and Post method in hindi\nSubmit Form to Servlet in HINDI | how to fetch data of form using servlet - Servlet & JSP\nServlet Program using Eclipse\nwhat is doGet() and doPost() methods in servlet | difference between doGet() and doPost() in servlet\ndoGet method() and doPost method() in Servlet With Example Code\nGet and Post Request | Advanced Java | Servlet Jsp | Hindi\nServlet and JSP Tutorial for Beginners\nServlet and Jsp (Server Side Programming in Java)\nServlet & JSP Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-rRC4_rjOZwH7LZNv52xTHZ0r-M",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwNzA1",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#5 Deployment Descriptor || web.xml file in Servlet Eclipse || Servlet JSP Tutorials",
                    "description": "#smartprogramming #javaprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nWhat is Deployment Descriptor | Web.xml (HINDI) | Servlet & JSP;\nServlet and JSP Tutorial | Create Servlet and web.xml Config;\nExecuting Servlet and About web xml file | Advance Java Tutorial in Hindi;\nFIX Error in web.xml File Eclipse IDE | Servlet & JSP web.xml Error RESOLVED;\nHow to configure the welcome file list in web.xml in Servlets? | Servlets;\nJava Servlet First Program with Web.xml Configuration File | Web Technology Lectures in Hindi;\nServlets - Web.xml Basics;\nJava EE 7 Tutorial | Servlet Deployment Descriptor;\nWhat is The Usage Of Web.xml File In Servlet;\nHow to generate missing web xml file using eclipse;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "cZUk_HgXp1cj3MBGqAtFudRyWrg",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwNjE2",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 Introduction to Servlets in Java",
                    "description": "#javaprogramming #servlets #smartprogramming #deepakpanwar \nThis tutorial provides you the basic introduction about servlets in java, how servlets works in java. What are servers and server examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "bAr7Yx5OQXs-xf9f_OKApfhVvDI",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwNTky",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Fetch Data from MySQL Database using JDBC in Java || ResultSet Interface by Deepak",
                    "description": "#javaprogramming #javatutorial #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have explained how ResultSet works internally, how ResultSet fetch data from mysql database.\nHow to select data form database in JDBC using eclipse and mysql database",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_mftxWtJvl-I2ZV8XxHvMi_94hA",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwMzYz",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Life Cycle of Servlet || init() service() destroy() methods of Servlet Hindi",
                    "description": "#smartprogramming #javaprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nLifeCycle of Servlet in Hindi - Servlet & JSP\nJava Servlet Life Cycle | init(), service(), destroy() methods | Web Technology Lectures\nLife cycle of a Servlet | Web Technology\nServlets Flow of Execution (Servlet Life Cycle)\nPhases of Servlet Life Cycle",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hTAhrrUxeMEwKAvPDR3yOxxo1do",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwMzAz",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Download and Configure Eclipse IDE and Tomcat Server || How to add Tomcat Server in Eclipse",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nSimilar topics covered in this tutorial are :-\nHow to Configure Tomcat WebServer with Eclipse IDE Step by step in Hindi\nInstall & Configure Apache Tomcat 10 in Eclipse IDE (2023) | Configure Tomcat Web Server in Eclipse\nHow to Add Tomcat Server in Eclipse IDE Tutorial\nStep by Step Guide to Setup and Install Apache Tomcat Server in Eclipse Development Environment(IDE)\nHow to install Eclipse IDE on windows 10 with JDK | Eclipse IDE for Java Developers\nServlet and JSP Tutorial | Eclipse and Tomcat Setup on Windows\nInstalling Apache Tomcat (Hindi) Servlet\nEclipse install with Apache Tomcat Server Setup",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "7hIn7gzPrHTrGIz53_G1mL3YjNA",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwMjI3",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 JDBC (Java Database Connectivity) || Steps to Connect Java with MySql Database by Deepak",
                    "description": "#javaprogramming #jdbc #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial JDBC is explain with real world example.\nJDBC connection with mysql database steps are also explained \nJDBC (Java Database Connectivity) in Java\nJDBC Connect Java with MySql Database\nJDBC in Simple Way\nSteps to Connect Java with Database | Java Tutorial For Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "iQ61Y9QNcjCIWxcdOz2-Mj5JeA0",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwMjIw",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Servlet Program using Eclipse || Creating Dynamic Web Project in Eclipse #3",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics similar to this tutorial are :-\nServlet hierarchy\nServlet Program using Eclipse | Simple Servlet using Tomcat and Eclipse\nhow to create first servlet program in eclipse | Eclipse - Create Java Project\nServlet and JSP Tutorial for Beginners\nServlet and JSP Tutorial | Creating Web Project in Eclipse\nweb project in eclipse | dynamic web project in eclipse | servlet and jsp tutorial for beginners\nFirst jsp/servlet program using Eclipse IDE | Hello, World ! program jsp/servlet | Java\nCreating Servlet using Implementing Servlet | HINDI | Servlet & JSP\nCreating Servlet using GenericServlet Class | HINDI | Servlet\nCreate Servlet using HttpServlet in Hindi - Servlet & JSP\nServlet and JSP Tutorial | Create Servlet and web.xml Config\nDynamic Web Programing linking html pages by Eclipse using servlets, html, jsp, xml",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "gET-M6yg0keSqIpIkmrCSkFI-aU",
                "id": "MTE2ODQ5ODEzODQxNjg0OTgxMzg0MDAwMTU0",
                "snippet": {
                    "publishedAt": "2023-05-25T02:23:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Update and Delete Operation using JDBC || CRUD Operation || Java MySql Connection",
                    "description": "#javaprogramming #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have explained CRUD Operation Update and Delete query with Java and MySQL in eclipse. Java and MySQL connection is also explained in the video\nJava and MySQL connection in eclipse (JDBC) by complete concepts\nJava Database Connectivity Practical\nJava JDBC tutorial | Java Database Connectivity | Java Tutorial For Beginners\nConnect JAVA with MYSQL database | insert Data into Table Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "o1B-LVaoN-zhf4NhgAWThuzaYWw",
                "id": "MTUxNjg0OTM1MDA4MTY4NDkzNTAwODAwMDY3Nw",
                "snippet": {
                    "publishedAt": "2023-05-24T13:30:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#8 Differences between Http Methods GET and POST || Servlet doGet() & doPost() methods",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nServlet and JSP Tutorial | Get and Post\nHTTP Methods - GET vs POST Method | Complete explanation [in Hindi]\nServlet Java Tutorial - doGet method() and doPost method()\nAdv Java || Differences between Http Methods GET and POST\nDifference between Get method and Post method in hindi\nSubmit Form to Servlet in HINDI | how to fetch data of form using servlet - Servlet & JSP\nServlet Program using Eclipse\nwhat is doGet() and doPost() methods in servlet | difference between doGet() and doPost() in servlet\ndoGet method() and doPost method() in Servlet With Example Code\nGet and Post Request | Advanced Java | Servlet Jsp | Hindi\nServlet and JSP Tutorial for Beginners\nServlet and Jsp (Server Side Programming in Java)\nServlet & JSP Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NZRA-3XGYFH5UvL-De0cg7fAcf0",
                "id": "MTE2ODQ5MzI5MDMxNjg0OTMyOTAzMDAwNzQw",
                "snippet": {
                    "publishedAt": "2023-05-24T12:55:03+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#8 Differences between Http Methods GET and POST || Servlet doGet() & doPost() methods",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nServlet and JSP Tutorial | Get and Post\nHTTP Methods - GET vs POST Method | Complete explanation [in Hindi]\nServlet Java Tutorial - doGet method() and doPost method()\nAdv Java || Differences between Http Methods GET and POST\nDifference between Get method and Post method in hindi\nSubmit Form to Servlet in HINDI | how to fetch data of form using servlet - Servlet & JSP\nServlet Program using Eclipse\nwhat is doGet() and doPost() methods in servlet | difference between doGet() and doPost() in servlet\ndoGet method() and doPost method() in Servlet With Example Code\nGet and Post Request | Advanced Java | Servlet Jsp | Hindi\nServlet and JSP Tutorial for Beginners\nServlet and Jsp (Server Side Programming in Java)\nServlet & JSP Tutorial | Full Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Qi1Rdoy0XhI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_j8P9ZGbTGWETA8ZFHndjWqR8ao",
                "id": "MTUxNjg0ODQ1MjI2MTY4NDg0NTIyNjAwMDcxMw",
                "snippet": {
                    "publishedAt": "2023-05-23T12:33:46+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#6 Servlet Annotations Configurations || @WebServlet Annotation || No need of web.xml",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming \nTopics related to this tutorial are as below :-\nServlet and JSP Tutorial | Servlet Annotation Configuration;\nServlet with Annotation | Servlets;\nServlet WebServlet Annotation;\nServlet and Jsp (Server Side Programming in Java);\nAnnotations in Java;\nServlet and JSP Tutorial for Beginners;\nWhat is Deployment Descriptor | Web.xml;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XuXio4NXoWE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "H0BpwdONDCU1u8KCbfXrm13IkMo",
                "id": "MTUxNjg0NzU5ODc0MTY4NDc1OTg3NDAwMDI4Mw",
                "snippet": {
                    "publishedAt": "2023-05-22T12:51:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#5 Deployment Descriptor || web.xml file in Servlet Eclipse || Servlet JSP Tutorials",
                    "description": "#smartprogramming #javaprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nWhat is Deployment Descriptor | Web.xml (HINDI) | Servlet & JSP;\nServlet and JSP Tutorial | Create Servlet and web.xml Config;\nExecuting Servlet and About web xml file | Advance Java Tutorial in Hindi;\nFIX Error in web.xml File Eclipse IDE | Servlet & JSP web.xml Error RESOLVED;\nHow to configure the welcome file list in web.xml in Servlets? | Servlets;\nJava Servlet First Program with Web.xml Configuration File | Web Technology Lectures in Hindi;\nServlets - Web.xml Basics;\nJava EE 7 Tutorial | Servlet Deployment Descriptor;\nWhat is The Usage Of Web.xml File In Servlet;\nHow to generate missing web xml file using eclipse;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "pKX9_N1yZPrwoJXTkNOgjc1K7lw",
                "id": "MTE2ODQ3NTgxNjkxNjg0NzU4MTY5MDAwNzA1",
                "snippet": {
                    "publishedAt": "2023-05-22T12:22:49+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#5 Deployment Descriptor || web.xml file in Servlet Eclipse || Servlet JSP Tutorials",
                    "description": "#smartprogramming #javaprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nWhat is Deployment Descriptor | Web.xml (HINDI) | Servlet & JSP;\nServlet and JSP Tutorial | Create Servlet and web.xml Config;\nExecuting Servlet and About web xml file | Advance Java Tutorial in Hindi;\nFIX Error in web.xml File Eclipse IDE | Servlet & JSP web.xml Error RESOLVED;\nHow to configure the welcome file list in web.xml in Servlets? | Servlets;\nJava Servlet First Program with Web.xml Configuration File | Web Technology Lectures in Hindi;\nServlets - Web.xml Basics;\nJava EE 7 Tutorial | Servlet Deployment Descriptor;\nWhat is The Usage Of Web.xml File In Servlet;\nHow to generate missing web xml file using eclipse;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-xWADaceiwI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "219R5QTzNEPl3cOttqsPPD5X_ZM",
                "id": "MTUxNjg0NDkxNTg2MTY4NDQ5MTU4NjAwMDQ0Mg",
                "snippet": {
                    "publishedAt": "2023-05-19T10:19:46+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Life Cycle of Servlet || init() service() destroy() methods of Servlet Hindi",
                    "description": "#smartprogramming #javaprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nLifeCycle of Servlet in Hindi - Servlet & JSP\nJava Servlet Life Cycle | init(), service(), destroy() methods | Web Technology Lectures\nLife cycle of a Servlet | Web Technology\nServlets Flow of Execution (Servlet Life Cycle)\nPhases of Servlet Life Cycle",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ib5Q8omck-AOVcLC5yXZcZWZeOs",
                "id": "MTE2ODQ0OTA1ODkxNjg0NDkwNTg5MDAwMzYz",
                "snippet": {
                    "publishedAt": "2023-05-19T10:03:09+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Life Cycle of Servlet || init() service() destroy() methods of Servlet Hindi",
                    "description": "#smartprogramming #javaprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nLifeCycle of Servlet in Hindi - Servlet & JSP\nJava Servlet Life Cycle | init(), service(), destroy() methods | Web Technology Lectures\nLife cycle of a Servlet | Web Technology\nServlets Flow of Execution (Servlet Life Cycle)\nPhases of Servlet Life Cycle",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6RhdX-d_pbY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uSkF7uXPfaKSU1FwcKzPf6MNg3c",
                "id": "MTUxNjg0MjM5NjYzMTY4NDIzOTY2MzAwMDkzNA",
                "snippet": {
                    "publishedAt": "2023-05-16T12:21:03+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Servlet Program using Eclipse || Creating Dynamic Web Project in Eclipse #3",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics similar to this tutorial are :-\nServlet hierarchy\nServlet Program using Eclipse | Simple Servlet using Tomcat and Eclipse\nhow to create first servlet program in eclipse | Eclipse - Create Java Project\nServlet and JSP Tutorial for Beginners\nServlet and JSP Tutorial | Creating Web Project in Eclipse\nweb project in eclipse | dynamic web project in eclipse | servlet and jsp tutorial for beginners\nFirst jsp/servlet program using Eclipse IDE | Hello, World ! program jsp/servlet | Java\nCreating Servlet using Implementing Servlet | HINDI | Servlet & JSP\nCreating Servlet using GenericServlet Class | HINDI | Servlet\nCreate Servlet using HttpServlet in Hindi - Servlet & JSP\nServlet and JSP Tutorial | Create Servlet and web.xml Config\nDynamic Web Programing linking html pages by Eclipse using servlets, html, jsp, xml",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "bEv4qlWmP-lCL55qmMkNO59gs-s",
                "id": "MTE2ODQyMzkyMzgxNjg0MjM5MjM4MDAwMjIw",
                "snippet": {
                    "publishedAt": "2023-05-16T12:13:58+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Servlet Program using Eclipse || Creating Dynamic Web Project in Eclipse #3",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nTopics similar to this tutorial are :-\nServlet hierarchy\nServlet Program using Eclipse | Simple Servlet using Tomcat and Eclipse\nhow to create first servlet program in eclipse | Eclipse - Create Java Project\nServlet and JSP Tutorial for Beginners\nServlet and JSP Tutorial | Creating Web Project in Eclipse\nweb project in eclipse | dynamic web project in eclipse | servlet and jsp tutorial for beginners\nFirst jsp/servlet program using Eclipse IDE | Hello, World ! program jsp/servlet | Java\nCreating Servlet using Implementing Servlet | HINDI | Servlet & JSP\nCreating Servlet using GenericServlet Class | HINDI | Servlet\nCreate Servlet using HttpServlet in Hindi - Servlet & JSP\nServlet and JSP Tutorial | Create Servlet and web.xml Config\nDynamic Web Programing linking html pages by Eclipse using servlets, html, jsp, xml",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/fa2nWRMnpr8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wtgDkwSE9RpnVpoLXITki-V7CAU",
                "id": "MTUxNjg0MDczMTc0MTY4NDA3MzE3NDAwMDQzNA",
                "snippet": {
                    "publishedAt": "2023-05-14T14:06:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Download and Configure Eclipse IDE and Tomcat Server || How to add Tomcat Server in Eclipse",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nSimilar topics covered in this tutorial are :-\nHow to Configure Tomcat WebServer with Eclipse IDE Step by step in Hindi\nInstall & Configure Apache Tomcat 10 in Eclipse IDE (2023) | Configure Tomcat Web Server in Eclipse\nHow to Add Tomcat Server in Eclipse IDE Tutorial\nStep by Step Guide to Setup and Install Apache Tomcat Server in Eclipse Development Environment(IDE)\nHow to install Eclipse IDE on windows 10 with JDK | Eclipse IDE for Java Developers\nServlet and JSP Tutorial | Eclipse and Tomcat Setup on Windows\nInstalling Apache Tomcat (Hindi) Servlet\nEclipse install with Apache Tomcat Server Setup",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "7xUdKG_wR6HUl6_CXAevDapH7ug",
                "id": "MTE2ODQwNzE5NDgxNjg0MDcxOTQ4MDAwMzAz",
                "snippet": {
                    "publishedAt": "2023-05-14T13:45:48+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Download and Configure Eclipse IDE and Tomcat Server || How to add Tomcat Server in Eclipse",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar \nSimilar topics covered in this tutorial are :-\nHow to Configure Tomcat WebServer with Eclipse IDE Step by step in Hindi\nInstall & Configure Apache Tomcat 10 in Eclipse IDE (2023) | Configure Tomcat Web Server in Eclipse\nHow to Add Tomcat Server in Eclipse IDE Tutorial\nStep by Step Guide to Setup and Install Apache Tomcat Server in Eclipse Development Environment(IDE)\nHow to install Eclipse IDE on windows 10 with JDK | Eclipse IDE for Java Developers\nServlet and JSP Tutorial | Eclipse and Tomcat Setup on Windows\nInstalling Apache Tomcat (Hindi) Servlet\nEclipse install with Apache Tomcat Server Setup",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bHZkuwMdLmc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "R1VlXPNgoVrwM8Fp_NalNFmAepk",
                "id": "MTUxNjgzOTc0MDQ0MTY4Mzk3NDA0NDAwMDYxNw",
                "snippet": {
                    "publishedAt": "2023-05-13T10:34:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 Introduction to Servlets in Java",
                    "description": "#javaprogramming #servlets #smartprogramming #deepakpanwar \nThis tutorial provides you the basic introduction about servlets in java, how servlets works in java. What are servers and server examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HtfP67DkN_1Wl0kUa2XV8DvuIjw",
                "id": "MTE2ODM5NzM2NzQxNjgzOTczNjc0MDAwNjE2",
                "snippet": {
                    "publishedAt": "2023-05-13T10:27:54+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 Introduction to Servlets in Java",
                    "description": "#javaprogramming #servlets #smartprogramming #deepakpanwar \nThis tutorial provides you the basic introduction about servlets in java, how servlets works in java. What are servers and server examples.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WkKT5M-ABnY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "DmpQK0vog9hVZxISuwvoKIXcfL4",
                "id": "MTUxNjgzNjMzOTE2MTY4MzYzMzkxNjAwMDEyMQ",
                "snippet": {
                    "publishedAt": "2023-05-09T12:05:16+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Fetch Data from MySQL Database using JDBC in Java || ResultSet Interface by Deepak",
                    "description": "#javaprogramming #javatutorial #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have explained how ResultSet works internally, how ResultSet fetch data from mysql database.\nHow to select data form database in JDBC using eclipse and mysql database",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "SlkB_LPPsH9--qUff8hReVPwli4",
                "id": "MTE2ODM2MzMyODQxNjgzNjMzMjg0MDAwNTky",
                "snippet": {
                    "publishedAt": "2023-05-09T11:54:44+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#4 Fetch Data from MySQL Database using JDBC in Java || ResultSet Interface by Deepak",
                    "description": "#javaprogramming #javatutorial #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have explained how ResultSet works internally, how ResultSet fetch data from mysql database.\nHow to select data form database in JDBC using eclipse and mysql database",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/P8kJGjbGNv4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wocuv3OFDLW3ju1jz8lUa6Hz9us",
                "id": "MTUxNjgzNDYzMDMwMTY4MzQ2MzAzMDAwMDk2Mw",
                "snippet": {
                    "publishedAt": "2023-05-07T12:37:10+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Update and Delete Operation using JDBC || CRUD Operation || Java MySql Connection",
                    "description": "#javaprogramming #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have explained CRUD Operation Update and Delete query with Java and MySQL in eclipse. Java and MySQL connection is also explained in the video\nJava and MySQL connection in eclipse (JDBC) by complete concepts\nJava Database Connectivity Practical\nJava JDBC tutorial | Java Database Connectivity | Java Tutorial For Beginners\nConnect JAVA with MYSQL database | insert Data into Table Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "u5AIcfsWgpN0BZNJbSE_r4s2hxQ",
                "id": "MTE2ODM0NjE0MjkxNjgzNDYxNDI5MDAwMTU0",
                "snippet": {
                    "publishedAt": "2023-05-07T12:10:29+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#3 Update and Delete Operation using JDBC || CRUD Operation || Java MySql Connection",
                    "description": "#javaprogramming #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have explained CRUD Operation Update and Delete query with Java and MySQL in eclipse. Java and MySQL connection is also explained in the video\nJava and MySQL connection in eclipse (JDBC) by complete concepts\nJava Database Connectivity Practical\nJava JDBC tutorial | Java Database Connectivity | Java Tutorial For Beginners\nConnect JAVA with MYSQL database | insert Data into Table Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Q77DlB3eLP8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "pYrhVnkpFKuZmVRfjooMfMLSong",
                "id": "MTUxNjgzMTE5MDg5MTY4MzExOTA4OTAwMDY4MQ",
                "snippet": {
                    "publishedAt": "2023-05-03T13:04:49+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Java and MySQL connection eclipse | Insert data into table using PreparedStatement JDBC Practical",
                    "description": "#javaprogramming #java #javatutorial #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have deeply explain how to insert values in mysql database using java jdbc\nInsert data into table using PreparedStatement - JDBC\nJava and MySQL connection in eclipse (JDBC) by complete concepts\nJava Database Connectivity Practical\nHow to Insert Data into Database using PreparedStatement in JDBC\nInserting Data to Table with dynamic Input JDBC\nInserting data to database using JDBC | Best Practice | Jdbc Tutorial\nJava JDBC tutorial | Java Database Connectivity | Java Tutorial For Beginners\nConnect JAVA with MYSQL database | insert Data into Table Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "YAw9FuKpLhp7X9phc9-xtRzgN0c",
                "id": "MTE2ODMxMTM5NDgxNjgzMTEzOTQ4MDAwODky",
                "snippet": {
                    "publishedAt": "2023-05-03T11:39:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#2 Java and MySQL connection eclipse | Insert data into table using PreparedStatement JDBC Practical",
                    "description": "#javaprogramming #java #javatutorial #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial we have deeply explain how to insert values in mysql database using java jdbc\nInsert data into table using PreparedStatement - JDBC\nJava and MySQL connection in eclipse (JDBC) by complete concepts\nJava Database Connectivity Practical\nHow to Insert Data into Database using PreparedStatement in JDBC\nInserting Data to Table with dynamic Input JDBC\nInserting data to database using JDBC | Best Practice | Jdbc Tutorial\nJava JDBC tutorial | Java Database Connectivity | Java Tutorial For Beginners\nConnect JAVA with MYSQL database | insert Data into Table Example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Eex25gBotB0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "FyTfCCUz8lOdVqLj4RBkbRSEEyA",
                "id": "MTUxNjgzMDI5MTIxMTY4MzAyOTEyMTAwMDI1MQ",
                "snippet": {
                    "publishedAt": "2023-05-02T12:05:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 JDBC (Java Database Connectivity) || Steps to Connect Java with MySql Database by Deepak",
                    "description": "#javaprogramming #jdbc #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial JDBC is explain with real world example.\nJDBC connection with mysql database steps are also explained \nJDBC (Java Database Connectivity) in Java\nJDBC Connect Java with MySql Database\nJDBC in Simple Way\nSteps to Connect Java with Database | Java Tutorial For Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kUXSSHO1rEtNqPchb5S5GHXVTDI",
                "id": "MTE2ODMwMjg3MDgxNjgzMDI4NzA4MDAwMjI3",
                "snippet": {
                    "publishedAt": "2023-05-02T11:58:28+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "#1 JDBC (Java Database Connectivity) || Steps to Connect Java with MySql Database by Deepak",
                    "description": "#javaprogramming #jdbc #jdbctutorial #smartprogramming #deepakpanwar \nIn this tutorial JDBC is explain with real world example.\nJDBC connection with mysql database steps are also explained \nJDBC (Java Database Connectivity) in Java\nJDBC Connect Java with MySql Database\nJDBC in Simple Way\nSteps to Connect Java with Database | Java Tutorial For Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AGGePFPiNfU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8fpMEXslfJAoR-8DnjonWMuHMFs",
                "id": "MTUxNjgyODU1MTQ5MTY4Mjg1NTE0OTAwMDMyMQ",
                "snippet": {
                    "publishedAt": "2023-04-30T11:45:49+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Hashtable in Java || Working of Hashtable || Collections Framework in Java",
                    "description": "#smartprogramming #javaprogramming #java #javacollections #deepakpanwar \nThis tutorial include hashtable introduction, hashtable properties and working of hashtable.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "gi-lcSFcuGNOEhzjcm3q3c6sLms",
                "id": "MTE2ODI4NTQ5MzAxNjgyODU0OTMwMDAwNTU0",
                "snippet": {
                    "publishedAt": "2023-04-30T11:42:10+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Hashtable in Java || Working of Hashtable || Collections Framework in Java",
                    "description": "#smartprogramming #javaprogramming #java #javacollections #deepakpanwar \nThis tutorial include hashtable introduction, hashtable properties and working of hashtable.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/YhQJdRnyO7A/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9OKihuLFTt--rqN0naVYor6Zh5s",
                "id": "MTUxNjgyMzM4MDcyMTY4MjMzODA3MjAwMDA4Ng",
                "snippet": {
                    "publishedAt": "2023-04-24T12:07:52+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeMap in Java Methods Practical || Java Collections Framework by Deepak",
                    "description": "#javaprogramming #javacollections #smartprogramming #deepakpanwar \nThis tutorial includes TreeMap practical i.e. methods and constructors. TreeMap is an implemented class of NavigableMap, SortedMap and Map interface",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "APsB_VyxU9O9aCf3t0Oa3_aklK8",
                "id": "MTE2ODIzMzcwNTAxNjgyMzM3MDUwMDAwNzI4",
                "snippet": {
                    "publishedAt": "2023-04-24T11:50:50+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeMap in Java Methods Practical || Java Collections Framework by Deepak",
                    "description": "#javaprogramming #javacollections #smartprogramming #deepakpanwar \nThis tutorial includes TreeMap practical i.e. methods and constructors. TreeMap is an implemented class of NavigableMap, SortedMap and Map interface",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/y6NGZR38gog/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "eaQtcs8mXkfM84fBv4LOOgDl47g",
                "id": "MTUxNjgyMTY5MTA3MTY4MjE2OTEwNzAwMDQzMA",
                "snippet": {
                    "publishedAt": "2023-04-22T13:11:47+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeMap in Java - Introduction and Properties || Collections Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming #collectionframework \nThis tutorial include TreeMap class introduction and its properties. TreeMap implements Map interface indirectly.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "W2eLBqa65N_-i1UiD1ZGLDwyl54",
                "id": "MTE2ODIxNjg2OTYxNjgyMTY4Njk2MDAwODQ1",
                "snippet": {
                    "publishedAt": "2023-04-22T13:04:56+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeMap in Java - Introduction and Properties || Collections Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming #collectionframework \nThis tutorial include TreeMap class introduction and its properties. TreeMap implements Map interface indirectly.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jr3BGWn7WD4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "seI3cjpqYbSZIw7BT62AGhmrN3M",
                "id": "MTUxNjgxNDc0MTkzMTY4MTQ3NDE5MzAwMDIwOA",
                "snippet": {
                    "publishedAt": "2023-04-14T12:09:53+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashMap Methods in Java | HashMap Properties Practical Explanation | Map.Entry Interface",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming #java #javacollections \nThis tutorial includes HashMap constructors and methods, and its practical example. Map.Entry interface is used to iterate HashMap elements",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aVbEfYe8BMjOOkvI4W9FsnVEAE0",
                "id": "MTE2ODE0NzA4MDMxNjgxNDcwODAzMDAwNjcx",
                "snippet": {
                    "publishedAt": "2023-04-14T11:13:23+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashMap Methods in Java | HashMap Properties Practical Explanation | Map.Entry Interface",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming #java #javacollections \nThis tutorial includes HashMap constructors and methods, and its practical example. Map.Entry interface is used to iterate HashMap elements",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PArDuViwxH8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "QBV-CIwXdIUC31xTOMNsbuQesz4",
                "id": "MTUxNjgxMjk3NjUzMTY4MTI5NzY1MzAwMDk0OA",
                "snippet": {
                    "publishedAt": "2023-04-12T11:07:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashMap in Java || HashMap Properties Explanation || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming #java #javacollections \nHashMap is an implemented class of Map Interface in Java so properties of Map interface are also inherited in HashMap class. This tutorial explains the HashMap class properties",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "rDYoTid57BoTrQv9S5A96ulfzJ4",
                "id": "MTE2ODEyOTYxMDMxNjgxMjk2MTAzMDAwNDQ4",
                "snippet": {
                    "publishedAt": "2023-04-12T10:41:43+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashMap in Java || HashMap Properties Explanation || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #javaprogramming #java #javacollections \nHashMap is an implemented class of Map Interface in Java so properties of Map interface are also inherited in HashMap class. This tutorial explains the HashMap class properties",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/W_As4PUT5uQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "GVEf93Z_DnIqjaNyVzXTvX6118E",
                "id": "MTUxNjgwNzc5NDczMTY4MDc3OTQ3MzAwMDEyMQ",
                "snippet": {
                    "publishedAt": "2023-04-06T11:11:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Map in Java || Map Interface Methods || Java Collection Framework",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar #javacollections #javacollectionsframework \nThis tutorial focus on Map Interface in Java, practical examples are also explained, Map methods working are explained",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "00RomNIH9GQqrlezXVnTWBxJCo4",
                "id": "MTE2ODA3Nzg0ODUxNjgwNzc4NDg1MDAwMDM5",
                "snippet": {
                    "publishedAt": "2023-04-06T10:54:45+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Map in Java || Map Interface Methods || Java Collection Framework",
                    "description": "#javaprogramming #smartprogramming #deepakpanwar #javacollections #javacollectionsframework \nThis tutorial focus on Map Interface in Java, practical examples are also explained, Map methods working are explained",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/WtUG_-1Sz_k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "f5bcsS9m-0jvXdRf6gl45PF1qQY",
                "id": "MTUxNjgwMDA1Mzg0MTY4MDAwNTM4NDAwMDcxOQ",
                "snippet": {
                    "publishedAt": "2023-03-28T12:09:44+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeSet Methods in Java | TreeSet Properties Explanation | Collection framework Data Structure",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nThis example contains TreeSet program. TreeSet properties are explained deeply with example. TreeSet is the class present in Collection Framework in Java (Data Structure)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "xDnK5XtokXQPVtNSB5zRtha2IAo",
                "id": "MTE2ODAwMDUxNzExNjgwMDA1MTcxMDAwNzI3",
                "snippet": {
                    "publishedAt": "2023-03-28T12:06:11+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeSet Methods in Java | TreeSet Properties Explanation | Collection framework Data Structure",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nThis example contains TreeSet program. TreeSet properties are explained deeply with example. TreeSet is the class present in Collection Framework in Java (Data Structure)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/7GLP-XP8zok/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "to2Z4mHcjD3fgJi5j8VON3ixXo4",
                "id": "MTUxNjc5OTE5NjQ3MTY3OTkxOTY0NzAwMDM4Ng",
                "snippet": {
                    "publishedAt": "2023-03-27T12:20:47+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeSet in Java | Working of TreeSet | Collection Framework Data Structure by Deepak",
                    "description": "#smartprogramming #javaprogramming #java #deepakpanwar \nThis tutorial contains TreeSet introduction and TreeSet properties\nThis is important for Data Structure in Java\nCollections Framework in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "yPmmTQa33RwLw2eykAGVvQT3xUg",
                "id": "MTE2Nzk5MTczMzQxNjc5OTE3MzM0MDAwODQx",
                "snippet": {
                    "publishedAt": "2023-03-27T11:42:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "TreeSet in Java | Working of TreeSet | Collection Framework Data Structure by Deepak",
                    "description": "#smartprogramming #javaprogramming #java #deepakpanwar \nThis tutorial contains TreeSet introduction and TreeSet properties\nThis is important for Data Structure in Java\nCollections Framework in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/BBHkcOMCXSk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "7Oe60oBMn6e-zVyBNWHUNEHoy-0",
                "id": "MTUxNjc5NTczMzc5MTY3OTU3MzM3OTAwMDA3OQ",
                "snippet": {
                    "publishedAt": "2023-03-23T12:09:39+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashSet in Java - Practical || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nHashSet in Java, Placement Course.\nIn this tutorial HashSet properties are deeply explained which is important for Java Interview\nJava Hashset Tutorial - How To Use the Hashset in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "heHX4h1c_rG1hnZaepmXGAEjBDY",
                "id": "MTE2Nzk1NzIxMDcxNjc5NTcyMTA3MDAwMjA4",
                "snippet": {
                    "publishedAt": "2023-03-23T11:48:27+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashSet in Java - Practical || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nHashSet in Java, Placement Course.\nIn this tutorial HashSet properties are deeply explained which is important for Java Interview\nJava Hashset Tutorial - How To Use the Hashset in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PwpjnDu73zU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kmr0W_Gi6TGKGBVrSJa_qTWclCo",
                "id": "MTUxNjc5MzE1NDE1MTY3OTMxNTQxNTAwMDM4Ng",
                "snippet": {
                    "publishedAt": "2023-03-20T12:30:15+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashSet in Java || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nHashSet in Java, Placement Course.\nIn this tutorial HashSet properties are deeply explained which is important for Java Interview\nJava Hashset Tutorial - How To Use the Hashset in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NlNrscDgBRrrZPNgzHo0oDsmolw",
                "id": "MTE2NzkzMTQyNzYxNjc5MzE0Mjc2MDAwODYz",
                "snippet": {
                    "publishedAt": "2023-03-20T12:11:16+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashSet in Java || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nHashSet in Java, Placement Course.\nIn this tutorial HashSet properties are deeply explained which is important for Java Interview\nJava Hashset Tutorial - How To Use the Hashset in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wXiJBZwBKWX5BbrvvlaoJ2-uCCE",
                "id": "MTE2NzkzMTQyNjAxNjc5MzE0MjYwMDAwODYz",
                "snippet": {
                    "publishedAt": "2023-03-20T12:11:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "HashSet in Java || Collection Framework by Deepak",
                    "description": "#smartprogramming #deepakpanwar #java #javaprogramming \nHashSet in Java, Placement Course.\nIn this tutorial HashSet properties are deeply explained which is important for Java Interview\nJava Hashset Tutorial - How To Use the Hashset in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iXhRP1HMTA0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "QS4Y1z5Uu3uX8UrAzjNnRZjdakI",
                "id": "MTUxNjc4NjM4NDEyMTY3ODYzODQxMjAwMDM5NA",
                "snippet": {
                    "publishedAt": "2023-03-12T16:26:52+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Java Live Classes Batch | Core Java | Advance Java Spring Springboot | Admission Open",
                    "description": "Java Live Classes Batch by Deepak Starting from 20th March, 2023....\nCall or Whats App for More Admission Details : +91 62838-30308\nWhats App : https://wa.me/916283830308\nRegister Here : https://www.smartprogramming.in/registration-form-for-online-classes.php",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yOv3AoPXGXA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yOv3AoPXGXA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yOv3AoPXGXA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/yOv3AoPXGXA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/yOv3AoPXGXA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "vp7dJUASrGlwiCOPnpT0s2z-Ngo",
                "id": "MTUxNjc3OTE4NjEyMTY3NzkxODYxMjAwMDc1MA",
                "snippet": {
                    "publishedAt": "2023-03-04T08:30:12+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login using Retrofit, PHP API and MySQL Database | Retrofit Android Tutorial Hindi #52",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nLogin using Retrofit in Android Studio\nAndroid login and logout using Retrofit PHP and MySQL | Android Tutorial in Hindi\nIntegrate Register API using Retrofit in android| Android Retrofit tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MmhGD99m-1g4XZUHAZfsKP0Aa38",
                "id": "MTE2Nzc5MDM1MzkxNjc3OTAzNTM5MDAwMjU5",
                "snippet": {
                    "publishedAt": "2023-03-04T04:18:59+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login using Retrofit, PHP API and MySQL Database | Retrofit Android Tutorial Hindi #52",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nLogin using Retrofit in Android Studio\nAndroid login and logout using Retrofit PHP and MySQL | Android Tutorial in Hindi\nIntegrate Register API using Retrofit in android| Android Retrofit tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/rPcv5yoRh4Q/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2M5W4nmXpcRR5qxDKHufr1KlW1s",
                "id": "MTUxNjc3ODMyMjA2MTY3NzgzMjIwNjAwMDY1MQ",
                "snippet": {
                    "publishedAt": "2023-03-03T08:30:06+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Register using Retrofit, PHP API and MySQL Database | Retrofit Android Tutorial Hindi #51",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nRetrofit Introduction\r\nCreate register PHP API\r\nAndroid register using\r Retrofit Library\nRetrofit Android Tutorial - Sign Up using Retrofit POST Request",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Hvnlzk3mI6f59xkgIXRWv83ysFs",
                "id": "MTE2Nzc4MTYyNDgxNjc3ODE2MjQ4MDAwOTM3",
                "snippet": {
                    "publishedAt": "2023-03-03T04:04:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Register using Retrofit, PHP API and MySQL Database | Retrofit Android Tutorial Hindi #51",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nRetrofit Introduction\r\nCreate register PHP API\r\nAndroid register using\r Retrofit Library\nRetrofit Android Tutorial - Sign Up using Retrofit POST Request",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/P7BzH5p_Xao/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_H3q6EKecfE-875--06rZC3QCBA",
                "id": "MTUxNjc3NjYzMDA4MTY3NzY2MzAwODAwMDQ1OQ",
                "snippet": {
                    "publishedAt": "2023-03-01T09:30:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Retrieve and Parse JSON Data from PHP API | Display JSON in Android RecyclerView Hindi #50",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nLogin using PHP API\nGet Data from PHP API and Display Data in RecyclerView\nParsing JSON Response - Parse JSON Data from Web URL in Android - Complete Tutorial\nJSON Parsing - Parse JSON Data from Web URL in Android | Android Studio Tutorial\nRetrieve & Parse JSON Data from Web URL in Android | Android Tutorials in Hindi\nAndroid Volley Library Tutorial | JSON Parsing Using GSON Library - In Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "c0dM4MEzQ57-pOGn5zlajWXiTc4",
                "id": "MTE2Nzc2NDU0NzAxNjc3NjQ1NDcwMDAwNzA0",
                "snippet": {
                    "publishedAt": "2023-03-01T04:37:50+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Retrieve and Parse JSON Data from PHP API | Display JSON in Android RecyclerView Hindi #50",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nLogin using PHP API\nGet Data from PHP API and Display Data in RecyclerView\nParsing JSON Response - Parse JSON Data from Web URL in Android - Complete Tutorial\nJSON Parsing - Parse JSON Data from Web URL in Android | Android Studio Tutorial\nRetrieve & Parse JSON Data from Web URL in Android | Android Tutorials in Hindi\nAndroid Volley Library Tutorial | JSON Parsing Using GSON Library - In Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Ne5tgZP1GiTHtrKTWSl4Hvbl70M",
                "id": "MTE2Nzc2NDU0MjgxNjc3NjQ1NDI4MDAwNzA0",
                "snippet": {
                    "publishedAt": "2023-03-01T04:37:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Retrieve and Parse JSON Data from PHP API | Display JSON in Android RecyclerView Hindi #50",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nLogin using PHP API\nGet Data from PHP API and Display Data in RecyclerView\nParsing JSON Response - Parse JSON Data from Web URL in Android - Complete Tutorial\nJSON Parsing - Parse JSON Data from Web URL in Android | Android Studio Tutorial\nRetrieve & Parse JSON Data from Web URL in Android | Android Tutorials in Hindi\nAndroid Volley Library Tutorial | JSON Parsing Using GSON Library - In Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GXLPYBu4OdI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "564hXAGa_TgBM2kCA-B4Ed--OYQ",
                "id": "MTUxNjc3NTczMDE1MTY3NzU3MzAxNTAwMDcxNw",
                "snippet": {
                    "publishedAt": "2023-02-28T08:30:15+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android JSON Explanation || PHP Login API returning JSON (Part 1) by Deepak Hindi #49",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nJSON Introduction\nWhy JSON is better than XML\r\nSome PHP functions explanation\nCreate PHP login API returning\r JSON object",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Vc8AW6Sb8Dn2N6I3dsyo2dQbxC0",
                "id": "MTE2Nzc1NTc5ODYxNjc3NTU3OTg2MDAwNTAz",
                "snippet": {
                    "publishedAt": "2023-02-28T04:19:46+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android JSON Explanation || PHP Login API returning JSON (Part 1) by Deepak Hindi #49",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nJSON Introduction\nWhy JSON is better than XML\r\nSome PHP functions explanation\nCreate PHP login API returning\r JSON object",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NJxQJGVSCSzbKWm_ybFD1cDa4f8",
                "id": "MTE2Nzc1NTc5NjUxNjc3NTU3OTY1MDAwNTAz",
                "snippet": {
                    "publishedAt": "2023-02-28T04:19:25+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android JSON Explanation || PHP Login API returning JSON (Part 1) by Deepak Hindi #49",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics covered in this tutorial are :-\nJSON Introduction\nWhy JSON is better than XML\r\nSome PHP functions explanation\nCreate PHP login API returning\r JSON object",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/VAtMsT0JqZY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "h8aPhDIR7juUBEIgqKcceA9tTQY",
                "id": "MTE2Nzc1NTQ3NDAxNjc3NTU0NzQwMDAwOTY1",
                "snippet": {
                    "publishedAt": "2023-02-28T03:25:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio || SQLite Database API || Insert Data in SQLite Database #41",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nSQLite Android CRUD: Implementing Database class | Android Tutorials in Hindi\nSQLite in Android Theory\nSQLite Database Tutorial Android Studio | Insert, Delete, Update and View Data in SQLite Database\nDatabase for Android - Full Course\nAndroid SQLite - Fully Explained",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "apDfU6yhRinuvHD7QeoMR5S6qNw",
                "id": "MTE2Nzc1NTQ3NDAxNjc3NTU0NzQwMDAwNzQ3",
                "snippet": {
                    "publishedAt": "2023-02-28T03:25:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio | Delete and Update Data in SQLite Database | CRUD Hindi #43",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nAndroid SQLite Database: Updating, and Deleting Data in Database (SQLite) - Android Tutorial\nAndroid SQLite CRUD (Create, Read , Update , Delete) Operations | Android SQLite Tutorial\nAndroid Sqlite Crud Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hahGq_uN3EJxaURIYE_umi7z_rg",
                "id": "MTE2Nzc1NTQ3NDAxNjc3NTU0NzQwMDAwNjgw",
                "snippet": {
                    "publishedAt": "2023-02-28T03:25:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio | Retrieve or Fetch Data SQLite | Login and Profile App #42",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics to this tutorial are as follows :-\nHow to retrieve data from sqlite database in Android studio\nFetch the Data From SQLite Database\nInsert, Delete, Update and View Data in SQLite Database\nRead, Retrieve and show Data from Local Database (SQLite) in Android Apps with java | Android Studio\nInsert and Get Data\nLogin and display user details in profile activity",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EkLXmSvFAOvOriUejynarcc_CtI",
                "id": "MTE2Nzc1NTQ2ODAxNjc3NTU0NjgwMDAwODMz",
                "snippet": {
                    "publishedAt": "2023-02-28T03:24:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How Android Communicates with Java API and MySQL || Servlet API - Postman | Android Studio Hindi #44",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nHow android calls Java API\nAndroid studio with MySQL\nCreate Servlet API Webservices\nJava Servlets with MySQL\nHow Android App communicates with MySQL\r Database\nSoftwares used to connect android using\r MySQL Database\r\nHow to download, install and use Postman\r\nHow to create Servlet file in Java and enter \rvalues in Database",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-UePPXjrATRhFysHzxGHuTC6e6A",
                "id": "MTE2Nzc1NTQ2ODAxNjc3NTU0NjgwMDAwODA5",
                "snippet": {
                    "publishedAt": "2023-02-28T03:24:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login and Register with PHP API, MySQL and Volley Library || Android Tutorials Hindi #48",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nLogin And SignUp In Android With MySQL\nAndroid login and Registration with MySQL using REST API\nREGISTER - Android Login And Register | (Volley Library, PHP, MySQL)\nAndroid Login and Registration system using MySQl Database\nEmail Validations while register android\nEmail id already exist example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "6hYecVIqd9Ad5wo4NF5YXHLKFPA",
                "id": "MTE2Nzc1NTQ2ODAxNjc3NTU0NjgwMDAwNjM2",
                "snippet": {
                    "publishedAt": "2023-02-28T03:24:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Register with Java API, MySQL and Volley Library | API calls in android Volley Library #45",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nDeep explanation how volley works in android\nTopics related to this tutorial are as follows :-\nHow to make API calls in Android Studio | Volley library | Android Development Tutorial\nAdding Volley Library dependency\nAPI calling in android java how to call API in android studio\nREGISTER - Android Login And Register",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "CI-F5bC0FrOxK1fGtm-ouLWVyVg",
                "id": "MTE2Nzc1NTQ2ODAxNjc3NTU0NjgwMDAwNDA0",
                "snippet": {
                    "publishedAt": "2023-02-28T03:24:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Create PHP API for Android Register || PHP, XAMPP, MYSQL || Android Tutorials by Deepak Hindi #47",
                    "description": "#android #androidtutorial #androidstudio #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nPHP API for Android\nHow to make API for android app in PHP\nAndroid Registration with PHP API and MySQL",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uJ_Hy3LrfAgz_C1KbD-axX8wjvE",
                "id": "MTE2Nzc1NTQ2ODAxNjc3NTU0NjgwMDAwMzk2",
                "snippet": {
                    "publishedAt": "2023-02-28T03:24:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login with Java API, MySQL and Volley Library | XAMPP Download & Install Hindi #46",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nAndroid Login Register with an API || android login register tutorial || Login Register Design\nAndroid login and Registration with MySQL using REST API\nAndroid Login and Registration using JSP + Servlet + JDBC + MySQL\nLogin & Register Android App\nDownload and Install XAMPP Server Software",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "oyeOJdqvqo5HqVAFkBs1diSonAo",
                "id": "MTUxNjc3NDkzNDczMTY3NzQ5MzQ3MzAwMDMzNA",
                "snippet": {
                    "publishedAt": "2023-02-27T10:24:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login and Register with PHP API, MySQL and Volley Library || Android Tutorials Hindi #48",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nLogin And SignUp In Android With MySQL\nAndroid login and Registration with MySQL using REST API\nREGISTER - Android Login And Register | (Volley Library, PHP, MySQL)\nAndroid Login and Registration system using MySQl Database\nEmail Validations while register android\nEmail id already exist example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tCIgakIFP9jKmze4PgUXwdfsJM4",
                "id": "MTE2Nzc0OTIwNDUxNjc3NDkyMDQ1MDAwODA5",
                "snippet": {
                    "publishedAt": "2023-02-27T10:00:45+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login and Register with PHP API, MySQL and Volley Library || Android Tutorials Hindi #48",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nLogin And SignUp In Android With MySQL\nAndroid login and Registration with MySQL using REST API\nREGISTER - Android Login And Register | (Volley Library, PHP, MySQL)\nAndroid Login and Registration system using MySQl Database\nEmail Validations while register android\nEmail id already exist example",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/kXbuYEo1zAU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "T6LptXB8mVMLWFsAd3T2MNTNwCY",
                "id": "MTUxNjc3NDE4MzAwMTY3NzQxODMwMDAwMDgwMg",
                "snippet": {
                    "publishedAt": "2023-02-26T13:31:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Create PHP API for Android Register || PHP, XAMPP, MYSQL || Android Tutorials by Deepak Hindi #47",
                    "description": "#android #androidtutorial #androidstudio #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nPHP API for Android\nHow to make API for android app in PHP\nAndroid Registration with PHP API and MySQL",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "vJpZX7a-yrxNETWNwY4_rAdx6AE",
                "id": "MTE2Nzc0MDc2MzUxNjc3NDA3NjM1MDAwNDA0",
                "snippet": {
                    "publishedAt": "2023-02-26T10:33:55+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Create PHP API for Android Register || PHP, XAMPP, MYSQL || Android Tutorials by Deepak Hindi #47",
                    "description": "#android #androidtutorial #androidstudio #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nPHP API for Android\nHow to make API for android app in PHP\nAndroid Registration with PHP API and MySQL",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/le2SIkMOPKE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "S0W3G3dMOI0imDWw0qVp36h4X6I",
                "id": "MTUxNjc3MjM1Mzc5MTY3NzIzNTM3OTAwMDYwMA",
                "snippet": {
                    "publishedAt": "2023-02-24T10:42:59+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login with Java API, MySQL and Volley Library | XAMPP Download & Install Hindi #46",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nAndroid Login Register with an API || android login register tutorial || Login Register Design\nAndroid login and Registration with MySQL using REST API\nAndroid Login and Registration using JSP + Servlet + JDBC + MySQL\nLogin & Register Android App\nDownload and Install XAMPP Server Software",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4O1kZqHVAS9-xjJC_xDNxA-sISw",
                "id": "MTE2NzcyMzQ2MzUxNjc3MjM0NjM1MDAwMzk2",
                "snippet": {
                    "publishedAt": "2023-02-24T10:30:35+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Login with Java API, MySQL and Volley Library | XAMPP Download & Install Hindi #46",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nAndroid Login Register with an API || android login register tutorial || Login Register Design\nAndroid login and Registration with MySQL using REST API\nAndroid Login and Registration using JSP + Servlet + JDBC + MySQL\nLogin & Register Android App\nDownload and Install XAMPP Server Software",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q-DALXkq_D4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "iIGWRZyZ9xBZw4vgGIa7OimMXbc",
                "id": "MTUxNjc3MTQ4NzIzMTY3NzE0ODcyMzAwMDA2OA",
                "snippet": {
                    "publishedAt": "2023-02-23T10:38:43+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Register with Java API, MySQL and Volley Library | API calls in android Volley Library #45",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nDeep explanation how volley works in android\nTopics related to this tutorial are as follows :-\nHow to make API calls in Android Studio | Volley library | Android Development Tutorial\nAdding Volley Library dependency\nAPI calling in android java how to call API in android studio\nREGISTER - Android Login And Register",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hlI344yubgtYVV0fd5ocX2WB-ko",
                "id": "MTE2NzcxNDg0MTcxNjc3MTQ4NDE3MDAwNjM2",
                "snippet": {
                    "publishedAt": "2023-02-23T10:33:37+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Register with Java API, MySQL and Volley Library | API calls in android Volley Library #45",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nDeep explanation how volley works in android\nTopics related to this tutorial are as follows :-\nHow to make API calls in Android Studio | Volley library | Android Development Tutorial\nAdding Volley Library dependency\nAPI calling in android java how to call API in android studio\nREGISTER - Android Login And Register",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ken3E5kyoWQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "jOrr5rxabffl92x1VqqyEVDk52I",
                "id": "MTUxNjc3MDY2NzU5MTY3NzA2Njc1OTAwMDk1Nw",
                "snippet": {
                    "publishedAt": "2023-02-22T11:52:39+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How Android Communicates with Java API and MySQL || Servlet API - Postman | Android Studio Hindi #44",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nHow android calls Java API\nAndroid studio with MySQL\nCreate Servlet API Webservices\nJava Servlets with MySQL\nHow Android App communicates with MySQL\r Database\nSoftwares used to connect android using\r MySQL Database\r\nHow to download, install and use Postman\r\nHow to create Servlet file in Java and enter \rvalues in Database",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "k21jFDros6-NfwvQEzAVuw8CJNQ",
                "id": "MTE2NzcwNjU3MzMxNjc3MDY1NzMzMDAwODMz",
                "snippet": {
                    "publishedAt": "2023-02-22T11:35:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How Android Communicates with Java API and MySQL || Servlet API - Postman | Android Studio Hindi #44",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nHow android calls Java API\nAndroid studio with MySQL\nCreate Servlet API Webservices\nJava Servlets with MySQL\nHow Android App communicates with MySQL\r Database\nSoftwares used to connect android using\r MySQL Database\r\nHow to download, install and use Postman\r\nHow to create Servlet file in Java and enter \rvalues in Database",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/yyIfROdULw4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "XMCvbXZIM6JvDMvkDA1bpKUCgMQ",
                "id": "MTUxNjc2OTc3NjAzMTY3Njk3NzYwMzAwMDEzOA",
                "snippet": {
                    "publishedAt": "2023-02-21T11:06:43+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio | Delete and Update Data in SQLite Database | CRUD Hindi #43",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nAndroid SQLite Database: Updating, and Deleting Data in Database (SQLite) - Android Tutorial\nAndroid SQLite CRUD (Create, Read , Update , Delete) Operations | Android SQLite Tutorial\nAndroid Sqlite Crud Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9Ii2lnQfhfFnD2KktU1g_0yCzns",
                "id": "MTE2NzY5NzcxNzYxNjc2OTc3MTc2MDAwNzQ3",
                "snippet": {
                    "publishedAt": "2023-02-21T10:59:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio | Delete and Update Data in SQLite Database | CRUD Hindi #43",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nAndroid SQLite Database: Updating, and Deleting Data in Database (SQLite) - Android Tutorial\nAndroid SQLite CRUD (Create, Read , Update , Delete) Operations | Android SQLite Tutorial\nAndroid Sqlite Crud Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/IQAXYZrOrMg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5YZGqxt_qf_ZiO8MaXZxb7Jx0tw",
                "id": "MTUxNjc2ODkyMTYxMTY3Njg5MjE2MTAwMDcyMA",
                "snippet": {
                    "publishedAt": "2023-02-20T11:22:41+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio | Retrieve or Fetch Data SQLite | Login and Profile App #42",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics to this tutorial are as follows :-\nHow to retrieve data from sqlite database in Android studio\nFetch the Data From SQLite Database\nInsert, Delete, Update and View Data in SQLite Database\nRead, Retrieve and show Data from Local Database (SQLite) in Android Apps with java | Android Studio\nInsert and Get Data\nLogin and display user details in profile activity",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3EEkF4X0P6QevoBF2v7CFYoDisk",
                "id": "MTE2NzY4OTExNzIxNjc2ODkxMTcyMDAwNjgw",
                "snippet": {
                    "publishedAt": "2023-02-20T11:06:12+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio | Retrieve or Fetch Data SQLite | Login and Profile App #42",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics to this tutorial are as follows :-\nHow to retrieve data from sqlite database in Android studio\nFetch the Data From SQLite Database\nInsert, Delete, Update and View Data in SQLite Database\nRead, Retrieve and show Data from Local Database (SQLite) in Android Apps with java | Android Studio\nInsert and Get Data\nLogin and display user details in profile activity",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/C2uiPWyYWmY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "cRvLCcZKs0WsVVTabw98uUuxSnw",
                "id": "MTUxNjc2ODEyMjk0MTY3NjgxMjI5NDAwMDI5MA",
                "snippet": {
                    "publishedAt": "2023-02-19T13:11:34+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio || SQLite Database API || Insert Data in SQLite Database #41",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nSQLite Android CRUD: Implementing Database class | Android Tutorials in Hindi\nSQLite in Android Theory\nSQLite Database Tutorial Android Studio | Insert, Delete, Update and View Data in SQLite Database\nDatabase for Android - Full Course\nAndroid SQLite - Fully Explained",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "BiFOZ1eZvtIEhEwaIhp9rZS-mrw",
                "id": "MTE2NzY4MTE2MTcxNjc2ODExNjE3MDAwOTY1",
                "snippet": {
                    "publishedAt": "2023-02-19T13:00:17+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SQLite Database Tutorial Android Studio || SQLite Database API || Insert Data in SQLite Database #41",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nSQLite Android CRUD: Implementing Database class | Android Tutorials in Hindi\nSQLite in Android Theory\nSQLite Database Tutorial Android Studio | Insert, Delete, Update and View Data in SQLite Database\nDatabase for Android - Full Course\nAndroid SQLite - Fully Explained",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DVWGY-4Cc3Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "LwPUK131Pt-TCgzfmDMuWEpucCc",
                "id": "MTUxNjc2NzE4NzUyMTY3NjcxODc1MjAwMDcxMQ",
                "snippet": {
                    "publishedAt": "2023-02-18T11:12:32+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Shared Preferences: Save & Retrieve Data Android Studio | Session Management - Login & Register #40",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics covered in this tutorial are as follows :-\nShared Preferences: Saving data to Android device | Android Tutorials in Hindi\nHow to Save Variables in SharedPreferences\nSharedPreferences - How to Save & Retrieve Data Android Studio | Beginner's Guide\nSession in Android app using SharedPreference\nHow to Implement Session Manager\nAndroid User Session Using Shared Preferences\nLogin Register example in Android",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "pfXwS8l4Yu3UFLrZDqJuJBuv_yY",
                "id": "MTE2NzY3MTc4MTAxNjc2NzE3ODEwMDAwMjc3",
                "snippet": {
                    "publishedAt": "2023-02-18T10:56:50+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Shared Preferences: Save & Retrieve Data Android Studio | Session Management - Login & Register #40",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics covered in this tutorial are as follows :-\nShared Preferences: Saving data to Android device | Android Tutorials in Hindi\nHow to Save Variables in SharedPreferences\nSharedPreferences - How to Save & Retrieve Data Android Studio | Beginner's Guide\nSession in Android app using SharedPreference\nHow to Implement Session Manager\nAndroid User Session Using Shared Preferences\nLogin Register example in Android",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1P9g-DyvdGk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Ds8U43m-LQst6JIGa-iDUM4U1xc",
                "id": "MTUxNjc2NTQ4OTAwMTY3NjU0ODkwMDAwMDAwNw",
                "snippet": {
                    "publishedAt": "2023-02-16T12:01:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Permissions | Send SMS | Make a Phone Call | Capture Image & Display in ImageView Android Studio #39",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics to this tutorial are as follows :-\nHow to Request a Run Time Permission - Android Studio Tutorial\nPERMISSIONS - Android Fundamentals\nHow to send SMS automatically from your phone by programming in Android Studio java code\nHow to Make a Phone Call from Your App (+ Permission Request) - Android Studio Tutorial\nHow do you Send and Receive Text Messages on Android Studio - Android Studio Tutorial\nTutorial 9 : Telephony for call and SMS | Android App Development for Beginners\nUpload Image using Camera - Get Image from Camera | Android Studio Tutorial\nBuild Camera App Using Android Studio in 5 Minutes\nHow to Capture Image With Camera in Android Studio | CaptureImage | Android Coding\nCapture Image & Display in ImageView | Android App Development Tutorials\nHow to ask for app permission in runtime in android || Android studio tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MCX2pWIJ-ulc8SKyyiaCmyju320",
                "id": "MTE2NzY1NDc0MzQxNjc2NTQ3NDM0MDAwNTk0",
                "snippet": {
                    "publishedAt": "2023-02-16T11:37:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Permissions | Send SMS | Make a Phone Call | Capture Image & Display in ImageView Android Studio #39",
                    "description": "#android #androidtutorial #androidstudio #smartprogramming #deepakpanwar \nRelated topics to this tutorial are as follows :-\nHow to Request a Run Time Permission - Android Studio Tutorial\nPERMISSIONS - Android Fundamentals\nHow to send SMS automatically from your phone by programming in Android Studio java code\nHow to Make a Phone Call from Your App (+ Permission Request) - Android Studio Tutorial\nHow do you Send and Receive Text Messages on Android Studio - Android Studio Tutorial\nTutorial 9 : Telephony for call and SMS | Android App Development for Beginners\nUpload Image using Camera - Get Image from Camera | Android Studio Tutorial\nBuild Camera App Using Android Studio in 5 Minutes\nHow to Capture Image With Camera in Android Studio | CaptureImage | Android Coding\nCapture Image & Display in ImageView | Android App Development Tutorials\nHow to ask for app permission in runtime in android || Android studio tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ksD2ItUkfLc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "dR6xHhmaUnUBzfFY5_QZqmzJy-I",
                "id": "MTUxNjc2Mzc1OTM4MTY3NjM3NTkzODAwMDAzNw",
                "snippet": {
                    "publishedAt": "2023-02-14T11:58:58+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Awesome Item Animations for RecyclerView || Android Glide and Picasso Library Android Tutorial #38",
                    "description": "#android #smartprogramming #androidtutorial #deepakpanwar \nTopics related to this tutorial are as follows :-\nAwesome Item Animations for RecyclerView - Android Studio Tutorial\nRecyclerView item animation in android studio | Recyclerview animation in android\nHow to Animate RecyclerView Items in Android? - Android Studio Tutorial\nNice Animations for RecyclerView - Android Studio Tutorial\nAnimate Recycler View Items on Scroll in android studio\nCreate RecyclerView Item Animation\nRecyclerView in Android | Android Tutorials in Hindi\nRecyclerview with Cardview in Android Studio\nAndroid RecyclerView Tutorial - Working Example In Hindi\nAndroid Recycler view Animation Android Studio Tutorial\nAndroid Studio Tutorial - RecyclerView Animation\nglide library in android studio\nAndroid Glide Library Tutorial With Example | Image Loader Into Image View - In Hindi\nGlide Tutorial | Glide Apps Tutorial | images | load image from url android studio\nGlide Tutorial - Working with images in your Android App - Loading and Caching Images\nHow to Implement Glide Library in Android Studio | GlideLibrary | Android Coding\nLoading and caching images | Glide Library | Android\nAndroid RecyclerView + Retrofit + Glide Working Example | JSON API + RecyclerView (in Hindi)\nGlide library in Android Studio | Memes share App Done! | Android Development Tutorial\npicasso library android tutorial\nHow to Load an Image from a Url with Picasso - Android Studio Tutorial\nPicasso android library tutorial | Imageview Tutorial | Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5emcR6Ej-mYIQmaDGGQoCD4vchY",
                "id": "MTE2NzYzNzU3MzYxNjc2Mzc1NzM2MDAwODY0",
                "snippet": {
                    "publishedAt": "2023-02-14T11:55:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Awesome Item Animations for RecyclerView || Android Glide and Picasso Library Android Tutorial #38",
                    "description": "#android #smartprogramming #androidtutorial #deepakpanwar \nTopics related to this tutorial are as follows :-\nAwesome Item Animations for RecyclerView - Android Studio Tutorial\nRecyclerView item animation in android studio | Recyclerview animation in android\nHow to Animate RecyclerView Items in Android? - Android Studio Tutorial\nNice Animations for RecyclerView - Android Studio Tutorial\nAnimate Recycler View Items on Scroll in android studio\nCreate RecyclerView Item Animation\nRecyclerView in Android | Android Tutorials in Hindi\nRecyclerview with Cardview in Android Studio\nAndroid RecyclerView Tutorial - Working Example In Hindi\nAndroid Recycler view Animation Android Studio Tutorial\nAndroid Studio Tutorial - RecyclerView Animation\nglide library in android studio\nAndroid Glide Library Tutorial With Example | Image Loader Into Image View - In Hindi\nGlide Tutorial | Glide Apps Tutorial | images | load image from url android studio\nGlide Tutorial - Working with images in your Android App - Loading and Caching Images\nHow to Implement Glide Library in Android Studio | GlideLibrary | Android Coding\nLoading and caching images | Glide Library | Android\nAndroid RecyclerView + Retrofit + Glide Working Example | JSON API + RecyclerView (in Hindi)\nGlide library in Android Studio | Memes share App Done! | Android Development Tutorial\npicasso library android tutorial\nHow to Load an Image from a Url with Picasso - Android Studio Tutorial\nPicasso android library tutorial | Imageview Tutorial | Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Ydg5q90VxSM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "PNYeN-OsSRwJUmaemrmQETwF9d8",
                "id": "MTUxNjc2MjgwNTkyMTY3NjI4MDU5MjAwMDI0OA",
                "snippet": {
                    "publishedAt": "2023-02-13T09:29:52+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "RecyclerView in Android | RecyclerView with CardView UI Design in Android Studio by Deepak Hindi #37",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this android tutorial are as follows :-\nCardView UI Design Android Studio | Using Grid Layout\nCard View UI Design Android Studio - Material Design | Android Tutorial App UI\nCard View UI Design Android Studio | Modern Dashboard UI Design Android Studio\nModern Dashboard UI Design Android Studio Tutorial | Cardview Android Studio | Grid layout Android\nHow To Make Cards In Android Studio | CardView Tutorial in Android Studio\nCreate CardView in Android Studio | Custom Cardview | Complete Guide\nCardView in Android - Layout Sample for RecyclerView\nAndroid RecyclerView With CardView and OnItemClickListener Example | RecyclerView OnClickListener\nRecyclerview with Cardview in Android Studio: Dispaly items\nAndroid RecyclerView Tutorial and CardView Tutorial\nHow to Create Grid Layout and CardView Layout in Android Studio\nSimple RecyclerView with CardView Tutorials in Android Studio\nCardview Designing Home Screen UI design in Android Studio | UiUX TutorialAndroid RecyclerView With CardView and OnItemClickListener Example | RecyclerView OnClickListener\nAndroid RecyclerView and CardView Tutorial\nRecyclerview with Cardview in Android Studio\nRecyclerview with Cardview in Android | RecyclerView with CardView\nHow to Create Grid Layout and CardView Layout in Android Studio\nRecycler View in Android Studio Explained with Example | Android Recycler View Tutorial RecyclerView in Android | Android Tutorials in Hindi\nRecyclerview in android studio\nAndroid RecyclerView Tutorial - Working Example In Hindi\nRecyclerView in Android Studio Tutorial | News App | Android Development Tutorial\nRecyclerView Android Studio Tutorial\nRecyclerView in Android Studio-Tutorial\nAndroid RecyclerView in Hindi | Recycler view | RecyclerView",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "FIxqtZQ0FPwf4GyzxT3H4QvfNig",
                "id": "MTE2NzYyNzk3NzgxNjc2Mjc5Nzc4MDAwOTYw",
                "snippet": {
                    "publishedAt": "2023-02-13T09:16:18+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "RecyclerView in Android | RecyclerView with CardView UI Design in Android Studio by Deepak Hindi #37",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this android tutorial are as follows :-\nCardView UI Design Android Studio | Using Grid Layout\nCard View UI Design Android Studio - Material Design | Android Tutorial App UI\nCard View UI Design Android Studio | Modern Dashboard UI Design Android Studio\nModern Dashboard UI Design Android Studio Tutorial | Cardview Android Studio | Grid layout Android\nHow To Make Cards In Android Studio | CardView Tutorial in Android Studio\nCreate CardView in Android Studio | Custom Cardview | Complete Guide\nCardView in Android - Layout Sample for RecyclerView\nAndroid RecyclerView With CardView and OnItemClickListener Example | RecyclerView OnClickListener\nRecyclerview with Cardview in Android Studio: Dispaly items\nAndroid RecyclerView Tutorial and CardView Tutorial\nHow to Create Grid Layout and CardView Layout in Android Studio\nSimple RecyclerView with CardView Tutorials in Android Studio\nCardview Designing Home Screen UI design in Android Studio | UiUX TutorialAndroid RecyclerView With CardView and OnItemClickListener Example | RecyclerView OnClickListener\nAndroid RecyclerView and CardView Tutorial\nRecyclerview with Cardview in Android Studio\nRecyclerview with Cardview in Android | RecyclerView with CardView\nHow to Create Grid Layout and CardView Layout in Android Studio\nRecycler View in Android Studio Explained with Example | Android Recycler View Tutorial RecyclerView in Android | Android Tutorials in Hindi\nRecyclerview in android studio\nAndroid RecyclerView Tutorial - Working Example In Hindi\nRecyclerView in Android Studio Tutorial | News App | Android Development Tutorial\nRecyclerView Android Studio Tutorial\nRecyclerView in Android Studio-Tutorial\nAndroid RecyclerView in Hindi | Recycler view | RecyclerView",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/uzM_M3xovWk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-mPmlXDesgNxpKYbV1yUxzFn2f4",
                "id": "MTUxNjc2MjA1OTAwMTY3NjIwNTkwMDAwMDc0NA",
                "snippet": {
                    "publishedAt": "2023-02-12T12:45:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Navigation Drawer with Fragments || Create Navigation Drawer Activity || Android Studio Tutorial #36",
                    "description": "#android #androidtutorial #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nAndroid Navigation Drawer |Custom Navigation Drawer |Create Navigation Drawer Activity\nCreate a Modern Navigation drawer ( Side Menu ) in android studio // complete tutorial\nNavigation Drawer with Fragments - Menu and Activity Theme - Android Studio Tutorial\nAndroid Navigation Drawer Tutorial | How to Create Navigation Drawer in Android StudioAndroid Navigation Drawer Menu Material Design | All you need to create a professional Navigation Drawer\nNavigation Drawer with Fragments in Android Studio || Java || Fragments with Navigation Drawer\nAndroid Navigation Drawer Menu Material Design | Android studio tutorial\nNavigation Drawer Android Studio - Navigation Drawer with Navigation Components\nCreate a Modern Bottom Navigation Bar Android Studio\nHow to Create and Edit Navigation Drawer Activity | Easiest Way | Android Studio Latest Version\nAndroid Navigation Drawer & Material ToolBar | NavigationView\nAndroid Studio Navigation Drawer With Fragment and Activity || Custom Navigation Drawer\nNavigation Drawer Activity in Android Studio | Android Development Tutorial\nBottomNavigationView with Navigation Component - Android Studio Tutorial\nBottom Navigation Bar | Fragments | Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8oZHDMF9zK2QxN9kXI8WXX_hhZY",
                "id": "MTE2NzYyMDU2ODExNjc2MjA1NjgxMDAwMDE0",
                "snippet": {
                    "publishedAt": "2023-02-12T12:41:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Navigation Drawer with Fragments || Create Navigation Drawer Activity || Android Studio Tutorial #36",
                    "description": "#android #androidtutorial #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nAndroid Navigation Drawer |Custom Navigation Drawer |Create Navigation Drawer Activity\nCreate a Modern Navigation drawer ( Side Menu ) in android studio // complete tutorial\nNavigation Drawer with Fragments - Menu and Activity Theme - Android Studio Tutorial\nAndroid Navigation Drawer Tutorial | How to Create Navigation Drawer in Android StudioAndroid Navigation Drawer Menu Material Design | All you need to create a professional Navigation Drawer\nNavigation Drawer with Fragments in Android Studio || Java || Fragments with Navigation Drawer\nAndroid Navigation Drawer Menu Material Design | Android studio tutorial\nNavigation Drawer Android Studio - Navigation Drawer with Navigation Components\nCreate a Modern Bottom Navigation Bar Android Studio\nHow to Create and Edit Navigation Drawer Activity | Easiest Way | Android Studio Latest Version\nAndroid Navigation Drawer & Material ToolBar | NavigationView\nAndroid Studio Navigation Drawer With Fragment and Activity || Custom Navigation Drawer\nNavigation Drawer Activity in Android Studio | Android Development Tutorial\nBottomNavigationView with Navigation Component - Android Studio Tutorial\nBottom Navigation Bar | Fragments | Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zk9D-6LKZWo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "DXiSg-080R3RnqOTuQYEzYhVkVY",
                "id": "MTUxNjc2MTIzMTEyMTY3NjEyMzExMjAwMDY1Nw",
                "snippet": {
                    "publishedAt": "2023-02-11T13:45:12+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "BottomNavigationView with Fragments | Floating Action Button | Android Studio Tutorial by Deepak #35",
                    "description": "#android #androidtutorial #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nBottomNavigationView with Fragments - Android Studio Tutorial\nBottomNavigationView with Navigation Component - Android Studio Tutorial\nBottom Navigation Bar - Android Studio | Fragments | Java\nBottomNavigationView in Android Studio | Android Studio Tutorial for Beginners\nBottomNavigationView with Fragments | Android Studio Tutorial\nBottom Navigation Bar - Android Studio | Fragments\nAndroid Bottom Navigation View using Fragment in Hindi | BottomNavigatioView | Android Tutorial\nBOTTOM NAVIGATION VIEW - Android Fundamentals\nHow to Implement Bottom Navigation With Activities in Android Studio | BottomNav | Android Coding\nTab Layout with Fragments in Android Studio || Tab Layout with ViewPager || Tab Layout\nHow To Make A Bottom Navigation Bar With A Floating Action Button - Android Studio Tutorial\nBottom navigation view with Navigation Component\nBottom Menu | Bottom Navigation View | Bottom App Bar | Material Design\nFloating Action Button in Android Studio\nHow to Add a Floating Action Button to a Bottom Navigation - Android Studio Tutorial\nHow To Make A Bottom Navigation Bar With A Floating Action Button - Android Studio Tutorial\nHow to Implement Floating Action Button in Android Studio | FloatingActionButton | Android Coding\nAndroid Floating Action Button with Animation | Android Studio | Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HRzU5zr4mvY19yGJRAtNuRjeTW4",
                "id": "MTE2NzYxMjE5MjAxNjc2MTIxOTIwMDAwMjYw",
                "snippet": {
                    "publishedAt": "2023-02-11T13:25:20+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "BottomNavigationView with Fragments | Floating Action Button | Android Studio Tutorial by Deepak #35",
                    "description": "#android #androidtutorial #deepakpanwar #smartprogramming \nTopics related to this tutorial are as follows :-\nBottomNavigationView with Fragments - Android Studio Tutorial\nBottomNavigationView with Navigation Component - Android Studio Tutorial\nBottom Navigation Bar - Android Studio | Fragments | Java\nBottomNavigationView in Android Studio | Android Studio Tutorial for Beginners\nBottomNavigationView with Fragments | Android Studio Tutorial\nBottom Navigation Bar - Android Studio | Fragments\nAndroid Bottom Navigation View using Fragment in Hindi | BottomNavigatioView | Android Tutorial\nBOTTOM NAVIGATION VIEW - Android Fundamentals\nHow to Implement Bottom Navigation With Activities in Android Studio | BottomNav | Android Coding\nTab Layout with Fragments in Android Studio || Tab Layout with ViewPager || Tab Layout\nHow To Make A Bottom Navigation Bar With A Floating Action Button - Android Studio Tutorial\nBottom navigation view with Navigation Component\nBottom Menu | Bottom Navigation View | Bottom App Bar | Material Design\nFloating Action Button in Android Studio\nHow to Add a Floating Action Button to a Bottom Navigation - Android Studio Tutorial\nHow To Make A Bottom Navigation Bar With A Floating Action Button - Android Studio Tutorial\nHow to Implement Floating Action Button in Android Studio | FloatingActionButton | Android Coding\nAndroid Floating Action Button with Animation | Android Studio | Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iQHHUjDGHSA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "s7KCm9sDiBNOe2bKwRvUoaHiiPw",
                "id": "MTUxNjc1OTUwNzk5MTY3NTk1MDc5OTAwMDU2MA",
                "snippet": {
                    "publishedAt": "2023-02-09T13:53:19+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Tab Layout with Fragments in Android Studio || Tab Layout with ViewPager by Deepak Hindi #34",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nTab Layout with Fragments in Android Studio || Tab Layout with ViewPager || Tab Layout\nAndroid Tab Layout in Hindi | Tab Layout with fragments | Android Tablayout | Android Tutorial\nTab Layout with Fragments | Android Studio Tutorial\nTab Layout in Android Studio with Example | Android App Development Tutorial\nCustom Tab Layout Using View Pager 2 | Android Studio\nCreating a Tab Layout with Icons & Fragments in Android Studio Tutorial\nhow to create tablayout with viewpager2 in android studio - Source code available\nFragment with Recyclerview Part 1 : Create tablayout with icons | Android studio Tutorial\nCreating Tabs in Android Studio with Tabbed Activity\nCreate tab layout with fragments in Android studio\nAndroid Studio Tutorial\nTab Layout with Different Fragments - Android Studio Tutorial\nCreating Tabs in Android Studio with Tabbed Activity - Android Tutorial in Hindi\nTAB LAYOUT WITH VIEWPAGER 2 - Android Fundamentals",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "XydLxXfV6dUTcB-n7tQJGLpCbLs",
                "id": "MTE2NzU5NDY0ODMxNjc1OTQ2NDgzMDAwMDUw",
                "snippet": {
                    "publishedAt": "2023-02-09T12:41:23+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Tab Layout with Fragments in Android Studio || Tab Layout with ViewPager by Deepak Hindi #34",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nTab Layout with Fragments in Android Studio || Tab Layout with ViewPager || Tab Layout\nAndroid Tab Layout in Hindi | Tab Layout with fragments | Android Tablayout | Android Tutorial\nTab Layout with Fragments | Android Studio Tutorial\nTab Layout in Android Studio with Example | Android App Development Tutorial\nCustom Tab Layout Using View Pager 2 | Android Studio\nCreating a Tab Layout with Icons & Fragments in Android Studio Tutorial\nhow to create tablayout with viewpager2 in android studio - Source code available\nFragment with Recyclerview Part 1 : Create tablayout with icons | Android studio Tutorial\nCreating Tabs in Android Studio with Tabbed Activity\nCreate tab layout with fragments in Android studio\nAndroid Studio Tutorial\nTab Layout with Different Fragments - Android Studio Tutorial\nCreating Tabs in Android Studio with Tabbed Activity - Android Tutorial in Hindi\nTAB LAYOUT WITH VIEWPAGER 2 - Android Fundamentals",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/vmpCY_ajP_c/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5AQhInH1UZ1yE6QTqG_ZeDgHR_o",
                "id": "MTUxNjc1ODYwNzc0MTY3NTg2MDc3NDAwMDYzOQ",
                "snippet": {
                    "publishedAt": "2023-02-08T12:52:54+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ViewPager in Android using Android Studio || Implement Viewpager2 || Android Tutorials by Deepak #33",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nViewPager in Android using Android Studio\nHow to Implement Viewpager2 in Android Studio || ViewPager2 || Android StudioAndroid studio Image Slider using ViewPager tutorial in Hindi/Urdu\nTab Layout with Fragments in Android Studio || Tab Layout with ViewPager || Tab Layout\nViewPager in Android Studio | Implement Swipe View using ViewPager | ViewPager |Android Tutorial\nTab Layout in Android Studio with Example | Android App Development Tutorial\nCREATING SWIPABLE VIEWS WITH VIEWPAGER 2 - Android Fundamentals\nTAB LAYOUT WITH VIEWPAGER 2 - Android Fundamentals\nAndroid Studio - ViewPager\nHow to use ViewPager in Android Studio in Hindi - view pager in android\nHow to Use View Pager with Fragment\nAndroid Studio Tutorial - How to Create Image Slider using ViewPager\nSwipe View using ViewPager | Android Studio | Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "znG_iXNGP0ICv904P3yNnUN45oY",
                "id": "MTE2NzU4NTk2MzkxNjc1ODU5NjM5MDAwNzgw",
                "snippet": {
                    "publishedAt": "2023-02-08T12:33:59+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ViewPager in Android using Android Studio || Implement Viewpager2 || Android Tutorials by Deepak #33",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nViewPager in Android using Android Studio\nHow to Implement Viewpager2 in Android Studio || ViewPager2 || Android StudioAndroid studio Image Slider using ViewPager tutorial in Hindi/Urdu\nTab Layout with Fragments in Android Studio || Tab Layout with ViewPager || Tab Layout\nViewPager in Android Studio | Implement Swipe View using ViewPager | ViewPager |Android Tutorial\nTab Layout in Android Studio with Example | Android App Development Tutorial\nCREATING SWIPABLE VIEWS WITH VIEWPAGER 2 - Android Fundamentals\nTAB LAYOUT WITH VIEWPAGER 2 - Android Fundamentals\nAndroid Studio - ViewPager\nHow to use ViewPager in Android Studio in Hindi - view pager in android\nHow to Use View Pager with Fragment\nAndroid Studio Tutorial - How to Create Image Slider using ViewPager\nSwipe View using ViewPager | Android Studio | Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/InEVG-81DWo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "fDDIVXWXFrEBpRd2oQIKi8JJwUI",
                "id": "MTUxNjc1Nzc0NTgxMTY3NTc3NDU4MTAwMDc0OQ",
                "snippet": {
                    "publishedAt": "2023-02-07T12:56:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Fragments in Android || Life Cycle of Fragment || Fragment Tutorial in Android by Deepak #32",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nFragments Implementation - Android Studio Tutorial\nFragments in Android App Development - Fragment Tutorial in Android\nFragments using Frame Layout in Android Studio | Android App Development Tutorial\nFragments in Android App Development \nFRAGMENTS - Android Fundamentals\nHow to use fragments in Android Studio | Understanding Fragments for Multi Layout App\nFragments in Android | Multiple Sub-Screens in Android Project [Hindi] | Android Course\nFragments - Part 4, Lifecycle & correlation with Activity\nRecyclerview in Fragment Android tutorial | Recyclerview in Android\nFragment Manager - Fragment Transition -Fragment Tutorial in Android\nAndroid - Fragment\nAndroid Application Fragment Lifecycle for Beginners in Hindi\nFragments in Android\nAndroid Fragment Lifecycle\nFragment Usage & Life Cycle of Fragment - Fragment Tutorial in Android",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9Ur4FcSrjtQXcDZVgXIcpnMTXoA",
                "id": "MTE2NzU3NzI5NTQxNjc1NzcyOTU0MDAwNTMy",
                "snippet": {
                    "publishedAt": "2023-02-07T12:29:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Fragments in Android || Life Cycle of Fragment || Fragment Tutorial in Android by Deepak #32",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this tutorial are :-\nFragments Implementation - Android Studio Tutorial\nFragments in Android App Development - Fragment Tutorial in Android\nFragments using Frame Layout in Android Studio | Android App Development Tutorial\nFragments in Android App Development \nFRAGMENTS - Android Fundamentals\nHow to use fragments in Android Studio | Understanding Fragments for Multi Layout App\nFragments in Android | Multiple Sub-Screens in Android Project [Hindi] | Android Course\nFragments - Part 4, Lifecycle & correlation with Activity\nRecyclerview in Fragment Android tutorial | Recyclerview in Android\nFragment Manager - Fragment Transition -Fragment Tutorial in Android\nAndroid - Fragment\nAndroid Application Fragment Lifecycle for Beginners in Hindi\nFragments in Android\nAndroid Fragment Lifecycle\nFragment Usage & Life Cycle of Fragment - Fragment Tutorial in Android",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/hD9Z4OZt_Wk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HEgKOQFmXhYJDbAI-veTq79SIQ8",
                "id": "MTUxNjc1Njk2ODA1MTY3NTY5NjgwNTAwMDE3OA",
                "snippet": {
                    "publishedAt": "2023-02-06T15:20:05+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How to Import Adobe XD Android App UI in Android Studio by Deepak Hindi",
                    "description": "#smartprogramming #android #androidstudio #adobexdtutorial #adobexd #deepakpanwar #androidtutorial \nSome topics related to this tutorial are as follows :-\nImport Adobe XD Android App UI in Android Studio\nHow to Convert Adobe Xd to Android Studio Tutorial\nYour First Adobe XD to Android Studio Mobile App\nHow to Import Adobe XD App UI in Android Studio\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nWelcome Screen Adobe XD to Android Studio Tutorial\nAndroid Studio Tutorial - Android Material Design\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nHow to Preview XD Prototype on your Smartphone | Hindi\nAdobe Xd Design to Real Android/iOS App\nUI Design Adobe Xd to Android Studio Tutorial\nUI Design Adobe Xd to Android Studio XML",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aXbDNP2jC2CteXLrnf9soHxtFVg",
                "id": "MTE2NzU2ODczNzYxNjc1Njg3Mzc2MDAwNjE4",
                "snippet": {
                    "publishedAt": "2023-02-06T12:42:56+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How to Import Adobe XD Android App UI in Android Studio by Deepak Hindi",
                    "description": "#smartprogramming #android #androidstudio #adobexdtutorial #adobexd #deepakpanwar #androidtutorial \nSome topics related to this tutorial are as follows :-\nImport Adobe XD Android App UI in Android Studio\nHow to Convert Adobe Xd to Android Studio Tutorial\nYour First Adobe XD to Android Studio Mobile App\nHow to Import Adobe XD App UI in Android Studio\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nWelcome Screen Adobe XD to Android Studio Tutorial\nAndroid Studio Tutorial - Android Material Design\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nHow to Preview XD Prototype on your Smartphone | Hindi\nAdobe Xd Design to Real Android/iOS App\nUI Design Adobe Xd to Android Studio Tutorial\nUI Design Adobe Xd to Android Studio XML",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/YRIKraeYrhA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "P3q2Ivp0hXggV_GAo3idtGEoauU",
                "id": "MTUxNjc1NjAxNDg2MTY3NTYwMTQ4NjAwMDY3MQ",
                "snippet": {
                    "publishedAt": "2023-02-05T12:51:26+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-Commerce App with Admin Panel Design in Adobe XD || Android Studio Tutorials by Deepak #30",
                    "description": "#smartprogramming #android #androidtutorial #deepakpanwar #adobexdtutorial #adobexd #ecommerce \nTopics related to this tutorial are as follows :-\nE-commerce Checkout process Design & Prototype in Adobe XD\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nUI Design Tutorial | E-Commerce Dashboard UI Design in Adobe XD\nComplete Android E-Commerce App with Admin Panel like Amazon, FlipKart, Ali Express in Urdu/Hindi\nCreate A Responsive E-Commerce Product Admin Panel\nAdobe XD App Design Tutorial For Beginners\nAdobe XD Tutorial | eCommerce Homepage Design\nAdmin Panel Tutorial | Admin Dashboard Template Design\nhow to make android shopping tutorial ecommerce android app with web admin panel\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nAdmin panel kaise banate hai? How to make Admin Panel for Mobile Apps?\nHow to Create ECommerce Online Shopping App in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2w6V09eotPt1F56rscYvxFnifao",
                "id": "MTE2NzU1OTkzMjUxNjc1NTk5MzI1MDAwMzc4",
                "snippet": {
                    "publishedAt": "2023-02-05T12:15:25+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-Commerce App with Admin Panel Design in Adobe XD || Android Studio Tutorials by Deepak #30",
                    "description": "#smartprogramming #android #androidtutorial #deepakpanwar #adobexdtutorial #adobexd #ecommerce \nTopics related to this tutorial are as follows :-\nE-commerce Checkout process Design & Prototype in Adobe XD\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nUI Design Tutorial | E-Commerce Dashboard UI Design in Adobe XD\nComplete Android E-Commerce App with Admin Panel like Amazon, FlipKart, Ali Express in Urdu/Hindi\nCreate A Responsive E-Commerce Product Admin Panel\nAdobe XD App Design Tutorial For Beginners\nAdobe XD Tutorial | eCommerce Homepage Design\nAdmin Panel Tutorial | Admin Dashboard Template Design\nhow to make android shopping tutorial ecommerce android app with web admin panel\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nAdmin panel kaise banate hai? How to make Admin Panel for Mobile Apps?\nHow to Create ECommerce Online Shopping App in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/p6tufYZUvos/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "o6cbej38UkW6g3ehpJqWO4jLfwY",
                "id": "MTUxNjc1NTA4MjU1MTY3NTUwODI1NTAwMDUzOA",
                "snippet": {
                    "publishedAt": "2023-02-04T10:57:35+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-Commerce App Design in Adobe XD || Android Studio Tutorials by Deepak #29",
                    "description": "#android #androidtutorial #adobexdtutorial #adobexd #smartprogramming #deepakpanwar \nBelow are some topics related to this tutorial :-\nComplete Android E-Commerce App with Admin Panel like Amazon, FlipKart, Ali Express in Urdu/Hindi\nShopping Cart | Shopping Cart Android Studio | ecommerce Android app tutorial\nE-commerce Checkout process Design & Prototype in Adobe XD\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nComplete E-commerce App With Admin Pannel Android Studio\nWelcome Screen Adobe XD to Android Studio Tutorial\nMobile App Design & Prototype in Adobe XD | Tutorials in Hindi\nE-Commerce Mobile App Design in Adobe XD | Design and Prototype Tutorial\nAdobe Xd Design to Real Android/iOS App\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nBeautiful E commerce App - UI UX Design in Android Studio\nHow to create ecommerce app in android studio free source code || (java)\nHow to make an e-commerce android app?(Part-28)| Cart Fragment Layout | Hindi Tutorial\nHow to Create ECommerce Online Shopping App in Android Studio\nE-Commerce Shopping Android App | Android Studio Tutorial\nE Commerce Mobile app UI/UX/Interaction - #Adobe Xd",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5mOs1h4pbcDyCR2n3FXPPs2GL6o",
                "id": "MTE2NzU1MDc3MzExNjc1NTA3NzMxMDAwMzc3",
                "snippet": {
                    "publishedAt": "2023-02-04T10:48:51+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-Commerce App Design in Adobe XD || Android Studio Tutorials by Deepak #29",
                    "description": "#android #androidtutorial #adobexdtutorial #adobexd #smartprogramming #deepakpanwar \nBelow are some topics related to this tutorial :-\nComplete Android E-Commerce App with Admin Panel like Amazon, FlipKart, Ali Express in Urdu/Hindi\nShopping Cart | Shopping Cart Android Studio | ecommerce Android app tutorial\nE-commerce Checkout process Design & Prototype in Adobe XD\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nComplete E-commerce App With Admin Pannel Android Studio\nWelcome Screen Adobe XD to Android Studio Tutorial\nMobile App Design & Prototype in Adobe XD | Tutorials in Hindi\nE-Commerce Mobile App Design in Adobe XD | Design and Prototype Tutorial\nAdobe Xd Design to Real Android/iOS App\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nBeautiful E commerce App - UI UX Design in Android Studio\nHow to create ecommerce app in android studio free source code || (java)\nHow to make an e-commerce android app?(Part-28)| Cart Fragment Layout | Hindi Tutorial\nHow to Create ECommerce Online Shopping App in Android Studio\nE-Commerce Shopping Android App | Android Studio Tutorial\nE Commerce Mobile app UI/UX/Interaction - #Adobe Xd",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/jCblVfer9KA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "LFTZ_D1Wtpna3y1T3OIyqCYNZfI",
                "id": "MTUxNjc1NDE4MzU4MTY3NTQxODM1ODAwMDg1MQ",
                "snippet": {
                    "publishedAt": "2023-02-03T09:59:18+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-commerce App Design in Adobe XD || Android Studio by Deepak #28",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar #adobexdtutorial #adobexd \nTopics related to this tutorial are as follows :-\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nComplete Android E-Commerce App with Admin Panel like Amazon, FlipKart, Ali Express in Urdu/Hindi\nHow To Create A Mobile App for Your E-commerce application\nComplete e-Commerce Android App tutorial in Hindi \nEcommerce App | Android Studio \nEcommerce app in android studio\nHow to Build your E-commerce Mobile App from Scratch (No Coding) - Android & IOS App\nHow to create ecommerce app in android studio free source code || (java) || by dhruv app tutorial\nE-Commerce Shopping Android App | Android Studio Tutorial\nComplete E-commerce App With Admin Pannel Android Studio\nhow to make android shopping tutorial ecommerce android app with web admin panel",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-bFqHBjSlRjj8bD8X_0_m9BdSoY",
                "id": "MTE2NzU0MTE5NzcxNjc1NDExOTc3MDAwMDM5",
                "snippet": {
                    "publishedAt": "2023-02-03T08:12:57+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-commerce App Design in Adobe XD || Android Studio by Deepak #28",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar #adobexdtutorial #adobexd \nTopics related to this tutorial are as follows :-\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nComplete Android E-Commerce App with Admin Panel like Amazon, FlipKart, Ali Express in Urdu/Hindi\nHow To Create A Mobile App for Your E-commerce application\nComplete e-Commerce Android App tutorial in Hindi \nEcommerce App | Android Studio \nEcommerce app in android studio\nHow to Build your E-commerce Mobile App from Scratch (No Coding) - Android & IOS App\nHow to create ecommerce app in android studio free source code || (java) || by dhruv app tutorial\nE-Commerce Shopping Android App | Android Studio Tutorial\nComplete E-commerce App With Admin Pannel Android Studio\nhow to make android shopping tutorial ecommerce android app with web admin panel",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6FU3-5_1Cbc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "K8QTIYPxFyGjmS2aCRzo5WR8Ezw",
                "id": "MTUxNjc1MzQzNDQ0MTY3NTM0MzQ0NDAwMDQ4NA",
                "snippet": {
                    "publishedAt": "2023-02-02T13:10:44+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-commerce App Design in Adobe XD || Login/Signup Splash Screen Page UI Android Studio by Deepak #27",
                    "description": "#android #androidtutorial #smartprogramming #adobexdtutorial #adobexd #deepakpanwar #ecommerce \nBelow are the topics related to this tutorials :-\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nE Commerce Mobile app UI/UX/Interaction - #Adobe Xd\nHow To Make Ecommerce App UI Design In Adobe XD | Create Mobile App Design | UI / UX Design\nE-commerce Checkout process Design & Prototype in Adobe XD\nE-Commerce App Checkout Interaction Design in Adobe XD | UI UX Design Flow\nHow to Design & Prototype a Mobile App - Adobe Xd Tutorial\nMobile App Design & Prototype in Adobe XD | Tutorials in Hindi\nDesign eCommerce UI in Adobe XD\nApp UI Design in Adobe XD | App UI Design Tutorial | E-Commerce App UI\nAdobe XD Tutorial | Login/Signup Page | Basic Course of UI/UX Design\nLogin/Signup Page UI | Adobe XD Tutorial | Basic Course of UI/UX Design\nHow to create a login form in Adobe XD\nWorking Sign Up and Login Form - Adobe XD Tutorial for Beginners\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nWhat is splash screen? | Adobe XD Tutorial in hindi\nCreate a simple Splash Screen in Adobe | XD | Tutorial\nSplash Screen - Adobe XD Tutorial\nAdobe XD - Splash Screen Animation Tutorial for Beginners\nSplash Screen Adobe XD Tutorial | Adobe XD Design Tutorial | Android",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5NyWYZkdMi-qmiZFvJu1SRERv48",
                "id": "MTE2NzUzNDE3OTUxNjc1MzQxNzk1MDAwOTUy",
                "snippet": {
                    "publishedAt": "2023-02-02T12:43:15+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "E-commerce App Design in Adobe XD || Login/Signup Splash Screen Page UI Android Studio by Deepak #27",
                    "description": "#android #androidtutorial #smartprogramming #adobexdtutorial #adobexd #deepakpanwar #ecommerce \nBelow are the topics related to this tutorials :-\nE-commerce App Design in Adobe XD (Wireframe/Mockup + Prototype)\nE Commerce Mobile app UI/UX/Interaction - #Adobe Xd\nHow To Make Ecommerce App UI Design In Adobe XD | Create Mobile App Design | UI / UX Design\nE-commerce Checkout process Design & Prototype in Adobe XD\nE-Commerce App Checkout Interaction Design in Adobe XD | UI UX Design Flow\nHow to Design & Prototype a Mobile App - Adobe Xd Tutorial\nMobile App Design & Prototype in Adobe XD | Tutorials in Hindi\nDesign eCommerce UI in Adobe XD\nApp UI Design in Adobe XD | App UI Design Tutorial | E-Commerce App UI\nAdobe XD Tutorial | Login/Signup Page | Basic Course of UI/UX Design\nLogin/Signup Page UI | Adobe XD Tutorial | Basic Course of UI/UX Design\nHow to create a login form in Adobe XD\nWorking Sign Up and Login Form - Adobe XD Tutorial for Beginners\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nWhat is splash screen? | Adobe XD Tutorial in hindi\nCreate a simple Splash Screen in Adobe | XD | Tutorial\nSplash Screen - Adobe XD Tutorial\nAdobe XD - Splash Screen Animation Tutorial for Beginners\nSplash Screen Adobe XD Tutorial | Adobe XD Design Tutorial | Android",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/SoLakOm7Dns/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "pvaAryGgLTQcf7pz4796uXYYl0E",
                "id": "MTUxNjc1MjQzNzc2MTY3NTI0Mzc3NjAwMDU1OQ",
                "snippet": {
                    "publishedAt": "2023-02-01T09:29:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Creating Android App Icon | How to Design & Prototype a Mobile App - Adobe XD Tutorial by Deepak #26",
                    "description": "#android #androidtutorial #adobexdtutorial #adobexd #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nDesign Icons Adobe XD Tutorial\nHow to Design & Prototype a Mobile App - Adobe Xd Tutorial\nHow to draw your own custom icons in Adobe XD\nCreating Icons in Adobe XD!\nFree Icons for Your Adobe XD & UX UI Projects\nAdobe XD Tutorial Creating Icons\nMobile App Design & Prototype in Adobe XD | Tutorials in Hindi\nOutline Stroke in Adobe XD – Icons Workflow\nCreating Android app icon - Adobe XD\nAdobe XD Design and Prototype Tutorial\nAdobe XD Tutorial 30 Editing SVG Imports\nExport SVG in Adobe XD\nConvert Any Image to a Vector/SVG in Adobe Xd | Design Weekly\nAdobe XD Importing SVG Files - How to Design & Prototype in Adobe XD",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "iNUtaV3XoeS3pXvMKsaihP_6sCI",
                "id": "MTE2NzUyNDIwNTAxNjc1MjQyMDUwMDAwNjEz",
                "snippet": {
                    "publishedAt": "2023-02-01T09:00:50+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Creating Android App Icon | How to Design & Prototype a Mobile App - Adobe XD Tutorial by Deepak #26",
                    "description": "#android #androidtutorial #adobexdtutorial #adobexd #smartprogramming #deepakpanwar \nTopics related to this tutorial are as follows :-\nDesign Icons Adobe XD Tutorial\nHow to Design & Prototype a Mobile App - Adobe Xd Tutorial\nHow to draw your own custom icons in Adobe XD\nCreating Icons in Adobe XD!\nFree Icons for Your Adobe XD & UX UI Projects\nAdobe XD Tutorial Creating Icons\nMobile App Design & Prototype in Adobe XD | Tutorials in Hindi\nOutline Stroke in Adobe XD – Icons Workflow\nCreating Android app icon - Adobe XD\nAdobe XD Design and Prototype Tutorial\nAdobe XD Tutorial 30 Editing SVG Imports\nExport SVG in Adobe XD\nConvert Any Image to a Vector/SVG in Adobe Xd | Design Weekly\nAdobe XD Importing SVG Files - How to Design & Prototype in Adobe XD",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/3orL84Gu_bg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "bwG1_wr491YKo81kR6NpyungFm0",
                "id": "MTUxNjc1MTYxNjUyMTY3NTE2MTY1MjAwMDQ4Mg",
                "snippet": {
                    "publishedAt": "2023-01-31T10:40:52+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "UI Side Navigation Adobe XD Android Studio Tutorial || Design Icons Adobe XD Tutorial by Deepak #25",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar #adobexdtutorial #adobexd \nBelow are the topics related to this tutorial :-\nDesign a Stylized Navigation Bar in Adobe XD\nCreate Sidebar Menu & Overlay Prototypes in Adobe XD 2020\nAdobe XD: How to create a horizontal navigation\nSide drawer in app with adobe XD\nHome Design & Navigation Drawer || Plant App UI Part 2 Android Studio || Adobe XD ,UI 2021\nAdobe Xd Tutorial - Slider / Carousel with navigation using Component States\nNavigation Menu Animations in Adobe Xd | Auto Animate | Design Weekly\nUI Animation Side Navigation Adobe Xd Android Studio Tutorial\nNavigation using Components in Adobe XD | Design & Prototype Tutorial\nNAVIGATION DRAWER IN ADOBE XD URDU | HINDI Tutorial\nNavigation Menu animation | Adobe XD tutorial | UI Design | UX Design\nModern E commerce Navigation Drawer UI| Android UI Design\nCreating a Navigation Bar in Adobe XD\nHow to design simple icons | Adobe XD icon design tutorial\nHow to draw your own custom icons in Adobe XD\nCreate Colorful icons in Adobe XD\nCreating Icons in Adobe XD!\nFree Icons for Your Adobe XD & UX UI Projects\nDesign 10 Icons Adobe XD Tutorial\nAdobe XD Tutorial Creating Icons\nAdobe XD Tutorial | How to create a settings icon\nHow to Create a Cloud Icon in Adobe XD\nCreating a Heart Icon [Icon Design in Adobe XD]\nMerging Shapes to Create Icons in Adobe XD [Icon Design in Adobe XD]\nLearn How to Draw a Location Icon in Adobe XD\nCreating Android app icon - Adobe XD",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5iQ9AFzvTVe42zWwD0xvRLSlYAA",
                "id": "MTE2NzUxNTkyODgxNjc1MTU5Mjg4MDAwMTU0",
                "snippet": {
                    "publishedAt": "2023-01-31T10:01:28+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "UI Side Navigation Adobe XD Android Studio Tutorial || Design Icons Adobe XD Tutorial by Deepak #25",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar #adobexdtutorial #adobexd \nBelow are the topics related to this tutorial :-\nDesign a Stylized Navigation Bar in Adobe XD\nCreate Sidebar Menu & Overlay Prototypes in Adobe XD 2020\nAdobe XD: How to create a horizontal navigation\nSide drawer in app with adobe XD\nHome Design & Navigation Drawer || Plant App UI Part 2 Android Studio || Adobe XD ,UI 2021\nAdobe Xd Tutorial - Slider / Carousel with navigation using Component States\nNavigation Menu Animations in Adobe Xd | Auto Animate | Design Weekly\nUI Animation Side Navigation Adobe Xd Android Studio Tutorial\nNavigation using Components in Adobe XD | Design & Prototype Tutorial\nNAVIGATION DRAWER IN ADOBE XD URDU | HINDI Tutorial\nNavigation Menu animation | Adobe XD tutorial | UI Design | UX Design\nModern E commerce Navigation Drawer UI| Android UI Design\nCreating a Navigation Bar in Adobe XD\nHow to design simple icons | Adobe XD icon design tutorial\nHow to draw your own custom icons in Adobe XD\nCreate Colorful icons in Adobe XD\nCreating Icons in Adobe XD!\nFree Icons for Your Adobe XD & UX UI Projects\nDesign 10 Icons Adobe XD Tutorial\nAdobe XD Tutorial Creating Icons\nAdobe XD Tutorial | How to create a settings icon\nHow to Create a Cloud Icon in Adobe XD\nCreating a Heart Icon [Icon Design in Adobe XD]\nMerging Shapes to Create Icons in Adobe XD [Icon Design in Adobe XD]\nLearn How to Draw a Location Icon in Adobe XD\nCreating Android app icon - Adobe XD",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/AvE5--dvil8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aPKqFenqjlq7s6yEjepGh9qx3EY",
                "id": "MTUxNjc1MDYzODA4MTY3NTA2MzgwODAwMDc4OA",
                "snippet": {
                    "publishedAt": "2023-01-30T07:30:08+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Basic Adobe XD Tutorial of UI/UX Design by Deepak | How to Design & Prototype a Mobile App #24",
                    "description": "#android #androidtutorial #smartprogramming #adobexdtutorial #deepakpanwar \nBelow are some topics covered related to this tutorial :-\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nHow to import adobe XD app in Android Studio\nAdobe XD Mobile App UI Tutorials \nAdobe XD mobile app design tutorial- How to Create a Professional App\nAdobe Xd Design to Real Android/iOS App | Design Weekly\nAdobe XD Tutorial | Login/Signup Page | Basic Course of UI/UX Design\nWelcome Screen Adobe XD to Android Studio Tutorial\nHow to Design & Prototype a Mobile App - Adobe Xd Tutorial\nAndroid Studio Tutorial - Android Material Design\nAdobe XD Tutorial - Sign in Sign up Page | Free Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-uD9HgNvMe_hgCR4CbYrRZAKqDM",
                "id": "MTE2NzUwNTYzNDExNjc1MDU2MzQxMDAwMzY2",
                "snippet": {
                    "publishedAt": "2023-01-30T05:25:41+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Basic Adobe XD Tutorial of UI/UX Design by Deepak | How to Design & Prototype a Mobile App #24",
                    "description": "#android #androidtutorial #smartprogramming #adobexdtutorial #deepakpanwar \nBelow are some topics covered related to this tutorial :-\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nHow to import adobe XD app in Android Studio\nAdobe XD Mobile App UI Tutorials \nAdobe XD mobile app design tutorial- How to Create a Professional App\nAdobe Xd Design to Real Android/iOS App | Design Weekly\nAdobe XD Tutorial | Login/Signup Page | Basic Course of UI/UX Design\nWelcome Screen Adobe XD to Android Studio Tutorial\nHow to Design & Prototype a Mobile App - Adobe Xd Tutorial\nAndroid Studio Tutorial - Android Material Design\nAdobe XD Tutorial - Sign in Sign up Page | Free Course",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Ols7EjMWYxk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Yx61U2ty0695o8VX7BjbHpUfleo",
                "id": "MTUxNjc0OTc0NzAwMTY3NDk3NDcwMDAwMDc4Mw",
                "snippet": {
                    "publishedAt": "2023-01-29T06:45:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Adobe XD Mobile App UI Tutorials by Deepak || Adobe XD Tools Tutorial in Hindi #23",
                    "description": "#smartprogramming #android #androidtutorial #deepakpanwar #adobexdtutorial \nBelow are some related topics covered in this tutorial :-\nWelcome Screen Adobe XD to Android Studio Tutorial\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nAdobe XD Mobile App UI Tutorials \nAdobe Xd Design to Real Android/iOS App | Design Weekly\nAdobe Xd to Real App with Flutter! Adobe Xd to Flutter | Design Weekly\nYour First Adobe XD to Android Studio Mobile App\nVery Easy! How to preview Adobe XD file in your Android phone\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nCreating Android app icon - Adobe XD\nXd Android studio profile page || profile ui app || Profile Android studio no",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EGZ_THQo8pj70W2IEx3yKr3txQE",
                "id": "MTE2NzQ5MDgxOTgxNjc0OTA4MTk4MDAwNTIy",
                "snippet": {
                    "publishedAt": "2023-01-28T12:16:38+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Adobe XD Mobile App UI Tutorials by Deepak || Adobe XD Tools Tutorial in Hindi #23",
                    "description": "#smartprogramming #android #androidtutorial #deepakpanwar #adobexdtutorial \nBelow are some related topics covered in this tutorial :-\nWelcome Screen Adobe XD to Android Studio Tutorial\nXd Android Login Ui Design Tutorial | Adobe Xd to Android Studio Xml Tutorial\nAdobe XD Mobile App UI Tutorials \nAdobe Xd Design to Real Android/iOS App | Design Weekly\nAdobe Xd to Real App with Flutter! Adobe Xd to Flutter | Design Weekly\nYour First Adobe XD to Android Studio Mobile App\nVery Easy! How to preview Adobe XD file in your Android phone\nAdobe XD Tutorial - Sign in Sign up Page | Free Course\nCreating Android app icon - Adobe XD\nXd Android studio profile page || profile ui app || Profile Android studio no",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PpG_7ATCXjQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-9BkByGLCm9GnCqww6o68z5sWp8",
                "id": "MTUxNjc0NzMxMzA3MTY3NDczMTMwNzAwMDQ3Ng",
                "snippet": {
                    "publishedAt": "2023-01-26T11:08:27+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Lottie Animation || Circular Image View in Android || Styleable Toast Library Deepak #22",
                    "description": "#smartprogramming #deepakpanwar #android #androidtutorial \nRelated topics covered in this tutorial are :-\nAndroid Activity Transitions | XML Animations | Android Studio\nActivity Transition Animation\nShared Element Transition - Android Studio Tutorial\nHow to Create Animations in Android Studio - Hindi | Android Studio\nImages, Animations, Transitions - Android Programming \nLottie Animation android studio | Lottiefiles Android\nCreate animations in Android Studio | Android Text Animation | Android image animation\nImportance of Animation - Android Tutorial in Hindi\nAndroid Animations | Zoom | Fade | Slide | Rotate | Move | Multiple | Android Studio Tutorial\nLottie Animation in Android Application | Lottie Animation Tutorial\nCircular Image View in Android\nCircle/Round ImageView | Android Studio\nHow to make Circular ImageView without using any third party library in Android Studio\nCircular image in android studio | Tech Projects\nShape your Image with Circle, Rounded Square, Cuts at corner. Shapeable ImageView in Android Studio\nUse Circular ImageView in Android Studio\nCorner radius Imageview in Android studio - Rounded image in android studio\nStyleable Toast Library - Android Studio Tutorial\nUsing Toasty library in Android Studio\nUsing Motion Toast library in Android Studio\nCustom Toasts with TOASTY | Toasty library in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "1Z1Q1tOlN_zPpc3xBlEB-DP5jCY",
                "id": "MTE2NzQ3MzA5MjUxNjc0NzMwOTI1MDAwNDE5",
                "snippet": {
                    "publishedAt": "2023-01-26T11:02:05+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Lottie Animation || Circular Image View in Android || Styleable Toast Library Deepak #22",
                    "description": "#smartprogramming #deepakpanwar #android #androidtutorial \nRelated topics covered in this tutorial are :-\nAndroid Activity Transitions | XML Animations | Android Studio\nActivity Transition Animation\nShared Element Transition - Android Studio Tutorial\nHow to Create Animations in Android Studio - Hindi | Android Studio\nImages, Animations, Transitions - Android Programming \nLottie Animation android studio | Lottiefiles Android\nCreate animations in Android Studio | Android Text Animation | Android image animation\nImportance of Animation - Android Tutorial in Hindi\nAndroid Animations | Zoom | Fade | Slide | Rotate | Move | Multiple | Android Studio Tutorial\nLottie Animation in Android Application | Lottie Animation Tutorial\nCircular Image View in Android\nCircle/Round ImageView | Android Studio\nHow to make Circular ImageView without using any third party library in Android Studio\nCircular image in android studio | Tech Projects\nShape your Image with Circle, Rounded Square, Cuts at corner. Shapeable ImageView in Android Studio\nUse Circular ImageView in Android Studio\nCorner radius Imageview in Android studio - Rounded image in android studio\nStyleable Toast Library - Android Studio Tutorial\nUsing Toasty library in Android Studio\nUsing Motion Toast library in Android Studio\nCustom Toasts with TOASTY | Toasty library in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XHgqo-PgjGA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Jrrjt-5OVjNqtoUn9e83oBSqCgw",
                "id": "MTUxNjc0NjUxMTc1MTY3NDY1MTE3NTAwMDQ3Mg",
                "snippet": {
                    "publishedAt": "2023-01-25T12:52:55+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Create Animations in Android Studio | Android Text Animation | Android Image Animation by Deepak #21",
                    "description": "#smartprogramming #android #androidtutorial #deepakpanwar \nRelated topics to this android tutorial are :-\nHow to Create Animations in Android Studio - Hindi | Android Studio \nImages, Animations, Transitions - Android Programming \nCreate animations in Android Studio | Android Text Animation | Android image animation\nLottie Animation android studio | Lottiefiles Android\nLottie Animation in Android Application | Lottie Animation Tutorial\nImportance of Animation - Android Tutorial in Hindi\nDrawable Animations - Android Studio Tutorial\nCreate animations in Android Studio in simple steps\nHow to Create Animated Splash Screen in android studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EKoN3sXVuHOEYuvYEwesdRb8I-8",
                "id": "MTE2NzQ2NDk5OTkxNjc0NjQ5OTk5MDAwNzMz",
                "snippet": {
                    "publishedAt": "2023-01-25T12:33:19+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Create Animations in Android Studio | Android Text Animation | Android Image Animation by Deepak #21",
                    "description": "#smartprogramming #android #androidtutorial #deepakpanwar \nRelated topics to this android tutorial are :-\nHow to Create Animations in Android Studio - Hindi | Android Studio \nImages, Animations, Transitions - Android Programming \nCreate animations in Android Studio | Android Text Animation | Android image animation\nLottie Animation android studio | Lottiefiles Android\nLottie Animation in Android Application | Lottie Animation Tutorial\nImportance of Animation - Android Tutorial in Hindi\nDrawable Animations - Android Studio Tutorial\nCreate animations in Android Studio in simple steps\nHow to Create Animated Splash Screen in android studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/LoluU2Jg0Es/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ayTfjE47ZI02PZ2I9y3bwRdYfXI",
                "id": "MTUxNjc0NTU3ODY3MTY3NDU1Nzg2NzAwMDc3Nw",
                "snippet": {
                    "publishedAt": "2023-01-24T10:57:47+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Options Menu in Android Studio Tutorial || Popup Menu || Context Menu by Deepak #20",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this android tutorial are :-\nOptions Menu with Sub Items - Android Studio Tutorial\nHow to create Option Menu on Toolbar in Android Studio\nHow to work Option Menu Item Click and Open Another Activity In Android Studio\nCreate Options menu bar in android Studio Hindi\nCreate Option Menu In Empty Activity On Android Studio | Action Bar Menu\nPopup Menu - Android Studio Tutorial\nHow to create a Pop Up Menu with Icons in Android Studio Tutorial\nCreate Overflow Menu, Context Menu & Popup Menu in Android | Handle Menu item Click events\nHow to create PopUp Menu Android\nHow to Implement Popup Menu in Android Studio | PopupMenu | Android Coding\nFloating Context Menu (Long Click Menu) - Android Studio Tutorial\nContextual Action Mode - Android Studio Tutorial\nContext Menu in Android | Android Development for Beginners | [Hindi]\nContext menu in Android studio in Hindi\nHow to create context menu in Android studio\nCreate Overflow Menu, Context Menu & Popup Menu in Android | Handle Menu item Click events",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_GCrI3_Tq3vaHVziMnIxJbFSqhU",
                "id": "MTE2NzQ1NTY0NTMxNjc0NTU2NDUzMDAwMDU1",
                "snippet": {
                    "publishedAt": "2023-01-24T10:34:13+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Options Menu in Android Studio Tutorial || Popup Menu || Context Menu by Deepak #20",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nTopics related to this android tutorial are :-\nOptions Menu with Sub Items - Android Studio Tutorial\nHow to create Option Menu on Toolbar in Android Studio\nHow to work Option Menu Item Click and Open Another Activity In Android Studio\nCreate Options menu bar in android Studio Hindi\nCreate Option Menu In Empty Activity On Android Studio | Action Bar Menu\nPopup Menu - Android Studio Tutorial\nHow to create a Pop Up Menu with Icons in Android Studio Tutorial\nCreate Overflow Menu, Context Menu & Popup Menu in Android | Handle Menu item Click events\nHow to create PopUp Menu Android\nHow to Implement Popup Menu in Android Studio | PopupMenu | Android Coding\nFloating Context Menu (Long Click Menu) - Android Studio Tutorial\nContextual Action Mode - Android Studio Tutorial\nContext Menu in Android | Android Development for Beginners | [Hindi]\nContext menu in Android studio in Hindi\nHow to create context menu in Android studio\nCreate Overflow Menu, Context Menu & Popup Menu in Android | Handle Menu item Click events",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/H-foCkJwg5M/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "WZuM23IHxMctRYXDgJrS9dBRDKU",
                "id": "MTUxNjc0NDczODUzMTY3NDQ3Mzg1MzAwMDY0Nw",
                "snippet": {
                    "publishedAt": "2023-01-23T11:37:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Intents in Android || Explicit and Implicit Intent Tutorial by Deepak",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nbelow are the related topics covered in this android tutorial :-\nWhat is an Intent in Android | Explicit and Implicit Intent Tutorial\nIntents in Android - Explicit and Implicit Intent with Examples\nAndroid Intent Passing Kya Hai? Passing Intent from One Activity to Another in Android\nAndroid - Intent\nIntent in Android Theory\nPass Data between Activities using intent (Java) - Android Studio Tutorial\nIntent & Intent Filter in Android in Hindi\nImplicit Intent in Android Studio | Android Development Tutorial for Beginners\nExplicit Intent in Android | Android Development Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "R_yZzMCTR41dteF1MTGMLe0JK4E",
                "id": "MTE2NzQ0NzMyNzYxNjc0NDczMjc2MDAwMTMz",
                "snippet": {
                    "publishedAt": "2023-01-23T11:27:56+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Intents in Android || Explicit and Implicit Intent Tutorial by Deepak",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nbelow are the related topics covered in this android tutorial :-\nWhat is an Intent in Android | Explicit and Implicit Intent Tutorial\nIntents in Android - Explicit and Implicit Intent with Examples\nAndroid Intent Passing Kya Hai? Passing Intent from One Activity to Another in Android\nAndroid - Intent\nIntent in Android Theory\nPass Data between Activities using intent (Java) - Android Studio Tutorial\nIntent & Intent Filter in Android in Hindi\nImplicit Intent in Android Studio | Android Development Tutorial for Beginners\nExplicit Intent in Android | Android Development Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/JlQ5uaOWLaA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "2fBT_popBZ9TVmckeDIoaxYM0bA",
                "id": "MTUxNjc0Mzg4MTk4MTY3NDM4ODE5ODAwMDAzMg",
                "snippet": {
                    "publishedAt": "2023-01-22T11:49:58+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android activity & Activity Lifecycle Explained by Deepak || Android Tutorials in Hindi",
                    "description": "Similar type of topics covered in this android tutorials are :-\nAndroid activity & Activity Lifecycle | Android Tutorials in Hindi\nActivity Lifecycle in Android\nWhat Is Activity In Android | Activity In Android Studio | Android Activity Explained In Detail\nActivity and Activity Life cycle in Android - Explained with Real Time Android App Example | Hindi\nThe Activity Lifecycle Explained - Android Studio Tutorial\nAndroid - Activity LifeCycle\nAndroid Activity Lifecycle Explained with Example | All Activity Lifecycle",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NNu9oa59kD63BT1aijGwrTYMsC8",
                "id": "MTE2NzQzODc3OTAxNjc0Mzg3NzkwMDAwOTA5",
                "snippet": {
                    "publishedAt": "2023-01-22T11:43:10+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android activity & Activity Lifecycle Explained by Deepak || Android Tutorials in Hindi",
                    "description": "Similar type of topics covered in this android tutorials are :-\nAndroid activity & Activity Lifecycle | Android Tutorials in Hindi\nActivity Lifecycle in Android\nWhat Is Activity In Android | Activity In Android Studio | Android Activity Explained In Detail\nActivity and Activity Life cycle in Android - Explained with Real Time Android App Example | Hindi\nThe Activity Lifecycle Explained - Android Studio Tutorial\nAndroid - Activity LifeCycle\nAndroid Activity Lifecycle Explained with Example | All Activity Lifecycle",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2DYv7aiTTOA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8SdBKGoQJpxiGow047PajgsH4oM",
                "id": "MTUxNjc0MzA0MzEyMTY3NDMwNDMxMjAwMDMzOA",
                "snippet": {
                    "publishedAt": "2023-01-21T12:31:52+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ConstraintLayout Tutorial in Android Studio by Deepak - Understanding Constraints",
                    "description": "Different Topics covered in this Android Course are :-\nConstraintLayout Tutorial - UNDERSTANDING CONSTRAINTS - Android Studio Tutorial\nConstraint layout in Android - Hindi\nConstraint Layout Master Class\nTypes Of Layouts in Android Studio Hindi\nCONSTRAINT LAYOUT BASICS - Android Fundamentals",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "iJUZoqe90_tPZ6FOC19DZHDfDeU",
                "id": "MTE2NzQzMDI2OTExNjc0MzAyNjkxMDAwMTQy",
                "snippet": {
                    "publishedAt": "2023-01-21T12:04:51+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ConstraintLayout Tutorial in Android Studio by Deepak - Understanding Constraints",
                    "description": "Different Topics covered in this Android Course are :-\nConstraintLayout Tutorial - UNDERSTANDING CONSTRAINTS - Android Studio Tutorial\nConstraint layout in Android - Hindi\nConstraint Layout Master Class\nTypes Of Layouts in Android Studio Hindi\nCONSTRAINT LAYOUT BASICS - Android Fundamentals",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/q6MxqtcCdl0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "zT-5qH-_S9rHl4WX3OHBb-UfdJg",
                "id": "MTUxNjc0MTI1MTIzMTY3NDEyNTEyMzAwMDM0NQ",
                "snippet": {
                    "publishedAt": "2023-01-19T10:45:23+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Linear Layout & Relative Layout In Android Studio by Deepak || Android Tutorials Hindi",
                    "description": "Topics covered in the android course are :-\nLinear Layout & Relative Layout In Android\nAndroid Studio Hindi Tutorial Relative Layout V/S Linear Layout\nLinear Layout in Android - Android Studio Tutorial\nTypes Of Layouts in Android Studio Hindi\nAndroid Linear Layout Tutorial\nAndroid Relative Layout Tutorial With Examples\nRelative Layout in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ontiNL6XidHDY8KZbEai23uvW5w",
                "id": "MTE2NzQxMjQ3NDIxNjc0MTI0NzQyMDAwMjM3",
                "snippet": {
                    "publishedAt": "2023-01-19T10:39:02+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Linear Layout & Relative Layout In Android Studio by Deepak || Android Tutorials Hindi",
                    "description": "Topics covered in the android course are :-\nLinear Layout & Relative Layout In Android\nAndroid Studio Hindi Tutorial Relative Layout V/S Linear Layout\nLinear Layout in Android - Android Studio Tutorial\nTypes Of Layouts in Android Studio Hindi\nAndroid Linear Layout Tutorial\nAndroid Relative Layout Tutorial With Examples\nRelative Layout in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/QdGzmVIYsbA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ayEaO_K1jQCyvG_TE_A5ojjEPyk",
                "id": "MTUxNjc0MDQ1NzI3MTY3NDA0NTcyNzAwMDE5OA",
                "snippet": {
                    "publishedAt": "2023-01-18T12:42:07+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "View; ViewGroup; Layout Basics and LinearLayout in Android by Deepak || Android Studio",
                    "description": "Different topics covered in this android course are :-\nLinear Layout in Android - Android Studio Tutorial\nAndroid Linear Layout Tutorial (In Hindi)\nTypes Of Layouts in Android Studio Hindi\nLinear Layout & Relative Layout In Android | Android Tutorials in Hindi\nLinear Layout in Android Studio | Android Development Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "cwGQpRfvokQkEJxQUf2RnVBs58Q",
                "id": "MTE2NzQwNDM4ODIxNjc0MDQzODgyMDAwMzA3",
                "snippet": {
                    "publishedAt": "2023-01-18T12:11:22+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "View; ViewGroup; Layout Basics and LinearLayout in Android by Deepak || Android Studio",
                    "description": "Different topics covered in this android course are :-\nLinear Layout in Android - Android Studio Tutorial\nAndroid Linear Layout Tutorial (In Hindi)\nTypes Of Layouts in Android Studio Hindi\nLinear Layout & Relative Layout In Android | Android Tutorials in Hindi\nLinear Layout in Android Studio | Android Development Tutorial",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/a3Y0xAdBmLw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HGmXL9yW7YgukLqrJXn8vCmbr4A",
                "id": "MTUxNjczOTUxMjI3MTY3Mzk1MTIyNzAwMDIzMg",
                "snippet": {
                    "publishedAt": "2023-01-17T10:27:07+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SearchView, SearchView with Filters, WebView in Android Studio by Deepak || Android Tutorials",
                    "description": "Related Topics Covered in this Android Course are :-\nAndroid Studio Tutorial - How to Add SearchView in Android App\nSearchView with RecyclerView - Android Studio Tutorial\nHow to Add Search View in Toolbar in Android Studio | SearchView on Toolbar | Actionbar\nWebView - Android Studio Tutorial\nWebView Android Studio: What is WebView in Android? | Android WebView Tutorial\nWhat Does Android System Webview Do\nCreate Android WebView App using android studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "VRqs8HFj8Fy_pzv_iM0IjxwAV_A",
                "id": "MTE2NzM5NTA2NTAxNjczOTUwNjUwMDAwOTMy",
                "snippet": {
                    "publishedAt": "2023-01-17T10:17:30+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "SearchView, SearchView with Filters, WebView in Android Studio by Deepak || Android Tutorials",
                    "description": "Related Topics Covered in this Android Course are :-\nAndroid Studio Tutorial - How to Add SearchView in Android App\nSearchView with RecyclerView - Android Studio Tutorial\nHow to Add Search View in Toolbar in Android Studio | SearchView on Toolbar | Actionbar\nWebView - Android Studio Tutorial\nWebView Android Studio: What is WebView in Android? | Android WebView Tutorial\nWhat Does Android System Webview Do\nCreate Android WebView App using android studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/tuJCa2E6zrI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "HLjjouwk_9SnGxvRplCxIPl7SgM",
                "id": "MTUxNjczODc0NDQwMTY3Mzg3NDQ0MDAwMDYwNQ",
                "snippet": {
                    "publishedAt": "2023-01-16T13:07:20+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Simple Adaptor and Custom Simple Adaptor in Android by Deepak || Android Studio Tutorials",
                    "description": "Related Topics covered in this Android Course are :-\nImplementing Adapters and Adapter View in our Application on Android Studio\nSimpleAdapter in Android using ListView|Simple Adapter in android example in Hindi\nSimple Custom Adapter for listview in Android | Custom SimpleAdapter in Android Studio\nRecyclerView Adapter - RecyclerView Tutorial\nAndroid ListViews & Array Adapters | Android Tutorials in Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "DUdJPPH-JeCm_6Gy568M_nTgpvA",
                "id": "MTE2NzM4NzM3OTMxNjczODczNzkzMDAwNTY1",
                "snippet": {
                    "publishedAt": "2023-01-16T12:56:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Simple Adaptor and Custom Simple Adaptor in Android by Deepak || Android Studio Tutorials",
                    "description": "Related Topics covered in this Android Course are :-\nImplementing Adapters and Adapter View in our Application on Android Studio\nSimpleAdapter in Android using ListView|Simple Adapter in android example in Hindi\nSimple Custom Adapter for listview in Android | Custom SimpleAdapter in Android Studio\nRecyclerView Adapter - RecyclerView Tutorial\nAndroid ListViews & Array Adapters | Android Tutorials in Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/zhBTAZiXl_Y/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "dYRlzbVXQj5Pd6OTkIQrmZYRdGE",
                "id": "MTUxNjczNzgxNjc4MTY3Mzc4MTY3ODAwMDI5NQ",
                "snippet": {
                    "publishedAt": "2023-01-15T11:21:18+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayAdaptor and Custom ArrayAdaptor in Android by Deepak || Android Tutorials for Beginners",
                    "description": "Topics covered in this Android course for beginners :-\n     = ArrayAdaptor\r\n     = Spinner with ArrayAdaptor\r\n     = Custom ArrayAdaptor",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Fm0rMJBDKaX_IkIqai7KfCMNoYQ",
                "id": "MTE2NzM3ODE0NzAxNjczNzgxNDcwMDAwMzA0",
                "snippet": {
                    "publishedAt": "2023-01-15T11:17:50+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayAdaptor and Custom ArrayAdaptor in Android by Deepak || Android Tutorials for Beginners",
                    "description": "Topics covered in this Android course for beginners :-\n     = ArrayAdaptor\r\n     = Spinner with ArrayAdaptor\r\n     = Custom ArrayAdaptor",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/iGSPxqe6IuA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3j9ZhL-jujpb9jriINtCER4wplg",
                "id": "MTUxNjczNjA4MzM3MTY3MzYwODMzNzAwMDM2NQ",
                "snippet": {
                    "publishedAt": "2023-01-13T11:12:17+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Adaptors in Android || ListView and GridView by Deepak || Android Tutorials for Beginners",
                    "description": "Topics covered in this Android Course for Beginner :-\n     = What is Adaptor in Android\r\n     = Types of Adaptors\r\n     = How to create Adaptors\r\n     = GridView using Adaptors\r\n     = ListView using Adaptors",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "86iy9pyGAbZAjHU6L5ms_1sTb3w",
                "id": "MTE2NzM2MDc2ODExNjczNjA3NjgxMDAwMzkz",
                "snippet": {
                    "publishedAt": "2023-01-13T11:01:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Adaptors in Android || ListView and GridView by Deepak || Android Tutorials for Beginners",
                    "description": "Topics covered in this Android Course for Beginner :-\n     = What is Adaptor in Android\r\n     = Types of Adaptors\r\n     = How to create Adaptors\r\n     = GridView using Adaptors\r\n     = ListView using Adaptors",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/n7jGd4t65L0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "u5-S7hg3XfhqDI7tUOP3wcHm9EA",
                "id": "MTUxNjczNTE4Mjk3MTY3MzUxODI5NzAwMDE5NQ",
                "snippet": {
                    "publishedAt": "2023-01-12T10:11:37+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ProgressDialog, ScrollView, ViewFlipper, ImagesSwitcher by Deepak || Android Tutorials for Beginners",
                    "description": "Topics covered in this Android Course for beginners are :-\n     = ProgressDialog\r\n     = ScrollView\r\n     = HorizontalScrollView\r\n     = ViewFlipper\r\n     = ImageSwitcher & ViewSwitcher",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "otfkso-OnPcHULLqM2YlxsdwWPU",
                "id": "MTE2NzM1MTczNjkxNjczNTE3MzY5MDAwNDk3",
                "snippet": {
                    "publishedAt": "2023-01-12T09:56:09+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ProgressDialog, ScrollView, ViewFlipper, ImagesSwitcher by Deepak || Android Tutorials for Beginners",
                    "description": "Topics covered in this Android Course for beginners are :-\n     = ProgressDialog\r\n     = ScrollView\r\n     = HorizontalScrollView\r\n     = ViewFlipper\r\n     = ImageSwitcher & ViewSwitcher",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6Pf9HlDEy5k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ybhq28E1kn4YCLld5bdYweVjxec",
                "id": "MTUxNjczNDMzNzY1MTY3MzQzMzc2NTAwMDM0NQ",
                "snippet": {
                    "publishedAt": "2023-01-11T10:42:45+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "AlertDialog, CustomAlertDialog, SeekBar, ProgressBar by Deepak || Android Tutorials for Beginners 9",
                    "description": "Topics Covered in this Android Course are :-\n     = AlertDialog\r\n     = Custom Alert Dialog\r\n     = SeekBar\r\n     = ProgressBar\n     = Start ProgressBar on Button click",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "C0dnzCOdGLJoZGS8QtIoVrKsAYA",
                "id": "MTE2NzM0MzMwNDIxNjczNDMzMDQyMDAwMjQw",
                "snippet": {
                    "publishedAt": "2023-01-11T10:30:42+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "AlertDialog, CustomAlertDialog, SeekBar, ProgressBar by Deepak || Android Tutorials for Beginners 9",
                    "description": "Topics Covered in this Android Course are :-\n     = AlertDialog\r\n     = Custom Alert Dialog\r\n     = SeekBar\r\n     = ProgressBar\n     = Start ProgressBar on Button click",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/L7VLRAFwo8U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "qDGG1mnBf4El_RpJtC49j6Nh3Ag",
                "id": "MTUxNjczMzQ1NzE5MTY3MzM0NTcxOTAwMDcyMw",
                "snippet": {
                    "publishedAt": "2023-01-10T10:15:19+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ImageButton, ImageView, RatingBar, DatePicker, TimePicker (Android UI Widgets) | Android Tutorials 8",
                    "description": "Topics covered in this Android Tutorial For Beginner are :-\n     = ImageButton\r\n     = ImageView\r\n     = RatingBar\n     = DatePicker & DatePickerDialog\r\n     = TimePicker & TimePickerDialog",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uwbeqckYGfb32M_h8wCn3DZI8tM",
                "id": "MTE2NzMzNDQ3MjIxNjczMzQ0NzIyMDAwODE2",
                "snippet": {
                    "publishedAt": "2023-01-10T09:58:42+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ImageButton, ImageView, RatingBar, DatePicker, TimePicker (Android UI Widgets) | Android Tutorials 8",
                    "description": "Topics covered in this Android Tutorial For Beginner are :-\n     = ImageButton\r\n     = ImageView\r\n     = RatingBar\n     = DatePicker & DatePickerDialog\r\n     = TimePicker & TimePickerDialog",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/qD3QLFxOxc0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "8ax82CmJ8jtOGqyE9IdKIQjFCl4",
                "id": "MTUxNjczMjU2NjA1MTY3MzI1NjYwNTAwMDA3NQ",
                "snippet": {
                    "publishedAt": "2023-01-09T09:30:05+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Androi - CheckBox, RadioButton, Spinner, ToggleButton || Android Development Tutorials by Deepak #7",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nBelow are similar topics related to this Android tutorial for beginners :-\nHow to use Android CheckBox\nAndroid - Checkbox\nHow to create Checkbox in Android Studio for Beginners\nAndroid Studio Tutorial - Checkbox\nAndroid Tutorial for Beginners Android Checkbox Basics and Example\nCustom CheckBox in Android Studio\nRadio Buttons & Radio Groups - Android Studio Tutorial\nHow to use Radio Buttons and Radio Groups in Android Studio\nHow to create Radio Button in Android Studio for Beginners | Hindi Tutorial | Very easy way\nHow to use Radio Buttons and Radio Groups in Android Studio\nRadio Button And Checkbox Validation Using Java Code In Android || Android Studio\nText Spinner - Android Studio Tutorial\nSpinner in android studio | Create dropdown list | DropDown Menu in android\nText Spinner Android Studio | Beginner's Guide\nSpinner in Android studio | Beginners | Hindi\nWorking With Spinner View In Android Studio(In Hindi)\nSpinner in Android Studio\nLecture 11 Toggle Buttons in Android for beginners |Implementation of Toggle Button in Android\nToggle Button in android studio\nHow to use Toggle Button in Android studio |On Off Button in Android Studio\nAdding code to a Button Click in Android Studio\nCreate Custom Switch in android || Android studio tutorial\nSwitch in Android Studio | On Off Button in Android Studio | How to\nCreate Custom Switch Button Android | Custom Toggle Button in Android | Android Studio\nAndroid Custom Switch Button | Customize Switch Buttons in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "A_i-zrKQ8_liCT16wDYeSl8kGDM",
                "id": "MTE2NzMyNDcyMjYxNjczMjQ3MjI2MDAwMzA3",
                "snippet": {
                    "publishedAt": "2023-01-09T06:53:46+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Androi - CheckBox, RadioButton, Spinner, ToggleButton || Android Development Tutorials by Deepak #7",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nBelow are similar topics related to this Android tutorial for beginners :-\nHow to use Android CheckBox\nAndroid - Checkbox\nHow to create Checkbox in Android Studio for Beginners\nAndroid Studio Tutorial - Checkbox\nAndroid Tutorial for Beginners Android Checkbox Basics and Example\nCustom CheckBox in Android Studio\nRadio Buttons & Radio Groups - Android Studio Tutorial\nHow to use Radio Buttons and Radio Groups in Android Studio\nHow to create Radio Button in Android Studio for Beginners | Hindi Tutorial | Very easy way\nHow to use Radio Buttons and Radio Groups in Android Studio\nRadio Button And Checkbox Validation Using Java Code In Android || Android Studio\nText Spinner - Android Studio Tutorial\nSpinner in android studio | Create dropdown list | DropDown Menu in android\nText Spinner Android Studio | Beginner's Guide\nSpinner in Android studio | Beginners | Hindi\nWorking With Spinner View In Android Studio(In Hindi)\nSpinner in Android Studio\nLecture 11 Toggle Buttons in Android for beginners |Implementation of Toggle Button in Android\nToggle Button in android studio\nHow to use Toggle Button in Android studio |On Off Button in Android Studio\nAdding code to a Button Click in Android Studio\nCreate Custom Switch in android || Android studio tutorial\nSwitch in Android Studio | On Off Button in Android Studio | How to\nCreate Custom Switch Button Android | Custom Toggle Button in Android | Android Studio\nAndroid Custom Switch Button | Customize Switch Buttons in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HbQqOqTUVl0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "qBEhdmRTzO92YNDd9M8310oaxXc",
                "id": "MTUxNjczMTczODA0MTY3MzE3MzgwNDAwMDMyNg",
                "snippet": {
                    "publishedAt": "2023-01-08T10:30:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "onClick event listener on a Button || Toast in Android || Custom Toast - Android Studio Tutorial #6",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nRelated Topics covered in this Android course :-\nHow to Use onClick event listener on a Button in Android Studio | Create onclicklistener on Button\nClick Events and Button onClick Android Studio tutorial In Hindi\nEvent Handling in Android | Event Listeners in Android Project\nAndroid Studio Tutorial OnClickListener for Multiple Views Using All Possible Methods\nButton Click Event in Android\nHow to Create Toast in Android Studio? | Android Toast Message Tutorial\nToast in Android - All types of Toast in Android App DevelopmentToast Message in Android App | Android Studio Tutorial (Beginners) HD | All About Android\nCustom Toast - Android Studio Tutorial\nAndroid - Toast",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "T7grnD0joxPDo0Oe6rpjU745jm8",
                "id": "MTE2NzMxNjcyNDMxNjczMTY3MjQzMDAwNjY4",
                "snippet": {
                    "publishedAt": "2023-01-08T08:40:43+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "onClick event listener on a Button || Toast in Android || Custom Toast - Android Studio Tutorial #6",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nRelated Topics covered in this Android course :-\nHow to Use onClick event listener on a Button in Android Studio | Create onclicklistener on Button\nClick Events and Button onClick Android Studio tutorial In Hindi\nEvent Handling in Android | Event Listeners in Android Project\nAndroid Studio Tutorial OnClickListener for Multiple Views Using All Possible Methods\nButton Click Event in Android\nHow to Create Toast in Android Studio? | Android Toast Message Tutorial\nToast in Android - All types of Toast in Android App DevelopmentToast Message in Android App | Android Studio Tutorial (Beginners) HD | All About Android\nCustom Toast - Android Studio Tutorial\nAndroid - Toast",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DRs1TBFx2jE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NqzjjyisHDn_5A1BP6cJMFbPrwY",
                "id": "MTUxNjczMDgzODAzMTY3MzA4MzgwMzAwMDEyOQ",
                "snippet": {
                    "publishedAt": "2023-01-07T09:30:03+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "EditText & Button in Android | Vector Images | Android Studio Deepak || Android Beginner Tutorial #5",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nSimilar topics related to this Android tutorial are :-\nHow to Make a Button Open a New Activity - Android Studio Tutorial\nAdding code to a Button Click in Android Studio (Java )\nAndroid Studio Custom Button\nHow to Create Custom Button in Android Studio? | Android Drawable Tutorial\nAndroid Studio - Create a Button quickly\nTextView EditText & Button in Android | Android Studio | Android Beginner Tutorial\nHow to make custom edit text in android studio\nDesign Custom EditText - Android Studio Tutorial\nCreate Coustom EditText - Android studio tutorial\nAndroid - Edit Text\nWorking with SVG Images in Android Studio | Vector Drawables | The Penguin Coders\nHow to add vector assets in android application\nVector assets - Android Conference\nHow to add vector assets icon (material icons) in android studio in hindi\nHow to Create Vector Drawables for Android - 52 - Android Development Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ndOMK0WgCXPzg6GTA6Ftfx1W6Yw",
                "id": "MTE2NzMwNzE0MTUxNjczMDcxNDE1MDAwOTAx",
                "snippet": {
                    "publishedAt": "2023-01-07T06:03:35+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "EditText & Button in Android | Vector Images | Android Studio Deepak || Android Beginner Tutorial #5",
                    "description": "#android #androidtutorial #smartprogramming #deepakpanwar \nSimilar topics related to this Android tutorial are :-\nHow to Make a Button Open a New Activity - Android Studio Tutorial\nAdding code to a Button Click in Android Studio (Java )\nAndroid Studio Custom Button\nHow to Create Custom Button in Android Studio? | Android Drawable Tutorial\nAndroid Studio - Create a Button quickly\nTextView EditText & Button in Android | Android Studio | Android Beginner Tutorial\nHow to make custom edit text in android studio\nDesign Custom EditText - Android Studio Tutorial\nCreate Coustom EditText - Android studio tutorial\nAndroid - Edit Text\nWorking with SVG Images in Android Studio | Vector Drawables | The Penguin Coders\nHow to add vector assets in android application\nVector assets - Android Conference\nHow to add vector assets icon (material icons) in android studio in hindi\nHow to Create Vector Drawables for Android - 52 - Android Development Tutorial for Beginners",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/LBZExzpnjiQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "eFBLzrSVqWDUxYK10_7tL1b6Zoc",
                "id": "MTUxNjcyOTk5ODI3MTY3Mjk5OTgyNzAwMDY3NQ",
                "snippet": {
                    "publishedAt": "2023-01-06T10:10:27+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Introduction to Android Studio || Understanding the basics of XML || Gradle for Beginners #4",
                    "description": "#android #smartprogramming #deepakpanwar \nBelow are the topics related to this android tutorial :-\nWhat is Android Studio? Complete Overview of Android Studio\nIntroduction to Android Studio\nAndroid Development for Beginners - Full Course\nAndroid Tutorial in Hindi | Android Studio Tutorial in Hindi\nAndroid Studio Kya Hai\nAndroid Development Tutorial For Beginners In Hindi\nHow to Design in Android App (Layouts) writing code in XML\nAndroid Development Tutorials | Designing UI with XML in Android\nUnderstanding the basics of XML | Learn Android App Development\nGradle for Beginners\nGradle in Android || Development of Android Application in Hindi\nUnderstanding Gradle And Its Function | Android App Development Complete Course In Hindi\nHow to Install Emulator in Android Studio\nHow to Install Emulator in Android Studio Easily",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "gVakNZtvV6pGh7jVDa4EppvX1uE",
                "id": "MTE2NzI5OTkwMTYxNjcyOTk5MDE2MDAwNTU3",
                "snippet": {
                    "publishedAt": "2023-01-06T09:56:56+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Introduction to Android Studio || Understanding the basics of XML || Gradle for Beginners #4",
                    "description": "#android #smartprogramming #deepakpanwar \nBelow are the topics related to this android tutorial :-\nWhat is Android Studio? Complete Overview of Android Studio\nIntroduction to Android Studio\nAndroid Development for Beginners - Full Course\nAndroid Tutorial in Hindi | Android Studio Tutorial in Hindi\nAndroid Studio Kya Hai\nAndroid Development Tutorial For Beginners In Hindi\nHow to Design in Android App (Layouts) writing code in XML\nAndroid Development Tutorials | Designing UI with XML in Android\nUnderstanding the basics of XML | Learn Android App Development\nGradle for Beginners\nGradle in Android || Development of Android Application in Hindi\nUnderstanding Gradle And Its Function | Android App Development Complete Course In Hindi\nHow to Install Emulator in Android Studio\nHow to Install Emulator in Android Studio Easily",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ME3tUNgIuGc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "cXZ3S3MmhVSSFLrk65feqZ5VPXs",
                "id": "MTUxNjcyOTA3OTYyMTY3MjkwNzk2MjAwMDA2NQ",
                "snippet": {
                    "publishedAt": "2023-01-05T08:39:22+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Installing Android Studio & Setup | Android Tutorials in Hindi by Deepak #3",
                    "description": "#android #smartprogramming #deepakpanwar \nMore related topics to this tutorial are as follows :-\nHow to Install Android Studio on Windows 10\nHow to Install and Set up Android Studio on Windows (Latest Version) - Installation Guide\nHow to Download and Install Android Studio\nHow to Install Android Studio on Windows\nInstalling Android Studio & Setup | Android Tutorials in Hindi\nHow to create new project in Android Studio\nHow to provide package name in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "CUh4D32vmHzwxmtPQqGrgCqr8I0",
                "id": "MTE2NzI5MDU0NDMxNjcyOTA1NDQzMDAwMTQ2",
                "snippet": {
                    "publishedAt": "2023-01-05T07:57:23+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Installing Android Studio & Setup | Android Tutorials in Hindi by Deepak #3",
                    "description": "#android #smartprogramming #deepakpanwar \nMore related topics to this tutorial are as follows :-\nHow to Install Android Studio on Windows 10\nHow to Install and Set up Android Studio on Windows (Latest Version) - Installation Guide\nHow to Download and Install Android Studio\nHow to Install Android Studio on Windows\nInstalling Android Studio & Setup | Android Tutorials in Hindi\nHow to create new project in Android Studio\nHow to provide package name in Android Studio",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lPrp3VOqjuA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "jtOedctlLkMVsUBL-D3jnfBtnJA",
                "id": "MTUxNjcyODI5NzA1MTY3MjgyOTcwNTAwMDk2NQ",
                "snippet": {
                    "publishedAt": "2023-01-04T10:55:05+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Architecture and Introduction by Deepak || Android Studio Download  #2",
                    "description": "#android #smartprogramming #deepakpanwar \nSome similar topics related to this Android tutorial are as follows :-\nAndroid - Architecture\nAndroid Architecture Explained in Detail\nHistory of Android design\nHistory of Android - Interesting Things You Didn't Know About Android\nAndroid Versions A to Z: Evolution of All Android Versions from 1.0\nEvolution of Android OS 1.0 to 14\nEvery Android Version Ever\nHow to Install Android Studio on Windows 10\nHow to Install and Set up Android Studio on Windows (Latest Version) - Installation Guide\nHow to Download and Install Android Studio\nHow to Install Android Studio on Windows\nInstalling Android Studio & Setup | Android Tutorials in Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "fRP9BCAWzUwvca6qPRhpZU-dIfo",
                "id": "MTE2NzI4MjkzMDgxNjcyODI5MzA4MDAwNzMy",
                "snippet": {
                    "publishedAt": "2023-01-04T10:48:28+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Architecture and Introduction by Deepak || Android Studio Download  #2",
                    "description": "#android #smartprogramming #deepakpanwar \nSome similar topics related to this Android tutorial are as follows :-\nAndroid - Architecture\nAndroid Architecture Explained in Detail\nHistory of Android design\nHistory of Android - Interesting Things You Didn't Know About Android\nAndroid Versions A to Z: Evolution of All Android Versions from 1.0\nEvolution of Android OS 1.0 to 14\nEvery Android Version Ever\nHow to Install Android Studio on Windows 10\nHow to Install and Set up Android Studio on Windows (Latest Version) - Installation Guide\nHow to Download and Install Android Studio\nHow to Install Android Studio on Windows\nInstalling Android Studio & Setup | Android Tutorials in Hindi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9vF6ZIw7QkY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "VZkS3SBbJ8dGuI2YctS3Xd-uxvQ",
                "id": "MTUxNjcyNzQ0MTQ5MTY3Mjc0NDE0OTAwMDIxMA",
                "snippet": {
                    "publishedAt": "2023-01-03T11:09:09+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Course Syllabus || Android App Development Course for Beginners by Deepak #1",
                    "description": "Today we will start Free Android Tutorials For Beginners, Below is Android Syllabus :-\n\n1. Android Introduction\n2. Architecture of Android\n3. Basics of Android\n\n4. Android UI Widgets\n5. Activity & Intent\n6. Menu UI\n \n7. Designing & Animations\n8. Styles & Templates\n\n===========================================\n\n9. Fragments\n10. Some Advanced Views\n11. Others\n\n===========================================\n\n12. Data Storage\n = Shared Preference\n = SQLite\n13. SQL Offline & Online Database\n14. Firebase\n\n===========================================\n\n15. API Integration\n = XML & JSON Parsing\n = Volley & Retrofit API\n16. Predefined API\n = Gmail & Facebook login\n = Google Map API\n \n===========================================\n\n17. Ad Mob - Ads\n18. Google Play Store\n\n===========================================\n\n19. Others\n = Broadcast Receiver\n = Content Provider\n = Services\n \n===========================================\n\n20. Project",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "NbCEJesWgTvfumHI5PiUukFkIAM",
                "id": "MTE2NzI3NDM4MTkxNjcyNzQzODE5MDAwMjU2",
                "snippet": {
                    "publishedAt": "2023-01-03T11:03:39+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Android Course Syllabus || Android App Development Course for Beginners by Deepak #1",
                    "description": "Today we will start Free Android Tutorials For Beginners, Below is Android Syllabus :-\n\n1. Android Introduction\n2. Architecture of Android\n3. Basics of Android\n\n4. Android UI Widgets\n5. Activity & Intent\n6. Menu UI\n \n7. Designing & Animations\n8. Styles & Templates\n\n===========================================\n\n9. Fragments\n10. Some Advanced Views\n11. Others\n\n===========================================\n\n12. Data Storage\n = Shared Preference\n = SQLite\n13. SQL Offline & Online Database\n14. Firebase\n\n===========================================\n\n15. API Integration\n = XML & JSON Parsing\n = Volley & Retrofit API\n16. Predefined API\n = Gmail & Facebook login\n = Google Map API\n \n===========================================\n\n17. Ad Mob - Ads\n18. Google Play Store\n\n===========================================\n\n19. Others\n = Broadcast Receiver\n = Content Provider\n = Services\n \n===========================================\n\n20. Project",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/DZWvVNSZq7A/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Y1eriRo4fUHJpE0ZrGBy02QNQXY",
                "id": "MTUxNjY1NDA2MzE0MTY2NTQwNjMxNDAwMDMwMQ",
                "snippet": {
                    "publishedAt": "2022-10-10T12:51:54+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Stack Properties & Methods in Java Collections | Stack Data Structure by Deepak",
                    "description": "Below are the topics covered in this video :-\nStack class properties in java;\nStack class methods and constructor in java;\nStack class hierarchy in Collection Framework;\nStack Java Interview Questions;\nStack Data Structure",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "O00fARiPQE83hEHjtorTBCxEeOA",
                "id": "MTE2NjU0MDU5NTExNjY1NDA1OTUxMDAwNDQz",
                "snippet": {
                    "publishedAt": "2022-10-10T12:45:51+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Stack Properties & Methods in Java Collections | Stack Data Structure by Deepak",
                    "description": "Below are the topics covered in this video :-\nStack class properties in java;\nStack class methods and constructor in java;\nStack class hierarchy in Collection Framework;\nStack Java Interview Questions;\nStack Data Structure",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/hV3dD4iNbug/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "9LhDm8gEPvTsy7tMNQ_NvcSc0OY",
                "id": "MTUxNjYyODkzNzIxMTY2Mjg5MzcyMTAwMDQzNQ",
                "snippet": {
                    "publishedAt": "2022-09-11T10:55:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList vs Vector in Java || Collection Framework",
                    "description": "Topics covered in this tutorial :-\nDifference between ArrayList and Vector;\nCollection Framework in Java;\nCollection Interview Questions",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3S2pa45RyXh_7-y99V9IAp6kHbo",
                "id": "MTE2NjI4OTMwMjIxNjYyODkzMDIyMDAwNzYy",
                "snippet": {
                    "publishedAt": "2022-09-11T10:43:42+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList vs Vector in Java || Collection Framework",
                    "description": "Topics covered in this tutorial :-\nDifference between ArrayList and Vector;\nCollection Framework in Java;\nCollection Interview Questions",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/EdwHigOS8bE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "uvHWsdjvuQpGwRMQVPMW3axHa2Y",
                "id": "MTUxNjYyNTU1NjEyMTY2MjU1NTYxMjAwMDM5OQ",
                "snippet": {
                    "publishedAt": "2022-09-07T13:00:12+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Legacy Classes in Java || Vector Class in Java Collection",
                    "description": "Below are the topics covered in this video :-\nWhat are Legacy classes in Java ?\nExamples of Legacy Classes i.e. Vector, Stack, Properties, Dictionary, Hashtable;\nVector class in java collections;\nVector class properties;\nVector class methods and constructors;\nCollection class hierarchy in java\nCollections by Deepak",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "aa-aP6EDTifjVmJ7iYOAXOh9mXc",
                "id": "MTE2NjI1NTAwNjcxNjYyNTUwMDY3MDAwOTAz",
                "snippet": {
                    "publishedAt": "2022-09-07T11:27:47+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Legacy Classes in Java || Vector Class in Java Collection",
                    "description": "Below are the topics covered in this video :-\nWhat are Legacy classes in Java ?\nExamples of Legacy Classes i.e. Vector, Stack, Properties, Dictionary, Hashtable;\nVector class in java collections;\nVector class properties;\nVector class methods and constructors;\nCollection class hierarchy in java\nCollections by Deepak",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/QxezU3Rnmg8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ZCd9N6gd4W3QvsRoWJndDt6QBAo",
                "id": "MTUxNjYyMTI3NDgwMTY2MjEyNzQ4MDAwMDc1Mw",
                "snippet": {
                    "publishedAt": "2022-09-02T14:04:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList vs LinkedList in Java - Which Should You Use ?",
                    "description": "Topics covered in this video :-\nDifference between ArrayList & LinkedList\nLinkedList vs ArrayList - which is better ?\nCollections framework in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "DW1HX35A-QHXDHDgl0iyddoAhN4",
                "id": "MTE2NjIxMjcxODMxNjYyMTI3MTgzMDAwMDE1",
                "snippet": {
                    "publishedAt": "2022-09-02T13:59:43+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList vs LinkedList in Java - Which Should You Use ?",
                    "description": "Topics covered in this video :-\nDifference between ArrayList & LinkedList\nLinkedList vs ArrayList - which is better ?\nCollections framework in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Y4J50z1vCYY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "UeICUrXsVacl6tQfaX-QZqeU41g",
                "id": "MTUxNjYyMDM2OTYwMTY2MjAzNjk2MDAwMDA4Nw",
                "snippet": {
                    "publishedAt": "2022-09-01T12:56:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "LinkedList Methods & Constructors in Java || LinkedList Properties in Collections by Deepak",
                    "description": "Topics covered in this video :-\nLinkedList in Java Collection\nLinkedList methods and constructors in java\nLinkedList properties in java collection\nMethods of Collection interface\nMethods of List interface\nProperties of LinkedList",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_k_eajXMUJ92EIyXqInHQalbQNc",
                "id": "MTE2NjIwMzY0NjAxNjYyMDM2NDYwMDAwMjc4",
                "snippet": {
                    "publishedAt": "2022-09-01T12:47:40+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "LinkedList Methods & Constructors in Java || LinkedList Properties in Collections by Deepak",
                    "description": "Topics covered in this video :-\nLinkedList in Java Collection\nLinkedList methods and constructors in java\nLinkedList properties in java collection\nMethods of Collection interface\nMethods of List interface\nProperties of LinkedList",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/mU2WCpK9r4g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "3nHfPryYfkgoESPUMC0shwAdxeY",
                "id": "MTUxNjYxNDM1NzM2MTY2MTQzNTczNjAwMDU2OQ",
                "snippet": {
                    "publishedAt": "2022-08-25T13:55:36+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "LinkedList in Java Collection by Deepak || Advantages and disadvantages of LinkedList",
                    "description": "Topics covered in this video :-\nLinkedList introduction in Java Collection;\nLinkedList Data Structure;\nLinkedList Advantages & Disadvantages;\nProperties of LinkedList",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MtsFsg2btoVBx-gd7GKwAg_VLFQ",
                "id": "MTE2NjE0Mjc3NTMxNjYxNDI3NzUzMDAwODE5",
                "snippet": {
                    "publishedAt": "2022-08-25T11:42:33+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "LinkedList in Java Collection by Deepak || Advantages and disadvantages of LinkedList",
                    "description": "Topics covered in this video :-\nLinkedList introduction in Java Collection;\nLinkedList Data Structure;\nLinkedList Advantages & Disadvantages;\nProperties of LinkedList",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xm45ZiBU4RM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "SwRfe-ilwgIvSwhE9X5ekNO03tk",
                "id": "MTUxNjYxMDg1MzgwMTY2MTA4NTM4MDAwMDc4Mg",
                "snippet": {
                    "publishedAt": "2022-08-21T12:36:20+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList Constructors & Methods; ArrayList properties practical explanation in Java by Deepak",
                    "description": "Topics covered in this video :-\nArrayList constructors and methods;\nArrayList properties in java;\nCollections in Java;\nArrayList programs in java;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ONkJdZFm7glS1MCDyzvvhHVwhlU",
                "id": "MTE2NjEwODQ0MDkxNjYxMDg0NDA5MDAwMDA0",
                "snippet": {
                    "publishedAt": "2022-08-21T12:20:09+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList Constructors & Methods; ArrayList properties practical explanation in Java by Deepak",
                    "description": "Topics covered in this video :-\nArrayList constructors and methods;\nArrayList properties in java;\nCollections in Java;\nArrayList programs in java;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/3AvuOICYVmU/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "FQQe9hj1hTuVl9Pk-ea3dkHCMqc",
                "id": "MTUxNjUyNjIwNTY5MTY1MjYyMDU2OTAwMDYyNw",
                "snippet": {
                    "publishedAt": "2022-05-15T13:16:09+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList in Java by Deepak || Collection Framework in Java",
                    "description": "Topics covered in the tutorial :-\nWhat is ArrayList in Java;\nArrayList properties in Java;\nDifference between Array & ArrayList;\nCollection Framework in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "CO2COdmAlRGurQ9ZHUx1m3WT92o",
                "id": "MTE2NTI2MTk2NjMxNjUyNjE5NjYzMDAwNjEx",
                "snippet": {
                    "publishedAt": "2022-05-15T13:01:03+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "ArrayList in Java by Deepak || Collection Framework in Java",
                    "description": "Topics covered in the tutorial :-\nWhat is ArrayList in Java;\nArrayList properties in Java;\nDifference between Array & ArrayList;\nCollection Framework in Java",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/cXeMxHBbatQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "wyTSX0PCw5yRHCI3Dhv_oLzvmfE",
                "id": "MTUxNjQ4MTI4NjI4MTY0ODEyODYyODAwMDU2NQ",
                "snippet": {
                    "publishedAt": "2022-03-24T13:30:28+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Enumeration in Java Collection by Deepak || Cursors in Collections",
                    "description": "Different type of topics related to this tutorial are :-\nEnumeration Cursor in Collection;\nLimitations of Enumeration Cursor;\nDifference between Iterator, ListIterator and Enumeration in Java;\nLegacy Class in Java Collection;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "tnJPKlXj8nQB3LCJf071jRXRIag",
                "id": "MTE2NDgxMjgzMTkxNjQ4MTI4MzE5MDAwMjU3",
                "snippet": {
                    "publishedAt": "2022-03-24T13:25:19+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Enumeration in Java Collection by Deepak || Cursors in Collections",
                    "description": "Different type of topics related to this tutorial are :-\nEnumeration Cursor in Collection;\nLimitations of Enumeration Cursor;\nDifference between Iterator, ListIterator and Enumeration in Java;\nLegacy Class in Java Collection;",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/7FFLSJI6zkk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Lh4lFi5-rDOQaugAs13UPb42pdI",
                "id": "MTUxNjQ3OTU0NjgzMTY0Nzk1NDY4MzAwMDY0Mw",
                "snippet": {
                    "publishedAt": "2022-03-22T13:11:23+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Iterator and ListIterator in java Collection by deepak",
                    "description": "Different collection topics covered in this tutorial :\nIterator and ListIterator in java Collection;\nThree Cusors of Java ListIterator (Collection Framework );\nIterator interface in java;\nListIterator interface in java;\nWorking of cursor in java collection",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "amkYL5xwJ04Cu7SIM8dWssUlIb8",
                "id": "MTE2NDc5NTQwMTIxNjQ3OTU0MDEyMDAwODkz",
                "snippet": {
                    "publishedAt": "2022-03-22T13:00:12+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Iterator and ListIterator in java Collection by deepak",
                    "description": "Different collection topics covered in this tutorial :\nIterator and ListIterator in java Collection;\nThree Cusors of Java ListIterator (Collection Framework );\nIterator interface in java;\nListIterator interface in java;\nWorking of cursor in java collection",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Xe2heS1UP8k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "V9dKnjGBgQCk780L0H8WXKvts4g",
                "id": "MTUxNjQ2NTcyMTU4MTY0NjU3MjE1ODAwMDczNw",
                "snippet": {
                    "publishedAt": "2022-03-06T13:09:18+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Difference between Set and List in Java Collections by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n===============================================================\n\nBelow are the topics covered in the video :-\nDifference between List and Set in Java\nList interface in Java Collection\nSet interface in Java Collection\nDifference between Iterator and ListIterator\nCollection framework Java interview questions\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming/\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "A12q1OgaLXkdgkoAFcYRfW27X68",
                "id": "MTE2NDY1NzA5MDUxNjQ2NTcwOTA1MDAwNjE1",
                "snippet": {
                    "publishedAt": "2022-03-06T12:48:25+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Difference between Set and List in Java Collections by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n===============================================================\n\nBelow are the topics covered in the video :-\nDifference between List and Set in Java\nList interface in Java Collection\nSet interface in Java Collection\nDifference between Iterator and ListIterator\nCollection framework Java interview questions\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming/\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/2Pwo3O-sBMk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "Hui1alpBkd9_T-l-SCkBDaSlgto",
                "id": "MTUxNjM0Mzg5MjMyMTYzNDM4OTIzMjAwMDcyMQ",
                "snippet": {
                    "publishedAt": "2021-10-16T13:00:32+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collection Interface in Java | Collection Interface Methods by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n-----------------------------------------------------------------------------------------\n\nDifferent topics covered in this tutorial....\nCollection Framework - Collection interface details\nCollection in Java Practical\nCollection Interface in Java Practical\nComplete Java Collections Framework - Java Collections Framework\nCollections Framework in Java \nJava Collections Framework\nWhat is Collection Interface? | Java Collection Framework\nCollection and Generics in Java\nJava collections framework interview questions\n\n-----------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming/\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "GDemSGKiANzk0r4ak2hrw93rFtY",
                "id": "MTE2MzQzODM0NTQxNjM0MzgzNDU0MDAwODA2",
                "snippet": {
                    "publishedAt": "2021-10-16T11:24:14+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collection Interface in Java | Collection Interface Methods by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n-----------------------------------------------------------------------------------------\n\nDifferent topics covered in this tutorial....\nCollection Framework - Collection interface details\nCollection in Java Practical\nCollection Interface in Java Practical\nComplete Java Collections Framework - Java Collections Framework\nCollections Framework in Java \nJava Collections Framework\nWhat is Collection Interface? | Java Collection Framework\nCollection and Generics in Java\nJava collections framework interview questions\n\n-----------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming/\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/niSqYDcH7Aw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4ndazPm4C1UGdYvWeIdzKCK9UVI",
                "id": "MTUxNjMwOTMxNDA0MTYzMDkzMTQwNDAwMDg3MA",
                "snippet": {
                    "publishedAt": "2021-09-06T12:30:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collections Framework in Java by Deepak | Collection & Map Hierarchy",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifferent topics covered in this tutorial :-\nCollections Framework in Java by Deepak;\nCollection & Map Hierarchy;\nCollections Framework Hierarchy;\nCollection Hierarchy in java || Collection interfaces and classes;\nOverview of Collection framework;\nCollections Framework in Java;\nCollection and Generics in Java;\nWhat is Collection object in java;\nJava Collections Framework in Hindi Java Collection Interview Questions & Answers;\nJava collections framework interview questions;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming/\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hdqwzpWPgx3AOyF4angHv7wzYk8",
                "id": "MTE2MzA5MTc2NjUxNjMwOTE3NjY1MDAwMTc2",
                "snippet": {
                    "publishedAt": "2021-09-06T08:41:05+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collections Framework in Java by Deepak | Collection & Map Hierarchy",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifferent topics covered in this tutorial :-\nCollections Framework in Java by Deepak;\nCollection & Map Hierarchy;\nCollections Framework Hierarchy;\nCollection Hierarchy in java || Collection interfaces and classes;\nOverview of Collection framework;\nCollections Framework in Java;\nCollection and Generics in Java;\nWhat is Collection object in java;\nJava Collections Framework in Hindi Java Collection Interview Questions & Answers;\nJava collections framework interview questions;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming/\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Md52Y7-vP2E/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "-_539ohDiD8U3k9m_K4P5VNxvSs",
                "id": "MTE2MzA5MTU4ODgxNjMwOTE1ODg4MDAwNzcz",
                "snippet": {
                    "publishedAt": "2021-09-06T08:11:28+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collections - Difference between Arrays and Collections in Java by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nTopics covered below :-\nArrays and Collections in Java - Java Tutorial For Beginners;\nCollections - Difference between Arrays and Collections;\nDifferences between Array and Collection | Core Java Tutorial;\nArrays in Java (Hindi) by Deepak;\nJava Tutorial: Introduction to Arrays;\nCollections and Arrays in Java Hindi;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "_nlyizL3YSmBrWZrQbBw4sjXlGU",
                "id": "MTE2MzA5MTU4NzExNjMwOTE1ODcxMDAwODM3",
                "snippet": {
                    "publishedAt": "2021-09-06T08:11:11+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Data Structure | Collections Framework in Java by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifferent types of topics covered in this tutorial :\nData Structures | Collections Framework in Java;\nCollections Framework in Java;\nData Structures using Java;\nIntroduction To Java Collections - Data Structures Java - Collection Framework;\nData structure in java\nCollections framework in java by deepak;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "MwVZMXOI6JtRizk40XSx6rUAxsw",
                "id": "MTUxNjMwNDk5NDAwMTYzMDQ5OTQwMDAwMDg3MA",
                "snippet": {
                    "publishedAt": "2021-09-01T12:30:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collections - Difference between Arrays and Collections in Java by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nTopics covered below :-\nArrays and Collections in Java - Java Tutorial For Beginners;\nCollections - Difference between Arrays and Collections;\nDifferences between Array and Collection | Core Java Tutorial;\nArrays in Java (Hindi) by Deepak;\nJava Tutorial: Introduction to Arrays;\nCollections and Arrays in Java Hindi;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "5rj1OcZG2XHul7lH3K1UhEoWHfs",
                "id": "MTE2MzA0ODQ3NjAxNjMwNDg0NzYwMDAwNzcz",
                "snippet": {
                    "publishedAt": "2021-09-01T08:26:00+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Collections - Difference between Arrays and Collections in Java by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nTopics covered below :-\nArrays and Collections in Java - Java Tutorial For Beginners;\nCollections - Difference between Arrays and Collections;\nDifferences between Array and Collection | Core Java Tutorial;\nArrays in Java (Hindi) by Deepak;\nJava Tutorial: Introduction to Arrays;\nCollections and Arrays in Java Hindi;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-GBueqxyW4o/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "50bIXbTXTAFIFa3iTbtGe5ZBNTk",
                "id": "MTUxNjI5NzIzNjA3MTYyOTcyMzYwNzAwMDMwOA",
                "snippet": {
                    "publishedAt": "2021-08-23T13:00:07+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Data Structure | Collections Framework in Java by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifferent types of topics covered in this tutorial :\nData Structures | Collections Framework in Java;\nCollections Framework in Java;\nData Structures using Java;\nIntroduction To Java Collections - Data Structures Java - Collection Framework;\nData structure in java\nCollections framework in java by deepak;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "EtcT_rrKVsYmcsqJZHhnR_KJJMk",
                "id": "MTE2Mjk3MjEyNTMxNjI5NzIxMjUzMDAwODM3",
                "snippet": {
                    "publishedAt": "2021-08-23T12:20:53+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Data Structure | Collections Framework in Java by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifferent types of topics covered in this tutorial :\nData Structures | Collections Framework in Java;\nCollections Framework in Java;\nData Structures using Java;\nIntroduction To Java Collections - Data Structures Java - Collection Framework;\nData structure in java\nCollections framework in java by deepak;\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Od-4hMfBkMI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "4k4h-I8bctX6CJGNH4Mc_1Xy9Rk",
                "id": "MTUxNjIxNDI3NDExMTYyMTQyNzQxMTAwMDQwOQ",
                "snippet": {
                    "publishedAt": "2021-05-19T12:30:11+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How to Become a Java Full Stack Developer | Top Java Developer Skills",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nHow to Become a Full Stack Java Developer - Learning Path for Full Stack Java Developer\nSkills Required to Become Java Full Stack Developer Courses and Project Architecture\nJava Developer RoadMap 2021 | RoadMap to Become Java Developer 2021 | Java Skills to get job 2021\nHow to be a Full Stack Developer?\nTop Skills to Become a Full-Stack Java Developer\nJava Path - how to become full stack Java developer\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "vzY02wMIofJrmOBPvixFIzSuATc",
                "id": "MTE2MjE0MTcyNjIxNjIxNDE3MjYyMDAwOTY3",
                "snippet": {
                    "publishedAt": "2021-05-19T09:41:02+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "How to Become a Java Full Stack Developer | Top Java Developer Skills",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nHow to Become a Full Stack Java Developer - Learning Path for Full Stack Java Developer\nSkills Required to Become Java Full Stack Developer Courses and Project Architecture\nJava Developer RoadMap 2021 | RoadMap to Become Java Developer 2021 | Java Skills to get job 2021\nHow to be a Full Stack Developer?\nTop Skills to Become a Full-Stack Java Developer\nJava Path - how to become full stack Java developer\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/xYHrdZeMzoA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "lCsqxXmiNStsmpMZkwLSMs44NoY",
                "id": "MTUxNjIxMzQxMDAxMTYyMTM0MTAwMTAwMDcyNA",
                "snippet": {
                    "publishedAt": "2021-05-18T12:30:01+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Difference between Core Java and Advance Java | Advance Java Syllabus by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifference between Core Java and Advance Java;\nAdvance Java Syllabus with Projects (JDBC, Servlets & JSP) by Deepak (Web Development);\nAdvance Java में कम से कम इतना तो ज़रूर सीखें\n\n1. Introduction\n2. Advance Java Introduction\n3. Software’s Installation\n---------------------------------------------------------------------------------------\n4. HTML & HTML 5\n5. XML\n6. CSS (Cascading Style Sheet)\n7. Create Web-Template\n8. JavaScript\n9. jQuery\n10. Bootstrap\n---------------------------------------------------------------------------------------\n11. Database Introduction\n12. SQL (Structured Query Language)\n13. JDBC Prerequisites\n14. JDBC Introduction\n15. JDBC Types of Driver\n16. JDBC Working with JDBC Practical with MySQL\n17. JDBC Working with JDBC Practical with Oracle\n18. JDBC Explanation of Class.forName(“--”);\n19. JDBC API (java.sql Package and javax.sql Package)\n20. JDBC Deep working of Java Application with Database\n21. JDBC Interview Questions \n22. JDBC PreparedStatement Concepts \n23. JDBC CallableStatement with Stored Procedure\n24. JDBC CallableStatement with Stored Function\n25. JDBC ResultSet Types (Theory & Practical)\n26. JDBC Database Connection Different Approach\n27. JDBC Transaction Management\n28. JDBC Batch Updations & SQL Injection\n29. JDBC MetaData & Date/Time/Timestamp in java\n30. JDBC BLOB & CLOB\n31. JDBC Connection Pooling\n32. JDBC RowSet\n33. JDBC RowId\n---------------------------------------------------------------------------------------\n34. Client Server Communication (Part 1)\n---------------------------------------------------------------------------------------\n35. Servlet Introduction & Servlet API\n36. web.xml file (standard deployment descriptor)\n37. Apache Tomcat Server\n38. Create Servlet First Program (Using Simple Editor)\n39. Deep Explanation of working of Servlet Program\n40. Request Object Explanation\n41. Servlet Program using IDE’s\n42. ServletContext\n43. ServletConfig\n44. Servlet Communication with Servlet, JSP & HTML\n45. Session Management using HttpSession\n46. HttpSession Deep Explanation\n47. Session Management using Cookies\n48. Session Management using URL-Rewriting\n49. Annotations in Java & Servlets\n50. Servlet Filter\n---------------------------------------------------------------------------------------\n51. JavaMail API\n---------------------------------------------------------------------------------------\n52. JSP Introduction\n53. JSP Life Cycle & Class Hierarchy\n54. JSP Tags Diagram\n55. JSP Directive Tags/Elements\n56. JSP Scripting Tags, Implicit Objects & JSP Scopes\n57. JSP Standard Action Tags\n58. JSP Custom Action Tags\n59. Expression Language (EL)\n60. Java Standard Tag Library (JSTL)\n---------------------------------------------------------------------------------------\n61. Job Portal Project\n---------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "hoUd0LlWfnXO0rngwE2Zo3HpoHk",
                "id": "MTE2MjEzMzU1NjExNjIxMzM1NTYxMDAwNTI5",
                "snippet": {
                    "publishedAt": "2021-05-18T10:59:21+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Difference between Core Java and Advance Java | Advance Java Syllabus by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nDifference between Core Java and Advance Java;\nAdvance Java Syllabus with Projects (JDBC, Servlets & JSP) by Deepak (Web Development);\nAdvance Java में कम से कम इतना तो ज़रूर सीखें\n\n1. Introduction\n2. Advance Java Introduction\n3. Software’s Installation\n---------------------------------------------------------------------------------------\n4. HTML & HTML 5\n5. XML\n6. CSS (Cascading Style Sheet)\n7. Create Web-Template\n8. JavaScript\n9. jQuery\n10. Bootstrap\n---------------------------------------------------------------------------------------\n11. Database Introduction\n12. SQL (Structured Query Language)\n13. JDBC Prerequisites\n14. JDBC Introduction\n15. JDBC Types of Driver\n16. JDBC Working with JDBC Practical with MySQL\n17. JDBC Working with JDBC Practical with Oracle\n18. JDBC Explanation of Class.forName(“--”);\n19. JDBC API (java.sql Package and javax.sql Package)\n20. JDBC Deep working of Java Application with Database\n21. JDBC Interview Questions \n22. JDBC PreparedStatement Concepts \n23. JDBC CallableStatement with Stored Procedure\n24. JDBC CallableStatement with Stored Function\n25. JDBC ResultSet Types (Theory & Practical)\n26. JDBC Database Connection Different Approach\n27. JDBC Transaction Management\n28. JDBC Batch Updations & SQL Injection\n29. JDBC MetaData & Date/Time/Timestamp in java\n30. JDBC BLOB & CLOB\n31. JDBC Connection Pooling\n32. JDBC RowSet\n33. JDBC RowId\n---------------------------------------------------------------------------------------\n34. Client Server Communication (Part 1)\n---------------------------------------------------------------------------------------\n35. Servlet Introduction & Servlet API\n36. web.xml file (standard deployment descriptor)\n37. Apache Tomcat Server\n38. Create Servlet First Program (Using Simple Editor)\n39. Deep Explanation of working of Servlet Program\n40. Request Object Explanation\n41. Servlet Program using IDE’s\n42. ServletContext\n43. ServletConfig\n44. Servlet Communication with Servlet, JSP & HTML\n45. Session Management using HttpSession\n46. HttpSession Deep Explanation\n47. Session Management using Cookies\n48. Session Management using URL-Rewriting\n49. Annotations in Java & Servlets\n50. Servlet Filter\n---------------------------------------------------------------------------------------\n51. JavaMail API\n---------------------------------------------------------------------------------------\n52. JSP Introduction\n53. JSP Life Cycle & Class Hierarchy\n54. JSP Tags Diagram\n55. JSP Directive Tags/Elements\n56. JSP Scripting Tags, Implicit Objects & JSP Scopes\n57. JSP Standard Action Tags\n58. JSP Custom Action Tags\n59. Expression Language (EL)\n60. Java Standard Tag Library (JSTL)\n---------------------------------------------------------------------------------------\n61. Job Portal Project\n---------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/alPYhfY0K-k/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "ARtWyKLGwt3NDEBUypqNlgnwNds",
                "id": "MTUxNjIwOTA5MDAyMTYyMDkwOTAwMjAwMDIyMQ",
                "snippet": {
                    "publishedAt": "2021-05-13T12:30:02+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Servlet and JSP Introduction | Servlets & JSP Online Training Syllabus by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nServlet & JSP (Server Side Technologies) by Deepak Online Course:-\n\nServlet Syllabus :-\n1. Advance Java Introduction\n2. Software’s Installation\n3. Client Server Communication\n4. Servlet Introduction & Servlet API\n5. web.xml file (standard deployment descriptor)\n6. Apache Tomcat Server\n7. Create Servlet First Program (Using Simple Editor)\n8. Deep Explanation of working of Servlet Program\n9. Request Object Explanation\n10. Servlet Program using IDE’s\n11. ServletContext\n12. ServletConfig\n13. Servlet Communication with Web Components (servlets or JSP or html)\n14. Servlet Communication with Applets\n15. Session Management using HttpSession\n16. HttpSession Deep Explanation\n17. Session Management using Cookies\n18. Session Management using URL-Rewriting\n19. Annotations in Java & Servlets\n20. Servlet Filter\n\n--------------------------------\n\nJSP Syllabus :-\n1. Basics of HTML, CSS, JavaScript, JQuery and Bootstrap\n2. JSP Introduction\n3. JSP Life Cycle & Class Hierarchy\n4. JSP Tags Diagram\n5. JSP Directive Tags/Elements\n6. JSP Scripting Tags, Implicit Objects & JSP Scopes\n7. JSP Standard Action Tags\n8. JSP Custom Action Tags\n9. Expression Language (EL) & JSTL\n10. JSTL (Java Standard Tag Library)\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "kkHtz89ET2iBfRwHLcu6QVT1Z9M",
                "id": "MTE2MjA5MDU5ODYxNjIwOTA1OTg2MDAwNjMy",
                "snippet": {
                    "publishedAt": "2021-05-13T11:39:46+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "Servlet and JSP Introduction | Servlets & JSP Online Training Syllabus by Deepak",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nServlet & JSP (Server Side Technologies) by Deepak Online Course:-\n\nServlet Syllabus :-\n1. Advance Java Introduction\n2. Software’s Installation\n3. Client Server Communication\n4. Servlet Introduction & Servlet API\n5. web.xml file (standard deployment descriptor)\n6. Apache Tomcat Server\n7. Create Servlet First Program (Using Simple Editor)\n8. Deep Explanation of working of Servlet Program\n9. Request Object Explanation\n10. Servlet Program using IDE’s\n11. ServletContext\n12. ServletConfig\n13. Servlet Communication with Web Components (servlets or JSP or html)\n14. Servlet Communication with Applets\n15. Session Management using HttpSession\n16. HttpSession Deep Explanation\n17. Session Management using Cookies\n18. Session Management using URL-Rewriting\n19. Annotations in Java & Servlets\n20. Servlet Filter\n\n--------------------------------\n\nJSP Syllabus :-\n1. Basics of HTML, CSS, JavaScript, JQuery and Bootstrap\n2. JSP Introduction\n3. JSP Life Cycle & Class Hierarchy\n4. JSP Tags Diagram\n5. JSP Directive Tags/Elements\n6. JSP Scripting Tags, Implicit Objects & JSP Scopes\n7. JSP Standard Action Tags\n8. JSP Custom Action Tags\n9. Expression Language (EL) & JSTL\n10. JSTL (Java Standard Tag Library)\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Jf5mfB3vxPY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "playlistItem"
                }
            },
            {
                "kind": "youtube#activity",
                "etag": "plqzpDFlVv82xEcoHR_ckkHLInY",
                "id": "MTUxNjIwODIyNjA0MTYyMDgyMjYwNDAwMDQ2OQ",
                "snippet": {
                    "publishedAt": "2021-05-12T12:30:04+00:00",
                    "channelId": "UC4C20Zelty7V0fuy5uTHdjQ",
                    "title": "JDBC | Java Database Connectivity by Deepak | JDBC Syllabus",
                    "description": "#java #javatutorials #deepak #smartprogramming\n\n☀ Java Development Course (Upto 80% off) : https://courses.smartprogramming.in\n📞 For more details Call or What's App : +91 98887-55565\n\n------------------------------------------------------------------------------------------\n\nJDBC or Java Database Connectivity (JDBC) by Deepak\nJDBC Syllabus is as follows :-\n1. Database\n2. SQL\n3. JDBC Prerequisite\n4. JDBC Introduction\n5. JDBC Types of Driver\n6. Working with JDBC Practical with MySQL (Part 1)\n7. Working with JDBC Practical with Oracle (Part 2)\n8. Explanation of Class.forName(“--”);\n9. JDBC API (java.sql and javax.sql Package)\n10. Deep working of Java Application with Database\n11. JDBC Interview Questions \n12. PreparedStatement Concepts \n13. CallableStatement with Stored Procedure (Part 1)\n14. CallableStatement with Stored Function (Part 2)\n15. ResultSet Types (Theory)\n16. ResultSet Types (Practical)\n17. Database Connection Different Approach\n18. Transaction Management (Theory)\n19. Transaction Management (Practical)\n20. Batch Updations & SQL Injection\n21. MetaData & Date/Time/Timestamp in java\n22. BLOB & CLOB\n23. Connection Pooling\n24. RowSet\n25. RowId\n\n------------------------------------------------------------------------------------------\n\nFollow Me On Social Media :- \n► Website : https://www.smartprogramming.in\n► Instagram : https://www.instagram.com/smart_programming\n► Facebook : https://www.facebook.com/smartprogramming.india",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ANIEQ2GRN9I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ANIEQ2GRN9I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ANIEQ2GRN9I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ANIEQ2GRN9I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ANIEQ2GRN9I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Smart Programming",
                    "type": "upload"
                }
            }
        ],
        "nextPageToken": "CIACEAA",
        "pageInfo": {
            "totalResults": 522,
            "resultsPerPage": 256
        }
    }
]