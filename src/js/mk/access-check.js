const accessButton = document.getElementById('mk-button');

accessButton.addEventListener('click', accessCheck);

/*
function accessCheck(event) {
  event.preventDefault();
  const LOGIN = 'mk';
  const PASWORD = '1234';
  const inputLogin = prompt('login <try "mk">');
  const inputPassword = prompt('password <try "1234">');
  if (inputLogin === LOGIN && inputPassword === PASWORD) {
    // window.location.replace;
    document.location.assign('./partials/mk/mk.html');
    console.log('access allowed');
  } else {
    alert('access denied');
  }
}
*/
function accessCheck(event) {
  event.preventDefault();
  const LOGIN = 'mk';
  const PASWORD = '1234';

  const body = document.querySelector('body');
  body.innerHTML = `<div class="access__backdrop">
      <div class="access__modal">
        <h1 class="access__title">Access check</h1>
        <form action="" class="access__form">
          <label class="access__form-label">Login<input type="text" name="login" placeholder="try mk"/></label
          ></label
          ><label class="access__form-label">Password<input type="text" name="password" placeholder="try 1234"/></label>
          <button type="submit" class="mk-button access-submit" id="form-submit">
            submit
          </button>
          <button type="button" id="guest-access" class="mk-button">login as guest</button>
        </form>
      </div>
    </div>`;
  const accessForm = document.querySelector('.access__form');
  let inputLogin = '';
  let inputPassword = '';
  accessForm.addEventListener('change', () => {
    inputLogin = accessForm.elements[0].value;
    inputPassword = accessForm.elements[1].value;
    console.log(inputLogin, inputPassword);
  });

  const accessButton = document.querySelector('.access-submit');
  accessButton.addEventListener('click', accessAllowed);
  function accessAllowed(event) {
    event.preventDefault();
    if (inputLogin === LOGIN && inputPassword === PASWORD) {
      document.location.assign('./partials/mk/mk.html');
      console.log('access allowed');
    } else
      body.innerHTML = `<div class="access-denied">
  <p class="alert">Access denied!</p>
</div>`;
  }
}
