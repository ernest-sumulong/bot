import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Menu from "../components/Menu";
import CoBotAvatar from "../CoBotAvatar";
import Reformat from "../components/Reformat/Reformat";
import DogPicture from "../components/DogPicture";


const botName = "Woffy";

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hello!, I'm Woffy.`,
        {
            widget: "menu"
        }
        )
    ],
    customStyle: {
        botMessageBox: {
            backgroundColor: "#376B7E"
        },
        chatButton: {
            backgroundColor: "#376B7E"
        }
    },
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
    widgets: [
        {
            widgetName: "menu",
            widgetFunc: (props) => <Menu {...props} />
        },
        {
            widgetName: "reformat",
            widgetFunc: (props) => <Reformat {...props} />
        },
        {
            widgetName: "dogPicture",
            widgetFunc: (props) => <DogPicture {...props} />
        }
    ]
};

export default config;