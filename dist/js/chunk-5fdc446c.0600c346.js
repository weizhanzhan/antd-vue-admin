(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fdc446c","chunk-3e2d8b8f"],{"0062":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"chart",staticStyle:{height:"500px",width:"100%"}})])},r=[],i=a("4324"),o=a("1b6a"),s=a("7ae9"),c=a("a549"),l=a("0a8e"),u=a("f366"),d=a("e1b3"),h=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"mounted",value:function(){this.complier({data:{bindDom:this.$refs.chart,maxs:[100,300,500,200,500,200],mins:[10,32,21,42,33,22],stocks:[90,222,600,1e3,300,180]},option:{xAxis:{name:"X坐标轴",data:["A","B","C","D","E","F"]}}})}}]),a}(d["default"]);h=Object(l["a"])([u["a"]],h);var p=h,f=p,y=a("e90a"),v=Object(y["a"])(f,n,r,!1,null,"896cb5b2",null);e["default"]=v.exports},"1a8c":function(t,e,a){"use strict";var n=a("91fe"),r=a("407d").map,i=a("b1a1"),o=a("6885"),s=i("map"),c=o("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},2410:function(t,e,a){var n=a("91fe"),r=a("547a"),i=a("5751");n({target:"Array",proto:!0},{fill:r}),i("fill")},"547a":function(t,e,a){"use strict";var n=a("ee6f"),r=a("0192"),i=a("684e");t.exports=function(t){var e=n(this),a=i(e.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,a),c=o>2?arguments[2]:void 0,l=void 0===c?a:r(c,a);while(l>s)e[s++]=t;return e}},e1b3:function(t,e,a){"use strict";a.r(e);a("2410"),a("1a8c");var n,r=a("2ef9"),i=a("4324"),o=a("1b6a"),s=a("7ae9"),c=a("a549"),l=a("0a8e"),u=a("f366"),d=a("2389"),h=a.n(d);(function(t){t["MoreThanMax"]="#f7c53e",t["BetweenMaxAndMin"]="#3F60EE",t["LessThanMin"]="#FD687D"})(n||(n={}));var p=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.charts=null,t}return Object(o["a"])(a,[{key:"complier",value:function(t){if(!t.data.bindDom)throw Error("未发现挂在echart的dom对象");this.charts=h.a.init(t.data.bindDom),this.bindOption(t)}},{key:"bindOption",value:function(t){var e=t.data,a=t.option,n=this.getOption(e);a&&Object.assign(n,a),console.log(n,this.charts),this.charts&&this.charts.setOption(n)}},{key:"getOption",value:function(t){var e=t.maxs,a=t.mins,i=t.stocks;return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e="";try{e+=(t[0].axisValue||"")+"</br>",e+=(t[0].marker||"")+"Max："+(t[1].value[1]||0)+"</br>",e+=(t[1].marker||"")+"Min："+(t[1].value[2]||0)+"</br>",e+=(t[1].marker||"")+"库存："+(i[t[0].dataIndex]||0)+"</br>"}catch(a){}return e}},yAxis:{type:"value",name:"库存",max:125*Math.max.apply(Math,Object(r["a"])(e))/100||null},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:1,end:35}],grid:{top:"15%",right:"15%"},series:[{data:i,type:"bar",name:"Daily Stock(Pcs)",lineStyle:{width:2,type:"solid"},symbol:"diamond",symbolSize:20,itemStyle:{color:function(t){var r=e[t.dataIndex],i=a[t.dataIndex];return t.value>r?n.MoreThanMax:t.value<i?n.LessThanMin:n.BetweenMaxAndMin}}},{name:"Stock Max/ Min",type:"custom",itemStyle:{normal:{borderWidth:2}},renderItem:function(t,e){var a=new Array(i.length).fill("#FD687D"),n=e.value(0),r=e.coord([n,e.value(1)]),o=e.coord([n,e.value(2)]),s=.3*e.size([1,0])[0],c=e.style({stroke:a[t.dataIndex],fill:null});return{type:"group",children:[{type:"line",shape:{x1:r[0]-s,y1:r[1],x2:r[0]+s,y2:r[1]},style:c},{type:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:c},{type:"line",shape:{x1:o[0]-s,y1:o[1],x2:o[0]+s,y2:o[1]},style:c}]}},encode:{x:0,y:[1,2]},data:this.handleMaxMin(e,a),zlevel:2,z:2}]}}},{key:"handleMaxMin",value:function(t,e){return e.map((function(e,a){return[a,e,t[a]]}))}},{key:"beforeDestroy",value:function(){this.charts&&this.charts.dispose()}}]),a}(u["d"]);p=Object(l["a"])([u["a"]],p),e["default"]=p}}]);