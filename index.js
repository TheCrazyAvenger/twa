const groupNameText = document.getElementById('group_name');
const groupIdText = document.getElementById('group_id');
const groupUsernameText = document.getElementById('group_username');

const tg = window.Telegram.WebApp;
tg.expand();

groupNameText.textContent = `${tg.initDataUnsafe.chat.title}`;

groupNameText.textContent = `${tg.initDataUnsafe.chat.id}`;
groupUsernameText.textContent = `${tg.initDataUnsafe.chat.username}`;
