import mask from '../../src/index.js'

describe('milliseconds to hour', () => {
  test('Mascara de Milesegundos só hora', () => {
   mask.millisecondsToHour('')
   mask.millisecondsToHour(1587647835661)
  });
});