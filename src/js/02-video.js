import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const startTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(startTime || 0);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (data) { 
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime))
}