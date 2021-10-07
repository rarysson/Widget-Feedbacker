<template>
  <div class="flex flex-col justify-between items-center w-full my-5">
    <icon name="success" size="70" :color="palette.success" />

    <p class="text-xl font-black text-center w-full mt-2">
      Obrigado! Recebemos o seu feedback
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
        Envie mais feedbacks
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
  name: "Success",

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
