import { createRouter, createWebHistory } from 'vue-router'
// import Peliculas from '../views/Peliculas.vue'
import Favoritas from '../views/Favoritas.vue'
import Recomendadas from '../views/Recomendadas.vue'
import DetallesPelicula from '../views/DetallesPelicula.vue'
import Buscar from '../views/Buscar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'recomendadas',
      component: Recomendadas
    },
    {
      path: '/favoritas',
      name: 'favoritas',
      component: Favoritas
    },
    {
      path: '/detalles/:id',
    name: 'DetallesPelicula',
    component: DetallesPelicula,
    props: true
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: Buscar
    }
  ]
})

export default router
