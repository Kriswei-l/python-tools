'''
Date: 2021-09-28 16:50:52
LastEditTime: 2021-09-28 18:21:51
FilePath: /python-tools/learn_py/GUIApi.py
Description: 学习写一个通用发送API的界面
'''
import os
import os.path
from tkinter import *
import tkinter.messagebox as messagebox
import requests
from configparser import ConfigParser
from queue import Queue
from PIL import Image,ImageTk

def img_open(shape, path):
    img = Image.open(path)
    img = img.resize((shape[0] - 5, shape[1]), Image.ANTIALIAS)
    img = ImageTk.PhotoImage(img)
    return img

class GridFrame(object):
    def __init__(self, window, shape, locate, name, ev_queue, conf):
        frame = Frame(window, width=shape[0], height=shape[1])
        frame.place(x=locate[0], y=locate[1])
        self.shape = (int(shape[0]/5), shape[1])
        self.button_shape = (80, 20)
        self.img_send = img_open(self.button_shape, './send.png')
        self.creatBtn(frame, conf[0], conf[1])
    
    def creatBtn(self, wm, labStr, path):
        self.labels = Label(wm, text=labStr, bg="Green", fg="white")
        self.labels.place(x=1,y=0)
        self.nameInput = Entry(wm, width=66)
        self.nameInput.place(x=80,y=0)
        self.nameInput.insert(0,path)
        self.alertButton = Button(wm, image=self.img_send,width=self.button_shape[0], height=self.button_shape[1], command=self.hello)
        self.alertButton.place(x=650,y=0)
        # self.alertButton.config(image=self.img_send)
        # self.alertButton.image = self.img_send

    def hello(self):
        name = self.nameInput.get() or None
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


class VbarFrame(object):
    def __init__(self, window, frame_shape, canvas_shape, vbar_width):
        vbar = Scrollbar(window, bd=1, orient=VERTICAL, width=vbar_width)
        vbar.set(0.5, 1)
        vbar.pack(fill=Y, side=RIGHT, expand=FALSE)
        canvas = Canvas(window, highlightthickness=0, 
                                    width=canvas_shape[0], 
                                    height=canvas_shape[1], 
                                    yscrollcommand=vbar.set,
                                    scrollregion=(0,0,0,frame_shape[1]))
        canvas.pack(side=LEFT, expand=True)
        vbar.config(command=canvas.yview)
        
        canvas.xview_moveto(0)
        canvas.yview_moveto(0)

        self.frame = Frame(canvas, 
                                    width=frame_shape[0]*2,
                                    height=frame_shape[1]*2)
        self.frame.pack(expand=False, side=LEFT)  
        self.frame.propagate(0)
        canvas.create_window(frame_shape[0],
                                    frame_shape[1],
                                    window=self.frame)

class PoseFreame(object):
    def __init__(self, window, shape, locate, name, color, ev_queue):
        self.window = window
        self.shape = shape
        self.locate = locate
        self.name = name
        self.color = color
        self.ev_queue = ev_queue

        self.frame_create()

    def frame_update(self):
        self.frame_create()
    
    def frame_create(self):
        pathArr = self.readTxtEx(r'./conf.txt')
        pose_num = len(pathArr)
        self.vbar_width = 10
        self.pose_grid_frame_shape = (self.shape[0]-self.vbar_width, 30) 
        self.pose_show_frame_shape = (self.pose_grid_frame_shape[0], 
                                self.pose_grid_frame_shape[1]*pose_num)

        self.pose_frame = Frame(self.window, bg=self.color,
                            width=self.shape[0], height=self.shape[1])
        self.pose_frame.place(x=self.locate[0], y=self.locate[1])
        self.pose_frame.propagate(0)
        
        canvas_shape = (self.pose_show_frame_shape[0], self.shape[1])
        pose_show_frame = VbarFrame(self.pose_frame, 
                                    self.pose_show_frame_shape,
                                    canvas_shape,
                                    self.vbar_width)

        pose_grid_frame_list = []
        for i,x in enumerate(pathArr):
            # print(index, x)
            locate = (self.locate[0], i*self.pose_grid_frame_shape[1])
            pose_grid_frame = GridFrame(pose_show_frame.frame,
                                    self.pose_grid_frame_shape,
                                    locate, str(i),
                                    self.ev_queue, x)
            pose_grid_frame_list.append(pose_grid_frame)

    def readTxt(self, path):
        # 读取txt内容
        # os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
        # nw_path = self.fileDir(None)
        # print(nw_path)
        confArr = []
        with open(path, 'rb') as infile:
            while True:
                content = infile.readline()
                if not content:
                    break
                contentStr = str(content, encoding='utf-8').replace('\n', '')
                confArr.append(contentStr)
                # print(contentStr)
        return confArr

    def readTxtEx(self, path, strSpl='|'):
        # 读取txt内容，带分割字符串返回二维数组
        # os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
        # nw_path = self.fileDir(None)
        # print(nw_path)
        confArr = self.readTxt(path)
        confArrEx = []
        for index,x in enumerate(confArr):
            lineArr = x.split(strSpl)
            confArrEx.append(lineArr)
        return confArrEx
    
if __name__ == '__main__':
    root = Tk()
    shape = (800, 600)
    locate = (100, 50)
    s_shape = str(shape[0])+'x'+str(shape[1])
    s_locate = '+' + str(locate[0]) + '+' + str(locate[1])
    root.geometry(s_shape + s_locate)
    root.title("API")
    root.resizable(width=False,height=False)

    tk_event_q = Queue(10)
    pose = PoseFreame(root, shape, (0, 0), 'pose frame', 'yellow',tk_event_q)

    root.mainloop()