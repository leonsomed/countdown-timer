import './styles.css';
import { BoxFactory } from './box';

const container = document.createElement('div');
container.setAttribute('class', 'container');

document.body.appendChild(container);

const box1 = BoxFactory(container);
const box2 = BoxFactory(container);
const box3 = BoxFactory(container);
const box4 = BoxFactory(container);

const targetTimestamp = (new Date('2019-08-13T21:53:00.000Z')).getTime();

setInterval(() => {
    let diff = targetTimestamp - Date.now();
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (diff > 0) {
        days = Math.floor(diff / 1000 / 60 / 60 / 24);
        diff = diff % (1000 * 60 * 60 * 24);

        hours = Math.floor(diff / 1000 / 60 / 60);
        diff = diff % (1000 * 60 * 60);

        minutes = Math.floor(diff / 1000 / 60);
        diff = diff % (1000 * 60);

        seconds = Math.floor(diff / 1000);
        diff = diff % 1000;
    }

    box1({ title: days, subtitle: 'Days' });
    box2({ title: hours, subtitle: 'Hours' });
    box3({ title: minutes, subtitle: 'Minutes' });
    box4({ title: seconds, subtitle: 'Seconds' });
}, 1000);
