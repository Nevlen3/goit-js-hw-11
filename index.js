import{a as f,S as p,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="50910167-da0c49dcf69b8279e7055dacc",y="https://pixabay.com/api/";async function h(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:s})).data}const u=document.querySelector(".gallery");let c=null;function g(o){const s=o.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <span>Likes: ${t.likes}</span>
          <span>Views: ${t.views}</span>
          <span>Comments: ${t.comments}</span>
          <span>Downloads: ${t.downloads}</span>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new p(".gallery a")}function L(){u.innerHTML=""}function w(){document.querySelector(".loader").classList.remove("is-hidden")}function v(){document.querySelector(".loader").classList.add("is-hidden")}const l=document.querySelector(".form"),b=new URLSearchParams(window.location.search),d=b.get("search-text");d&&(l.elements["search-text"].value=d,l.dispatchEvent(new Event("submit")));l.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){i.warning({message:"Будь ласка, введіть слово для пошуку!",position:"topRight"});return}L(),w();try{const a=(await h(s)).hits;a.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(a)}catch{i.error({message:"Сталася помилка. Спробуйте ще раз.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
