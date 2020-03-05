export const View = ({ state = {} }) =>
  div([
    h1('Counter'),
    div(`count: ${state.count}`),
    div("this counter globally shares it's state with all other counters"),
    button({ onclick: [actions.count, 1] }, '+1'),
    button({ onclick: [actions.count, 10] }, '+10'),
    button({ onclick: [actions.count, -1] }, '-1'),
    button({ onclick: [actions.count, -10] }, '-10'),
  ])

export const state = {
  count: 0,
}

export const actions = {
  count: (state, mod) => ({ ...state, count: state.count + mod }),
}

export const global = {
  state: {
    count: true,
  },
  actions: {
    count: true,
  },
}
