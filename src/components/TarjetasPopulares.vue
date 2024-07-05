<template>
  <v-card class="mx-auto" width="220">
    <v-img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" cover></v-img>
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-subtitle class="font-weight-bold">{{ movie.vote_average }} %</v-card-subtitle>
    <v-card-actions>
      <v-btn color="green lighten-2" text @click="$emit('mostar-detalles', movie.id)">Ver detalles</v-btn>
      <v-spacer></v-spacer>
      <CorazonFavoritos :movie="movie" @actualizar-favoritos="updatefavoritos" />
    </v-card-actions>
  </v-card>
</template>

<script>
import CorazonFavoritos from '../components/CorazonFavoritos.vue';

export default {
  components: {
    CorazonFavoritos
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
