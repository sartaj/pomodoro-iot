const MOOD_MAP = {
  "shortBreak": {
    "lights": {
      "h": 15300,
      "b": 100
    },
    "music": [
      "spotify:user:spotify_germany:playlist:0yZug2eQuH7l2Ge26ZI1Do",
      "spotify:user:spotify:playlist:63dDpdoVHvx5RkK87g4LKk",
      "spotify:user:spotify:playlist:1IQ5Nsj6d90qqEonwBQ8nh",
      "spotify:user:sartajtx:playlist:0oEwtuwQfEAAuNAokUuUg0"
    ]
  },
  "netflix and chill": {
    "lights": {
      "h": 15300,
      "b": 100
    },
    "music": false
  },
  "pomodoro": {
    "lights": {
      "h": 40000,
      "b": 254
    },
    "music": [
      "spotify:user:spotify:playlist:3vnMvai9y76U8WlPRNICsZ",
      "spotify:user:miggiesmalls:playlist:69Sk0ME4PgFDPgit7401Dh",
      "spotify:user:spotify_germany:playlist:40jKmqK6sjOXe3NU0TSnXF",
      "spotify:user:spotify:playlist:4G4mLUpS6LAdqG31IfKGRm",
      "spotify:user:spotifydiscover:playlist:5U0TjnRPufg5J5xb05X5Rx"
    ]
  },
  "party": {
    "lights": "colorroll",
    "music": [
      "spotify:user:1233953565:playlist:2NTGTMmlMGXumQTlyXVmFQ",
      "spotify:user:spotify_espa%C3%B1a:playlist:4w9QcTsGB4w1ha2cUorYrC"
    ]
  },
  "off": {
    "lights": false,
    "music": false,
    "tv": ["poweroff"]
  },
  "on": {
    "lights": true
  },
  "wind down": {
    "timer": [3000],
    "lights": {}
  }
}

export default function(mood) {
  return MOOD_MAP[mood];
};
