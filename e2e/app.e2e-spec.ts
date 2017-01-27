import { PdxJuniorChapterAngular2jsPage } from './app.po';

describe('pdx-junior-chapter-angular2js App', function() {
  let page: PdxJuniorChapterAngular2jsPage;

  beforeEach(() => {
    page = new PdxJuniorChapterAngular2jsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
