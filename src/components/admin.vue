
<template>
  <div>

    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Esi</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item  waves-fixed active><router-link to='/'><mdb-btn color="indigo" type="submit" >Home</mdb-btn></router-link></mdb-nav-item>
            <mdb-nav-item  waves-fixed active><router-link to='/auth'><mdb-btn color="indigo" type="submit"  >authentifier</mdb-btn ></router-link></mdb-nav-item>
                       <mdb-dropdown>
    <mdb-dropdown-toggle slot="toggle" color="indigo" class="mt-3 ml-2">Ecole</mdb-dropdown-toggle>
    <mdb-dropdown-menu>
      <mdb-dropdown-item> <router-link to='/presentation'>Prsentation</router-link></mdb-dropdown-item>
      <mdb-dropdown-item><router-link to='/formation'>formation</router-link></mdb-dropdown-item>
      <mdb-dropdown-item><router-link to='/mot'>mot de directeur</router-link></mdb-dropdown-item>
     
    </mdb-dropdown-menu>
  </mdb-dropdown>

            
          </mdb-navbar-nav>
         <mdb-navbar-nav right>
            
     

  

      <mdb-btn color="indigo" type="submit" >logout</mdb-btn>

   
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>


    <mdb-view>
      <mdb-mask class=" d-flex justify-content-center ">
        <mdb-container>
          <mdb-row>
              <div class="black-text text-center text-lg-left col-md-6  animated fadeInLeft mt-5">
                <h1 class="h1-responsive font-weight-bold mt-sm-5">Choisir l'action a effectuer</h1>
                <hr class="hr-light"/>
                
                <template>
  <div>

    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline1" value='form2' v-model="choix">
      <label class="custom-control-label" for="defaultInline1">Ajouter un etudiant </label>
    </div>


    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline2" value='form1' v-model="choix" >
      <label class="custom-control-label" for="defaultInline2">Ajouter un  enseignant</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline3" value='form3'  v-model="choix" >
      <label class="custom-control-label" for="defaultInline3">Ajouter module</label>
    </div>

  

    
  </div>
</template>
              </div>
             <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight ">
              <mdb-card id="classic-card">

  <!-- Card -->
  <div class="card  gradient">

   
    <div class="card-body">


       <component :is="choix"></component>


    </div>


  </div>


              </mdb-card>
            </mdb-col>
            
          </mdb-row>
          
        </mdb-container>
      </mdb-mask>
    </mdb-view>


    
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
  import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
  import form1 from './form1.vue'
  import form2 from './form2.vue'
  import form3 from './form3.vue'

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
      mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,
      'form3':form3,
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
       
        enseignants:[],
        diplay: true
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
<style scoped>
  .navbar .md-form {
    margin: 0;
  }
  .navbar {
      background-color: #424f95 !important;
    }
  .view {
    background-image: url('./img/11111.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(150vh);
     
  }
  .gradient {
        /* background-color: rgba(215, 213, 123, 0.5); */
        background-color: wheat;
  }
  h6 {
    line-height: 1.7;
  }
</style>