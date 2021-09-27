'''
Date: 2021-09-26 16:36:35
LastEditTime: 2021-09-27 15:31:51
FilePath: /python-tools/learn_py/GUIpy.py
Description: 图形界面
'''
import os
import os.path
import sys
from typing import Sized
sys.path.append(os.path.abspath("./utils"))
# print(sys.path)
from FilsUtils import FilsUtils
from tkinter import *
import tkinter.messagebox as messagebox
import requests

class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.fileUtil = FilsUtils()
        self.nameInput = {}
        self.alertButton={}
        self.pack()
        self.createWidgets()

    def createWidgets(self):
        pathArr = self.fileUtil.readTxt("./learn_py/conf.txt")
        for index,x in enumerate(pathArr):
            # print(index, x)
            self.creatBtn(index,x)

    def creatBtn(self, index, path):
        # v=StringVar()
        # v.set("index")
        self.nameInput[index] = Entry(self, width=70)
        self.nameInput[index].pack()
        self.nameInput[index].insert(0,path)
        # self.alertButton[index] = Button(self, text='发送')
        # self.alertButton[index].bind(index, self.hello)
        # self.alertButton[index].pack()
        self.alertButton = Button(self, text='发送', command=lambda arg = index:self.hello(arg))
        # self.alertButton.bind('<Return>', self.hello)
        self.alertButton.pack()

    def hello(self, index):
        name = self.nameInput[index].get() or None
        if name:
            print(name)
            self.reqApi(name)
            # messagebox.showinfo('Message', 'Hello, %s' % name)
        
    def reqApi(self, url):
        URL = url
        res = requests.get(URL)
        res.encoding = 'utf-8'
        if res.status_code == 200:
            print(res)
        else:
            messagebox.showinfo('Message', '失败: %s' % url)
    


app = Application()
app.master.title("API接口")
app.master.minsize(1000, 500)
app.mainloop()
