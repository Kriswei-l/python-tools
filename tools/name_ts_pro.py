#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# find the line of containing chinese in files

import re
import os

tmp = ["0"]

def line_chinese(content):
    outstr=''
    contentStr=str(content,encoding='utf-8')
    sub='console.'
    sub1='GameUtil.instance.umCounter'
    if re.match(r'^((?!(\*|//)).)+[\u4e00-\u9fa5]', content.decode('utf-8')) and contentStr.find(sub) == -1 and contentStr.find(sub1) == -1:
        rt = re.findall('\"(.*?)\"', contentStr)
        if rt :
            for item in rt:
                if re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', item):
                    return (item+"").strip()
                    # 判断语句是否存在，目前用不到了
                    # if item not in tmp:
                    #     outstr = outstr + str(item)+"\n"
                    #     tmp.append(item)

    return ""

# 查找文件里的中文字
def start_find_chinese(path):
    outstr=''
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            contentStr=str(content,encoding='utf-8')
            sub='console.'
            sub1='GameUtil.instance.umCounter'
            sub2='tooltip'
            if re.match(r'^((?!(\*|//)).)+[\u4e00-\u9fa5]', content.decode('utf-8')) and contentStr.find(sub) == -1 and contentStr.find(sub1) == -1 and contentStr.find(sub2) == -1:
                rt = re.findall('\"(.*?)\"', contentStr)
                if rt :
                    for item in rt:
                        if re.match(r'(.*[\u4E00-\u9FA5]+)|([\u4E00-\u9FA5]+.*)', item):
                            outstr = outstr + str(contentStr)
                            # outstr = outstr + str(item)+"\n"
                            # 判断语句是否存在，目前用不到了
                            # if item not in tmp:
                            #     outstr = outstr + str(item)+"\n"
                            #     tmp.append(item)
            
            if not content:
                return outstr

def find_ts_chinese(path):
    # 
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            line = line_chinese(content)
            if line :
                print(line)
            
            if not content:
                return



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
                # find_ts_chinese(path)
                nwout = start_find_chinese(path)
                if nwout:
                    out+= (path+':\n'+nwout)
    with open('tc_untranslated.txt', 'wb') as outfile:
        outfile.write(bytes(out, encoding = "utf-8") )

# start to find
if __name__ == '__main__':
    walkFile("/Users/mac/NewProject/fisshinggameclient/assets/script")
    # walkFile("/Users/mac/Project/FishingGameClient/assets/script")
    # walkFile('./tools/test/')