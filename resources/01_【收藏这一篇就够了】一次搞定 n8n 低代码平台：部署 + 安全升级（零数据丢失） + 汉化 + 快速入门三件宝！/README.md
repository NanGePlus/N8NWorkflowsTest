# 1、n8n介绍 

n8n官网：https://n8n.io/                                       
n8n Github地址：https://github.com/n8n-io/n8n   星标 153K                                                   
n8n介绍:是一款灵活的工作流自动化平台，为技术团队提供代码的灵活性与无代码的敏捷性                                                          

# 2、部署n8n服务

n8n默认是使用sqlite数据库，这是一个轻量级的数据库，在生产环境建议使用postgres数据库，并发更强更安全稳定                    
  
## 2.1 下载安装Docker             

官网链接如下:https://www.docker.com/ 根据自己的操作系统选择对应的Desktop版本下载安装                                   
安装成功之后启动Docker Desktop软件即可                

## 2.2 Docker部署n8n 

打开命令行终端，在终端中运行以下n8n部署指令,在运行指令之前请先阅读指令说明部分:                     
`docker run -d --name n8n -p 5678:5678 -e GENERIC_TIMEZONE="Asia/Shanghai" -e TZ="Asia/Shanghai" -v /Volumes/Files/n8n:/home/node/.n8n -v /Volumes/Files/n8ndata:/home/node/n8ndata docker.n8n.io/n8nio/n8n:版本号`               

服务部署完成后，执行命令 `docker exec n8n n8n --version` 验证版本              
浏览器打开 http://localhost:5678/ 进入到n8n的web端页面，首次需要进行注册和登录                              

**指令说明:**        
- (1)`--name n8n -p 5678:5678`               
为设置容器的名称和服务所要运行的端口                       
- (2)`GENERIC_TIMEZONE和TZ`                 
都是设置时区，TZ是 Linux 标准时区变量，所有主流应用都兼容，GENERIC_TIMEZONE 是 n8n 的旧版参数(新版本推荐用TZ)                    
- (3)`-v /Volumes/Files/n8n:/home/node/.n8n`                 
其中，“:”左边的文件夹路径需要提前创建好n8n文件夹并获取其绝对路径(根据自己实际路径，/Volumes/Files/n8n)                             
“:”右边的文件夹路径/home/node/.n8n 是n8n的默认配置文件存储路径(如工作流、凭据和设置等)                       
通过挂载进行数据映射，主机上的/Volumes/Files/n8n文件夹会持久化存储这些数据，即使容器被删除，配置也不会丢失                                                            
- (4)`-v /Volumes/Files/n8ndata:/home/node/n8ndata`                 
其中，“:”左边的文件夹路径需要提前创建好n8ndata文件夹并获取其绝对路径(根据自己实际路径，/Volumes/Files/n8ndata)                     
“:”右边的文件夹路径/home/node/n8ndata 是用于存储n8n的额外数据的存储路径(如保存到本地的一些文件等)                                                   
- (5)`docker.n8n.io/n8nio/n8n:版本号`                              
指定n8n的版本，指定最新稳定版本：docker.n8n.io/n8nio/n8n:latest，也可以指定特定的版本：docker.n8n.io/n8nio/n8n:1.115.3                                                                 
n8n镜像对应版本列表：https://hub.docker.com/r/n8nio/n8n/tags                              

## 2.3 Docker部署n8n版本升级

n8n镜像对应版本列表：https://hub.docker.com/r/n8nio/n8n/tags            

先执行命令 `docker pull docker.n8n.io/n8nio/n8n:版本号` 拉取新版本镜像,如1.117.3                                                 

然后，先后执行命令 `docker stop n8n` 和 `docker rm n8n` 停止运行中的容器并清理旧容器                                  

再执行命令 `docker run -d --name n8n -p 5678:5678 -e GENERIC_TIMEZONE="Asia/Shanghai" -e TZ="Asia/Shanghai" -v /Volumes/Files/n8n:/home/node/.n8n -v /Volumes/Files/n8ndata:/home/node/n8ndata docker.n8n.io/n8nio/n8n:版本号` 开启新容器                       

最后，服务部署完成后，执行命令 `docker exec n8n n8n --version` 验证版本                            
浏览器打开 http://localhost:5678/ 进入到n8n的web端页面，刷新后历史数据依然存在                                                   

**注意:注意指定的本地文件夹的绝对路径要和升级前保持一致，否则数据会不同步**                   

## 2.4 Docker部署n8n(汉化版本)   

**汉化说明:**                   
n8n默认是英文版本无中文语言可设置，若需要进行汉化，参考如下:               
汉化包开源地址：https://github.com/other-blowsnow/n8n-i18n-chinese/releases                         
下载需要汉化的对应的版本的汉化包文件(文件解压后为dist文件夹)，需要严格按照版本进行汉化                        

