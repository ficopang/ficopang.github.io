(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(t,e,r){"use strict";r.r(e);var n={props:{select:{type:String,default:"projects"},selectOptions:{type:Array,default:function(){return["Web Application","Desktop Application","Mobile Application","UI/UX Design"]}}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("select",{staticClass:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",attrs:{name:t.select,id:t.select,"aria-label":"Project Filter"},on:{change:function(e){return t.$emit("change",e.target.value)}}},[e("option",{staticClass:"text-sm sm:text-md",attrs:{value:""}},[t._v("All Projects")]),t._v(" "),t._l(t.selectOptions,(function(option){return e("option",{key:option,staticClass:"sm:text-md",domProps:{value:option}},[t._v("\n    "+t._s(option)+"\n  ")])}))],2)}),[],!1,null,"76f77b12",null);e.default=component.exports}}]);