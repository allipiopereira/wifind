import Vue from 'vue'
import VueRouter from 'vue-router'

import WiFind from '../views/WiFind'
import Pagamento from '../views/Pagamento'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'WiFind',
            component: WiFind
        },
        {
            path: '/:id',
            name: 'Pagamento',
            component: Pagamento
        }
    ]
})

export default router