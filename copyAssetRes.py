import os  
import sys  
import os.path
import re
import shutil

res_save = []
#filePath:文件夹路径
def delete_file(filePath):
    if os.path.exists(filePath):
        for fileList in os.walk(filePath):
            for name in fileList[2]:
                # os.chmod(os.path.join(fileList[0],name), stat.S_IWRITE)
                os.remove(os.path.join(fileList[0],name))
        # shutil.rmtree(filePath)
        return "delete ok"
    else:
        return "no filepath"

def copyJson():
    # 从目标目录中复制
    distP = 'D:/FishingGameClient/obb/raw-assets/raw-assets'
    if not os.path.exists(distP):
        os.makedirs(distP)
    else:
        delete_file(distP)
    p = r'D:\FishingGameClient\newtools\raw-assets'
    for root, dirs, files in os.walk(p):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            n = f.split('.')[0]
            if n in res_save:
                ziP = f[:2]
                if not os.path.exists(distP+'/'+ziP):
                    os.makedirs(distP+'/'+ziP)
                shutil.move(os.path.join(root, f), os.path.join(distP+'/'+ziP) )
def copyRes():
    # 从目标目录中复制
    distP = 'D:/FishingGameClient/obb/raw-assets/raw-assets'
    if not os.path.exists(distP):
        os.makedirs(distP)
    else:
        delete_file(distP)
    p = r'D:\FishingGameClient\newtools\raw-assets'
    for root, dirs, files in os.walk(p):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            n = f.split('.')[0]
            if n in res_save:
                ziP = f[:2]
                if not os.path.exists(distP+'/'+ziP):
                    os.makedirs(distP+'/'+ziP)
                shutil.move(os.path.join(root, f), os.path.join(distP+'/'+ziP) )

def start_find_chinese(path):
    outstr=''
    with open(path, 'rb') as infile:
        while True:
            content = infile.readline()
            contentStr=str(content,encoding='utf-8')
            sub='uuid'
            if contentStr.find(sub) != -1:
                idx=contentStr.index(sub)
                contentStr=contentStr[idx+8:-3]
                outstr=contentStr
                return outstr
            if not content:
                return outstr

def walkFile(file):
    out=''
    for root, dirs, files in os.walk(file):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        fontFile = []
        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if f.find('.fnt') != -1 and f.find('.meta') == -1:
                fontFile.append(f.split('.')[0])
            if path.find('.png') != -1 and path.find('.meta') != -1:
                if f.split('.')[0] not in fontFile:
                    res_save.append(start_find_chinese(path))
                # out+=start_find_chinese(path)
    # with open('tc_untranslated.txt', 'wb') as outfile:
    #     outfile.write(bytes(out, encoding = "utf8") )




if __name__ == '__main__':
    # walkFile(r'D:\FishingGameClient\assets\texture\game\arena\autopack')
    fileNameList = r'D:\FishingGameClient\obb\list.txt';
    objNameList = []
    for i in open(fileNameList, 'r'):
        objNameList.append(i.replace('\n', ''))

    for i in objNameList:
        objName = r"".join(i)
        if os.path.isdir(objName):
            walkFile(objName)
        elif os.path.isfile(objName):
            ""
    
    copyRes()