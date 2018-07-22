import './footer.css';
import makeButton from './button';
import footer, { top, bottom } from './footer';
import makeColorStyle, { redButtonStyle, blueButtonStyle } from './button-styles';

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
