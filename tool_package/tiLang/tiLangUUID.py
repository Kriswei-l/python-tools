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
def listToJsonEx(lst):
    # 如果想json有key值可以先转成字典，然后再写入文件（list_json）
    # keys = [str(x) for x in np.arange(len(lst))]
    # list_json = dict(zip(keys, lst))
    str_json = json.dumps(lst,separators=(',', ':'), ensure_ascii=False)  # json转为string
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

# 查找替换的prefab的UUID
def find_ti_uuid(path, fileType):
    if not fileType:
        return

    pathList = path.split('/')
    fileName = pathList[len(pathList)-1]
    for d in fileType:
        if os.path.isfile(path+'.'+d) and os.path.isfile(path+'.'+d+'.meta'):
            uuid = start_find_uuid(path+'.'+d+'.meta', fileName)
            # print(uuid)
            return uuid

# 打开文件查找reuuid
def open_prefab_find(path, reuuid, langPath, fileType, typeName):
    data = ""
    contentData = ""
    bLine = 0
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
    
    typeTab = 0
    typeindx = 0
    for i in range(0,len(data)):
        d = data[i]
        # print(d)
        if d['__type__'] == typeName:
            typeindx += 1
            typeTab = i
        if typeindx == 1 and d['__type__'] == reuuid:
            typeindx -= 1
            # print(data[typeTab]['_spriteFrame']['__uuid__'])
            # data[typeTab]['_spriteFrame']['__uuid__'] = "1"
            # 替换UUID
            if d['i18n_string']:
                # print(langPath+'/'+d['i18n_string'])
                tiUUID = find_ti_uuid(langPath+'/'+d['i18n_string'], fileType)
                if tiUUID:
                    if data[typeTab]['_spriteFrame']:
                        data[typeTab]['_spriteFrame']['__uuid__'] = tiUUID
                    else:
                        print(path)
            typeTab = 0
        if d['__type__'] == 'cc.PrefabInfo' or d['__type__'] == 'cc.Node':
            typeindx = 0
            typeTab = 0
    

    # 数据写入文件
    with open(path,"w+") as fw:
        if bLine > 1:
            dJson = listToJson(data)
            fw.write(dJson)
        else:
            dJson = listToJsonEx(data)
            fw.write(dJson)

# 查找所有的prefab并替换
def find_prefab(reuuid, fileType, typeName):
    language = ''
    pathPrefab = ''
    pathtexture = ''
    scene = ''
    with open('./tool_package/tiLang/langConf.txt', 'rb') as infile:
        while True:
            content = infile.readline()
            if not content:
                break
            contentStr=str(content,encoding='utf-8').replace('\n', '')
            # print(contentStr)
            alist = contentStr.split('=')
            if alist[0] == 'language':
                language = alist[1].strip()
            elif alist[0] == 'pathPrefab':
                pathPrefab = alist[1].strip()
            elif alist[0] == 'pathtexture':
                pathtexture = alist[1].strip()
            elif alist[0] == 'scene':
                scene = alist[1].strip()
    
    # 查找单独的一个prefab
    # open_prefab_find("./tool_package/test.prefab", reuuid, language, fileType, typeName)
    # return
    # 
    for root, dirs, files in os.walk(pathPrefab):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list
        
        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.prefab') != -1 and path.find('.meta') == -1:
                open_prefab_find(path, reuuid, language, fileType, typeName)
    for root, dirs, files in os.walk(pathtexture):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list
        
        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.prefab') != -1 and path.find('.meta') == -1:
                open_prefab_find(path, reuuid, language, fileType, typeName)
    # 查找场景
    for root, dirs, files in os.walk(scene):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list
        
        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if path.find('.fire') != -1 and path.find('.meta') == -1:
                open_prefab_find(path, reuuid, language, fileType, typeName)

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
        iList = i.split(':')
        if len(iList) < 3:
            break
        typeName = iList[0]
        objName = r"".join(iList[1])
        if os.path.isdir(objName):
            # walkFile(objName)
            ''
        elif os.path.isfile(objName):
            uuid = start_find_uuid(objName, i)
            reuuid = compressUuid(uuid)
            print(reuuid)
            if iList[1]:
                fileType = iList[2].split('-')
            find_prefab(reuuid, fileType, typeName)

