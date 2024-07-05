<template>
  <div class="container">
    <article class="card">
      <div class="background">
        <v-img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" cover class="img"></v-img>
      </div>
      <div class="content">
        <div class="card-header">
          <div class="card-type">{{movie.vote_average}}%</div>
          <div class="latest-article">{{ movie.release_date }}</div>
        </div>
        <div class="card-content">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.overview }}</p>
        </div>
        <div class="blog-preview__bottom">
          <CorazonFavoritos :movie="movie" @mostrar-notificacion="notificar" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import CorazonFavoritos from '../components/CorazonFavoritos.vue';

export default {
  components: {
    CorazonFavoritos
  },
  data() {
    return {
      movie: {}
    };
  },
  created() {
    const peliculaId = this.$route.params.id;
    this.fetchPeliculaDetalles(peliculaId);
  },
  methods: {
    async fetchPeliculaDetalles(id) {
      try {
        const apiKey = 'eb1c1e7430bdd0e0d436d2effb40d977';
        const baseUrl = 'https://api.themoviedb.org/3';
        const response = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=es-ES`);
        const data = await response.json();
        this.movie = data;
      } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
      }
    }
  }
};
</script>

  
  <style scoped>
  :root {
    --background: white;
    --primary: #605DFF;
    --primary-light: #E6E5FF;
    --secondary: #DFE6EE;
    --secondary-background: #acc2e4;
    --secondary-text: #2E5A8C;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 16px;
    padding: 1.5rem;
    font-family: 'Manrope',
        sans-serif;
}

.container {
    max-width: 40rem;
    width: 100%;
    container-name: card-container;
    container-type: inline-size;
    margin: auto;
    margin-top: 2rem;
    padding: 0 .5rem;
}

.card {
    display: flex;
    border: 1px solid var(--primary-light);
    border-radius: 0.75rem;
    background-color: rgba(84, 84, 154, 0.157);
    overflow: hidden;
    flex-direction: column;

}

.card:hover {
    box-shadow: 0 24px 72px 0 rgba(96, 93, 255, .1);
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    padding: 1rem;
}


.img {
    max-width: 200px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    border-radius: 0.5rem;
    margin-top: .5rem;
}

.card-type {
    height: 2.25rem;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    gap: 0.5rem;
    color: rgb(214, 58, 58);
}

.card-header {
    display: flex;
    justify-content: space-between;
}

.latest-article {
    height: 2.25rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-light);
    color: var(--primary);
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card-content>h2 {
    font-weight: 700;
}

.card-content>p {
    font-weight: 400;
    margin: 0.3rem 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}


@container card-container (min-width:600px) {
    .card {
        flex-direction: row;
        padding: 2rem;
        gap: 2rem;
    }

    .background {
        flex: 3;
        overflow: hidden;
    }

    .content {
        flex: 4;
        padding: 0;
    }

    .img {
        border-radius: 0.5rem;
    }
}
  </style>
  