import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk),
)(createStore)

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState)

	return store
}