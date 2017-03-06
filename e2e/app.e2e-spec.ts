import { JokesUIPage } from './app.po';

describe('jokes-ui App', () => {
  let page: JokesUIPage;

  beforeEach(() => {
    page = new JokesUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
