import {
  NUM_TO_ALGEBRAIC_LETTER_MAP,
  NUM_TO_ALGEBRAIC_NUM_MAP,
  ALGEBRAIC_LETTER_TO_NUMBER,
  ALGEBRAIC_NUM_TO_NUM
} from './Constants.js';

export const generateRandomPosition = () => {
  const x = Math.floor(Math.random() * 8);
  const y = Math.floor(Math.random() * 8);
  return { x, y };
};

export const xyToAlgebraic = ({ x, y }) => {
  const letter = NUM_TO_ALGEBRAIC_LETTER_MAP[y];
  const number = NUM_TO_ALGEBRAIC_NUM_MAP[x];
  return `${letter}${number}`;
};

export const algebraicToXY = (algPosition) => {
  const x = ALGEBRAIC_NUM_TO_NUM[algPosition.charAt(1)];
  const y = ALGEBRAIC_LETTER_TO_NUMBER[algPosition.charAt(0)];
  return { x, y };
};
