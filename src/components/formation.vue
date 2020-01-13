
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
    <h1 class="h1-responsive font-weight-bold text-center my-5">Formation</h1>
    
    <mdb-row>
      
      <mdb-col lg="5" xl="5">
       
        <h3 class="dark-grey-text">L'École nationaleSupérieure d'Informatique forme des ingénieurs d'État en informatique. La scolarité dure cinq ans et est répartie en trois périodes :</h3>
        
          
      </mdb-col>
      <mdb-col lg="7" xl="7">
       
          <img class="img-fluid" src="./img/CPI.jpg" alt="Sample image" />
         
      </mdb-col>
   
     
      <mdb-col >
       
        <h3 class="dark-grey-text">§Deux années de classes préparatoires intégrées (CPI) : deux années durant lesquelles sont enseignées les connaissances de base devant être maîtrisées par un ingénieur avant d’aborder les connaissances plus spécifiques. L’accès aux classes supérieures est subordonné à la réussite à un concours dont les conditions sont fixées chaque année par arrêté de Monsieur le Ministre de l’Enseignement Supérieur. Ce concours est ouvert, sous conditions, aux étudiants issus de certaines filières enseignées dans les autres établissements universitaires.

§Une année de socle commun supérieur (SCS) : les étudiants reçus au concours, intègrent la première année du cycle supérieur dénommée année de socle commun supérieur.

§Deux années de spécialité (4ème + 5ème année): l’École offre à ses étudiants trois spécialités qui sont dispensées pour le cycle ingénieur (SIT: Systèmes d’Information et Technologie, SIQ: Systèmes InformatiQues et SIL: Systèmes et Ingénierie du Logiciel). Le choix se fait à la fin de la 1ère année du cycle supérieur sur la base des notes obtenues durant le socle commun et des places disponibles par spécialité.

§La cinquième année : elle consiste en un stage pratique de 10 à 12 mois. L'étudiant est tenu, durant cette période, de réaliser un projet informatique dans lequel il devra mettre en pratique les notions et les concepts appris durant les quatre années théoriques.</h3>
        
          
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
        height: calc(150vh);

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