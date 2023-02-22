<template>
  <div class="layout">
    <div class="vertical-layout">
      <Header/>
      <div class="content">
        <div class="main">
          <Home/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm";
export default {
  name: "index",
  components: {LoginForm}
}
</script>

<style scoped>

</style>
