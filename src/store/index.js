import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./apis/githubApi";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
	},
	middleware: (getDefaultMiddleWare) => {
		return getDefaultMiddleWare().concat(githubApi.middleware);
	},
});

setupListeners(store.dispatch);

export {
	useFetchRepoQuery,
	useFetchAddDelActivityQuery,
} from "./apis/githubApi";
