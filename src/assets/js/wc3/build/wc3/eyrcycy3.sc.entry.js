/*! Built with http://stenciljs.com */
const{h:t}=window.wc3;class e{getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((e=this.last)?` ${e}`:"");var t,e}render(){return t("p",{class:"wc-three"},"Web component 3. With Stencil 0.15.1. getText() is: ",this.getText())}static get is(){return"wc-three"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}}static get style(){return".wc-three.sc-wc-three{background-color:#8a2be2;color:#fff;display:inline-block;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;max-width:200px;padding:2em}"}}export{e as WcThree};