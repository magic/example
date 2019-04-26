const state = {
  title: 'h1 deep/index',
  htmlTitle: 'testing the html title tag',
}

const actions = {
  deepAction: state => ({ test: !state.test }),
}

const View = (state, actions) => [h1(state.title), div('page content'), Count]

module.exports = {
  state,
  actions,
  View,
}
