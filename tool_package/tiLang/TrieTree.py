'''
Date: 2021-04-15 14:32:56
LastEditTime: 2021-04-19 11:06:30
FilePath: /python-tools/tool_package/tiLang/TrieTree.py
Description: 树
'''

import sys
sys.path.append('/Users/mac/Project/python-tools/utils')
from Stack import Stack
from Queue import Queue
class TreeNode:
    """x-数据值，t-类型：0-顶点，1-cc.Node, 2-cc.componente,3-cc.PrefabInfo"""

    def __init__(self, x, t):
        self.data = x
        self.t = t
        self.child = []

class TrieTree:
    def __init__(self):
        # self.root = {}
        self.root = None

    def add(self, p, c):
        p.child.append(c)

        # for _item in item:
        #     node = current_node.get(_item)
        #     if node is None:
        #         new_node = {}
        #     else:
        #         current_node = node
    
    def prologue(self, a_tree):
        """前序打印"""
        temp = list()
        def recurse(node):
            if node != None:
                temp.append(node.data)
                if node.child and len(node.child) > 0:
                    for i in range(0,len(node.child)):
                        recurse(node.child[i])
        recurse(a_tree)
        return temp


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