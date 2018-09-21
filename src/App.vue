<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 ">
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <hr>
      <p>{{ selectedComponent }}</p>
      <!-- prevents a dynamic component will be destroyed -->
      <keep-alive>
        <component :is="selectedComponent">
          <p>Default content</p>
        </component>
      </keep-alive>
      <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote!</p>
      </app-quote> -->
    </div>
  </div>
</div>
</template>

<script>
import appQuote from "./components/Quote.vue";
import appNew from "./components/New.vue";
import appAuthor from "./components/Author.vue";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote,
    appNew,
    appAuthor
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>

