<template>
  <div class="panier">
    <h1>Panier</h1>
  </div>
</template>

<script>
export default {
  name: 'PanierView',
  data() {
    return {};
  },
  components: {
  }
}
</script>

<style>
:root{
  --paragraph: #a7a9be;
  --bg: #0f0e17;
  --title: #fffffe;
  --bg-button: #ff8906;
  --bg-button2: #e53170;
  --secondary: #f25f4c;
  --transition: 0.5s
}

.panier{
  background-color: var(--bg);
  color: var(--title);
}
</style>