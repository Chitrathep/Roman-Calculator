//
// Sample outputs
//

import { calculateRoman } from "./main"


describe('NO.1', () => {
  it('XXII', () => {
    // given
    const roman1 = 'XX';
    const roman2 = 'II';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('XXII');
  });

  it('IV', () => {
    // given
    const roman1 = 'II';
    const roman2 = 'II';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('IV');
  });
});