打开命令行终端，在终端中运行以下n8n部署指令,在运行指令之前请先阅读指令说明部分:                     
`docker run -d --name n8n -p 5678:5678 -e GENERIC_TIMEZONE="Asia/Shanghai" -e TZ="Asia/Shanghai" -e N8N_DEFAULT_LOCALE=zh-CN -v /Volumes/Files/n8n:/home/node/.n8n -v /Volumes/Files/n8ndata:/home/node/n8ndata -v /Volumes/Files/n8n_zh/dist:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist docker.n8n.io/n8nio/n8n:版本号`                    

服务部署完成后，执行命令 `docker exec n8n n8n --version` 验证版本                
浏览器打开 http://localhost:5678/ 进入到n8n的web端页面，此时页面将以中文展示，首次需要进行注册和登录                                    

**指令说明:**        
- (1)`--name n8n -p 5678:5678`               
为设置容器的名称和服务所要运行的端口                       
- (2)`GENERIC_TIMEZONE和TZ`                 
都是设置时区，TZ是 Linux 标准时区变量，所有主流应用都兼容，GENERIC_TIMEZONE 是 n8n 的旧版参数(新版本推荐用TZ)                   
- (3)`N8N_DEFAULT_LOCALE`          
设置n8n的默认语言环境变量为zh-CN，使界面和提示默认使用简体中文                          
- (4)`-v /Volumes/Files/n8n:/home/node/.n8n`                 
其中，“:”左边的文件夹路径需要提前创建好n8n文件夹并获取其绝对路径(根据自己实际路径，/Volumes/Files/n8n)                             
“:”右边的文件夹路径/home/node/.n8n 是n8n的默认配置文件存储路径(如工作流、凭据和设置等)                       
通过挂载进行数据映射，主机上的/Volumes/Files/n8n文件夹会持久化存储这些数据，即使容器被删除，配置也不会丢失                                                            
- (5)`-v /Volumes/Files/n8ndata:/home/node/n8ndata`                 
其中，“:”左边的文件夹路径需要提前创建好n8ndata文件夹并获取其绝对路径(根据自己实际路径，/Volumes/Files/n8ndata)                        
“:”右边的文件夹路径/home/node/n8ndata 是用于存储n8n的额外数据的存储路径(如保存到本地的一些文件等)                           
- (6)`/Volumes/Files/n8n_zh/dist:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist`                
其中，“:”左边的文件夹路径需要提前创建好n8n_zh文件夹并获取其绝对路径(根据自己实际路径，/Volumes/Files/n8n_zh/dist,dist为开源项目中下载的汉化包)                                                         
“:”右边的文件夹路径/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist 是n8n的默认UI配置文件存储路径                                            
通过挂载进行数据映射，主机上的/Volumes/Files/n8n_zh文件夹会持久化存储这些数据，即使容器被删除，配置也不会丢失                        
- (7)`docker.n8n.io/n8nio/n8n:版本号`                                    
指定n8n的版本，这里需要注意，指定的版本要与下载的汉化包对应的版本相同                                                                                      
n8n镜像对应版本列表：https://hub.docker.com/r/n8nio/n8n/tags               

# 3、n8n快速入门

介绍快速入门的三件法宝                         

## 3.1 官方文档     

官方文档地址:https://docs.n8n.io/                                   
方式1:直接查看官方文档                              
方式2:使用官方提供的n8n Docs AI，直接与文档对话                                                 

如何使用？              
直接与AI对话：我要实现一个工作流：手动触发完成从本地上传一个excel文件，并对文件里面的数据进行清洗，最终把清洗后的数据保存到本地的excel文件中                                                   

## 3.2 工作流模版

工作流模版链接地址 https://n8n.io/workflows/                              
提供了几乎涵盖常用到的工作流 目前有6477个模版                            

如何使用呢？             
直接登陆到模版页面，根据自己的需要查找模版，预览模版，然后选择“use for free”，再弹出框中可以选择直接加载到本地n8n平台中或拷贝json配置文件                            
   
## 3.3 社区节点

当需要使用一些官方暂未提供的功能节点时，可以通过社区节点查询和安装                   
链接地址 https://www.npmjs.com/search?q=keywords%3An8n-community-node-package                           
打开链接根据关键词搜索即可，关键词以 n8n-nodes 开头                   

如何使用呢？                    
在n8n平台页面点击用户头像->setting->Community Node->Install Node，选择某个节点后直接安装即可                               
安装完成之后，就可以在工作流中直接使用了                


