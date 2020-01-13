
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

          <mdb-navbar-nav right>
            <mdb-form-inline >
        
      <mdb-btn color="indigo" type="submit" >logout</mdb-btn>
    </mdb-form-inline>
          </mdb-navbar-nav>
         </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
   
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
        
          <button type="button" class="btn btn-outline-indigo btn-sm m-0" @click="enregistre(etudiant)">enregistrer</button>
        </td>
      </tr>
    </tbody>
  </table>


</div>
        </mdb-tbl>
        </mdb-container>
</mdb-mask>
    </mdb-view>

    
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
  import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
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
      mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle
      
    },
     data(){
      return{
        
        list:[
          {
            nom: 'a',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
                    {
            nom: 'sdsd',
            prenom: 'sdsdsds',
            id: '1'
          },
        ]
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
            enregistre: function(etudiant){
              alert(etudiant.nom)
            }
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
    background-image: url('./img/11111.jpg');
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