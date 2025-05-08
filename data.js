var APP_DATA = {
  "scenes": [
    {
      "id": "0-giri-karlama",
      "name": "Giriş Karşılama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8303344906033168,
        "pitch": 0.03208124721368577,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.08835154092564323,
          "pitch": 0.2767331767077046,
          "rotation": 5.497787143782138,
          "target": "1-toplant-salonu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-toplant-salonu",
      "name": "Toplantı Salonu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.965835015273095,
        "pitch": 0.34110557940675434,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.42300820681850126,
          "pitch": 0.5676088351965429,
          "rotation": 0.7853981633974483,
          "target": "0-giri-karlama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
