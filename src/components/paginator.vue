<template>
  <div>
    <button
      @click="getMoreResults(prevResults)"
      class="btn py-2 j-main-buttons shadow-sm"
      :class="!prevResults || prevResults == '0' ? 'disabled' : ''"
    >
      السابق
    </button>
    <!--  -->
    <template v-for="index in 15">
      <button
        v-if="page_number(skip, item_per_page, index) <= number_of_pages(count, item_per_page)"
        :key="index"
        class="btn j-button py-2 shadow-sm"
        :class="index == 15 ? 'disabled' : index == 1 ? 'selected' : ''"
        @click="getMoreResults(page_number(skip, item_per_page, index - 1) * item_per_page - skip)"
      >
        {{ index == 15? '...' : page_number(skip, item_per_page, index) }}
      </button>
    </template>
    <!--  -->
    <button
      @click="getMoreResults(nextResults)"
      class="btn py-2 j-main-buttons-next shadow-sm"
      :class="(skip + item_per_page ) >= count ? 'disabled' : ''"
    >
      التالي
    </button>
  </div>
</template>
<script>
export default {
  props:['count','total','prevResults','nextResults','skip','item_per_page'],
  data() {
    return {
        val: this.skip,
        last_page_number:0
    }
  },
  methods: {
    page_number(skip, item_per_page, index) {
      if (skip == 0) return index
      return (skip / item_per_page) + index
    },
    number_of_pages(total, item_per_page) {
      if (total == 0) return 0
      return Math.ceil(total / item_per_page)
    },
    getMoreResults(v){
      this.$emit('getMoreResults_from_child', v)
    }
  },
}
</script>
<style scoped>
.j-main-buttons-next.disabled {
  opacity: 1;
  color: #6f7274 !important;
}
.j-main-buttons.disabled {
  opacity: 1;
  color: #6f7274 !important;
}
.j-main-buttons-next {
  background-color: white !important;
  border-top-left-radius: 10px 10px;
  border-bottom-left-radius: 10px 10px;
  border-top-right-radius: 0px 0px;
  border-bottom-right-radius: 0px 0px;
  border-width: 1px;
  border-color: #eaedef;
  color: #6f7274 !important;
  /* box-shadow: 1px 1px 2px 1px  #e4ebed; */
}
.j-main-buttons {
  background-color: white !important;
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  border-top-left-radius: 0px 0px;
  border-bottom-left-radius: 0px 0px;
  border-width: 1px;
  border-color: #eaedef;
  color: #6f7274 !important;
}
.j-button {
  background-color: white;
  border-color: #eaedef;
  border-radius: 0;
}
.j-button.selected {
  background-color: #4e5a81;
  color: white;
}
</style>