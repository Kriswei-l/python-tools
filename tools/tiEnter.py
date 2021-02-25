# coding=UTF-8

"""
将 "\\n" 转换为 "\n"
"""
import functools
import argparse
import os.path
import json, time

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

# 路径设置，更新换
# def walkFile(file):
#     for root, dirs, files in os.walk(file):

#         # root 表示当前正在访问的文件夹路径
#         # dirs 表示该文件夹下的子目录名list
#         # files 表示该文件夹下的文件list

#         # 遍历文件
#         for f in files:
#             path=os.path.join(root, f)
#             if path.find('.json') != -1:
#                 if compare_enter(path):
#                     print(path)
def compare_uuid(uuid):
    for root, dirs, files in os.walk("/Users/mac/Project/FishingGameClient/build/jsb-default/res/"):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list
        for fdir in dirs:
            if uuid[:2] == fdir:
                nowP = root+"/"+fdir+"/"
                for root, dirs, files in os.walk(nowP):
                    # 遍历文件
                    for f in files:
                        path=os.path.join(root, f)
                        if f.find(uuid) != -1:
                            if compare_enter(path):
                                print(path)
                
                break
# 查找UUID
def start_find_uuid(path, name):
    data = "";
    contentData = "";
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
def walkFile(file):
    for root, dirs, files in os.walk(file):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.json') != -1 and path.find('.meta') != -1:
                name = f.split(".")[0]
                uuid = start_find_uuid(path, name)
                # 查找UUID的文件
                if uuid:
                    compare_uuid(uuid)
                

    # # 遍历所有的文件夹
    # for d in dirs:
    #     print(os.path.join(root, d))


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