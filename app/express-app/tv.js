const IP_ADDRESS = '192.168.2.11';
const SamsungRemote = require('samsung-remote');
const remote = new SamsungRemote({
    ip: IP_ADDRESS // required: IP address of your Samsung Smart TV
});

function filterKeys(key) {
    switch(key) {
        case 'source':
            return 'KEY_HDMI';
            break;
        case 'off':
            return 'KEY_OFF';
            break;
        case 'up':
            return 'KEY_VOLUP';
            break;
        case 'down':
            return 'KEY_VOLDOWN';
            break;
        default:
            return `KEY_${key.toUpperCase()}`;
    }
}

export function send(key) {
    const keyToSend = filterKeys(key || 'source');

    remote.send(keyToSend, function callback(err) {


        if (err) {
            throw new Error(err);
        } else {
            // command has been successfully transmitted to your tv
        }
    });



    // check if TV is alive (ping)
    remote.isAlive(function(err) {
        if (err) {
            throw new Error('TV is offline.');
        } else {
            // console.log(`TV Command: ${keyToSend}`);
        }
    });
}
