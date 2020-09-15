const {
  ALGEBRAIC_TO_NUMBER_MAP,
  NUMBER_TO_ALGEBRAIC_MAP
} = require('./Constants.js');

/**
 * Converte uma posição em denotação algébrica para posição em [X][Y]
 * considerando uma matriz 8x8.
 * @param {string} algPosition posição em denotação algébrica (ex.: B3)
 */
module.exports.algebraicToXY = (algPosition) => {
  const x = algPosition.charAt(0);
  const y = parseInt(algPosition.charAt(1));

  return { x: NUMBER_TO_ALGEBRAIC_MAP[x], y: y };
};

/**
 * Converte uma posição em denotação XY denotação algébrica
 * considerando uma matriz 8x8.
 * @param {object} xyPosition posição em denotação XY (ex.: {x: 1, y:2})
 */
module.exports.xyToAlgebraic = (xyPosition) => {
  const { x, y } = xyPosition;
  return `${ALGEBRAIC_TO_NUMBER_MAP[x]}${y}`;
};
