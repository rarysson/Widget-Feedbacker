<template>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main"
  >
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">
      Este é o playground, use para testar o widget
    </p>
  </div>

  <widget />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import Widget from "./Widget.vue";

export default defineComponent({
  name: "Playground",

  components: {
    Widget,
  },
});
</script>
