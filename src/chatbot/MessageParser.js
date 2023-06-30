class MessageParser {

constructor(actionProvider){
    this.actionProvider = actionProvider;
}


    parse(message) {
        const lowercase = message.toLowerCase();


        if(lowercase.includes("Hello") || lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("Hi") || lowercase.includes("HI") || lowercase.includes("HELLO")) {
            this.actionProvider.greet();
        }

        if(lowercase.includes("dog") || lowercase.includes("DOG") || lowercase.includes("Dog")) {
            this.actionProvider.handleDog();
        }
    }


};

export default MessageParser;