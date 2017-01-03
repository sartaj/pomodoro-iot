import SamsungRemote from 'samsung-remote';

const remote = new SamsungRemote({
  // TODO: Extract to config
  ip: '192.168.0.4', // required: IP address of your Samsung Smart TV
});

function render(keys) {
  if (!keys) return;

  keys.forEach(key => {
    remote.send(`KEY_${key.toUpperCase()}`, () => {});
  });
}

export default remote;
export { render };
