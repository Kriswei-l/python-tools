'''
Date: 2021-09-26 18:20:49
LastEditTime: 2021-09-27 11:49:29
FilePath: /python-tools/utils/FilsUtils.py
Description: 文件读取类
'''
import sys
import os
import os.path


class FilsUtils():
    
    # 获取当前路径
    def fileDir(self, fPath):
        path = sys.path[0]
        if fPath:
            path = fPath
        print(path)
        # 判断为脚本文件还是编译后文件，如果是脚本文件则返回脚本目录，否则返回编译后的文件路径
        if os.path.isdir(path):
            return path
        elif os.path.isfile(path):
            return os.path.dirname(path)
    # 读取txt内容
    def readTxt(self, path):
        # os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
        # nw_path = self.fileDir(None)
        # print(nw_path)
        confArr = []
        with open(path, 'rb') as infile:
            while True:
                content = infile.readline()
                if not content:
                    break
                contentStr = str(content, encoding='utf-8').replace('\n', '')
                confArr.append(contentStr)
                # print(contentStr)
        return confArr