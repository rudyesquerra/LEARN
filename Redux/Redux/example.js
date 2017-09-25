var Redux = require('redux')

//Reducer
const reducer = (currentState, action) =>{
  switch(action.type){
    case "ADD":{
      return Object.assign(
        {},
        currentState,
        {count: currentState.count + 1}
      )
      break
    }

    default:
      return currentState
  }
}

//Store
const initialState = {count: 0}
const store = Redux.createStore(reducer, initialState)

//Action
const addAction = ()=>{
  return({type: 'ADD'})
}

store.dispatch(addAction())
console.log(store.getState())

//UI
// describe("Redux standalone",()=>{
//   test("Can dispatch action to store", ()=>{
//     //Initial state: Our count starts at 0
//     let state = store.getState()
//     expect(state.count).toBe(0)
//
//     //Dispatching an action kicks off an update to state
//     store.dispatch(addAction())
//
//     //Updated state: After we dispatch the action, state changes
//     state = store.getState()
//     expect(state.count).toBe(1)
//   })
// })
