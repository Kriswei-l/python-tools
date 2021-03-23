'''
Date: 2021-03-18 10:33:40
LastEditors: liuwei
LastEditTime: 2021-03-18 11:59:36
FilePath: /python-tools/test/TestThreading.py
Description: 线程
'''

import threading
import time

'''
class CustomThread(threading.Thread):
    def __init__(self, thread_name, target = None):
        # step 1: call base __init__ function
        super(CustomThread, self).__init__(name=thread_name, target=target, args = (thread_name,))
        self._tname = thread_name

    def run(self):
        # step 2: overide run function
        # time.sleep(0.5)
        # print("This is %s running....@run" % self._tname)
        super(CustomThread, self).run()

def target(arg):
    time.sleep(0.5)
    print("This is %s running....@target" % arg)

if __name__ == "__main__":
    t1 = CustomThread("thread 1", target)
    t2 = CustomThread("thread 2", target)
    t1.start()
    t2.start()
    print("This is main function")
'''
'''
# 方式2：继承threading.Thread，并重写run
class CustomThread(threading.Thread):
    def __init__(self, thread_name):
        super(CustomThread, self).__init__(name=thread_name)
        self._tname = thread_name

    def run(self):
        time.sleep(0.5)
        print("this is %s running...." % self._tname)

if __name__ == "__main__":
    t1 = CustomThread("thread 1")
    t2 = CustomThread("thread 2")
    t1.start()
    t2.start()
'''
'''
# 方式1：创建threading.Thread对象
def tstart(arg):
    time.sleep(0.5)
    print("%s  running ..." % arg)

if __name__ == '__main__':
    t1 = threading.Thread(target=tstart, args=('This is thread 1',))
    t2 = threading.Thread(target=tstart, args=('This is thread 2',))
    t1.start()
    t2.start()
'''