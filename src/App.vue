<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 ">
      <app-quote>
          <h2>{{ quoteTitle }}</h2>
          <p>A wonderful quote!</p>
      </app-quote>
    </div>
  </div>
</div>
</template>

<script>
import appQuote from "./components/Quote.vue";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote"
    };
  },
  components: {
    appQuote
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>

