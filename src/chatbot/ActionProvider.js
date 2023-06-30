class ActionProvider {

    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage(
            `Hi!`
            );
        this.addMessageToState(message);
    };

    proMenuHandler = (msg) => {
        if(msg === "Reformat PC") {
            const message = this.createChatBotMessage(
                "Here's the procedure on how to reformat a PC:",
                {
                    widget: "reformat"
                }
            );
            this.addMessageToState(message);
        }

        if(msg === "Service Request") {
            const message = this.createChatBotMessage(
                "Sooner, I will make procedure for this."
            );
            this.addMessageToState(message);
        }


        if(msg === "Other Concern") {
            const message = this.createChatBotMessage(
                "For now, your other concern may be serve."
            );
            this.addMessageToState(message);
        }
    };

    handleDog = () => {
        const message = this.createChatBotMessage(
            `Here's a nice dog picture :`,
            {
                widget: "dogPicture"
            }
        );
        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    };


};

export default ActionProvider;