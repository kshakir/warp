"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[7017],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(y,i(i({ref:t},g),{},{components:a})):n.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(9668),r=(a(6540),a(5680));const l={sidebar_position:1,slug:"/Pipelines/Single_Cell_ATAC_Seq_Pipeline/README"},i="scATAC Overview",o={unversionedId:"Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline/README",id:"Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline/README",title:"scATAC Overview",description:"9/12/2024",source:"@site/docs/Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline/README.md",sourceDirName:"Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline",slug:"/Pipelines/Single_Cell_ATAC_Seq_Pipeline/README",permalink:"/warp/docs/Pipelines/Single_Cell_ATAC_Seq_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"Robert Sidney Cox",lastUpdatedAt:1733411364,formattedLastUpdatedAt:"Dec 5, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/Single_Cell_ATAC_Seq_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"Genomic Data Commons (GDC) Whole Genome Somatic Single Sample Overview",permalink:"/warp/docs/Pipelines/Genomic_Data_Commons_Whole_Genome_Somatic/README"},next:{title:"scATAC v1.3.2 Methods",permalink:"/warp/docs/Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline/scatac.methods"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Start Table",id:"quick-start-table",level:3},{value:"Set-up",id:"set-up",level:2},{value:"Workflow Installation and Requirements",id:"workflow-installation-and-requirements",level:3},{value:"Pipeline Inputs",id:"pipeline-inputs",level:3},{value:"Input File Preparation",id:"input-file-preparation",level:3},{value:"R1 and R2 FASTQ Preparation",id:"r1-and-r2-fastq-preparation",level:4},{value:"Input_reference Preparation",id:"input_reference-preparation",level:4},{value:"Workflow Tasks and Tools",id:"workflow-tasks-and-tools",level:2},{value:"Task Summary",id:"task-summary",level:3},{value:"AlignPairedEnd",id:"alignpairedend",level:4},{value:"SnapPre",id:"snappre",level:4},{value:"Filtering Parameters",id:"filtering-parameters",level:5},{value:"SnapCellByBin",id:"snapcellbybin",level:4},{value:"MakeCompliantBAM",id:"makecompliantbam",level:4},{value:"BreakoutSnap",id:"breakoutsnap",level:4},{value:"Outputs",id:"outputs",level:2},{value:"Snap QC Metrics",id:"snap-qc-metrics",level:5},{value:"Running on Terra",id:"running-on-terra",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Citing the scATAC Pipeline",id:"citing-the-scatac-pipeline",level:2},{value:"Consortia Support",id:"consortia-support",level:2},{value:"Pipeline Improvements",id:"pipeline-improvements",level:2}],g={toc:s},d="wrapper";function u(e){let{components:t,...l}=e;return(0,r.yg)(d,(0,n.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"scatac-overview"},"scATAC Overview"),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"9/12/2024"),(0,r.yg)("p",{parentName:"admonition"},"We are deprecating the Single-cell ATAC Seq Pipeline. Although the code will continue to be available, we are no longer supporting it. This workflow has been replaced with the ",(0,r.yg)("a",{parentName:"p",href:"/warp/docs/Pipelines/ATAC/README"},"ATAC workflow"),".")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"scATAC 1.3.2")),(0,r.yg)("td",{parentName:"tr",align:"center"},"May 2024"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Elizabeth Kiernan"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Please ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/issues"},"file an issue in WARP"),".")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"scATAC_diagram",src:a(390).A,width:"676",height:"1030"})),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"The scATAC Pipeline was developed by the Broad DSP Pipelines team to process single cell/nucleus ATAC-seq datasets. The pipeline is based on the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/r3fang/SnapATAC"},"SnapATAC pipeline")," described by ",(0,r.yg)("a",{parentName:"p",href:"https://www.biorxiv.org/content/10.1101/615179v2.full"},"Fang et al. (2019)"),". Overall, the pipeline uses the python module ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/r3fang/SnapTools"},"SnapTools")," to align and process paired reads in the form of FASTQ files. It produces an hdf5-structured Snap file that includes a cell-by-bin count matrix. In addition to the Snap file, the final outputs include a GA4GH compliant aligned BAM and QC metrics."),(0,r.yg)("admonition",{title:"Want to use the scATAC Pipeline for your publication?",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Check out the ",(0,r.yg)("a",{parentName:"p",href:"/warp/docs/Deprecated_Pipelines/Single_Cell_ATAC_Seq_Pipeline/scatac.methods"},"scATAC Publication Methods")," to get started!")),(0,r.yg)("h3",{id:"quick-start-table"},"Quick Start Table"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Pipeline Features"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Source"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Assay Type"),(0,r.yg)("td",{parentName:"tr",align:null},"Single nucleus ATAC-seq"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.biorxiv.org/content/biorxiv/early/2019/05/13/615179.full.pdf"},"Preprint here "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Overall Workflow"),(0,r.yg)("td",{parentName:"tr",align:null},"Generates Snap file with cell-by-bin matrix"),(0,r.yg)("td",{parentName:"tr",align:null},"Code available from ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/scATAC/scATAC.wdl"},"GitHub"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Workflow Language"),(0,r.yg)("td",{parentName:"tr",align:null},"WDL 1.0"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Aligner"),(0,r.yg)("td",{parentName:"tr",align:null},"BWA"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://pubmed.ncbi.nlm.nih.gov/19451168/"},"Li H. and Durbin R., 2009"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Input File Format"),(0,r.yg)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided"),(0,r.yg)("td",{parentName:"tr",align:null},"Paired-end FASTQs with cell barcodes appended to read names (read barcode demultiplexing section ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/r3fang/SnapATAC/wiki/FAQs#whatissnap"},"here"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Output File Format"),(0,r.yg)("td",{parentName:"tr",align:null},"File formats in which scATAC output is provided"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"http://samtools.github.io/hts-specs/"},"BAM"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/r3fang/SnapATAC/wiki/FAQs#whatissnap"},"Snap"))))),(0,r.yg)("h2",{id:"set-up"},"Set-up"),(0,r.yg)("h3",{id:"workflow-installation-and-requirements"},"Workflow Installation and Requirements"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/scATAC/scATAC.wdl"},"scATAC workflow")," is written in the Workflow Description Language WDL and can be downloaded by cloning the GitHub ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/"},"WARP repository"),". The workflow can be deployed using ",(0,r.yg)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms. For the latest workflow version and release notes, please see the scATAC ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/scATAC/scATAC.changelog.md"},"changelog"),"."),(0,r.yg)("h3",{id:"pipeline-inputs"},"Pipeline Inputs"),(0,r.yg)("p",null,"The pipeline inputs are detailed in the table below. You can test the workflow by using the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/scATAC/example_inputs/human_example.json"},"human_example.json")," example configuration file."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Input name"),(0,r.yg)("th",{parentName:"tr",align:null},"Input type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"input_fastq1"),(0,r.yg)("td",{parentName:"tr",align:null},"File"),(0,r.yg)("td",{parentName:"tr",align:null},"FASTQ file of the first reads (R1)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"input_fastq2"),(0,r.yg)("td",{parentName:"tr",align:null},"File"),(0,r.yg)("td",{parentName:"tr",align:null},"FASTQ file of the second reads (R2)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"input_id"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Unique identifier for the sample; will also be used to name the output files")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"input_reference"),(0,r.yg)("td",{parentName:"tr",align:null},"File"),(0,r.yg)("td",{parentName:"tr",align:null},"Reference bundle that is generated with bwa-mk-index-wdl found ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/accessory_workflows/build_bwa_reference/bwa-mk-index.wdl"},"here"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"genome_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the genomic reference (name that precedes the \u201c.tar\u201d in the input_reference)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_bam"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Name for the output BAM; default is set to the ",(0,r.yg)("inlineCode",{parentName:"td"},"input_id"),' + "',"_",'aligned_bam"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bin_size_list"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"List of bin sizes used to generate cell-by-bin matrices; default is 10000 bp")))),(0,r.yg)("h3",{id:"input-file-preparation"},"Input File Preparation"),(0,r.yg)("h4",{id:"r1-and-r2-fastq-preparation"},"R1 and R2 FASTQ Preparation"),(0,r.yg)("p",null,"The scATAC workflow requires paired reads in the form FASTQ files with the cell barcodes appended to the readnames. A description of the barcode demultiplexing can be found on the SnapATAC documentation (see barcode demultiplexing section ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/r3fang/SnapATAC/wiki/FAQs#CEMBA_snap"},"here"),"). The full cell barcode must form the first part of the read name (for both R1 and R2 files) and be separated from the rest of the line by a colon. You can find an example python code to perform demultiplexing in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/r3fang/SnapTools/blob/master/snaptools/dex_fastq.py"},"SnapTools documentation here"),". The codeblock below demonstrates the correct format."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"@CAGTTGCACGTATAGAACAAGGATAGGATAAC:7001113:915:HJ535BCX2:1:1106:1139:1926 1:N:0:0\nACCCTCCGTGTGCCAGGAGATACCATGAATATGCCATAGAACCTGTCTCT\n+\nDDDDDIIIIIIIIIIIIIIHHIIIIIIIIIIIIIIIIIIIIIIIIIIIII\n")),(0,r.yg)("h4",{id:"input_reference-preparation"},"Input_reference Preparation"),(0,r.yg)("p",null,"The input_reference is a BWA compatible reference bundle in TAR file format. You can create this BWA reference using the accessory workflow  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/accessory_workflows/build_bwa_reference/bwa-mk-index.wdl"},"here"),"."),(0,r.yg)("h2",{id:"workflow-tasks-and-tools"},"Workflow Tasks and Tools"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/scATAC/scATAC.wdl"},"scATAC workflow")," is divided into multiple tasks which are described in the table below. The table also links to the Docker Image for each task and to the documentation or code for the relevant software tool parameters."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Task"),(0,r.yg)("th",{parentName:"tr",align:null},"Task Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Tool Docker Image"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter Descriptions or Code"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AlignPairedEnd"),(0,r.yg)("td",{parentName:"tr",align:null},"Align the modified FASTQ files to the genome"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/snaptools-bwa/Dockerfile"},"snaptools-bwa:1.0.0-1.4.8-0.7.17-1690310027")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/r3fang/SnapTools"},"SnapTools documentation"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SnapPre"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial generation of snap file"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/snaptools-bwa/Dockerfile"},"snaptools-bwa:1.0.0-1.4.8-0.7.17-1690310027")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/r3fang/SnapTools"},"SnapTools documentation"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SnapCellByBin"),(0,r.yg)("td",{parentName:"tr",align:null},"Binning of data by genomic bins"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/snaptools-bwa/Dockerfile"},"snaptools-bwa:1.0.0-1.4.8-0.7.17-1690310027")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/r3fang/SnapTools"},"SnapTools documentation"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MakeCompliantBAM"),(0,r.yg)("td",{parentName:"tr",align:null},"Generation of a GA4GH compliant BAM"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/blob/develop/tools/Dockerfile"},"warp-tools:1.0.1-1690997141")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/blob/develop/tools/scripts/makeCompliantBAM.py"},"Code"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BreakoutSnap"),(0,r.yg)("td",{parentName:"tr",align:null},"Extraction of tables from snap file into text format (for testing and user availability)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/dockers/skylab/snap-breakout"},"snap-breakout:0.0.1")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/dockers/skylab/snap-breakout/breakoutSnap.py"},"Code"))))),(0,r.yg)("h3",{id:"task-summary"},"Task Summary"),(0,r.yg)("h4",{id:"alignpairedend"},"AlignPairedEnd"),(0,r.yg)("p",null,"The AlignPairedEnd task takes the barcode demultiplexed FASTQ files and aligns reads to the genome using the BWA aligner. It uses the SnapTools min_cov parameter to set the minimum number of barcodes a fragment requires to be included in the final output. This parameter is set to 0. The final task output is an aligned BAM file."),(0,r.yg)("h4",{id:"snappre"},"SnapPre"),(0,r.yg)("p",null,"The SnapPre task uses SnapTools to perform preprocessing and filtering on the aligned BAM. The task outputs are a Snap file and QC metrics. The table below details the filtering parameters for the task."),(0,r.yg)("h5",{id:"filtering-parameters"},"Filtering Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--min-mapq"),(0,r.yg)("td",{parentName:"tr",align:null},"Fragments with mappability less than value will be filtered"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--min-flen"),(0,r.yg)("td",{parentName:"tr",align:null},"Fragments of length shorter than min_flen will be filtered"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--max-flen"),(0,r.yg)("td",{parentName:"tr",align:null},"Fragments of length bigger than min_flen will be filtered"),(0,r.yg)("td",{parentName:"tr",align:null},"1000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--keep-chrm"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean variable indicates whether to keep reads mapped to chrM"),(0,r.yg)("td",{parentName:"tr",align:null},"TRUE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--keep-single"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean variable indicates whether to keep single-end reads"),(0,r.yg)("td",{parentName:"tr",align:null},"TRUE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--keep-secondary"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean variable indicates whether to keep secondary alignments"),(0,r.yg)("td",{parentName:"tr",align:null},"FALSE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--max-num"),(0,r.yg)("td",{parentName:"tr",align:null},"Max number of barcodes to be stored. Based on the coverage, top max_barcode barcodes are selected and stored"),(0,r.yg)("td",{parentName:"tr",align:null},"1000000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--min-cov"),(0,r.yg)("td",{parentName:"tr",align:null},"Fragments with less than min-cov number of barcodes will be filtered"),(0,r.yg)("td",{parentName:"tr",align:null},"100")))),(0,r.yg)("h4",{id:"snapcellbybin"},"SnapCellByBin"),(0,r.yg)("p",null,"The SnapCellByBin task uses the Snap file to create cell-by-bin count matrices in which a \u201c1\u201d represents a bin with an accessible region of the genome and a \u201c0\u201d represents an inaccessible region. The bin_size_list sets the bin size to 10,000 bp by default but can be changed by specifying the value in the inputs to the workflow."),(0,r.yg)("h4",{id:"makecompliantbam"},"MakeCompliantBAM"),(0,r.yg)("p",null,"The MakeCompliantBAM task uses a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/tools/scripts/makeCompliantBAM.py"},"custom python script")," to make a GA4GH compliant BAM by moving the cellular barcodes in the read names to the CB tag."),(0,r.yg)("h4",{id:"breakoutsnap"},"BreakoutSnap"),(0,r.yg)("p",null,"The BreakoutSnap task extracts data from the Snap file and exports it to individual CSVs. These CSV outputs are listed in the table in the Outputs section below. The code is available ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/dockers/skylab/snap-breakout/breakoutSnap.py"},"here"),"."),(0,r.yg)("h2",{id:"outputs"},"Outputs"),(0,r.yg)("p",null,"The main outputs of the scATAC workflow are the Snap file, Snap QC metrics, and the GA4GH compliant BAM file. All files with the prefix \u201cbreakout\u201d are CSV files containing individual pieces of data from the Snap. The sessions for the Snap file are described in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/r3fang/SnapTools"},"SnapTools documentation"),". Additionally, you can read detailed information on the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/r3fang/SnapTools/blob/master/docs/snap_format.docx"},"Snap file fields for each session"),' (select "View Raw").'),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Output File Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_snap_qc"),(0,r.yg)("td",{parentName:"tr",align:null},"Quality control file corresponding to the snap file")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_snap"),(0,r.yg)("td",{parentName:"tr",align:null},"Output snap file (in hdf5 container format)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_aligned_bam"),(0,r.yg)("td",{parentName:"tr",align:null},"Output BAM file, compliant with GA4GH standards")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"breakout_barcodes"),(0,r.yg)("td",{parentName:"tr",align:null},"Text file containing the FM ('Fragment session') barcodeLen and barcodePos fields")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"breakout_fragments"),(0,r.yg)("td",{parentName:"tr",align:null},"Text file containing the FM ('Fragments session') fragChrom, fragLen, and fragStart fields")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"breakout_binCoordinates"),(0,r.yg)("td",{parentName:"tr",align:null},"Text file with the AM session ('Cell x bin accessibility' matrix) binChrom and binStart fields")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"breakout_binCounts"),(0,r.yg)("td",{parentName:"tr",align:null},"Text file with the AM session ('Cell x bin accessibility' matrix) idx, idy, and count fields")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"breakout_barcodesSection"),(0,r.yg)("td",{parentName:"tr",align:null},"Text file with the data from the BD session ('Barcode session' table)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_pipeline_version"),(0,r.yg)("td",{parentName:"tr",align:null},"Strong describing the version of the scATAC pipeline used.")))),(0,r.yg)("h5",{id:"snap-qc-metrics"},"Snap QC Metrics"),(0,r.yg)("p",null,"The following table details the metrics available in the output_snap_qc file."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"QC Metric"),(0,r.yg)("th",{parentName:"tr",align:null},"Abbreviation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of unique barcodes"),(0,r.yg)("td",{parentName:"tr",align:null},"No abbreviation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of fragments"),(0,r.yg)("td",{parentName:"tr",align:null},"TN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of uniquely mapped"),(0,r.yg)("td",{parentName:"tr",align:null},"UM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of single ends"),(0,r.yg)("td",{parentName:"tr",align:null},"SE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of secondary alignments"),(0,r.yg)("td",{parentName:"tr",align:null},"SA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of paired ends"),(0,r.yg)("td",{parentName:"tr",align:null},"PE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of proper paired"),(0,r.yg)("td",{parentName:"tr",align:null},"PP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of proper frag len"),(0,r.yg)("td",{parentName:"tr",align:null},"PL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of usable fragments"),(0,r.yg)("td",{parentName:"tr",align:null},"US")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of unique fragments"),(0,r.yg)("td",{parentName:"tr",align:null},"UQ")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total number of chrM fragments"),(0,r.yg)("td",{parentName:"tr",align:null},"CM")))),(0,r.yg)("h2",{id:"running-on-terra"},"Running on Terra"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://app.terra.bio/"},"Terra"),' is a public, cloud-based platform for biomedical research. If you would like to try the scATAC workflow (previously named "snap-atac") in Terra, you can import the most recent version from ',(0,r.yg)("a",{parentName:"p",href:"https://dockstore.org/workflows/github.com/broadinstitute/warp/scATAC:scATAC_v1.1.0?tab=info"},"Dockstore"),". Additionally, there is a public ",(0,r.yg)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/brain-initiative-bcdc/scATAC"},"scATAC workspace")," preloaded with the scATAC workflow and downsampled data."),(0,r.yg)("h2",{id:"versioning"},"Versioning"),(0,r.yg)("p",null,"All scATAC workflow releases are documented in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/scATAC/scATAC.changelog.md"},"scATAC changelog"),"."),(0,r.yg)("h2",{id:"citing-the-scatac-pipeline"},"Citing the scATAC Pipeline"),(0,r.yg)("p",null,"If you use the scATAC Pipeline in your research, please identify the pipeline in your methods section using the ",(0,r.yg)("a",{parentName:"p",href:"https://scicrunch.org/resources/data/record/nlx_144509-1/SCR_018919/resolver?q=SCR_018919&l=SCR_018919&i=rrid:scr_018919"},"scATAC SciCrunch resource identifier"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ex: ",(0,r.yg)("em",{parentName:"li"},"scATAC Pipeline (RRID:SCR_018919)"))),(0,r.yg)("p",null,"Please also consider citing our preprint:"),(0,r.yg)("p",null,"Degatano, K.; Awdeh, A.; Dingman, W.; Grant, G.; Khajouei, F.; Kiernan, E.; Konwar, K.; Mathews, K.; Palis, K.; Petrillo, N.; Van der Auwera, G.; Wang, C.; Way, J.; Pipelines, W. WDL Analysis Research Pipelines: Cloud-Optimized Workflows for Biological Data Processing and Reproducible Analysis. Preprints 2024, 2024012131. ",(0,r.yg)("a",{parentName:"p",href:"https://doi.org/10.20944/preprints202401.2131.v1"},"https://doi.org/10.20944/preprints202401.2131.v1")),(0,r.yg)("h2",{id:"consortia-support"},"Consortia Support"),(0,r.yg)("p",null,"This pipeline is supported and used by the ",(0,r.yg)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN). "),(0,r.yg)("p",null,"If your organization also uses this pipeline, we would love to list you! Please reach out to us by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues"},"filing an issue in WARP"),"."),(0,r.yg)("h2",{id:"pipeline-improvements"},"Pipeline Improvements"),(0,r.yg)("p",null,"Please help us make our tools better by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues"},"filing an issue in WARP"),"; we welcome pipeline-related suggestions or questions."))}u.isMDXComponent=!0},390:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/scATAC_diagram-8a049158447e04f48529d186ea9da5f5.png"}}]);