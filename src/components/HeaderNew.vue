<template>
  <nav class="navbar navbar-expand-lg navbar-light " style="background-color: rgb(239, 22, 22);">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/hospital">CMS AI
    </a>

    <div class=" navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active text-white" aria-current="page" to="/hospital">بطاقة الهلال الأحمر</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active text-white" aria-current="add" to="/add">إضافة بطاقة جديدة</router-link>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search"  placeholder="رقم البطاقة" aria-label="Search">
        <button class="btn btn-outline-success text-white" type="submit">بحث</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>