export const state = {
  title: 'h1 indexpage',
  description: 'custom description',
}

export const View = state => [
  h1(state.title),
  div([
    p('index page content'),
    p('can stretch multiple lines'),
    ul([li('and contain'), li('lists of content')]),
  ]),

  Count(state),

  h2('local var:'),
  p('the variable determining the color is local to this page.'),
  Outside(state),
]