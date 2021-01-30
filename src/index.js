TrelloPowerUp.initialize({
  'card-buttons': () => ([{
    icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
    text: 'Estimate Size',
    callback(t) {
      return t.popup({
        title: 'Estimation',
        url: 'estimate.html',
      });
    },
  }]),
  'board-buttons': () => ([
    {
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Create Shopping List',
    },
  ]),
});
