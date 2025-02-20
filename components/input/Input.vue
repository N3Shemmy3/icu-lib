<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Enter Value", // Default placeholder
  },
  inputmode: {
    type: String,
    default: "text", // Default input mode
    validator: (value) => {
      return [
        "text",
        "email",
        "search",
        "tel",
        "url",
        "numeric",
        "none",
        "decimal",
      ].includes(value);
    },
  },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const errorMessage = ref();

const formatInput = (event) => {
  const inputValue = event.target.value;
  let formattedValue = inputValue;

  if (props.inputmode === "numeric") {
    formattedValue = inputValue.replace(/[^0-9]/g, ""); // Only allow numbers
  } else if (props.inputmode === "decimal") {
    formattedValue = inputValue.replace(/[^0-9.]/g, ""); // Only allow numbers and decimal point
  }

  if (formattedValue !== inputValue) {
    event.target.value = formattedValue; // Update the input field
  }

  emit("update:modelValue", formattedValue);
  validateInput(formattedValue);
};

const validateInput = (value) => {
  if (props.inputmode === "numeric" && !/^[0-9]*$/.test(value)) {
    errorMessage.value = "Only numeric values.";
  } else if (
    props.inputmode === "decimal" &&
    !/^[0-9]*\.?[0-9]*$/.test(value)
  ) {
    errorMessage.value = "Invalid decimal number.";
  } else {
    errorMessage.value = null;
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    let formattedValue = newValue;

    if (props.inputmode === "numeric") {
      formattedValue = newValue?.replace(/[^0-9]/g, "");
    } else if (props.inputmode === "decimal") {
      formattedValue = newValue?.replace(/[^0-9.]/g, "");
    }

    if (formattedValue !== newValue) {
      emit("update:modelValue", formattedValue);
    }
    validateInput(formattedValue);
  }
);
</script>

<template>
  <div class="flex flex-col space-y-1">
    <input
      type="text"
      :placeholder="props.placeholder"
      :inputmode="props.inputmode"
      @input="formatInput"
      class="w-full max-w-full bg-transparent px-4 py-2 transition-all duration-300 rounded border border-colorOutline-light dark:border-colorOutline-dark focus:border-colorPrimary-light focus:dark:border-colorPrimary-dark outline-none"
    />
    <p v-if="errorMessage" class="ms-auto text-sm justify-end text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>
