const Count = (state, actions) =>
  div([
    h1('Counter'),
    div(`count: ${state.count}`),
    div("this counter globally shares it's state with all other counters"),
    button({ onclick: () => actions.count(1) }, '+1'),
    button({ onclick: () => actions.count(10) }, '+10'),
    button({ onclick: () => actions.count(-1) }, '-1'),
    button({ onclick: () => actions.count(-10) }, '-10'),
  ])

Count.state = {
  count: 0,
}

Count.actions = {
  count: mod => state => ({ count: state.count + mod }),
}

Count.global = {
  state: {
    count: true,
  },
  actions: {
    count: true,
  },
}

module.exports = Count
