<template>
  <div class="flex justify-between w-full my-5">
    <button
      class="
        rounded-xl
        hover:bg-gray-100
        bg-brand-gray
        flex flex-col
        justify-center
        items-center
        p-5
        w-28
        cursor-pointer
        focus:outline-none
      "
      @click="handleSelect('ISSUE')"
    >
      <div class="w-12">
        <img class="w-full" src="@/assets/image/issue.png" alt="problema" />
      </div>
      <p class="font-medium mt-1 text-gray-800">Problema</p>
    </button>

    <button
      class="
        rounded-xl
        hover:bg-gray-100
        bg-brand-gray
        flex flex-col
        justify-center
        items-center
        p-5
        w-28
        cursor-pointer
        focus:outline-none
      "
      @click="handleSelect('IDEA')"
    >
      <div class="w-12">
        <img class="w-full" src="@/assets/image/lamp.png" alt="ideia" />
      </div>
      <p class="font-medium mt-1 text-gray-800">Ideia</p>
    </button>

    <button
      class="
        rounded-xl
        hover:bg-gray-100
        bg-brand-gray
        flex flex-col
        justify-center
        items-center
        p-5
        w-28
        cursor-pointer
        focus:outline-none
      "
      @click="handleSelect('OTHER')"
    >
      <div class="w-12">
        <img class="w-full" src="@/assets/image/fire.png" alt="outro" />
      </div>
      <p class="font-medium mt-1 text-gray-800">Outro</p>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@vue/runtime-core";

type SelectType = "ISSUE" | "IDEA" | "OTHER";

interface SetupReturn {
  handleSelect: (type: SelectType) => void;
}

export default defineComponent({
  name: "SelectFeedbackType",

  setup(_, { emit }: SetupContext): SetupReturn {
    function handleSelect(type: SelectType): void {
      emit("select-feedback-type", type);
      emit("next");
    }

    return {
      handleSelect,
    };
  },
});
</script>
