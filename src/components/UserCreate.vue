<template>
      <h2 class="text-center py-3">معلومات بطاقات مشفى البشارة الأهلي</h2>

  <div class="card card-body mt-4 cardAdd">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>الاسم كامل</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>رقم البطاقة</label>
        <input type="text" v-model="form.cardNumber" class="form-control" required />
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

      <button type="submit" class="btn btn-primary mt-3">
        حفظ
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '',phone:'',cardNumber:'',address:'',startDate:'',seller:'',family:'' })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.cardNumber = ''
      form.phone = ''
      form.address = ''
      form.startDate = ''
      form.seller = ''
      form.family = ''
    }

    return { form, onSubmit }
  }
}
</script>
