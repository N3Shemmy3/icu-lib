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
        "password",
      ].includes(value);
    },
  },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const errorMessage = ref();
const isPasswordVisible = ref(false);

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

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
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
    <div class="relative">
      <label class="block relative">
        <input
          :type="
            props.inputmode === 'password' && !isPasswordVisible
              ? 'password'
              : 'text'
          "
          placeholder=""
          :inputmode="props.inputmode"
          @input="formatInput"
          class="w-full max-w-full bg-transparent px-4 pe-10 py-2 transition-all duration-300 rounded overflow-hidden border border-colorOutline-light dark:border-colorOutline-dark focus:border-colorPrimary-light focus:dark:border-colorPrimary-dark outline-none"
        />
        <span
          class="absolute left-4 top-2 transition-all duration-300 bg-colorBackground-light dark:bg-colorBackground-dark rounded text-gray-500 pointer-events-none"
          :class="{
            'text-xs -top-2.5': props.modelValue || isPasswordVisible,
            'text-base': !props.modelValue && !isPasswordVisible,
          }"
        >
          {{ props.placeholder }}
        </span>
      </label>
      <button
        v-if="props.inputmode === 'password'"
        type="button"
        @click="togglePasswordVisibility"
        class="absolute inset-y-0 right-0 px-3 flex items-center"
      >
        <Icon v-if="isPasswordVisible" name="lucide:eye" />
        <Icon v-else name="lucide:eye-off" />
      </button>
    </div>
    <p v-if="errorMessage" class="ms-auto text-sm justify-end text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
input:focus + span,
input:not(:placeholder-shown) + span {
  top: -0.75rem;
  font-size: 0.75rem;
  color: var(--colorPrimary-light);
}
</style>
