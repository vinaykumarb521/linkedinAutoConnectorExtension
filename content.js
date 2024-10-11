function autoConnect() {
    const buttons = Array.from(document.querySelectorAll('button'));

    const connectButtons = buttons.filter(button => button.innerText.trim() === 'Connect');

    let index = 0;

    function clickNextButton() {
        if (index >= connectButtons.length) {
            console.log("Finished processing all connect buttons on this page.");
            return;
        }

        const button = connectButtons[index];
        
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });

        button.click();
        console.log("Clicked Connect for profile at index:", index);

        setTimeout(() => {
            const sendWithoutNoteButton = document.querySelector('button[aria-label="Send without a note"]');

            if (sendWithoutNoteButton) {
                sendWithoutNoteButton.click();
                console.log("Sent the connection request without a note.");
            } else {
                console.log("No 'Send without a note' button found.");
            }
        }, 1000);

        index++;
        const delay = Math.floor(Math.random() * 5000) + 5000; 
        setTimeout(clickNextButton, delay);
    }

    if (connectButtons.length > 0) {
        clickNextButton();
    } else {
        console.log("No 'Connect' buttons found on this page.");
    }
}

autoConnect();
