<template>
  <div class="box animate__animated animate__fadeInUp animate__faster">
    <div
      class="relative w-full flex"
      :class="{
        'justify-between': canShowExtraInfo,
        'justify-end': !canShowExtraInfo,
      }"
    >
      <button
        v-if="canShowExtraInfo"
        class="text-xl text-gray-800 focus:outline-none"
        :class="{ invisible: canGoBack }"
        :disabled="canGoBack"
        @click="back"
      >
        <icon name="back" :color="colors.gray['800']" />
      </button>

      <p
        v-if="canShowExtraInfo"
        class="text-xl font-black text-center text-brand-main"
      >
        {{ label }}
      </p>

      <button
        class="text-xl text-gray-800 focus:outline-none"
        @click="emit('close-box')"
      >
        <icon name="close" size="14" :color="colors.gray['800']" />
      </button>
    </div>

    <wizard />

    <div v-if="canShowExtraInfo" class="text-gray-800 text-sm flex justify-end">
      <icon name="chat" class="mr-1" :color="brandColors.graydark" />
      widget by
      <span class="ml-1 font-bold">feedbacker</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from "@vue/runtime-core";
import { ComputedRef } from "@vue/reactivity";

import useStore from "../../hooks/store";
import useNavigation, { Navigation } from "../../hooks/navigation";

import { brandColors } from "../../services/colors";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from "tailwindcss/colors";

import Icon from "../Icon.vue";
import Wizard from "./Wizard.vue";

interface SetupReturn {
  emit: SetupContext["emit"];
  label: ComputedRef<string>;
  back: Navigation["back"];
  canGoBack: ComputedRef<boolean>;
  canShowExtraInfo: ComputedRef<boolean>;
  brandColors: Record<string, string>;
  colors: Record<string, string>;
}

export default defineComponent({
  name: "Box",

  components: {
    Icon,
    Wizard,
  },

  emits: ["close-box"],

  setup(_, { emit }: SetupContext): SetupReturn {
    const store = useStore();
    const { back } = useNavigation();

    const label = computed<string>(() => {
      if (store.feedbackType === "ISSUE") {
        return "Reporte um problema";
      }

      if (store.feedbackType === "IDEA") {
        return "Nos fale a sua ideia";
      }

      if (store.feedbackType === "OTHER") {
        return "Abra sua mente";
      }

      return "O que você tem em mente?";
    });

    const canGoBack = computed<boolean>(() => {
      return store.currentComponent === "SelectFeedbackType";
    });

    const canShowExtraInfo = computed<boolean>(() => {
      return (
        store.currentComponent !== "Success" &&
        store.currentComponent !== "Error"
      );
    });

    return {
      emit,
      label,
      back,
      canGoBack,
      canShowExtraInfo,
      brandColors,
      colors,
    };
  },
});
</script>

<style lang="postcss" scoped>
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>
