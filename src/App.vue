<template>
  <v-app>
    <v-main>
      <v-card max-width="3000" class="mx-auto" color="indigo-accent-4">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-list-item
          prepend-avatar="https://6.soompi.io/wp-content/uploads/image/20230511065021_jennie-8.jpg?s=900x600&e=t"
          title="Brenda Quintero"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

       

        </template>

        <v-app-bar-title>Proyecto</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        
        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-shopping card" title="Compras" value="compras" router-link to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-cash" title="Ventas" value="ventas" router-link to="/ventas"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account" title="Usuario" value="Usuario" router-link to="/Usuario"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account" title="Login" value="Login" router-link to="/Login"></v-list-item>

        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 400px">
        <router-view></router-view></v-main>
      <v-img src=""></v-img>
      <v-main>
        
      </v-main>
    </v-layout>
  </v-card>
  <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
  <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>

</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
/* import Compras_Com from './components/Compras_Com.vue';
import Ventas_Com from './components/Ventas_Com.vue'; */

export default {
  name: 'App',

  components: {
   /*  HelloWorld, */
   /*  Compras_Com,
    Ventas_Com */
  },

  data () {
  return {
    drawer: true,
    rail: true,
  }
},
}
</script>

