document.addEventListener("DOMContentLoaded", function () {
    // about button1 the token swap from
    let swapfromnumber = document.querySelector(".swapfrom-number");
    let result = document.querySelector(".result")

    let swapfromli = document.querySelectorAll(".swap-from-ul li");
    let swapfrombtn = document.getElementById("dropdownMenuButton1");
    swapfromli.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let imgsrc = this.querySelector("img").src;
            let txt = this.textContent;
            swapfrombtn.innerHTML = `<img src="${imgsrc}"> ${txt}`;
        });
    }
    );
    let searchWapper1 = document.getElementById("searchWrapper1");
    searchinput1 = document.querySelector(".search-bar-1");

    // seach bar cover dropdown menu
    document.querySelector(".dropdown1").addEventListener("show.bs.dropdown", function () {
        swapfrombtn.classList.add("d-none");
        swapfromnumber.classList.add("d-none");
        searchWapper1.classList.remove("d-none");
        searchinput1.focus();
    });
    document.querySelector(".dropdown1").addEventListener("hide.bs.dropdown", function () {
        swapfrombtn.classList.remove("d-none");
        swapfromnumber.classList.remove("d-none");
        searchWapper1.classList.add("d-none");
        searchinput1.value = "";
        swapfromli.forEach(item => item.classList.remove("d-none"));
    });
    searchinput1.addEventListener("input", function (e) {
        let searchval = e.target.value.trim().toUpperCase();
        swapfromli.forEach(item => {
            let txt = item.textContent.trim().toUpperCase();
            if (txt.includes(searchval)) {
                item.classList.remove("d-none");
            }
            else {
                item.classList.add("d-none");
            }
        });

    });

    // about button3 the token swap to

    let swaptoli = document.querySelectorAll(".swap-to-ul li");
    // all elements 
    let swaptobtn = document.getElementById("dropdownMenuButton3");
    // button element
    // when we click the li element , change the button content
    swaptoli.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let imgsrc = this.querySelector("img").src;
            let txt = this.textContent;
            swaptobtn.innerHTML = `<img src="${imgsrc}"> ${txt}`;
        });
    });
    // container of search bar
    let searchwapper3 = document.getElementById("searchWrapper3");
    // search bar input
    searchinput = document.querySelector(".search-bar-3");

    // seach bar cover dropdown menu
    document.querySelector(".dropdown3").addEventListener("show.bs.dropdown", function () {
        swaptobtn.classList.add("d-none");
        searchwapper3.classList.remove("d-none");
        searchinput.focus();
    });
    document.querySelector(".dropdown3").addEventListener("hide.bs.dropdown", function () {
        swaptobtn.classList.remove("d-none");
        searchwapper3.classList.add("d-none");
        searchinput.value = "";
        swaptoli.forEach(item => item.classList.remove("d-none"));
    });
    searchinput.addEventListener("input", function (e) {
        let searchval = e.target.value.trim().toUpperCase();
        swaptoli.forEach(item => {
            let txt = item.textContent.trim().toUpperCase();
            if (txt.includes(searchval)) {
                item.classList.remove("d-none");
            } else {
                item.classList.add("d-none");
            }
        });

    });
    // swap token
    let swaptoken = document.querySelector(".swap-button")
    swaptoken.addEventListener("click", function () {
        let imgsrc1 = swapfrombtn.querySelector("img").src;
        let txt1 = swapfrombtn.textContent;
        let imgsrc2 = swaptobtn.querySelector("img").src
        let txt2 = swaptobtn.textContent;
        swaptobtn.innerHTML = `<img src="${imgsrc1}"> ${txt1}`;
        swapfrombtn.innerHTML = `<img src="${imgsrc2}"> ${txt2}`;
    })
    // inputnumber 
    document.querySelector(".swapfrom-number").addEventListener("input", function (e) {
        if (!/\d/.test(e.key)) {
            this.value = this.value.replace(/\D/g, ""); // 阻止非数字键输入
        }
        // swap number
        // swap into USD


        const rates = {
            ETH: 4393.24,
            BONK: 0,
            CRO: 0.27,
            ENA: 0.68,
            USDE: 1.00,
            USDT: 1.00,
            UNI: 9.59,
            SHIB: 0.00,
            POL: 0.29,
            WBTC: 111276.00
        };

        function updateResult() {
            const coin = swapfrombtn.textContent.trim().toUpperCase();
            const rate = rates[coin];
            const value = Number(swapfromnumber.value.trim());

            if (!isNaN(value) && rate !== undefined) {
                result.textContent = `≈$${(value * rate).toFixed(2)}`;
            } else {
                result.textContent = "未知币种";
            }
        }

        swapfromnumber.addEventListener("input", updateResult);

        // 监听按钮文本变化
        const observer = new MutationObserver(updateResult);
        observer.observe(swapfrombtn, {
            childList: true,
            characterData: true,
            subtree: true
        });

        updateResult();




        // get quotes
        let buttongetquotes = document.querySelector(".button-getquotes")
        swapfromnumber.addEventListener("input", function () {
            const hasValidValue = this.value.trim() !== '' && Number(this.value) !== 0;

            // 根据判断结果修改按钮状态
            if (hasValidValue) {
                buttongetquotes.disabled = false; // 启用按钮（可点击）
                buttongetquotes.style.backgroundColor = '#2196F3'; // 显眼颜色（示例：蓝色）
                buttongetquotes.style.color = 'white'; // 文字变白，增强对比
            } else {
                buttongetquotes.disabled = true; // 禁用按钮（不可点击）
                buttongetquotes.style.backgroundColor = '#cccccc'; // 灰色（禁用状态）
                buttongetquotes.style.color = '#666666'; // 文字变灰
            }
        })
    });
});