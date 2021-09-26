'''
Date: 2021-09-26 18:20:49
LastEditTime: 2021-09-26 18:37:00
FilePath: /python-tools/utils/FilsUtils.py
Description: 文件读取类
'''
import os
import os.path


class FilsUtils():

    def __init__(self):
        """Sets the initial state of self,and the initial state is []"""

    def readTxt(path):
        confArr = []
        with open(path, 'rb') as infile:
            while True:
                content = infile.readline()
                if not content:
                    break
                contentStr = str(content, encoding='utf-8').replace('\n', '')
                print(contentStr)
