export default (t, list) => {
  console.log(list);
  t.modal({
    title: 'Create Shopping List',
    url: 'options.html',
  });
};

// popup to choose which cards to use, default select all
// also input to edit name of shopping list card
// list = { name, id }
