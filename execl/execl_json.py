#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pandas as pd
import numpy as np
import json
import os
import re

#读取execl，保存为字典数组
def read_excel(file_path,sheet_name='lan'):
    file = pd.read_excel(file_path, sheet_name=sheet_name)
    # 设置空值
    file = file.fillna("")

    lan_list = [[] for i in range(2)]

    for row in range(len(file.values)):
        for colu in range(len(file.values[row])):
            colu_data = file.values[row][colu]

            # 空值跳过
            if colu_data == "":
                continue

            if colu == 0:
                code = colu_data

            else:
                dict_data = {}
                # dict_data['code'] = (code)
                if isinstance(colu_data, str):
                    dict_data[code] = colu_data.replace("\r", "")
                else:
                    dict_data[code] = colu_data
                
                #扩充数组
                if colu>=len(lan_list):
                    lan_list.append([])

                #每读取一个语言保存在list中
                lan_list[colu-1].append(dict_data)

    return lan_list


#保存为json本地文件
def write_json(lan_source_list,lan_title,save_path):
    
    print("save_path", save_path)
    if not os.path.exists(save_path):  # 判断当前路径是否存在，没有则创建文件夹
        os.makedirs(save_path)

    #创建语言
    for index in range(len(lan_title)):
        # json_file = save_path+os.sep+lan_title[index]+".json"
        json_file = save_path+lan_title[index]+".json"

        lan_data = lan_source_list[index]

        # test1
        # keys = [re.findall("'(.*)'", str(x.keys())) for x in lan_data]
        # list_json = dict(zip(keys, lan_data))
        # test2
        # list_json = "".join(str(x) for x in lan_data);
        list_json = {};
        for x in lan_data:
            for c,v in x.items():
                list_json.setdefault(c, v);

        # 保存json
        with open(json_file, 'w', encoding="utf-8") as f:
            json.dump(list_json, f, ensure_ascii=False)

if __name__ == '__main__':
    
    lan_title = ['zh', 'zh_tw', 'en']
    # file_path = os.path.abspath('.')+os.sep+"language.xlsx"
    file_path = "./language.xlsx"
    sheet_name = "lan"

    # save_path = os.path.abspath('.')+os.sep+"result"
    save_path = "./result/"
    
    write_json(read_excel(file_path=file_path),lan_title=lan_title,save_path=save_path)
