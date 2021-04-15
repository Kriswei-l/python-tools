'''
Date: 2021-04-15 15:46:26
LastEditTime: 2021-04-15 15:55:12
FilePath: /python-tools/utils/abstractstack.py
Description: 
'''

from abstractcollection import AbstractCollection

class AbstractStack(AbstractCollection):
    """An abstract stack implementation."""
 
    # Constructor
    def __init__(self, sourceCollection = None):
        """Sets the initial state of self, which includes the
        contents of sourceCollection, if it's present."""
        AbstractCollection.__init__(self, sourceCollection)
 
    # Mutator methods
    def add(self, item):
        """Adds item to self."""
        self.__add__(item)