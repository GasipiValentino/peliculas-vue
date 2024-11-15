<template>
  <div>
    <nav>
      <RouterLink to="/"><img src="./assets/logo.png" alt=""></RouterLink>

      <input type="checkbox" id="check">
      <label for="check" class="abrir"> &#8801;</label>
      <div class="menu">
        <RouterLink class="ancla" to="/">Recomendadas</RouterLink>
        <RouterLink class="ancla" to="/favoritas">Favoritas</RouterLink>
        <RouterLink class="ancla" to="/buscar">Buscar</RouterLink>
        <label for="check" class="cerrar"> &#215; </label>
      </div>
    </nav>

    <RouterView @mostar-detalles="irVerDetalles" />
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const irVerDetalles = (peliculaId) => {
  router.push({ name: 'DetallesPelicula', params: { id: peliculaId } });
};
</script>

<style scoped>
nav {
  background-color: rgb(69, 145, 78);
}

nav img {
  width: 5em;
  padding: 1em .5em;
}

.abrir, .cerrar {
  display: block;
}

#check {
  display: none;
}

.menu {
  position: fixed;
  width: 70%;
  height: 100vh;
  background-color: rgb(56, 111, 62);
  right: -100%;
  top: 0;
  text-align: center;
  padding: 80px 0;
  transition: 0.7s;
  z-index: 100;
}

.menu a {
  display: block;
  padding: .8em;
  text-decoration: none;
  color: #95c59b;
  font-size: .9em;
  font-weight: 600;
}

.cerrar {
  position: absolute;
  right: .7em;
  top: .7em;
  color: black;
  font-size: 1.5rem;
}

#check:checked~.menu {
  right: 0;
}

.abrir {
  position: absolute;
  right: .7em;
  top: .7em;
  color: black;
  font-size: 1.5rem;
}

nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}

nav a.router-link-exact-active:hover {
  color: black;
}

@media(min-width: 860px) {
  .abrir, .cerrar {
    display: none;
  }

  .menu {
    position: absolute;
    right: 0;
    top: 1.45em;
    width: fit-content;
    background-color: none;
    height: fit-content;
    padding: 0;
    background-color: rgb(171, 151, 110, .0);
    margin-right: 1em;
  }

  .menu a {
    font-size: 1em;
    display: inline-block;
    color: white;
    transition: all .3s;
  }

  .menu a:hover {
    color: #ffffff7c;
    transition: all .6s;
  }

  nav {
    height: fit-content;
  }

  nav img {
    width: 8em;
  }
}
</style>
