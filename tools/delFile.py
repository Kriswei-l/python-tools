#coding:utf-8
import os  
import sys  
import os.path  
import shutil  
  
#获取当前路径  
def fileDir(fPath) :  
    path = sys.path[ 0 ]  
    if fPath :
        path = fPath
    print(path)  
    #判断为脚本文件还是编译后文件，如果是脚本文件则返回脚本目录，否则返回编译后的文件路径  
    if os.path.isdir( path ) :  
        return path  
    elif os.path.isfile( path ) :  
        return os.path.dirname( path )  
  
#获取文件后缀名  
def suffix( file, *suffixName ) :  
    array = map( file.endswith, suffixName )  
    if True in array :  
        return True  
    else :  
        return False  
  
#删除目录下扩展名为.o,.exe,.bak的文件  
def deleteFile(fPath) :  
    targetDir = fileDir(fPath)  
    for file in os.listdir( targetDir ) :  
        targetFile = os.path.join( targetDir, file )  
        if suffix( file, '.meta'):  
            os.remove( targetFile )  

def deleteFileEx(fPath, suffixStr) :  
    targetDir = fileDir(fPath)  
    for root, dirs, files in os.walk(targetDir):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            path=os.path.join(root, f)
            if suffix( f, str(suffixStr)):  
                os.remove( path )

if __name__ == '__main__' :
    data = input('输入删除路径：')
    # print(data)
    suffixStr = input('输入后缀名：')
    # print(suffixStr)

    deleteFileEx(data, '.'+suffixStr)