describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await expect(element(by.text('OIII'))).toBeVisible();
  });

  it('should show a dioguinho ai image', async () => {
    await expect(element(by.id('dioguinho'))).toBeVisible();
  });

  it('should not appear purple bubble on screen', async () => {
    await expect(element(by.id('purpo'))).toBeNotVisible();
  });

  it('should appear purple bubble on screen', async () => {
    await expect(element(by.id('apertei'))).toBeVisible();
  });

  it('should click the red button then appear the purple bubble', async () => {
    await element(by.id('apertei')).tap();
    await expect(element(by.id('purpo'))).toBeVisible();
  });

});
