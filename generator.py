import os
import sys

def convertTemplate(filePath, newFilePath, newModuleName):
    fileData = open(filePath, 'r').read()
    print('Creating new File : ', newFilePath); 
    open(newFilePath, 'w').write(fileData.replace('##module##', newModuleName))

def createModule(templatePath, newModulePath, newModuleName):
    allFiles = os.scandir(templatePath)
    for file in allFiles:
        if file.is_dir() :
            if not os.path.exists(newModulePath + '/' + file.name.replace('module', newModuleName)) :
                print('Creating folder : ', newModulePath + '/' + file.name.replace('module', newModuleName))
                os.mkdir(newModulePath + '/' + file.name.replace('module', newModuleName))
            createModule(templatePath + '/' + file.name, newModulePath + '/' + file.name.replace('module', newModuleName), newModuleName)
        else :
            convertTemplate(templatePath + '/' + file.name, newModulePath + '/' + file.name.replace('module', newModuleName), newModuleName)

def init():
    if len(sys.argv) != 2 : 
        sys.exit('Error: Invalid Arguments')
    newModulePath = os.path.abspath(sys.argv[1])
    newModuleName = os.path.basename(sys.argv[1])
    templatePath = os.path.dirname(os.path.realpath(__file__)) + '/module'
    if os.path.exists(newModulePath):
        sys.exit('Error: Module Already exists')
    os.mkdir(newModulePath)
    createModule(templatePath, newModulePath, newModuleName)


if __name__ == '__main__':
    init()
