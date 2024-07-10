import {AfterFetchContext, useFetch, UseFetchOptions} from "@vueuse/core";

/*
* Since rest of photo data is included in album response, we only need to fetch image urls and associated file information.
*/
export function useImage(photoId: string | undefined)  {
    const options: UseFetchOptions = {
        afterFetch(ctx: AfterFetchContext) {
            ctx.data = ctx.data.size_variants;
            return ctx;
        },
    }
    const { isFetching, isFinished, error, data } = useFetch("/api/Photo::get", options)
        .post({
            photoId: photoId
        },)
        .json();

    return { isFetching, isFinished, error, data };
}