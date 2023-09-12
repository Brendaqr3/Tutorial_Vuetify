<template>
  <v-container>
    <h1>Hola Mundo</h1>
    <v-btn color="cyan" prepend-icon="mdi-face"
      append-icon="mdi-circle">BIENVENIDOS</v-btn>
  </v-container>
  <div class="text-center">
    <v-btn color="tercero"
      prepend-icon="mdi-face"
      append-icon="mdi-circle"
    >
      <template v-slot:prepend>
        <v-icon color="cyan-lighten-5"></v-icon>
      </template>

      BIENVENIDOS

      <template v-slot:append>
        <v-icon color="cyan-lighten-5"></v-icon>
      </template>
    </v-btn>
  </div>
  
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
