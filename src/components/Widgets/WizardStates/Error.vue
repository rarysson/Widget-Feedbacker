<template>
  <div class="flex flex-col justify-between items-center w-full my-5">
    <icon name="error" size="70" :color="palette.danger" />

    <p class="text-xl font-black text-center w-full mt-2">
      Aconteceu algum erro!
    </p>

    <div class="flex justify-center items-center w-full mt-2">
      <button
        class="
          rounded-full
          font-regular
          text-sm
          flex flex-col
          justify-center
          bg-brand-gray
          items-center
          py-2
          px-5
          cursor-pointer
          focus:outline-none
        "
        @click="goBack"
      >
        Tente novamente
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import { resetStore } from "@/store";
import { brandColors } from "@/services/colors";

import Icon from "@/components/Icon.vue";

interface SetupReturn {
  palette: typeof brandColors;
  goBack: () => void;
}

export default defineComponent({
  name: "Error",

  components: { Icon },

  setup(): SetupReturn {
    function goBack(): void {
      resetStore();
    }

    return {
      palette: brandColors,
      goBack,
    };
  },
});
</script>
