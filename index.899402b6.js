sessionStorage.setItem("userAccessLevel","guest"),console.log(sessionStorage.getItem("userAccessLevel"));document.getElementById("mk-button").addEventListener("click",(function(e){e.preventDefault();const s=document.querySelector("body");s.innerHTML='<div class="access__backdrop">\n      <div class="access__modal">\n        <h1 class="access__title">Access check</h1>\n        <form action="" class="access__form">\n          <label class="access__form-label">Login<input type="text" name="login" placeholder="try mk"/></label\n          ></label\n          ><label class="access__form-label">Password<input type="text" name="password" placeholder="try 1234"/></label>\n          <button type="submit" class="mk-button access-submit" id="form-submit">\n            submit\n          </button>\n          <button type="button" id="guest-access" class="mk-button">login as guest</button>\n        </form>\n      </div>\n    </div>';const t=document.querySelector(".access__form");let c="",n="";t.addEventListener("change",(()=>{c=t.elements[0].value,n=t.elements[1].value}));document.querySelector(".access-submit").addEventListener("click",(function(e){e.preventDefault(),"mk"===c&&"1234"===n?(sessionStorage.setItem("userAccessLevel","admin"),document.location.assign("./partials/mk/mk.html"),console.log("admin access allowed")):s.innerHTML='<div class="access-denied">\n  <p class="alert">Access denied!</p>\n</div>',setTimeout((()=>location.href=location.href),1500)}));document.querySelector("#guest-access").addEventListener("click",(function(e){sessionStorage.setItem("userAccessLevel","guest"),document.location.assign("./partials/mk/mk.html"),console.log("gueast access allowed")}))}));
//# sourceMappingURL=index.899402b6.js.map
