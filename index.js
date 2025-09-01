document.addEventListener("DOMContentLoaded", function () {

    
    let swaptoli = document.querySelectorAll(".swap-to-ul li");
    let swaptobtn = document.getElementById("dropdownMenuButton3");
    swaptoli.forEach(item => {
        item.addEventListener("click", function (e) {
                 e.preventDefault();
        let imgsrc = this.querySelector("img").src;
        let txt = this.textContent;
        swaptobtn.innerHTML = `<img src="${imgsrc}"> ${txt}`;
        });
    });
    let searchwapper3= document.getElementById("searchWrapper3");
    searchinput=document.querySelector(".search-bar-3");
    let swaptoul=document.querySelector(".swap-to-ul");

    // seach bar cover dropdown menu
    document.querySelector(".dropdown3").addEventListener("show.bs.dropdown",function(){
        swaptobtn.classList.add("d-none");
        searchwapper3.classList.remove("d-none");
        searchinput.focus();
    } );
    document.querySelector(".dropdown3").addEventListener("hide.bs.dropdown",function(){
        swaptobtn.classList.remove("d-none");
        searchwapper3.classList.add("d-none");
        searchinput.value="";
        swaptpli.forEach(item=>item.classList.remove("d-none"));
    } );
    searchinput.addEventListener("input",function(e){ let searchval=e.target.value.trim().toUpperCase();
        swaptoli.forEach(item=>{
            let txt=item.textContent.trim().toUpperCase();
            if(txt.includes(searchval)){
                item.classList.remove("d-none");
            }else{
                item.classList.add("d-none");
            }});
        
    });
});