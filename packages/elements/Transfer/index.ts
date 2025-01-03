import type { FormElement } from '@vue-form-craft/types'
import icon from './Icon.vue'
import attrSchema from './attrSchema'
import Transfer from './Transfer.vue'

export default {
  title: '穿梭框',
  component: 'Transfer',
  render: Transfer,
  icon,
  type: 'basic',
  order: 12,
  attrSchema
} satisfies FormElement
