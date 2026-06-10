function jump(element){

    if(element.classList.contains("jumping")) return;

    element.classList.add("jumping");

    setTimeout(()=>{
        element.classList.remove("jumping");
    },600);

}

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const loginModal = document.getElementById("loginModal");
const sidebarContent = document.getElementById("sidebar-content");

function closeEverything(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    loginModal.classList.remove("active");

}

function openSearch(){

    sidebarContent.innerHTML = `
        <h2>Search</h2>

        <input class="search-box"
        placeholder="Search figures...">

        <div class="order-card">
            Popular Search
        </div>

        <div class="order-card">
            Anime Figure
        </div>

        <div class="order-card">
            Chibi Figure
        </div>
    `;

    overlay.classList.add("active");
    sidebar.classList.add("active");
    loginModal.classList.remove("active");
}

function openOrders(){

    sidebarContent.innerHTML = `
        <h2>Your Orders</h2>

        <div class="order-card">
            Order #1024<br>
            Processing
        </div>

        <div class="order-card">
            Order #1025<br>
            Shipped
        </div>

        <div class="order-card">
            Order #1026<br>
            Delivered
        </div>
    `;

    overlay.classList.add("active");
    sidebar.classList.add("active");
    loginModal.classList.remove("active");
}

function openLogin(){

    overlay.classList.add("active");

    sidebar.classList.remove("active");

    loginModal.classList.add("active");
}