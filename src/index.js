import { createShoppingList } from './shoppingList';

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
    callback: (trello) => createShoppingList(trello, list),
  }])),
  // popup to choose which cards to use, default select all
  // also input to edit name of shopping list card
  // list = { name, id }
});

// TODO
// font awesome
// prettier
