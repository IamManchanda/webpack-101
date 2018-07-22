const makeColorStyle = (color) => `color: ${color}`;
const redButtonStyle = makeColorStyle('red');
const blueButtonStyle = makeColorStyle('blue');

export { redButtonStyle, blueButtonStyle };
export default makeColorStyle;
