import { linkageAttr, basic, props } from '../commonAttr'

export default [
  ...basic,
  { label: '初始值', component: 'Input', name: 'initialValue' },
  {
    label: '校验规则',
    component: 'FormList',
    name: 'rules',
    children: [
      {
        label: '类型',
        component: 'Select',
        props: {
          mode: 'static',
          options: [
            {
              label: '不少于8位，由字母+数字组成',
              value: '^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'
            },
            {
              label: '不少于8位，至少包含一个大写字母、一个小写字母和一个数字',
              value: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$'
            },
            {
              label: '不包含空格',
              value: '^\\S*$'
            },
            {
              label: '自定义正则',
              value: 'custom'
            }
          ],
          placeholder: '请选择...',
          labelKey: 'label',
          valueKey: 'value'
        },
        onlyId: 'form-3L0P',
        name: 'type'
      },
      {
        label: '自定义正则',
        component: 'Input',
        props: {
          placeholder: '请输入正则表达式'
        },
        onlyId: 'form-Wdb2Reg',
        name: 'customReg',
        hidden: '{{$item.type!=="custom"}}'
      },
      {
        label: '提示语',
        component: 'Input',
        props: {
          placeholder: '请输入...'
        },
        onlyId: 'form-Wdb2',
        name: 'message'
      },
      {
        label: '校验时机',
        component: 'Checkbox',
        props: {
          mode: 'static',
          options: [
            {
              label: '失去焦点时',
              value: 'blur'
            },
            {
              label: '输入时',
              value: 'change'
            }
          ],
          placeholder: '请选择...',
          labelKey: 'label',
          valueKey: 'value'
        },
        onlyId: 'form-3L0P6666',
        name: 'trigger'
      }
    ],
    onlyId: 'form-89tI',
    props: {
      mode: 'card'
    }
  },

  {
    label: 'props',
    component: 'ItemGroup',
    name: 'props',
    children: [...props, { label: '显示清除按钮', component: 'Switch', name: 'clearable' }]
  },

  ...linkageAttr
]