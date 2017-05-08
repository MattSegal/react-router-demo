// Lets us use pipe syntax eg. pipe(f,g,h)(x)
const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)


const types = {
    NOTHING: 'NOTHING',
}


const actions = {

}


const nothingReducer = (action) => (state) =>
{
  switch(action.type)
  {
    case types.NOTHING:     return {...state}
    default:                return {...state}
  }
}


const reducer = (state,action) =>
    pipe(
        nothingReducer(action),
    )(state)


module.exports = {
    reducer,
    actions,
}