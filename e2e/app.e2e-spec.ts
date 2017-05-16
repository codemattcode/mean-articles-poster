import { MeanArticlesPosterPage } from './app.po';

describe('mean-articles-poster App', () => {
  let page: MeanArticlesPosterPage;

  beforeEach(() => {
    page = new MeanArticlesPosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
