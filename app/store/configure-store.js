import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import rootReducer from '../reducers/index'

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk),
	devTools()
)(createStore)

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState)

	return store
}