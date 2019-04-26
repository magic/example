module.exports = {
  state: {
    title: 'h1 indexpage',
    description: 'custom description',
  },

  View: (state, actions) => [
    h1(state.title),
    div([
      p('index page content'),
      p('can stretch multiple lines'),
      ul([li('and contain'), li('lists of content')]),
    ]),

    Count,

    h2('local var:'),
    p('the variable determining the color is local to this page.'),
    Wrapper,
  ],
}
