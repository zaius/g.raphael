Raphael.fn.g.linechart=function(J,I,a,c,s,r,C){function B(y,Y){var x=y.length/Y,V=0,i=x,X=0,W=[];while(V<y.length){i--;if(i<0){X+=y[V]*(1+i);W.push(X/x);X=y[V++]*-i;i+=x}else{X+=y[V++]}}return W}C=C||{};if(!this.raphael.is(s[0],"array")){s=[s]}if(!this.raphael.is(r[0],"array")){r=[r]}var O=Array.prototype.concat.apply([],s),M=Array.prototype.concat.apply([],r),o=this.g.snapEnds(Math.min.apply(Math,O),Math.max.apply(Math,O),s[0].length-1),v=o.from,h=o.to,l=C.gutter||10,P=(a-l*2)/(h-v),G=this.g.snapEnds(Math.min.apply(Math,M),Math.max.apply(Math,M),r[0].length-1),u=G.from,g=G.to*1.01,N=(c-l*2)/(g-u),t=Math.max(s[0].length,r[0].length),n=C.symbol||"",K=C.colors||Raphael.fn.g.colors,H=this,p=null,k=null,T=this.set(),L=[];for(var S=0,E=r.length;S<E;S++){t=Math.max(t,r[S].length)}var U=this.set();for(var S=0,E=r.length;S<E;S++){if(C.shade){U.push(this.path().attr({stroke:"none",fill:K[S],opacity:C.nostroke?1:0.3}))}if(r[S].length>a-2*l){r[S]=B(r[S],a-2*l);t=a-2*l}if(s[S]&&s[S].length>a-2*l){s[S]=B(s[S],a-2*l)}}var w=this.set();if(C.axis){var f=(C.axis+"").split(/[,\s]+/);+f[0]&&w.push(this.g.axis(J+l,I+l,a-2*l,v,h,C.axisxstep||Math.floor((a-2*l)/20),2));+f[1]&&w.push(this.g.axis(J+a-l,I+c-l,c-2*l,u,g,C.axisystep||Math.floor((c-2*l)/20),3));+f[2]&&w.push(this.g.axis(J+l,I+c-l,a-2*l,v,h,C.axisxstep||Math.floor((a-2*l)/20),0));+f[3]&&w.push(this.g.axis(J+l,I+c-l,c-2*l,u,g,C.axisystep||Math.floor((c-2*l)/20),1))}var F=this.set(),Q=this.set(),m;for(var S=0,E=r.length;S<E;S++){if(!C.nostroke){F.push(m=this.path().attr({stroke:K[S],"stroke-width":C.width||2,"stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":C.dash||""}))}var b=this.raphael.is(n,"array")?n[S]:n,z=this.set();L=[];for(var R=0,q=r[S].length;R<q;R++){var e=J+l+((s[S]||s[0])[R]-v)*P;var d=I+c-l-(r[S][R]-u)*N;(Raphael.is(b,"array")?b[R]:b)&&z.push(this.g[Raphael.fn.g.markers[this.raphael.is(b,"array")?b[R]:b]](e,d,(C.width||2)*3).attr({fill:K[S],stroke:"none"}));L=L.concat([R?"L":"M",e,d])}Q.push(z);if(C.shade){U[S].attr({path:L.concat(["L",e,I+c-l,"L",J+l+((s[S]||s[0])[0]-v)*P,I+c-l,"z"]).join(",")})}!C.nostroke&&m.attr({path:L.join(",")})}function D(ae){var ab=[];for(var ac=0,ag=s.length;ac<ag;ac++){ab=ab.concat(s[ac])}ab.sort(function(j,i){return j-i});var ah=[],Y=[];for(var ac=0,ag=ab.length;ac<ag;ac++){ab[ac]!=ab[ac-1]&&ah.push(ab[ac])&&Y.push(J+l+(ab[ac]-v)*P)}ab=ah;ag=ab.length;var W=ae||H.set();for(var ac=0;ac<ag;ac++){var V=Y[ac]-(Y[ac]-(Y[ac-1]||J))/2,af=((Y[ac+1]||J+a)-Y[ac])/2+(Y[ac]-(Y[ac-1]||J))/2,x;ae?(x={}):W.push(x=H.rect(V-1,I,Math.max(af+1,1),c).attr({stroke:"none",fill:"#000",opacity:0}));x.values=[];x.symbols=H.set();x.y=[];x.x=Y[ac];x.axis=ab[ac];for(var aa=0,ad=r.length;aa<ad;aa++){ah=s[aa]||s[0];for(var Z=0,y=ah.length;Z<y;Z++){if(ah[Z]==ab[ac]){x.values.push(r[aa][Z]);x.y.push(I+c-l-(r[aa][Z]-u)*N);x.symbols.push(T.symbols[aa][Z])}}}ae&&ae.call(x)}!ae&&(p=W)}function A(ac){var W=ac||H.set(),x;for(var aa=0,ae=r.length;aa<ae;aa++){for(var Z=0,ab=r[aa].length;Z<ab;Z++){var V=J+l+((s[aa]||s[0])[Z]-v)*P,ad=J+l+((s[aa]||s[0])[Z?Z-1:1]-v)*P,y=I+c-l-(r[aa][Z]-u)*N;ac?(x={}):W.push(x=H.circle(V,y,Math.abs(ad-V)/2).attr({stroke:"none",fill:"#000",opacity:0}));x.x=V;x.y=y;x.value=r[aa][Z];x.line=T.lines[aa];x.shade=T.shades[aa];x.symbol=T.symbols[aa][Z];x.symbols=T.symbols[aa];x.axis=(s[aa]||s[0])[Z];ac&&ac.call(x)}}!ac&&(k=W)}T.push(F,U,Q,w,p,k);T.lines=F;T.shades=U;T.symbols=Q;T.axis=w;T.hoverColumn=function(j,i){!p&&D();p.mouseover(j).mouseout(i);return this};T.clickColumn=function(i){!p&&D();p.click(i);return this};T.hrefColumn=function(W){var X=H.raphael.is(arguments[0],"array")?arguments[0]:arguments;if(!(arguments.length-1)&&typeof W=="object"){for(var j in W){for(var y=0,V=p.length;y<V;y++){if(p[y].axis==j){p[y].attr("href",W[j])}}}}!p&&D();for(var y=0,V=X.length;y<V;y++){p[y]&&p[y].attr("href",X[y])}return this};T.hover=function(j,i){!k&&A();k.mouseover(j).mouseout(i);return this};T.click=function(i){!k&&A();k.click(i);return this};T.each=function(i){A(i);return this};T.eachColumn=function(i){D(i);return this};return T};