'''
Date: 2021-04-15 15:42:22
LastEditTime: 2021-04-15 15:43:58
FilePath: /python-tools/utils/BSTNode.py
Description: 
'''

class BSTNode(object):
    """Represents a node for a linked binary search tree."""
 
    def __init__(self, data, left = None, right = None):
        self.data = data
        self.left = left
        self.right = right

