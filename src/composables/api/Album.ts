import {useFetch} from "@vueuse/core";

export function useAlbums() {
    const { isFetching, isFinished, error, data } = useFetch("/api/Albums", {
        afterFetch(ctx) {
            let albums = ctx.data.albums;
            albums = albums.concat(ctx.data.shared_albums);
            albums = albums.concat(ctx.data.tag_albums);
            ctx.data = albums;
            return ctx;
        },
    }).get().json();

    return { isFetching, isFinished, error, data };
}

export function useAlbum(albumId: string)  {
    const { isFetching, isFinished, error, data } = useFetch(`/api/Album?album_id=${albumId}`).get().json();

    return { isFetching, isFinished, error, data };
}
