<template>
<div>
  <app-server v-for="server in 5"></app-server>
</div>
</template>

<script>
import ServerStatus from "../Server/ServerStatus.vue";

export default {
  components: {
    "app-server": ServerStatus
  }
};
</script>

