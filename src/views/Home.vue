<template>
  <v-container :class="isShow ? '' : 'red-bg'">
    <v-row>
      <v-col>
        <h1>Home page</h1>
        <v-btn @click="changeColor" flat color="secondary"> Change Color </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShow: "false",
    };
  },
  methods: {
    changeColor() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style >
.red-bg{
    background-color: red;
}
</style>