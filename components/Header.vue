<template>
  <div class="header-nav ">
    <div class="header-nav-wrap">
    <div class="header-nav-left" style="margin-left: 25%!important;margin-right: 25%!important;">
      <div class="header-nav-item">
        <span class="fw-bold">AMCG</span>
      </div>
    </div>
      <div class="header-nav-right">
        <div class="header-nav-item">
          <div class="dropdown header-nav-item-select nav-profile" >
            <div class="toggle-wrapper" id="nav-profile-dropdown" data-bs-toggle="dropdown">
<!--              <div class="avatar avatar-circle avatar-image" style="width: 35px; height: 35px; line-height: 35px;">-->
<!--                <img src="/images/avatars/thumb-4.jpg" alt="">-->
<!--              </div>-->
              <span class="fw-bold mx-1">{{ user.name }}</span>
              <i class="feather icon-chevron-down"></i>
            </div>
            <div class="dropdown-menu dropdown-menu-end">
              <div class="nav-profile-header">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-column ms-1">
                    <span class="fw-bold text-dark">{{ user.name }}</span>
                    <span class="font-size-sm">{{ user.email_address }}</span>
                  </div>
                </div>
              </div>
              <NuxtLink to="/profile" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <i class="font-size-lg me-2 feather icon-user"></i>
                  <span>Profile</span>
                </div>
              </NuxtLink>
              <a href="javascript:void(0)" class="dropdown-item" @click="logout">
                <div class="d-flex align-items-center"><i class="font-size-lg me-2 feather icon-power"></i>
                  <span>Sign Out</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: "Header",
  // computed:{
  //   ...mapGetters(['isAuthenticated'])
  // },
  data(){
    return{
      user: {}
    }
  },
  methods:{
     logout(){
      localStorage.removeItem('token')
      this.$router.push('/login')

    }
  },
  mounted() {
    if(!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
    else{
      this.user=JSON.parse(localStorage.getItem('user'))
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>
