const groupNameText = document.getElementById('group_name');
const groupIdText = document.getElementById('group_id');
const groupUsernameText = document.getElementById('group_username');

const tg = window.Telegram.WebApp;
tg.expand();

// groupNameText.textContent = `${tg.initDataUnsafe.chat.title}`;

groupNameText.innerText = `${tg.initDataUnsafe.user.first_name}`;
groupUsernameText.innerText = `${tg.initDataUnsafe.user.last_name}`;
