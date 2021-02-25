# coding=UTF-8

"""
将 "\\n" 转换为 "\n"
"""
import functools
import argparse
import os.path

def compare_enter(fileName):
    assert fileName and os.path.exists(fileName), "file not found"

    with open(fileName, "rb") as f:
        data = bytearray(os.path.getsize(fileName))
        f.readinto(data)
        # print(data)
        data = data.replace(rb'\\n', b'\\n')

    with open(fileName, "wb") as f:
        # print(data)
        f.write(data)

def walkFile(file):
    for root, dirs, files in os.walk(file):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.json') != -1:
                if compare_enter(path):
                    print(path)


def main():
    # enter argparse 
    # parser = argparse.ArgumentParser()
    # parser.add_argument("-file", dest = "fileName")
    # args = parser.parse_args()
    # fileName = args.fileName
    # assert fileName and os.path.exists(fileName), "file not found"
    walkFile("/Users/mac/Project/FishingGameClient/assets/resources/lang/")


if __name__ == "__main__":
    main()