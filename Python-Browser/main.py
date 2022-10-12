from email.headerregistry import Address
from select import select
import sys
import os
import json 
import subprocess

import ctypes
myappid = 'mycompany.myproduct.subproduct.version' # arbitrary string
ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)

from PyQt5.QtWidgets import (QApplication, QWidget, QVBoxLayout,QHBoxLayout, QPushButton,
                    QLabel, QLineEdit, QTabBar,QFrame, QStackedLayout,
                    QShortcut,QKeySequenceEdit, QTabWidget,QSplitter
                
                )

from PyQt5.QtGui import QIcon, QWindow, QImage, QKeySequence
from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import *

class AddressBar(QLineEdit):
    def __init__(self):
        super().__init__()
    
    def mousePressEvent(self,e):
        self.selectAll()
    
class App(QFrame):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("My Web Browser")
        self.setBaseSize(1366,768)
        self.CreateApp()
        self.setWindowIcon(QIcon("display.png"))
        # mainwindow= QtGui.mainwindow()
        # mainwindow.setWindowIcon(QIcon("display.png"))
        self.show()

    def CreateApp(self):
        self.layout = QVBoxLayout()
        self.layout.setSpacing(0)
        self.layout.setContentsMargins(0,0,0,0)

        #create tabs
        self.tabbar = QTabBar(movable=True, tabsClosable=True)
        self.tabbar.tabCloseRequested.connect(self.CloseTab)
        self.tabbar.tabBarClicked.connect(self.SwitchTab)

        self.tabbar.setCurrentIndex(0)
        self.tabbar.setDrawBase(False)
        self.tabbar.setLayoutDirection(Qt.LeftToRight)
        self.tabbar.setElideMode(Qt.ElideLeft)

        self.shortcutNewTab = QShortcut(QKeySequence("Ctrl+T"),self)
        self.shortcutNewTab.activated.connect(self.AddTab)

        self.shortcutNewTab = QShortcut(QKeySequence("Ctrl+R"),self)
        self.shortcutNewTab.activated.connect(self.ReloadPage)
        # self.tabbar.addTab("Tab 1")
        # self.tabbar.addTab("Tab 2")
        
        self.tabbar.setCurrentIndex(0)

        #Keep track of tabs
        self.tabCount = 0
        self.tabs = []

        self.tabbar.setCurrentIndex(0)

