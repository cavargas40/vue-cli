<template>
  <div class="component">
    <h1>The User component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>Name is {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :name="name"
                         @nameWasReset="name = $event"
                         :resetFn="resetName"
                         :userAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"
                       @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import appUserDetail from "./UserDetail.vue";
import appUserEdit from "./UserEdit.vue";

export default {
  data: () => {
    return {
      name: "Carlos",
      age: 27
    };
  },
  components: {
    appUserDetail,
    appUserEdit
  },
  methods: {
    changeName: function() {
      this.name = "Xiomara";
    },
    resetName: function() {
      this.name = "Carlos";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
