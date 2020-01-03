
<template>
  <div>
    <mdb-navbar :color="'secondary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>Ecole</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
           <mdb-nav-item waves-fixed active><router-link to='/'>Home</router-link></mdb-nav-item>
            
          </mdb-navbar-nav>
           <mdb-navbar-nav right>
            <mdb-form-inline >
        
      <mdb-btn outline="white" size="sm" class="my-0" type="submit">Logout</mdb-btn>
    </mdb-form-inline>
          </mdb-navbar-nav>
         </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
    
    <mdb-view>
      <mdb-mask class=" d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
              <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 animated fadeInLeft">
                <h1 class="h1-responsive font-weight-bold mt-sm-3">Bienvenue</h1>
                <hr class="hr-light"/>
                
              </div>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
  </div>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbFormInline} from 'mdbvue';
  
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
</style>