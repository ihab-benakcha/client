
<template>
     
          <mdb-container class="mt-5">


    <form>
      <div class="form-row">
        <div class=" mb-3">
          <label for="module">module</label>
          <input type="text" class="module" id="module"   required v-model="mod.nom">
          <mdb-view>
      <mdb-mask class=" d-flex justify-content-center align-items-center">
        <mdb-container>
        <mdb-tbl btn responsive striped>
    <div class="table-wrapper-scroll-y my-custom-scrollbar">

  <table class="table table-bordered table-striped mt-3">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">nom</th>
        <th scope="col">prenom</th>
       
      </tr>
    </thead>
    <tbody>
      <tr v-for="enseignant in list" :key="enseignant">
        <th scope="row">{{enseignant.id}}</th>
        <td>{{enseignant.nom}}</td>
        <td>{{enseignant.prenom}}</td>
        <td>
          
        
          <button type="button" class="btn btn-outline-indigo btn-sm m-0" @click="enregistrer(etudiant)">enregistrer</button>
        </td>
      </tr>
    </tbody>
  </table>


</div>
        </mdb-tbl>
        </mdb-container>
</mdb-mask>
    </mdb-view>>
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
          list:[],
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