
<template>
     
          <mdb-container class="mt-5">


    <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="module">module</label>
          <input type="text" class="module" id="module"   required v-model="mod.nom">
          <label for="enseignant">enseignant</label>
          <select class="form-control">
            <option v-for="ens in enseignants" :key="ens" @click="modifier(ens)">{{ens.nom}} {{ens.prenom}}</option>
          </select>
        </div>
      </div>
      <mdb-btn type="submit" @click="ajouter_module">Ajouter module</mdb-btn>
    </form>
  </mdb-container>
</template>
<script>
import axios from 'axios'
export default {
     name: 'form1',
     data(){
          return{
          enseignants:[],
          mod:{
               nom: '',
               enseignant_id:''
          }
          
          }
     },
     methods:{
          
          
     },
     mounted(){
          
     }
}
</script>