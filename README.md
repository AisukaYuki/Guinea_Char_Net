## GCN 是一个用来可视化展示几内亚三巨头视频中出现的人物关系网络的静态开源项目

你可以借助于它自由地制作与展示你所喜爱的作品中的人物关系网络图。欢迎提交更新网络图，以及对现有网络的补充与修改。

### 具体规范：

- 数据以json格式储存，请严格按照现有json数据进行增删改。
- 人物关系按以下规则编写规则：

  - 优先按照高 → 低辈份
  - 同辈份优先高年龄
  - 朋友关系工作关系，优先指向主要人物
- 新增角色时，同时 **查看/编辑** [角色ID表](/role_id.md)文件记录ID，以方便编辑关系时对照ID，编辑jSON文件。

### 截图

     暂无

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

