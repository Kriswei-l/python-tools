'''
Date: 2021-04-15 15:30:59
LastEditTime: 2021-04-15 15:31:15
FilePath: /python-tools/utils/Stack.py
Description: 
'''
#用列表模拟栈
class Stack:
    """A list_based stack implementation."""
    
    # Constructor
    def __init__(self):
        """Sets the initial state of self,and the initial state is []"""
        self.items = []
    
    # Accessor methods
    def iter(self):
         """Supports iteration over a view of self.
         Visits items from bottom to top of stack."""
         for i in range(len(self.items)):
             yield self.items[i]
         
    def isEmpty(self):
        """Returns True if len(self) == 0, or False otherwise."""
        return len(self.items)==0
 
    def peek(self):
        """
        Returns the item at the top of the stack.
        Precondition: the stack is not empty.
        Raises: KeyError if the stack is empty."""
        if self.isEmpty():
            raise KeyError("The stack is empty.")
        
        return self.items[len(self.items)-1]
     
    def size(self):
        """return the len(self)"""
        return len(self.items)
    
    # Mutator methods
    def clear(self):
        """Makes self become empty."""
        self.items = []
        
    def push(self, item):
        """Adds item to the top of the stack."""
        self.items.append(item)
   
    def pop(self):
        """
        Removes and returns the item at the top of the stack.
        Precondition: the stack is not empty.
        Raises: KeyError if the stack is empty.
        Postcondition: the top item is removed from the stack."""
        if self.isEmpty():
            raise KeyError("The stack is empty.")
        return self.items.pop()