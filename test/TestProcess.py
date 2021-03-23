'''
Date: 2021-03-18 11:59:51
LastEditors: liuwei
LastEditTime: 2021-03-18 13:56:12
FilePath: /python-tools/test/TestProcess.py
Description: 进程
'''
from multiprocessing import Process
import os, time

class CustomProcess(Process):
    def __init__(self, p_name, target=None):
        # step 1: call base __init__ function()
        super(CustomProcess, self).__init__(name=p_name, target=target, args=(p_name,))

    def run(self):
        # step 2:
        # time.sleep(0.1)
        print("Custom Process name: %s, pid: %s "%(self.name, os.getpid()))

if __name__ == '__main__':
    p1 = CustomProcess("process_1")
    p1.start()
    p1.join()
    print("subprocess pid: %s"%p1.pid)
    print("current process pid: %s" % os.getpid())

'''
def pstart(name):
    print("Process name: %s, pid: %s "%(name, os.getpid()))

if __name__ == "__main__": 
    subproc = Process(target=pstart, args=('subprocess',))  
    subproc.start()
    subproc.join()
    print("subprocess pid: %s"%subproc.pid)
    print("current process pid: %s" % os.getpid())
'''