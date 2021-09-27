'''
Date: 2021-09-27 17:40:49
LastEditTime: 2021-09-27 18:10:13
FilePath: /python-tools/learn_py/GUITools.py
Description: 在网上找到的代码，用于学习
'''
from tkinter import *
from tkinter import ttk
from PIL import Image,ImageTk
from configparser import ConfigParser
from queue import Queue
import copy
from configparser import ConfigParser

def img_open(shape, path):
    img = Image.open(path)
    img = img.resize((shape[0] - 5, shape[1]), Image.ANTIALIAS)
    img = ImageTk.PhotoImage(img)
    return img

class VideoFreame(object):
    def __init__(self, window, shape, locate, name, color, img_path, ev_queue, config):
        self.window = window
        self.shape = shape
        self.locate = locate
        self.name = name
        self.color = color
        self.ev_queue = ev_queue

        self.button_shape = (20, 20)
        self.img_45 = img_open(self.button_shape, img_path+'45.png')

        self.frame_create()

    def frame_update(self, frame_shape, frame_locate):
        self.shape = frame_shape
        self.locate = frame_locate
        self.video_frame.destroy()
        self.frame_create()
    
    def frame_create(self):
        self.video_frame = Frame(self.window, bg=self.color,
                            width=self.shape[0], height=self.shape[1])
        self.video_frame.place(x=self.locate[0], y=self.locate[1])
        self.video_frame.propagate(0)
        
        label = Label(self.video_frame, text=self.name)
        label.place(x=int(self.shape[0]/2), y=int(self.shape[1]/2))

        self.button_locate = (self.shape[0]-self.button_shape[0]-4, self.shape[1]-self.button_shape[1]-6)
        self.button = Button(self.video_frame, image=self.img_45,
                        width=self.button_shape[0], height=self.button_shape[1],
                        command=self.button_func)
        self.button.place(x=self.button_locate[0], y=self.button_locate[1])
        self.button.config(image=self.img_45)
        self.button.image = self.img_45

    def button_func(self):
        if self.ev_queue.full():
            print("ev_queue is full")
        else:
            tk_ev = ['video_button',0]
            self.ev_queue.put(copy.deepcopy(tk_ev))

class OperateFreame(object):
    def __init__(self, window, shape, locate, name, color, img_path, ev_queue, config):
        
        self.frame = Frame(window, bg=color,
                            width=shape[0], height=shape[1])
        self.frame.place(x=locate[0], y=locate[1])
        self.frame.propagate(0)
        
        label = Label(self.frame, text=name)
        label.place(x=int(shape[0]/2), y=int(shape[1]/2))

class CeilFrame(object):
    def __init__(self, window, shape, locate, name, color):
        frame = Frame(window, bg=color, width=shape[0], height=shape[1])
        frame.place(x=locate[0], y=locate[1])
        frame.propagate(0)

        label = Label(frame, text=name)
        label.place(x=int(shape[0]/2), y=int(shape[1]/2))

class HbarFrame(object):
    def __init__(self, window, canvas_shape, name, hbar_width, catch):
        hbar = Scrollbar(window, bd=1, orient=HORIZONTAL, width=hbar_width)
        hbar.set(0.5, 1)
        hbar.pack(fill=X, side=BOTTOM, expand=FALSE)
        
        ceil_shape = (int(canvas_shape[1]/5)*2, canvas_shape[1])
        frame_shape = (ceil_shape[0]*catch, ceil_shape[1])

        canvas = Canvas(window, highlightthickness=0, 
                                    width=canvas_shape[0], 
                                    height=canvas_shape[1], 
                                    xscrollcommand=hbar.set,
                                    scrollregion=(0,0,frame_shape[0],0))
        canvas.pack(side=LEFT, expand=True)
        hbar.config(command=canvas.xview)
        
        canvas.xview_moveto(0)
        canvas.yview_moveto(0)

        frame = Frame(canvas, width=frame_shape[0]*2,
                                    height=frame_shape[1]*2)
        frame.pack(expand=False, side=LEFT)  
        frame.propagate(0)
        canvas.create_window(frame_shape[0], frame_shape[1], window=frame)
        
        self.ceil_frame_list = []
        c_color = ['AliceBlue', 'Linen', 'PapayaWhip', 'SaddleBrown']
        for i in range(catch):
            ceil_locate = (ceil_shape[0]*i, 0)
            color = c_color[i%4]
            ceil_frame = CeilFrame(frame, ceil_shape, ceil_locate, str(i), color)
            self.ceil_frame_list.append(ceil_frame)

