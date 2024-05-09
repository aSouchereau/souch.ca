import {useFetch} from "@vueuse/core";

export function useAlbums() {
    const { isFetching, isFinished, error, data } = useFetch("/api/Albums::get", {
        afterFetch(ctx) {
            let albums = ctx.data.albums;
            albums = albums.concat(ctx.data.shared_albums);
            albums = albums.concat(ctx.data.tag_albums);
            ctx.data = albums;
            return ctx;
        },
    }).post().json();

    return { isFetching, isFinished, error, data };
}

export function useAlbum(albumId: string)  {
    const body = {
        albumId: albumId,
    }
    const { isFetching, isFinished, error, data } = useFetch("/api/Album::get").post(body).json();

    return { isFetching, isFinished, error, data };
}
