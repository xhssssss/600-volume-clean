'use strict';
async function g(e){try{if(typeof chrome<"u"&&chrome.runtime&&chrome.runtime.id){const t=await chrome.storage.local.get(e);return t&&t[e]!==void 0?t[e]:null}return localStorage.getItem(e)}catch(t){return null}}
function s(e,t){try{if(typeof chrome<"u"&&chrome.runtime&&chrome.runtime.id)chrome.storage.local.set({[e]:t});else localStorage.setItem(e,String(t))}catch(n){}}
export{g,s};
