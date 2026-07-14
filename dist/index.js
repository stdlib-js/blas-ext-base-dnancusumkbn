"use strict";var b=function(a,n){return function(){try{return n||a((n={exports:{}}).exports,n),n.exports}catch(t){throw (n=0, t)}};};var k=b(function(J,j){
var l=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist');function y(a,n,t,v,f,u,q,w){var s,i,r,e,m,c,o;if(a<=0)return u;if(s=f,i=w,r=n,r===0)for(o=0;o<a;o++){if(e=t[s],l(e)){u[i]=r,s+=v,i+=q;continue}if(e!==0)break;r+=e,u[i]=r,s+=v,i+=q}else o=0;for(c=0;o<a;o++){if(e=t[s],l(e)){u[i]=r+c,s+=v,i+=q;continue}m=r+e,x(r)>=x(e)?c+=r-m+e:c+=e-m+r,r=m,u[i]=r+c,s+=v,i+=q}return u}j.exports=y
});var _=b(function(K,R){
var d=require('@stdlib/strided-base-stride2offset/dist'),z=k();function A(a,n,t,v,f,u){return z(a,n,t,v,d(a,v),f,u,d(a,u)),f}R.exports=A
});var g=b(function(L,O){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=k();B(E,"ndarray",C);O.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=g(),p,h=F(D(__dirname,"./native.js"));G(h)?p=H:p=h;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
