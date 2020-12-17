const t = TrelloPowerUp.iframe();

window.estimate.addEventListener('submit', (event) => {
  event.preventDefault();
  return t.set('card', 'shared', 'estimate', window.estimateSize.value)
    .then(() => {
      t.closePopup();
    });
});

t.render(() => t.get('card', 'shared', 'estimate')
  .then((estimate) => {
    window.estimateSize.value = estimate;
  })
  .then(() => {
    t.sizeTo('#estimate').done();
  }));
