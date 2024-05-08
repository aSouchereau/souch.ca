import {AfterFetchContext, useFetch} from "@vueuse/core";

export function useImage(photoId: string | undefined)  {
    const options = {
        body: {
            photoId: photoId
        },
        afterFetch(ctx: AfterFetchContext) {
            ctx.data = ctx.data.size_variants
            return ctx;
        },
    }
    const { isFetching, isFinished, error, data } = useFetch("/api/Photo::get", options).post().json();

    return { isFetching, isFinished, error, data };
}