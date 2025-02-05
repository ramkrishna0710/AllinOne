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

export const videoDataListGW: VideoListData[] = [
  {
    "kind": "youtube#activityListResponse",
    "etag": "ObBocIV9kmvBRa6luzZzivHAnSc",
    "items": [
      {
        "kind": "youtube#activity",
        "etag": "yAN8visTmoeoRWSaavU71QUEdl8",
        "id": "MTUxNzEyNjY4MDYzMTcxMjY2ODA2MzAwMDY4MQ",
        "snippet": {
          "publishedAt": "2024-04-09T13:07:43+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "*Easiest Way* to do Linked List 🔥 📈 #Shorts #PhysicsWallah #DSA",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sk7Lr4N3has/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sk7Lr4N3has/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sk7Lr4N3has/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sk7Lr4N3has/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sk7Lr4N3has/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "nX1deeV133iXAu3tc7tIQTMTB8U",
        "id": "MTUxNzEyNDk2NjIyMTcxMjQ5NjYyMjAwMDAyMQ",
        "snippet": {
          "publishedAt": "2024-04-07T13:30:22+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "NO Tech Jobs in 2024 ? Massive Tech Layoffs & Recession | How to get a job in 2024?",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nWith the threat of massive tech layoffs and a recession in 2024, you may be wondering how to secure a job. In this video, we'll discuss the current job market and provide tips on how to get a job in 2024.\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #SoftwareEngineer #SoftwareDeveloper #DSA #CollegeWallah #PhysicsWallah #Microsoft #Devin #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/uN4Vb4nsULc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/uN4Vb4nsULc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/uN4Vb4nsULc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/uN4Vb4nsULc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/uN4Vb4nsULc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "W-iIg4UfG1AlfWITw_ss164dmfs",
        "id": "MTUxNzEyNDk0Mzc4MTcxMjQ5NDM3ODAwMDg2NA",
        "snippet": {
          "publishedAt": "2024-04-07T12:52:58+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "अब UPSC  करना और भी आसान 🚀 #Shorts #physicswallah #UPSC",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/yCTBT6LrgjA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/yCTBT6LrgjA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/yCTBT6LrgjA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/yCTBT6LrgjA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/yCTBT6LrgjA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "IOjGOleGgiOvTPMSxanglnxiLY4",
        "id": "MTUxNzEyMzIzNTQxMTcxMjMyMzU0MTAwMDAxNQ",
        "snippet": {
          "publishedAt": "2024-04-05T13:25:41+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Best Binary Search Roadmap 🔥 #Shorts #PhysicsWallah #DSA",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/iNB8NEo-o_Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/iNB8NEo-o_Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/iNB8NEo-o_Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/iNB8NEo-o_Y/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/iNB8NEo-o_Y/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4SQbLC7Xd9CEcfWzm3hyo3ID4Ig",
        "id": "MTUxNzEyMjM3MjMzMTcxMjIzNzIzMzAwMDkyNA",
        "snippet": {
          "publishedAt": "2024-04-04T13:27:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "This is the End to Software Engineering! Devin AI is here to take your JOB ?",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nIs this the end of software engineering? Find out how Devin AI is changing the game and potentially taking over your job in this eye-opening video.\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #SoftwareEngineer #SoftwareDeveloper #DSA #CollegeWallah #PhysicsWallah #Microsoft #Devin #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Q-E8Cf-Yedw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Q-E8Cf-Yedw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Q-E8Cf-Yedw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Q-E8Cf-Yedw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Q-E8Cf-Yedw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2ps2Pin6Mrnm3GfcBOy_nBuYGvs",
        "id": "MTUxNzEyMDY1Mjg2MTcxMjA2NTI4NjAwMDI3MQ",
        "snippet": {
          "publishedAt": "2024-04-02T13:41:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Are Software Engineers Overpaid in India? Salary of a Software Engineer in India in 2024",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nCurious if software engineers are overpaid in India? Find out the salary of a software engineer in India in 2024 in this video! Stay informed and get insights into the tech industry in India.\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #SoftwareEngineer #SoftwareDeveloper #DSA #CollegeWallah #PhysicsWallah #Microsoft #Devin #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MU099yssYCU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MU099yssYCU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MU099yssYCU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MU099yssYCU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MU099yssYCU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AodUuHwyKkylA1AZX0Woz8MH-KM",
        "id": "MTUxNzExOTc4NDA0MTcxMTk3ODQwNDAwMDIyMA",
        "snippet": {
          "publishedAt": "2024-04-01T13:33:24+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Get Internship With This Website  🔥🔥 #Shorts #PhysicsWallah #Internship",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j-JXfCiEsEs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j-JXfCiEsEs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j-JXfCiEsEs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/j-JXfCiEsEs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/j-JXfCiEsEs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "zGEl_GVSEfT5quRWT5ddBMrlwzI",
        "id": "MTUxNzExODA1MDY4MTcxMTgwNTA2ODAwMDI1NQ",
        "snippet": {
          "publishedAt": "2024-03-30T13:24:28+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Top 5 Crazy Tools That Will Save Your Time in 2024 | Best AI Tools For College Students 💯🚀",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nDiscover the top 5 crazy tools that will save you time in 2024! From AI tools for college students to productivity hacks, these tools will revolutionize how you study and work. \n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #AItools #CollegeStudents #DSA #CollegeWallah #PhysicsWallah #AI #Devin #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JJrfafVrySc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JJrfafVrySc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JJrfafVrySc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/JJrfafVrySc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/JJrfafVrySc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "f-xFrjpXKmXuaxz8gxygMFw-Wyc",
        "id": "MTUxNzExNjMxMDg3MTcxMTYzMTA4NzAwMDk3NA",
        "snippet": {
          "publishedAt": "2024-03-28T13:04:47+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Take Your Career To Next Level 🔥🚀 #Shorts #PhysicsWallah #Career",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0ZwT4p0zfbM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0ZwT4p0zfbM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0ZwT4p0zfbM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0ZwT4p0zfbM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0ZwT4p0zfbM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1y_afXOO1xpK1JqC6o9HULDJvPU",
        "id": "MTUxNzExNjI5MDEwMTcxMTYyOTAxMDAwMDEwMQ",
        "snippet": {
          "publishedAt": "2024-03-28T12:30:10+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "HTML & CSS Full Course:  Beginners to Pro 2024 | 3 Mini Projects Included 🔥 Web Development Course",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nTimestamps: \n00:00 HTML Introduction\n02:35 Installation of VS Code\n14:20 Tags in HTML\n44:37 CSS Introduction\n58:03 Understanding SIZE of elements\n1:11:38 DIV\n1:21:48 IDs\n1:27:05 FLEX\n1:40:54 Border\n1:58:55 Classes\n2:05:39 Margin v/s Padding\n2:08:52 Mini Project 1 : Game of Shapes\n2:53:03 Mini Project 2 : Game of Cards\n3:36:45 Mini Project 3 : Website UI Clone\n\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #WebDevelopment #HTML #CollegeWallah #PhysicsWallah #CSS #JavaScript #HTMLTutorial #WebDeveloper #JavaScriptTutorial #WebDevelopmentCourse",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HBqWsrqK89U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HBqWsrqK89U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HBqWsrqK89U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/HBqWsrqK89U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/HBqWsrqK89U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "JygVTLrJ1BCuwhUFYejj6gP6p-I",
        "id": "MTUxNzExNDU3NjA3MTcxMTQ1NzYwNzAwMDI3MQ",
        "snippet": {
          "publishedAt": "2024-03-26T12:53:27+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Why women's are needed in Tech Sector ?? 🧐 #Shorts #PhysicsWallah #Technology",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e1GpJZ2iQ-E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e1GpJZ2iQ-E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e1GpJZ2iQ-E/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/e1GpJZ2iQ-E/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/e1GpJZ2iQ-E/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "fJN1kKR851ir1R4-pTO8di3vnQs",
        "id": "MTUxNzExMTE0MjExMTcxMTExNDIxMTAwMDEzOA",
        "snippet": {
          "publishedAt": "2024-03-22T13:30:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "10 Lakhs/Month Salary In India! 🤯 High Frequency Trading Firms |  Salary , Job Roles, Placement",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nAre you interested in earning a high salary in India? In this video, we'll dive into the world of high-frequency trading firms and discuss the job roles, salaries, and placement opportunities available. With potential earnings of 10 lakhs per month, this could be the career path for you! Learn all about the exciting world of high-frequency trading and see if it's the right fit for your career aspirations.\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #WebDevelopment #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Mqnm0WVROME/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Mqnm0WVROME/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Mqnm0WVROME/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Mqnm0WVROME/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Mqnm0WVROME/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "fToGQNCKSRAiHrxbRkUJnApSxRs",
        "id": "MTUxNzEwODU1ODQ2MTcxMDg1NTg0NjAwMDcyNg",
        "snippet": {
          "publishedAt": "2024-03-19T13:44:06+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to do DSA and Development both? DSA vs Development ? What should you learn to get a Job ?",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #WebDevelopment #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Cs5WfrCZIy8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Cs5WfrCZIy8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Cs5WfrCZIy8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Cs5WfrCZIy8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Cs5WfrCZIy8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ZYJdvN796IxNAqWrS6hp86LWZmc",
        "id": "MTUxNzEwNjgyMjExMTcxMDY4MjIxMTAwMDU0MA",
        "snippet": {
          "publishedAt": "2024-03-17T13:30:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Coding Journey of a Commerce Student! | How To Start Coding? How to become a Software Engineer?",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nFollow along on my epic journey from being a commerce student to becoming a software engineer! Learn how to start coding in 2024 and become a successful software engineer. These tips and tricks will help you on your coding journey. Start building your future today!\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #WebDevelopment #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Qg4aF2DxpjI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Qg4aF2DxpjI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Qg4aF2DxpjI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Qg4aF2DxpjI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Qg4aF2DxpjI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1jAWky2pdtDlYq9YWTiJ9P3Wqrk",
        "id": "MTUxNzEwNjc4NjQ1MTcxMDY3ODY0NTAwMDU2Ng",
        "snippet": {
          "publishedAt": "2024-03-17T12:30:45+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "5 Huge College Mistakes You Must Avoid!! 😵 #Shorts #PhysicsWallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zCf-DXvygZo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zCf-DXvygZo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zCf-DXvygZo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zCf-DXvygZo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zCf-DXvygZo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Tp-Pg6oY0_zkXBTmQa5d1wQfsuc",
        "id": "MTUxNzEwNTk4MDg0MTcxMDU5ODA4NDAwMDkyOQ",
        "snippet": {
          "publishedAt": "2024-03-16T14:08:04+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Coding Is Not For You!! 😨 #Shorts #PhysicsWallah #Coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/CtouJ7ylWfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/CtouJ7ylWfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/CtouJ7ylWfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/CtouJ7ylWfE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/CtouJ7ylWfE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "c1t1i90LHSjh5-Vb201niVjvZ8M",
        "id": "MTUxNzEwNTk1ODEyMTcxMDU5NTgxMjAwMDQ2Ng",
        "snippet": {
          "publishedAt": "2024-03-16T13:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "React vs Next.js: Which Should You Learn in 2024? | Difference Between React and Next js ?",
          "description": "📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nIn this video, we'll discuss the key differences between React and Next.js and help you determine which one to learn for your upcoming projects. Whether you're a beginner or an experienced developer, this comparison will give you valuable insights to make the right decision. A must-watch for anyone looking to improve their web development skills!\n\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #WebDevelopment #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DWKkWqQnEP4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DWKkWqQnEP4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DWKkWqQnEP4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DWKkWqQnEP4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DWKkWqQnEP4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FCOdTOjjAJjN_in_PApNK9zoSS4",
        "id": "MTUxNzEwNTc1Mjk5MTcxMDU3NTI5OTAwMDQxMQ",
        "snippet": {
          "publishedAt": "2024-03-16T07:48:19+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "AI Software Engineer 🤯😨 #Shorts #PhysicsWallah #ArtificialIntelligence",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DKOSOJvjvHY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DKOSOJvjvHY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DKOSOJvjvHY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DKOSOJvjvHY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DKOSOJvjvHY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "IrxS-q39_TD9Ly2KyBppS87KKdE",
        "id": "MTUxNzEwMjQ5ODg2MTcxMDI0OTg4NjAwMDk4Nw",
        "snippet": {
          "publishedAt": "2024-03-12T13:24:46+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Surprise!! Biggest Offers On All Coding Courses | The VISHWAS DIWAS 2024 is Extended 🔥",
          "description": "Baccho ki demand pe Vishwas diwas ke offers 15th March 2024 tak extend ho gaye 😱👇🏻\nVisit the PW Skills website to explore courses: https://bit.ly/48z6Z9v\nUse COUPON 'VISHWAS' to get ADDITIONAL DISCOUNT, valid till 15th March'24.\n\n📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n-------------------------------------------------------\nDon't miss out on our biggest offers of the year - The VISHWAS DIWAS 2024! Get amazing discounts on all coding courses and start your journey towards becoming a programming pro. Limited time only, so don't wait - grab your offers now and take your coding skills to the next level! \n\nStill confused to choose the right CAREER path? Fill the form, you will get the call from our Senior Academic Counsellor: https://bit.ly/495UNgC \n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n#PW #BharatKaVishwas #VishwasDiwas  #Bharat #CollegeWallah #PhysicsWallah  #PWSkillsTech #PWSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/60ZD9SDS1FM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/60ZD9SDS1FM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/60ZD9SDS1FM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/60ZD9SDS1FM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/60ZD9SDS1FM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9_dCuw-K5WsSfDurlD1hxy_aebw",
        "id": "MTUxNzEwMTYxMzQyMTcxMDE2MTM0MjAwMDc3OA",
        "snippet": {
          "publishedAt": "2024-03-11T12:49:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Level sabke niklenge 🤪 #Shorts #PhysicsWallah #DSA",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ghEd5vx6UE4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ghEd5vx6UE4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ghEd5vx6UE4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ghEd5vx6UE4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ghEd5vx6UE4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "TEHRaWTx_Zg9v0LGZmzUMV6dOFI",
        "id": "MTUxNzA5OTkxMDE5MTcwOTk5MTAxOTAwMDExNg",
        "snippet": {
          "publishedAt": "2024-03-09T13:30:19+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "C++ or JAVA ? Which Coding Language is The BEST For DSA / Web Development ? 🚀 Placement & Internship",
          "description": "Visit the PW Skills website to explore courses: https://bit.ly/48z6Z9v\n\nUse COUPON 'VISHWAS' to get EXTRA 15% OFF, valid till 10th March'24.\n\n📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n-------------------------------------------------------\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #DataStructure #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WVx_k2kimWM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WVx_k2kimWM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WVx_k2kimWM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WVx_k2kimWM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WVx_k2kimWM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "KcBKffb_N6NbP-TkZ49czwyuIhY",
        "id": "MTUxNzA5ODIwMzU1MTcwOTgyMDM1NTAwMDQzNA",
        "snippet": {
          "publishedAt": "2024-03-07T14:05:55+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Is Web Development worth it in 2024? DSA vs Development ? What should you learn to get a Job ?",
          "description": "Visit the PW Skills website to explore courses: https://bit.ly/48z6Z9v\nUse COUPON 'VISHWAS' to get EXTRA 15% OFF, valid till 10th March'24.\n\n📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GohCevM5uIk7Tu3LX073xOq4i3v2MXU6W9UpAKp1tvehL6QOs0lv1fIaAry1EALw_wcB\n-------------------------------------------------------\nIn this video, we'll discuss whether web development is worth pursuing in 2024, compare it to data structure and algorithms, and share tips on what to learn to secure a job in the field. Stay ahead of the game and make informed decisions for your career in web development!\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #WebDevelopment #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/O_FHxFFqilI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/O_FHxFFqilI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/O_FHxFFqilI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/O_FHxFFqilI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/O_FHxFFqilI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "RrYjkTAsY-E-Rd5e94WgJGTV5bI",
        "id": "MTUxNzA5NjQ2NzY3MTcwOTY0Njc2NzAwMDMzNw",
        "snippet": {
          "publishedAt": "2024-03-05T13:52:47+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Ultimate 4 Months DSA Roadmap 2024 🚀 Complete Step By Step Roadmap To Crack Placements & Internships",
          "description": "Visit the PW Skills website to explore courses: https://bit.ly/48z6Z9v\n\nUse COUPON 'VISHWAS' to get EXTRA 15% OFF, valid till 10th March'24.\n\n📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #DataStructure #DSA #CollegeWallah #PhysicsWallah #Programming #CPP #JAVA  #CompetitiveProgramming #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/B5ZG3060ImM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/B5ZG3060ImM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/B5ZG3060ImM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/B5ZG3060ImM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/B5ZG3060ImM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "S27Du7a8sUSJbJ_g-6vml9-sR1U",
        "id": "MTUxNzA5NTYwODkxMTcwOTU2MDg5MTAwMDI3MQ",
        "snippet": {
          "publishedAt": "2024-03-04T14:01:31+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Biggest Offers On All Coding Courses - The VISHWAS DIWAS 2024 ! 🔥",
          "description": "Use COUPON 'VISHWAS' to get EXTRA 15% OFF, valid till 10th March'24.\n📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n📚 PW Store: https://store.pw.live/?gad_source=1&gclid=CjwKCAiA_5WvBhBAEiwAZtCU75pWYIkjHisiGchEdJmxcbZw96YWERf3E3_M3HPprubUDXvOfBKQDhoCQW4QAvD_BwE\n-------------------------------------------------------\nDon't miss out on our biggest offers of the year - The VISHWAS DIWAS 2024! Get amazing discounts on all coding courses and start your journey towards becoming a programming pro. Limited time only, so don't wait - grab your offers now and take your coding skills to the next level! \n\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n#PW #BharatKaVishwas #vishwasdiwas  #VishwasDiwas #Bharat  #CollegeWallah #PhysicsWallah  #PWSkillsTech #PWSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-iFT4x-6zXk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-iFT4x-6zXk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-iFT4x-6zXk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-iFT4x-6zXk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-iFT4x-6zXk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Kl9qalmUOWjSXSlWU0HAd_HdBaU",
        "id": "MTUxNzA5MTI3MDI2MTcwOTEyNzAyNjAwMDc5MA",
        "snippet": {
          "publishedAt": "2024-02-28T13:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Announcing FREE Python For AI Course | Learn complete Python For AI | Beginner To Professional Level",
          "description": "Exciting news! 🚀 Join us for our FREE Python For AI Course,  Whether you're a beginner or aspiring to become a pro, this course is tailored just for you. From laying the foundation to mastering advanced techniques, we'll guide you every step of the way. Don't miss out on this opportunity to level up your skills and unlock new career possibilities. Reserve your spot now! 💻🌟\n\n📌Enroll Now: https://pwskills.com/course/free-python-ai/\n\nVisit the PW Skills website to explore courses: https://bit.ly/48z6Z9v\n\nUse COUPON 'VISHWAS' to get EXTRA 15% OFF, valid till 10th March'24.\n\n📗 Enroll Now in Decode Batches and become JOB READY:\n📌 Python with DSA: https://bit.ly/4bXv5xF\n📌 Java with DSA: https://bit.ly/49vEQkZ\n📌 C++ with DSA: https://bit.ly/49NnNKT\n\n📗Job Assistance Courses:\n📌 Data Science with Generative AI: https://bit.ly/3VeTR6z\n📌 Full Stack Development: https://bit.ly/3uPP1BE\n📌 Data Analytics: https://bit.ly/3SNMHTO \n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nLearn Python and AI for free with our comprehensive course! From beginner to professional level, this course will teach you all you need to know to master Python for AI. Don't miss this opportunity to enhance your skills and expand your career opportunities. Enroll now!\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n #ArtificialIntelligence #AI #OpenAI  #CollegeWallah #PhysicsWallah #Python #PythonProgramming #DataScientist #PWSkillsTech #PWSkills #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wAf_Gflu4Qs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wAf_Gflu4Qs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wAf_Gflu4Qs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/wAf_Gflu4Qs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/wAf_Gflu4Qs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "JhCXEA0IWQjhpOG33T_ZXLs9Uow",
        "id": "MTUxNzA4MzUwODA0MTcwODM1MDgwNDAwMDc5Nw",
        "snippet": {
          "publishedAt": "2024-02-19T13:53:24+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Working at Startup vs Big Companies | Pros and cons 😥 Which one should you select as a Developer ?",
          "description": "📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nAre you a developer unsure about whether to work at a startup or a big company? In this video, we'll discuss the pros and cons of each and help you decide which one is the best fit for you. From work culture to growth opportunities, we'll cover everything you need to know before making your decision. Watch now and make the right choice for your career! \n\n🔗 Java Script Full Course:  https://www.youtube.com/watch?v=LeHdBkdolBg&list=PLxgZQoSe9cg1B3TiBz05FMwfdwCkkpy2c&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n\n#WebDev #Startup #CollegeWallah #PhysicsWallah #Microsoft #FAANG #Programming #Corporate #DSA",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XX5EQbzA1lg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XX5EQbzA1lg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XX5EQbzA1lg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/XX5EQbzA1lg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/XX5EQbzA1lg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-THcGjjiBsEv0kT1PqUB6miFEVA",
        "id": "MTUxNzA4MDA1NjEyMTcwODAwNTYxMjAwMDQzOA",
        "snippet": {
          "publishedAt": "2024-02-15T14:00:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Ultimate Guide to Become Data Analyst in 2024 | Best Resources to Learn Data Analytics 🚀",
          "description": "🚀Click on the link to enroll:- https://bit.ly/4aB2gGD\nUse Coupon Code:- ANALYST20 For Extra 20% Off!!\n\n📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nEmbark on your journey to becoming a proficient data analyst with our comprehensive roadmap. In this video, we break down the essential steps and skills required to excel in the field of data analysis. From mastering programming languages like Python and SQL to understanding statistical concepts and data visualization techniques, we cover it all. Whether you're a beginner or looking to advance your career, this roadmap provides clear guidance to help you navigate the complexities of data analysis. Watch now and chart your course toward a rewarding career in data analytics!\n\n🔗 Python DSA Course:  https://www.youtube.com/watch?v=LL4gQ3voPcM&list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n\n#DataAnalyst #DataScience #CollegeWallah #PhysicsWallah #DataAnalytics #DataScientist #DataEngineer #DataEntry #MsExcel #Engineering #BCA",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MOpqKNPPMtg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MOpqKNPPMtg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MOpqKNPPMtg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MOpqKNPPMtg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MOpqKNPPMtg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8yNI4VWQLgZdUxZZxkonE6TL_-4",
        "id": "MTUxNzA3ODMwMzE3MTcwNzgzMDMxNzAwMDE0Nw",
        "snippet": {
          "publishedAt": "2024-02-13T13:18:37+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Vishwas Diwas is Here!! 🤩 World Biggest Educational Festival 🔥 BIGGEST Surprise for All Students",
          "description": "📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nIt's time for Vishwas Diwas, the world's biggest educational festival! Get ready for an exciting surprise that will benefit all students. Don't miss out on this amazing opportunity to learn, grow, and achieve your dreams. Join us for Vishwas Diwas! 🚀\n\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n#BiggestEduactionalFestival #CollegeWallah #PhysicsWallah #EduactionalFestival #WorldBiggestEduactionalFestival #NEET #PW #VishwasDiwas #DSA #Cpp",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YRzO5n5TBJc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YRzO5n5TBJc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YRzO5n5TBJc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YRzO5n5TBJc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YRzO5n5TBJc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "bPUN7UWMjAw7jsemXF2HBhD6iq4",
        "id": "MTUxNzA3NzQ3NTIwMTcwNzc0NzUyMDAwMDI3NQ",
        "snippet": {
          "publishedAt": "2024-02-12T14:18:40+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Get into your dream company easily🤯! #DynamicProgramming #PW #Shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4RvutlD6y4k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4RvutlD6y4k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4RvutlD6y4k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/4RvutlD6y4k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/4RvutlD6y4k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "e9Wd1h1FjmO-OEePBxNQ-HCDIxw",
        "id": "MTUxNzA3NjU4MDIxMTcwNzY1ODAyMTAwMDI1NA",
        "snippet": {
          "publishedAt": "2024-02-11T13:27:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to Get a 9+ CGPA in College | Best Study Tips 🤯 Complete Roadmap 2024 for CSE/Non-CSE Branches",
          "description": "📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nAre you a first-year student wondering how to get a 9+ CGPA? Does CGPA matter? Look no further! This complete roadmap for CSE/Non-CSE branches will guide you with important tips & tricks to succeed in your first year and beyond. Don't miss the strategies for Data Structures and Algorithms (DSA) to ace your exams and assignments. Let's get that dream CGPA/GPA together! \n\n🔗College Roadmaps: https://www.youtube.com/watch?v=1BpM0BKH0PM&list=PLxgZQoSe9cg3JYcO7ecF-cygyCdGLy5V1&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n\n#SemesterExams #Study #CollegeWallah #PhysicsWallah  #College #StudyTips #Score  #CGPA #Exams #OfflineExams #Engineering #DelhiUniversity #IIT #IITBombay #IITDelhi",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/na6mzrcFF4Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/na6mzrcFF4Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/na6mzrcFF4Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/na6mzrcFF4Y/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/na6mzrcFF4Y/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "99d2RnaZyojyHDVAxFWL65r1D5Y",
        "id": "MTUxNzA3NDA1NzYyMTcwNzQwNTc2MjAwMDkyOA",
        "snippet": {
          "publishedAt": "2024-02-08T15:22:42+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to get a Government Job after BTech in 2024? Complete Guide 🔥 Better than a Private Job?",
          "description": "📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nInterested in getting a government job after BTech? In this video, we'll give you a step-by-step guide on how to make it happen by 2024. Perfect for college students looking to secure a career in government and coding!\n\n🔗College Roadmaps: https://www.youtube.com/watch?v=1BpM0BKH0PM&list=PLxgZQoSe9cg3JYcO7ecF-cygyCdGLy5V1&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n\n#GovernmentJobs #SoftwareEngineer #CollegeWallah #PhysicsWallah #GovernmentJobs2024 #GovernmentJobsAfter12th  #ISRO #DRDO #Job",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/EdFoVqC5BjY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/EdFoVqC5BjY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/EdFoVqC5BjY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/EdFoVqC5BjY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/EdFoVqC5BjY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "niMCK7tuaDZNF7SwzxE1yZ_I_To",
        "id": "MTUxNzA3MjI2MTI4MTcwNzIyNjEyODAwMDYwMg",
        "snippet": {
          "publishedAt": "2024-02-06T13:28:48+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Leetcode is useless! 🤔 Best coding platform for beginners | Leetcode vs Codeforces vs GeeksForGeeks",
          "description": "📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\nAre you a beginner looking to improve your coding skills? In this video, we'll compare three popular coding platforms - Leetcode, Codeforces, and GeeksForGeeks, etc.. - to determine the best option. Don't waste your time with useless platforms, watch this video to find the perfect one for you!\n\n🔗C+:+ DSA :https://www.youtube.com/watch?v=bL-o2xBENY0&list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd&pp=gAQBiAQB\n🔗 Java DSA: https://www.youtube.com/watch?v=RJ733wzbNoA&list=PLxgZQoSe9cg00xyG5gzb5BMkOClkch7Gr&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n#Coding #Leetcode #DSA #CollegeWallah #PhysicsWallah #JobHuntTips #Salary #FAANGM #SDE #Engineering #Internship #SDE #CodingNinja #GeeksForGeeks",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YiCmv9KxQPk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YiCmv9KxQPk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YiCmv9KxQPk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YiCmv9KxQPk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YiCmv9KxQPk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9gwhHYRZ-U4nesJWNQQrobXhcr8",
        "id": "MTUxNzA3MDY5NTMwMTcwNzA2OTUzMDAwMDQ5MA",
        "snippet": {
          "publishedAt": "2024-02-04T17:58:50+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Slow Learners Watch This!! 🔥 #PW #Shorts #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/yXN0QC2y_Rc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/yXN0QC2y_Rc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/yXN0QC2y_Rc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/yXN0QC2y_Rc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/yXN0QC2y_Rc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "y4fvTQQR5I5uVp0DJRSmQXgnK9I",
        "id": "MTUxNzA2OTY2OTY1MTcwNjk2Njk2NTAwMDU0OQ",
        "snippet": {
          "publishedAt": "2024-02-03T13:29:25+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Mera Code Phat Gaya 😭  #PW #Shorts #Coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zkovhG0P9C8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zkovhG0P9C8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zkovhG0P9C8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zkovhG0P9C8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zkovhG0P9C8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "z0u2n1TEi9qB56bnMAEiLzUw7Ag",
        "id": "MTUxNzA2OTY2MzcyMTcwNjk2NjM3MjAwMDk5MA",
        "snippet": {
          "publishedAt": "2024-02-03T13:19:32+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Become Job Ready In 2024 🤔 FREE Backend Development Course!!  Beginner To Professional Level 🔥",
          "description": "Exciting news! 🚀 Join us for our FREE Backend Development Course, starting from February 3rd! Whether you're a beginner or aspiring to become a pro, this course is tailored just for you. From laying the foundation to mastering advanced techniques, we'll guide you every step of the way. Don't miss out on this opportunity to level up your skills and unlock new career possibilities. Reserve your spot now! 💻🌟\n\n📌Enroll Now in the Free Backend Development Course: https://bit.ly/3HHt7Du\n\n📕 Batch/Course Links : \n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\n📕Job Assistance Programs:- \n📚 Full Stack Web Development: https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course: https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course: https://bit.ly/3NZ6zBZ\n\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n📚 PW Store: Link\n-------------------------------------------------------\n🔗Web Development Workshop https://www.youtube.com/watch?v=WWmTZ50s-4E&list=PLxgZQoSe9cg15a9KNSHBt0A_nkevQk8mG&pp=gAQBiAQB\n🔗JavaScript Complete Course: https://www.youtube.com/watch?v=LeHdBkdolBg&list=PLxgZQoSe9cg1B3TiBz05FMwfdwCkkpy2c&pp=gAQBiAQB\n-------------------------------------------------------\n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram: http://bit.ly/3v1yVoa\n-------------------------------------------------------\n📌 RECOMMENDED CHANNELS FOR YOU -\n🌐 Physics Wallah - Alakh Pandey: https://www.youtube.com/@PhysicsWallah   \n🌐 Gate Wallah: https://www.youtube.com/@GATEWallahbyPW\n🌐 Jee Wallah: https://www.youtube.com/@PW-JEEWallah\n🌐 PW Skills Tech: https://www.youtube.com/@PWSkillsTech\n-------------------------------------------------------\n📌 PHYSICS WALLAH SOCIAL MEDIA -\n🌐 Telegram: https://t.me/Physics_Wallah_Official_Channel\n🌐 Instagram: https://www.instagram.com/physicswallah\n🌐 Facebook: https://www.facebook.com/physicswallah\n🌐 Twitter: https://www.twitter.com/physics__wallah\n🌐 LinkedIn: https://www.linkedin.com/company/physicswallah\n🌐 Quora: https://pwofficial.quora.com\n-------------------------------------------------------\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n-------------------------------------------------------\n#FreeBackendDevelopmentCourse #BackendDevelopment #CollegeWallah #PhysicsWallah #DataScience #PWSkillsTech #PWSkills #PhysicsWallah #BackendDeveloper #BackendDevelopmentCourse #FreeCourse #TechSkills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/id_HYS88ffs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/id_HYS88ffs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/id_HYS88ffs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/id_HYS88ffs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/id_HYS88ffs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "mew6ng3QjnabhWx-Lyjm6vW3Hwk",
        "id": "MTUxNzA2NTMxNDAzMTcwNjUzMTQwMzAwMDYxNA",
        "snippet": {
          "publishedAt": "2024-01-29T12:30:03+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Hum Ladke Ro Nhi Sakte 😰 #motivation #alakhpandey",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/akqPb-HSiSQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/akqPb-HSiSQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/akqPb-HSiSQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/akqPb-HSiSQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/akqPb-HSiSQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "PDvsYHiG4IC_DhAJH0cfiPwjcfw",
        "id": "MTUxNzA2NDU1MTAwMTcwNjQ1NTEwMDAwMDUyOQ",
        "snippet": {
          "publishedAt": "2024-01-28T15:18:20+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "College Photo Mein Kuch Aur Tha 😂 #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hi5n-jrgG4o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hi5n-jrgG4o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hi5n-jrgG4o/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/hi5n-jrgG4o/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/hi5n-jrgG4o/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9WTI-vnwudQPH1HewoS9xoLN1Cs",
        "id": "MTUxNzA2NDQ4NTU5MTcwNjQ0ODU1OTAwMDc4NA",
        "snippet": {
          "publishedAt": "2024-01-28T13:29:19+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "What is Competitive Programming ? 🤔 Is It Necessary For Placement? #collegewallah #pwskills",
          "description": "Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AfoOQANu1VU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AfoOQANu1VU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AfoOQANu1VU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/AfoOQANu1VU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/AfoOQANu1VU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Nl0fh-c5-RBFWPBjmBRL7KUBuWQ",
        "id": "MTUxNzA2MzY2MjM1MTcwNjM2NjIzNTAwMDI5Nw",
        "snippet": {
          "publishedAt": "2024-01-27T14:37:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Life Should Be Impactful 🚀 #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pTrcWxuyXQE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pTrcWxuyXQE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pTrcWxuyXQE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pTrcWxuyXQE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pTrcWxuyXQE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2rjz7NTOwQUvuqo1smztbaWc0Qw",
        "id": "MTUxNzA2Mjc3NzA3MTcwNjI3NzcwNzAwMDIyOA",
        "snippet": {
          "publishedAt": "2024-01-26T14:01:47+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "General Dibbe Ka Safar 🔥🔥 #collegewallah #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_VqKdeozvGs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_VqKdeozvGs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_VqKdeozvGs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_VqKdeozvGs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_VqKdeozvGs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "TdroCJm9z8MSYVgCtoKbHJzoJcU",
        "id": "MTUxNzA2MjY3OTQ2MTcwNjI2Nzk0NjAwMDA2Nw",
        "snippet": {
          "publishedAt": "2024-01-26T11:19:06+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "A Big GIFT for EVERYONE 🔥 Republic Day Surprise 🇮🇳 #26thJanWithPW #physicswallah",
          "description": "A Big GIFT for EVERYONE 🔥 Republic Day Surprise 🇮🇳 #26thJanWithPW #physicswallah\n📌Use Coupon Code REPUBLIC20 to get extra 20% Off 😱\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/6Yi2-Bzawmc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/6Yi2-Bzawmc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/6Yi2-Bzawmc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/6Yi2-Bzawmc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/6Yi2-Bzawmc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "mfHNKs4rxi8j9LaItQZnxX6nhIo",
        "id": "MTUxNzA2MTkwMDIwMTcwNjE5MDAyMDAwMDYyOQ",
        "snippet": {
          "publishedAt": "2024-01-25T13:40:20+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "India Ko Tumhari Jaroorat Hai 🇮🇳🇮🇳 #motivation #alakhpandey",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sqhMozT-dTE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sqhMozT-dTE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sqhMozT-dTE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sqhMozT-dTE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sqhMozT-dTE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "fY9ywX715Osj6piQSl0C1rYNcuQ",
        "id": "MTUxNzA2MTg5Mzg0MTcwNjE4OTM4NDAwMDM5Ng",
        "snippet": {
          "publishedAt": "2024-01-25T13:29:44+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "What Helped Me To Achieve Lakhs Package ? 🤯 My Journey and Key Learnings, DSA vs Web Development 😱",
          "description": "Discover the key learnings from my journey to achieving a lakhs package and the differences between DSA and web development. This video shares the insights and strategies that helped me succeed in my career and reach my salary goals! Whether you're a beginner or experienced, this video will give you valuable insights to help you achieve success in the tech industry.\n\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\nWhat Helped Me To Achieve Lakhs Package ? 🤯 My Journey and Key Learnings, DSA vs Web Development 😱",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/QmeBpgddkdA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/QmeBpgddkdA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/QmeBpgddkdA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/QmeBpgddkdA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/QmeBpgddkdA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "rVsYMdNVsNYYD2up0tRDjF1JKaA",
        "id": "MTUxNzA2MTAyOTI3MTcwNjEwMjkyNzAwMDUzMw",
        "snippet": {
          "publishedAt": "2024-01-24T13:28:47+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Papa Se Baat Karne Mein Bhi Darr Lagta h 😭 #motivation #alakhpandey",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/CtwJoJzX7U4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/CtwJoJzX7U4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/CtwJoJzX7U4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/CtwJoJzX7U4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/CtwJoJzX7U4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "h-OAlgss_igxdEBGas6x2hvFuBw",
        "id": "MTUxNzA2MDE4NDUzMTcwNjAxODQ1MzAwMDQzOA",
        "snippet": {
          "publishedAt": "2024-01-23T14:00:53+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Kya Tum Bhi kramtikaari Ho 😲 ? #motivation #pw #alakhpandey",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/eNvLoeJMjok/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/eNvLoeJMjok/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/eNvLoeJMjok/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/eNvLoeJMjok/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/eNvLoeJMjok/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "W4lg57CuvR_dywxgYnOzZRJuuT0",
        "id": "MTUxNzA2MDE4MDIyMTcwNjAxODAyMjAwMDQ4Ng",
        "snippet": {
          "publishedAt": "2024-01-23T13:53:42+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Programming Is DEAD in 2024 😱 Future of software engineer 2024  ? #dsa #softwareengineer",
          "description": "In this thought-provoking video, we discuss the future of programming and software engineering in 2024. From the rise of AI and automation to the importance of data structures and algorithms, we'll take a deep dive into what the future holds for programmers. Don't miss out on this important discussion about the ever-evolving tech industry! #programming #softwareengineering \n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\nProgramming Is DEAD in 2024 😱 Future of software engineer 2024  ? #dsa #softwareengineer",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/P1yvsdo_myQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/P1yvsdo_myQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/P1yvsdo_myQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/P1yvsdo_myQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/P1yvsdo_myQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9_kth1HwnmQ9X4ipCB7bEpu3Z9Q",
        "id": "MTUxNzA1OTMxMDExMTcwNTkzMTAxMTAwMDA5MA",
        "snippet": {
          "publishedAt": "2024-01-22T13:43:31+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Pitaji Ko I Love You!! 😰 #emotional #fatherlove #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ts6cBsu26d8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ts6cBsu26d8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ts6cBsu26d8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ts6cBsu26d8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ts6cBsu26d8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7jcD1j5BtbsvsnvbtasqTMHrdmo",
        "id": "MTUxNzA1ODQzODA4MTcwNTg0MzgwODAwMDk2OA",
        "snippet": {
          "publishedAt": "2024-01-21T13:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "QnA Session For Freshers & College Students - DSA Vs Web, How To Start DSA, How To Get Internship? 😥",
          "description": "In this QnA session, we'll answer all your burning questions as a college student or fresher. From the debate between DSA and web development to tips on how to start learning DSA and landing internships, we've got you covered. Don't miss out on this valuable discussion that can help you jumpstart your career!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nQnA Session For Freshers & College Students - DSA Vs Web, How To Start DSA, How To Get Internship? 😥",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/B5k4tP3nuqg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/B5k4tP3nuqg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/B5k4tP3nuqg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/B5k4tP3nuqg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/B5k4tP3nuqg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4ZJ9hoYfi9gFWzZV3eM8UAIBeRg",
        "id": "MTUxNzA1NzU1MTgyMTcwNTc1NTE4MjAwMDI3OQ",
        "snippet": {
          "publishedAt": "2024-01-20T12:53:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Saari English Bhool Gaya tha 😭 #pw #motivation #success",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MdmfFqmwab8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MdmfFqmwab8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MdmfFqmwab8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MdmfFqmwab8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MdmfFqmwab8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gUMxJm0kpCWr1bBeEgjZsOG42vY",
        "id": "MTUxNzA1NjcyOTMzMTcwNTY3MjkzMzAwMDIwNA",
        "snippet": {
          "publishedAt": "2024-01-19T14:02:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Alakh Sir Biggest Achievement 🥹 #motivation #pw",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hlo4UoYp7nY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hlo4UoYp7nY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hlo4UoYp7nY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/hlo4UoYp7nY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/hlo4UoYp7nY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AvnGqRVnsOJ8XG1Xcpv3EonWK7Q",
        "id": "MTUxNzA1NTg0NTgyMTcwNTU4NDU4MjAwMDMwMQ",
        "snippet": {
          "publishedAt": "2024-01-18T13:29:42+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Don’t Tell Anyone About This Website 😨 #pwskills #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GwiYbcuMYGY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GwiYbcuMYGY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GwiYbcuMYGY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GwiYbcuMYGY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GwiYbcuMYGY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "20wPRdqF4b6pHH3H8Sv1Z3Fzowg",
        "id": "MTUxNzA1NTA0NDc4MTcwNTUwNDQ3ODAwMDU5Ng",
        "snippet": {
          "publishedAt": "2024-01-17T15:14:38+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Launching Decode Batch!!! The Ultimate Coding Course!! 🤯  🚀ft. Raghav Garg #dsa  #collegewallah #pw",
          "description": "Get ready for the next coding revolution with Raghav Garg! In this video, Stay ahead of the game and be prepared for the future of coding! 🤯🚀 Stay Tuned!!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xHag4fJvvyc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xHag4fJvvyc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xHag4fJvvyc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xHag4fJvvyc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xHag4fJvvyc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ohk4BgStfoOpJHf616EnaqrlGEo",
        "id": "MTUxNzA1NDEwMjc3MTcwNTQxMDI3NzAwMDI2OQ",
        "snippet": {
          "publishedAt": "2024-01-16T13:04:37+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Nhi Milegi Naukri DSA Se 😵 #collegewallah #pw #pwskills",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ch_CNNzfj3g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ch_CNNzfj3g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ch_CNNzfj3g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ch_CNNzfj3g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ch_CNNzfj3g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "E-YkILSMMslhEEAO6GGm-BiNejs",
        "id": "MTUxNzA1MzMwNjc3MTcwNTMzMDY3NzAwMDI4Ng",
        "snippet": {
          "publishedAt": "2024-01-15T14:57:57+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Shocking Truth Of FAANG Companies 😨 #collegewallah #pwskills",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sv0SrDj6NzY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sv0SrDj6NzY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sv0SrDj6NzY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sv0SrDj6NzY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sv0SrDj6NzY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2jZY5P94c5Va9cqrMj8xNFLZBXs",
        "id": "MTUxNzA1MzI1MzM0MTcwNTMyNTMzNDAwMDI0MA",
        "snippet": {
          "publishedAt": "2024-01-15T13:28:54+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Ultimate Coding Course!! 🤯 On The Way 🚀ft. Raghav Garg #dsa #collegewallah",
          "description": "Get ready for the next coding revolution with Raghav Garg! In this video, Stay ahead of the game and be prepared for the future of coding! 🤯🚀 Stay Tuned!!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rfSMr81PGGE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rfSMr81PGGE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rfSMr81PGGE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rfSMr81PGGE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rfSMr81PGGE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "_HntdRZ5ohB8vTZ7OY3XbcXO-T8",
        "id": "MTUxNzA1MjM5Nzk0MTcwNTIzOTc5NDAwMDI5OQ",
        "snippet": {
          "publishedAt": "2024-01-14T13:43:14+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Earn 2-3 Lakhs/Mo As A Freelancer Web Developer? 💰🤑 # col #collegewallah #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JDw0885ezkQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JDw0885ezkQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JDw0885ezkQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/JDw0885ezkQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/JDw0885ezkQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BvOjo_GaV1r5p2nPTZJbXaotZcM",
        "id": "MTUxNzA1MjM5MDE1MTcwNTIzOTAxNTAwMDQ4Mw",
        "snippet": {
          "publishedAt": "2024-01-14T13:30:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Reality Of Internship 😱 From 0 To 20LPA Job 🚀  His Secrets to Success ft. Raghav Garg #dsa #webdev",
          "description": "Get an inside look into the reality of internships with Raghav Garg, His Friend went from 0 to earning 20LPA through his job. Discover his secrets to success in this informative video with College \nWallah. Don't miss out on this valuable advice for internship and job success!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nReality Of Internship 😱 From 0 To 20LPA Job 🚀  His Secrets to Success ft. Raghav Garg #dsa #webdev",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bg2DmqMR3X4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bg2DmqMR3X4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bg2DmqMR3X4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/bg2DmqMR3X4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/bg2DmqMR3X4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "jDUpREQe81fmKSDzRjsDzWnJ41c",
        "id": "MTUxNzA1MTQ5ODMzMTcwNTE0OTgzMzAwMDMyMA",
        "snippet": {
          "publishedAt": "2024-01-13T12:43:53+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Don’t Do This After 12th ❌❌ #college #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zzMwnl7ZoAk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zzMwnl7ZoAk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zzMwnl7ZoAk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zzMwnl7ZoAk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zzMwnl7ZoAk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DT2iGgTZQs3aF-R5QRkUM1ghJHs",
        "id": "MTUxNzA1MDY2MTYzMTcwNTA2NjE2MzAwMDQyMg",
        "snippet": {
          "publishedAt": "2024-01-12T13:29:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "JOB Can Make You Poor 💸 ? Freelancing Vs Job Which Is Better ?? #collegewallah #pwskills",
          "description": "Discover the pros and cons of freelancing vs traditional jobs in this video! As a college student, choosing the right career path can be overwhelming. Learn about the earning potential and lifestyle differences between freelancing and traditional jobs, and decide which one is better for you. Don't let your job make you poor - watch this video to make an informed decision! #collegewallah #pwskills \n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nJOB Can Make You Poor 💸 ? Freelancing Vs Job Which Is Better ?? #collegewallah #pwskills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Sk9saLwkjn0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Sk9saLwkjn0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Sk9saLwkjn0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Sk9saLwkjn0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Sk9saLwkjn0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "LTrFHfUJVSnmDt28PayFWFQ3ScA",
        "id": "MTUxNzA1MDYzNDgyMTcwNTA2MzQ4MjAwMDI0Nw",
        "snippet": {
          "publishedAt": "2024-01-12T12:44:42+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "99% People Fails To Solve This Puzzle!  😨 Can You Solve This? #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-SvfboGg2rU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-SvfboGg2rU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-SvfboGg2rU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-SvfboGg2rU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-SvfboGg2rU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "isT75PgOq75bhR_DkbdTPWHRLKw",
        "id": "MTUxNzA0OTc4MTMwMTcwNDk3ODEzMDAwMDM4Mg",
        "snippet": {
          "publishedAt": "2024-01-11T13:02:10+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Mujhse Coding Nhi Hogi 😰 ? #pwskills #motivation",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/6Vh_oOMY_vQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/6Vh_oOMY_vQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/6Vh_oOMY_vQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/6Vh_oOMY_vQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/6Vh_oOMY_vQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AAP0zVGxRZvw_oGHR-1CqdYT-GA",
        "id": "MTUxNzA0ODkzNDA5MTcwNDg5MzQwOTAwMDA5Mw",
        "snippet": {
          "publishedAt": "2024-01-10T13:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Stop Watching Coding Tutorials Now!! 😱 How To Get Out Of Tutorial Hell? #dsa #development",
          "description": "Ready to get out of tutorial hell and start coding on your own? In this video, we'll teach you how to break out of constantly watching coding tutorials and start building your own projects using DSA techniques. Take your development skills to the next level and achieve your coding goals today!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nStop Watching Coding Tutorials Now!! 😱 How To Get Out Of Tutorial Hell? #dsa #development",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PLGhHVpRozM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PLGhHVpRozM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PLGhHVpRozM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/PLGhHVpRozM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/PLGhHVpRozM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2BElhMzmgqDbtmuwWz7j9HF2_NA",
        "id": "MTUxNzA0ODkxNzk2MTcwNDg5MTc5NjAwMDA0Mw",
        "snippet": {
          "publishedAt": "2024-01-10T13:03:16+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "From 0 To 6LPA Package As A Data Scientist 🔥🔥 Motivational Journey Of A Girl Data Scientist #pw",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YYmXit5Ryxo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YYmXit5Ryxo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YYmXit5Ryxo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YYmXit5Ryxo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YYmXit5Ryxo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1aJfgmZfhXc3Zdsn-VhcAQjqPo4",
        "id": "MTUxNzA0NzIyNTg3MTcwNDcyMjU4NzAwMDU3MA",
        "snippet": {
          "publishedAt": "2024-01-08T14:03:07+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Women Can Do Anything!! 🔥 Girl Data Scientist 👩🏼\u200d🔬 #collegewallah #motivation #technology",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/TRTdW8lpuD0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/TRTdW8lpuD0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/TRTdW8lpuD0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/TRTdW8lpuD0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/TRTdW8lpuD0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0gYgfS4Y1dRcJFdUYfMnFYaTURo",
        "id": "MTUxNzA0NjM3NjkxMTcwNDYzNzY5MTAwMDIzOA",
        "snippet": {
          "publishedAt": "2024-01-07T14:28:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Guidance By Mentors Helped Me So Much 🥹#collegewallah #pwskills",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/CY8i00lhCc0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/CY8i00lhCc0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/CY8i00lhCc0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/CY8i00lhCc0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/CY8i00lhCc0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "k0d_jyJriNbtgTLme7Nm5GNTKFU",
        "id": "MTUxNzA0NjM0MjYzMTcwNDYzNDI2MzAwMDAxOQ",
        "snippet": {
          "publishedAt": "2024-01-07T13:31:03+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Start Coding In 2024 ? The Ultimate Guide For Beginners 🚀 Placement & Internship, C++ vs Java",
          "description": "In this video, we are going to show you how to start coding in 2024. We are going to cover everything from the basics of coding to secure placement and internship opportunities.\n\nIf you are looking to start coding in 2024, then this is the guide for you! We are going to show you everything you need to get started, from the basics of coding to securing  placement and internship opportunities. By the end of this video, you will have everything you need to get started in the coding world!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assistance Programs :- \n📚 Full Stack Web Development : https://bit.ly/3RRH8o0\n📚 Master Generative AI: Data Science Course : https://bit.ly/3RRHg6Y\n📚 Mastering Data Analytics Course : https://bit.ly/3NZ6zBZ\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nHow To Start Coding In 2024 ? The Ultimate Guide For Beginners 🚀 Secure Placement & Internship 💸 #pw",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Nv2eCHLwYr0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Nv2eCHLwYr0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Nv2eCHLwYr0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Nv2eCHLwYr0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Nv2eCHLwYr0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "VrAc6GMs_YU1nQGhw7ejIvRJigQ",
        "id": "MTUxNzA0NTQ4MDgxMTcwNDU0ODA4MTAwMDA0Ng",
        "snippet": {
          "publishedAt": "2024-01-06T13:34:41+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Zero से Hero तक का सफर!! 🚀 #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Hdgh5tJBv3M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Hdgh5tJBv3M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Hdgh5tJBv3M/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Hdgh5tJBv3M/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Hdgh5tJBv3M/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "NKftmIrP9pXLEO5JW6uTUbeYxOM",
        "id": "MTUxNzA0NDUyNTA0MTcwNDQ1MjUwNDAwMDc4OA",
        "snippet": {
          "publishedAt": "2024-01-05T11:01:44+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "PW Offers The Most Affordable Batch Ever!! #pw #pwskills #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e3O4HWz01TY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e3O4HWz01TY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e3O4HWz01TY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/e3O4HWz01TY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/e3O4HWz01TY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "jiUih1fJ6D9rAJw-0-RSMzsLLsQ",
        "id": "MTUxNzA0Mzc4MzgxMTcwNDM3ODM4MTAwMDI3OA",
        "snippet": {
          "publishedAt": "2024-01-04T14:26:21+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "From Mechanical Engineer to Data Analyst🤯 The Unbelievable Transformation! #pwskills #collegewallah",
          "description": "In this video, we'll share with you the story of how he went from a mechanical engineer to a data analyst. This is an incredible transformation that he was able to achieve through hard work and dedication.\n\nI hope you'll enjoy his story and find some valuable tips that can help you make the same kind of transformation. we'll discuss everything from the skills and knowledge he acquired to the strategies he used to get where he's today. we believe that by sharing his story, we can help you take your next step in your career!\n\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nFrom Mechanical Engineer to Data Analyst 🤯 The Unbelievable Transformation! #pwskills #collegewallah",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/CyFk6NkzQzA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/CyFk6NkzQzA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/CyFk6NkzQzA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/CyFk6NkzQzA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/CyFk6NkzQzA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "xxKVYADVc9ERfGgR-HP5YfQq00Q",
        "id": "MTUxNzA0MzY0OTczMTcwNDM2NDk3MzAwMDA1Mw",
        "snippet": {
          "publishedAt": "2024-01-04T10:42:53+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "PW Is Always With You  🤝 Full Stack Web Development Batch #pwskills #shorts",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VjfWwdfU990/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VjfWwdfU990/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VjfWwdfU990/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VjfWwdfU990/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VjfWwdfU990/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "S8oHiZ331xBWhWhtTAJCio-mks0",
        "id": "MTUxNzA0MjY0MzUwMTcwNDI2NDM1MDAwMDk2Mw",
        "snippet": {
          "publishedAt": "2024-01-03T06:45:50+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "If you can dream it, you can do it. 🔥 #motivation #pwskills",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AWpMSwrRqik/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AWpMSwrRqik/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AWpMSwrRqik/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/AWpMSwrRqik/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/AWpMSwrRqik/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qC-HW-UMXguUqEevapQ9yvEoOUc",
        "id": "MTUxNzA0MjAzMDMxMTcwNDIwMzAzMTAwMDA2NA",
        "snippet": {
          "publishedAt": "2024-01-02T13:43:51+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "We are Hiring!! 🤯 Get A Chance To Work With Us And Get Paid 🤑 #pw #pwskills",
          "description": "Hey job seekers! Looking for a chance to work with a awesome company? We're hiring!\n\nIn this video, we're sharing information about our company and the exciting opportunities that are available to you. If you're interested in joining our team, be sure to check out our website and apply today!\n\n📌Fill Out This Form: :https://docs.google.com/forms/d/1euiB-pKqnAhR1ihn6TLSZ9krzViTZSG2QPTjBcWXK4U/edit\n\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n-------------------------------------------------------\n\nWe are Hiring!! 🤯 Get A Chance To Work With Us And Get Paid 🤑 #pw #pwskills",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2dfoisbu-1w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2dfoisbu-1w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2dfoisbu-1w/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2dfoisbu-1w/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2dfoisbu-1w/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "iKlFpAttYU2LfrrRIqPeSPHdQUA",
        "id": "MTUxNzA0MTkyOTc1MTcwNDE5Mjk3NTAwMDE4NQ",
        "snippet": {
          "publishedAt": "2024-01-02T10:56:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Inspiring Journey Of A Data Scientist #collegewallah #coding #facts",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/G6dtHcerEcI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/G6dtHcerEcI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/G6dtHcerEcI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/G6dtHcerEcI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/G6dtHcerEcI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "asW1ytres2bOBaBw6Mzm0Ublz8Q",
        "id": "MTUxNzA0MTc3MTA3MTcwNDE3NzEwNzAwMDM4Mg",
        "snippet": {
          "publishedAt": "2024-01-02T06:31:47+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "From Non-CS Background To Full Stack Data Scientist 🚀 #collegewallah #pwskills",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2D_2VulZMhI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2D_2VulZMhI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2D_2VulZMhI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2D_2VulZMhI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2D_2VulZMhI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7uaBj_txptjLV6r9MO2lZ3kFp0c",
        "id": "MTUxNzA0MTA1MDIwMTcwNDEwNTAyMDAwMDAxNA",
        "snippet": {
          "publishedAt": "2024-01-01T10:30:20+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Amazing Journey Of A Full Stack Web Developer 🤯🫨 #collegewallah #pwskills #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/p3hAkgB3PCc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/p3hAkgB3PCc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/p3hAkgB3PCc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/p3hAkgB3PCc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/p3hAkgB3PCc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "_GXtAKIH9-6xVRX2-teNFfZU9YA",
        "id": "MTUxNzA0MDg5NzU0MTcwNDA4OTc1NDAwMDg0Mw",
        "snippet": {
          "publishedAt": "2024-01-01T06:15:54+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "All The Best For Your Career In 2024 🚀 #pwskills #pw",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xED9Oq5Dw18/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xED9Oq5Dw18/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xED9Oq5Dw18/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xED9Oq5Dw18/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xED9Oq5Dw18/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "OmUq6MOYx_Ivk0UA8Md-EXZdq3A",
        "id": "MTUxNzA0MDI5NTIyMTcwNDAyOTUyMjAwMDAxMA",
        "snippet": {
          "publishedAt": "2023-12-31T13:32:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "क्यू PW है Best ? 🥹 Journey Of A Full Stack Web Developer! #shorts",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ydaLRrjHcK4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ydaLRrjHcK4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ydaLRrjHcK4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ydaLRrjHcK4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ydaLRrjHcK4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gfMotyQ67egmP2x9_9UejvBf6bg",
        "id": "MTUxNzA0MDI5MTY4MTcwNDAyOTE2ODAwMDU1Nw",
        "snippet": {
          "publishedAt": "2023-12-31T13:26:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Beat Decline In Placements & Get A JOB!! 🚀 How To Beat Recession In 2024 🤯 #layoffs #pw",
          "description": "In this video, we're going to show you how to beat the recession and get a job!\n\nNo matter how bad the economy is, it's never too late to get a job. In this video, we're going to teach you how to beat the decline in placements and get a job in the current job market. We'll share tips on how to create a portfolio, how to network and more. If you're looking for a way to get out of the recession, then this video is for you!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \n\nHow To Beat Decline In Placements & Get A JOB!! 🚀 How To Beat Recession In 2024 🤯 #layoffs #pw",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qVQnglupyYw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qVQnglupyYw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qVQnglupyYw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qVQnglupyYw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qVQnglupyYw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "a__qFkxGjjKfnEUEJxua1EVxhkE",
        "id": "MTUxNzA0MDE5OTMxMTcwNDAxOTkzMTAwMDI1MA",
        "snippet": {
          "publishedAt": "2023-12-31T10:52:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Best Full Stack Web Development Batch! 🚀 #collegewallah #pwskills",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sbCqFaxqsgo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sbCqFaxqsgo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sbCqFaxqsgo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sbCqFaxqsgo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sbCqFaxqsgo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5au9OAOtM42DX3M07rPfg2BOA4k",
        "id": "MTUxNzA0MDAzODA2MTcwNDAwMzgwNjAwMDM1MQ",
        "snippet": {
          "publishedAt": "2023-12-31T06:23:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Doubts Kaise Clear Hote Hai 🚀 #coding #pw",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/RGR6l7qOjic/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/RGR6l7qOjic/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/RGR6l7qOjic/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/RGR6l7qOjic/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/RGR6l7qOjic/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "myzW0LQLpXjFjcbLwciSBLEK18k",
        "id": "MTUxNzAzOTQzMDEyMTcwMzk0MzAxMjAwMDk3OA",
        "snippet": {
          "publishedAt": "2023-12-30T13:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Ultimate Experience of PW Web Development Batch 💪 #shorts #pw",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HbUZ7w3bbuE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HbUZ7w3bbuE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HbUZ7w3bbuE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/HbUZ7w3bbuE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/HbUZ7w3bbuE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "UvkuscVPgHYxhJ7MB41dtAGlqWk",
        "id": "MTUxNzAzOTMyMjEwMTcwMzkzMjIxMDAwMDUyNw",
        "snippet": {
          "publishedAt": "2023-12-30T10:30:10+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Why PW's Full Stack Web Development Course Is Best #coding #pw #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZpWSbnWiN94/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZpWSbnWiN94/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZpWSbnWiN94/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZpWSbnWiN94/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZpWSbnWiN94/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-v_22dpUmCBakKvrSFzhzO77cqk",
        "id": "MTUxNzAzOTE3NTIxMTcwMzkxNzUyMTAwMDMxNA",
        "snippet": {
          "publishedAt": "2023-12-30T06:25:21+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Journey From 0 To Full Stack Web Developer 💪 #collegewallah #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dZ2CnfJ9Nbc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dZ2CnfJ9Nbc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dZ2CnfJ9Nbc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/dZ2CnfJ9Nbc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/dZ2CnfJ9Nbc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "bvGSX-LUee-US4e0drlaxsUYvUo",
        "id": "MTUxNzAzODU4NDM2MTcwMzg1ODQzNjAwMDk3Mg",
        "snippet": {
          "publishedAt": "2023-12-29T14:00:36+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Ultimate DSA Roadmap 2024 🚀 Complete Step By Step Roadmap To Crack Placements & Internships #dsa",
          "description": "In this video, we're going to be explaining the Ultimate DSA Roadmap 2024. This roadmap is a complete step by step guide on how to crack placements and internships.\n\nThis roadmap is a must-have for any DSA student looking to achieve success. By the end of this video, you'll have everything you need to success in the DSA!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah...\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \nUltimate DSA Roadmap 2024 🚀 Complete Step By Step Roadmap To Crack Placements & Internships #dsa  \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fdMxpD60v24/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fdMxpD60v24/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fdMxpD60v24/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/fdMxpD60v24/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/fdMxpD60v24/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "amLo6bvTfICi2VYAcPtaGIAnbGk",
        "id": "MTUxNzAzODU3MDg5MTcwMzg1NzA4OTAwMDIxNg",
        "snippet": {
          "publishedAt": "2023-12-29T13:38:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Most Powerful Batch Ever 💪 The Sigma Batch Experience #pwskills",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7K_ORLSNMtY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7K_ORLSNMtY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7K_ORLSNMtY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7K_ORLSNMtY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7K_ORLSNMtY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QX4Nmkl4nyGWe36_HnxdqI0qVOY",
        "id": "MTUxNzAzODQ1Nzk4MTcwMzg0NTc5ODAwMDg2NQ",
        "snippet": {
          "publishedAt": "2023-12-29T10:29:58+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The secret to becoming a full stack developer: Guidance from PW's teachers",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/O_vS4Tfzy-k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/O_vS4Tfzy-k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/O_vS4Tfzy-k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/O_vS4Tfzy-k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/O_vS4Tfzy-k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "_DQ2drj1XHbSnrepgWZHgGKZ26o",
        "id": "MTUxNzAzODMxNDAxMTcwMzgzMTQwMTAwMDM4Mg",
        "snippet": {
          "publishedAt": "2023-12-29T06:30:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "PW hai Toh मुमकिन hai !! 🚀 From 0 To Full Stack Developer  #pw #pwskills",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7Vtw0n0Qgeg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7Vtw0n0Qgeg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7Vtw0n0Qgeg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7Vtw0n0Qgeg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7Vtw0n0Qgeg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ePdsbN5_Wo7ZOVP4T3kOI4EjcSU",
        "id": "MTUxNzAzNzcwMjEzMTcwMzc3MDIxMzAwMDU3NA",
        "snippet": {
          "publishedAt": "2023-12-28T13:30:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Level Up as a Web Developer with These Must-Have Practical Skills  #pw #pwskills",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/d5HHFSEPkWU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/d5HHFSEPkWU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/d5HHFSEPkWU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/d5HHFSEPkWU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/d5HHFSEPkWU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "hywGgfNi0brrtZOxT6Fg50x-XjA",
        "id": "MTUxNzAzNjg0NzQ4MTcwMzY4NDc0ODAwMDcwMA",
        "snippet": {
          "publishedAt": "2023-12-27T13:45:48+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Is Leetcode Important To Get A Job/Internship ? 🤔 Do This To Get Hired Fast!! 🚀 #coding #pw",
          "description": "In this video, we're going to discuss whether or not Leetcode is important to get a job in the coding industry. We'll also give you a secret tip that will help you get hired fast!\n\nLeetcode is often seen as a necessity for those looking to get a job in the coding industry. But is Leetcode actually important? In this video, we're going to discuss whether or not Leetcode is really necessary to getting hired in the coding world. We'll also give you a secret tip that will help you get hired faster! So what are you waiting for? Watch the video to find out!\n\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \nIs Leetcode Important To Get A Job/Internship ? 🤔 Do This To Get Hired Fast!! 🚀 #coding #pw\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Bw3gUgIuwUk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Bw3gUgIuwUk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Bw3gUgIuwUk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Bw3gUgIuwUk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Bw3gUgIuwUk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "cW3O26sZMFT157F3Zzplg2EyFO8",
        "id": "MTUxNzAzNTEwMTgzMTcwMzUxMDE4MzAwMDE4Mw",
        "snippet": {
          "publishedAt": "2023-12-25T13:16:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Destroy Scammers With These Settings 🔥🤫 #facts #factshorts #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ss4OokJzqk0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ss4OokJzqk0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ss4OokJzqk0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ss4OokJzqk0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ss4OokJzqk0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-miLmvzzrxpgay3NbgkpshuQllY",
        "id": "MTUxNzAzNDI0NTUzMTcwMzQyNDU1MzAwMDg0Mw",
        "snippet": {
          "publishedAt": "2023-12-24T13:29:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Learn These 5 Programming Languages in 2024 and Get Ahead Of Everyone!! #collegewallah #coding",
          "description": "In this video, I'm teaching you 5 programming languages that you will be able to use in 2024. These languages will help you stay ahead of the curve and competitive in the job market.\n\nIf you're interested in learning a new programming language in the next few years, then you need to watch this video! These languages are trending and will be in high demand in 2024. By learning these languages now, you'll be able to get ahead of the curve and outperform your competition!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \nLearn These 5 Programming Languages in 2024 and Get Ahead Of Everyone!! #collegewallah #coding \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/47GEIJ3eQ_o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/47GEIJ3eQ_o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/47GEIJ3eQ_o/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/47GEIJ3eQ_o/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/47GEIJ3eQ_o/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1rEhzgo8vo1n6YpHSZuG9pz8lx8",
        "id": "MTUxNzAzMTY1NDE1MTcwMzE2NTQxNTAwMDQ2Mw",
        "snippet": {
          "publishedAt": "2023-12-21T13:30:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to Crack Aptitude Test For Campus Placements in 2024 🔥 Best Strategy And Complete Roadmap #pw",
          "description": "Are you looking to crack the aptitude test for campus placements in 2024? If so, you're in the right place! In this video, we'll share with you the best strategy for cracking the aptitude test and navigating through the process of applying for campus placements.\n\nBy following our advice, you'll be able to crack the aptitude test for campus placements in no time! We'll provide you with a complete roadmap and strategy for success, so you can hit your goals and land your dream job! Thanks for watching!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \n\nHow to Crack Aptitude Test For Campus Placements in 2024 🔥 Best Strategy And Complete Roadmap #pw \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fkDsSAQQ6Qk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fkDsSAQQ6Qk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fkDsSAQQ6Qk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/fkDsSAQQ6Qk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/fkDsSAQQ6Qk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ysUGs35z82J5UI5FvHk2RbC_k64",
        "id": "MTUxNzAzMDc4NTUwMTcwMzA3ODU1MDAwMDA3Nw",
        "snippet": {
          "publishedAt": "2023-12-20T13:22:30+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Make Your Laptop & PC Faster By This Trick 📈 #tricks #technology",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LBG0mB7p-9U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LBG0mB7p-9U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LBG0mB7p-9U/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LBG0mB7p-9U/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LBG0mB7p-9U/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "768xkNljJHiDmemvZ9BbiVbfnMY",
        "id": "MTUxNzAyOTkyNjIyMTcwMjk5MjYyMjAwMDM0Mg",
        "snippet": {
          "publishedAt": "2023-12-19T13:30:22+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Don't Learn Java Script!! 😱 Is Java Script Dying ?? #webdevelopment #coding",
          "description": "In this video, I'm talking about the future of Java Script and whether it's dying. I'm also answering some questions about web development and coding in general.\n\nJavaScript is one of the most popular programming languages in the world, but is it dying? I'm not sure... but I want to know what you think! Is Java Script dying and if so, why? Let me know in the comments below!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \n\nDon't Learn Java Script!! 😱  Is Java Script Dying ?? #webdevelopment #coding \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/t18ipKfAjAw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/t18ipKfAjAw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/t18ipKfAjAw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/t18ipKfAjAw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/t18ipKfAjAw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8t-XrsrezNs1TeR6wDfadbh_T04",
        "id": "MTUxNzAyOTAyNjMzMTcwMjkwMjYzMzAwMDM0MA",
        "snippet": {
          "publishedAt": "2023-12-18T12:30:33+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Proven Habits of Successful Coders 🚀 You Should Try!! #collegewallah #coding #shorts",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pkT6zjSY-Kc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pkT6zjSY-Kc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pkT6zjSY-Kc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pkT6zjSY-Kc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pkT6zjSY-Kc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "zhLCD6gia4SIHDaI4fXgXx89N-U",
        "id": "MTUxNzAyODE5ODA2MTcwMjgxOTgwNjAwMDg5Mw",
        "snippet": {
          "publishedAt": "2023-12-17T13:30:06+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "PW Skills Coding Contest 🚀Get Hired at PW and Win Exciting Prizes 🏆 #pwskills",
          "description": "Calling all college coding enthusiasts! As we wrap up 2023, PW Skills invites you to a grand coding challenge that sets the stage for an incredible 2024. Get ready to test your skills, win amazing prizes, and open doors to fantastic opportunities!\n\nTo Register Please Click the Link 👇\n👉https://bit.ly/46WwnVD\n\n🏆 Why You Should Compete:\nRank 1: ₹21,000\nRank 2: ₹15,000\nRank 3: ₹5,000\nTop 20 Final Year Contestants: Interview opportunities at PW for SDE1 roles.\nTop 50 Third Year Students: Chance to interview at PW for paid internships.\nTop 100 First/Second Year Students: Access to the CampusEdge program with a substantial scholarship.\nTop 1000 Participants: Become PWClub members for exclusive placement preparation and support.\n💸 Registration Fee: Only ₹11 for an auspicious start to your journey!\n\n📅 Key Dates:\nExam Date: 23rd December\nResult Date: 28th December\n🔗 Ready to Dive In?\nAll the details, including how to register, are on our landing page : https://bit.ly/46WwnVD \n\n📣 Spread the Word!\nShare this video with your college friends and classmates.\nEncourage them to join in and amplify the challenge.\nLet's create a buzz in the coding community together!\n🌐 This Is Your Moment:\nWhether you're a coding pro or just starting, this contest is your platform to shine. Showcase your skills, win big, and potentially kickstart your dream career in tech with PW Skills.\n------------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \nPW Skills Coding Contest 🚀Get Hired at PW and Win Exciting Prizes 🏆 #pwskills \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/L2NM1Oblm5w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/L2NM1Oblm5w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/L2NM1Oblm5w/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/L2NM1Oblm5w/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/L2NM1Oblm5w/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4O9LHmxRPHFfFqWK8oDu778mRW8",
        "id": "MTUxNzAyNTYxMTAzMTcwMjU2MTEwMzAwMDEzMw",
        "snippet": {
          "publishedAt": "2023-12-14T13:38:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "System Design Complete Roadmap For Beginners 🚀 How To Start Learning System Design #collegewallah",
          "description": "In this video, we'll discuss the System Design Complete roadmap. This roadmap will help you create, design, and engineer a successful software system.\n\nIf you're looking for a comprehensive guide to system design, then look no further! This video will teach you everything you need to know to create a successful software system. By the end of this video, you'll have a complete roadmap for designing and engineering a successful software system!\n\nClick on the link and register yourself for System Design workshop by Vishwa Sir. Limited seats – Enroll now !!\n🌐 Join Live Workshop Now : https://bit.ly/47PCMDp\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : http://bit.ly/3v1yVoa\n------------------------------------------------------- \nSystem Design Complete Roadmap For Beginners 🚀 How To Start Learning System Design #collegewallah \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Bm087RZDIBY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Bm087RZDIBY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Bm087RZDIBY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Bm087RZDIBY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Bm087RZDIBY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "tPTtxp3CuPH8RPDvo0lQrAX04D8",
        "id": "MTUxNzAyNDc0MTgxMTcwMjQ3NDE4MTAwMDQwNA",
        "snippet": {
          "publishedAt": "2023-12-13T13:29:41+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How Tinder Matchmaking Works 😍 | Dissecting Dating Apps 🔪 System Design Lecture #collegewallah",
          "description": "The engineering behind Tinder's matchmaking involves a combination of user profiles, location-based matching, machine learning algorithms, user engagement strategies, and a scalable and secure infrastructure. The specifics of the algorithm and system design, however, are proprietary and considered part of Tinder's intellectual property.\n\nElevate your career with our intensive System Design workshop. In just 10 days, master the art of crafting scalable, efficient systems crucial for top tech giants. To understand these concept behind any application, click on the link and register yourself for System Design workshop by Vishwa Sir. Limited seats – Enroll now and unlock your potential in the tech industry! :  https://bit.ly/47PCMDp\n\nTimestamps:-\n00:31 - Today’s agenda\n01:07 - Let’s start\n03:20 - System Design\n08:30 - Dating Apps Algorithm\n13:35 - App Requirements\n19:15 - Elastic Search\n21:03 - Scale of Tinder\n24:32 - Geographical Positioning\n34:20 - Register/Login\n40:05 - How recommendation works?\n42:56 - Match Making Service\n49:41 - Closing Note\n\n🌐 Click Here To enroll:-\n\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : http://bit.ly/3v1yVoa\n ------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nHow Tinder Matchmaking Works 😍 | Dissecting Dating Apps 🔪 #systemdesign #collegewallah \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MK3YOnEHxNg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MK3YOnEHxNg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MK3YOnEHxNg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MK3YOnEHxNg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MK3YOnEHxNg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "RnvNWjS9X37QFZknCIEnOkwmc7M",
        "id": "MTUxNzAyMzAxODM5MTcwMjMwMTgzOTAwMDM1Ng",
        "snippet": {
          "publishedAt": "2023-12-11T13:37:19+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "DSA Aur Moye Moye 🫣😂 #collegewallah #funnyvideo",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/acdLftXm40g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/acdLftXm40g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/acdLftXm40g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/acdLftXm40g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/acdLftXm40g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "HYNZxhpvl7D-cW5P9Oxou2TUwGQ",
        "id": "MTUxNzAyMDQ4OTk1MTcwMjA0ODk5NTAwMDc3NA",
        "snippet": {
          "publishedAt": "2023-12-08T15:23:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Launching Decode Batches!!! The Biggest Surprise Reveal!! 🎁 🧐| #collegewallah #pw",
          "description": "🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2ifunfdQ3hY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2ifunfdQ3hY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2ifunfdQ3hY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2ifunfdQ3hY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2ifunfdQ3hY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "2uCCd-P_g-jYzdqRend0XDb0-UE",
        "id": "MTUxNzAxNzg0NDk0MTcwMTc4NDQ5NDAwMDc3OA",
        "snippet": {
          "publishedAt": "2023-12-05T13:54:54+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Biggest Surprise Revealed!! 🎁😍 आज से पहले ऐसा नहीं देखा होगा🧐|",
          "description": "we're going to reveal the biggest surprise of the year! Don't miss out on this secret!\nJoin Us Live On 8th December @7:00 PM :- https://www.youtube.com/watch?v=2ifunfdQ3hY\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LVQ2gvMx9jY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LVQ2gvMx9jY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LVQ2gvMx9jY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LVQ2gvMx9jY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LVQ2gvMx9jY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9YptXT2PIFBiM1Lnu_EARcucpY8",
        "id": "MTUxNzAxNjk2NjAzMTcwMTY5NjYwMzAwMDYxOQ",
        "snippet": {
          "publishedAt": "2023-12-04T13:30:03+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "You should try these tricks to increase your productivity!!💪 #collegewallah #productivity",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7GQ4TtjdCzA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7GQ4TtjdCzA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7GQ4TtjdCzA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7GQ4TtjdCzA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7GQ4TtjdCzA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BexzSGZJNOlX7OSqgMT9fJdXezw",
        "id": "MTUxNzAxNjEwMjEyMTcwMTYxMDIxMjAwMDYwNg",
        "snippet": {
          "publishedAt": "2023-12-03T13:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Can I Do Data Science After BBA, BCA ? Complete Data Science RoadMap For Beginners 2024 #pw",
          "description": "If you're wondering if you can do data science after a BBA / BCA degree, then check out our complete data science roadmap for beginners! In this roadmap, you'll find everything you need to know to start learning data science.\n\n Whether you're a beginner or a intermediate data scientist, our roadmap is perfect for you. Our goal is to provide you with everything you need to start learning data science. We also include information on the latest data science tools and technologies, so you can stay up to date with the latest trends in the field. So don't wait any longer, check out our roadmap today!\n\n🌐 Click Here To enroll:-\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs :- \n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n\n\nCan I Do Data Science After BBA, BCA | Complete Data Science RoadMap For Beginners 2024 #pw \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VNgWrx8F4kQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VNgWrx8F4kQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VNgWrx8F4kQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VNgWrx8F4kQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VNgWrx8F4kQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "fdSHVNj-YBIQcFwj7Hey9nSHrEA",
        "id": "MTUxNzAxNTIyOTA0MTcwMTUyMjkwNDAwMDI5NQ",
        "snippet": {
          "publishedAt": "2023-12-02T13:15:04+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Value your time ⏰Because Time is Money💲!! #collegewallah #money",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cX8ZoMut0-A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cX8ZoMut0-A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cX8ZoMut0-A/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cX8ZoMut0-A/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cX8ZoMut0-A/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "O-Q-3eRyQaNMN7e3JlQutZDt1H8",
        "id": "MTUxNzAxMzQ5MjAyMTcwMTM0OTIwMjAwMDM3Nw",
        "snippet": {
          "publishedAt": "2023-11-30T13:00:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Start your coding career with DSA😵\u200d💫 #collegewallah #shorts #dsa",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3cvqWcqAhB8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3cvqWcqAhB8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3cvqWcqAhB8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3cvqWcqAhB8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3cvqWcqAhB8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "W7RtOQU3cmUm7zO-xcWNAc5H6C4",
        "id": "MTUxNzAxMjY5MTAwMTcwMTI2OTEwMDAwMDk1Nw",
        "snippet": {
          "publishedAt": "2023-11-29T14:45:00+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Everyone should make a habit of saving money💲#collegewallah #money #moneysavingtips",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/6H-icVVJw6g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/6H-icVVJw6g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/6H-icVVJw6g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/6H-icVVJw6g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/6H-icVVJw6g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1W-VbfoL6NVGd-r8nRN0cGsePQc",
        "id": "MTUxNzAxMTc4NjYwMTcwMTE3ODY2MDAwMDU5NA",
        "snippet": {
          "publishedAt": "2023-11-28T13:37:40+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Stop ✋!!  Don’t Buy Laptop Before Watching This #collegewallah #coding #physicswallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ng_KTF8JGJI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ng_KTF8JGJI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ng_KTF8JGJI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ng_KTF8JGJI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ng_KTF8JGJI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-BKHHNd21LLUTyb-u3_Hi5ls6u4",
        "id": "MTUxNzAxMTc4MjA1MTcwMTE3ODIwNTAwMDMyNw",
        "snippet": {
          "publishedAt": "2023-11-28T13:30:05+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Complete Data Science RoadMap For Beginners 2024 | What is Data Science? | Jobs, Salary, Career #pw",
          "description": "Do you want to know what is data science, and what are the careers and expenses associated with this field? Check out this RoadMap for the beginner!\n\nIn this roadmap, you'll learn everything you need to know about data science, from the definition to the various careers and salaries that are available in this exciting field. This roadmap is perfect for anyone who wants to get started in data science, or who wants to learn more about this exciting field!\n\n🌐 Click Here To enroll:-\n\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9xrgVf1Jwks/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9xrgVf1Jwks/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9xrgVf1Jwks/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9xrgVf1Jwks/sddefault.jpg",
              "width": 640,
              "height": 480
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BXNY2YA_Ynso579Iqqq5C7Cbm5k",
        "id": "MTUxNzAwOTE4MDI2MTcwMDkxODAyNjAwMDAxOA",
        "snippet": {
          "publishedAt": "2023-11-25T13:13:46+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Kya Aapko Bhi Coding Boring Lagti hai ? 🙄 Try This Hack!!! 😱#collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xUk6ZzQbYRQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xUk6ZzQbYRQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xUk6ZzQbYRQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xUk6ZzQbYRQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xUk6ZzQbYRQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YV_P8Q_ktfzkImbG1p_Ae3prT8g",
        "id": "MTUxNzAwODM2MjEyMTcwMDgzNjIxMjAwMDIxMQ",
        "snippet": {
          "publishedAt": "2023-11-24T14:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Can you solve this puzzle🤔!! #puzzle #softwareengineer",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LhHrbUqD438/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LhHrbUqD438/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LhHrbUqD438/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LhHrbUqD438/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LhHrbUqD438/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DueTiOzDsQUTK7HB6GA_BR4D-r8",
        "id": "MTUxNzAwNzQ2MjIwMTcwMDc0NjIyMDAwMDQyMQ",
        "snippet": {
          "publishedAt": "2023-11-23T13:30:20+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Will AI Kill Web Development ? |  Web Developer Vs AI Who Will Win 🧐 | Web Development Roadmap 2024",
          "description": "discussing the debate between web development and artificial intelligence. Will AI ultimately kill web development as we know it? Or will the web development community find a way to integrate AI successfully into their workflow?\n\nThis is a heated debate that has been ongoing for years, and no one seems to have a clear answer. In this video, we'll discuss the pros and cons of AI in web development, and give you our thoughts on where the industry is headed. Are we heading towards a world where AI completely supplants web development? Or will we see more hybrid approaches in which both AI and web development work together? \n\n🌐 Click Here To enroll:-\n\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \nWill AI Kill Web Development ? | Web Developer Vs AI Who Will Win 🧐 | Web Development Roadmap 2024\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rrL_CCL-msY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rrL_CCL-msY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rrL_CCL-msY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rrL_CCL-msY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rrL_CCL-msY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8r2RaIoEpco6ydBlwyWSX3HZwok",
        "id": "MTUxNzAwNTY4NzIxMTcwMDU2ODcyMTAwMDg4Mg",
        "snippet": {
          "publishedAt": "2023-11-21T12:12:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Don't Go with the Flow 🤔 #collegewallah #coding #internships",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IezquwtZejk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IezquwtZejk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IezquwtZejk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/IezquwtZejk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/IezquwtZejk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "nefYvIYDj3TK23QYSyccEzE1Z1c",
        "id": "MTUxNzAwNDkyMDk3MTcwMDQ5MjA5NzAwMDc4Mg",
        "snippet": {
          "publishedAt": "2023-11-20T14:54:57+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Node Js In One Shot | Beginner To Pro Level | Full Stack Developer Course #collegewallah",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO Click Here To Enroll 👇\n\nTimestamps :- \n00:00 - Introduction    \n1:48 - Basics of Website \n12:56 - Demand of Full Stack development \n15:58 - JS & Nodejs        \n26:31 - Installation of Node Js \n31:29 - NPM                 \n42:12 - Node JS Project     \n1:22:51 - Why do we need Async Execution?\n1:30:37 - Modules,Dependencies & Packages \n1:56:37 - Web Servers            \n2:17:11 - More About Node JS.    \n2:22:52 - Conclusion\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nComplete Node Js In One Shot | Beginner To Pro Level | Full Stack Developer Course #collegewallah\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lGT6bZh_tYA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lGT6bZh_tYA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lGT6bZh_tYA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/lGT6bZh_tYA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/lGT6bZh_tYA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "pdCGGC7-sDW_5tyMHR5Xj1ZUtIs",
        "id": "MTUxNzAwMzEwNjI4MTcwMDMxMDYyODAwMDc5OA",
        "snippet": {
          "publishedAt": "2023-11-18T12:30:28+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Which one you will choose? Lakhs or Crores??💲",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/l7WMnhyMnsI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/l7WMnhyMnsI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/l7WMnhyMnsI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/l7WMnhyMnsI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/l7WMnhyMnsI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "qtisHg62oYR54sa2hvVyEXxny_c",
        "id": "MTUxNzAwMTQxNDA5MTcwMDE0MTQwOTAwMDAwNw",
        "snippet": {
          "publishedAt": "2023-11-16T13:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Is DSA Still Relevant In 2024 ? All About DSA ,  How To Learn Data Structures And Algorithms",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n\nIn this video, we're going to explore the question: is data structure and algorithms still relevant in 2024?\n\nWe'll explore this question by looking at the history of data structure and algorithm development, and discuss whether or not they still have the power to solve modern day problems. So whether you're a student looking to learn data structures and algorithms, or a professional looking to stay ahead of the curve, this video is for you!\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nIs DSA Still Relevant In 2024 ? All About DSA ,  How To Learn Data Structures And Algorithms\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ej4kMP3oVYE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ej4kMP3oVYE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ej4kMP3oVYE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ej4kMP3oVYE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ej4kMP3oVYE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "T24NVYgQsbtLKBf52R0l5ssvQoE",
        "id": "MTUxNjk5OTczNTMxMTY5OTk3MzUzMTAwMDAwMQ",
        "snippet": {
          "publishedAt": "2023-11-14T14:52:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Unpaid Vs Paid Internships ? 🚀 Are Unpaid Internship Worth It ? How To Get Internships 🤔",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j_Z16DxSOzc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j_Z16DxSOzc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j_Z16DxSOzc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/j_Z16DxSOzc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/j_Z16DxSOzc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YeANZn1whB0oBs-6eoWiyULYJW8",
        "id": "MTUxNjk5Nzk2NTc2MTY5OTc5NjU3NjAwMDY2Mg",
        "snippet": {
          "publishedAt": "2023-11-12T13:42:56+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Learn Complete HTML In One Shot | Beginner To Pro | Full Stack Web Developer Course 2023-24",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO \n\nNotes :- https://drive.google.com/file/d/1uwZ21OzhCWgCrTGlz2TTQNPdv6mcYRuI/view?usp=sharing\n\nTimeStamps:-\n0:00 Introduction\n7:17 What is HTML & HTML Editor\n12:48 Hello World!! in HTML\n19:02 HTML Elements\n33:02 HTML Styles,Formatting & Comments \n57:07 HTML Links, Attributes, File path \n1:08:56 Website\n1:15:30 HTML Favicons, table and list  \n1:32:22 HTML Block-Inline & Form Attributes\n2:08:57 HTML Entities,Symbols & CSS\n2:14:47 Employee Portal Website\n3:08:11 Thankyou!!\n\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL \nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qLZXVp5-nMU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qLZXVp5-nMU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qLZXVp5-nMU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qLZXVp5-nMU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qLZXVp5-nMU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "CnYcG17DdMbJtSL3_wIocqWGIRQ",
        "id": "MTUxNjk5NzA5MjkyMTY5OTcwOTI5MjAwMDM4Mw",
        "snippet": {
          "publishedAt": "2023-11-11T13:28:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Diwali's Biggest Offers on All Batches! 😍 Surprises & Unbelievable Offers! 🔥#diwaliwithpw",
          "description": "Light Up Your Coding Journey with Diwali's Biggest Offers! 📚 Get ready to crack that Internship / Placement with our exclusive Diwali discounts on Our Batches. Don't miss out on this golden opportunity to ignite your path to success. Enroll now and shine bright like the Diwali lights!\n\nUse Code :- DIWALI525\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9vSBviigMJ4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9vSBviigMJ4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9vSBviigMJ4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/9vSBviigMJ4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/9vSBviigMJ4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Er2dtsXkFRpAMNDUEIBm6KJ6LoI",
        "id": "MTUxNjk5NzA1ODEwMTY5OTcwNTgxMDAwMDk3NA",
        "snippet": {
          "publishedAt": "2023-11-11T12:30:10+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "99% Can Not Solve This Puzzle! 🤯Can You Solve This 🤔#collegewallah #coding #microsoft",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JCzgfcCs66o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JCzgfcCs66o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JCzgfcCs66o/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/JCzgfcCs66o/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/JCzgfcCs66o/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "x9YvVfvfViRF3AKkxaOrwP01TWk",
        "id": "MTUxNjk5NTQwMjA4MTY5OTU0MDIwODAwMDM2Ng",
        "snippet": {
          "publishedAt": "2023-11-09T14:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "After this AI,No need of Graphic Designers!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/M4nPAaD3Uxk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/M4nPAaD3Uxk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/M4nPAaD3Uxk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/M4nPAaD3Uxk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/M4nPAaD3Uxk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "z0LBAJ3ehpKsMHhGo0eEydkkUTg",
        "id": "MTUxNjk5NDQ2NjE0MTY5OTQ0NjYxNDAwMDY4MQ",
        "snippet": {
          "publishedAt": "2023-11-08T12:30:14+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Is it so important to know english in Interviews!! #collegewallah #shorts #interview",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Cl-D6-zT_Y8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Cl-D6-zT_Y8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Cl-D6-zT_Y8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Cl-D6-zT_Y8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Cl-D6-zT_Y8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FjFjjB3V9Yjtni6Fv6J726nQJA0",
        "id": "MTUxNjk5Mjc3NDE2MTY5OTI3NzQxNjAwMDU4NQ",
        "snippet": {
          "publishedAt": "2023-11-06T13:30:16+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Placements Vs Gate Exam ?? What To Chose After BTech ? Don't Make These Mistakes!",
          "description": "In this video, we'll be discussing the pros and cons of both gate exams and placements. We'll try to answer the question: what to choose after completing your Bachelor's degree?\n\nAfter watching this video, you'll know which route is best for you!\n\nClick Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO \n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nPlacements Vs Gate Exam ?? What To Chose After BTech ? Don't Make These Mistakes\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/eKq14bBNeGQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/eKq14bBNeGQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/eKq14bBNeGQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/eKq14bBNeGQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/eKq14bBNeGQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "g8WRahtAJWhLK4aJer86CExs4kE",
        "id": "MTUxNjk5MjczODAxMTY5OTI3MzgwMTAwMDkxMg",
        "snippet": {
          "publishedAt": "2023-11-06T12:30:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Try these amazing AI keyboards!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1ra3iXFafY4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1ra3iXFafY4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1ra3iXFafY4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/1ra3iXFafY4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/1ra3iXFafY4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "bv5ozDk2qmyw5HKbcm9RWiM3_PY",
        "id": "MTUxNjk5MTg5MDkxMTY5OTE4OTA5MTAwMDkzNw",
        "snippet": {
          "publishedAt": "2023-11-05T12:58:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Take Your Content Creation Game To Next Level 🚀  With These Tools 🔥 #ai #contentcreator",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/K-ng6n0iiKw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/K-ng6n0iiKw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/K-ng6n0iiKw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/K-ng6n0iiKw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/K-ng6n0iiKw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4AfXUAbg-_8OgjW5nWB9rik7nvA",
        "id": "MTUxNjk5MTAzNzAwMTY5OTEwMzcwMDAwMDMwOA",
        "snippet": {
          "publishedAt": "2023-11-04T13:15:00+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Sab paise ka khel hain😂!! #collegewallah #shorts #money",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5aqDcKdx47E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5aqDcKdx47E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5aqDcKdx47E/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/5aqDcKdx47E/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/5aqDcKdx47E/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BNOWn7AxILVQEIcfuHYxO9QbPuY",
        "id": "MTUxNjk5MDIxODA4MTY5OTAyMTgwODAwMDY4Mw",
        "snippet": {
          "publishedAt": "2023-11-03T14:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "From toughest to easiest,solve all your calculations in seconds!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HHoCKBRTx98/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HHoCKBRTx98/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HHoCKBRTx98/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/HHoCKBRTx98/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/HHoCKBRTx98/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DhlxSMhlH9ajkXnOHm6pnNs_9-4",
        "id": "MTUxNjk5MDIwMDIyMTY5OTAyMDAyMjAwMDk2Nw",
        "snippet": {
          "publishedAt": "2023-11-03T14:00:22+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Get Internships In 1st/2nd Year Of College? Everything You Need To Know 🤯 | Job Vs Internship",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO #internships #practicalexperience #collegeinternship\n\nInternships play a crucial role in a college student's educational and career development.In this video, Dinker sir will take about how internships provide a bridge between academic knowledge and the practical skills needed in the workforce, as well as offer opportunities for personal and professional growth. Students who take advantage of internships often have a competitive advantage in the job market and are better prepared for their future careers.\n\n-----------------------------------------------------\n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_l2iocqwOos/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_l2iocqwOos/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_l2iocqwOos/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_l2iocqwOos/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_l2iocqwOos/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "X9MfNpIBD_piRGetDzB58WBkA9w",
        "id": "MTUxNjk4OTMxODkxMTY5ODkzMTg5MTAwMDA0MQ",
        "snippet": {
          "publishedAt": "2023-11-02T13:31:31+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Website बनाओ Coding के बग़ैर 🤯  | Simple AI Tools To Make Attractive Websites #collegewallah #ai",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ftYBqGe9YaE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ftYBqGe9YaE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ftYBqGe9YaE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ftYBqGe9YaE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ftYBqGe9YaE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gRsa4sbF5jSqptPMUmXAYbbmVZQ",
        "id": "MTUxNjk4ODQzNjQyMTY5ODg0MzY0MjAwMDUyMQ",
        "snippet": {
          "publishedAt": "2023-11-01T13:00:42+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Self confidence se kuch bhi kar skte ho haasil!!💪 #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mkgHV-IIMNo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mkgHV-IIMNo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mkgHV-IIMNo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/mkgHV-IIMNo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/mkgHV-IIMNo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gO1gBb7nmnCYE5mXplMr2Os-8Kg",
        "id": "MTUxNjk4NzYxNTIzMTY5ODc2MTUyMzAwMDQwMA",
        "snippet": {
          "publishedAt": "2023-10-31T14:12:03+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "College QNA By Raghav Sir -  Relationships, Jobs, Placement, Internships, Development Vs DSA ??",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this Q&A, Raghav sir answers a range of questions from aspiring students.\nIf you're looking for advice on how to achieve success in academics or anything else, then this is the video for you. Raghav sir is a guru when it comes to helping students achieve their goals, and this Q&A is a great way to get insight into his methods. You won't be disappointed!\n\n🌐 Click Here To enroll:-\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nCollege QNA By Raghav Sir -  Relationships, Jobs, Placement, Internships, Development Vs DSA ??\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/jtBb6_IBKyU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/jtBb6_IBKyU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/jtBb6_IBKyU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/jtBb6_IBKyU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/jtBb6_IBKyU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Sb_45flMTLAGlT-8EjryhXaTS70",
        "id": "MTUxNjk4NzU3MjIzMTY5ODc1NzIyMzAwMDE4Mw",
        "snippet": {
          "publishedAt": "2023-10-31T13:00:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Note down these tips for your internship in college!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/RMBqiYPZSYY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/RMBqiYPZSYY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/RMBqiYPZSYY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/RMBqiYPZSYY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/RMBqiYPZSYY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XjudPJON0x0RxTsL7gIjClrCLvg",
        "id": "MTUxNjk4NjY5OTA3MTY5ODY2OTkwNzAwMDA3OA",
        "snippet": {
          "publishedAt": "2023-10-30T12:45:07+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "First set your goal to achieve,then go ahead!!🏃💪 #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ve0m_pq-QP4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ve0m_pq-QP4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ve0m_pq-QP4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ve0m_pq-QP4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ve0m_pq-QP4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gM4JBPvYbsDwE5eQbYek3EKU2q0",
        "id": "MTUxNjk4NTg2MjA1MTY5ODU4NjIwNTAwMDEyOA",
        "snippet": {
          "publishedAt": "2023-10-29T13:30:05+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Binary Search In One Shot C++ | Complete DSA Course 2023 | Placement / Internships Course",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO 🌐 Click Here To enroll:-\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n🌐 Telegram : https://telegram.me/pw_collegewallah\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FYBuOLKKqrw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FYBuOLKKqrw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FYBuOLKKqrw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/FYBuOLKKqrw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/FYBuOLKKqrw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7N4qKBqcGVOT6oOqc4cf-2gBfWU",
        "id": "MTUxNjk4NTg0NDE0MTY5ODU4NDQxNDAwMDk4NQ",
        "snippet": {
          "publishedAt": "2023-10-29T13:00:14+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Search Job for you,from these websites easily!! #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Kk_1Xh_M560/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Kk_1Xh_M560/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Kk_1Xh_M560/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Kk_1Xh_M560/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Kk_1Xh_M560/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "hsy3qBTsXdqH9LxRJjqsaSP4jj4",
        "id": "MTUxNjk4NDk3NDAwMTY5ODQ5NzQwMDAwMDIyNw",
        "snippet": {
          "publishedAt": "2023-10-28T12:50:00+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to give the answer for “Tell me about yourselves”!!🤔🤔#collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KYfeOXsu-94/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KYfeOXsu-94/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KYfeOXsu-94/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KYfeOXsu-94/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KYfeOXsu-94/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "yxq4VkhujRDCqwRp43He4HhZg2Q",
        "id": "MTUxNjk4NDE0ODA2MTY5ODQxNDgwNjAwMDAzMQ",
        "snippet": {
          "publishedAt": "2023-10-27T13:53:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How can you learn many things in startup but not in MNC!!🤔#shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KfKaJzux1FA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KfKaJzux1FA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KfKaJzux1FA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KfKaJzux1FA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KfKaJzux1FA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "nMrFT1Z9Mi1aE6wEGtCdDjjY2uA",
        "id": "MTUxNjk4NDEzNDExMTY5ODQxMzQxMTAwMDMyNg",
        "snippet": {
          "publishedAt": "2023-10-27T13:30:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Defeat AI | The Future of Artificial Intelligence | Will AI Take Over The World ?",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, Dinker sir is going to show you how to defeat AI. AI is growing more and more competitive, and if you want to stay ahead of the curve you need to know how to use AI to your advantage.\nWe are  going to share with you some of the strategies you need to use to defeat AI. From learning how to use AI for data analysis to creating effective AI strategies, this video will teach you everything you need to know to stay one step ahead of the competition!\n\n🌐 Click Here To enroll:-\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nHow To Defeat AI | The Future of Artificial Intelligence | Will AI Take Over The World ?\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HK7lHIbEQP4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HK7lHIbEQP4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HK7lHIbEQP4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/HK7lHIbEQP4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/HK7lHIbEQP4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "H9cZgTLfQiDraFGgyj-2CaqHk0Q",
        "id": "MTUxNjk4MzIzNDA2MTY5ODMyMzQwNjAwMDA3NA",
        "snippet": {
          "publishedAt": "2023-10-26T12:30:06+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Add these soft skills in your resume to get 100% Job!! #shorts #collegewallah #job",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8xkukX4DYNg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8xkukX4DYNg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8xkukX4DYNg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/8xkukX4DYNg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/8xkukX4DYNg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XObaCmRzvSNUu57HWDxrHfnnDow",
        "id": "MTUxNjk4MjM3MDEwMTY5ODIzNzAxMDAwMDY0MQ",
        "snippet": {
          "publishedAt": "2023-10-25T12:30:10+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Just A new update and Now you have to change your phone!! 😳 #whatsapp #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DAJTIFrIjgE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DAJTIFrIjgE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DAJTIFrIjgE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DAJTIFrIjgE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DAJTIFrIjgE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "zaklnwBcn0mhOmb_hUkLUvCFYaQ",
        "id": "MTUxNjk4MTU1NjQ0MTY5ODE1NTY0NDAwMDAzNA",
        "snippet": {
          "publishedAt": "2023-10-24T13:54:04+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Become A Top Coder In College | How To Get Internship / Placement | DSA or Development ?",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO Are you looking to become a top coder in college? Do you want to get a great internship or placement? Well, in this video, we're going to show you how to do just that.\n\nIn this video, we're going to share with you some tips on how to become a top coder in college. We'll teach you the skills you need to reach your academic goals and achieve success as a coder in college. If you're serious about becoming a top coder, then this video is for you!\n\n🌐 Click Here To enroll:-\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n----------------------------------------------------- \n📲 PW App/Website:https://physicswallah.onelink.me/ZAZB/PWAppWEb\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nHow To Become A Top Coder In College | How To Get Internship / Placement | DSA or Development ? For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/edkisqciGhc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/edkisqciGhc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/edkisqciGhc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/edkisqciGhc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/edkisqciGhc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "wAdp-YRT4qWpvAJg7OgM9j8qp0g",
        "id": "MTUxNjk4MDY2MDUwMTY5ODA2NjA1MDAwMDk2MQ",
        "snippet": {
          "publishedAt": "2023-10-23T13:00:50+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Apple Notes Can make your all tasks easy by these ways!! #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tZIvuaF6CJM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tZIvuaF6CJM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tZIvuaF6CJM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/tZIvuaF6CJM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/tZIvuaF6CJM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7Pp37uv1i_9KG8hkiTf8TvQHdWQ",
        "id": "MTUxNjk3OTgyMjQ1MTY5Nzk4MjI0NTAwMDA5Mw",
        "snippet": {
          "publishedAt": "2023-10-22T13:44:05+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Sorting In One Shot C++ | Bubble, Insertion, Selection Sort | Complete DSA Course 2023 | Placements",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're going to be learning how to sort items in one shot using the Bubble, Insertion, and Selection Sort algorithms.\n\nThis is a complete course that covers everything you need to know to sort items in one shot using the C++ programming language. After watching this video, you'll be able to use the Bubble, Insertion, and Selection Sort algorithms in one shot!\n\n🌐 Click Here To enroll:-\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n\nSorting In One Shot C++ | All Sorting Algorithms | Complete DSA Course 2023 | Interview / Internship\nSorting In One Shot C++ | Bubble, Insertion, Selection Sort | Complete DSA Course 2023\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/A7eUPXUR9H8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/A7eUPXUR9H8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/A7eUPXUR9H8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/A7eUPXUR9H8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/A7eUPXUR9H8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gMdsZJ9ExnEI9vLAV9KZ8YNkL6Q",
        "id": "MTUxNjk3OTc3ODE3MTY5Nzk3NzgxNzAwMDczMA",
        "snippet": {
          "publishedAt": "2023-10-22T12:30:17+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Why CGPA is important for placements??😳🤔 #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YfZAR1ptvrE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YfZAR1ptvrE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YfZAR1ptvrE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YfZAR1ptvrE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YfZAR1ptvrE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "SWTXKVauhBx_PIn47AIiqZpBP5M",
        "id": "MTUxNjk3ODk1MDAyMTY5Nzg5NTAwMjAwMDgxMw",
        "snippet": {
          "publishedAt": "2023-10-21T13:30:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Govt Job Vs Private Job | Which Is Better in 2023 ? | Should You Prepare For Govt Exams ?",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we'll discuss the pros and cons of both government and private jobs in 2023. We'll compare the salaries, the benefits, and the working conditions of the two types of jobs.\n\nWhich is better for you in 2023? The answer to this question is a little bit complicated, and depends on a lot of factors. In this video, we'll discuss the pros and cons of both government and private jobs, and compare the salaries, the benefits, and the working conditions of the two types of jobs.\n\nAt the end of the day, it's up to you to decide which is the best job for you in 2023.\n\n🌐 Click Here To enroll:-\n📚Decode + Java 1.0 :- https://physicswallah.onelink.me/ZAZB/5wsrdh6t\n📚Decode Full Stack Web Dev 1.0 :-  https://physicswallah.onelink.me/ZAZB/1uqdji8s\n📚Decode Data Science With Machine Learning 1.0 : -https://physicswallah.onelink.me/ZAZB/wyytatps\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n\nGovt Job Vs Private Job | Which Is Better in 2023 ? | Should You Prepare For Govt Exams ?\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7Q6DqAKlVBE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7Q6DqAKlVBE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7Q6DqAKlVBE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7Q6DqAKlVBE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7Q6DqAKlVBE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "KDSOXz88eL2oongqgsH4Dp2PPY0",
        "id": "MTUxNjk3ODkxNDI1MTY5Nzg5MTQyNTAwMDgyMg",
        "snippet": {
          "publishedAt": "2023-10-21T12:30:25+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Why you should not keep negative attitude!😳😒 #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/glUuMob3W24/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/glUuMob3W24/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/glUuMob3W24/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/glUuMob3W24/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/glUuMob3W24/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-dDH802KeE04GcBt0ptf_b9wgvM",
        "id": "MTUxNjk3ODA1MDA0MTY5NzgwNTAwNDAwMDU0Mw",
        "snippet": {
          "publishedAt": "2023-10-20T12:30:04+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "😂😂HTML programming Language hain koi bol mat dena😅😅!! #memes #shorts #html",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/40c2-0fNfDs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/40c2-0fNfDs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/40c2-0fNfDs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/40c2-0fNfDs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/40c2-0fNfDs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "6pQaAGBmYuHZymxJpEPq96mIUio",
        "id": "MTUxNjk3NzE4NjM2MTY5NzcxODYzNjAwMDI2Ng",
        "snippet": {
          "publishedAt": "2023-10-19T12:30:36+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Enable these settings to avoid distractions!! #collegewallah #googlechrome #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zgKcaFwCJv8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zgKcaFwCJv8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zgKcaFwCJv8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/zgKcaFwCJv8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/zgKcaFwCJv8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0B_dy7qk6QkviCXNgBGmVZYi_iM",
        "id": "MTUxNjk3NjM2NzA5MTY5NzYzNjcwOTAwMDY2NA",
        "snippet": {
          "publishedAt": "2023-10-18T13:45:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Time & Space Complexity In One Shot C++ | Complete DSA Course 2023 | Placement / Internships Course",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're going to cover time and space complexity in one shot. We're going to use the DSA algorithm to solve the problem, and we'll see how it works.\n\nIf you're interested in learning about time and space complexity, then this is the video for you! In this video, we'll cover everything you need to know about time and space complexity in one shot. We'll use the DSA algorithm to solve the problem, and you'll see how it works firsthand.\n\nNotes : http://bit.ly/46ySUsj\n\nTimestamps : \n00:00 Time Complexity\n02:04 Problem 1 \n28:23 Notations\n29:10  Problem 2\n38:43 Problem 3\n40:31 Problem 4\n44:39 TLE Error\n47:00 Problem 4\n1:01:13 Problem 5\n1:10:54 Space Complexity\n1:14:57 Problems On SC\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \nTime & Space Complexity In One Shot C++ | Complete DSA Course 2023 | Placement / Internships Course \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/U29XMLh4luM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/U29XMLh4luM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/U29XMLh4luM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/U29XMLh4luM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/U29XMLh4luM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1M2bPhcTpuBBPs-GUk-xvMJVg_s",
        "id": "MTUxNjk3NjMzMTAyMTY5NzYzMzEwMjAwMDIzMQ",
        "snippet": {
          "publishedAt": "2023-10-18T12:45:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Coding mein flowcharts hote kya hain😒🤔!! #collegewallah #shorts #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_sdIDWHyZJQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_sdIDWHyZJQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_sdIDWHyZJQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_sdIDWHyZJQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_sdIDWHyZJQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Xqt4d3gSS58Pzi7zGRIjVkdLHhE",
        "id": "MTUxNjk3NTQ5NDE5MTY5NzU0OTQxOTAwMDkyOQ",
        "snippet": {
          "publishedAt": "2023-10-17T13:30:19+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to become a pro video editor by these plugins!!😳 #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WylB5jf9LTA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WylB5jf9LTA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WylB5jf9LTA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/WylB5jf9LTA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/WylB5jf9LTA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "bWP1RJr2FQb0jHgHIQYJ0jQyFqw",
        "id": "MTUxNjk3NDYwMzA1MTY5NzQ2MDMwNTAwMDY0Mg",
        "snippet": {
          "publishedAt": "2023-10-16T12:45:05+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Try these AI Tools and get the best Coder in you!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Upm4i2NRdro/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Upm4i2NRdro/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Upm4i2NRdro/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Upm4i2NRdro/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Upm4i2NRdro/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "vT6RVYJKTQ3WJmXaEbzQ2mBF07U",
        "id": "MTUxNjk2NjgxODA4MTY5NjY4MTgwODAwMDM3MQ",
        "snippet": {
          "publishedAt": "2023-10-07T12:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Get Free Apple Products 🤑 🥳 #apple #college #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DKaZnAdHrus/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DKaZnAdHrus/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DKaZnAdHrus/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DKaZnAdHrus/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DKaZnAdHrus/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AKgiZ4CKkZ3J4SObJexDuIlnEVg",
        "id": "MTUxNjk2NTEyNjA5MTY5NjUxMjYwOTAwMDg3MQ",
        "snippet": {
          "publishedAt": "2023-10-05T13:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Reality Of 80LPA Salary Package at IIT/NIT 😱 Truth ? Software Engineers Salary In India 2023",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah\n\n Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO 🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nThe Reality Of 80LPA Salary Package at IIT/NIT ? Software Engineers Salary In India 2023\nReality of High Package Placements \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DpkGlYI0FDM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DpkGlYI0FDM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DpkGlYI0FDM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DpkGlYI0FDM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DpkGlYI0FDM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "rS4_RTat1Y917zRzzOsvh93762Y",
        "id": "MTUxNjk2NTA5MDA5MTY5NjUwOTAwOTAwMDEzOA",
        "snippet": {
          "publishedAt": "2023-10-05T12:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to Go from Basic Package to High Package💸👩\u200d💻!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/K62y39fs5_E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/K62y39fs5_E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/K62y39fs5_E/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/K62y39fs5_E/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/K62y39fs5_E/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8dFaST6KJdijQS0FMoHc2e-nt1Y",
        "id": "MTUxNjk2MzM5ODMxMTY5NjMzOTgzMTAwMDYzNw",
        "snippet": {
          "publishedAt": "2023-10-03T13:30:31+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Most Practical Ways To Manage Time In College 💪 Time Management Tips And Tricks 2023|College Wallah",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah \n\nClick Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're are going to be discussing the Most Practical Ways To Manage Time In College! From studying to socialising, we're going to be discussing each of the most important areas of college life.\n\nBy the end of this video, you'll know exactly how to best manage your time in college and reach your academic goals! So be sure to check it out and learn the most practical ways to manage your time in college!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nMost Practical Ways To Manage Time In College 💪 Time Management Tips And Tricks 2023 |College Wallah\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/o-j5EDbjyPM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/o-j5EDbjyPM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/o-j5EDbjyPM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/o-j5EDbjyPM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/o-j5EDbjyPM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "euX_rZEnlcAxAPMkh3AJKWD752o",
        "id": "MTUxNjk2MzM2MjA5MTY5NjMzNjIwOTAwMDk5MQ",
        "snippet": {
          "publishedAt": "2023-10-03T12:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Bahut zaroori hain paisa kmaane k liye Creativity!! #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7LweQ63Cezc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7LweQ63Cezc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7LweQ63Cezc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7LweQ63Cezc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7LweQ63Cezc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "D89Cp2WfywVdFtcKSqIfxpynPjg",
        "id": "MTUxNjk2MTY3MDA5MTY5NjE2NzAwOTAwMDM5NQ",
        "snippet": {
          "publishedAt": "2023-10-01T13:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Arrays In One Shot C++ | Complete DSA Course 2023 | Placement / Internships",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're going to explore arrays in C++.  This C++ array tutorial is a great way to learn how to work with arrays in a straightforward and concise way. We'll cover everything from defining an array to printing out the contents of the array. By the end of this video, you'll have a clear understanding of arrays in C++ and how to use them in your code.\n\nNotes :- https://drive.google.com/file/d/1azHpuqdHbiYFZhL1_wRm2DTXJkIOD4QM/view?usp=drive_link\n\n00:00 Introduction\n01:01 What and Why?\n02:49 Syntax and Declaration\n10:47 Output and Input\n21:38 Ques 1\n26:23 Ques 2\n26:40 Memory Allocation in Arrays\n31:03 Ques 3 : Find the Error\n32:18 Ques 4 : Sum of Array\n34:41 HW 1 : Product of Array\n34:56 Ques 5 : Linear Search\n38:41 Ques 6 : Maximum in Array\n44:10 Ques 7 : Minimum in Array\n45:23 Ques 8 : Second Largest in Array\n48:42 Ques 9 : MCQ\n49:43 Ques 10 : MCQ\n50:15 Ques 11 : True / False\n51:09 HW 2 : Count elements greater than x\n51:47 Ques 12 : Predict the Output\n57:57 Passing Array to Functions\n1:01:59 Vectors in C++\n1:11:28 Vectors STL\n1:14:52 Ques 12 : Two Sum (Leetcode)\n1:24:05 HW 3 : Check if Array contains duplicates or not\n1:24:46 Ques 13 : Copy Array in Reverse order\n1:29:28 Ques 14 : Reverse the Array\n1:33:16 Ques 15 : Rotate Array (Leetcode)\n \n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nArrays In One Shot C++ | Complete DSA Course 2023 | Placement / Internships\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Ql6sJrhCWdg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Ql6sJrhCWdg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Ql6sJrhCWdg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Ql6sJrhCWdg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Ql6sJrhCWdg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7WDr2kaPyvAkzqrofJSVc_7bnIY",
        "id": "MTUxNjk2MTYzNDAyMTY5NjE2MzQwMjAwMDExOA",
        "snippet": {
          "publishedAt": "2023-10-01T12:30:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How UI UX designers works and earns💸!!#collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3Z-HNqCBAoc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3Z-HNqCBAoc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3Z-HNqCBAoc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3Z-HNqCBAoc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3Z-HNqCBAoc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "zt32_Rt7f0BQgNLwfTlVV27gWF0",
        "id": "MTUxNjk2MDc3MDA4MTY5NjA3NzAwODAwMDIzMQ",
        "snippet": {
          "publishedAt": "2023-09-30T12:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to maintain sleep schedule to get the success💪!! #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7W2xdvPOSm8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7W2xdvPOSm8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7W2xdvPOSm8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7W2xdvPOSm8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7W2xdvPOSm8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BBF-5aQGuYt7B4AW-PHGOgxx7fU",
        "id": "MTUxNjk1OTkwNjMwMTY5NTk5MDYzMDAwMDczMg",
        "snippet": {
          "publishedAt": "2023-09-29T12:30:30+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Make a good habit of Reading Books📖📗!!To learn life long lesson!!#collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VanLmx3uZL8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VanLmx3uZL8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VanLmx3uZL8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VanLmx3uZL8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VanLmx3uZL8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "sS9w890Fdh1tMISki5EjOLohfRc",
        "id": "MTUxNjk1OTA3ODE0MTY5NTkwNzgxNDAwMDU5Mg",
        "snippet": {
          "publishedAt": "2023-09-28T13:30:14+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Is DSA Important To Get A Good Job in 2023? 🤔 Hard Truth | Data Structures And Algorithms",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah \n\nClick Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're going to talk about the importance of data structure and algorithms in college placements.\n\nData structure and algorithms are two important topics that you need to understand if you want to succeed in college placements. Not only will you be able to do better in your college courses, but you'll also be able to land a more impressive job after graduation. So make sure you understand these topics and start using them in your college studies today!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nIs DSA Important To Get A Good Job in 2023? 🤔 Hard Truth | Data Structures And Algorithms\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KmTurl1BEe8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KmTurl1BEe8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KmTurl1BEe8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KmTurl1BEe8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KmTurl1BEe8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "K-SreqNUVcxq2bma_lauzlF-D4g",
        "id": "MTUxNjk1OTA0MjI3MTY5NTkwNDIyNzAwMDI1Mw",
        "snippet": {
          "publishedAt": "2023-09-28T12:30:27+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Which skill can do all the miracles?👼 #collegewallah #communicationskills #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pNGRwQNVPgc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pNGRwQNVPgc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pNGRwQNVPgc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pNGRwQNVPgc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pNGRwQNVPgc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3xDQQjWHRdNnL7IyLoOmZpMIVnk",
        "id": "MTUxNjk1ODE3ODE5MTY5NTgxNzgxOTAwMDU1NQ",
        "snippet": {
          "publishedAt": "2023-09-27T12:30:19+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "B.Tech vs BCA? Which Degree can get you high package? 🤔 #collegewallah #shorts #degree",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cRC60M_N_8g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cRC60M_N_8g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cRC60M_N_8g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cRC60M_N_8g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cRC60M_N_8g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "B3qRL_HXbZ9GDLV-wmrpF1SjFy0",
        "id": "MTUxNjk1NzQwNjU4MTY5NTc0MDY1ODAwMDA0Ng",
        "snippet": {
          "publishedAt": "2023-09-26T15:04:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "5 Biggest Regrets College Students Have | Watch Now or Regret Later! 🤔 College Mistakes To Avoid",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah \n\nClick Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're sharing the 5 biggest regrets college students have. If you're feeling overwhelmed by college debt or wondering what you should do next, watch this video now and avoid making any of these regrets later on!\n\nThese regrets are common among college students, and if you don't watch this video now, you'll definitely regret it later. By watching this video, you'll learn how to avoid making some of the same mistakes that other college students have made.\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \n5 Biggest Regrets College Students Have | Watch Now or Regret Later! 🤔 College Mistakes To Avoid5 Biggest Regrets College Students Have | Watch Now or Regret Later!\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/M3mVjjnwLIo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/M3mVjjnwLIo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/M3mVjjnwLIo/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/M3mVjjnwLIo/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/M3mVjjnwLIo/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5Xt75GlokRMRCsWlDI-LwCLZYsI",
        "id": "MTUxNjk1NzMxNDIzMTY5NTczMTQyMzAwMDU2Mg",
        "snippet": {
          "publishedAt": "2023-09-26T12:30:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "M.Tech karein Ya na karein B.Tech ke baad?😒🤔 #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hKnRISX_T9M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hKnRISX_T9M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hKnRISX_T9M/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/hKnRISX_T9M/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/hKnRISX_T9M/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "jzhj4dBnu88o6TQ5mbiIOW4KECU",
        "id": "MTUxNjk1NjQ1MDI1MTY5NTY0NTAyNTAwMDgxNA",
        "snippet": {
          "publishedAt": "2023-09-25T12:30:25+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Use these Tips and Tricks to get the best Internships!! #collegewallah #shorts #internships",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/kgGVXvf7eHI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/kgGVXvf7eHI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/kgGVXvf7eHI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/kgGVXvf7eHI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/kgGVXvf7eHI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "B9YMalG3v8G0uSz7pZI3tD-YwWQ",
        "id": "MTUxNjk1NTYyMjEyMTY5NTU2MjIxMjAwMDMyMw",
        "snippet": {
          "publishedAt": "2023-09-24T13:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Python Full Course For Beginners [Tutorial] 2023 | Python One Shot | College Wallah",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah \nClick Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, I'm teaching you the basics of Python, from basic to advance. This full course will teach you all the fundamentals of Python, including how to write basic programs, how to work with data, and how to create sophisticated applications.\n\nIf you're looking to start learning Python, then this video is for you! I'll teach you the basics of Python in a easy-to-follow, step-by-step format. By the end of this video, you'll have everything you need to get started with Python programming.\n\nClick on the link to get the notes:-https://drive.google.com/file/d/1QI-fSKzgyaQHsQC9SSFBhMD5mh3ciR4Z/view?usp=sharing\n\nTimeStamps : \n00:00 - 01:15: Introduction \n01:15 - 35:59: Chapter 1: Python Essentials \n35:59 - 1:03:22: Variables Unveiled \n1:03:22 - 1:17:54: Python's Data \n1:17:54 - 2:27:30: Input, Operators, and Typecasting \n2:27:30 - 4:16:42: Chapter 2: Navigating Conditionals and Loops \n4:16:42 - 4:41:44: Pattern Printing \n4:41:44 - 7:02:07: Chapter 3: Python's Collection \n7:02:07 - 8:00:06: Chapter 4: Function\n8:00:06 - 8:49:15: Chapter 5:  Recursion\n8:49:15 - 9:55:50: Chapter 6: Strings \n9:55:50 - 11:36:04: Chapter 7: Python's OOPS \n11:36:04 - End: Thank You and Keep Coding!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nPython Full Course For Beginners [Tutorial] | Python One Shot | College Wallah\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XnSasPR2KJI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XnSasPR2KJI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XnSasPR2KJI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/XnSasPR2KJI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/XnSasPR2KJI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gyyuJYBhg8MTxFtI00JTzbXrL_4",
        "id": "MTUxNjk1NTU4NjA3MTY5NTU1ODYwNzAwMDY1Ng",
        "snippet": {
          "publishedAt": "2023-09-24T12:30:07+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Major Perks of Software Engineers!!💸👩\u200d💻💻#collegewallah #shorts #developer",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GTDzA6uFeoM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GTDzA6uFeoM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GTDzA6uFeoM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GTDzA6uFeoM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GTDzA6uFeoM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "H2RIiuKs0RDU9320obB9sCVvHvw",
        "id": "MTUxNjk1NDcyMjAyMTY5NTQ3MjIwMjAwMDA3NQ",
        "snippet": {
          "publishedAt": "2023-09-23T12:30:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "A Big Nooo!!! English is NOT so Important for interviews!!❌ #collegewallah #shorts #codinginterviews",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/21EoUNmUL5o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/21EoUNmUL5o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/21EoUNmUL5o/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/21EoUNmUL5o/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/21EoUNmUL5o/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ryJuy5DvtsA_sPV3IjKn0dviWsY",
        "id": "MTUxNjk1Mzg1ODE0MTY5NTM4NTgxNDAwMDYzNA",
        "snippet": {
          "publishedAt": "2023-09-22T12:30:14+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "STOP! Buying iPad in 2023 ❌ #shorts #iphone",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/OeRjx5jo93c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/OeRjx5jo93c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/OeRjx5jo93c/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/OeRjx5jo93c/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/OeRjx5jo93c/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "7dtYNWtBAPamrftWY0vGZT1hvJ8",
        "id": "MTUxNjk1MzA2NjMxMTY5NTMwNjYzMTAwMDIyNA",
        "snippet": {
          "publishedAt": "2023-09-21T14:30:31+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Why Most People FAIL to Learn Coding ?  🤔 How To get Internship / Placement",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah \n\nClick Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, Raghav Sir will be teaching you how to deal with all the problems that come with coding. I will also be providing a solution for every problem that a coder may face. I have years of experience in this field and I am here to help you learn and succeed in your coding career.\n\nIf you're a coder and you're having trouble with all the problems that come with it, then this video is for you! I'll teach you all the skills you need to overcome any coding challenge and achieve your goals. I hope you enjoy this video and find it helpful!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website:https://physicswallah.onelink.me/ZAZB/PWAppWEb\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nWhy Most People FAIL to Learn Coding ?  🤔  | How To get Internship / Placement📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wVvUBh6fNIE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wVvUBh6fNIE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wVvUBh6fNIE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/wVvUBh6fNIE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/wVvUBh6fNIE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "CgRy7nyahja8dCuhl1pL11y3gJM",
        "id": "MTUxNjk1MzAzMDA4MTY5NTMwMzAwODAwMDI4Mw",
        "snippet": {
          "publishedAt": "2023-09-21T13:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Never do these mistakes❌ in your college!! #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MA0Ucy0ZGYI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MA0Ucy0ZGYI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MA0Ucy0ZGYI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MA0Ucy0ZGYI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MA0Ucy0ZGYI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4nilJcU3BSjJBYZKicbnOk_Xv80",
        "id": "MTUxNjk1MjEzMDAxMTY5NTIxMzAwMTAwMDA5Ng",
        "snippet": {
          "publishedAt": "2023-09-20T12:30:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "C++ Vs Java Vs Python? Which language is best for Beginners | Web Development , DSA",
          "description": "In this video, we're going to compare C++, Java and Python and see which one is best for beginners when it comes to web development or DSA .\n\nIf you're a beginner and you're wondering which language to start with when it comes to web development, then watch this video and we'll compare C++, Java and Python and help you decide which one is best for you!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/257ys4_R5tI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/257ys4_R5tI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/257ys4_R5tI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/257ys4_R5tI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/257ys4_R5tI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "A3f5nnZ-qVkXdRP1w6NAm6m0VvA",
        "id": "MTE2OTUyMDkzNDYxNjk1MjA5MzQ2MDAwMDQ0",
        "snippet": {
          "publishedAt": "2023-09-20T11:29:06+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Only Way To Stop Procrastination 🔥 Tips and Techniques to Boost Productivity",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, I'm going to show you the only way to stop procrastinating and boost your productivity.\n\nIf you're struggling to get started on your work, then this is the video for you. In this video, I'll share with you tips and techniques that have helped me overcome my own procrastination problems. I'll show you how to create effective work habits, and how to set achievable goals. If you're looking for tips to jump start your productivity, then this is the video for you!\n#procrastination #coding #college \n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bXExubrcTI8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bXExubrcTI8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bXExubrcTI8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/bXExubrcTI8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/bXExubrcTI8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "20HqrO7nzfHDD9xS0fTr89wmBOo",
        "id": "MTUxNjk1MTI4ODI4MTY5NTEyODgyODAwMDI0NQ",
        "snippet": {
          "publishedAt": "2023-09-19T13:07:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Stay Ahead of the Game: My Top Productivity App Picks for 2023",
          "description": "warikoo,ankur warikoo,warikoo videos,warikoo personal finance,Procrastination,Productivity,Time Management,Motivation,Personal Development,Self-improvement,Goal Setting,Productivity Tips,Focus,Efficiency,Success Habits,Work Habits,procrastination,procrastinate,procrastinating,brain,emotions,fear response,stress,studying,failure,anxiety,depression,fight or flight response,neuroscience,science,emotional health,mental health,stop procrastinating,education",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xQ3yk5JqmhY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xQ3yk5JqmhY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xQ3yk5JqmhY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xQ3yk5JqmhY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xQ3yk5JqmhY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "OzJmnwcXAxIPj1RRTyDu1oI5Zrw",
        "id": "MTUxNjk1MDQ3NDEzMTY5NTA0NzQxMzAwMDIwOQ",
        "snippet": {
          "publishedAt": "2023-09-18T14:30:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Ab karo cardless cash withdrawl,Wo bhi UPI se💸 #collegewallah #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fXzNezaaxu4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fXzNezaaxu4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fXzNezaaxu4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/fXzNezaaxu4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/fXzNezaaxu4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "htG98Mmm-70uLrs3TBiJ4oZpubA",
        "id": "MTUxNjk0OTU3NDE3MTY5NDk1NzQxNzAwMDYxOQ",
        "snippet": {
          "publishedAt": "2023-09-17T13:30:17+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "My Coding Journey 🔥 5 Years Of Coding In 5 Minutes | DSA Mistakes To Avoid | Internship 2023",
          "description": "🌐 Telegram : https://telegram.me/pw_collegewallah Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, I'm going to share with you my 5-year coding journey. In just 5 minutes, I'll share with you everything from when I started coding to where I am today.\n\nIn this video, I'll be sharing with you how I've progressed from zero experience to cracking MNC's in 5 years. I'll teach you the basics of coding, from start to finish, in just 5 minutes. If you're looking to start coding, or to progress your coding skills, then this video is for you!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB/PWAppWEb\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \nMy Coding Journey 🔥 5 Years Of Coding In 5 Minutes | DSA Mistakes To Avoid | Internship 2023\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/kx6VgUVWTq8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/kx6VgUVWTq8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/kx6VgUVWTq8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/kx6VgUVWTq8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/kx6VgUVWTq8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0RXi-FQK2KxRQeVUXIFb2aK3c5w",
        "id": "MTUxNjk0OTUzODI2MTY5NDk1MzgyNjAwMDY1Mg",
        "snippet": {
          "publishedAt": "2023-09-17T12:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Stay Consistent In Coding ? 🤩 #shorts #coding #ai",
          "description": "In this video, I'm going to tell you how to stay consistent in coding. I'll show you some tips on how to stay motivated and continuous in your coding practice.\n\nIf you're new to coding or you're struggling to stay consistent in your coding practice, then this video is for you! I'll show you some tips on how to stay motivated and continue coding even when the going gets tough. I hope you find this video helpful and that you can apply the advice to help you stay consistent in your coding practice!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qHn_AD3t1I8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qHn_AD3t1I8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qHn_AD3t1I8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qHn_AD3t1I8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qHn_AD3t1I8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "-0P9nhMIAe1kkTyVJgefUs6q5-Y",
        "id": "MTUxNjk0ODcxMDExMTY5NDg3MTAxMTAwMDY1NQ",
        "snippet": {
          "publishedAt": "2023-09-16T13:30:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Couldn't Get Into IIT ? Is IIT Tag Important 🚀 Roadmap For Non IITians - 2023",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, I'm going to talk to you about a path to success that many people overlook: the unconventional path.\n\n IIT is undoubtedly one of the best institutions in the world, but it's not the only path to success. In this video, I'm going to talk to you about a path to success that many people overlook: the unconventional path.\n\nIf you're feeling frustrated that you aren't able to get into one of the world's best institutes, then this video is for you. I'll discuss some of the common myths about IIT and bust them wide open. After watching this video, you'll understand that there is always a way to achieve your dreams, no matter how unconventional!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \nCouldn't Get Into IIT ? Is IIT Tag Important 🚀 Roadmap For Non IITians - 2023 \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cKA78Qvqf_Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cKA78Qvqf_Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cKA78Qvqf_Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cKA78Qvqf_Y/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cKA78Qvqf_Y/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9CeKAMb3Mmuaj5gLVQoFFiHyZgM",
        "id": "MTUxNjk0ODY3NDAyMTY5NDg2NzQwMjAwMDE3MA",
        "snippet": {
          "publishedAt": "2023-09-16T12:30:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Top 2 Crazy Android Apps You Must Use In 2023 #shorts #apps",
          "description": "best android apps,best apps for android,best android apps 2023,best apps 2023,android apps,top android apps,android apps 2023,best apps,best apps for android 2023,best free android apps,top android apps 2023,free android apps,apps for android,top apps 2023,must have android apps,2023 android apps,top 10 best android apps,best android apps august 2023,apps 2023,new android apps,best apps trakintech,best phones trakintech",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/6CYtgpfptew/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/6CYtgpfptew/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/6CYtgpfptew/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/6CYtgpfptew/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/6CYtgpfptew/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YlH87yOO_62p76cu9hVtr3-g0eU",
        "id": "MTUxNjk0NzgyNzAyMTY5NDc4MjcwMjAwMDYwNg",
        "snippet": {
          "publishedAt": "2023-09-15T12:58:22+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Secure Your Data With These Apps 🫣 #shorts #privacy",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/f1hs8uVNIO8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/f1hs8uVNIO8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/f1hs8uVNIO8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/f1hs8uVNIO8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/f1hs8uVNIO8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "T9ZJhA3geFg0laQA5oNLqTDq360",
        "id": "MTUxNjk0NzAwMzk4MTY5NDcwMDM5ODAwMDEyMg",
        "snippet": {
          "publishedAt": "2023-09-14T14:06:38+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Never Procrastinate Again! 😭 Simple Hacks To Beat Procrastination 🔥 #shorts #stressrelief",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/L7VSZGziBmc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/L7VSZGziBmc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/L7VSZGziBmc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/L7VSZGziBmc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/L7VSZGziBmc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "6QliW36MBbD8yuLMiepdSj9B8UQ",
        "id": "MTUxNjk0Njk4MjE1MTY5NDY5ODIxNTAwMDAyMw",
        "snippet": {
          "publishedAt": "2023-09-14T13:30:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Start Coding as a Beginner 2023 | From Zero To Pro Coder 🤯 Roadmap For Internship/Placement",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO In this video, we're going to show you how to start coding as a beginner in 2023. If you're looking to break into the coding industry, then this is the video for you!\n\nWe'll be sharing with you everything you need to know to get started coding as a beginner in 2023. From learning the basics of coding to building your first website, we'll show you everything you need to get started! This video is perfect for beginners interested in learning how to code!\n\nTimestamps : \n\n0:00 : Introduction \n0:45  : Step - 1 (Goal)\n02:08 : Step 2 (First Programming Language)\n07:46 : JavaScript Roadmap\n11:45 : Python\n14:05 : DSA C\n15:55 : Important!\n\nProjects for beginners : \n• Calculator\n• To do list\n• Tic tac toe\n• Quiz App\n• Portfolio website\n• Ecommerce store\n• Chat application\n• Video Call application\n• Contribute to open source projects.\n• Participate in Hackathons. \n\nHTML & CSS Complete Course : https://youtu.be/WWmTZ50s-4E?si=jXim8R2yPfDIK2Ym\nJavaScript Complete Course : https://youtube.com/playlist?list=PLxgZQoSe9cg1B3TiBz05FMwfdwCkkpy2c&si=GjtMgrTXaFXZekJ2\nPython Programming For Beginners : https://youtube.com/playlist?list=PLxgZQoSe9cg17r-kBHwn3C79WdBzt00n_&si=aIbrARbwgCU0LZQc\nC++ and DSA Foundation Course : https://youtube.com/playlist?list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd&si=BPNVnsWLqt09BTp_\nC Programming Course : https://youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt&si=J2gvZKY8faQwDLrQ\nJava and DSA Foundation Course : https://youtube.com/playlist?list=PLxgZQoSe9cg00xyG5gzb5BMkOClkch7Gr&si=CvZalbYdx6PP7Oki\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n\nHow To Start Coding as a Beginner 2023 | From Zero To Pro Coder 🤯 Roadmap For Internship/Placement\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MZTVTsAF8-o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MZTVTsAF8-o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MZTVTsAF8-o/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/MZTVTsAF8-o/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/MZTVTsAF8-o/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Y2a81J53371-mUea8fp7y1Pb2S8",
        "id": "MTUxNjk0NjA4MjE4MTY5NDYwODIxODAwMDk3MA",
        "snippet": {
          "publishedAt": "2023-09-13T12:30:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "DTU Vs NSUT 🤫 Which Is Better ?? #shorts #iit",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VTYg0Z1LVkw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VTYg0Z1LVkw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VTYg0Z1LVkw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VTYg0Z1LVkw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VTYg0Z1LVkw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "RMF_EpPPCwBk0d_CIaYLAp9n6Dg",
        "id": "MTUxNjk0NTI2NTQzMTY5NDUyNjU0MzAwMDY1OQ",
        "snippet": {
          "publishedAt": "2023-09-12T13:49:03+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Is Competitive Programming Must For College Placement/Internship ? DSA Vs Competitive Coding 2023",
          "description": "Click Here To Enroll 👇\n📚 Decode Data Science with ML 1.0 - https://bit.ly/489C5Vx\n📚 Decode Full Stack Web Dev 1.0 - https://bit.ly/3uEFb56\n📚 Decode Java+DSA 1.0 - https://bit.ly/46w8a8z\n\nJob Assurance Programs\n📚 Full stack Data Science Pro - https://bit.ly/3uy5H09\n📚 Full Stack Web Development - https://bit.ly/3T4X8nT\n📚 Mastering Full Stack Data Analytics - https://bit.ly/3QVjKnZ\n📚 Building Microservices in Java for Cloud - https://bit.ly/3SU4fPO Are you wondering if competitive programming is required for college placement or internship? In this video, we'll compare and contrast the two types of programming to help you decide if competitive programming is required for your future.\n\nCompetitive programming is a valuable skill for any college student, and can help you stand out from the crowd. We'll compare and contrast competitive programming with other skills like coding and problem solving, to help you decide if competitive programming is the right skill for you. After watching this video, you'll have a better idea if competitive programming is required for college placement or internship!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HxSazmZl0B0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HxSazmZl0B0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HxSazmZl0B0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/HxSazmZl0B0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/HxSazmZl0B0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "FyPNkf7Jy-mA2slak2zBfQJGO3s",
        "id": "MTUxNjk0NTIxODA3MTY5NDUyMTgwNzAwMDgyMg",
        "snippet": {
          "publishedAt": "2023-09-12T12:30:07+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Never Worry About Failed Payments Again 🤯  The Ultimate Solution #shorts #money",
          "description": "Looking for a solution to failed payments? Look no further! In this video, we'll show you how to Never Worry About Failed Payments Again. This is the ultimate solution to avoiding costly payment failures.\n\nIf you're constantly struggling to pay your bills on time, then this video is for you. We'll show you how to prevent payment failures from happening and how to manage your payments so you never have to worry about them again! After watching this video, you'll be able to avoid failed payments and manage your finances confidently!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/G5aOjmXUDH8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/G5aOjmXUDH8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/G5aOjmXUDH8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/G5aOjmXUDH8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/G5aOjmXUDH8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "0S1VfUdFFifSqo_12u6EWFRyuJs",
        "id": "MTUxNjk0NDM4MjY0MTY5NDQzODI2NDAwMDEwOQ",
        "snippet": {
          "publishedAt": "2023-09-11T13:17:44+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How To Use Apple Airdrop In Android Device! #apple  #shorts",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dI-Es7T5JuM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dI-Es7T5JuM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dI-Es7T5JuM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/dI-Es7T5JuM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/dI-Es7T5JuM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "4k2HKH5Y6bMhXe6Aemk3YNNtz_o",
        "id": "MTUxNjk0MzQ5MDI2MTY5NDM0OTAyNjAwMDU5Mw",
        "snippet": {
          "publishedAt": "2023-09-10T12:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Get Personalized Music For Your Videos ✨ #ai #aitools  #shorts",
          "description": "Get Personalized Music For Your Videos ✨ #ai #aitools  #shorts\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xslxxYnko5w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xslxxYnko5w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xslxxYnko5w/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/xslxxYnko5w/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/xslxxYnko5w/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QS0_4xRWJgKQvQgo_u80tUl0C74",
        "id": "MTUxNjk0MzQ1NDE4MTY5NDM0NTQxODAwMDM5Mw",
        "snippet": {
          "publishedAt": "2023-09-10T11:30:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Smart India Hackathon 2023 🤩 Eligibility, Problem, Projects, Application 🔥 Complete Roadmap",
          "description": "In this video, we'll discuss the eligibility requirements for the upcoming Smart India Hackathon 2023. We'll also discuss some of the problems that participants can solve, and the projects they can work on. Finally, we'll provide information about the application process.\n\nIf you're interested in participating in the Smart India Hackathon 2023, be sure to check out this video! We'll give you all the information you need to know about the eligibility requirements, the problems that participants can solve, and the application process. We hope that this video will help you decide if the Smart India Hackathon 2023 is the right event for you!\n\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n----------------------------------------------------- \nSmart India Hackathon 2023 🤩 Eligibility, Problem, Projects, Application\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nXkszWSJgQ0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nXkszWSJgQ0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nXkszWSJgQ0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/nXkszWSJgQ0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/nXkszWSJgQ0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Roz7_l6ZPoWiTCEJdv0HyV-RXMg",
        "id": "MTUxNjk0MjYyNjIxMTY5NDI2MjYyMTAwMDQ4MQ",
        "snippet": {
          "publishedAt": "2023-09-09T12:30:21+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Research Made Easy #shorts #ai",
          "description": "Research Made Easy, a website that makes research easy.\n\nI'll walk you through the steps required to find the information you need, and then share some of the best resources on Research Made Easy. If you're looking for an easy way to research facts and figures, then Research Made Easy is the website for you!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/o2P5o2RmqKk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/o2P5o2RmqKk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/o2P5o2RmqKk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/o2P5o2RmqKk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/o2P5o2RmqKk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "HOD-oJUWTOmGns-jBcEA_ECUuWg",
        "id": "MTUxNjk0MTc4OTAxMTY5NDE3ODkwMTAwMDA0NA",
        "snippet": {
          "publishedAt": "2023-09-08T13:15:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "You Don't Need a College Degree! 🔥 Degree Vs Skills 2023 #shorts",
          "description": "In this video, we're going to talk about the difference between having a degree and having skills.\n\nAlmost every job out there requires some form of skills, whether it's skills in writing, skills in math, or skills in customer service. So if you want to find a job that will fit your needs and your qualifications, it's important to understand the difference between having a degree and having skills.\n\nIn this video, we're going to talk about the difference between having a degree and having skills. We'll discuss the advantages and disadvantages of having a degree, and we'll help you understand what a skills-based job is and how it can benefit you.\n\nSo if you're wondering what a skills-based\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GmCyxrLP2DE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GmCyxrLP2DE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GmCyxrLP2DE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GmCyxrLP2DE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GmCyxrLP2DE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "hY5_zLkI4eOvoyEpT9q83PaHmUg",
        "id": "MTUxNjk0MDkzNDA3MTY5NDA5MzQwNzAwMDMwMA",
        "snippet": {
          "publishedAt": "2023-09-07T13:30:07+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "No Interest In Coding?? No Placement/Internship 😞 What Should I Do ? | College Wallah",
          "description": "If you don't have an interest in coding, then you might be wondering what you should do next. In this video, we'll provide you with some helpful tips on what to do if you don't want to pursue a career in coding.\n\nIf you're interested in a career in coding but don't have the interest or motivation to learn how to code, then we have some advice for you. In this video, we'll share with you some options for things you can do if you don't want to pursue a career in coding. From becoming a web developer to starting your own business, there are a variety of options available to you if you don't want to pursue a career in coding!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \nNo Interest In Coding?? Demotivated No Placements😞 What Should I Do ? | College Wallah\n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Gf1kKv_yAtc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Gf1kKv_yAtc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Gf1kKv_yAtc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Gf1kKv_yAtc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Gf1kKv_yAtc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "iwYHmZtJ3ektjub2h6OXXNVB8sA",
        "id": "MTUxNjk0MDg5ODE4MTY5NDA4OTgxODAwMDY3OQ",
        "snippet": {
          "publishedAt": "2023-09-07T12:30:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "What Is Git & Github ? #coding #shorts #softwareengineer",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/f_hGkPwhwV0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/f_hGkPwhwV0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/f_hGkPwhwV0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/f_hGkPwhwV0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/f_hGkPwhwV0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "xPNFx3g9yN5NUGleUqGN6I8Yvbw",
        "id": "MTUxNjk0MDA3MjIxMTY5NDAwNzIyMTAwMDYxMg",
        "snippet": {
          "publishedAt": "2023-09-06T13:33:41+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Forget ChatGPT and Mid Journey 👋 Instead try This AI  🚀 #shorts #chatgpt",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rh0KTanXU-Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rh0KTanXU-Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rh0KTanXU-Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rh0KTanXU-Y/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rh0KTanXU-Y/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Oy8-vxviUxnORKKMzemmk9RRMDI",
        "id": "MTUxNjkzOTIwNjE4MTY5MzkyMDYxODAwMDkwOQ",
        "snippet": {
          "publishedAt": "2023-09-05T13:30:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Complete C++ Tutorial in One Shot 2023 | Beginner To Advance | Basics Of C++ Programming",
          "description": "Would you like to learn all about the basics of the C++ language? In this one-shot course, we'll start from the very basics and work our way up to all the foundation topics.\n\nIf you're interested in learning about the basics of the C++ language, then this course is for you! In this course, we'll cover everything from basics of the C++ language to topics like conditionals, loops, pattern printing, functions, pointers, recursion and very basic data structures like arrays, 2D arrays and Strings. This course is perfect for anyone looking to start learning about the C++ language!\n\nNotes :- https://drive.google.com/drive/folders/1OTeptkNFmtBSoMqW6oxiWmvDUrQl6Peo?usp=sharing\n\nTimestamps : \n00:00 Introduction\n02:25 Online compiler - Replit\n07:18 Basics\n1:56:20 Conditionals\n3:23:48 Loops\n5:04:56 Pattern Printing\n6:14:54 Functions\n7:30:03 Pointers\n7:55:43 Recursion\n8:57:31 Arrays\n10:17:00 2D Arrays\n10:59:18 Strings\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \nComplete C++ Tutorial in One Shot 2023 | Beginner To Advance | Basics Of C++ Programming\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e7sAf4SbS_g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e7sAf4SbS_g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e7sAf4SbS_g/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/e7sAf4SbS_g/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/e7sAf4SbS_g/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3M-SKiAEEDvVxtCulSHRrRqJ2q4",
        "id": "MTUxNjkzOTE3MDA1MTY5MzkxNzAwNTAwMDQ5OQ",
        "snippet": {
          "publishedAt": "2023-09-05T12:30:05+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Defeat AI Through This AI 🤯 #chatgpt #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AHonnApQTPM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AHonnApQTPM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AHonnApQTPM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/AHonnApQTPM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/AHonnApQTPM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "dDziHWQ1XD-4BsRrZZwuRv7Kg5I",
        "id": "MTE2OTM5MTAzNjgxNjkzOTEwMzY4MDAwNDk5",
        "snippet": {
          "publishedAt": "2023-09-05T10:39:28+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Complete C Language in One Shot - Part 2 | 100+ Questions  + Notes #collegewallah",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh\n🚀 Enhance your coding skills with this comprehensive guide to programming fundamentals! 📚 Join us as we explore key concepts such as functions, recursion, arrays, 2D-arrays, strings, structures, and unions. Whether you're a beginner or an experienced programmer, this video will help you build a strong foundation in coding.\n\nIn this video:\n- Understand the importance of functions in writing organized and reusable code.\n- Dive into the intriguing world of recursion and its problem-solving capabilities.\n- Explore arrays and learn how to manage data efficiently.\n- Master 2D-arrays for working with structured data representations.\n- Discover essential techniques for string manipulation and manipulation.\n- Learn to create and use structures to manage complex data structures.\n- Explore unions and their memory-saving benefits.\n\nJoin us on this educational journey and boost your programming knowledge today!\n\nTime Stamps:-\n00:00:00 : Introduction \n00:01:35 : Chapter 5: Functions\n2:29:41  : Chapter 6: Recursion\n2:44:25  : Chapter 6: Problems on recursion\n3:56:57  : Chapter 7: Arrays\n5:43:29  : Chapter 8: 2D-Arrays \n6:22:46  : Chapter 9: Strings\n7:16:23  : Chapter 10: Structures\n8:26:55 : Chapter 10: Unions\n8:36:15 : Thankyou\n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n\n\n#ProgrammingFundamentals #CodingSkills #LearnToCode #ProgrammingGuide",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "VtRJqiAacxCK-f2mLU64U5z0ECs",
        "id": "MTE2OTM4NDg1NDcxNjkzODQ4NTQ3MDAwNzIx",
        "snippet": {
          "publishedAt": "2023-09-04T17:29:07+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Btech 2nd Year: The Ultimate Guide to Placements / Internships 💸 A Step-By-Step Guide",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh\n\nIn this video, we're going to discuss the importance of internships and placements during your Btech second year. We'll discuss the different types of internships and placements, as well as the best way to go about securing them.\n\nAfter watching this video, you'll know exactly what to do to secure your dream internship or job in your second year of Btech!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \nBtech 2nd Year: The Ultimate Guide to Placements/Internships 💸 A Step-By-Step Guide\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "1qUgaG_kMQvO8649WEREknhbnZk",
        "id": "MTE2OTM4NDg1MzkxNjkzODQ4NTM5MDAwNTE0",
        "snippet": {
          "publishedAt": "2023-09-04T17:28:59+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Ultimate Data Science Roadmap - Jobs, Salary, Future 🤑 Step By Step Guide",
          "description": "Click on the link to get enroll-https://pwskills.com/course/full-stack-data-science-pro\n\nIn this video, we're going to discuss the basics \nof data science, and provide a roadmap for learning data science.\n\nIf you're interested in becoming a data scientist, then this video is for you! By the end of this video, you'll have a better idea of what data science is and what it takes to become a successful data scientist. Be sure to share this video with your friends, because data science is an exciting field that's growing fast!\n\n\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n\nThe Ultimate Data Science Roadmap - Jobs, Salary, Future 🤑 Step By Step Guide\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "OVvqJR2IZF39ViP_vfVaZ8OGvDg",
        "id": "MTE2OTM4NDg1MjYxNjkzODQ4NTI2MDAwOTQ2",
        "snippet": {
          "publishedAt": "2023-09-04T17:28:46+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to Score 9+ CGPA in College 🔥 Complete Roadmap 2023 CSE/Non CSE Branches 🤫 Internship/Placements",
          "description": "In this guide, you'll learn everything you need to know to score a 9+ CGPA in college. From studying smarter to boosting your motivation, you'll uncover everything you need to achieve your academic goals.\n\nIf you're ready to unleash your potential and achieve great marks in your college courses, then this guide is for you! In this guide, you'll learn everything you need to know to achieve a 9+ CGPA in college. From studying smarter to boosting your motivation, you'll uncover everything you need to achieve your academic goals.\n\nMake sure to check out this guide today, and let us help you achieve your college academic goals!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nHow to Score 9+ CGPA in College | Complete Roadmap 2023 🔥CSE/Non CSE Branches | Secret Tips 🤫📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "uAlxeu7rxqpNQOLkkkB0M0I5iKI",
        "id": "MTE2OTM4NDg1MTYxNjkzODQ4NTE2MDAwMjY5",
        "snippet": {
          "publishedAt": "2023-09-04T17:28:36+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "GSOC 2024 : The Ultimate Roadmap For CSE/Non CSE Branches 💸 Google Internship",
          "description": "In this video, we're going to give you the ultimate guide to cracking GSOC 2024! GSOC is the hardest computer science competition in the world, and if you want to win, you need to learn as much as you can about the competition.\n\nIn this guide, we'll teach you everything you need to know about GSOC 2024, from how to score points in the competition to which strategies work best. We'll also share tips on how to improve your chances of winning, no matter which category you're competing in.\n\nSo whether you want to crack GSOC or just learn more about the competition, make sure to watch this video! It will help you reach your goals faster and easier!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://pwskills.com/course/decode-dsa-with-c-2.0\nFull Stack Web DEvelopment :- https://pwskills.com/course/full-stack-web-development-ja\nJava with DSA :- https://pwskills.com/course/java-with-dsa-and-system-design-2-hindi\nReact Native :- https://pwskills.com/course/mobile-development-using-react-native\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n-----------------------------------------------------\nGSOC 2024 : The Ultimate Roadmap For CSE/Non CSE Branches 💸 Google Internship\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "oLqdzSsspSde8yzK1nlNAkZ0v94",
        "id": "MTE2OTM4NDg0OTExNjkzODQ4NDkxMDAwNTE3",
        "snippet": {
          "publishedAt": "2023-09-04T17:28:11+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Do’s & Don’ts, Mistakes to Avoid❌|Make college Your Best phase of Life|College Wallah",
          "description": "#collegelife #skills #coding #placements \n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nHow To Make College Your Best Phase of Life | Do's And Don'ts In College | Mistakes To Avoid ?\n#collegewallah #physicswallah #college #iit #mistakestoavoid \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8NWiYyPYVg10BNvn_kniyMpvdTk",
        "id": "MTUxNjkzODMwNjAzMTY5MzgzMDYwMzAwMDI2OQ",
        "snippet": {
          "publishedAt": "2023-09-04T12:30:03+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Coding Ka Scene Kya Hai ?? #shorts #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/98SOJMH2D_s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/98SOJMH2D_s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/98SOJMH2D_s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/98SOJMH2D_s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/98SOJMH2D_s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "65HklCY5_2HA59I_ZRiN2KLFl4U",
        "id": "MTUxNjkzNzQ5NTgzMTY5Mzc0OTU4MzAwMDMxOQ",
        "snippet": {
          "publishedAt": "2023-09-03T13:59:43+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "GSOC 2024 : The Ultimate Roadmap For CSE/Non CSE Branches 💸 Google Internship",
          "description": "In this video, we're going to give you the ultimate guide to cracking GSOC 2024! GSOC is the hardest computer science competition in the world, and if you want to win, you need to learn as much as you can about the competition.\n\nIn this guide, we'll teach you everything you need to know about GSOC 2024, from how to score points in the competition to which strategies work best. We'll also share tips on how to improve your chances of winning, no matter which category you're competing in.\n\nSo whether you want to crack GSOC or just learn more about the competition, make sure to watch this video! It will help you reach your goals faster and easier!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://pwskills.com/course/decode-dsa-with-c-2.0\nFull Stack Web DEvelopment :- https://pwskills.com/course/full-stack-web-development-ja\nJava with DSA :- https://pwskills.com/course/java-with-dsa-and-system-design-2-hindi\nReact Native :- https://pwskills.com/course/mobile-development-using-react-native\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n-----------------------------------------------------\nGSOC 2024 : The Ultimate Roadmap For CSE/Non CSE Branches 💸 Google Internship\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/g6tvSJQspO8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "GJQghE5Xp8r_fqUzzHKXwSe_YvY",
        "id": "MTUxNjkzNjU3ODIxMTY5MzY1NzgyMTAwMDgwNg",
        "snippet": {
          "publishedAt": "2023-09-02T12:30:21+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Laptop Buying Mistakes to Avoid at All Costs! #shorts #tech",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pOKtIGQT3Tk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pOKtIGQT3Tk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pOKtIGQT3Tk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/pOKtIGQT3Tk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/pOKtIGQT3Tk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "9vYqT8FYrgIMiAonu8Q0VpjXal8",
        "id": "MTUxNjkzNTc2NDA3MTY5MzU3NjQwNzAwMDY5OQ",
        "snippet": {
          "publishedAt": "2023-09-01T13:53:27+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to Score 9+ CGPA in College 🔥 Complete Roadmap 2023 CSE/Non CSE Branches 🤫 Internship/Placements",
          "description": "In this guide, you'll learn everything you need to know to score a 9+ CGPA in college. From studying smarter to boosting your motivation, you'll uncover everything you need to achieve your academic goals.\n\nIf you're ready to unleash your potential and achieve great marks in your college courses, then this guide is for you! In this guide, you'll learn everything you need to know to achieve a 9+ CGPA in college. From studying smarter to boosting your motivation, you'll uncover everything you need to achieve your academic goals.\n\nMake sure to check out this guide today, and let us help you achieve your college academic goals!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \nHow to Score 9+ CGPA in College | Complete Roadmap 2023 🔥CSE/Non CSE Branches | Secret Tips 🤫📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/d6DhEq7rR6k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "oCZ7OJ_tnqbVIu_rn-rn6XENCQY",
        "id": "MTUxNjkzNTcxNDE1MTY5MzU3MTQxNTAwMDQ1NA",
        "snippet": {
          "publishedAt": "2023-09-01T12:30:15+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Funny Battle : Hostler vs Day Scholar Life 😂 #shorts #iit",
          "description": "hostel days,hostel life,hostel daze,day schola,day scholar or hosteller,day scholar vs hosteller,iit,iit bombay,iit hostel room,iit hostel,iit hostel life,jee,aiims,aiims delhi,aiims delhi motivation,aiims hostel,aiims hostel room,aiims hostel tour,aiims hostel life,iit campus tour,iit campus,iit colleges in india,nit hostel rooms,nit hostel room tour,dtu hostel,dtu hostel tour,dtu hostel rooms,iit delhi hostel,hosteller vs day scholar",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VKB8EKIc9fI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VKB8EKIc9fI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VKB8EKIc9fI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VKB8EKIc9fI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VKB8EKIc9fI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "kwVxvQVYrNKfRk-GLV7UzLVR5ck",
        "id": "MTUxNjkzNDg1MDA4MTY5MzQ4NTAwODAwMDc1NQ",
        "snippet": {
          "publishedAt": "2023-08-31T12:30:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "IIT Dark Reality : 20 LPA Beats the 1Cr Package! Discover How! #iit #shorts",
          "description": "In this video, IIT Dark Reality, I'll reveal how I secured a 20-LPA beat against the 1Cr package!\n\nAs a matter of fact, this video will show you how you can do the same!\n\nYou'll learn how to identify the key factors that will help you secure a successful 1Cr package against all odds, and much more in IIT Dark Reality!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7g2yjp1FaGE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7g2yjp1FaGE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7g2yjp1FaGE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7g2yjp1FaGE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7g2yjp1FaGE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "GmT7OR_aOHiCC0L8kHBV0rDyQJ8",
        "id": "MTUxNjkzMzk4NjAyMTY5MzM5ODYwMjAwMDM3Nw",
        "snippet": {
          "publishedAt": "2023-08-30T12:30:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Mind-Blowing AI Tools to Supercharge Your Content Creation 🚀",
          "description": "In this video, we'll be taking a look at some mind-blowing AI tools that can help you supercharge your content creation. From virtual assistants to machine learning algorithms, these tools can help you create more powerful and effective content.\n\nWhether you're a content creator or not, these tools are worth a look. By using these tools, you'll be able to create content that is both effective and engaging. Watch this video to learn more about these tools and how they can help you create content that is worth reading!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3T-voj-IaVw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3T-voj-IaVw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3T-voj-IaVw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3T-voj-IaVw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3T-voj-IaVw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "_0_FN6iFlXvaVYGmClfBtDNLemE",
        "id": "MTUxNjkzMzE5NDEyMTY5MzMxOTQxMjAwMDA2NQ",
        "snippet": {
          "publishedAt": "2023-08-29T14:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Ultimate Data Science Roadmap - Jobs, Salary, Future 🤑 Step By Step Guide",
          "description": "Click on the link to get enroll-https://pwskills.com/course/full-stack-data-science-pro\n\nIn this video, we're going to discuss the basics \nof data science, and provide a roadmap for learning data science.\n\nIf you're interested in becoming a data scientist, then this video is for you! By the end of this video, you'll have a better idea of what data science is and what it takes to become a successful data scientist. Be sure to share this video with your friends, because data science is an exciting field that's growing fast!\n\n\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n\nThe Ultimate Data Science Roadmap - Jobs, Salary, Future 🤑 Step By Step Guide\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/cBMbn-sP6ag/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8a6NV7Q5ugHuiTRe-eExXnOh23I",
        "id": "MTUxNjkzMzEyMjI0MTY5MzMxMjIyNDAwMDk2NA",
        "snippet": {
          "publishedAt": "2023-08-29T12:30:24+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Access Blocked Sites Without VPN: The Untold Solution #shorts #tech #physicswallah",
          "description": "In this short video, I'm going to show you a secret way to access blocked sites without a VPN. This way is super fast and easy to use and doesn't require any extra software!\n\nIf you're ever forced to access a blocked site, be sure to watch this video! I'll show you a simple, fast way to access blocked sites without a VPN. This method is perfect for when you don't have access to a VPN or when you don't have time to set up a VPN. Thanks for watching!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/orQYJEwVypQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/orQYJEwVypQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/orQYJEwVypQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/orQYJEwVypQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/orQYJEwVypQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "YWq64XQOPs4iK7IHHU0BuNHEIg8",
        "id": "MTUxNjkzMjI1ODI0MTY5MzIyNTgyNDAwMDYwMg",
        "snippet": {
          "publishedAt": "2023-08-28T12:30:24+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Unlock Your AI Potential with This Mind-Blowing Tool! 🤯⚡️#shorts",
          "description": "In this short video, we're going to be discussing the incredible mind-blowing tool that can help you unlock your AI potential. This tool is incredibly powerful and can help you develop cutting-edge AI skills quickly and easily.\n\nIf you're interested in pursuing a career in AI or are just curious about the field, this tool is a must-watch! It will not only teach you about AI, but also how to use it to improve your own productivity and professional skills. So whether you're a beginner or an expert, make sure to check out this mind-blowing tool!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rn5rZFa3yx8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rn5rZFa3yx8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rn5rZFa3yx8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rn5rZFa3yx8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rn5rZFa3yx8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Ys7qtgteufppEHT-cmFi81oiXe0",
        "id": "MTUxNjkzMTQ2NjAyMTY5MzE0NjYwMjAwMDg2Ng",
        "snippet": {
          "publishedAt": "2023-08-27T14:30:02+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Btech 2nd Year: The Ultimate Guide to Placements / Internships 💸 A Step-By-Step Guide",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh\n\nIn this video, we're going to discuss the importance of internships and placements during your Btech second year. We'll discuss the different types of internships and placements, as well as the best way to go about securing them.\n\nAfter watching this video, you'll know exactly what to do to secure your dream internship or job in your second year of Btech!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \nBtech 2nd Year: The Ultimate Guide to Placements/Internships 💸 A Step-By-Step Guide\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/8LBodAJu4ok/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ZrmSjCvmCitos744-nb-ViqyjW4",
        "id": "MTUxNjkzMTM5NDI1MTY5MzEzOTQyNTAwMDY4OQ",
        "snippet": {
          "publishedAt": "2023-08-27T12:30:25+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "The Hidden Reason Your Resume Keeps Getting Rejected",
          "description": "Have you ever had a resume that just keeps getting rejected? You submit it, you wait for a response...nothing. You give up hope, you move on.\n\nBut there's a reason your resume keeps getting rejected, and it's not your skills or your experience. It's because you're not using the right resume templates.\n\nIn this video, I'm going to show you the 3 most common resume mistakes that people make, and then I'm going to share with you the best resume template for getting your resume accepted. After watching this video, you'll be able to create a resume that will help you land the job of your dreams!\nIn this video, I'm going to share with you the hidden reason your resume keeps getting rejected. If you're struggling to get your resume accepted, listen up! I'm going to reveal to you the 3 common reasons your resume is getting rejected and how you can fix them.If you want to improve your chances of getting your resume accepted, then watch this video and learn the 3 common reasons your resume is getting rejected. By understanding these reasons, you'll be able to improve your resume formatting and improve your chances of getting your resume accepted!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/vX9ni6PKkeg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/vX9ni6PKkeg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/vX9ni6PKkeg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/vX9ni6PKkeg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/vX9ni6PKkeg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "lb9MOhcG_VCKs9zPPC3VwJ2x9lE",
        "id": "MTUxNjkzMDU0ODgyMTY5MzA1NDg4MjAwMDUwOQ",
        "snippet": {
          "publishedAt": "2023-08-26T13:01:22+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "PPT Made Simple ✨ Master Easy PPT with AI  #collegewallah #physicswallah #shorts",
          "description": "In this video, I'm going to show you how to make an easy PowerPoint presentation using AI. By the end of this video, you'll be able to make a great PPT presentation that everyone will be impressed by!\n\nIf you're looking for ways to make your PowerPoint presentation easier, then this video is for you! By the end of this video, you'll be able to master easy PowerPoint presentation with AI, and everybody will be able to understand what you're presenting!\nIf you're looking to up your presentation game, then this video is for you! We'll teach you how to use AI to make your presentations look great and be easy to follow. After watching this video, you'll be a PowerPoint master!\n\nPPT Made Simple ✨ Master Easy PPT with AI  #collegewallah #physicswallah #shorts",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/plbx6Z4ULfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/plbx6Z4ULfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/plbx6Z4ULfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/plbx6Z4ULfE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/plbx6Z4ULfE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "8o2eSdX1Eb5HXE84_2s6ku7ud2I",
        "id": "MTUxNjkyOTY2NjI4MTY5Mjk2NjYyODAwMDE5NA",
        "snippet": {
          "publishedAt": "2023-08-25T12:30:28+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Ultimate Note-Making Hacks: Boost Your Productivity",
          "description": "In this video, we're going to show you some amazing hacks for making the most of your notes.\n\nBy using these hacks, you'll be able to get the most out of your note-taking skills and boost your productivity in no time. You'll be able to organise your notes better, highlight key points more easily, and make sure you know exactly what you're looking for when you're taking notes.\n\nSo don't wait - watch this video and see for yourself how easy it is to boost your productivity with note-making hacks!\nWhether you're a student or a professional, taking good notes is essential for learning and retaining information. In this video, I'll show you some tricks that will help you make the most of your note-taking sessions and boost your learning efficiency. So if you're looking to improve your productivity and brain power, then this video is for you! Are you struggling to keep up with your note-taking goals?  we'll cover everything you need to get the most out of your note-taking. By following these hacks, you'll be able to take better notes, study more effectively and remember everything you need for exams!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wEBDyRSuGrA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wEBDyRSuGrA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wEBDyRSuGrA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/wEBDyRSuGrA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/wEBDyRSuGrA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Sz2GKsHe-6HwmR53k66TKxZxxJA",
        "id": "MTUxNjkyODg3NDA5MTY5Mjg4NzQwOTAwMDE0MA",
        "snippet": {
          "publishedAt": "2023-08-24T14:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Top 5 high-paying Jobs of 2023 in India | Future Ready Jobs 🤩 Unlock Financial Freedom 💸 Money",
          "description": "In this video, we're going to share with you our top 5 jobs that are new and Hot right now!\nFrom high paying jobs to money work from home, these are the 5 jobs that are currently offering the best opportunities and paychecks! So whether you're looking for a new job or just updating your current job search, be sure to check out these 5 jobs that are new and hot!\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nTop 5 high-paying Jobs of 2023 in India | Future Ready Jobs 🤩 Unlock Financial Freedom 💸Money\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PA7B0pYoisk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PA7B0pYoisk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PA7B0pYoisk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/PA7B0pYoisk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/PA7B0pYoisk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "WIaq-U5lx-IQGXgUESo8FWaAC0E",
        "id": "MTUxNjkyODgwMjI2MTY5Mjg4MDIyNjAwMDkwNw",
        "snippet": {
          "publishedAt": "2023-08-24T12:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Watch These Movies When You're Feeling Low | Top Inspirational Movies",
          "description": "Feeling down? Try watching some of these inspiring movies to find renewed motivation. From uplifting war movies to inspiring sports films, these movies will give you the boost you need to stay focused and driven.\n\nNo matter what you're going through, these movies will offer you a sense of hope and empowerment. Watching them can help you find inner strength and overcome any obstacle. So go ahead and take a break from your troubles, and watch one of these movies to give you a much-needed pick-me-up!\nThese movies are ideal for times when you feel like you can't take another step, or when you just need a little inspiration. Whether you're feeling down about your current situation or just need a pick-me-up, watch these movies and find some hope and inspiration!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/QRjtt3tvkPc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/QRjtt3tvkPc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/QRjtt3tvkPc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/QRjtt3tvkPc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/QRjtt3tvkPc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XCHYFDwe9Wjwuvzxs9pBSU8Jx2s",
        "id": "MTUxNjkyNzkzODI2MTY5Mjc5MzgyNjAwMDAzNQ",
        "snippet": {
          "publishedAt": "2023-08-23T12:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Plan Budget Friendly Trips Through AI With Just a Few Clicks",
          "description": "✨ Hashtags ✨\n#ai #tools #chatgpt",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tFng4FHoUX8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tFng4FHoUX8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tFng4FHoUX8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/tFng4FHoUX8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/tFng4FHoUX8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Vt13LbGxHM9nV9XmQE6psSJJgYQ",
        "id": "MTUxNjkyNzE0NjMxMTY5MjcxNDYzMTAwMDkzMg",
        "snippet": {
          "publishedAt": "2023-08-22T14:30:31+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "11 Things Every College Student Must Have ! 😎 College Shopping 🛍️",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh\n\nAre you getting ready to head off to college? Congratulations! Here is a list of 11 things you need to buy to make your college experience as smooth and enjoyable as possible.\nThese are just a few of the must-have things for college students. Be sure to pack other items that you think you'll need, such as a planner, alarm clock, and snacks.\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n------------------------------------------------------- \n11 Things Every College Student Must Have ! 😎 College Shopping 🛍️\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ySEQoryxoF8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ySEQoryxoF8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ySEQoryxoF8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ySEQoryxoF8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ySEQoryxoF8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XckuAX9Ih1BZTDrxuCANkyES8oA",
        "id": "MTUxNjkyNzA3NDI2MTY5MjcwNzQyNjAwMDM0NQ",
        "snippet": {
          "publishedAt": "2023-08-22T12:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "These AI Tools can do your Assignments for you! #shorts #physicswallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/R4et42nutNw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/R4et42nutNw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/R4et42nutNw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/R4et42nutNw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/R4et42nutNw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "gQVsaqYYLvM5stsTPf89rX8nnJY",
        "id": "MTUxNjkyNTM4MjA5MTY5MjUzODIwOTAwMDgwNA",
        "snippet": {
          "publishedAt": "2023-08-20T13:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Another Legend Coming Soon 😱 Dekho Dekho Kaun Aaya?? 😲 College Wallah 🚀",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh\n\n\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bwZs51pSmvA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bwZs51pSmvA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bwZs51pSmvA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/bwZs51pSmvA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/bwZs51pSmvA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3TWfsKbS4siISfiS-92Sc1kzo4U",
        "id": "MTUxNjkyNTM0NjAwMTY5MjUzNDYwMDAwMDY3MA",
        "snippet": {
          "publishedAt": "2023-08-20T12:30:00+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "What Is Cloud Computing 🤔 ? Easily Explained #physicswallah #coding #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0GEezMbjsbg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0GEezMbjsbg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0GEezMbjsbg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/0GEezMbjsbg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/0GEezMbjsbg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "Cwa5Dt7GCA2-faOhFGBKdpGvcd4",
        "id": "MTUxNjkyNDQ4MjA0MTY5MjQ0ODIwNDAwMDQxNA",
        "snippet": {
          "publishedAt": "2023-08-19T12:30:04+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Crazy WhatsApp Features You Must Try 🔥 2023 🔥 #shorts",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4LbPAAbChDI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4LbPAAbChDI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4LbPAAbChDI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/4LbPAAbChDI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/4LbPAAbChDI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "XHZr4H2WyaWf4zWXA2wOwAiSMNk",
        "id": "MTUxNjkyMzYxODEzMTY5MjM2MTgxMzAwMDAyNw",
        "snippet": {
          "publishedAt": "2023-08-18T12:30:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Don't Do Coding This Way ❌ #shorts #physicswallah #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DaLs8OmBgP4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DaLs8OmBgP4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DaLs8OmBgP4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/DaLs8OmBgP4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/DaLs8OmBgP4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "g4WZxGsGeUGDe2WzmxtI07UoBXo",
        "id": "MTUxNjkyMjg0NzI5MTY5MjI4NDcyOTAwMDQ2NQ",
        "snippet": {
          "publishedAt": "2023-08-17T15:05:29+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Complete C Language in One Shot - Part 2 | 100+ Questions  + Notes #collegewallah",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh\n🚀 Enhance your coding skills with this comprehensive guide to programming fundamentals! 📚 Join us as we explore key concepts such as functions, recursion, arrays, 2D-arrays, strings, structures, and unions. Whether you're a beginner or an experienced programmer, this video will help you build a strong foundation in coding.\n\nIn this video:\n- Understand the importance of functions in writing organized and reusable code.\n- Dive into the intriguing world of recursion and its problem-solving capabilities.\n- Explore arrays and learn how to manage data efficiently.\n- Master 2D-arrays for working with structured data representations.\n- Discover essential techniques for string manipulation and manipulation.\n- Learn to create and use structures to manage complex data structures.\n- Explore unions and their memory-saving benefits.\n\nJoin us on this educational journey and boost your programming knowledge today!\n\nTime Stamps:-\n00:00:00 : Introduction \n00:01:35 : Chapter 5: Functions\n2:29:41  : Chapter 6: Recursion\n2:44:25  : Chapter 6: Problems on recursion\n3:56:57  : Chapter 7: Arrays\n5:43:29  : Chapter 8: 2D-Arrays \n6:22:46  : Chapter 9: Strings\n7:16:23  : Chapter 10: Structures\n8:26:55 : Chapter 10: Unions\n8:36:15 : Thankyou\n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n\n\n#ProgrammingFundamentals #CodingSkills #LearnToCode #ProgrammingGuide",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/qmkCmfLJENU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "5Ers6eXtM3hs75ahwyjsvM-yALY",
        "id": "MTUxNjkyMjc1NTk2MTY5MjI3NTU5NjAwMDcyNA",
        "snippet": {
          "publishedAt": "2023-08-17T12:33:16+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Build Your Startup Easily 🤩 No Investment Required ?? #collegewallah #physicswallah #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/w9n3GiHWh-c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/w9n3GiHWh-c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/w9n3GiHWh-c/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/w9n3GiHWh-c/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/w9n3GiHWh-c/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "oMcjEIMcYVfuGJ6hT06fYOyojls",
        "id": "MTUxNjkyMTkyNjA5MTY5MjE5MjYwOTAwMDA0Ng",
        "snippet": {
          "publishedAt": "2023-08-16T13:30:09+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Don’t learn Web Development Without This Resource ❌ #webdevelopment  #coding #physicswallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Q7zPjO8-iwE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Q7zPjO8-iwE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Q7zPjO8-iwE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Q7zPjO8-iwE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Q7zPjO8-iwE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "nBMaaH0QgguwwWBGouuIlU2-GBk",
        "id": "MTUxNjkyMTg5MDE4MTY5MjE4OTAxODAwMDgzNA",
        "snippet": {
          "publishedAt": "2023-08-16T12:30:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Web Development Roadmap 2023 🔥 | Step By Step Guide| HTML,CSS, JavaScript | CSE/Non-CSE Branches",
          "description": "Click on the link to Enroll: https://bit.ly/47p8NTh \nAre you interested in becoming a web developer? If so, you're in luck! Web development is a highly lucrative and exciting career path, and the demand for skilled web developers is only going to grow in the years to come. We'll walk through the perfect web development roadmap for 2023. I'll cover the essential skills you need to learn, the best resources to use, and how to get started on your journey to becoming a web developer.\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n\n------------------------------------------------------- \nWeb Development Roadmap 2023 🔥 | Step By Step Guide| HTML,CSS, JavaScript | CSE/Non CSE Branches\n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZEnJ1ROswNQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZEnJ1ROswNQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZEnJ1ROswNQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/ZEnJ1ROswNQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/ZEnJ1ROswNQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "21-Xy65ALrcJjr0VCbDe0R7C9Y4",
        "id": "MTUxNjkyMTAyNjMwMTY5MjEwMjYzMDAwMDg3Mw",
        "snippet": {
          "publishedAt": "2023-08-15T12:30:30+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Create Stunning Website Without Coding 🤩 #physicswallah  #artificialintelligence",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Z_LuHx77Z-s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Z_LuHx77Z-s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Z_LuHx77Z-s/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Z_LuHx77Z-s/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Z_LuHx77Z-s/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "D-5rIJFRujYLx6KEF9Fu7Js5GFI",
        "id": "MTUxNjkyMDE2MjI5MTY5MjAxNjIyOTAwMDE1OQ",
        "snippet": {
          "publishedAt": "2023-08-14T12:30:29+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Best Resources For Coding 🤩 Free Coding Cheat Sheets #collegewallah #physicswallah #coding",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/vflXebb9k70/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/vflXebb9k70/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/vflXebb9k70/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/vflXebb9k70/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/vflXebb9k70/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "jph_v8jeYobWkL6kJ0uJwqjy8WI",
        "id": "MTUxNjkxOTI5ODIwMTY5MTkyOTgyMDAwMDQ5OQ",
        "snippet": {
          "publishedAt": "2023-08-13T12:30:20+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Crack Any Interview 🤯 Here's The Trick #collegewallah #physicswallah",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bACBjJ3KOqE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bACBjJ3KOqE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bACBjJ3KOqE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/bACBjJ3KOqE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/bACBjJ3KOqE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "roakg4eC20b4ZOMqLQnMndF1nNc",
        "id": "MTUxNjkxODQzNDE3MTY5MTg0MzQxNzAwMDY0OA",
        "snippet": {
          "publishedAt": "2023-08-12T12:30:17+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Download PDF Of Any Book For Free 📒 #books #selfimprovement #physicswallah",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LSWF6bLE7gE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LSWF6bLE7gE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LSWF6bLE7gE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/LSWF6bLE7gE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/LSWF6bLE7gE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "ooU0FrtdazCN-FOLHGhYCnInnCU",
        "id": "MTE2OTE3ODUyNjYxNjkxNzg1MjY2MDAwOTE4",
        "snippet": {
          "publishedAt": "2023-08-11T20:21:06+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "C Language Full Course - Part 1 (Beginner to Advance) | 100+ Questions + Notes",
          "description": "Ultimate C Language Full Course, tailored for beginners and designed to take you from novice to advanced levels of programming proficiency. Whether you're just starting your coding journey or want to solidify your C programming skills, this video is your go-to resource. We'll cover everything you need to know, step by step, to help you become a confident C programmer. Join us in exploring the world of C programming and kickstart your coding adventures today! Don't forget to subscribe and hit the notification bell to stay updated with our comprehensive programming tutorials. Let's code together!\n\nTimestamps:\n00:00:00 : Introduction.\n00:02:14 : Chapter 1: Basics.\n1:25:31 : Chapter 1: Taking Input and Typecasting.\n2:37:33 : Chapter 2: Conditionals.\n4:36:25 : Chapter 2: Switch Statements.\n4:51:53 : Chapter 3: Loops.\n7:04:36 : Chapter 4: Pattern printing.\n\nClick on the link to get the notes:-https://drive.google.com/drive/folders/1oVdmWKED0uz3elN8R8iedrEdZZ_4UftU?usp=drive_link\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n\n#CProgramming #LearnC #ProgrammingTutorial #RaghavSir #CProgrammingOneShot #Programming101",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "oizvOTsp4bm6hQjzsmOaBHcnusA",
        "id": "MTUxNjkxNzU3MDAxMTY5MTc1NzAwMTAwMDg5OA",
        "snippet": {
          "publishedAt": "2023-08-11T12:30:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "This Free AI Website Will Make your Life Easier 😱 #ai #aitools #artificialintelligence",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2seNng-2PTw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2seNng-2PTw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2seNng-2PTw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/2seNng-2PTw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/2seNng-2PTw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "R_AGZ7qGtPEhzSnoS8HNE5DTUEU",
        "id": "MTUxNjkxNjc3ODEyMTY5MTY3NzgxMjAwMDE4Ng",
        "snippet": {
          "publishedAt": "2023-08-10T14:30:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "ChatGPT Tutorial 2023 | Coding Hacks That Will Change Your Life 🤯🤯",
          "description": "#chatgpt #ai #aitools #aitools2023 \n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\nChatGPT Tutorial | ChatGPT Hacks That Will Change Your Life 🤯🤯\n\n#ChatGPT #ChatGPTTutorial #ChatGPTHack #CollegeWallah #PhysicsWallah",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/i0K3ST1hK7Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/i0K3ST1hK7Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/i0K3ST1hK7Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/i0K3ST1hK7Q/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/i0K3ST1hK7Q/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "mcOASwRfa5K02GEyxRGMpwtymMo",
        "id": "MTUxNjkxNjcxMzQ2MTY5MTY3MTM0NjAwMDg3NQ",
        "snippet": {
          "publishedAt": "2023-08-10T12:42:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "नहीं मिलेगी नौकरी CS Ke Baccho Ko Bhi",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KUYTSCq6Zl0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KUYTSCq6Zl0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KUYTSCq6Zl0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/KUYTSCq6Zl0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/KUYTSCq6Zl0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AXdZjjODKLOtIrs1Gh51JMd5GIg",
        "id": "MTUxNjkxNTk2NDkxMTY5MTU5NjQ5MTAwMDE0NQ",
        "snippet": {
          "publishedAt": "2023-08-09T15:54:51+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Which Programming Language Is Best For Beginner? Java vs C++ vs Python #collegewallah #physicswallah",
          "description": "🌐 Click Here To enroll:-https://pwskills.com/course/decode-dsa-with-c-2.0\n\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nwhich language should i learn for programming ? \nWhich language is best for placements ? \nWhich Language is easy to learn ? \nBest Coding Language ? \nWhich Language Is Best For Beginner ? Java vs C++ vs Python  #collegewallah #physicswallah \n\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Q5Ltov8t5rQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Q5Ltov8t5rQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Q5Ltov8t5rQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Q5Ltov8t5rQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Q5Ltov8t5rQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "h_mrh-S42RJe0J2mE5glqLNoY5U",
        "id": "MTUxNjkxNTg0MDc2MTY5MTU4NDA3NjAwMDk2Mw",
        "snippet": {
          "publishedAt": "2023-08-09T12:27:56+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Make Creative Ads Through AI 🤯 #collegewallah #physicswallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4Oa7CtAnasc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4Oa7CtAnasc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4Oa7CtAnasc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/4Oa7CtAnasc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/4Oa7CtAnasc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "RGsVPHlX43M0_u8X6bw7lW1o2lg",
        "id": "MTUxNjkxNTA1MDE0MTY5MTUwNTAxNDAwMDgyNg",
        "snippet": {
          "publishedAt": "2023-08-08T14:30:14+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Do’s & Don’ts, Mistakes to Avoid❌|Make college Your Best phase of Life|College Wallah",
          "description": "#collegelife #skills #coding #placements \n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \nHow To Make College Your Best Phase of Life | Do's And Don'ts In College | Mistakes To Avoid ?\n#collegewallah #physicswallah #college #iit #mistakestoavoid \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/RIm50swlAMM/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "3LePWgTEQy688Zdmw0o0Lu6SZUQ",
        "id": "MTUxNjkxNDk3ODAwMTY5MTQ5NzgwMDAwMDIzMg",
        "snippet": {
          "publishedAt": "2023-08-08T12:30:00+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "LinkedIn Secret Hack 🤯 Build Connections | Best AI Tool  🤖  #collegewallah #physicswallah #linkedin",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-EjvQ9QNbHs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-EjvQ9QNbHs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-EjvQ9QNbHs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/-EjvQ9QNbHs/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/-EjvQ9QNbHs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "AYmExt_SnO4hVY_BMZYta-9YAOY",
        "id": "MTUxNjkxNDExNDI2MTY5MTQxMTQyNjAwMDAyNw",
        "snippet": {
          "publishedAt": "2023-08-07T12:30:26+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "This Free Tool Is Better Than Canva 😯",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tz4O3zsXSes/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tz4O3zsXSes/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tz4O3zsXSes/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/tz4O3zsXSes/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/tz4O3zsXSes/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "F3xu_nUx7Mm6bePsbExEwHEjADc",
        "id": "MTE2OTEzNjMxMzIxNjkxMzYzMTMyMDAwNzcw",
        "snippet": {
          "publishedAt": "2023-08-06T23:05:32+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Complete DSA Roadmap With Tips And Tricks | From Zero To 80 LPA+ | DSA Roadmap For Internships",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE 2.0-https://pwskills.com/course/decode-dsa-with-c-2.0\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n\nComplete DSA Roadmap With Tips And Tricks | From Zero Level To MAANG | DSA Roadmap For Internships , dsa in java,dsa in c++ , c++ vs java",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "v4cMmtkGCoECm_WiIuRmxRkGDNQ",
        "id": "MTE2OTEzNjMxMTMxNjkxMzYzMTEzMDAwNjQw",
        "snippet": {
          "publishedAt": "2023-08-06T23:05:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "5 Ways to Earn Money While Studying🤑||Side Income Sources For Students💪🏻💸",
          "description": "#incomesources #earning #moneymakingstrategies \n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n\n5 Ways To Earn Money As A College Student | Earn Money Online Without Investment\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "playlistItem"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "HcX9aKjD6WzW_tMfUYosvxuFa0o",
        "id": "MTUxNjkxMzMyMjA1MTY5MTMzMjIwNTAwMDU1OA",
        "snippet": {
          "publishedAt": "2023-08-06T14:30:05+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "5 Ways to Earn Money While Studying🤑||Side Income Sources For Students💪🏻💸",
          "description": "#incomesources #earning #moneymakingstrategies \n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n\n5 Ways To Earn Money As A College Student | Earn Money Online Without Investment\n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/GUSIivmKGzE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "D1EHVJRzsaorO9zNHLJjFTYh8dY",
        "id": "MTUxNjkxMzI1MDIzMTY5MTMyNTAyMzAwMDg5NA",
        "snippet": {
          "publishedAt": "2023-08-06T12:30:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Become Data Analyst In a Minute ? 🫣 See How",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/o0V6rfKxhiU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/o0V6rfKxhiU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/o0V6rfKxhiU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/o0V6rfKxhiU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/o0V6rfKxhiU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "DdqxGtRrPK92zKi6kCuRNrgZksE",
        "id": "MTUxNjkxMjQwNDE4MTY5MTI0MDQxODAwMDg0OA",
        "snippet": {
          "publishedAt": "2023-08-05T13:00:18+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Ab AI hi Kar Dega pictures ki Editing🫨🤙!! #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sWDrR9qz8h0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sWDrR9qz8h0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sWDrR9qz8h0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/sWDrR9qz8h0/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/sWDrR9qz8h0/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "BQ0DmTFsXXa_zUo_W4brGwTHkSQ",
        "id": "MTUxNjkxMTU5NDAxMTY5MTE1OTQwMTAwMDExMw",
        "snippet": {
          "publishedAt": "2023-08-04T14:30:01+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "UI vs UX🤔!! #shorts #collegewallah",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3m_j-wJQTjw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3m_j-wJQTjw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3m_j-wJQTjw/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/3m_j-wJQTjw/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/3m_j-wJQTjw/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "yO3EBEiK_gqv2wipKcAEZsgvqKg",
        "id": "MTUxNjkxMDczNDQ4MTY5MTA3MzQ0ODAwMDU4NQ",
        "snippet": {
          "publishedAt": "2023-08-03T14:37:28+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Complete DSA Roadmap With Tips And Tricks | From Zero To 80 LPA+ | DSA Roadmap For Internships",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE 2.0-https://pwskills.com/course/decode-dsa-with-c-2.0\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n\nComplete DSA Roadmap With Tips And Tricks | From Zero Level To MAANG | DSA Roadmap For Internships , dsa in java,dsa in c++ , c++ vs java",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/7leHXde8l3k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "S7BENW9NzNTIDewmpan4EoVeQFE",
        "id": "MTUxNjkxMDY4MTA5MTY5MTA2ODEwOTAwMDgwMQ",
        "snippet": {
          "publishedAt": "2023-08-03T13:08:29+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Make a Stunning LinkedIn Profile ! Increase Followers Exponentially",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/49gQhfrFzC4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/49gQhfrFzC4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/49gQhfrFzC4/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/49gQhfrFzC4/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/49gQhfrFzC4/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "fFKDIg_PEcEfMpDPEka1a0rdhX0",
        "id": "MTUxNjkwOTc5MDg3MTY5MDk3OTA4NzAwMDY5OA",
        "snippet": {
          "publishedAt": "2023-08-02T12:24:47+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "How to Get Girlfriend In College ?😂 #artificialintelligence",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5jCTV8Yl1aQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5jCTV8Yl1aQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5jCTV8Yl1aQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/5jCTV8Yl1aQ/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/5jCTV8Yl1aQ/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "QyHldnTB36aIaMH_YZFVQ_F9E6k",
        "id": "MTUxNjkwOTAwMjEzMTY5MDkwMDIxMzAwMDQ2Ng",
        "snippet": {
          "publishedAt": "2023-08-01T14:30:13+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "C Language Full Course - Part 1 (Beginner to Advance) | 100+ Questions + Notes",
          "description": "Ultimate C Language Full Course, tailored for beginners and designed to take you from novice to advanced levels of programming proficiency. Whether you're just starting your coding journey or want to solidify your C programming skills, this video is your go-to resource. We'll cover everything you need to know, step by step, to help you become a confident C programmer. Join us in exploring the world of C programming and kickstart your coding adventures today! Don't forget to subscribe and hit the notification bell to stay updated with our comprehensive programming tutorials. Let's code together!\n\nTimestamps:\n00:00:00 : Introduction.\n00:02:14 : Chapter 1: Basics.\n1:25:31 : Chapter 1: Taking Input and Typecasting.\n2:37:33 : Chapter 2: Conditionals.\n4:36:25 : Chapter 2: Switch Statements.\n4:51:53 : Chapter 3: Loops.\n7:04:36 : Chapter 4: Pattern printing.\n\nClick on the link to get the notes:-https://drive.google.com/drive/folders/1oVdmWKED0uz3elN8R8iedrEdZZ_4UftU?usp=drive_link\n\n🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492\n\n#CProgramming #LearnC #ProgrammingTutorial #RaghavSir #CProgrammingOneShot #Programming101",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/i0ovgS-jCQ8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "yqd0gfTrpNWENSa4qTE7Y1cDDME",
        "id": "MTUxNjkwODkzMTMyMTY5MDg5MzEzMjAwMDgxNQ",
        "snippet": {
          "publishedAt": "2023-08-01T12:32:12+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "अब लगाओ Dark Mode हर Website मे 🌃 #chrome #physicswallah #coding #darkmode",
          "description": "🌐 Click Here To enroll:-\nDecode DSA with C++ / DECODE :- https://bit.ly/3O6TzcL\nBINARY 2.0 Hindi :- https://bit.ly/3rrzDcU\nBINARY 2.0 English :- https://bit.ly/3O5Ve3c\nSIGMA 2.0 Hindi :- https://bit.ly/3O6uLTk\nSIGMA 2.0 English :- https://bit.ly/3XSAJKQ\nIMPACT 2.0 Hindi :- https://bit.ly/44X37hh\nIMPACT 2.0 English:- https://bit.ly/3Y1q2pr\n----------------------------------------------------- \n📲 PW App/Website: https://physicswallah.onelink.me/ZAZB...\n 🌐 PW Skills Website: https://pwskills.com/\n ------------------------------------------------------- \n📌 COLLEGE WALLAH SOCIAL MEDIA– \n🌐 Instagram: https://instagram.com/pwcollegewallah?igshid=MzRlODBiNWFlZA==\n------------------------------------------------------- \n📌 RECOMMENDED CHANNELS FOR YOU – \n🌐 Physics Wallah - Alakh Pandey:  youtube.com/@PhysicsWallah\n🌐 PW Skills Tech: https://youtube.com/@PWSkillsTech\n🌐 JEE Wallah:   https://youtube.com/@PW-JEEWallah\n🌐 JEE Challengers by PW : https://youtube.com/@JEEChallengersbyPW\n 🌐 GATE Wallah : https://youtube.com/@GATEWallahbyPW\n 🌐 GATE Wallah - EC,EE & CS : https://youtube.com/@GATEWallah_EE_EC_CS \n🌐 GATE Wallah - ME, CE & XE :  https://youtube.com/@GATEWallah_ME_CE_XE\n🌐 GATE English : https://youtube.com/@GATEWallahEnglish\n------------------------------------------------------- \n📌 PHYSICS WALLAH SOCIAL MEDIA - \n🌐 Telegram: https://t.me/Physics_Wallah_Official_... \n🌐 Facebook: https://www.facebook.com/physicswallah \n🌐 Instagram: https://www.instagram.com/physicswall... \n🌐 Twitter : https://twitter.com/physics__wallah \n🌐 Linkedin: https://www.linkedin.com/company/7808... \n------------------------------------------------------- \n📌 For any Queries or Complaints visit: https://bit.ly/PW_Queries OR give a Missed Call on 07019-243-492",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5_5ZmbVVlOA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5_5ZmbVVlOA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5_5ZmbVVlOA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/5_5ZmbVVlOA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/5_5ZmbVVlOA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "w52ofnpkA_eG4BHNVQvYgXp9vKQ",
        "id": "MTUxNjkwODA2NDQ0MTY5MDgwNjQ0NDAwMDgwNQ",
        "snippet": {
          "publishedAt": "2023-07-31T12:27:24+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Get LinkedIn Premium For Free As a College Student 😋 #physicswallah #linkedin",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/c7SirDKWmxA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/c7SirDKWmxA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/c7SirDKWmxA/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/c7SirDKWmxA/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/c7SirDKWmxA/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "sZfp6MFeLHCdwllA1Dy2ijW0pKg",
        "id": "MTUxNjkwNzI0MDQ4MTY5MDcyNDA0ODAwMDA4Mg",
        "snippet": {
          "publishedAt": "2023-07-30T13:34:08+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Get Job Through One E-Mail 🤯 #physicswallah #coding #job",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/63j03dAeR0k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/63j03dAeR0k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/63j03dAeR0k/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/63j03dAeR0k/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/63j03dAeR0k/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
          "type": "upload"
        }
      },
      {
        "kind": "youtube#activity",
        "etag": "LtRYk_PX5O-2MCDK7wmS_cEJKFo",
        "id": "MTUxNjkwNjMzODIzMTY5MDYzMzgyMzAwMDgwOQ",
        "snippet": {
          "publishedAt": "2023-07-29T12:30:23+00:00",
          "channelId": "UCDrf0V4fcBr5FlCtKwvpfwA",
          "title": "Earn Lakhs Through Freelancing 🤯 Best Trick #physicswallah #skills",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nsxxOV0aAMI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nsxxOV0aAMI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nsxxOV0aAMI/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/nsxxOV0aAMI/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/nsxxOV0aAMI/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "College Wallah",
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