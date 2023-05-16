<template>
  <h2 class="text-center py-3">معلومات بطاقات مشفى العالمي الأهلي</h2>
  <div class="card card-body mt-4 cardAdd">
    <div class="form-group mt-3" v-if="password != '12345678'">
        <label>كلمة المرور</label>
        <input type="password" v-model="password"  class="form-control" required />
    </div>
    <form @submit.prevent="onSubmit" v-if="password === '12345678'">
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
          <option selected disabled>يرجى الأختيار</option>
          <option value="علي سفر">علي سفر</option>
          <option value="محمد جاسم">محمد جاسم</option>
          <option value="مينا رياض">مينا رياض</option>
          <option value="عبد المهيمن ناظر">عبد المهيمن ناظر</option>
          <option value="مهند فؤاد">مهند فؤاد</option>
          <option value="علي احمد">علي احمد</option>
          <option value="محمد خطاب">محمد خطاب</option>
          <option value="احمد محمد">احمد محمد</option>
          <option value="ندى احمد">ندى احمد</option>
          <option value="احمد صبحي">احمد صبحي</option>
          <option value="حيدر سعد">حيدر سعد</option>
          <option value="وائل مكي">وائل مكي</option>
          <option value="احمد المندلاوي">احمد المندلاوي</option>
          <option value="يوسف حميد">يوسف حميد</option>
          <option value="مصطفى احمد">مصطفى احمد</option>
          <option value="علي اصيل">علي اصيل</option>
          <option value="مصطفى قصي">مصطفى قصي</option> 
          <option value="محمد جاسم علي">محمد جاسم علي</option>
          <option value="ولاء كاظم">ولاء كاظم</option>
          <option value="ايلاف ثائر">ايلاف ثائر</option> 
          <option value="علي عباس">علي عباس</option>
          <option value="زهراء جاسم">زهراء جاسم</option>  
          <option value="ظبيه هاشم">ظبيه هاشم</option>
          <option value="منظر زياد">منظر زياد</option>
          <option value="ضحى قيس">ضحى قيس</option>
          <option value="همام سعد فرهود">همام سعد فرهود</option>
          <option value="مرح احمد">مرح احمد</option>
          <option value="زهراء فاروق">زهراء فاروق</option>
          <option value="علي كاظم">علي كاظم</option>
          <option value="علي السجاد">علي السجاد</option>
          <option value="فرح صالح">فرح صالح</option>     
          <option value="ثريا احمد كاظم"> ثريا احمد كاظم</option>
          <option value="حنين عقيل">حنين عقيل</option> 
          <option value="هدف مباشر">هدف مباشر</option> 
          <option value="احمد علي">احمد علي</option> 
          <option value="منعم وسام منعم">منعم وسام منعم</option> 
          <option value="نزار جاسم خلف">نزار جاسم خلف</option> 
          <option value="مرتضى حسين">مرتضى حسين</option> 
          <option value="ساره احمد">ساره احمد</option> 
          <option value="نصير المشهداني">نصير المشهداني</option>
          <option value="مصطفى وليد">مصطفى وليد</option> 
          <option value="حسين اسعد">حسين اسعد</option>
          <option value="الاء عبد الرسول">الاء عبد الرسول</option>
          <option value="ايمن عبد المهدي">ايمن عبد المهدي</option>
          <option value="بنين">بنين</option>
          <option value="هدى جمال">هدى جمال</option>
          <option value="رسل مهدي">رسل مهدي</option>
          <option value="انمار علي">انمار علي</option>
          <option value="محمد الخزعلي">محمد الخزعلي</option>
          <option value="رشا محمود">رشا محمود</option> 
          <option value="ايمان حسين">ايمان حسين</option>
          <option value="مقبل طلال">مقبل طلال</option>


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

      <button type="submit" class="btn btn-primary mt-3" :disabled="isLoading">
        {{ isLoading ? 'جاري الحفظ...' : 'حفظ' }}
      </button>
    </form>
  </div>
</template>

<script>
import { createUser1 } from '@/firebase'

export default {
  data() {
    return {
      password: '', // Define the password property in the data object
      form: { name: '', phone: '', cardNumber: '', address: '', startDate: '', seller: '', family: '' },
      isLoading: false

    }
  },
  mounted() {
    // check if password exists in localStorage
    const storedPassword = localStorage.getItem('password');
    if (storedPassword) {
      // if it exists, set the password data to the stored password
      this.password = storedPassword;
    }
  },
  watch: {
    // watch for changes in the password data
    password(newPassword) {
      // if password is not the default password, store it in localStorage
      if (newPassword == '12345678') {
        localStorage.setItem('password', newPassword);
      }
    },
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      await createUser1({ ...this.form });
      this.form.name = '';
      this.form.cardNumber = '';
      this.form.phone = '';
      this.form.address = '';
      this.form.startDate = '';
      this.form.seller = '';
      this.form.family = '';
      this.isLoading = false;
    }
  }
 
}
</script>
