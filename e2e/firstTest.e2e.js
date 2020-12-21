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

});
