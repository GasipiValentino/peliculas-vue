<template>
  <div>
    <v-btn icon @click="cambiarFavoritos">
      <v-icon :color="Favorito ? 'red' : ''">mdi-heart</v-icon>
    </v-btn>
    <v-snackbar v-model="snackbar" :color="colorSnackbar">
      {{ mensajeSnackbar }}
      <v-btn color="white" text @click="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      Favorito: false,
      snackbar: false,
      mensajeSnackbar: '',
      colorSnackbar: ''
    };
  },
  created() {
    this.Favorito = this.estadoFavoritos();
  },
  methods: {
    cambiarFavoritos() {
      this.Favorito = !this.Favorito;
      if (this.Favorito) {
        this.agregarFavorito();
        this.mostrarSnackbar('Película agregada a favoritos con éxito', 'success');
      } else {
        this.eliminarFavorito();
        this.mostrarSnackbar('Película eliminada de favoritos con éxito', 'red-darken-2');
      }
      this.$emit('actualizar-favoritos');
    },
    agregarFavorito() {
      let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
      favoritos.push(this.movie);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    },
    eliminarFavorito() {
      let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
      favoritos = favoritos.filter(fav => fav.id !== this.movie.id);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    },
    estadoFavoritos() {
      let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
      return favoritos.some(fav => fav.id === this.movie.id);
    },
    mostrarSnackbar(mensaje, color) {
      this.mensajeSnackbar = mensaje;
      this.colorSnackbar = color;
      this.snackbar = true;
    }
  },
  // Se agrego para que si una pelicula esta marcada como favorita y el usuario ingresa al modal, aparezca el corazon rojo y no le permita agregar dos veces lamisma pelicula
  watch: {
    movie: {
      handler(nuevoValor) {
        this.Favorito = this.estadoFavoritos();
      },
      // deep: true
    }
  }
};
</script>
