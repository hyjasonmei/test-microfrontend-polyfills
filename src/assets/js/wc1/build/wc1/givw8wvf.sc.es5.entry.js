/*! Built with http://stenciljs.com */
wc1.loadBundle("givw8wvf",["exports"],function(e){var t=window.wc1.h,n=function(){function e(){}return e.prototype.getText=function(){return(this.first||"")+((e=this.middle)?" "+e:"")+((t=this.last)?" "+t:"");var e,t},e.prototype.render=function(){return t("p",{class:"wc-one"},"Web component 1. With Stencil 0.15.1. getText() is: ",this.getText())},Object.defineProperty(e,"is",{get:function(){return"wc-one"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".wc-one.sc-wc-one{background-color:coral;color:#fff;display:inline-block;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;max-width:200px;padding:2em}"},enumerable:!0,configurable:!0}),e}();e.WcOne=n,Object.defineProperty(e,"__esModule",{value:!0})});