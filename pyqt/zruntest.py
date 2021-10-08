'''
Date: 2021-10-08 18:01:02
LastEditTime: 2021-10-08 22:14:54
FilePath: /python-tools/pyqt/zruntest.py
Description: 
'''
from runtest import Ui_Dialog

class zruntest(Ui_Dialog):
    
    def setupUi(self, Dialog):
        Ui_Dialog.setupUi(self,Dialog)
        self.pushButton.click.connect(self.clicked_btn)

    def clicked_btn(self):
        # self.label.setStyleSheet("color:white")
        print("click!!!!")