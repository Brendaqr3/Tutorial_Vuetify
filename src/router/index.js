import { createWebHistory, createRouter } from "vue-router";
import Compras from '../components/Compras_com.vue'
import Ventas from '../components/Ventas_com.vue'
import Usuario from '../components/Usuario_com.vue'
import Login from '../components/Crear_Usuario.vue'


const routes =[
    {
        path:"/",
        name: "Compras",
        component: Compras
    },
    {
        path:"/Ventas",
        name: "Ventas",
        component: Ventas
    },
    {
        path:"/Usuario",
        name:"Usuario",
        component:Usuario

    },
    {
        path:"/Login",
        name:"Login",
        component:Login
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router