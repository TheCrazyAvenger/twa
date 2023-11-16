const groupNameText = document.getElementById('group_name');
const groupIdText = document.getElementById('group_id');
const groupUsernameText = document.getElementById('group_username');

const tg = window.Telegram.WebApp;
tg.expand();

groupIdText.innerHTML = JSON.stringify(tg.initDataUnsafe.user);
groupUsernameText.innerHtml = JSON.stringify(tg.initDataUnsafe.chat);
