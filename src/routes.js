import Home from './components/Home.vue';
import proposalPage from './components/proposal/Page.vue';
import proposalForm from './components/proposal/Form.vue';


export const routes = [
    {path: '/', component: Home},
    {path: '/proposal/form', component: proposalForm},
    {path: '/proposal/:id', component: proposalPage}
];

