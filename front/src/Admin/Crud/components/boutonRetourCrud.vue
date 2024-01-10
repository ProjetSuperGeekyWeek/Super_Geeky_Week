<template>
  <input type="button" value="retour" @click="returnCrud" class="button_crud_retour">
</template>

<script>
export default {
  name: 'bouttonRetourCrud',
  methods: {
    async returnCrud() {
      this.$router.push('/admin/crud')
    }
  }
}
</script>

<style>
.button_crud_retour{
  border: 1px black solid;
}
</style>