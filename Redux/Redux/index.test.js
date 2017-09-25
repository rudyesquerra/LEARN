const Redux = require('redux')

const initialState = {
	tire: {pressure: 0, rotation: 0},
	crank: {rotation: 0},
	seat: {height: 0}
}

const tireReducer = (currentState, action) => {
	if (currentState == undefined) {
		return initialState.tire
	}

	switch(action.type){
		case 'INCREASE':{
			return Object.assign(
				{},
				currentState,
				{pressure: currentState.tire.pressure + 10}
			)
			console.log(currentState.tire.pressure);
			break
		}
	default:
		return currentState
	}
}

const crankReducer = (currentState, action) => {
	if (currentState == undefined) {
		return initialState.crank
	}

	switch(action.type){
	default:
		return currentState
	}
}

const seatReducer = (currentState, action) => {
	if (currentState == undefined) {
		return initialState.seat
	}

	switch(action.type){
	default:
		return currentState
	}
}

const reducers = Redux.combineReducers({
	tire: tireReducer,
	crank: crankReducer,
	seat: seatReducer
})

const store = Redux.createStore(reducers, initialState)

//Action
// const addPressureAction = ()=>{
// 	return {type: 'INCREASE'}
// }

describe("initialState setup", ()=>{
	it('tire should be setup', ()=>{
		let state = store.getState()
		expect(state.tire.pressure).toEqual(0)
		expect(state.tire.rotation).toEqual(0)
	})

	it('crank should be setup', ()=>{
		let state = store.getState()
		expect(state.crank.rotation).toEqual(0)
	})

	it('seat should be setup', ()=>{
		let state = store.getState()
		expect(state.seat.height).toEqual(0)
	})

	it('increases tire pressure', ()=>{
		let state = store.getState()
		expect(state.tire.pressure).toEqual(0)
		store.dispatch(tireReducer(state, {type: 'INCREASE'}))
		state = store.getState()
		expect(state.tire.pressure).toEqual(10)
	})
})
