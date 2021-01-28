import os
import os.path
import pickle
import shutil
import glob
nw_path = "./"

def mycopyfile(srcfile,dstpath):                       # 复制函数
    for f in os.listdir(srcfile):
        sourceF = os.path.join(srcfile, f)
        targetF = os.path.join(dstpath, f)
        
        if os.path.isfile(sourceF):
            #创建目录
            if not os.path.exists(dstpath):
                os.makedirs(dstpath)

            # fpath,fname=os.path.split(sourceF)             # 分离文件名和路径
            shutil.copy(sourceF, targetF)          # 复制文件
            # print ("copy %s -> %s"%(sourceF, targetF + fname))
        
        if os.path.isdir(sourceF):
            mycopyfile(sourceF, targetF)
            # print ("%s not exist!"%(srcfile))
def delete_file(filePath):
    if os.path.exists(filePath):
        for fileList in os.walk(filePath):
            for name in fileList[2]:
                # os.chmod(os.path.join(fileList[0],name), stat.S_IWRITE)
                os.remove(os.path.join(fileList[0],name))
        shutil.rmtree(filePath)
        return "delete ok"
    else:
        return "no filepath"

def copyRes(srcfile, dstpath):
    # 从目标目录中复制
    if not os.path.exists(dstpath):
        os.makedirs(dstpath)
    else:
        print (delete_file(dstpath))

if __name__ == '__main__':
    # compress(os.getcwd())
    # src_dir = r'D:\FishingGameClient\build\jsb-default\res\raw-assets'
    # nw_path = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    # 原目录
    nw_path = 'xxxx'
    src_dir = nw_path+'/newtools/raw-assets'
    import_dir = nw_path+'/build/jsb-default/res/import'
    # 目标目录
    dst_path = 'xxxx'
    dst_src = dst_path+'/res/raw-assets/'                                 # 目的路径记得加斜杠
    dst_import = dst_path+'/res/import/'
    # 复制资源
    copyRes(src_dir, dst_src)
    mycopyfile(src_dir, dst_src)
    # 复制import
    copyRes(import_dir, dst_import)
    mycopyfile(import_dir, dst_import)