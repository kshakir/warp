"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[6425],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(9668),r=(n(6540),n(5680));const i={sidebar_position:4},l="Consortia Data Processing",s={unversionedId:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",id:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",title:"Consortia Data Processing",description:"Brain Initiative Cell Census Network Processing",source:"@site/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing.md",sourceDirName:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing.md",tags:[],version:"current",lastUpdatedBy:"Robert Sidney Cox",lastUpdatedAt:1733411364,formattedLastUpdatedAt:"Dec 5, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Smart-seq2 Single Nucleus Multi-Sample Count Matrix Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/count-matrix-overview"},next:{title:"Single Nucleus Methyl-Seq and Chromatin Capture (snm3C) Overview",permalink:"/warp/docs/Pipelines/snm3C/README"}},o={},p=[{value:"Brain Initiative Cell Census Network Processing",id:"brain-initiative-cell-census-network-processing",level:2},{value:"Multi-snSS2 reference files for BICCN data processing",id:"multi-snss2-reference-files-for-biccn-data-processing",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"consortia-data-processing"},"Consortia Data Processing"),(0,r.yg)("h2",{id:"brain-initiative-cell-census-network-processing"},"Brain Initiative Cell Census Network Processing"),(0,r.yg)("p",null,"The Smart-seq2 Single Nucleus Multi-Sample (Multi-snSS2) pipeline supports data processing for the ",(0,r.yg)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network (BICCN)"),". An overview of the BICCN pipeline resources is available on the BICCN's ",(0,r.yg)("a",{parentName:"p",href:"https://biccn.org/tools/biccn-pipelines"},"Pipelines page"),"."),(0,r.yg)("h3",{id:"multi-snss2-reference-files-for-biccn-data-processing"},"Multi-snSS2 reference files for BICCN data processing"),(0,r.yg)("p",null,"The BICCN 2.0 Whole Mouse Brain Working Group uses the Ensembl GRCm38 reference for alignment and a modified GTF for gene annotation (see table below). All Multi-snSS2 pipeline reference inputs were created with the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices"},"BuildIndices workflow"),"."),(0,r.yg)("p",null," BICCN processes single-nucleus data, which is enriched in pre-mRNAs containing introns. To account for this, the Multi-snSS2 workflow counts reads that map to both exonic and intronic regions (any part of a contig that is not exonic nor intergenic). The BuildIndices workflow uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"BuildStarSingleNucleus")," task to add intron annotations to the GTF with a custom ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/build-indices/add-introns-to-gtf.py"},"python script"),". These annotations enable intron counting with the ",(0,r.yg)("a",{parentName:"p",href:"http://subread.sourceforge.net/"},"featureCounts")," software. "),(0,r.yg)("p",null," The custom GTF contains all annotations for any ",(0,r.yg)("inlineCode",{parentName:"p"},"gene_id")," that has at least one transcript. This reduces the number of genes in the GTF to ","~","32,000. "),(0,r.yg)("p",null,"All reference files are available in a public Google bucket (see table below) and are accompanied by a README that details reference provenance (gs://gcp-public-data--broad-references/mm10/v0/README_mm10_singlecell_gencode.txt). "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Multi-snSS2 reference input name"),(0,r.yg)("th",{parentName:"tr",align:null},"Google bucket URI"),(0,r.yg)("th",{parentName:"tr",align:null},"Reference source"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"annotations_gtf")),(0,r.yg)("td",{parentName:"tr",align:null},"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/modified_gencode.vM23.primary_assembly.annotation.gtf"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/gencode.vM23.annotation.gtf.gzf"},"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/gencode.vM23.annotation.gtf.gzf")),(0,r.yg)("td",{parentName:"tr",align:null},"Modified GENCODE GTF including intron annotations that can be used for intron counting with featureCounts.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"genome_ref_fasta")),(0,r.yg)("td",{parentName:"tr",align:null},"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/modified_mm10.primary_assembly.genome.fa"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/GRCm38.p6.genome.fa.gz"},"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/GRCm38.p6.genome.fa.gz")),(0,r.yg)("td",{parentName:"tr",align:null},"FASTA file used to create the STAR reference files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tar_star_reference")),(0,r.yg)("td",{parentName:"tr",align:null},"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/star/modified_star_2.7.9a_primary_gencode_mouse_vM23.tar"),(0,r.yg)("td",{parentName:"tr",align:null},"NA \u2014 built with the BuildIndices workflow."),(0,r.yg)("td",{parentName:"tr",align:null},"Reference files used for alignment with STAR.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"adapter_list")),(0,r.yg)("td",{parentName:"tr",align:null},"gs://broad-gotc-test-storage/MultiSampleSmartSeq2SingleNucleus/adapters/Illumina_adapters_list.fa"),(0,r.yg)("td",{parentName:"tr",align:null},"See Illumina's overview on ",(0,r.yg)("a",{parentName:"td",href:"https://support.illumina.com/bulletins/2016/12/what-sequences-do-i-use-for-adapter-trimming.html"},"adapter sequences"),"."),(0,r.yg)("td",{parentName:"tr",align:null},"List of adapter sequences used for trimming.")))))}g.isMDXComponent=!0}}]);