import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import Home from './views/home.vue';
import Schedule from './views/schedule.vue';
import Blogs from './views/blogs.vue';
import Blog from './views/blog.vue';
import './index.css';

const app = createApp(App);

const routes = [
  { path: '/', component: Home },
  { path: '/schedule', component: Schedule },
  { path: '/blogs', component: Blogs },
  { path: '/blogs/:id', component: Blog },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');
