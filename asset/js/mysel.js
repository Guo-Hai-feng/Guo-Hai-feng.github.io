document.addEventListener('DOMContentLoaded', function () {
    // 加载动画
    window.addEventListener('load', function () {
      document.body.classList.add('loaded');
    });
  
    // 滚动到页面时触发的效果
    const sections = document.querySelectorAll('.post-content h1, .post-content p, .card');
    let isScrolling = false;
    window.addEventListener('scroll', function () {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(function () {
          sections.forEach(function (section) {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
              if (!section.classList.contains('visible')) {
                section.classList.add('visible');
              }
            }
          });
  
          // 返回顶部按钮的显示与隐藏
          if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
          } else {
            backToTopButton.classList.remove('show');
          }
  
          isScrolling = false;
        });
      }
    });
  
    // 返回顶部按钮
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
