<template>
  <h1>widget</h1>
  <widget />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Widget from "./views/Widget.vue";

export default defineComponent({
  name: "App",

  components: {
    Widget,
  },
});
</script>
