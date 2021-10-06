<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next"
  />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import useStore from "../../hooks/store";
import useNavigation, { Navigation } from "../../hooks/navigation";
import { StoreState, setFeedbackType } from "../../store";

import SelectFeedbackType from "./WizardStates/SelectFeedbackType.vue";
import WriteFeedback from "./WizardStates/WriteFeedback.vue";

interface SetupReturn {
  store: StoreState;
  next: Navigation["next"];
  handleSelectFeedbackType: (type: string) => void;
}

export default defineComponent({
  name: "Wizard",

  components: {
    SelectFeedbackType,
    WriteFeedback,
  },

  setup(): SetupReturn {
    const store = useStore();
    const { next } = useNavigation();

    function handleSelectFeedbackType(type: string): void {
      setFeedbackType(type);
    }

    return {
      store,
      next,
      handleSelectFeedbackType,
    };
  },
});
</script>
