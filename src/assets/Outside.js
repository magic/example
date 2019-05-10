const Outside = (state, actions) =>
  div({ class: `Outside${state.outside.localVar ? ' Test' : ''}` }, [
    Inside,
    button({ onclick: actions.wrapperAction }, [state.outside.buttonText, state.buttonGlobal]),
  ])

Outside.state = {
  localVar: false,
  buttonText: 'click',
  buttonGlobal: ' me!',
}

Outside.actions = {
  wrapperAction: () => state => ({
    outside: { ...state.outside, localVar: !state.outside.localVar },
  }),
}

Outside.style = {
  '.Outside': {
    color: 'orange',

    '&.Test': {
      color: 'green',
    },
  },
}

Outside.global = {
  state: {
    buttonGlobal: true,
  },
  actions: {
    wrapperAction: true,
  },
}

module.exports = Outside
