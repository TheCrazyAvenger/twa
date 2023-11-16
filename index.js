const groupNameText = document.getElementById('group_name');
const groupIdText = document.getElementById('group_id');
const groupUsernameText = document.getElementById('group_username');

const tg = window.Telegram.WebApp;
console.log(window.Telegram.WebApp);
tg.expand();

// groupNameText.textContent = `${tg.initDataUnsafe.chat.title}`;

groupIdText.innerHTML = JSON.stringify(window.Telegram.WebApp);
groupUsernameText.innerText = `${tg.initDataUnsafe.user.last_name}`;
