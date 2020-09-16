//
// Sample outputs
//

import { calculateRoman } from "./main"


describe('Roman-Calculator', () => {
  it('Calculate XXII', () => {
    // given
    const roman1 = 'XX';
    const roman2 = 'II';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('XXII');
  });

  it('Calculate IV', () => {
    // given
    const roman1 = 'II';
    const roman2 = 'II';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('IV');
  });

  it('Calculate LXXIV', () => {
    // given
    const roman1 = 'XIV';
    const roman2 = 'LX';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('LXXIV');
  });

  it('Calculate DD', () => {
    // given
    const roman1 = 'D';
    const roman2 = 'D';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('M');
  });
});
