# 开始使用

## HTML5 文档类型

Mkui 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。
<!-- no-vue-component -->
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mkui-cli</title>
</head>

<body>
    <div id="app">

    </div>
</body>

</html>
```


## 移动设备优先
为了确保适当的绘制和触屏缩放，需要在 `<head>` 之中添加 viewport 元数据标签。
<!-- no-vue-component -->
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
在移动设备浏览器上，通过为视口（viewport）设置 meta 属性为 user-scalable=no 可以禁用其缩放（zooming）功能。这样禁用缩放功能后，用户只能滚动屏幕，就能让你的网站看上去更像原生应用的感觉。注意，这种方式我们并不推荐所有网站使用，还是要看你自己的情况而定！
<!-- no-vue-component -->
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```