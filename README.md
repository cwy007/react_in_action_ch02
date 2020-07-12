# React In Action

《React实战》ch02

```bash
# 实时更新页面
browser-sync start --server --browser "Google Chrome" --files "stylesheets/*.css, *.html, *.js"

```

## ReactDOM.render 的函数签名

```jsx
ReactDOM.render(
  ReactElement element,
  DOMElement container,
  [function callback] // 中括号 [] 表示参数可选，非必填
) -> ReactComponent
```

## React.createElement 的函数签名

```jsx
// 中括号 [] 表示参数可选，非必填

React.createElement(
  String/ReactClass type, // 我在创建什么？
  [object props],         // 我怎么配置它？
  [children...]           // 它包含什么？
) -> React Element
```

## 概念

一种可用的熟悉的思维结构：一种与常规DOM元素相似的元素的树形结构。
React 元素是DOM 元素的虚拟表示。

* React元素与DOM元素之间的一些相似之处

![React元素与DOM元素之间的一些相似之处](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo2ihgipoj30hs05mq3x.jpg)

* React元素在React应用的整个过程中被使用的情况

![React创建和管理元素的简单蓝图](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo2j99r0vj30m8043wfo.jpg)

React使用React元素来创建虚拟DOM，React DOM管理和使用虚拟DOM来协调和更新实际DOM。

* React会递归地对一系列React元素进行求值来确定它应该如何为组件形成虚拟DOM树

```jsx
const root = React.createElement('div', {},
  React.createElement('div', {}, 'Hello, world!',
    React.createElement('a', {href: 'mailto:mark@ifelse.io'},
      React.createElement('h1', {}, 'React In Action'),
      React.createElement('em', {}, '...and now it really is!')
    )
  )
);
```

![为组件形成虚拟DOM树](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo3jcoqm4j30m80b6q6u.jpg)

可以沿箭头向下而后向右来了解React对嵌套React元素求值的方式以及每个参数在问什么

DOMElement

![DOMElement](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo3r4uebfj30hs06xjsn.jpg)

* React 元素

```html
React元素接收一个字符串来创建一种DOM元素（div、a、p等）。
可以通过props对象为React元素提供配置。这类似于DOM元素的属性（如<img src="aUrl"/>）。
React元素是可嵌套的，可以将其他React元素作为某个元素的子元素。
React使用React元素创建虚拟DOM。当React更新浏览器DOM时，React DOM会使用虚拟DOM。
React元素是React中构成组件的东西。
```

* React类有支撑实例而React元素没有

![React类有支撑实例而React元素没有](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo96c7iacj30hs0ab40w.jpg)

React会为React类的实例（不是蓝图本身）创建并追踪一个特殊的数据对象

React元素是DOM的镜像而组件是将它们组织在一起的方法

支撑实例是一种为特定组件提供数据存储和访问的方法
