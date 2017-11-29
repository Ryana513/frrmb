import { combineReducer } from 'redux'
import { reducer as formReducer } from 'redux-form';
import PostReducer from './PostReducers';

const rootReducer = combineReducers({
    form: formReducer
    posts: PostReducer
});

export default rootReducer;