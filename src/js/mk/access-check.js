const accessButton = document.getElementById('mk-button');

accessButton.addEventListener('click', accessCheck);

function accessCheck(event) {
  event.preventDefault();
  const LOGIN = 'mk';
  const PASWORD = '1';
  const inputLogin = prompt('login');
  const inputPassword = prompt('password');
  if (inputLogin === LOGIN && inputPassword === PASWORD) {
    // window.location.replace;
    document.location.assign('./partials/mk/mk.html');
    console.log('access allowed');
  } else {
    alert('access denied');
  }
}
