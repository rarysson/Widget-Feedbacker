<template>
  <div class="flex flex-col justify-center items-center w-full my-5">
    <textarea
      class="
        w-full
        rounded-lg
        border-2 border-gray-300 border-solid
        h-24
        p-2
        resize-none
        focus:outline-none
      "
      v-model.trim="state.feedback"
    ></textarea>
    <button
      class="
        rounded-lg
        font-black
        mt-3
        flex flex-col
        justify-center
        items-center
        py-2
        w-full
        cursor-pointer
        focus:outline-none
        transition-all
        duration-200
      "
      :class="{
        'opacity-50': state.isLoading,
        'opacity-50 bg-gray-100 text-gray-500': submitIsDisabled,
      }"
      :disabled="submitIsDisabled"
      @click="submitFeedback"
    >
      <icon
        v-if="state.isLoading"
        name="loading"
        class="animate-spin"
        color="white"
      />
      <template v-else> Enviar feedback </template>
    </button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  SetupContext,
} from "@vue/runtime-core";

import useStore from "@/hooks/store";
import useNavigation from "@/hooks/navigation";
// import services from "@/services/request";
const services = { feedbacks: { create(x: any): any {} } };
import { setMessage } from "@/store";

import Icon from "../../Icon.vue";

interface State {
  feedback: string;
  isLoading: boolean;
  hasError: Error | null;
}

interface SetupReturn {
  state: State;
  submitIsDisabled: ComputedRef<boolean>;
  handleError: (error: Error) => void;
  submitFeedback: (error: Error) => Promise<void>;
}

export default defineComponent({
  name: "WriteFeedback",

  components: {
    Icon,
  },

  setup(_, { emit }: SetupContext): SetupReturn {
    const store = useStore();
    const { setErrorState, setSuccessState } = useNavigation();
    const state = reactive<State>({
      feedback: "",
      isLoading: false,
      hasError: null,
    });

    const submitIsDisabled = computed<boolean>(() => {
      return !state.feedback;
    });

    function handleError(error: Error): void {
      state.hasError = error;
      state.isLoading = false;
      setErrorState();
    }

    async function submitFeedback(): Promise<void> {
      try {
        state.isLoading = true;
        setMessage(state.feedback);
        const response = services.feedbacks.create({
          type: store.feedbackType,
          text: store.message,
          page: store.currentPage,
          apiKey: store.apiKey,
          device: window.navigator.userAgent,
          fingerprint: store.fingerprint,
        });

        if (!response.errors) {
          setSuccessState();
        } else {
          setErrorState();
        }

        state.isLoading = false;
      } catch (error) {
        handleError(error);
      }
    }

    return {
      state,
      submitIsDisabled,
      handleError,
      submitFeedback,
    };
  },
});
</script>
