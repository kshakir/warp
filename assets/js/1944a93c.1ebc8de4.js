"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[117],{5680:(e,i,t)=>{t.d(i,{xA:()=>u,yg:()=>m});var n=t(6540);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?s(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},u=function(e){var i=d(e.components);return n.createElement(l.Provider,{value:i},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},f=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(t),f=a,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||s;return t?n.createElement(m,o(o({ref:i},u),{},{components:t})):n.createElement(m,o({ref:i},u))}));function m(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var r={};for(var l in i)hasOwnProperty.call(i,l)&&(r[l]=i[l]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6892:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(9668),a=(t(6540),t(5680));const s={sidebar_position:2},o="Autosizing disk for Google Cloud",r={unversionedId:"Best_practices/autosize",id:"Best_practices/autosize",title:"Autosizing disk for Google Cloud",description:"When writing a WDL workflow, you have the option to customize your runtime environments, like the size of a virtual computer's disk, memory, and the type of disk you want to use. While you can hardcode standard values for these runtime parameters, there are times when dynamically calculating your parameters based on file sizes could be useful, like when you\u2019re working with large data sets. If you find yourself having to modify your runtime values often, it\u2019s probably beneficial to use some autosizing features.",source:"@site/docs/Best_practices/autosize.md",sourceDirName:"Best_practices",slug:"/Best_practices/autosize",permalink:"/warp/docs/Best_practices/autosize",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Best_practices/autosize.md",tags:[],version:"current",lastUpdatedBy:"Robert Sidney Cox",lastUpdatedAt:1733411364,formattedLastUpdatedAt:"Dec 5, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"WDL cost optimization: Tips and tricks when working with Google Cloud in Terra",permalink:"/warp/docs/Best_practices/GC_cost_optimization"},next:{title:"Setting default values",permalink:"/warp/docs/Best_practices/setting_defaults"}},l={},d=[{value:"Autosizing disk based on file size",id:"autosizing-disk-based-on-file-size",level:2},{value:"Accounting for extra disk space and intermediate files",id:"accounting-for-extra-disk-space-and-intermediate-files",level:2},{value:"Making optional disk input",id:"making-optional-disk-input",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2},{value:"Disk types",id:"disk-types",level:3},{value:"Google Cloud vs. other platforms",id:"google-cloud-vs-other-platforms",level:3},{value:"Resources",id:"resources",level:2}],u={toc:d},c="wrapper";function p(e){let{components:i,...t}=e;return(0,a.yg)(c,(0,n.A)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"autosizing-disk-for-google-cloud"},"Autosizing disk for Google Cloud"),(0,a.yg)("p",null,"When writing a WDL workflow, you have the option to customize your runtime environments, like the size of a virtual computer's disk, memory, and the type of disk you want to use. While you can hardcode standard values for these runtime parameters, there are times when dynamically calculating your parameters based on file sizes could be useful, like when you\u2019re working with large data sets. If you find yourself having to modify your runtime values often, it\u2019s probably beneficial to use some autosizing features."),(0,a.yg)("p",null,"Below, the Broad Pipeline Development team shares some tips and tricks for autosizing disk size for Google Cloud VMs."),(0,a.yg)("h2",{id:"autosizing-disk-based-on-file-size"},"Autosizing disk based on file size"),(0,a.yg)("p",null,"One simple step for autosizing the disk is to dynamically calculate a target disk size based on the size of your different input files. There are some useful WDL functions for this process, like ",(0,a.yg)("inlineCode",{parentName:"p"},"size()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ceil()"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"size()")," function returns the size of a designated file, whereas the ",(0,a.yg)("inlineCode",{parentName:"p"},"ceil()")," function rounds up to the nearest integer. Combining these functions allows you to obtain an integer that reflects the file\u2019s size; you can then assign that output to a variable that can be used throughout the different WDL tasks. "),(0,a.yg)("p",null,"An example of using autosize functions is shown in the code below; we combine the size() and ceil() functions to return the size of an input file called ",(0,a.yg)("inlineCode",{parentName:"p"},"input_file"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-wdl"},'Int dynamic_disk_size = ceil(size(input_file,"GiB")) + 20\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"GiB")," specified after the input file is just a size unit. You can see the full list of available size units in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/openwdl/wdl/blob/main/versions/1.0/SPEC.md#float-sizefile-string"},"WDL 1.0 spec\u2019s float size description"),". The constant added to the end helps with small files sizes (for example, asking for only 1 GB of disk can be a problem for Google Cloud VMs)."),(0,a.yg)("p",null,"The resulting output file size is assigned to the integer ",(0,a.yg)("inlineCode",{parentName:"p"},"dynamic_disk_size"),". This variable can then be used to specify the disk size in the WDL\u2019s runtime section, as shown below:   "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-wdl"},'runtime {\n  disks: "local-disk " + dynamic_disk_size + " HDD"\n}\n')),(0,a.yg)("h2",{id:"accounting-for-extra-disk-space-and-intermediate-files"},"Accounting for extra disk space and intermediate files"),(0,a.yg)("p",null,"At times, specifying disk size using an input file\u2019s size alone may not meet the disk requirements. For example, if your workflow generates intermediate files, the disk needs to be large enough to handle these as well. You can account for intermediate files by setting a multiplier ( an integer) to an input variable. That way you can multiply the dynamically calculated file size by the number of intermediate files you generate, assuming they are roughly the same size as the input. The code below demonstrates this with the input ",(0,a.yg)("inlineCode",{parentName:"p"},"disk_multiplier"),", which is set to 2 to handle a single intermediate file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-wdl"},' input {\n  File clinical_input\n  Int disk_multiplier = 2\n}\n  Int dynamic_disk_size = ceil(size(clinical_input,"GiB"))*disk_multuplier  + 20\n\nruntime {\n  disks: "local-disk " + dynamic_disk_size + " HDD"\n}\n')),(0,a.yg)("p",null,"A good rule of thumb for maximizing disk efficiency is to only use up to 80% of your disk. If you need to add extra space even after accounting for input and intermediate files, you can set up an input variable for extra disk space. The code below uses the input ",(0,a.yg)("inlineCode",{parentName:"p"},"extra_disk")," to add 500 GiB to the disk size dynamically calculated by the input file\u2019s size."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-wdl"},'input {\n  File clinical_input\n  Int extra_disk = 500\n}\n  Int dynamic_disk_size = ceil(size(clinical_input,"GiB"))*2 + extra_disk\n')),(0,a.yg)("h2",{id:"making-optional-disk-input"},"Making optional disk input"),(0,a.yg)("p",null,"You may want to add some flexibility to your workflow so that you can manually specify disk size in addition to dynamically calculating it. In this case, you\u2019ll want to use an optional input and take advantage of the WDL function ",(0,a.yg)("inlineCode",{parentName:"p"},"select_first()"),". This function selects the first defined function and returns it. "),(0,a.yg)("p",null,"Let\u2019s take a look at the example code below, which sets up an optional input, ",(0,a.yg)("inlineCode",{parentName:"p"},"disk_size_gb"),".  The code uses the WDL 1.0 ",(0,a.yg)("inlineCode",{parentName:"p"},"size()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ceil()")," functions to assign the size of the file ",(0,a.yg)("inlineCode",{parentName:"p"},"clinical_input ")," to a dynamically calculated input variable called ",(0,a.yg)("inlineCode",{parentName:"p"},"dynamic_disk_size"),". It then uses ",(0,a.yg)("inlineCode",{parentName:"p"},"select_first()")," to choose either the optional ",(0,a.yg)("inlineCode",{parentName:"p"},"disk_size_gb")," value (if defined) or the dynamically calculated value."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-wdl"},'input {\n  File clinical_input\n  Int? disk_size_gb\n}\n  Int dynamic_disk_size = ceil(size(clinical_input,"GiB"))*2 + 500\n  Int disk_size = select_first([disk_size_gb, dynamic_disk_size])\nruntime {\n  disks: "local-disk " + disk_size + " HDD"\n}\n')),(0,a.yg)("p",null,"The code above saves the output of the ",(0,a.yg)("inlineCode",{parentName:"p"},"select_first()")," function to the variable ",(0,a.yg)("inlineCode",{parentName:"p"},"disk_size"),", which is then used to assign the disk size in the WDL\u2019s runtime section."),(0,a.yg)("h2",{id:"additional-considerations"},"Additional Considerations"),(0,a.yg)("h3",{id:"disk-types"},"Disk types"),(0,a.yg)("p",null,"The disk types you select can vary in cost and therefore affect how much wiggle room you want to add for your disk and memory sizes. The different disk types are described in ",(0,a.yg)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/RuntimeAttributes/#disks"},"Cromwell documentation"),", but basically, you can select between a more expensive solid-state drive (SSD) or a standard hard disk drive HDD. SSD is useful for efficient input/output streaming. If you opt for an SSD disk, you\u2019ll want to restrict the amount of disk size padding and multipliers you use. Because SSD can work more efficiently for some tasks, you might not require the 500 GB extra that you include when working with HDD disks. "),(0,a.yg)("h3",{id:"google-cloud-vs-other-platforms"},"Google Cloud vs. other platforms"),(0,a.yg)("p",null,"The suggestions in this article are specific to Google Cloud VMs; other platforms may only have disk_size as an option or different types of disks. Remember that these suggestions may not apply across different platforms."),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/openwdl/wdl/blob/main/versions/1.0/SPEC.md#int-floorfloat-int-ceilfloat-and-int-roundfloat"},"Ceil function description")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/openwdl/wdl/blob/main/versions/1.0/SPEC.md#float-sizefile-string"},"Size function description")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/openwdl/wdl/blob/main/versions/1.0/SPEC.md#x-select_firstarrayx"},"Select_first function description")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://cromwell.readthedocs.io/en/stable/RuntimeAttributes/#runtime-attribute-descriptions"},"Runtime defaults defined by Cromwell"))))}p.isMDXComponent=!0}}]);