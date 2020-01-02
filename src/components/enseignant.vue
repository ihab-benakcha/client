
<template>
  <div>
    <!--Navbar-->
    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item waves-fixed active><router-link to='/'>Home</router-link></mdb-nav-item>
            
          </mdb-navbar-nav>
          <!--Search form -->
          <mdb-navbar-nav right>
            <mdb-form-inline >
        
      <mdb-btn outline="white" size="sm" class="my-0" type="submit">Logout</mdb-btn>
    </mdb-form-inline>
          </mdb-navbar-nav>
          <!--/.Search form -->
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
    <!--/.Navbar-->
    <!--ViewWrapper-->
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
        <th scope="col">note</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="etudiant in list" :key="etudiant">
        <th scope="row">{{etudiant.id}}</th>
        <td>{{etudiant.nom}}</td>
        <td>{{etudiant.prenom}}</td>
        <td>
          
          <input type="text" name="" id="" v-model="etudiant.note">
        
          <button type="button" class="btn btn-outline-indigo btn-sm m-0" @click="enregistrer(etudiant)">enregistrer</button>
        </td>
      </tr>
    </tbody>
  </table>


</div>
        </mdb-tbl>
        </mdb-container>
</mdb-mask>
    </mdb-view>
    <!--/.ViewWrapper-->

    
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
  import axios from 'axios'
  
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
      mdbView,
      mdbMask,
      mdbBtn,
      mdbNavbarBrand,
      mdbFormInline,
     
      
    },
     data(){
      return{
        
        list:[]
    }},
    methods:{
      enregistrer:function(etudiant){
        var i= this.etudiants.indexOf(etudiant);
       if((parseFloat(etudiant.note) <= 20 ) && (parseFloat(etudiant.note)>= 0)){
        
        this.etudiants[i].note=parseFloat(etudiant.note);
        axios.post('/enseig/ajouterNote',etudiant).then(response=>{
          console.log(response)
          console.log('note est ajoute')
        })
       }else{
         alert('saisir une note valid ');
        this.etudiants[i].note=0 ;
       }
    
      },
      getListEtudiant: function() {    
                let self = this    
                axios.get("/enseig/getEtudiants")    
                    .then((response) => {    
                        console.log(response)    
                        self.$set(this, "list", response.data.list)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/")    
                    })    
            },
    },
    mounted(){
      this.getListEtudiant()
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
    background-image: url('./img/7.jpeg');
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
  .my-custom-scrollbar {
position: relative;
height: 80vh;
overflow: auto;
background-color: rgba(215, 213, 123, 0.5);

}
.table-wrapper-scroll-y {
display: block;
}
</style>