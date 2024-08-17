import type { formItemType, schemaType } from '@/release'
import elements from '@/elements'

type option = {
  label?: string
  value: string
}

// 将表单树 递归转换为下拉选项 ，并且只取基础字段
const build = (nodes: formItemType[]) =>
  nodes.reduce<option[]>((acc, cur) => {
    if (elements[cur.component].type === 'basic') {
      acc = [...acc, { label: `${cur.label} (${cur.name})`, value: cur.name }]
    }

    if (cur.children) {
      acc = [...acc, ...build(cur.children)]
    }
    return acc
  }, [])

export default (schema: schemaType, current: formItemType): schemaType => {
  const targetOptions = build(schema.items).filter((item) => item.value !== current.name)

  return {
    labelWidth: 100,
    labelAlign: 'top',
    items: [
      {
        // label: '值联动',
        // help: '本字段值改变时触发，修改其他字段的值',
        hideLabel: true,
        name: 'change',
        component: 'FormList',
        children: [
          {
            label: '目标字段',
            name: 'target',
            component: 'Select',
            props: {
              mode: 'static',
              options: targetOptions,
              placeholder: '请选择目标字段',
              labelKey: 'label',
              valueKey: 'value'
            }
          },
          {
            label: '触发条件',
            name: 'condition',
            component: 'Input',
            help: '必须输入一个模板表达式，当表达式结果为true时才触发联动。如果不设置，默认会一直触发'
          },
          {
            label: '值',
            name: 'value',
            component: 'Input',
            help: '支持模板表达式'
          }
        ],
        props: {
          mode: 'card',
          title: '联动字段'
        }
      }
    ]
  }
}
