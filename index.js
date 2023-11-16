const groupDataText = document.getElementById('group_data');
const groupIdText = document.getElementById('group_id');
const groupUsernameText = document.getElementById('group_username');

const tg = window.Telegram.WebApp;
tg.expand();

groupIdText.innerHTML = JSON.stringify(tg.initDataUnsafe.user);
groupUsernameText.innerHTML = JSON.stringify(tg.initDataUnsafe.chat);
groupDataText.innerHTML = JSON.stringify(tg);
