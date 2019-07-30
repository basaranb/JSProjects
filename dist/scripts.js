"use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}function _arrayWithHoles(t){if(Array.isArray(t))return t}function asyncGeneratorStep(t,e,n,r,o,a,s){try{var i=t[a](s),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(i){return function(){var t=this,s=arguments;return new Promise(function(e,n){var r=i.apply(t,s);function o(t){asyncGeneratorStep(r,e,n,o,a,"next",t)}function a(t){asyncGeneratorStep(r,e,n,o,a,"throw",t)}o(void 0)})}}var generateButton=document.getElementById("generate-button"),postTitle=document.getElementById("post-title"),postId=document.getElementById("post-id"),postContent=document.getElementById("post-content"),api="https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets";function makeRequest(r,o,a){return new Promise(function(t,e){var n=new XMLHttpRequest;n.open(r,o),n.onreadystatechange=function(){4===n.readyState&&(200===n.status||201===n.status?t(JSON.parse(n.response)):e(JSON.parse(n.response)))},"POST"===r?(n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(a))):n.send()})}function createPost(){return _createPost.apply(this,arguments)}function _createPost(){return(_createPost=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,n,r,o,a,s,i,u,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=makeRequest("GET",api+"/generate-uid"),n=makeRequest("GET",api+"/generate-title"),r=makeRequest("GET",api+"/generate-lorem"),t.next=5,Promise.all([e,n,r]);case 5:return o=t.sent,a=_slicedToArray(o,3),s=a[0],i=a[1],u=a[2],c=makeRequest("POST",api+"/create-post-with-uid",{uid:s.uid,title:i.title,content:u.lorem}),t.next=13,c;case 13:l=t.sent,postTitle.textContent=l.post.title,postId.textContent=l.post.id,postContent.textContent=l.post.content;case 17:case"end":return t.stop()}},t)}))).apply(this,arguments)}generateButton.addEventListener("click",function(){createPost()});