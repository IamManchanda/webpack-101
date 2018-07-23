import './footer.css';
import './button.css';
import webpackLogo from './webpack-logo.jpg';
import makeButton from './button';
import footer, { top, bottom } from './footer';
import makeColorStyle, { redButtonStyle, blueButtonStyle } from './button-styles';
import makeImage from './image';

const loadWebpackLogo = makeImage(webpackLogo);
console.log(loadWebpackLogo);

const button = makeButton('Yay a Button!');
button.style = makeColorStyle('HotPink');
document.body.appendChild(button);

top.innerText = 'Top of Footer';
top.style = redButtonStyle;
footer.appendChild(top);

bottom.innerText = 'Bottom of Footer';
bottom.style = blueButtonStyle;
footer.appendChild(bottom);

document.body.appendChild(footer);
document.body.appendChild(loadWebpackLogo);
