<template>
  <el-cascader
    v-model="value"
    :options="currentOptions"
    :loading="loading"
    :props="{
      multiple,
      label: labelKey,
      value: valueKey
    }"
    v-bind="$attrs"
    @change="selectChange"
  />
</template>

<script setup lang="ts">
import { type CascaderValue } from 'element-plus'
import useSelect from '@vue-form-craft/hooks/useSelect'
import type { SelectProps } from '@vue-form-craft/types'

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  multiple: false,
  mode: 'static',
  labelKey: 'label',
  valueKey: 'value',
  name: ''
})

const value = defineModel<CascaderValue>()

const { currentOptions, selectChange, loading } = useSelect(props)
</script>
