"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[4097],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>c});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,c=m["".concat(s,".").concat(u)]||m[u]||g[u]||l;return r?a.createElement(c,i(i({ref:t},d),{},{components:r})):a.createElement(c,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(9668),n=(r(6540),r(5680));const l={sidebar_position:5},i="Optimus Library-level metrics",o={unversionedId:"Pipelines/Optimus_Pipeline/Library-metrics",id:"Pipelines/Optimus_Pipeline/Library-metrics",title:"Optimus Library-level metrics",description:"The following table describes the library level metrics of the produced by the Optimus workflow. These are calcuated using custom python scripts available in the warp-tools repository. The Optimus workflow aligns files in shards to parallelize computationally intensive steps. This results in multiple matrix market files and shard-level library metrics.",source:"@site/docs/Pipelines/Optimus_Pipeline/Library-metrics.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/Library-metrics",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Library-metrics",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/Library-metrics.md",tags:[],version:"current",lastUpdatedBy:"Robert Sidney Cox",lastUpdatedAt:1733411364,formattedLastUpdatedAt:"Dec 5, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Optimus Count Matrix Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Loom_schema"},next:{title:"Consortia Data Processing",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/consortia-processing"}},s={},p=[],d={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"optimus-library-level-metrics"},"Optimus Library-level metrics"),(0,n.yg)("p",null,"The following table describes the library level metrics of the produced by the Optimus workflow. These are calcuated using custom python scripts available in the warp-tools repository. The Optimus workflow aligns files in shards to parallelize computationally intensive steps. This results in multiple matrix market files and shard-level library metrics. "),(0,n.yg)("p",null,"To produce the library-level metrics here, the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/star-merge-npz/scripts/combined_mtx.py"},"combined_mtx.py script")," combines all the shard-level matrix market files into one raw mtx file. Then, STARsolo is run to filter this matrix to only those barcodes that meet STARsolo's criteria of cells (using the Emptydrops_CR parameter). This matrix is then used as input during h5ad generation, and metrics are calculated from the final h5ad using the custom ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop/tools/scripts"},"add_library_tso_doublets.py")," script."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"nhash_id"),(0,n.yg)("td",{parentName:"tr",align:null},"The first line of of the metrics CSV echos the NHash ID if specified in the workflow run")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"number_of_reads"),(0,n.yg)("td",{parentName:"tr",align:null},"Total number of reads.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"sequencing_saturation"),(0,n.yg)("td",{parentName:"tr",align:null},"Proportion of unique molecular identifiers (UMIs) observed relative to the total number of possible UMIs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fraction_of_unique_reads_mapped_to_genome"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of unique reads that map to the genome.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fraction_of_unique_and_multiple_reads_mapped_to_genome"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of both unique and multiple reads that map to the genome.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fraction_of_reads_with_Q30_bases_in_rna"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of reads with base quality score \u2265 Q30 in RNA sequences.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fraction_of_reads_with_Q30_bases_in_cb_and_umi"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of reads with base quality score \u2265 Q30 in cell barcode (CB) and unique molecular identifier (UMI).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fraction_of_reads_with_valid_barcodes"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of reads with valid cell barcodes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"reads_mapped_antisense_to_gene"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of reads mapped antisense to gene regions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"reads_mapped_confidently_exonic"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to exonic regions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"reads_mapped_confidently_to_genome"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to the genome.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"reads_mapped_confidently_to_intronic_regions"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to intronic regions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"reads_mapped_confidently_to_transcriptome"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to the transcriptome.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"estimated_cells"),(0,n.yg)("td",{parentName:"tr",align:null},"Estimated number of cells from STARsolo using the Emptydops_CR parameter.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"umis_in_cells"),(0,n.yg)("td",{parentName:"tr",align:null},"Total number of unique molecular identifiers (UMIs) in cells.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"mean_umi_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Average number of UMIs per cell.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"median_umi_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Median number of UMIs per cell.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"unique_reads_in_cells_mapped_to_gene"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of unique reads in cells mapped to genes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fraction_of_unique_reads_in_cells"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of unique reads in cells.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"mean_reads_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Average number of reads per cell.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"median_reads_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Median number of reads per cell.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"mean_gene_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Average number of genes per cell.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"median_gene_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Median number of genes per cell.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"total_genes_unique_detected"),(0,n.yg)("td",{parentName:"tr",align:null},"Total number of unique genes detected.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"percent_target"),(0,n.yg)("td",{parentName:"tr",align:null},"Percentage of target cells. Calculated as: estimated_number_of_cells / barcoded_cell_sample_number_of_expected_cells")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"percent_intronic_reads"),(0,n.yg)("td",{parentName:"tr",align:null},"Percentage of intronic reads. Calculated as: reads_mapped_confidently_to_intronic_regions / number_of_reads")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"percent_doublets"),(0,n.yg)("td",{parentName:"tr",align:null},"Percentage of cells flagged as doublets based on doublet scores calculated from a modified ",(0,n.yg)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6853612/"},"DoubletFinder")," algorithm.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"keeper_mean_reads_per_cell"),(0,n.yg)("td",{parentName:"tr",align:null},"Mean reads per cell for cells with >1500 genes or nuclei with >1000 genes, and doublet_score < 0.3.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"keeper_median_genes"),(0,n.yg)("td",{parentName:"tr",align:null},"Median genes per cell for cells with >1500 genes or nuclei with >1000 genes, and doublet_score < 0.3>.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"keeper_cells"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of cells with >1500 genes or nuclei with >1000 genes, and doublet score < 0.3.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"percent_keeper"),(0,n.yg)("td",{parentName:"tr",align:null},"Percentage of keeper cells. Calculated as: keeper_cells / estimated_cells")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"percent_usable"),(0,n.yg)("td",{parentName:"tr",align:null},"Percentage of usable cells. Calculated as: keeper_cells / expected_cells")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"frac_tso"),(0,n.yg)("td",{parentName:"tr",align:null},"Fraction of reads containing TSO sequence. Calculated as the number of reads that have 20 bp or more of TSO Sequence clipped from 5' end/ total number of reads.")))))}g.isMDXComponent=!0}}]);