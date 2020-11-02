#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# find the line of containing chinese in files

import re
import os

tmp = ["0"]

def start_find_chinese(path):
    outstr=''
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            contentStr=str(content,encoding='utf-8')
            sub='console.'
            if re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', content.decode('utf-8')) and contentStr.find(sub) == -1:
                rt = re.findall('\"(.*?)\"', contentStr)
                if rt :
                    for item in rt:
                        if re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', item):
                            if item not in tmp:
                                outstr = outstr + str(item)+"\n"
                                tmp.append(item)
            if not content:
                return outstr

        # while True:
        #     content = infile.readline()
        #     contentStr=str(content,encoding='utf-8')
        #     result = re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', content.decode('utf-8'))
        #     if result :
        #         rr = result.group()
        #         rt = re.findall('\"(.*?)\"', rr)
        #         if rt :
        #             for item in rt:
        #                 outstr = outstr + str(item)+"\n"
        #             # print(outstr)
        #     if not content:
        #         return outstr

def start_find_mix(path):
    outstr=''
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            contentStr=str(content,encoding='utf-8')
            sub='console.'
            if re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', content.decode('utf-8')) and contentStr.find(sub) == -1:
                rt = re.findall('\"(.*?)\"', contentStr)
                if rt :
                    for item in rt:
                        if re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', item):
                            outstr = outstr + str(item)+"\n"
            if not content:
                return outstr

        # while True:
        #     content = infile.readline()
        #     contentStr=str(content,encoding='utf-8')
        #     result = re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', content.decode('utf-8'))
        #     if result :
        #         rr = result.group()
        #         rt = re.findall('\"(.*?)\"', rr)
        #         if rt :
        #             for item in rt:
        #                 outstr = outstr + str(item)+"\n"
        #             # print(outstr)
        #     if not content:
        #         return outstr

def walkFile(file):
    out=''
    for root, dirs, files in os.walk(file):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.ts') != -1 and path.find('.meta') == -1:
                out+=start_find_chinese(path)
    with open('tc_untranslated.txt', 'wb') as outfile:
        outfile.write(bytes(out, encoding = "utf-8") )

        # # 遍历所有的文件夹
        # for d in dirs:
        #     print(os.path.join(root, d))

# start to find
if __name__ == '__main__':
    walkFile("D:\\git\\fish_client\\assets\\script")
