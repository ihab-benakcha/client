
<template>
  <div>

    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item  waves-fixed active><router-link to='/'>Home</router-link></mdb-nav-item>
            
          </mdb-navbar-nav>

          <mdb-navbar-nav right>
            
     

  

   <button type="submit" class="btn  mb-2" ><router-link to="/admin">admin</router-link></button>

   
          </mdb-navbar-nav>

        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>


    <mdb-view>
      <mdb-mask class=" d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
              <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 animated fadeInLeft">
                <h1 class="h1-responsive font-weight-bold mt-sm-3">Soyez les bienvenues<br>
                Veuillez authentez</h1>
                <hr class="hr-light"/>
                
                
  
              </div>
             <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight ">
              <mdb-card id="classic-card">


  <div class="card mx-xl-5 gradient">

   
    <div class="card-body">
<form>

     <label for="email" class="grey-text font-weight-light">email</label>
     <input type="email" id="email" class="form-control" v-model="user.username" required>

     <label for="password" class="grey-text font-weight-light">Password</label>
     <input type="password" id="password" class="form-control" v-model="user.password" required>

          <div class="text-center py-4 mt-3">
               <button class="btn btn-outline-purple" type="submit">Send<i class="far fa-paper-plane ml-2" @click="login" ></i></button>
          </div>
     </form>

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
  import axios from "axios"  
  import router from "../router/index"       
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
        },
        admin:{
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
                
                } ,
      
                
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