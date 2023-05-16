<template>
  <Header1 />
  <div class="container">
  <UserCreate />
  </div>
  <UserList />
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import Header1 from '@/components/Header1.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList ,Header1}
}
</script>
