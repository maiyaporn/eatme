import { EatmePage } from './app.po';

describe('eatme App', function() {
  let page: EatmePage;

  beforeEach(() => {
    page = new EatmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
