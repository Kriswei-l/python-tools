'''
Date: 2021-04-15 15:45:39
LastEditTime: 2021-04-15 15:45:47
FilePath: /python-tools/utils/node.py
Description: 
'''
class Node(object):
    """Represents a singly linked node."""
 
    def __init__(self, data, next = None):
        self.data = data
        self.next = next