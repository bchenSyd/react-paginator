import { gotoStorybook } from '../../../utils/e2e-support/support';
import Stories from '../stories/switch.stories';

// need to create screenshots for 'Basic' after PR is merged
describe('Switch', () => {
  before(() => {
    gotoStorybook(Stories.title, 'Basic');
  });

  it('should match ref images Basic', () => {
    browser.verifyElementScreenshot();
  });

  it('should match ref image of clicked switch Basic', () => {
    $('#switchToClick').click();
    browser.pause(500);
    browser.verifyElementScreenshot();
  });
});

describe('Switch Size', () => {
  before(() => {
    gotoStorybook(Stories.title, 'Sizes');
  });

  it('should match ref image Sizes', () => {
    browser.verifyElementScreenshot();
  });
});

describe('Switch Responsive', () => {
  before(() => {
    gotoStorybook(Stories.title, 'Responsive');
  });

  it('should match ref image Responsive (lg)', () => {
    browser.setViewportSize({ width: 1201, height: 700 });
    browser.verifyElementScreenshot();
  });

  it('should match ref images Responsive (md)', () => {
    browser.setViewportSize({ width: 993, height: 700 });
    browser.verifyElementScreenshot();
  });

  it('should match ref images Responsive (sm)', () => {
    browser.setViewportSize({ width: 769, height: 700 });
    browser.verifyElementScreenshot();
  });

  it('should match ref images Responsive (xs)', () => {
    browser.setViewportSize({ width: 479, height: 700 });
    browser.verifyElementScreenshot();
  });
});
