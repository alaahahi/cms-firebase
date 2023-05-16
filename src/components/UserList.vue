
<template>



<div class="container mt-4">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-8">

    <div class="search">
      <i class="fa fa-search"></i>
      <input type="text"  v-model="text" class="form-control" placeholder="رقم البطاقة">
      <button class="btn btn-primary">بحث</button>
    </div>

    
    
  </div>
  <h5 class="text-center pt-3" v-if="this.text">عدد النتائج  {{pageuser.length}}</h5>
</div>
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
          <th  class="action" scope="col">تنفيذ</th>
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
          <td class="action">
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="m-3 d-flex justify-content-center" v-if="!this.text">



    <paginator :prevResults="prevResults" :nextResults="nextResults" :skip="skip" :item_per_page="item_per_page"
          :count="users.length" :total="users.length"
          @getMoreResults_from_child="getMoreResults_from_child">
        </paginator>

    </div>

    </div>
    

  </div>

</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'
import paginator from './paginator.vue'
export default {
  components: {
    paginator,
  },
  data() {
    return {
      item_per_page: 10,
      prevResults: 0,
      nextResults: 10,
      skip: 0,

      from:0,
      to:9,
      text:""
    }
  },
  methods:{
    getMoreResults_from_child(v) {
      this.skip = this.skip + v
      if (this.skip != 0) {
        this.prevResults = this.item_per_page * -1
      }
      if (this.skip == 0) {
        this.prevResults = 0
      }
      if (this.skip + this.item_per_page < this.resultsCount) {
        this.max = false
      }
      if (this.skip + this.item_per_page >= this.resultsCount) {
        this.max = true
      }
      this.pageuser
    },
    goto() {
        window.scrollTo(0, top);
    },

  },
  computed: {
    // a computed getter
    pageuser() {
      // `this` points to the component instance
      //return this.users.slice(this.from,this.to)
      return   this.text
        ? this.users.filter((e) =>!e.name.toLowerCase().indexOf(this.text.toLowerCase()) || !e.cardNumber.indexOf(this.text)  || !e.seller.indexOf(this.text)  || !e.phone.indexOf(this.text))
        :this.users.slice(this.skip,this.skip+10)
    }
  },
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
    
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
