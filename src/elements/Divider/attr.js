export default [
  { label: '字段标识', component: 'Input', name: 'name' },
  { label: '隐藏字段', component: 'Switch', name: 'hidden' },
  {
    label: 'props',
    component: 'ItemGroup',
    name: 'props',
    children: [
      { label: '标题', component: 'Input', name: 'title' },
      {
        label: '标题位置',
        component: 'Radio',
        name: 'contentPosition',
        props: {
          mode: 'static',
          options: [
            {
              label: '靠左',
              value: 'left'
            },
            {
              label: '居中',
              value: 'center'
            },
            {
              label: '靠右',
              value: 'right'
            }
          ]
        },
        initialValue: 'center',
        onlyId: 'form-PLpj'
      }
    ]
  }
]
