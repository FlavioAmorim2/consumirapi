import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'react-base',
            storage,
            whitelist: ['example'],
        },
        reducers
    );

    return persistedReducer;
};
