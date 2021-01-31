const t = TrelloPowerUp.iframe();

t.render(() => t.get('list')).then((x) => {
  console.log(x);
});
