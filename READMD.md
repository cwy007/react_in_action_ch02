# React In Action

《React实战》ch02

```bash
# 实时更新页面
browser-sync start --server --browser "Google Chrome" --files "stylesheets/*.css, *.html, *.js"

```

## ReactDOM.render 的签名

```jsx
ReactDOM.render(
  ReactElement element,
  DOMElement container,
  [function callback]
) -> ReactComponent
```

## 概念

React 元素是DOM 元素的虚拟表示。

* React元素与DOM元素之间的一些相似之处

![React元素与DOM元素之间的一些相似之处](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo2ihgipoj30hs05mq3x.jpg)

* React元素在React应用的整个过程中被使用的情况

![React元素在React应用的整个过程中被使用的情况](https://tva1.sinaimg.cn/large/007S8ZIlly1ggo2j99r0vj30m8043wfo.jpg)
