<template>
    <div>
    Filter Todos: 
    <select 
        @change="filterTodos(select)" 
        v-model="select" 
        :required="true"
    >
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
    Number of todos:{{ getCurrentNumberOfTodos }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterTodos",
  data(){
      return{
        select:'',
        isCompleted:true
      }
  },
  computed:{
    ...mapGetters(['getCurrentNumberOfTodos'])
  },
  methods: mapActions(["filterTodos","toggleTodos"])
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
.toggleBtn{
    margin-left: 5px;
    padding: 6px;
    background-color: #41b883;
    border-radius: 5px;
}
</style>