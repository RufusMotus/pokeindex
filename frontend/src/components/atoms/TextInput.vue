<template>
  <input
    :class="['text-input', { error: props.error }]"
    type="text"
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="updateValue"
    :disabled="props.disabled"
    ref="input"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const input = ref();

const props = withDefaults(
  defineProps<{
    modelValue: string;
    width?: string;
    margin?: string;
    padding?: string;
    placeholder?: string;
    borderRadius?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    error?: boolean;
    focus?: boolean;
    disabled?: boolean;
    show?: boolean;
  }>(),
  {
    margin: '10px',
    width: '100%',
    padding: '10px 15px',
    placeholder: 'Type here...',
    borderRadius: '5px',
    borderTop: '2px solid #ffffff',
    borderRight: '2px solid #ffffff',
    borderBottom: '2px solid #ffffff',
    borderLeft: '2px solid #ffffff',
    error: false,
    focus: false,
    disabled: false,
    show: true
  }
);
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
  if (props.focus) {
    input.value.focus();
  }
});

const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped>
.text-input {
  background: #1e1e1e;
  padding: v-bind('props.padding');
  border-top: v-bind('props.borderTop');
  border-right: v-bind('props.borderRight');
  border-bottom: v-bind('props.borderBottom');
  border-left: v-bind('props.borderLeft');
  border-radius: v-bind('props.borderRadius');
  color: #ffffff;
  height: 45px;
  width: v-bind('props.width');
  max-width: 100%;
  margin: v-bind('props.margin');
  font-size: 14px;
  font-weight: bold;

  &.error {
    border: 2px solid #ff0000;
  }

  &:disabled {
    border: none;
  }
}
</style>
