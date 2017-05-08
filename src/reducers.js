// Lets us use pipe syntax eg. pipe(f,g,h)(x)
const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)


const types = {
    TOGGLE_VISIBLE: 'TOGGLE_VISIBLE',
}


const actions = {
    toggleVisibility: () => ({
        type: types.TOGGLE_VISIBLE,
    })
}


const visibilityReducer = (action) => (state) =>
{
  switch(action.type)
  {
    case types.TOGGLE_VISIBLE:      return {...state, visible: !state.visible}
    default:                        return {...state}
  }
}


const reducer = (state,action) =>
    pipe(
        visibilityReducer(action),
    )(state)


module.exports = {
    reducer,
    actions,
}