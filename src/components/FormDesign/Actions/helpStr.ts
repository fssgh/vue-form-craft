export default `// JSON Schema 配置说明
    // JSON的第一层是表单整体的配置
    // items里是所有字段的配置
    // 如果某一项配置需要动态设置（表单联动），可以改成用 {{ }} 包裹的字符串，就会被动态解析。
    // 可以使用的动态变量：$val(当前字段的值)、$values(整个表单的值) 。。。
{
  "labelWidth": 150,   // 标签宽度
  "labelAlign": "right",  //标签对齐方式
  "size": "default",   //组件大小
  "items": [
    {
      "label": "用户名", // 字段标签
      "component": "Input", // 字段渲染的组件
      "props": {   // 传给组件的props，用于定制化渲染组件，支持组件在el文档的所有props
        "placeholder": "请输入文本"
      },
      "designKey": "design-u3xY", // 这个是表单设计器自动生成一个参数key，对业务没有实际用处
      "name": "username", // 字段的唯一标识，必填
      "required": true, // 是否必填
      "hidden": false // 是否隐藏字段
    },
    {
      "label": "密码",
      "component": "Password",
      "props": {
        "placeholder": "请输入密码",
        "disabled": "{{ !$values.username }}" // 动态设置密码框是否禁用（用户名字段未输入时，将密码框禁用）
      },
      "designKey": "design-YaAl",
      "name": "password"
    },
    {
      "label": "验证码",
      "component": "Input",
      "props": {
        "placeholder": "请输入验证码"
      },
      "designKey": "design-GNbr",
      "name": "code",
      "hidden": "{{ !$values.password }}"  // 动态设置验证码框是否可见（未输入密码时，将验证码框隐藏）
    }
  ]
}`
