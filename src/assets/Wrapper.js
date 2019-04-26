const Wrapper = (state, actions) =>
  div({ class: `Wrapper${state.wrapper.localVar ? ' Test' : ''}` }, [
    Inside,
    button({ onclick: actions.wrapperAction }, [state.wrapper.buttonText, state.buttonGlobal]),
  ])

Wrapper.state = {
  localVar: false,
  buttonText: 'click',
  buttonGlobal: ' me!',
}

Wrapper.actions = {
  wrapperAction: () => state => ({
    wrapper: { ...state.wrapper, localVar: !state.wrapper.localVar },
  }),
}

Wrapper.style = {
  '.Wrapper': {
    color: 'orange',

    '&.Test': {
      color: 'green',
    },
  },
}

Wrapper.global = {
  state: {
    buttonGlobal: true,
  },
  actions: {
    wrapperAction: true,
  },
}

module.exports = Wrapper
