
<template>
  <div>
    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item  waves-fixed active><router-link to='/'>Home</router-link></mdb-nav-item>
            <mdb-nav-item  waves-fixed active><router-link to='/auth'>auth</router-link></mdb-nav-item>
            
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            
      <button type="submit" class="btn  mb-2" ><router-link to="/admin">admin</router-link></button>
>
   
          </mdb-navbar-nav>
         
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
   
    
      <mdb-mask class=" d-flex justify-content-center align-items-center">
        <div>
        <template>
  <mdb-container class="bl">
    <h1 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h1>
    
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="./img/1.jpeg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h2 class="font-weight-bold mb-3 p-0">
          <strong>Debut de cours</strong>
        </h2>
        <h3 class="dark-grey-text">Afin d'assurer le bon deroulement des études, Nous informons tous les niveaux que les cours se commencent la semaine prochaine</h3>
        
          
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="./img/3.jpeg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h2 class="font-weight-bold mb-3 p-0">
          <strong>Nouveaux ouvrages</strong>
        </h2>
        <h3 class="dark-grey-text">Nous informons nos etudiants que des nouveaux ouvrages ont etait ajouter a la bibliothèque, Veuillez consulter la bibliothèque et nous somme toujours à l'écoute de votre besoins</h3>
        
          
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="./img/4.jpeg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h2 class="font-weight-bold mb-3 p-0">
          <strong>Thèmes des PFE</strong>
        </h2>
        <h3 class="dark-grey-text">Nous informons les étudiants de 5 ème année de déposer leurs thème de PFE au niveau de l'administration </h3>
       
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>  
        </div>
      </mdb-mask>
  
    

    
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
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