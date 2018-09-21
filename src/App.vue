<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 ">
      <app-quote>
          <h2>The Quote</h2>
          <p>A wonderful quote!</p>
      </app-quote>
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
