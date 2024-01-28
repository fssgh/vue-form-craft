## 表单联动

要评价一个表单工具能力强不强，表单联动能力至关重要。 **vue-form-craft** 通过`动态计算schema` 、`watch 监听` 等方式尽可能的让表单联动变简单。

### 插值表达式

插值表达式为字符串格式，以双花括号 {{ ... }}为语法特征，对于简单的联动提供一种简洁的配置方式。

被双花括号包裹的字符串一律会被解析为 **js表达式并返回结果**，且只能使用联动变量。这种联动方式基本能应对百分之80以上的联动场景😎

例如：控制字段禁用、隐藏、文案提示等交互。

**Schema 所有协议字段都支持插值表达式。**

> Schema插值表达式 可以使用的联动变量：

| 变量名      | 类型   | 描述                            |
| ----------- | ------ | ------------------------------- |
| $val        | Object | 当前字段值                      |
| $values     | Object | 整个表单的值                    |
| $selectData | Object | 选择类字段，已选项对应的数据源  |
| $utils      | Object | 一些工具函数                    |
| ...         | any    | 由schemaContext传入的自定义变量 |

<br/>

#### 举个栗子

评分低于3星可以输入差评原因

<div class="linkage1"></div>

```json
{
  "labelWidth": 150,
  "labelAlign": "right",
  "size": "default",
  "items": [
    {
      "label": "评分",
      "component": "Rate",
      "props": {
        "max": 5,
        "allow-half": true
      },
      "onlyId": "form-Lx4g",
      "name": "rate",
      "style": {},
      "required": true
    },
    {
      "label": "差评原因",
      "component": "Textarea",
      "props": {
        "autocomplete": "off",
        "showWordLimit": true,
        "type": "textarea",
        "autosize": {
          "minRows": 4,
          "maxRows": 999
        },
        "placeholder": "请输入..."
      },
      "onlyId": "form-XyJs",
      "name": "reason",
      "style": {},
      "hidden": "{{$values.rate>=3 || !$values.rate}}" //大于等于3分时隐藏，未评分时也要隐藏
    }
  ]
}
```

hidden、disabled本应该是静态的布尔值。这里我们通过插值表达式，就能根据其他字段的值动态改变。

### change配置

上面的插值表达式只能做配置类的联动，不能做 **修改表单值** 类的联动，所以给每个字段提供了一个change配置。

change是一个数组，数组每一项是要联动改变的字段值。target为目标字段，value是修改的值，也支持插值表达式。

配置了change，就会在这个字段的值改变时，才会触发change联动

<br/>

#### 举个栗子1

<div class="linkage2"></div>

```json
{
  "labelWidth": 150,
  "labelAlign": "right",
  "size": "default",
  "items": [
    {
      "label": "字段1",
      "component": "input",
      "props": {
        "placeholder": "请输入..."
      },
      "onlyId": "form-NASi",
      "name": "item1",
      "change": [
        {
          "target": "item2",
          "value": "{{$val}}"
        },
        {
          "target": "item3",
          "value": "{{$val + '元'}}"
        }
      ]
    },
    {
      "label": "字段2",
      "component": "input",
      "props": {
        "placeholder": "请输入..."
      },
      "onlyId": "form-Nasd",
      "name": "item2"
    },
    {
      "label": "字段3",
      "component": "input",
      "props": {
        "placeholder": "请输入..."
      },
      "onlyId": "form-KI1N",
      "name": "item3"
    }
  ]
}
```

<br/>

#### 举个栗子2

一些场景需要根据已选值的数据源中取某个字段，再给其他字段作为值，这就可以用上 **$selectData** 了

<div class="linkage3"></div>

```json
{
  "labelWidth": 150,
  "labelAlign": "right",
  "size": "default",
  "items": [
    {
      "label": "选择商品",
      "component": "select",
      "props": {
        "mode": "static",
        "options": [
          {
            "name": "商品1",
            "id": "1",
            "price": 25
          },
          {
            "name": "商品2",
            "id": "2",
            "price": 65
          },
          {
            "name": "商品3",
            "id": "3",
            "price": 66
          }
        ],
        "placeholder": "请选择...",
        "labelKey": "name",
        "valueKey": "id"
      },
      "onlyId": "form-2Rtu",
      "name": "commodity",
      "change": [
        {
          "target": "price",
          "value": "{{$selectData.commodity?.price}}"
        }
      ]
    },
    {
      "label": "价格",
      "component": "inputNumber",
      "onlyId": "form-rS3W",
      "name": "price",
      "props": {
        "min": 1,
        "max": 9999,
        "step": 1,
        "unit": "元",
        "disabled": true,
        "controlsPosition": "right"
      }
    }
  ]
}
```
