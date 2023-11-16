const groupNameText = document.getElementById('group_name');
const groupIdText = document.getElementById('group_id');
const groupUsernameText = document.getElementById('group_username');

groupNameText.textContent = ' ' + window.Telegram.WebApp.initDataUnsafe;

groupNameText.textContent = ' ' + window.Telegram.WebApp.initDataUnsafe.chat.id;
groupUsernameText.textContent =
  ' ' + window.Telegram.WebApp.initDataUnsafe.chat.username;
