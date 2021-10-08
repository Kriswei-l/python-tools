'''
Date: 2021-10-08 18:01:02
LastEditors: liuwei
LastEditTime: 2021-10-08 18:09:35
FilePath: /python-tools/pyqt/zruntest.py
Description: 
'''
from runtest import Ui_Dialog

class zruntest(Ui_Dialog):
    
    def initBtn(self):
        self.pushButton.click.connect(self.clicked_btn)

    def clicked_btn(self):
        # self.label.setStyleSheet("color:white")
        print("click!!!!")