<template>
  <div>
    <Header1 />
  <div class="container">
  <div class="card card-body mt-4">
    <h2 class="text-center py-3">تعديل معلومات البطاقة</h2>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>الاسم كامل</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>رقم البطاقة</label>
        <input type="number" v-model="form.cardNumber" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>رقم الهاتف</label>
        <input v-model="form.phone" class="form-control" required />
      </div>

      <div class="form-group  mt-3">
        <label>العنوان</label>
        <input v-model="form.address" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>تاريخ التفعيل</label>
        <input type="date"
        v-model="form.startDate" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>المندوب</label>
        <select v-model="form.seller" class="form-select" aria-label="Default select example">
          <option selected>يرجى الأختيار</option>
          <option value="علي سفر">علي سفر</option>
          <option value="ابراهيم نافع">ابراهيم نافع</option>
          <option value="علاء نافع">علاء نافع</option>
          <option value="علي عبد الكريم">علي عبد الكريم</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label>اسماء افراد العائلة</label>
        <input
          v-model="form.family"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        تعديل
      </button>
    </form>
  </div>
  </div>
</div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'
import Header1 from '@/components/Header1.vue'

export default {
  components: {  Header1},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({ name: '',phone:'',cardNumber:'',address:'',startDate:'',seller:'',family:'' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.name = user.name
      form.cardNumber = user.cardNumber
      form.phone = user.phone
      form.address = user.address
      form.startDate = user.startDate
      form.seller = user.seller
      form.family = user.family
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/')
      form.name = ''
      form.cardNumber = ''
      form.phone = ''
      form.address = ''
      form.startDate = ''
      form.seller = ''
      form.family = ''
    }

    return { form, update }
  }
}
</script>
