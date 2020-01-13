
<template>
  <div>
    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
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
          
         
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
   
    
      <mdb-mask class=" d-flex justify-content-center align-items-center">
        <div>
        <template>
  <mdb-container class="bl">
    <h1 class="h1-responsive font-weight-bold text-center my-5">Presentaion</h1>
    
    <mdb-row>
      
        <h2 class="font-weight-bold mb-3 p-0 ml-5">
          <strong>L'ecole superieure de l'informatique</strong>
        </h2>
        <h3 class="dark-grey-text">L'École nationale supérieure d'informatique (ESI), anciennement Institut national de formation en informatique (INI), est un établissement d'enseignement supérieur algérien formant des ingénieurs d’État en informatique. Elle est située à Oued Smar, à environ 15 km du centre-ville de la capitale Alger, en Algérie.

Créée sous le nom de Centre d’études et de recherche en informatique (CERI) sous la tutelle de l'ex-ministère de la planification et de l’aménagement du territoire, il a été renommée et placée sous la tutelle du ministère de l’enseignement supérieur et de la recherche scientifique en 1984.

Le CERI fut le premier centre de formation spécialisé en informatique d’Afrique. Il forma les premiers ingénieurs d’État, ingénieurs d’application et programmeurs d’Algérie et d’autres pays africains (Bénin, Cameroun, Gabon, Mali, Mauritanie, Sénégal, Tunisie, etc.). </h3>
        
          
      

      
      
      
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
        <h2 class="font-weight-bold mb-3 p-0 ml-5">
          <strong>Situation</strong>
        </h2>
        <h4 class="dark-grey-text">L'École nationale supérieure d'informatique est située sur le territoire de la commune de Oued Smar, à proximité des villes d'El Harrach et de Bab Ezzouar. L'école est desservie par la gare ferroviaire de Oued Smar, située sur la ligne SNTF Alger-Thénia et par l'axe autoroutier Ben Aknoun - Aéroport international Houari Boumedienne (rocade Sud).

Bâtie sur une superficie de 13 hectares, à 2 km de l'Université des sciences et de la technologie Houari Boumediene (USTHB). </h4>
        
          
         </mdb-row>

    <hr class="my-5" />
    <mdb-row>
     
        <h2 class="font-weight-bold mb-3 p-0 ml-5">
          <strong>Effectifs</strong>
        </h2>
        <h4 class="dark-grey-text">Pour l'année universitaire 2012-2013, le nombre d'étudiants est réparti comme suit :
        <ul>
          <li>Classes préparatoires intégrées (CPI) : 400 étudiants (1re année : ~176, 2e année : ~170).</li>
          <li>Troisième année socle commun supérieur (SCS) : 37 étudiants.</li>
          <li>Années de spécialité : 3SI : 98 étudiants, 3SIQ: 66 étudiants</li>
        </ul>
        Les effectifs de 2017 étaient comme suit : 
        <ul>
          <li>− 323 salariés dont : 
            <ul>
              <li>251 salariés permanents (126 enseignants et 125 ATS).</li>
              <li>    72 agents contractuels.</li>
            </ul>
          </li>
          <li>− 1051 étudiants en graduation, dont 277 en 1ère année; </li>
          <li>− 200 doctorants. </li>
        </ul>
    </h4>
       
    </mdb-row>
  </mdb-container>
</template>  
        </div>
      </mdb-mask>
  
    

    
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
  import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
  import axios from "axios"         
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
      mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle
    },
    data(){
      return {
        choix: '',
        user:{
          email: '',
          password: ''
        }
      }
    },
    methods:{
      login:function(){
                    axios.post("/auth/authenticate",this.user)    
                        .then((response) => {    
                            console.log("Logged in")    
                            router.push("/enseignant")    
                        })    
                        .catch((errors) => {    
                            console.log("Cannot log in")    
                        })    
                
                }  
                
                }   
            }    
   
</script>
<style >
  .navbar .md-form {
    margin: 0;
  }
  
    .navbar {
      background-color: #424f95 !important;
    }
  
  body {
    background-image: url('./img/55.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
        height: calc(200vh);

  }
  .gradient {
        /* background-color: rgba(215, 213, 123, 0.5); */
        background-color: wheat;
  }
  h6 {
    line-height: 1.7;
  }
  .bl{
background-color: rgba(215, 213, 123, 0.5);  }
</style>