class GridFrame(object):
    def __init__(self, window, shape, locate, name, color, img_path, ev_queue, catch):
        frame = Frame(window, width=shape[0], height=shape[1])
        frame.place(x=locate[0], y=locate[1])

        id_shape = (int(shape[0]/5), shape[1])
        id_locate = (0, 0)
        id_frame = Frame(frame, bg=color, width=id_shape[0], height=id_shape[1])
        id_frame.place(x=id_locate[0], y=id_locate[1])
        id_frame.propagate(0)
        
        label = Label(id_frame, text='ID:'+name)
        label.place(x=int(id_shape[0]/2), y=int(id_shape[1]/2))

        show_frame_shape = (shape[0]-id_shape[0], shape[1])
        show_frame_locate = (id_shape[0], id_locate[1])
        show_frame = Frame(frame, width=show_frame_shape[0], height=show_frame_shape[1])
        show_frame.place(x=show_frame_locate[0], y=show_frame_locate[1])
        show_frame.propagate(0)
        
        hbar_width = 10
        canvas_shape = (show_frame_shape[0], show_frame_shape[1]-hbar_width)
        
        hbar_frame = HbarFrame(show_frame, canvas_shape, name,  
                                hbar_width, catch)

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
    def __init__(self, window, shape, locate, name, color, img_path, ev_queue, config):
        self.window = window
        self.shape = shape
        self.locate = locate
        self.name = name
        self.color = color
        self.img_path = img_path
        self.ev_queue = ev_queue

        self.button_shape = (20, 20)
        self.img_90 = img_open(self.button_shape, self.img_path+'90.png')
        
        self.pose_num = config.getint('pose', 'pose_show_num')
        self.pose_catch = config.getint('pose', 'pose_show_catch')

        self.vbar_width = 10
        self.pose_grid_frame_shape = (self.shape[0]-self.vbar_width, int(shape[1]/2)) 
        self.pose_show_frame_shape = (self.pose_grid_frame_shape[0], 
                                self.pose_grid_frame_shape[1]*self.pose_num)    
        self.frame_create()

    def frame_update(self, frame_shape, frame_locate):
        self.shape = frame_shape
        self.locate = frame_locate
        self.pose_frame.destroy()
        self.frame_create()
     
    def frame_create(self):
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
        g_color = ['red', 'green']
        for i in range(self.pose_num):
            locate = (self.locate[0], i*self.pose_grid_frame_shape[1])
            color = g_color[0] if i%2 == 0 else g_color[1]
            pose_grid_frame = GridFrame(pose_show_frame.frame,
                                    self.pose_grid_frame_shape,
                                    locate, str(i), color, self.img_path,
                                    self.ev_queue, self.pose_catch)
            pose_grid_frame_list.append(pose_grid_frame)

        self.button_locate = (self.shape[0]-self.button_shape[0]-self.vbar_width-8, 0)
        self.button = Button(self.pose_frame, image=self.img_90,
                        width=self.button_shape[0], height=self.button_shape[1],
                        command=self.button_func)
        self.button.place(x=self.button_locate[0], y=self.button_locate[1])
        self.button.config(image=self.img_90)
        self.button.image = self.img_90

    def button_func(self):
        if self.ev_queue.full():
            print("ev_queue is full")
        else:
            tk_ev = ['pose_button',0]
            self.ev_queue.put(copy.deepcopy(tk_ev))

class PoseEstimation(object):
    def __init__(self, window, shape, locate):
        self.shape = shape
        self.locate = locate

        self.wnd = window
        self.tk_event_q = Queue(10)
        img_path = 'pose_img/'
        
        config = ConfigParser()
        config.read('./learn_py/config.ini')

        self.video_frame_change = False
        self.pose_frame_change = False

        self.video_shape = (int(self.shape[0]/5)*3, int(self.shape[1]/2))
        self.video_locate = (self.locate[0], self.locate[1])
        self.video_frame = VideoFreame(self.wnd, self.video_shape, self.video_locate,
                                'video frame', 'green', img_path,
                                self.tk_event_q, config)
        
        operate_shape = (self.shape[0]-self.video_shape[0], self.video_shape[1])
        operate_locate = (self.video_shape[0], self.locate[1]) 
        self.operate_frame = OperateFreame(self.wnd, operate_shape, operate_locate,
                                'operate frame', 'blue', img_path,
                                self.tk_event_q, config)

        self.pose_shape = (self.shape[0], self.shape[1]-self.video_shape[1])
        self.pose_locate = (self.locate[0], self.video_shape[1]) 
        self.pose_frame = PoseFreame(self.wnd, self.pose_shape, self.pose_locate,
                                'pose frame', 'yellow', img_path,
                                self.tk_event_q, config)

    def wnd_update(self):
        while not self.tk_event_q.empty():
            tk_ev = self.tk_event_q.get()
            print(tk_ev)
            if tk_ev[0] == 'video_button':
                self.video_update()
            elif tk_ev[0] == 'pose_button':
                self.pose_update()

    def video_update(self):
        if not self.video_frame_change:
            change_shape = self.shape
            change_locate = self.locate
            self.video_frame_change = True
        else:
            change_shape = self.video_shape
            change_locate = self.video_locate
            self.video_frame_change = False
        self.video_frame.frame_update(change_shape, change_locate)
    
    def pose_update(self):
        if not self.pose_frame_change:
            change_shape = self.shape
            change_locate = self.locate
            self.pose_frame_change = True
        else:
            change_shape = self.pose_shape
            change_locate = self.pose_locate
            self.pose_frame_change = False
        self.pose_frame.frame_update(change_shape, change_locate)
        
if __name__ == '__main__':
    root = Tk()
    shape = (800, 600)
    locate = (100, 50)
    s_shape = str(shape[0])+'x'+str(shape[1])
    s_locate = '+' + str(locate[0]) + '+' + str(locate[1])
    root.geometry(s_shape + s_locate)
    root.title("gigure & tkinter demo")
    root.resizable(width=False,height=False)

    pose = PoseEstimation(root, shape, (0, 0))
    while True:
        root.update()
        pose.wnd_update()

    root.mainloop()
