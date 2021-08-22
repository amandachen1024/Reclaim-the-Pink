function getBotResponse(input) {
//help
    if (input == "help") {
        return "What do you need help with?";
    } else if (input == "issue") {
        return "What issue can I help you with?";
    } else if (input == "more info") {
        return "Please visit this site for more information about the pink tax, https://www.sfu.ca/wwest/WWEST_blog/the-pink-tax.html.";
    } else if (input == "contact") {
        return "Type your message in the chat box. Once you are finished writing your concern, press enter, then type 'DONE' and press enter to submit your concern."
    } else if (input == "DONE"){
        return "Your concern has been successfully sent to the website admins."
    }

// Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Is there anything else I can help with?";
    }
}