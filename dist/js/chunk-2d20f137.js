(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f137"],{b1a3:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,s=t._self._c;return s("div",[s("h1",[t._v("Deploy")]),s("p",[t._v("The 'web' directory of this project provides a complete project developed based on the 'simple mind map' library, 'Vue2. x', and 'ElementUI'. The data is stored locally on the computer by default, and can also be manipulated locally on the computer. Originally intended as an online 'demo', it can also be directly used as an online version of the mind map application, online address: "),s("a",{attrs:{href:"https://wanglin2.github.io/mind-map/"}},[t._v("https://wanglin2.github.io/mind-map/")]),t._v(".")]),s("p",[t._v("If your network environment is slow to access the 'GitHub' service, you can also deploy it to your server.")]),s("h2",[t._v("Deploying to a static file server")]),s("p",[t._v("The project itself does not rely on the backend, so it can be deployed to a static file server. The following commands can be executed in sequence:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("git "),s("span",{staticClass:"hljs-built_in"},[t._v("clone")]),t._v(" https://github.com/wanglin2/mind-map.git\n"),s("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" mind-map\n"),s("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" simple-mind-map\nnpm i\nnpm link\n"),s("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" ..\n"),s("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" web\nnpm i\nnpm link simple-mind-map\n")])]),s("p",[t._v("Then you can choose to start the local service:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("npm run serve\n")])]),s("p",[t._v("You can also directly package and generate construction products:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("npm run build\n")])]),s("p",[t._v("The packaged entry page 'index.html' can be found in the project root directory, and the corresponding static resources are located in the 'dist' directory under the root directory. The 'html' file will access the resources in the 'dist' directory through relative paths, such as 'dist/xxx'. You can directly upload these two files or directories to your static file server. In fact, this project is deployed to 'GitHub Pages' in this way.")]),s("p",[t._v("If you do not have any code modification requirements, it is also possible to directly copy these files from this repository.")]),s("p",[t._v("If you want to package 'index.html' into the 'dist' directory as well, you can modify the 'scripts.build' command in the 'web/package.json' file to delete '&& node ../copy.js' from 'vue-cli-service build && node ../copy.js'.")]),s("p",[t._v("If you want to modify the directory for packaging output, you can modify the 'outputDir' configuration of the 'web/vue.config.js' file to the path you want to output.")]),s("p",[t._v("If you want to modify the path of the 'index. html' file referencing static resources, you can modify the 'publicPath' configuration of the 'web/vue.config.js' file. And the "),s("code",[t._v("window.externalPublicPath")]),t._v(" config in "),s("code",[t._v("web/public/index.html")]),t._v(" file.")]),s("p",[t._v("In addition, the default route used is 'hash ', which means that there will be '#'in the path. If you want to use the 'history' route, you can modify the 'web/src/router.js' file to:")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" router = "),s("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" VueRouter({\n  routes\n})\n")])]),s("p",[t._v("Change to:")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" router = "),s("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" VueRouter({\n  "),s("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'history'")]),t._v(",\n  routes\n})\n")])]),s("p",[t._v("However, this requires backend support, as our application is a single page client application. If the backend is not properly configured, users will return 404 when accessing sub routes directly in the browser. Therefore, you need to add a candidate resource on the server that covers all situations: if the 'URL' cannot match any static resources, the same 'index. html' page should be returned.")]),s("h2",[t._v("Docker")]),s("blockquote",[s("p",[t._v("Thank you very much "),s("a",{attrs:{href:"https://github.com/shuiche-it"}},[t._v("水车")]),t._v(", the corresponding Docker package is maintained by him.")])]),s("p",[t._v("Install directly from Docker Hub:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("docker run -d -p 8081:8080 shuiche/mind-map:latest\n")])]),s("p",[t._v("Mindmap has activated port 8080 as the web service entry point in the container. When running the container through Docker, it is necessary to specify a local mapping port. In the above case, we mapped the local port 8081 to the container port 8080.")]),s("p",[t._v("After the installation is completed, check the container's running status through 'Docker PS'.")]),s("p",[t._v("Open 127.0.0.1:8081 in the browser to use the Web mind map function.")]),s("p",[s("a",{attrs:{href:"https://laosu.gq/2023/09/02/%E5%BC%BA%E5%A4%A7%E7%9A%84%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE%E5%BA%93SimpleMindMap/"}},[t._v("在群晖上以 Docker 方式安装")])]),s("h2",[t._v("Docking with one's own storage services")]),s("p",[t._v("The application data is stored locally in the browser by default, and the local storage capacity of the browser is relatively small, so it is easy to trigger restrictions when inserting more images in the mind map. Therefore, a better choice is to dock with your own storage service, which usually has two ways:")]),s("h3",[t._v("The first")]),s("p",[t._v("Simply clone the warehouse code and modify the relevant methods in 'web/src/API/index.js' to obtain data from your database and store it in your data.")]),s("h3",[t._v("The second")]),s("p",[t._v("Many times, you may want to always use the latest code from this repository, so the first method is not very convenient because you need to manually merge the code, so the second method is provided.")]),s("p",[t._v("Specific operating steps:")]),s("ol",[s("li",[t._v("Copy the packaged resources of the web application")])]),s("p",[t._v("This includes the 'dist' directory and the 'index.html' file.")]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Modify the copied 'index.html' file")])]),s("p",[t._v("Firstly, insert the following code into the 'head' tag:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("<script>\n  "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverApp = "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n<\/script>\n")])]),s("p",[t._v("This line of code will prompt the application not to initialize the application 'i.e.: new Vue()', but to give control to you. Next, insert your own 'js' code at the end of the 'body', either inline or out of chain. The inline example is as follows:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("<script>\n  "),s("span",{staticClass:"hljs-comment"},[t._v("// Your own method of requesting data")]),t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" getDataFromBackend = "),s("span",{staticClass:"hljs-function"},[t._v("() =>")]),t._v(" {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("Promise")]),t._v("("),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("resolve, reject")]),t._v(") =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-built_in"},[t._v("setTimeout")]),t._v("("),s("span",{staticClass:"hljs-function"},[t._v("() =>")]),t._v(" {\n        resolve({\n          "),s("span",{staticClass:"hljs-comment"},[t._v("// MindMap data")]),t._v("\n          "),s("span",{staticClass:"hljs-attr"},[t._v("mindMapData")]),t._v(": {\n            "),s("span",{staticClass:"hljs-attr"},[t._v("root")]),t._v(": {\n              "),s("span",{staticClass:"hljs-string"},[t._v('"data"')]),t._v(": {\n                  "),s("span",{staticClass:"hljs-string"},[t._v('"text"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"根节点"')]),t._v("\n              },\n              "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n            },\n            "),s("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": { "),s("span",{staticClass:"hljs-string"},[t._v('"template"')]),t._v(":"),s("span",{staticClass:"hljs-string"},[t._v('"avocado"')]),t._v(","),s("span",{staticClass:"hljs-string"},[t._v('"config"')]),t._v(":{} },\n            "),s("span",{staticClass:"hljs-attr"},[t._v("layout")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"logicalStructure"')]),t._v(",\n            "),s("span",{staticClass:"hljs-attr"},[t._v("config")]),t._v(": {},\n            "),s("span",{staticClass:"hljs-attr"},[t._v("view")]),t._v(": {}\n          },\n          "),s("span",{staticClass:"hljs-comment"},[t._v("// Page language, supporting Chinese (zh) and English (en)")]),t._v("\n          "),s("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'zh'")]),t._v(",\n          "),s("span",{staticClass:"hljs-comment"},[t._v("// Page Section Configuration")]),t._v("\n          "),s("span",{staticClass:"hljs-attr"},[t._v("localConfig")]),t._v(": "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v("\n        })\n      }, "),s("span",{staticClass:"hljs-number"},[t._v("200")]),t._v(")\n    })\n  }\n  "),s("span",{staticClass:"hljs-comment"},[t._v("// Register Global Method")]),t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" setTakeOverAppMethods = "),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("data")]),t._v(") =>")]),t._v(" {\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods = {}\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Function for obtaining mind map data")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods.getMindMapData = "),s("span",{staticClass:"hljs-function"},[t._v("() =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" data.mindMapData\n    } \n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Functions for Saving Mind Map Data")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods.saveMindMapData = "),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("data")]),t._v(") =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(data)\n      "),s("span",{staticClass:"hljs-comment"},[t._v("// The trigger frequency of this function may be high, so you should do throttling or anti shaking measures")]),t._v("\n    }\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Function to obtain language")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods.getLanguage = "),s("span",{staticClass:"hljs-function"},[t._v("() =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" data.lang\n    }\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Functions for Saving Languages")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods.saveLanguage = "),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("lang")]),t._v(") =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(lang)\n    }\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Get locally configured functions")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods.getLocalConfig = "),s("span",{staticClass:"hljs-function"},[t._v("() =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" data.localConfig\n    }\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Save locally configured functions")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverAppMethods.saveLocalConfig = "),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("config")]),t._v(") =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(config)\n    }\n  }\n  "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".onload = "),s("span",{staticClass:"hljs-keyword"},[t._v("async")]),t._v(" () => {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (!"),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".takeOverApp) "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v("\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// request data")]),t._v("\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" data = "),s("span",{staticClass:"hljs-keyword"},[t._v("await")]),t._v(" getDataFromBackend()\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Method for setting global")]),t._v("\n    setTakeOverAppMethods(data)\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Mind Map Instance Creation Completion Event")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".$bus.$on("),s("span",{staticClass:"hljs-string"},[t._v("'app_inited'")]),t._v(", "),s("span",{staticClass:"hljs-function"},[t._v("("),s("span",{staticClass:"hljs-params"},[t._v("mindMap")]),t._v(") =>")]),t._v(" {\n      "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(mindMap)\n    })\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// You can use window$ Bus$ On() to listen for some events in the application")]),t._v("\n    "),s("span",{staticClass:"hljs-comment"},[t._v("// Instantiate Page")]),t._v("\n    "),s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".initApp()\n  }\n<\/script>\n")])]),s("p",[t._v("As shown above, when you set the 'window.takeOverApp=true' flag, the application will no longer actively instantiate, but will expose the instantiated methods for you to call. You can first request the data of the mind map from the backend, and then register the relevant methods. The application will call internally at the appropriate time to achieve the purpose of echo and save.")]),s("p",[t._v("The advantage of doing this is that whenever the code in this repository is updated, you can simply copy the packaged files to your own server. With a slight modification of the 'index. html' page, you can achieve synchronous updates and use your own storage service.")]),s("h2",[t._v("Modifying Static Resource Paths")]),s("p",[t._v("If you want to maintain synchronous updates with the code in this repository as in the previous section, but also want to modify the storage location of static resources, for example, the default hierarchical relationship is:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("-dist\n--css\n--fonts\n--img\n--js\n-logo.ico\n\n-index.html\n")])]),s("p",[t._v("And you want to adjust it to this:")]),s("pre",{staticClass:"hljs"},[s("code",[t._v("-assets\n--dist\n---css\n---fonts\n---img\n---js\n-logo.ico\n\n-index.html\n")])]),s("p",[t._v("So you can configure the 'window.externalPublicPath' in 'index.html' as the default "),s("code",[t._v("./dist/")]),t._v(" is modified to:")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".externalPublicPath = "),s("span",{staticClass:"hljs-string"},[t._v("'./assets/dist/'")]),t._v("\n")])]),s("p",[t._v("At the same time, the paths of the inline '.ico', '.js', and '.css' resources in 'index.html' need to be manually modified by you.")]),s("p",[t._v("It should be noted that it is best not to adjust the directory hierarchy within the 'dist' directory, otherwise exceptions may occur.")]),s("p",[t._v("If you want to replace some of the static resources, such as the theme image and structure image, with your own designed image, you can directly overwrite it with the same name.")])])}],i={},o=i,l=a("2877"),c=Object(l["a"])(o,e,n,!1,null,null,null);s["default"]=c.exports}}]);