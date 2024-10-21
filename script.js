const messageBox = document.getElementById('messageBox');
const charCount = document.getElementById('charCount');
const warningMessage = document.getElementById('warningMessage');
const maxChars = 200;

messageBox.addEventListener('input', () => {
    const currentLength = messageBox.value.length;
    
    if (currentLength <= maxChars) {
        charCount.textContent = `${currentLength}/${maxChars} characters`;
        warningMessage.textContent = '';
    }
    
    if (currentLength > maxChars) {
        messageBox.value = messageBox.value.substring(0, maxChars);
        warningMessage.textContent = 'Character limit reached!';
    }
});
