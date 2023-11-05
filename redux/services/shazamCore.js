import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath :'shzamcoreApi',
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key','35a09fd3e8msh4d0b336e78c6588p14daa4jsn77d86bd1ae71')
                return headers;
            }
        }),
        endpoints:(builder)=>({

            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
                getTopCharts:builder.query({query:()=> '/charts/world'}),
                getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
                getSongRelated: builder.query({query: ({
                    songid}) => `tracks/related?track_id=${songid}`}),
                    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
                
                getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
                
                
        })
    })
export const {
    useGetSongsByGenreQuery,
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;