#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# find the line of containing chinese in files

import re
import os

def start_find_chinese(path):
    outstr=''
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            contentStr=str(content,encoding='utf-8')
            sub='_string'
            if re.match(r'^((?!(\*|//)).)+[\u4e00-\u9fa5]', content.decode('utf-8'))  and contentStr.find(sub) != -1:
                idx=contentStr.index(sub)
                contentStr=contentStr[idx+11:-3]
                contentStr=contentStr+"\n"
                outstr+=contentStr
            if not content:
                return outstr


def walkFile(file):
    out=''
    for root, dirs, files in os.walk(file):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.prefab') != -1 and path.find('.meta') == -1:
                out+=start_find_chinese(path)
    with open('tc_untranslated.txt', 'wb') as outfile:
        outfile.write(bytes(out, encoding = "utf8") )


        # # 遍历所有的文件夹
        # for d in dirs:
        #     print(os.path.join(root, d))

# start to find
if __name__ == '__main__':
    walkFile("/Users/mac/NewProject/fisshinggameclient/assets")
