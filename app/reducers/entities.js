import merge from 'loadsh/object/merge';

const initialState = {
	goods: {}
};

export default function entities(state = initialState, action) {
	if (action.entities) {
		return merge({}, state, action.entities);
	}

	return state;
}