<template>
  <span v-if="formInstance.read">{{ value }}</span>
  <el-input v-else v-bind="$attrs" v-model="value" />
</template>

<script setup lang="ts">
import { useFormInstance } from '@vue-form-craft/hooks'

const value = defineModel<string>()

const formInstance = useFormInstance()
</script>
