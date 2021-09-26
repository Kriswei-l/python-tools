'''
Date: 2021-09-26 16:36:35
LastEditTime: 2021-09-26 18:46:04
FilePath: /python-tools/learn_py/GUIpy.py
Description: 图形界面
'''

import tkinter.messagebox as messagebox
from tkinter import *
# from utils.FilsUtils import fileUtils


class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack(side="left")
        self.createWidgets()

    def createWidgets(self):
        self.readTxt("./conf.txt")

    def creatBtn(self):
        self.nameInput = Entry(self)
        self.nameInput.pack()
        self.alertButton = Button(self, text='Hello', command=self.hello)
        self.alertButton.pack()

    def hello(self):
        name = self.nameInput.get() or 'world'
        messagebox.showinfo('Message', 'Hello, %s' % name)

    def readTxt(path):
        confArr = []
        with open(path, 'rb') as infile:
            while True:
                content = infile.readline()
                if not content:
                    break
                contentStr = str(content, encoding='utf-8').replace('\n', '')
                print(contentStr)


app = Application()
app.master.title("API接口")
app.master.minsize(1000, 500)
app.mainloop()
