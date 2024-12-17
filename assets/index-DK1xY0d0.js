(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const l=document.querySelector(".hamburger"),u=document.querySelector(".mobile-menu"),a=document.querySelector("body");function h(){l.classList.toggle("active"),u.classList.toggle("active"),a.classList.toggle("disable-scroll")}function f(){l.classList.remove("active"),u.classList.remove("active"),a.classList.remove("disable-scroll"),document.getElementById("navMobile").style.display="none"}l.addEventListener("click",h);document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",f)});const m=document.getElementById("full-name"),g=document.getElementById("email"),v=document.getElementById("message"),S=document.getElementById("form"),p=localStorage.getItem("formData");if(p){const{fullName:e,email:t,message:s}=JSON.parse(p);m.value=e,g.value=t,v.value=s}function b(){const e={fullName:m.value,email:g.value,message:v.value};localStorage.setItem("formData",JSON.stringify(e))}S.addEventListener("input",b);const o=[{name:"To Do List",description:"A simple and intuitive to-do list application to help users manage their daily tasks. Users can add, delete, and mark tasks as complete. It is built using JavaScript and styled with CSS to ensure responsiveness across devices.",img:"project-img/toDoList.png",firstlineTitle:"To Do List",secondlineTitle:"Task Management",languages:["JavaScript","HTML","CSS"],technologies:["JavaScript","HTML","CSS","GitHub","Bootstrap"],linkLiveVersion:"https://pi1998.github.io/to-do-list/dist/",linkSource:"https://github.com/Pi1998/to-do-list"},{name:"AwesomeBooks",description:"AwesomeBooks is an app that allows users to add, remove, and store books in their personal collection. Built using ES6 JavaScript, the app provides a simple and elegant way to manage reading lists, store book details, and supports local storage for persistent data.",img:"project-img/awesomeBook.png",firstlineTitle:"AwesomeBooks",secondlineTitle:"Manage Book Collection",languages:["JavaScript","HTML","CSS"],technologies:["JavaScript","HTML","CSS","GitHub","ES6","LocalStorage"],linkLiveVersion:"https://pi1998.github.io/AwesomeBooks-ES6/#books-container",linkSource:"https://github.com/Pi1998/AwesomeBooks-ES6"},{name:"MarvelFolio",description:"MarvelFolio is an app that allows you to find comic books based on a Marvel character's name. Using an API, the app fetches information on the character and displays the list of related comic books.",img:"project-img/marvelFolio.png",firstlineTitle:"MarvelFolio",secondlineTitle:"Marvel Comic Finder",languages:["React","Redux","HTML","CSS"],technologies:["Marvel API","React","Redux","Jest","CSS","HTML","API Integration"],linkLiveVersion:"https://bejewelled-kringle-516d5f.netlify.app/",linkSource:"https://github.com/Pi1998/marvelFolio"},{name:"StreamHub",description:"StreamHub is a web app designed for users to search and interact with movies and TV shows. It integrates APIs for fetching movie data and user interactions like likes, comments, and reservations. The app offers a user-friendly interface with optimized performance, interactive popups, counter functionality, and Jest unit testing to ensure reliability.",img:"project-img/streamHub.png",firstlineTitle:"StreamHub",secondlineTitle:"Find Movies Easily",languages:["JavaScript","HTML","CSS"],technologies:["OMDb API","JavaScript","CSS","HTML","API Integration"],linkLiveVersion:"https://goldinium.me/StreamHub/dist/index.html",linkSource:"https://github.com/Goldinium/StreamHub"},{name:"InterArtction",description:"The Interdisciplinary Exhibition, titled InterArtction, is an innovative and transformative event that brings together professionals, experts, and enthusiasts from various fields to explore the intersection of art and technology. This event will be held in different cities every two years, inviting organizations and individuals who are engaged in the world of open content, free software, open knowledge, and other related areas. We hope to foster collaboration on shared projects that advance the cause of the Commons, free culture, and open knowledge.",img:"project-img/interArtction.png",firstlineTitle:"InterArtction",secondlineTitle:"Exploring Art & Technology",languages:["HTML","CSS","JavaScript"],technologies:["Responsive Web Design","JavaScript","CSS","HTML"],linkLiveVersion:"https://pi1998.github.io/first-capstone/index.html",linkSource:"https://github.com/Pi1998/first-capstone"},{name:"Project-6",description:"Coming Soon.....",img:"popup-img/Snapshoot-Portfolio-desktop.png",firstlineTitle:"Coming Soon...",secondlineTitle:"........",languages:["PHP","CSS","JavaScript","HTML"],technologies:["GitHub","JavaScript","Bootstrap","Terminal","Codepen"],linkLiveVersion:"https://pi1998.github.io/Portfolio/",linkSource:"https://github.com/Pi1998/Portfolio"}],y=e=>{const t=document.createElement("div");t.innerHTML=`
  <div class="see-project-container active">
        <div class="close-container">
          <button type="button" class="close-button">&times;</button>
        </div>
        <img src="${o[e].img}" id="project-img">
        <div class="project-title-container">
          <h2>${o[e].name}</h2>
          <div class="see-live-container">
            <a href="${o[e].linkLiveVersion}">See live</a>
            <a href="${o[e].linkLiveVersion}"><img src="popup-img/Icon-Export.png" alt="Image of export icon"></a>
          </div>
          <div class="see-source-container">
            <a href="${o[e].linkSource}">See source</a>
            <a href="${o[e].linkSource}"><img src="popup-img/Icon-GitHub.png" alt="Image of Github icon"></a>
          </div>
        </div>
        <ul class="project-tech">
          <li>${o[e].technologies[0]}</li>
          <li>${o[e].technologies[1]}</li>
          <li>${o[e].technologies[2]}</li>
          <li>${o[e].technologies[3]}</li>
          <li>${o[e].technologies[4]}</li>
          <li>${o[e].technologies[5]}</li>
        </ul>
        <p class="project-desc">${o[e].description}</p>
      </div>
      <div class="overlay active"></div>
  `,a.appendChild(t),document.querySelector(".close-button").addEventListener("click",()=>{a.removeChild(t)})};function L(e,t){t.parentNode.insertBefore(e,t.nextSibling)}const c=document.createElement("div"),k=document.getElementById("portfolio-section");c.className="my-projects";L(c,k.lastElementChild);o.forEach((e,t)=>{c.innerHTML+=`
    <div id="project${t}" class="work-cards animation-left">
      <div class="img-placeholder"></div>
      <div class="work-desc">
        <p>${e.firstlineTitle}<br>${e.secondlineTitle}</p>
        <ul class="languages">
          ${e.languages.map(s=>`<li>${s}</li>`).join("")}
        </ul>
        <div class="button-container">
          <button type="button" class="button seeproject" id="seeproject${t}">See project</button>
        </div>
      </div>
    </div>`});const T=document.querySelectorAll(".seeproject");T.forEach((e,t)=>{e.addEventListener("click",()=>y(t))});
