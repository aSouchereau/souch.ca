import { ViteSSG } from 'vite-ssg';
import './style.css'
import App from './App.vue'
import Index from "./components/Pages/Index.vue";
import Gallery from "./components/Pages/Gallery.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/gallery', component: Gallery},
];
export const createApp = ViteSSG(
    App,
    { routes },
);