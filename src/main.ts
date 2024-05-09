import { ViteSSG } from 'vite-ssg';
import './style.css'
import App from './App.vue'
import Index from "./components/Pages/Index.vue";
import Gallery from "./components/Pages/Gallery.vue";
import Album from "@/components/Pages/Album.vue";
import NotFound from "@/components/Pages/NotFound.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/gallery', component: Gallery},
    { path: '/album/:id', component: Album },
    { path: '/404', component: NotFound},
    { path: '/:pathMatch(.*)*', redirect: '/404' },
];
export const createApp = ViteSSG(
    App,
    { routes },
);