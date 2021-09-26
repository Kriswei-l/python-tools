'''
Date: 2021-09-26 16:36:35
LastEditTime: 2021-09-26 17:34:56
FilePath: /python-tools/learn_py/GUIpy.py
Description: 图形界面
'''
from tkinter import *
import tkinter.messagebox as messagebox


class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()

    def createWidgets(self):
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
