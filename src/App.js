import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import plusSign from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useEffect, useRef, useState } from "react";
function App() {
  const msgEnd = useRef(null);


const [input, setInput] = useState("");
const [messages, setMessages] = useState([{
  text: "I am SageAI. A ChatGPT clone and a large language model chatbot developed by SixxPathz using the OpenAI API. I am trained on a massive dataset of text and code, and I am able to communicate and generate human-like text in response to a wide range of prompts and questions",
  isBot: true,
}]);

useEffect(()=>{
  msgEnd.current.scrollIntoView();
},[messages])


const handleSend = async () => {
  const text = input;
  setInput('');

  setMessages([   ...messages,
    {text:input,isBot:false},
  ])
  const res = await sendMsgToOpenAI(text);
  setMessages([
    ...messages,
  {text:input,isBot:false},
  {text:res, isBot:true},
  ]);


} 

const handleQuery = async (e) => {
  const text = e.target.value;

  setMessages([   ...messages,
    {text:input,isBot:false},
  ])
  const res = await sendMsgToOpenAI(text);
  setMessages([
    ...messages,
  {text:input,isBot:false},
  {text:res, isBot:true},
  ]);
}

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">SageAI</span>
          </div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}>
            <img src={plusSign} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value={" What is Programming ?"}>
              <img src={msgIcon} alt="" className="" />
              What is Programming ?
            </button>
            <button className="query" onClick={handleQuery} value={" What is an API ?"}>
              <img src={msgIcon} alt="" className="" />
              What is an API ?
            </button>
            <button className="query" onClick={handleQuery} value={" Recommed a dish"}>
              <img src={msgIcon} alt="" className="" />
              Recommed a dish
            </button>
            <button className="query" onClick={handleQuery} value={"Write a thank you note"}>
              <img src={msgIcon} alt="" className="" />
              Write a thank you note
            </button>
          </div>
        </div>

        <div className="lowerSide"></div>
        <div className="listItems">
          <img src={home} alt="" className="listItemsImg" />
          Home
        </div>
        <div className="listItems">
          <img src={saved} alt="" className="listItemsImg" />
          Saved
        </div>
        <div className="listItems">
          <img src={rocket} alt="" className="listItemsImg" />
          Upgrade to Pro
        </div>
      </div>

      <div className="main">
        <div className="chats">
       
          {messages.map((message, i ) =>
            <div key={i} className={message.isBot?"chat bot":"chat"}>
            <img className="chatImg" src={message.isBot?gptImgLogo:userIcon} alt="" />
            <p className="txt">{message.text}</p>
          </div>
           )}
           <div ref={msgEnd}/>
        </div>

        <div className="chatFooter">
        <div className="inp">
          
          <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
        
          </div>
          <p>Sage AI can make mistakes. Consider checking important information.</p>
        </div>
      
      
      
      </div>
   
   
   
   
    </div>
  );
}

export default App;
