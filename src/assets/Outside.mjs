export const View = ({ state }) =>
  div({ class: `Outside${state.outside.localVar ? ' Test' : ''}` }, [
    Inside({ state }),
    button({ onclick: [actions.wrapperAction] }, [state.outside.buttonText, state.buttonGlobal]),
  ])

export const state = {
  localVar: false,
  buttonText: 'click',
  buttonGlobal: ' me!',
}

export const actions = {
  wrapperAction: state => ({
    ...state,
    outside: { ...state.outside, localVar: !state.outside.localVar },
  }),
}

export const style = {
  '.Outside': {
    color: 'orange',

    '&.Test': {
      color: 'green',
    },
  },
}

export const global = {
  state: {
    buttonGlobal: true,
  },
  actions: {
    wrapperAction: true,
  },
}
