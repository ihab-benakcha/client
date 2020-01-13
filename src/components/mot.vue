
<template>
  <div>
    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
           <mdb-nav-item  waves-fixed active><router-link to='/'><mdb-btn color="indigo" type="submit" >Home</mdb-btn></router-link></mdb-nav-item>
            <mdb-nav-item  waves-fixed active><router-link to='/auth'><mdb-btn color="indigo" type="submit"  >authentifier</mdb-btn ></router-link></mdb-nav-item>
            
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
     
      <mdb-col  class="text-center">
        <h2 class="font-weight-bold mb-3 p-0">
          <strong>Mot de directeur</strong>
        </h2>
        <h3 class="dark-grey-text"> En ce début d'année universitaire, je tiens à m'adresser à vous tous pour vous souhaiter une année pleine de labeur et de satisfaction d'une part, et vous faire partager mes convictions de rendre notre École un site privilégié de formation de qualité d'autre part.

     L'École, dans ses ambitions, devrait se hisser au pôle d'excellence qui est inhérent au développement de la recherche et la promotion de son staff et bien sûr à l'émancipation de ses infrastructures. L'école Bénéficiera d'un environnement scientifique et technologique de très haut niveau. Elle compte offrir une formation au contact de la recherche et de l'innovation. Attentifs aux avancées technologiques et aux attentes des entreprises, l'offre de formation sera évolutive et s'adaptera aux exigences industrielles.

     À mes étudiants, je dis «Bienvenue à l'école ». Être dans une École supérieur ou à l'Université est une nouvelle aventure. Cette étape totalement différente de votre formation du lycée, vous oblige à adopter un comportement beaucoup plus responsable et autonome. Cette transition du lycée vers l'École supérieure vous permet de vous projeter sur un avenir de grandes ambitions et de hardiesse à l'image des étudiants des pays avancés. Vous en êtes capables et je me tiens à votre entière disposition pour surmonter toutes les difficultés que vous pourrez rencontrer.

     Enfin, j'affirme ma volonté de collaborer en parfaite synergie avec toutes les composantes de l'École et j'espère que la conjugaison de nos efforts portera ses fruits au niveau de nos étudiants à qui je souhaite encore une fois une année pleine de succès.</h3>
        
          
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