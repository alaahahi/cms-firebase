<template>
    <HeaderNew />
    <div class="container">
    <UserCreateNew />
    </div>
  </template>
  
  <script>
  import UserCreateNew from '@/components/UserCreateNew.vue'
  import HeaderNew from '@/components/HeaderNew.vue'
  
  export default {
    name: 'Home',
    components: { UserCreateNew ,HeaderNew}
  }
  </script>
  