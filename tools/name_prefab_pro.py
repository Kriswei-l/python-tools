import os
import os.path
import subprocess
import glob
import json
import re

nw_path = "./"

# list 转成Json格式数据
def listToJson(lst):
    # 如果想json有key值可以先转成字典，然后再写入文件（list_json）
    # keys = [str(x) for x in np.arange(len(lst))]
    # list_json = dict(zip(keys, lst))
    str_json = json.dumps(lst, indent=2, ensure_ascii=False)  # json转为string
    return str_json
def listToJsonEx(lst):
    # 如果想json有key值可以先转成字典，然后再写入文件（list_json）
    # keys = [str(x) for x in np.arange(len(lst))]
    # list_json = dict(zip(keys, lst))
    str_json = json.dumps(lst,separators=(',', ':'), ensure_ascii=False)  # json转为string
    return str_json

# 打开文件查找文字
def open_prefab_find(path, typeName, bClear):
    data = ""
    contentData = ""
    bLine = 0

    ziContent = ''
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            if not content:
                break
            contentStr=str(content,encoding='utf-8')
            contentData += (contentStr)
            bLine += 1
    data = json.loads(contentData)  #prefab内容
    # print(type(data))
    # print(isinstance(data, lsit))
    # print(data)
    
    bDuo = 0
    for i in range(0,len(data)):
        d = data[i]
        # print(d)
        if d['__type__'] == typeName and d['_string'] and re.match(r'^((?!(\*|//)).)+[\u4e00-\u9fa5]', d['_string']):
            bDuo += 1
            # print(path)
            if bDuo == 1:
                ziContent = ziContent + path + ':'+d['_string']
            else:
                ziContent = ziContent + '    ' + d['_string']
            if bClear:
                d['_string'] = ''
                if d['_N$string']:
                    d['_N$string'] = ''


    # 数据写入文件
    with open(path,"w+") as fw:
        if bLine > 1:
            dJson = listToJson(data)
            fw.write(dJson)
        else:
            dJson = listToJsonEx(data)
            fw.write(dJson)

    return ziContent

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
                nowout =open_prefab_find(path, 'cc.Label', False)
                # nowout =open_prefab_find(path, 'cc.EditBox', False)
                if nowout:
                    out += nowout+'\n'
                # cc.EditBox
    with open('tc_untranslated.txt', 'wb') as outfile:
        outfile.write(bytes(out, encoding = "utf8") )

if __name__ == '__main__':
    # compress(os.getcwd())
    # src_dir = r'D:\FishingGameClient\build\jsb-default\res\raw-assets'
    nw_path = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    print(nw_path)
    # 测试
    # walkFile("./")
    walkFile("/Users/mac/NewProject/fisshinggameclient/assets")

