import nav from './nav';
import center, { top, bottom } from './footer';
import makeButton from './button';
import makeColorStyle from './button-styles';

console.log(
  nav(),
  top,
  bottom,
  center,
  makeButton('Yo'),
  makeColorStyle('cyan'),
);