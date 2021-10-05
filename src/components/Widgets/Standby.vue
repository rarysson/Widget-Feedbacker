<template>
  <div
    class="
      fixed
      z-50
      bottom-0
      right-0
      mb-5
      mr-5
      bg-brand-main
      rounded-full
      py-3
      px-5
      flex
      items-center
      shadow-xl
      cursor-pointer
      select-none
      animate__animated animate__fadeInUp animate__faster
    "
    @click="emit('open-box')"
  >
    <icon class="mr-3" name="chat" color="white" size="27" />
    <span class="font-black text-white text-xl">Deixe um feedback</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@vue/runtime-core";

import Icon from "../Icon.vue";

interface SetupReturn {
  emit: SetupContext["emit"];
}

export default defineComponent({
  name: "Standby",

  emits: ["open-box"],

  components: { Icon },

  setup(_, { emit }: SetupContext): SetupReturn {
    return {
      emit,
    };
  },
});
</script>
