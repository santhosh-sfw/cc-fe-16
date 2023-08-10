import { SkipUnderscorePipe } from './skip-underscore.pipe';

describe('SkipUnderscorePipe', () => {
  it('create an instance', () => {
    const pipe = new SkipUnderscorePipe();
    expect(pipe).toBeTruthy();
  });
});
