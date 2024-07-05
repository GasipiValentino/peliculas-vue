<template>

  <div class="search">
    <input v-model="buscar" placeholder="Buscar películas..." type="text" @keyup.enter="realizarBusqueda">
    <button type="button" @click="realizarBusqueda">Buscar</button>
  </div>
  
<section class="container">
  <TarjetasPopulares v-for="movie in filteredMovies" :key="movie.id" :movie="movie" @mostar-detalles="irVerDetalles" />
</section>
</template>

<script>

  import DetallesPelicula from './DetallesPelicula.vue';
  import TarjetasPopulares from '../components/TarjetasPopulares.vue';

  export default{
    name:"Buscar",
    components: {
      DetallesPelicula,
      TarjetasPopulares
    },
    data(){
    return{
      Peliculas: [],
      buscar: '',
      // ==
      loading: false,
      selectedMovie: null
    }
  },
  computed: {
    filteredMovies() {
      return this.Peliculas.filter(Peliculas =>
      Peliculas.title.toLowerCase().includes(this.buscar.toLowerCase())
      );
    },
  },
    methods: {
      async realizarBusqueda() {
      try {
        const apiKey = 'eb1c1e7430bdd0e0d436d2effb40d977';
        const baseUrl = 'https://api.themoviedb.org/3';
        const response = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&language=es-ES&query=${this.buscar}`);
        const data = await response.json();
        this.Peliculas = data.results; // Actualiza Peliculas con los resultados de la búsqueda

        console.log('Películas encontradas:', this.Peliculas); // Agregar console.log para verificar resultados
      } catch (error) {
        console.error('Error al buscar películas:', error);
      }finally {
        this.loading = false;
      }
    },

    showDetails(movie) {
      this.selectedMovie = movie;
    },
    closeDetails() {
      this.selectedMovie = null;
    },
      irVerDetalles(peliculaId) {
        this.$router.push({ name: 'DetallesPelicula', params: { id: peliculaId } });
      }
  }
  };

</script>

<style scoped>
  .search {
    width: fit-content;
    margin: 1.5rem auto ;
  }

.search input[type="text"] {
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
  margin-right: .8rem
}

.search button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  transition: .9s ease;
}

.search button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: blue;
}

.container{
  display: flex;
  margin: auto;
  max-width: 1000px;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>