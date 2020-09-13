const {
  ALGEBRAIC_TO_NUMBER_MAP,
  NUMBER_TO_ALGEBRAIC_MAP
} = require('./Constants.js');

module.exports.algebraicToXY = (algPosition) => {
  const x = algPosition.charAt(0);
  const y = parseInt(algPosition.charAt(1));

  return { x: NUMBER_TO_ALGEBRAIC_MAP[x], y: y };
};

module.exports.xyToAlgebraic = ({ x, y }) => {
  return `${ALGEBRAIC_TO_NUMBER_MAP[x]}${y}`;
};
