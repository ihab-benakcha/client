
<template>
     
          <mdb-container class="mt-5">


    <form>
      <div >
        <div class=" mb-3">
          <label for="module">module</label>
          <input type="text" class="form-control" id="module"   required v-model="mod.nom">
          <label for="enseignant">enseignant</label>
          <input type="text" class="form-control" id="enseignant"   required v-model="enseignant_id">
              <div class="table-wrapper-scroll-y my-custom-scrollbar mt-5">

        <mdb-tbl btn  striped>

  <table class="table table-bordered table-striped ">
    <thead>
      <tr>
        <th scope="col">nom</th>
        <th scope="col">prenom</th>
       
      </tr>
    </thead>
    <tbody>
      <tr v-for="enseignant in list" :key="enseignant">
        <td>{{enseignant.nom}}</td>
        <td>{{enseignant.prenom}}</td>
        <td>
          
        
          <button type="button"  @click="enregistrer(enseignant)">enregistrer</button>
        </td>
      </tr>
    </tbody>
  </table>

        </mdb-tbl>

</div>

   
        </div>
      </div>
      <mdb-btn color="indigo" type="submit" @click="ajouter_module">Ajouter module</mdb-btn>
    </form>
  </mdb-container>
</template>
<script>
import axios from 'axios'
import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline, mdbTbl} from 'mdbvue';
export default {
     name: 'form1',
     components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbView,
      mdbMask,
      mdbBtn,
      mdbNavbarBrand,
      mdbFormInline,
     mdbTbl
      
    },
     data(){
          return{
          list:[
            {
              nom: 'dskmdk',
              prenom: 'dsdnjkkkk',
              id: 'fsdfsdfsfdsdsdsdsd'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
            {
              nom: 'dskmdksmdk',
              prenom: 'dsdnjkkkk',
              id: '1'
            },
          ],
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
<style scoped>
.my-custom-scrollbar {
position: relative;
height: 80vh;
overflow: auto;
        background-color: wheat;

}
</style>