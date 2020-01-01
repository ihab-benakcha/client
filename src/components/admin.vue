
<template>
  <div>
    <!--Navbar-->
    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item  waves-fixed active><router-link to='/'>Home</router-link></mdb-nav-item>
            
          </mdb-navbar-nav>
         
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
    <!--/.Navbar-->
    <!--ViewWrapper-->
    <mdb-view>
      <mdb-mask class=" d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
              <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 animated fadeInLeft">
                <h1 class="h1-responsive font-weight-bold mt-sm-3">Choisir le personnel a inscrire</h1>
                <hr class="hr-light"/>
                
                <template>
  <div>
    <!-- Default inline 1-->
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline1" value='form2' v-model="choix">
      <label class="custom-control-label" for="defaultInline1">etudiant </label>
    </div>

    <!-- Default inline 2-->
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline2" value='form1' v-model="choix" >
      <label class="custom-control-label" for="defaultInline2">enseignant</label>
    </div>

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

    
  </div>
</template>
              </div>
             <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight ">
              <mdb-card id="classic-card">

  <!-- Card -->
  <div class="card mx-xl-5 gradient">

   
    <div class="card-body">


       <component :is="choix"></component>
        <!-- Default form subscription -->

    </div>
    <!-- Card body -->

  </div>
  <!-- Card -->

              </mdb-card>
            </mdb-col>
            
          </mdb-row>
          
        </mdb-container>
      </mdb-mask>
    </mdb-view>
    <!--/.ViewWrapper-->

    
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
  import form1 from './form1.vue'
  import form2 from './form2.vue'
import axios from 'axios';
  export default {
    name: 'AppPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbView,
      mdbMask,
      mdbBtn,
      mdbNavbarBrand,
      mdbFormInline,
      'form2':form2,
      'form1':form1,
      
    },
    data(){
      return {
        choix: '',
        mod:{
          nom: '',
          id_enseignant:''
        },
       
        enseignants:[]
      }
    },
    methods:{
      modifier:function(ens){
        this.mod.id_enseignant=ens.id
      },
      ajouter_module:function(){
        
        axios.post('/admin/createModule',this.mod).then(response => {
      console.log(response)
      console.log("module ajouter")
      router.push("/admin")
    })
    .catch(errors => {
      console.log("le module n'est pas ajouter")
    })
      },
      getListEnseignants:function(){
        axios.get('/admin/getEnseignants') .then((response) => {    
                        console.log(response)    
                        self.$set(this, "enseignants", response.data.enseignants)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/admin")    
                    })    
      }
    },
    mounted(){
      this.getListEnseignants()
    }
  }
</script>
<style>
  .navbar .md-form {
    margin: 0;
  }
  .navbar {
      background-color: #424f95 !important;
    }
  .view {
    background-image: url('11111.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh);
     
  }
  .gradient {
        /* background-color: rgba(215, 213, 123, 0.5); */
        background-color: wheat;
  }
  h6 {
    line-height: 1.7;
  }
</style>