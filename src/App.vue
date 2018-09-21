<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 ">
      <app-quote :quote="'Am wonderful quote!'"></app-quote>
    </div>
  </div>
</div>
</template>

<script>
import appQuote from "./components/Quote.vue";

export default {
  components: {
    appQuote
  }
};
</script>
