'''
Date: 2021-10-08 17:32:49
LastEditTime: 2021-10-08 18:06:34
FilePath: /python-tools/pyqt/test.py
Description: 
'''
# 生成ui对应的py文件
# pyuic6 -x test.ui -o runtest.py

from PyQt6 import QtCore, QtWidgets
from zruntest import zruntest

if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    Dialog = QtWidgets.QDialog()
    ui = zruntest()
    ui.setupUi(Dialog)
    ui.initBtn()
    Dialog.show()
    sys.exit(app.exec())
