export default {
  labelWidth: 150,
  labelAlign: 'right',
  size: 'default',
  items: [
    {
      label: '用户名',
      component: 'Input',
      props: {
        placeholder: '请输入用户名'
      },
      onlyId: 'form-eNR0',
      name: 'username',
      required: true
    },
    {
      label: '密码',
      component: 'Password',
      props: {
        placeholder: '请输入密码'
      },
      onlyId: 'form-D1x7',
      name: 'password',
      required: true
    },
    {
      component: 'Grid',
      children: [
        {
          component: 'Button',
          props: {
            name: '登陆',
            clickEvent: 'submitForm',
            style: {
              'margin-left': 'auto',
              display: 'flex'
            }
          },
          onlyId: 'form-aBMY',
          name: 'submit',
          hideLabel: true
        },
        {
          component: 'Button',
          props: {
            name: '注册',
            clickEvent: 'resetForm',
            style: {}
          },
          onlyId: 'form-mtnY',
          name: 'IxjeOB',
          hideLabel: true
        }
      ],
      props: {
        colCount: 2,
        space: 20
      },
      onlyId: 'form-WNcq',
      name: 'HeDkKP'
    }
  ]
}