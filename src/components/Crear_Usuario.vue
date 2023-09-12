<template>
  <div class="hello">
    <v-container><h1>crear Usuarios </h1>
    <v-btn color="primary" v-on:click="createUsuario()">Ingrear usuario</v-btn>
    </v-container>
      

    
   
  </div>
</template>

<script>
import db from '../Firebase/inner.js'
import {collection, addDoc} from 'firebase/firestore'

export default{
  created(){
/* this.createdUsuario() */
  },
  methods:{
    async createUsuario(){
      const colRef= collection(db,'marca')
      const doc ={
        id:'2',
        nombre:"loa",
        pasword:"1234"
      }
      const docRef = await addDoc(colRef,doc)
      console.log('creo el usuario con nombre', docRef.id)
    }
  }
}
</script>
            