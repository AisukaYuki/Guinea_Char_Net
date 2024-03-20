## 一个可视化展示几内亚三巨头视频中，人物关系网络的静态开源项目

你可以借助于它自由地制作与展示你所喜爱的作品中的人物关系网络图。欢迎提交更新网络图，以及对现有网络的补充与修改。

### 具体规范：

- 数据以json格式储存于index.html中，请严格按照现有数据进行增删改。

- 操作时，在线编辑思维导图，导出为Json数据。将字段格式修改后再粘贴至index.html中的mindMapData
  - 注：layout, root ,theme, view字段去除""号即可。也可用正则替换
```
(.+)"layout"(.+)"root"(.+)"theme"(.+)"view"(.+)

$1layout$2root$3theme$4view$5,
```


### 数据格式

```
{
    layout: "mindMap",
    root: {
        "data": {
            "text": "几内亚人物关系可视化思维导图",
            ...
        },
        "children": [
            {
                "data": {
                    "text": "非洲飞哥",
					...
                },
                "children": [
                    {
                        "data": {
                            "text": "瓦木诺家",
							...
                        }
                    }
                ]
            }
        ]
    },
    theme: {
        "template": "lemonBubbles",
        "config": {

        }
    },
    view: {
        "transform": {
        },
        "state": {
        }
    }
},
```

### 相关项目

- [mind-map](https://github.com/wanglin2/mind-map): 思维导图基于该项目创建。

