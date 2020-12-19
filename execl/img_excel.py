#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from imageExcel.ImageSystem import *
import os
# from imageExcel import ImageUtils

def main():
    # print os.getcwd() #获取当前工作目录路径
    # print os.getcwd
    # print (os.getcwd())
    # print (os.path.abspath('test.txt')) #获取当前目录文件下的工作目录路径
    # print (os.path.abspath('..')) #获取当前工作的父目录 ！注意是父目录路径
    # print (os.path.abspath('.')) #获取当前工作目录路径
    # print (os.path.abspath(os.curdir)) #获取当前工作目录路径
    
    source_dir = os.getcwd() #r'D:\t\python\resource_translate'

    image_file = ImageSystem(source_dir)
    img_File_List = os.listdir(source_dir)  # 图片列表
    imgPath = {}
    for filename in img_File_List:
        filepath = os.path.join(source_dir, filename)  # 图片的绝对路径
        if os.path.isdir(filepath):
            img_File_List1 = os.listdir(filepath)  # 图片列表
            for filename1 in img_File_List1:
                filepath1 = os.path.join(filepath, filename1)  # 图片的绝对路径
                if os.path.isdir(filepath1):
                    image_file.image_list = []
                    image_list = image_file.listfile(filepath1, '.png')
                fileN = filename+filename1;
                imgPath.update({fileN:image_list})
                
        
    image_file.xlsx_create(imgPath, 'image_list.xlsx')


if __name__ == '__main__':
    print("hello")
    main()