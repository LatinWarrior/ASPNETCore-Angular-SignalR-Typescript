var ChatMessage = (function () {
    function ChatMessage(message, date) {
        this.Message = message;
        this.Sent = new Date(date);
    }
    return ChatMessage;
}());
export { ChatMessage };
//# sourceMappingURL=chatMessage.model.js.map