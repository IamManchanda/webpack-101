const makeColorStyle = (color) => `color: ${color}`;
const redButton = makeColorStyle('red');
const blueButton = makeColorStyle('blue');
const greenButton = makeColorStyle('green');

exports.redButton = redButton;
exports.blueButton = blueButton;
exports.greenButton = greenButton;

module.exports = makeColorStyle;
