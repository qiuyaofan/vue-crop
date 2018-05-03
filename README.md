# vue-crop

> vue版本裁切工具，包含预览功能

在线地址： [https://qiuyaofan.github.io/vue-crop-demo/](https://qiuyaofan.github.io/vue-crop-demo/) 

插件讲解请看： [https://github.com/qiuyaofan/vue-crop/issues/1](https://github.com/qiuyaofan/vue-crop/issues/1)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

#### 调用

```
<vue-crop
    :crop-url="cropUrl1"
    :ratio="ratio"
    :height="460"
    :width="460"
    :previewJson="previewJson"
    class="c-crop--preview_right"
    @afterCrop="afterCrop"
  >
```

#### 参数介绍

|参数名|默认值（可选值）|作用|类型|
|----|-----|-----|-----|
|crop-url| null | 裁切图片src |string|
|ratio | null | 裁切框比例，默认没有 |number|
| height | null| 裁切屏幕高度|number|
| width | null| 裁切屏幕宽度|number|
| previewJson | null| 预览裁切效果的配置json|json|
| afterCrop | null| 裁切完成回调|function|

#### previewJson参数介绍
```
// demo:
previewJson: [{
	width: 50,
	radius: true
}, {
	width: 100,
	radius: false
}]
```
|参数名|默认值（可选值）|作用|类型|
|----|-----|-----|-----|
| width | null | 预览框宽高 |number|
| radius | null | 是否是圆形，默认没有 |boolen|


