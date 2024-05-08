import { ViteSSG } from 'vite-ssg';
import './style.css'
import App from './App.vue'
import Index from "./components/Pages/Index.vue";
import Gallery from "./components/Pages/Gallery.vue";
import Album from "@/components/Pages/Album.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/gallery', component: Gallery},
    { path: '/album', component: Album },
];
export const createApp = ViteSSG(
    App,
    { routes },
);