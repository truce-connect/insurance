 const SideMenu = document.querySelector("aside");
 const menuBtn = document.querySelector("#menu-btn");
 const closeBtn = document.querySelector("#close-btn")
 const themeToggler = document.querySelector(".theme-toggler")
 

 //  sidebar
 menuBtn.addEventListener("click", () => {
     SideMenu.style.display = "block"
 })
 //  closebafr
 closeBtn.addEventListener("click", () => {
     SideMenu.style.display = "none"
 })
 //  thmetogler
 themeToggler.addEventListener("click", () => {
     document.body.classList.toggle("dark-theme-variables")
     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
 })

 orders.forEach(order => {
     const tr = document.createElement('tr');
     const trContent =
         `  <td>${order.productName}</td>
   <td>${ order.productNumber}</td>
   <td>${order.paymentStatus}</td>
   <td class="${order.shipping ==='Declined' ? 
   'danger': order.shipping   === 'pending'?
   'warning':'primary'}">${order.shipping}</td>
   <td class='primary'>details</td>
   `;
     tr.innerhtml = trContent
     document.querySelector('table tbody').appendChild(tr);


 })