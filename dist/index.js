"use strict";var b=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var k=b(function(J,j){
var l=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist');function y(a,i,c,v,f,n,q,w){var s,u,r,e,m,o,t;if(a<=0)return n;if(s=f,u=w,r=i,r===0)for(t=0;t<a;t++){if(e=c[s],l(e)){n[u]=r,s+=v,u+=q;continue}if(e!==0)break;r+=e,n[u]=r,s+=v,u+=q}else t=0;for(o=0;t<a;t++){if(e=c[s],l(e)){n[u]=r+o,s+=v,u+=q;continue}m=r+e,x(r)>=x(e)?o+=r-m+e:o+=e-m+r,r=m,n[u]=r+o,s+=v,u+=q}return n}j.exports=y
});var _=b(function(K,R){
var d=require('@stdlib/strided-base-stride2offset/dist'),z=k();function A(a,i,c,v,f,n){return z(a,i,c,v,d(a,v),f,n,d(a,n)),f}R.exports=A
});var g=b(function(L,O){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=k();B(E,"ndarray",C);O.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=g(),p,h=F(D(__dirname,"./native.js"));G(h)?p=H:p=h;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
