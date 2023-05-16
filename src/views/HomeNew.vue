<template>
  <div>
    <HeaderNew />
    <UserListNew />
  </div>
</template>

<script>
import UserListNew from '@/components/UserListNew.vue'
import HeaderNew from '@/components/HeaderNew.vue'

export default {
  name: 'Home',
  components: { UserListNew ,HeaderNew}
}
</script>
