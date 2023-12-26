import pandas as pd
import json

def json_to_excel():
    # 从文件中读取JSON数据
    with open('data.json', 'r', encoding='utf-8' ) as file:
        data = json.load(file)

    # 为节点和链接创建DataFrame
    nodes_df = pd.DataFrame(data["nodes"])
    links_df = pd.DataFrame(data["links"])

    # 创建带有两个工作表的Excel写入器
    with pd.ExcelWriter('data.xlsx') as writer:
        # 将节点数据写入第一个工作表
        nodes_df.to_excel(writer, sheet_name='Nodes', index=False)

        # 将链接数据写入第二个工作表
        links_df.to_excel(writer, sheet_name='Links', index=False)

def excel_to_json():
    # 从Excel文件中读取数据
    with pd.ExcelFile('data.xlsx') as xls:
        # 将每个工作表读入DataFrame
        nodes_df = pd.read_excel(xls, 'Nodes')
        links_df = pd.read_excel(xls, 'Links')

    # 将DataFrame转换为字典
    data = {
        "nodes": nodes_df.to_dict(orient='records'),
        "links": links_df.to_dict(orient='records')
    }

    # 将字典转换为JSON并保存到文件
    with open('data.json', 'w') as json_file:
        json.dump(data, json_file, indent=2)

# 用户输入
choice = input("输入 1 转换 JSON  到 Excel\n输入 2 转换 Excel 到 JSON：\n")

if choice == '1':
    json_to_excel()
    print("从JSON到Excel的转换完成。")
elif choice == '2':
    excel_to_json()
    print("从Excel到JSON的转换完成。")
else:
    print("无效选择。请输入 1 或 2。")
