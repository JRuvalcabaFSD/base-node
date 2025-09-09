describe('smoke test', () => {
  it('smoke test', async () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const { main } = await import('@/app');

    main();

    expect(consoleSpy).toHaveBeenCalledWith('Hola, mundo');
  });
});
