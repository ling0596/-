document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  const backTop = document.createElement('div');
  backTop.innerText = '↑';
  backTop.style.cssText = "position:fixed;bottom:30px;right:20px;width:40px;height:40px;background:#3498db;color:white;border-radius:50%;text-align:center;line-height:40px;cursor:pointer;display:none;z-index:99;";
  document.body.appendChild(backTop);

  window.addEventListener('scroll', function () {
    backTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
