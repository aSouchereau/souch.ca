import {AfterFetchContext, useFetch, UseFetchOptions} from "@vueuse/core";

export function useImage(photoId: string | undefined)  {
    const options: UseFetchOptions = {
        afterFetch(ctx: AfterFetchContext) {
            ctx.data = ctx.data.size_variants
            return ctx;
        },
    }
    const { isFetching, isFinished, error, data } = useFetch("/apiv1/Photo::get", options)
        .post({
            photoId: photoId
        },)
        .json();

    return { isFetching, isFinished, error, data };
}