#create addressbar
        self.Toolbar = QWidget()
        self.Toolbar.setObjectName("toolbar")
        self.ToolbarLayout = QHBoxLayout()
        self.addressbar = AddressBar()
        self.AddTabButton = QPushButton("➕")

        self.addressbar.returnPressed.connect(self.BrowseTo)

        self.AddTabButton.clicked.connect(self.AddTab)

        #Set Toolbar buttons
        self.BackButton = QPushButton("🔙")
        self.BackButton.clicked.connect(self.GoBack)

        self.ForwardButton = QPushButton("⏩")
        self.ForwardButton.clicked.connect(self.GoForward)

        self.ReloadButton = QPushButton("🔃")
        self.ReloadButton.clicked.connect(self.ReloadPage)

        #Build toolbar
        self.Toolbar.setLayout(self.ToolbarLayout)
        self.ToolbarLayout.addWidget(self.BackButton)
        self.ToolbarLayout.addWidget(self.ForwardButton)
        self.ToolbarLayout.addWidget(self.ReloadButton)

        self.Toolbar.setLayout(self.ToolbarLayout)
        self.ToolbarLayout.addWidget(self.addressbar)
        self.ToolbarLayout.addWidget(self.AddTabButton)

        #Set main view
        self.container = QWidget()
        self.container.layout = QStackedLayout()
        self.container.setLayout(self.container.layout)

        self.layout.addWidget(self.tabbar)
        self.layout.addWidget(self.Toolbar)
        self.layout.addWidget(self.container)

        self.setLayout(self.layout)
        self.AddTab()
        

        # #create addressBar
        # self.addressbar = AddressBar()
        # self.Toolbar = QWidget()
        # self.ToolbarLayout = QHBoxLayout()
        # self.addressbar = AddressBar()


        # self.addressbar.returnPressed.connect(self.BrowseTo)
        
        # # self.AddTabButton.clicked.connect(self.AddTabs)

        # self.Toolbar.setLayout(self.ToolbarLayout)
        # self.ToolbarLayout.addWidget(self.addressbar)
    

        # # set main view
        # self.container = QWidget()
        # self.container.layout = QStackedLayout()
        # self.container.setLayout(self.container.layout)

        # #New tab button
        # self.AddTabButton = QPushButton("+")

        # #self.addressbar.returnPressed.connect(self.BrowseTo)
        # self.AddTabButton.clicked.connect(self.AddTab)

        # self.ToolbarLayout.addWidget(self.AddTab)

        # # self.AddTab()
        # self.layout.addWidget(self.tabbar)
        # self.layout.addWidget(self.Toolbar)
        # self.layout.addWidget(self.container)
        # self.setLayout(self.layout)
        self.show()
    
    def CloseTab(self, i):
        
        print(i)
    
    def AddTab(self):
        i = self.tabCount
        self.tabs.append(QWidget())
        self.tabs[i].layout = QVBoxLayout()
        self.tabs[i].setObjectName("tab" + str(i))


        #creating the web engine
        #open webview
        self.tabs[i].content = QWebEngineView()
        self.tabs[i].content.load(QUrl.fromUserInput("http://google.com"))

        # self.tabs[i].content1 = QWebEngineView()
        # self.tabs[i].content1.load(QUrl.fromUserInput("http://google.com"))
        
        self.tabs[i].content.titleChanged.connect(lambda: self.SetTabText(i,"title"))
        #self.tabs[i].content.iconChanged.connect(lambda: self.SetTabText(i,"icon"))
        self.tabs[i].content.urlChanged.connect(lambda: self.SetTabText(i,"url"))

        #Add webview to tabs layout
        self.tabs[i].splitview = QSplitter()
        self.tabs[i].layout.addWidget(self.tabs[i].splitview)

        self.tabs[i].splitview.addWidget(self.tabs[i].content)
        #TO SUPPORT SPLIT VIEW
        # self.tabs[i].splitview.addWidget(self.tabs[i].content1)

        #set top lebel from [] to layout
        self.tabs[i].setLayout(self.tabs[i].layout)

        #Add tab to top level stackedWidget 
        self.container.layout.addWidget(self.tabs[i])
        self.container.layout.setCurrentWidget(self.tabs[i])

        

        #Set tab at top of the screen 
        self.tabbar.addTab("New Tab")
        self.tabbar.setTabData(i,{"object":"tab"+str(i),"initial":i})
        self.tabbar.setCurrentIndex(i)

        '''
        self.tabs[i].objectName = tab1
        self.tabbar.tabData(i)
        '''
        
        self.tabCount+=1


    # def SwitchTab(self,i):
    #     td = self.tabbar.tabData(i)
    #     print("tab data",td)
    #     tc = self.findChild(QWidget, td)
    #     self.container.layout.setCurrentWidget(tc)
    
    def SwitchTab(self,i):
        if self.tabbar.tabData(i):
            tab_data = self.tabbar.tabData(i)["object"]
            tab_content = self.findChild(QWidget, tab_data)
            self.container.layout.setCurrentWidget(tab_content)
            new_url = tab_content.content.url().toString()
            self.addressbar.setText(new_url)

    def BrowseTo(self):
        pass
        # text = self.addressbar.text()
        # print(text)

        # i = self.tabbar.currentIndex()
        # tab = self.tabbar.tabData(i)
        # wv = self.findChild(QWidget, tab).content

        # if "http" not in text:
        #     if "." not in text:
        #         url = "https://www.google.ca/#q="+text
        #     else:
        #         url = "http://"+text 
        # else:
        #     url = text
        
        # wv.load(QUrl.fromUserInput(url))
    
    def GoBack(self):
        activeIndex = self.tabbar.currentIndex()
        tab_name = self.tabbar.tabData(activeIndex)["object"]       #updates the title accordingly
        tab_content = self.findChild(QWidget,tab_name).content
        tab_content.back()
        
    def GoForward(self):
        activeIndex = self.tabbar.currentIndex()
        tab_name = self.tabbar.tabData(activeIndex)["object"]       #updates the title
        tab_content = self.findChild(QWidget,tab_name).content
        tab_content.forward()
    
    def ReloadPage(self):
        activeIndex = self.tabbar.currentIndex()
        tab_name = self.tabbar.tabData(activeIndex)["object"]
        tab_content = self.findChild(QWidget,tab_name).content

        tab_content.reload()

    def SetTabText(self, i,type):
        tab_name = self.tabs[i].objectName()
        #tab1
        count = 0
        running = True

        current_tab = self.tabbar.tabData(self.tabbar.currentIndex())["object"]

        if current_tab == tab_name and type =="url":
            new_url = self.findChild(QWidget,tab_name).content.url().toString()
            self.addressbar.setText(new_url)
            return False

        while running:
            tab_data_name = self.tabbar.tabData(count)

            if count >=99:
                running = False
            
            if tab_name == tab_data_name["object"]:
                if type=="title":
                    newTitle = self.findChild(QWidget, tab_name).content.title()
                    self.tabbar.setTabText(count, newTitle)
                elif type=="icon":
                    newIcon = self.findChild(QWidget,tab_name).content.icon()
                    self.tabbar.setTabIcon(count,newIcon)
                    
                running = False
            else:
                count +=1


if __name__=="__main__":
    app = QApplication(sys.argv)
    window = App()
    os.environ['QTWEBENGINE_REMOTE_DEBUGGING'] = "667"

    with open("styles.css","r") as style:
        app.setStyleSheet(style.read())
    sys.exit(app.exec_())