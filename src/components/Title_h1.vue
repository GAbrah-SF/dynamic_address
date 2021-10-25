<template>
      <h1 class="fs-1 fw-bold title">{{ title.toLocaleUpperCase() }}</h1>
</template>

<script>
    export default {
      name: '',
      props: {
        title: String
      },
    }
</script>

<style scoped>
    .title {
      margin: 10px 0;
      color: black;
    }
</style>
