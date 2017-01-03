import exeq from 'exeq';

export default function render(play) {
  const randomPlaylist = play[Math.floor(Math.random() * play.length)];
  switch (play) {
    case undefined:
      break;
    case false:
      exeq("osascript -e 'tell application \"spotify\" to pause'");
      break;
    default:
      exeq(`osascript -e 'tell application "spotify" to play track "${randomPlaylist}"'`);
      break;
  }
}
