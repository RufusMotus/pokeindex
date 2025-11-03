<template>
  <div class="button" role="button">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    backgroundColor?: string;
    shrink?: number;
    margin?: string;
    borderRadius?: string;
    hoverBrightness?: string;
    width?: string;
    padding?: string;
    fontSize?: string;
  }>(),
  {
    backgroundColor: '#006300',
    shrink: 0,
    margin: '10px',
    borderRadius: '5px',
    hoverBrightness: '150%',
    width: 'fit-content',
    padding: '10px',
    fontSize: '1rem'
  }
);
</script>

<style lang="scss" scoped>
.button {
  padding: v-bind('props.padding');
  color: #ffffff;
  background-color: v-bind('props.backgroundColor');
  margin: v-bind('props.margin');
  border-radius: v-bind('props.borderRadius');
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  flex-shrink: v-bind('props.shrink');
  width: v-bind('props.width');
  transition: filter 0.3s ease-in-out;
  font-size: v-bind('props.fontSize');
  user-select: none;

  &:hover {
    cursor: pointer;
    filter: brightness(v-bind('props.hoverBrightness'));
  }
}
</style>
