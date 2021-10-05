<template>
  <teleport to="body">
    <component
      :is="state.component"
      @open-box="handleOpenBox"
      @close-box="handleCloseBox"
    />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";

import Standby from "../components/Widgets/Standby.vue";
import Box from "../components/Widgets/Box.vue";

type State = {
  component: "Box" | "Standby";
};

interface SetupReturn {
  state: State;
  handleOpenBox: () => void;
  handleCloseBox: () => void;
}

export default defineComponent({
  name: "Widget",

  components: {
    Box,
    Standby,
  },

  setup(): SetupReturn {
    const state = reactive<State>({
      component: "Standby",
    });

    function handleOpenBox(): void {
      state.component = "Box";
    }

    function handleCloseBox(): void {
      state.component = "Standby";
    }

    return {
      state,
      handleOpenBox,
      handleCloseBox,
    };
  },
});
</script>
