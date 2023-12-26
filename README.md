## GCN 是一个用来可视化展示几内亚三巨头视频中出现的人物关系网络的静态开源项目

你可以借助于它自由地制作与展示你所喜爱的作品中的人物关系网络图。欢迎提交更新网络图，以及对现有网络的补充与修改。

### 具体规范：

- 数据以data.json格式储存，请严格按照现有数据进行增删改。
- 人物关系按以下规则编写规则：

  - 优先按照高 → 低辈份: 大胃王>姑姑>侯哥,肉肉>叔叔>侯哥
  - 同辈份优先高年龄: 侯哥>哥哥>尼古拉，侯爸>堂哥>大胃王
  - 朋友关系工作关系，优先指向主要人物，或互相指向: 乌斯曼<-朋友->侯哥
- 操作时，可手动 **查看/编辑** [Json数据](/data.json) ，也可使用[Excel_or_Json.py](/Excel_or_Json.py) 转换Json数据为表格进行批量编辑
  - 注：编辑完成侯，务必将修改的表格重新转为Json。转换选项见脚本注释。
安装所需依赖
```
pip install pandas openpyxl
```


### 截图

<img src=/screenshot.png />

### 数据格式

```
{
    // 节点列表
    nodes:[
        {
            "name": "侯哥",
			"role_id": 0,
            "avatar": "./img/houge.jpg"
        },
        {
            "name": "飞哥",
			"role_id": 1,
            "avatar": "./img/feige.jpg"
        },
        {
            "name": "大胃王",
			"role_id": 2,
            "avatar": "./img/dawei.jpg"
        },
    ],
    // 线条列表
    links:[
        {
            "source": 0,            // 起始节点在 nodes[] 中的索引
            "target": 1,            // 目标节点在 nodes[] 中的索引
            "relation": "徒弟",      // 关系名称
            "color": "734646"       // 自定义细条颜色,#734646
        },
        {
            "source": 2,
            "target": 0,
            "relation": "姑姑",
            "color": "734646"
        },
		{
            "source": 2,
            "target": 1,
            "relation": "保姆",
            "color": "734646"
        },
    ],
}
```

### 相关项目

- [relation-chart](https://github.com/xiedajian/relation-chart): 网络视图基于该项目创建。

