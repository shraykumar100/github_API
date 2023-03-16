import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const githubApi = createApi({
	reducerPath: "searchRepo",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com",
	}),
	endpoints(builder) {
		return {
			fetchRepo: builder.query({
				query: (page) => {
					return {
						url: "/search/repositories",
						params: {
							q: "created:>2017-10-22",
							sort: "stars",
							order: "desc",
							page: page,
						},
						method: "GET",
					};
				},
			}),
			fetchAddDelActivity: builder.query({
				query: ({ owner, repo }) => {
					return {
						url: `/repos/${owner}/${repo}/stats/code_frequency`,
						method: "GET",
						headers: {
							Authorization:
								"token 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",
						},
					};
				},
			}),
		};
	},
});

export const { useFetchRepoQuery, useFetchAddDelActivityQuery } = githubApi;
export { githubApi };
