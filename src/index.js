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
  'list-actions': (t) => t.list('name', 'id').then((list) => ([{
    text: 'Create Shopping List',
    callback: (tt) => {
      console.log(list);
      console.log(tt);
      // trello.modal({
      //   title: 'Create Shopping List',
      //   url: 'shoppingList/options.html',
      // });
    },
  }])),
});

// TODO
// font awesome
// prettier
// tests

// something happened with the heroku deploy and it isn't serving up the pages
// wtf
