

function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-white">
    <img src="images/2023-09-03 15_28_26_9846.webp" width="80"" alt="" />
    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-white hover-links">
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="index.html">Home</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="login.html">Login</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="categories.html">Categories</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="offers.html">Offers</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="my-cart.html">Cart</a>
      </li>
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}



function BtnBackToTop() {
  document.write(`
  <button
        type="button" title="Back to top"
        class="back-to-top btn btn- text-white rounded-circle py-2 px-2">
  <img src="images/arrow-up.svg" class="mb-3" width="18" />
  </button>  
  `);
}
function WhatsApp() {
  document.write(`
  <a href="https://wa.me/+97334479384" class="whats-app btn btn-info py-2 px-2 rounded-circle" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Whatsapp">
  <i class="bi bi-whatsapp my-float"></i>
  </a>  
  `);
}




