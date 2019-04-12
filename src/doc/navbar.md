# navbar

### 演示

``` html
<mk-navbar 
    title="标题" 
    left-text="添加" 
    left-icon="add">
</mk-navbar>
```


### 事件监测

``` html
<mk-navbar 
    title="标题" 
    left-text="返回"  
    v-on:left_event="leftGetEvent" >
    <template v-slot:right>
        <mk-item class="item">
            <mk-icon type="add"></mk-icon>
            <span>保存</span>
        </mk-item>
    </template>
</mk-navbar>
<script>
export default {
    methods: {
      leftGetEvent() {
        alert('你点击了左侧按钮')
      }
    }
  }
</script>
```

### 自定义内容

``` html
<mk-navbar 
    title="标题" 
    left-text="返回"  >
    <template v-slot:left>
        <mk-item class="item">
            <mk-icon type="cloud_history"></mk-icon>
            <span>云服务</span>
        </mk-item>
    </template>
    <template v-slot:right>
        <mk-item class="item">
            <mk-icon type="add"></mk-icon>
            <span>保存</span>
        </mk-item>
    </template>
</mk-navbar>
```



| 属性 	| 默认值 	|  类型    |  描述 	|
|--	|-	       |--       |------	|
| title  |      |  `string`    |   navbar标题   	|
| is-left   |   `true`  |   `Boolean`   | 是否显示左侧按钮     	|
| is-right  |  `false`  |   `Boolean`   |   是否显示右侧按钮   	|
| left-text  |  `返回`  |   `string`   |   左侧侧栏文字   	|
| left-icon  |  `icon_left`  |   `string`   |   左测图标,图标库请参考 	|

| 事件 	|   描述 	|
|--	|------	|
| left_event  |   左侧点击事件(自定义组件会失效)	|



