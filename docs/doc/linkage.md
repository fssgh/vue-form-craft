<script setup>
import Linkage1 from './linkageDemo/linkage1.vue'
import Linkage2 from './linkageDemo/linkage2.vue'
import Linkage3 from './linkageDemo/linkage3.vue'
import Linkage4 from './linkageDemo/linkage4.vue'
</script>

# 表单联动

要评价一个表单工具能力强不强，表单联动能力至关重要。 **vue-form-craft** 通过 **模板引擎** 动态生成JsonSchema，让表单联动变得非常容易。

## 模板表达式

::: v-pre
模板表达式为字符串格式，以双花括号 {{ ... }}为语法特征，对于简单的联动提供一种简洁的配置方式。

在JsonSchema中，被双花括号包裹的字符串一律会被解析为 **js表达式并返回结果**，且只能使用联动变量。这种联动方式能应对大部分联动场景😎

例如：控制字段禁用、隐藏、文案提示等交互。
::: 

**JsonSchema 所有协议字段都支持模板表达式。**

```json
{
  "labelWidth": 150,
  "labelAlign": "right",
  "size": "default",
  "items": [
    {
      "label": "姓名",
      "component": "Input",
      "name": "name",
      "props": {
        "placeholder": "请输入姓名"
      }
    },
    {
      "label": "自我介绍",
      "component": "TextArea",
      "name": "desc",
      "props": {
        "placeholder": "{{ $values.name + '的自我介绍' }}",
        "disabled":"{{ !$values.name }}"
      }
    }
  ]
}
```

**Schema 所有协议字段都支持插值表达式。**

> Schema插值表达式 可以使用的联动变量：

| 变量名      | 类型   | 描述                                                     |
| ----------- | ------ | -------------------------------------------------------- |
| $val        | any    | 当前字段值                                               |
| $select     | Object | 当前字段如果是【选择类字段】，这个就是选中项对应的数据源 |
| $values     | Object | 整个表单的值                                             |
| $selectData | Object | 【选择类字段】选中项数据源合集                           |
| $item       | Object | 【自增组件】专用，单行的数据值                           |
| ...         | any    | 由schemaContext传入的自定义变量                          |

<br/>

### 举个栗子1

评分低于3星可以输入差评原因

<Linkage1/>


::: details 查看代码

<<< ./linkageDemo/linkage1.vue

:::

### 举个栗子2

【文章】需要依赖【分类】去查询，所以【分类】没选时，需要隐藏【文章】。

【分类】改变时，动态改变传给【文章】的接口参数

<Linkage2/>


::: details 查看代码

<<< ./linkageDemo/linkage2.vue

:::


## change配置

上面的插值表达式只能做配置级的联动，不能做 **修改表单值** 类的联动，所以给每个字段提供了一个change配置。

change是一个数组，可以同时联动多个字段。target为目标字段，value是修改的值，也支持插值表达式。

配置了change，就会在这个字段的值改变时，才会触发change联动

<br/>

### 举个栗子3

<Linkage3/>


::: details 查看代码

<<< ./linkageDemo/linkage3.vue

:::

### 举个栗子4

一些场景需要根据已选值的数据源中取某个字段，再给其他字段使用，这就可以用上 **$select** 了

<Linkage4/>


::: details 查看代码

<<< ./linkageDemo/linkage4.vue

:::

