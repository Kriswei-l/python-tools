import os
import os.path
import subprocess
import glob
import json
import numpy as np
nw_path = "./"

# list 转成Json格式数据
def listToJson(lst):
    # 如果想json有key值可以先转成字典，然后再写入文件（list_json）
    # keys = [str(x) for x in np.arange(len(lst))]
    # list_json = dict(zip(keys, lst))
    str_json = json.dumps(lst, indent=2, ensure_ascii=False)  # json转为string
    return str_json
# 得到UUID转换
def compressUuid(uuid):
    # print(os.system("node /Users/mac/NewProject/cocoscreator_uuid "+ uuid))
    proc = subprocess.Popen(["node", "/Users/mac/NewProject/cocoscreator_uuid", uuid], stdout=subprocess.PIPE)
    # 1.
    # print(proc.stdout.readlines())
    # 2.
    out, err = proc.communicate()
    # print(out)
    # 3.
    # for line in iter(proc.stdout.readline, b''):
    #     print(line)
    # proc.stdout.close()
    # proc.wait()

    if proc.returncode != 0:
        print("error  compressUuid")
    
    return bytes.decode(out).strip()
# 查找UUID
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

# 打开文件查找reuuid
def open_prefab_find(path, reuuid, langPath):
    data = ""
    contentData = ""
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            if not content:
                break
            contentStr=str(content,encoding='utf-8')
            contentData += (contentStr)
    data = json.loads(contentData)  #prefab内容
    # print(type(data))
    # print(isinstance(data, lsit))
    # print(data)
    
    typeTab = 0
    typeindx = 0
    for i in range(0,len(data)):
        d = data[i]
        # print(d)
        if d['__type__'] == 'cc.Sprite':
            typeindx += 1
            typeTab = i
        if typeindx == 1 and d['__type__'] == reuuid:
            typeindx -= 1
            print(data[typeTab]['_spriteFrame']['__uuid__'])
            data[typeTab]['_spriteFrame']['__uuid__'] = "1"
            if d['i18n_string']:
                print(d['i18n_string'])
            typeTab = 0




    # 数据写入文件
    dJson = listToJson(data)
    with open(path,"w+") as fw:
        fw.write(dJson)

# 查找所有的prefab并替换
def find_prefab(reuuid):
    language = ''
    pathPrefab = ''
    pathtexture = ''
    with open('./tool_package/tiLang/langConf.txt', 'rb') as infile:
        while True:
            content = infile.readline()
            if not content:
                break
            contentStr=str(content,encoding='utf-8').replace('\n', '')
            print(contentStr)
            alist = contentStr.split('=')
            if alist[0] == 'language':
                language = alist[1].strip()
            elif alist[0] == 'pathPrefab':
                pathPrefab = alist[1].strip()
            elif alist[0] == 'pathtexture':
                pathtexture = alist[1].strip()
    # 查找单独的一个prefab
    open_prefab_find("./tool_package/test.prefab", reuuid, language)

if __name__ == '__main__':
    # compress(os.getcwd())
    # src_dir = r'D:\FishingGameClient\build\jsb-default\res\raw-assets'
    nw_path = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    print(nw_path)
    # 测试获取UUID
    # uuid = compressUuid("0ffbc6e5-f3dc-448f-9c98-607e124207fe")
    # print(uuid)

    # 项目地址
    prog_path = ""
    # 需要替换文件的配置
    fileNameList = './tool_package/tiLang/i18nlist.txt';
    objNameList = []
    for i in open(fileNameList, 'r'):
        objNameList.append(i.replace('\n', ''))

    # 循环查找
    for i in objNameList:
        objName = r"".join(i)
        if os.path.isdir(objName):
            # walkFile(objName)
            ''
        elif os.path.isfile(objName):
            uuid = start_find_uuid(objName, i)
            reuuid = compressUuid(uuid)
            print(reuuid)
            find_prefab(reuuid)

