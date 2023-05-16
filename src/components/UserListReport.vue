<template>
  <div class="container mt-4">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-8">   
  </div>
  <div class="col-md-12 mt-3">
    <div class="row">
      <div class="col-md-3">
    <label class="form-label">من تاريخ</label>
    <input type="date" class="form-control" v-model="from">
  </div>
  <div class="col-md-3">
    <label class="form-label">حتى تاريخ</label>
    <input type="date" class="form-control"  v-model="to">
  </div>
  <div class="col-md-3">
    <div class="mt-2">
    <label>المندوب</label>
        <select  class="form-select form-control" v-model="text" aria-label="Default select example">
          <option value="" selected >الكل</option>
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
  </div>
  <div class="col-md-3">
    <div class="mt-4 pt-2">
    <button class="btn btn-outline-success w-100"  @click="exportToPDF">تنزيل</button>
    </div>
  </div>
    </div>
  </div>


</div>
</div>
  <div id="element-to-convert">


  <h2 class="text-center py-4 mt-5">معلومات بطاقات مشفى العالمي الأهلي</h2>

  <h5 class="text-center pt-3" >عدد البطاقات  {{pageuser.length}}</h5>
  <div class="container">
  <p v-if="from!='2022-10-01'">
  من تاريخ {{ from}}
  </p>
  <p v-if="to!='2024-01-01'">
    حتى تاريخ {{ to}}
  </p>
  </div>
  <div class="card m-4 " >
    <div class="table-responsive">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">الاسم كامل</th>
          <th scope="col">رقم الهاتف</th>
          <th scope="col">رقم البطاقة</th>
          <th scope="col">العنوان</th>
          <th scope="col">تاريخ التفعيل</th>
          <th scope="col">المندوب</th>
          <th scope="col">اسماء افراد العائلة</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, phone, cardNumber ,address ,startDate ,seller ,family  } in pageuser" :key="id">
          <td scope="col">{{name}}</td>
          <td scope="col">{{phone}}</td>
          <td scope="col"> {{cardNumber}}</td>
          <td scope="col">{{address}}</td>
          <td scope="col">{{startDate}}</td>
          <td scope="col">{{seller}}</td>
          <td scope="col">{{family}}</td>

        </tr>
      </tbody>
    </table>

  </div>
  </div>
  </div>
</template>

<script>
import { useLoadUserAll, deleteUser1 } from '@/firebase'
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      from:"2022-10-01",
      to:"2024-01-01",
      text:"",
      select:"",

    }
  },
  methods:{
    exportToPDF() {
      
      html2pdf(document.getElementById("element-to-convert"), {
				margin: 2,
  			filename: "card",
			});
      
    },
  },
  computed: {
    // a computed getter
    pageuser() {
      // `this` points to the component instance
     // return this.user1.slice(this.from,this.to)
      return   this.text ? this.user1.filter((e) =>(new Date(e.startDate)  >= new Date(this.from) && new Date(e.startDate)  <= new Date(this.to) && !e.seller.toLowerCase().indexOf(this.text.toLowerCase()) ) )
        : this.user1.filter((e) =>(new Date(e.startDate)  >= new Date(this.from) && new Date(e.startDate)  <= new Date(this.to)) )
        
    }
  },
  setup() {
    const user1 = useLoadUserAll()
    return { user1, deleteUser1 }
  },
 
}
</script>
<style scoped>

.search{
       position: relative;
       box-shadow: 0 0 40px rgba(51, 51, 51, .1);
         
       }

       .search input{

        height: 60px;
        text-indent: 25px;
        border: 2px solid #d6d4d4;


       }


       .search input:focus{

        box-shadow: none;
        border: 2px solid blue;


       }

       .search .fa-search{

        position: absolute;
        top: 20px;
        right: 16px;

       }

       .search button{

        position: absolute;
        top: 5px;
        left: 5px;
        height: 50px;
        width: 110px;
        background: blue;

       }
</style>
