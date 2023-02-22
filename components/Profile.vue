<template>
  <div class="container">
    <div class="page-header">
      <h4 class="page-title">Profile</h4>
      <div class="breadcrumb">
        <span class="me-1 text-gray"><i class="feather icon-home"></i></span>
        <div class="breadcrumb-item"><NuxtLink to="/"> Home </NuxtLink></div>
        <div class="breadcrumb-item"><NuxtLink to="/profile"> Profile</NuxtLink></div>
      </div>
    </div>
    <div class="card">
      <div class="container-fluid">
        <div class="row content-min-height">
          <div class="col">
            <div class="card-body">
              <div class="mb-4 d-md-flex align-items-center justify-content-between">
                <div>
                  <h4>Personal Information</h4>
<!--                  <p>Basic info, like your name and address on this account.</p>-->
                </div>
              </div>
              <div class="row">
                <div class="col-md">
                  <table class="table">
                    <tbody>
                    <tr>
                      <th class="py-4">Name</th>
                      <td class="py-4">{{ user.name }}</td>
                    </tr>
<!--                    <tr>-->
<!--                      <th class="py-4">Last Name</th>-->
<!--                      <td class="py-4">Ahmad</td>-->
<!--                    </tr>-->
                    <tr>
                      <th class="py-4">Email</th>
                      <td class="py-4">{{ user.email_address }}</td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data(){
    return{
      user: {}
    }
  },
  mounted() {
    this.user=JSON.parse(localStorage.getItem('user'))
  }
}
</script>

<style scoped>

</style>
