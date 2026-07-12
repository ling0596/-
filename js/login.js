document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = inputs[0].value.trim();
    const pwd = inputs[1].value.trim();

    const regUsername = localStorage.getItem('username');
    const regPassword = localStorage.getItem('password');

    if (!username) {
      alert('请输入用户名！');
      return;
    }
    if (!pwd) {
      alert('请输入密码！');
      return;
    }

    if (username === regUsername && pwd === regPassword) {
      alert('登录成功！进入院校专区');
      location.href = 'college_list.html';
    } else {
      alert('用户名或密码不正确，无法进入！');
    }
  });
});