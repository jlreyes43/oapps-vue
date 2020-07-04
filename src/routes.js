import Home from './components/Home.vue';
import proposalPage from './components/proposal/page/Page.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/proposal/:id', component: proposalPage}
];

