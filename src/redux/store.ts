import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import allReducers from "./reducers"

const middlewares = [thunk, logger]
const composeEnhancers = compose

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["CheckAuthReducer"],
}
const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor }
