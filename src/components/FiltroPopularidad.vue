<template>
    <v-card class="mx-auto" width="300">
      <v-card-title>Filtrar por Popularidad</v-card-title>
      <v-radio-group v-model="selectedFilter" @change="applyFilter">
        <v-radio label="Popularidad entre 0 y 7" value="entre0y7"></v-radio>
        <v-radio label="Popularidad mayor de 7" value="mayor7"></v-radio>
      </v-radio-group>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFilter: null,
      };
    },
    methods: {
      applyFilter() {
        this.$emit('filter-change', this.selectedFilter);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  