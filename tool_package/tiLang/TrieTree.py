'''
Date: 2021-04-15 14:32:56
LastEditTime: 2021-04-15 18:05:57
FilePath: /python-tools/tool_package/tiLang/TrieTree.py
Description: 树
'''

class TreeNode:
    def __init__(self, x, t):
        """x-数据值，t-类型：0-顶点，1-cc.Node, 2-cc."""
        self.data = x
        self.t = t
        self.chld = []

from utils.Stack import Stack
from utils.Queue import Queue

class TrieTree:
    def __init__(self, d, t):
        # self.root = {}
        self.root = None

    def add(self, p, c):
        p.child = c

        # for _item in item:
        #     node = current_node.get(_item)
        #     if node is None:
        #         new_node = {}
        #     else:
        #         current_node = node

    def PreOrder(self,a_tree,a_visit):
        #search the tree in pre-order
        temp=a_tree
        a_stack=Stack()
        
        while temp!=None or (not a_stack.isEmpty()):
            while temp!=None:
                a_visit(temp.val)
                a_stack.push(temp)
                temp=temp.left
            if not a_stack.isEmpty():
                temp=a_stack.pop()
                temp=temp.right
        print
    
    def InOrder(self,a_tree,a_visit):
        #search the tree in in-order
        temp=a_tree
        a_stack=Stack()
        
        while temp!=None or (not a_stack.isEmpty()):
            while temp!=None:
                a_stack.push(temp)
                temp=temp.left
            if not a_stack.isEmpty():
                temp=a_stack.pop()
                a_visit(temp.val)
                temp=temp.right
        print
    
    def PostOrder(self, a_tree,a_visit):
        #search the tree in post-order
        temp=a_tree
        a_stack=Stack()
        pre_temp=None
        
        while temp!=None or (not a_stack.isEmpty()):
            while temp!=None:
                a_stack.push(temp)
                temp=temp.left
            
            temp=a_stack.top()
            if temp.right==pre_temp or temp.right==None:
                a_stack.pop()
                pre_temp=temp
                a_visit(temp.val)
                temp=None
            else:
                temp=temp.right
        print
    
    def LevelOrder(self, a_tree,a_visit):
        #search the tree in level-order
        temp=a_tree
        a_queue=Queue()
        
        a_queue.push(temp)
        while not a_queue.isEmpty():
            temp=a_queue.pop()
            a_visit(temp.val)
            if temp.left!=None:
                a_queue.push(temp.left)
            if temp.right!=None:
                a_queue.push(temp.right)
        print