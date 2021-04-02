#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# find the line of containing UUID in files

import json, time
import re
import os

rootPath = '/Users/mac/Project/FishingGameClient/'
out=''

def start_find_uuid(path, name):
    data = ""
    contentData = ""
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            if not content:
                break
            contentStr=str(content,encoding='utf-8')
            contentData += contentStr
    data = json.loads(contentData)

    if data["subMetas"] and data["subMetas"][name]:
        return data["subMetas"][name]["uuid"]
    elif data["uuid"]:
        return data["uuid"]
    else: 
        return ''
    # print(data["subMetas"][name]["uuid"])

def compare_find_uuid(uuid, path):
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            contentStr=str(content,encoding='utf-8')
            sub='__uuid__'
            if contentStr.find(sub) != -1 and contentStr.find(uuid) != -1:
                return True
            if not content:
                return False

def compare_uuid(uuid):
    for root, dirs, files in os.walk(rootPath+"assets/"):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.prefab') != -1 and path.find('.meta') == -1:
                if compare_find_uuid(uuid, path):
                    global out
                    out += (path+" -- "+uuid)
                    out += "\n"
                    print(path+" -- "+uuid)

def walkFile(file):
    for root, dirs, files in os.walk(file):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.png') != -1 and path.find('.meta') != -1:
                name = f.split(".")[0]
                uuid = start_find_uuid(path, name)
                # 查找UUID是否被使用
                if uuid:
                    compare_uuid(uuid)
            elif path.find('.fnt') != -1 and path.find('.meta') != -1:
                name = f.split(".")[0]
                uuid = start_find_uuid(path, name)
                # 查找UUID是否被使用
                if uuid:
                    compare_uuid(uuid)
                
    
    with open('uuid.txt', 'wb') as outfile:
        outfile.write(bytes(out, encoding = "utf-8") )

    # # 遍历所有的文件夹
    # for d in dirs:
    #     print(os.path.join(root, d))

# start to find
if __name__ == '__main__':
    walkFile(rootPath+"assets/resources/langzh/")