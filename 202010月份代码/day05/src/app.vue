<template>
  <h1 v-if='msg'>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue222",
    };
  },
};
</script>

<style>
h1 {
  background-color: red;
  color: yellow;
}
</style>