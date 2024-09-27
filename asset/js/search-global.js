async function fetchSearchData(){try{const e=await fetch("/search-data.json");return await e.json()}catch(e){return console.error("Error loading search data:",e),null}}function searchDataAcrossCategories(e,t,s){const n=[];return s.forEach((s=>{e[s]&&Array.isArray(e[s])&&e[s].forEach((e=>{(e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.category.toLowerCase().includes(t))&&n.push(e)}))})),n}function displaySearchResults(e){const t=document.getElementById("search-results");t.innerHTML="",e.forEach((e=>{const s=document.createElement("div");s.classList.add("the-result"),s.innerHTML=`\n      <p class="text-md sm:text-lg font-bold mb-2 text-primary">\n        <a class="link link-hover" href="${e.url}">${e.title}</a>\n      </p>\n      <p class="text-sm sm:text-md mb-2">${e.description}</p>\n      <p class="text-sm"><span class="badge badge-accent">${e.category}</span> - ${e.date}</p>\n    `,t.appendChild(s)}))}document.getElementById("search-input").addEventListener("input",(async function(){const e=this.value.toLowerCase(),t=document.getElementById("search-results");if(0===e.length)return t.innerHTML='<p class="text-center text-base-conten">Silahkan cari seluruh konten situs saya di sini</p>',void t.classList.remove("hidden");if(e.length>=3){const s=await fetchSearchData();if(s){const n=searchDataAcrossCategories(s,e,["blog","photos","unduhan","personil","visiMisi","profil"]);n.length>0?(displaySearchResults(n),t.classList.remove("hidden")):(t.innerHTML='<p class="text-error text-center">Tidak ditemukan apa-apa</p>',t.classList.remove("hidden"))}else t.innerHTML='<p class="text-red-500 text-center">Error loading search data</p>',t.classList.remove("hidden")}else t.innerHTML='<p class="text-center text-base-content">Silahkan cari seluruh konten situs saya di sini</p>',t.classList.remove("hidden")})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("search-results");e.innerHTML='<p class="text-center text-base-content">Silahkan cari seluruh konten situs saya di sini</p>',e.classList.remove("hidden")})),document.addEventListener("click",(function(e){const t=document.getElementById("search-input"),s=document.getElementById("search-results");t.contains(e.target)||s.contains(e.target)||(t.value="",s.innerHTML='<p class="text-center text-base-content">Silahkan cari seluruh konten situs saya di sini</p>',s.classList.remove("hidden"))}));