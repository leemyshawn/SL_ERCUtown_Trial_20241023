var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc_escalator",
      "name": "ERC_Escalator",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.591284974535693,
        "pitch": -0.05194637760470755,
        "fov": 1.4758882578279586
      },
      "linkHotspots": [
        {
          "yaw": -2.350539349053438,
          "pitch": -0.074554159809054,
          "rotation": 3.141592653589793,
          "target": "2-tembusu-tree"
        },
        {
          "yaw": -0.6222034575104587,
          "pitch": 0.038831800614136824,
          "rotation": 3.141592653589793,
          "target": "1-erc_starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.301443120226619,
          "pitch": 0.05298684702659173,
          "title": "ERC drop off point",
          "text": "Nearest drop off point to starbucks :)"
        },
        {
          "yaw": -1.8457520380913195,
          "pitch": -0.06181163308832538,
          "title": "ERC Security office",
          "text": "Report here if you see anything suspicious"
        }
      ]
    },
    {
      "id": "1-erc_starbucks",
      "name": "ERC_Starbucks",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.7943526707934092,
        "pitch": 0.07852321198604884,
        "fov": 1.4758882578279586
      },
      "linkHotspots": [
        {
          "yaw": 2.523324696183886,
          "pitch": -0.3341856435174613,
          "rotation": 0,
          "target": "0-erc_escalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0015393207687,
          "pitch": 0.08004638817482324,
          "title": "Starbucks",
          "text": "Open 24 hours during the semester!"
        },
        {
          "yaw": 0.40260664431324855,
          "pitch": 0.11553823676846697,
          "title": "24/7 study area",
          "text": "Open to all students (Non-NUS included!!)"
        },
        {
          "yaw": 1.9650819697792636,
          "pitch": -0.01767811823540555,
          "title": "U Town Green",
          "text": "Field where many student events are organised!"
        },
        {
          "yaw": -0.875017634866218,
          "pitch": 0.05181904627284872,
          "title": "24/7 NUS Library book drop",
          "text": "Return your NUS library books here! No borrowing here though... :/"
        }
      ]
    },
    {
      "id": "2-tembusu-tree",
      "name": "Tembusu Tree",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.960549690219306,
        "pitch": -0.05258967639857559,
        "fov": 1.4758882578279586
      },
      "linkHotspots": [
        {
          "yaw": -2.8020812110968656,
          "pitch": 0.029131253366950105,
          "rotation": 4.71238898038469,
          "target": "0-erc_escalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9643687714675035,
          "pitch": 0.33173811066560255,
          "title": "Tembusu Tree",
          "text": "Name associated to one of the NUS residences in UTown."
        },
        {
          "yaw": 0.2656484232336602,
          "pitch": 0.2635024212379182,
          "title": "Messy tree",
          "text": "Needs to be trimmed"
        }
      ]
    }
  ],
  "name": "SL_ERC_UTown_trial_20241023",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
