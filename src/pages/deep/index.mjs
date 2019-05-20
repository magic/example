export const state = {
  title: 'h1 deep/index',
  htmlTitle: 'testing the html title tag',
}

export const actions = {
  deepAction: state => ({ test: !state.test }),
}

export const View = state => [h1(state.title), div('page content'), Count(state)]
