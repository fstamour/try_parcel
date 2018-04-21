<template>
  <div class="app">
    <h1>bla</h1>
    <textarea :value="input" @input="update"></textarea>
    <div v-html="renderResult" />
  </div>
</template>

<script>
 export default {
   data() {
     return {
       input: '# bla',
     };
   },
   computed: {
     renderResult() {
       return this.input;
     },
   },
   methods: {
     // TODO Debounce
     update(event) {
       this.input = event.target.value
     },
   },
 }
</script>

<style lang="css" scoped>
</style>
