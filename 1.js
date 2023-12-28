document.getElementById('check').onclick = function(){

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if(login == 'Saluki' && password == '12345678')
        window.location.href = 'Kabinet.html';
    else if (login == 'admin' && password == '12345678z')
        alert('Welcome');
    else alert('Неверный логин или пароль');
}
