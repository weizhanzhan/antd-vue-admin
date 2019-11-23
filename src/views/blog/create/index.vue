<template>
  <wx-container>
    <div class="wx-body">
      <Form :id="$route.query.id" />
    </div>
  </wx-container>
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
