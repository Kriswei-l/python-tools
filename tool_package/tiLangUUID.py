import os
import os.path
import subprocess
import glob
import json
nw_path = "./"

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
        print("ddd")
    
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
def open_prefab_find(path, reuuid):
    data = ""
    contentData = ""
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            if not content:
                break
            contentStr=str(content,encoding='utf-8')
            contentData += contentStr
    data = json.loads(contentData)  #prefab内容
    # print(type(data))
    # print(isinstance(data, lsit))
    # print(data)
    for d in data:
        print(d)

    

def find_prefab(reuuid):
    open_prefab_find("./tool_package/test.prefab", reuuid)

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
    fileNameList = './tool_package/list.txt';
    objNameList = []
    for i in open(fileNameList, 'r'):
        objNameList.append(i.replace('\n', ''))

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

