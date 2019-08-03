<template>
  <div class="container-view">
    <Form :id="$route.query.id" />
  </div>
</template>

<script>

  import Form from './components/form'

  export default {
    components: { Form },
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
