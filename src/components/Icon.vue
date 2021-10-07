<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from "./Icon/Loading.vue";
import Copy from "./Icon/Copy.vue";
import ChevronDown from "./Icon/ChevronDown.vue";
import Chat from "./Icon/Chat.vue";
import Close from "./Icon/Close.vue";
import Back from "./Icon/Back.vue";
import Success from "./Icon/Success.vue";
import Error from "./Icon/Error.vue";

export default {
  name: "Icon",

  components: {
    Loading,
    Copy,
    ChevronDown,
    Chat,
    Close,
    Back,
    Success,
    Error,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
