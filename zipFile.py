#!/usr/local/bin/python3
import zipfile #引入zip管理模块
import os
import sys #引入sys模块，获取脚本所在目录


def zipDir(dirpath,outFullName):
    """
    压缩指定文件夹
    :param dirpath: 目标文件夹路径
    :param outFullName: 压缩文件保存路径+xxxx.zip
    :return: 无
    """
    #创建空的zip文件(ZipFile类型)。参数w表示写模式。zipfile.ZIP_DEFLATE表示需要压缩，文件会变小。ZIP_STORED是单纯的复制，文件大小没变。
    zip = zipfile.ZipFile(outFullName,"w",zipfile.ZIP_DEFLATED)
    for path,dirnames,filenames in os.walk(dirpath):
        # 去掉目标跟路径，只对目标文件夹下边的文件及文件夹进行压缩
        fpath = path.replace(dirpath,'')

        for filename in filenames:
            zip.write(os.path.join(path,filename),os.path.join(fpath,filename))
    zip.close()

def replace_suffix(filedir, srcSfix, suffix):
    files = os.listdir(filedir)
    for filename in files:
        portion = os.path.splitext(filename)

        if portion[1] == srcSfix:
            newname = portion[0] + suffix
            filename = filedir + '\\' +filename
            newname = filedir + '\\' +newname
            os.rename(filename, newname)
            print("替换文件后缀", filename)

def renaming(file):
    """修改后缀"""
    ext = os.path.splitext(file)    # 将文件名路径与后缀名分开
 
    if ext[1] == '.zip':                    # 文件名：ext[0]
        new_name = ext[0] + '.obb'         # 文件后缀：ext[1]
        os.rename(file, new_name)           # tree()已切换工作地址，直接替换后缀

resPath = r'D:\FishingGameClient\obb\main.x.com.yottawin.fishing.zip'
if os.path.exists(resPath):
    os.remove(resPath)

#先定义zip文件绝对路径。sys.path[0]获取的是脚本所在绝对目录。
#因为zip文件存放在脚本同级目录，所以直接拼接得到zip文件的绝对路径。
zipFilePath=os.path.join(r'D:\FishingGameClient\obb',"main.x.com.yottawin.fishing.zip") 

#要压缩的文件夹绝对路径。
absDir=os.path.join(r'D:\FishingGameClient\obb', 'raw-assets') 

zipDir(absDir, zipFilePath)
#执行这条压缩命令前，要保证当前工作目录是脚本所在目录(absDir的父级目录)。否则会报找不到文件的错误。
print("压缩成功")

replace_suffix(r'D:\FishingGameClient\obb', '.zip', '.obb')