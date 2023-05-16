<template>
    <HeaderNew />
    <UserListReport />
  </template>
  
  <script>
  import UserListReport from '@/components/UserListReport.vue'
  import HeaderNew from '@/components/HeaderNew.vue'
  
  export default {
    name: 'Home',
    components: { UserListReport ,HeaderNew}
  }
  </script>
  