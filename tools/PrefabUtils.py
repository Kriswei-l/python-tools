import os
import json

class PrefabUtils:
    """ 预设Prefab 工具类"""
    def __init__(self, dirname):
        self.dirpath = dirname
    
    def listToJson(self, lst):
        '''list 转成Json格式数据(换行) '''
        # 如果想json有key值可以先转成字典，然后再写入文件（list_json）
        # keys = [str(x) for x in np.arange(len(lst))]
        # list_json = dict(zip(keys, lst))
        str_json = json.dumps(lst, indent=2, ensure_ascii=False)  # json转为string
        return str_json
    
    def listToJsonEx(self, lst):
        '''list 转成Json格式数据(没有换行) '''
        # 如果想json有key值可以先转成字典，然后再写入文件（list_json）
        # keys = [str(x) for x in np.arange(len(lst))]
        # list_json = dict(zip(keys, lst))
        str_json = json.dumps(lst,separators=(',', ':'), ensure_ascii=False)  # json转为string
        return str_json

    def start_find_uuid(self, path, name):
        '''获得Prefab的UUID
            path-文件路径
            name-文件名字
        '''
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

    
    def find_ti_uuid(self, path, fileType):
        '''通过路径和文件类型获得prefab的UUID
            path-路径
            fileType-类型[]：查找的文件类型，后缀：例如 [png,jpg]
        '''
        if not fileType:
            return

        pathList = path.split('/')
        fileName = pathList[len(pathList)-1]
        for d in fileType:
            if os.path.isfile(path+'.'+d) and os.path.isfile(path+'.'+d+'.meta'):
                uuid = self.start_find_uuid(path+'.'+d+'.meta', fileName)
                # print(uuid)
                return uuid
    
    def read_prefab_json(self, path):
        '''通过Prefab路径获得对应的Json文件'''
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
        return data
    
    def write_json_prefab(self, path, data, bLine):
        '''把json文件写入文件
            path-文件路径
            data-json数据
            bLine-是否多行-True:多行
        '''
        # 数据写入文件
        with open(path,"w+") as fw:
            if bLine > 1:
                dJson = self.listToJson(data)
                fw.write(dJson)
            else:
                dJson = self.listToJsonEx(data)
                fw.write(dJson)
    
    def get_FileSize(self, filename):
        '获取文件的大小,结果保留两位小数，单位为kb'
        fsize = os.path.getsize(filename)
        fsize = fsize/float(1024)
        return f'{round(fsize, 2)} kb'