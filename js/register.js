document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = inputs[0].value.trim();    
    const pwd = inputs[1].value.trim();         
    const repwd = inputs[2].value.trim();       
    const phone = inputs[3].value.trim();       

    let isValid = true;

    if (username === '') {
      alert('用户名不能为空！');
      inputs[0].focus();
      return;
    }

    if (pwd.length < 6 || pwd.length > 12) {
      alert('密码必须是6-12位！');
      inputs[1].focus();
      return;
    }

    if (pwd !== repwd) {
      alert('两次输入的密码不一致！');
      inputs[2].focus();
      return;
    }

    if (phone !== '' && (phone.length !== 11 || isNaN(phone))) {
      alert('请输入正确的11位手机号码！');
      inputs[3].focus();
      return;
    }
	localStorage.setItem('username', username);
	localStorage.setItem('password', pwd);

    alert('注册成功！即将跳转到登录页面');
    location.href = 'login.html';
  });
});