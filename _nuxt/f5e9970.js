(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10],{316:function(t,e,r){t.exports=r.p+"img/mobile-project-1.0aa0cb7.jpg"},317:function(t,e,r){t.exports=r.p+"img/web-project-1.dbc2198.jpg"},318:function(t,e,r){t.exports=r.p+"img/ui-project-2.d289191.jpg"},319:function(t,e,r){t.exports=r.p+"img/mobile-project-2.a5aae78.jpg"},327:function(t,e,r){"use strict";r.r(e);r(21),r(19),r(20),r(9),r(25),r(16),r(26);var n=r(116),o=r(6),l=(r(148),r(36));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{relatedProject:{relatedProjectsHeading:"Other Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(316)},{id:2,title:"Web Application",img:r(317)},{id:3,title:"UI Design",img:r(318)},{id:4,title:"Kabul Mobile App UI",img:r(319)}]}}},computed:d(d({},Object(l.b)(["projects"])),{},{randomProjects:function(){for(var t=Object(n.a)(this.projects),e=[];e.length<4&&t.length>0;){var r=Math.floor(Math.random()*t.length);e.push(t.splice(r,1)[0])}return e}})},x=r(13),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    mt-10\n    pt-10\n    sm:pt-14 sm:mt-20\n    border-t-2 border-primary-light\n    dark:border-secondary-dark\n  "},[r("p",{staticClass:"\n      font-general-regular\n      text-primary-dark\n      dark:text-primary-light\n      text-3xl\n      font-bold\n      mb-10\n      sm:mb-14\n      text-left\n    "},[t._v("\n    "+t._s(t.relatedProject.relatedProjectsHeading)+"\n  ")]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-4 gap-10"},t._l(t.randomProjects,(function(t){return r("div",{key:t.id},[r("NuxtLink",{attrs:{to:"/projects/"+t.id}},[r("img",{staticClass:"rounded-xl cursor-pointer",attrs:{src:"/"+t.img,alt:t.title}})])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(55),r(45)),l={scrollToTop:!0,data:function(){return{}},computed:{project:function(){return this.$store.getters.getProjectById(this.$route.params.id)}},methods:{share:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.share){e.next=12;break}return e.prev=1,e.next=4,navigator.share({title:t.project.title,text:"Check this Fico Pangestu's portfolio project",url:window.location});case 4:console.log("Shared successfully"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Error sharing:",e.t0);case 10:e.next=13;break;case 12:console.warn("Web Share API not supported");case 13:case"end":return e.stop()}}),e,null,[[1,7]])})))()}},components:{ProjectRelatedProjects:r(327).default,Share2Icon:o.h,ClockIcon:o.c,TagIcon:o.i}},c=r(13),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto"},[t.project?r("div",[r("div",[r("div",{staticClass:"flex justify-between items-center"},[r("div",[r("p",{staticClass:"\n              font-general-medium\n              text-left text-3xl\n              sm:text-4xl\n              font-bold\n              text-primary-dark\n              dark:text-primary-light\n              mt-14\n              sm:mt-20\n              mb-7\n            "},[t._v("\n            "+t._s(t.project.title)+"\n          ")])]),t._v(" "),r("div",{staticClass:"mt-14 sm:mt-20 mb-7"},[r("button",{staticClass:"\n              px-4\n              py-2.5\n              text-white\n              tracking-wider\n              bg-indigo-500\n              hover:bg-indigo-600\n              focus:ring-1 focus:ring-indigo-900\n              rounded-lg\n              duration-500\n            ",attrs:{type:"button","aria-label":"Share"},on:{click:t.share}},[r("Share2Icon",{staticClass:"w-4 lg:w-5 h-4 lg:h-5"})],1)])]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex items-center mr-10"},[r("ClockIcon",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light"}),t._v(" "),r("span",{staticClass:"\n              font-general-medium\n              ml-2\n              leading-none\n              text-primary-dark\n              dark:text-primary-light\n            "},[t._v(t._s(t.project.publishDate))])],1),t._v(" "),r("div",{staticClass:"flex items-center"},[r("TagIcon",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light"}),t._v(" "),r("span",{staticClass:"\n              font-general-medium\n              ml-2\n              leading-none\n              text-primary-dark\n              dark:text-primary-light\n            "},[t._v(t._s(t.project.tag))])],1)])]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},t._l(t.project.projectImages,(function(t){return r("div",{key:t.id,staticClass:"mb-10 sm:mb-0"},[r("enlargeable-image",{attrs:{src:t.img,src_large:t.img}},[r("nuxt-img",{staticClass:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",attrs:{src:"~/"+t.img,loading:"lazy"}})],1)],1)})),0),t._v(" "),r("div",{staticClass:"block sm:flex gap-0 sm:gap-10 mt-14"},[r("div",{staticClass:"w-full sm:w-1/3 text-left"},[r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-secondary-dark\n              dark:text-secondary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.clientTitle)+"\n          ")]),t._v(" "),r("ul",{staticClass:"leading-loose"},t._l(t.project.companyInfos,(function(e){return r("li",{key:e.id,staticClass:"\n                font-general-regular\n                text-ternary-dark\n                dark:text-ternary-light\n              "},[r("span",[t._v(t._s(e.details))])])})),0)]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.objectivesTitle)+"\n          ")]),t._v(" "),r("p",{staticClass:"\n              font-general-regular\n              text-primary-dark\n              dark:text-ternary-light\n            "},[t._v("\n            "+t._s(t.project.objectivesDetails)+"\n          ")])]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.techTitle)+"\n          ")]),t._v(" "),r("p",{staticClass:"\n              font-general-regular\n              text-primary-dark\n              dark:text-ternary-light\n            "},[t._v("\n            "+t._s(t.project.technologies.join(", "))+"\n          ")])]),t._v(" "),r("div",[r("p",{staticClass:"\n              font-general-medium\n              text-2xl text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.linkTitle)+"\n          ")]),t._v(" "),r("div",{staticClass:"flex items-center gap-2"},t._l(t.project.links,(function(link){return r("a",{key:link.id,staticClass:"\n                px-4\n                sm:px-6\n                py-2\n                bg-gray-600\n                text-primary-light\n                hover:bg-ternary-dark\n                dark:bg-gray-200\n                dark:text-secondary-dark\n                dark:hover:bg-primary-light\n                rounded-md\n                focus:ring-1 focus:ring-indigo-900\n                duration-500\n              ",attrs:{href:link.url,target:"__blank","aria-label":"Share Project"}},[t._v(t._s(link.title))])})),0)])]),t._v(" "),r("div",{staticClass:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},[r("p",{staticClass:"\n            font-general-medium\n            text-primary-dark\n            dark:text-primary-light\n            text-2xl\n            font-bold\n            mb-7\n          "},[t._v("\n          "+t._s(t.project.detailsTitle)+"\n        ")]),t._v(" "),t._l(t.project.projectDetails,(function(e){return r("p",{key:e.id,staticClass:"\n            font-general-regular\n            mb-5\n            text-lg text-ternary-dark\n            dark:text-ternary-light\n          "},[t._v("\n          "+t._s(e.details)+"\n        ")])}))],2)]),t._v(" "),r("ProjectRelatedProjects")],1):r("div",{staticClass:"font-general-medium container mx-auto text-center"},[r("h1",[t._v("No projects yet")])])])}),[],!1,null,"7ef25529",null);e.default=component.exports}}]);