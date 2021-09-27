'''
Date: 2021-09-26 16:36:35
LastEditTime: 2021-09-27 10:46:05
FilePath: /python-tools/learn_py/GUIpy.py
Description: 图形界面
'''
import os
import os.path
import sys
sys.path.append(os.path.abspath("./utils"))
# print(sys.path)
from FilsUtils import FilsUtils
from tkinter import *
import tkinter.messagebox as messagebox

class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.fileUtil = FilsUtils()
        self.pack(side="left")
        self.createWidgets()

    def createWidgets(self):
        self.fileUtil.readTxt("./learn_py/conf.txt")
        self.creatBtn()

    def creatBtn(self):
        self.nameInput = Entry(self)
        self.nameInput.pack()
        self.alertButton = Button(self, text='Hello', command=self.hello)
        self.alertButton.pack()

    def hello(self):
        name = self.nameInput.get() or 'world'
        messagebox.showinfo('Message', 'Hello, %s' % name)

    


app = Application()
app.master.title("API接口")
app.master.minsize(1000, 500)
app.mainloop()
