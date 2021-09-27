'''
Date: 2021-09-26 16:36:35
LastEditTime: 2021-09-27 17:33:08
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
        self.labels = {}
        self.nameInput = {}
        self.alertButton={}
        self.grid()
        
        self.createWidgets()

    def createWidgets(self):
        pathArr = self.fileUtil.readTxtEx("./learn_py/conf.txt")
        for index,x in enumerate(pathArr):
            # print(index, x)
            self.creatBtn(index,x[0],x[1])

    def creatBtn(self, index, labStr, path):
        # v=StringVar()
        # v.set("index")
        self.labels[index] = Label(self, text=labStr, bg="Green", fg="white")
        self.labels[index].grid(row=index, column = 0, padx = 10, pady=5, sticky=S+W)   #.pack(side='left')
        self.nameInput[index] = Entry(self, width=76)
        self.nameInput[index].grid(row=index, column = 1, padx = 10, pady=5)   #.pack(side='left')
        self.nameInput[index].insert(0,path)
        self.alertButton[index] = Button(self, text='发送', command=lambda arg = index:self.hello(arg))
        self.alertButton[index].grid(row=index, column = 2, padx = 10, pady=5)   #.pack(side='left')
        # self.alertButton = Button(self, text='发送', command=lambda arg = index:self.hello(arg))
        # self.alertButton.bind('<Return>', self.hello)
        # self.alertButton.pack()

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
    
# root = Tk()
# canvas = Canvas(root,width=700,height=500,scrollregion=(0,0,700,3000))
# canvas.place(x = 0, y = 0)
# app = Application(canvas)
# app.place(width=700,height=500)
# # app.master.title("API接口")
# app.master.minsize(700, 500)
# scrollbar = Scrollbar(canvas, orient=VERTICAL)
# # scrollbar.pack(side=RIGHT, fill=Y)
# scrollbar.place(x=0,width=700,height=500)
# scrollbar.configure(command=canvas.yview)
# canvas.configure(yscrollcommand=scrollbar.set)
# canvas.create_window((700, 500), window=app)

app = Application()
app.master.title("API接口")
app.master.minsize(1000, 500)

app.mainloop()
