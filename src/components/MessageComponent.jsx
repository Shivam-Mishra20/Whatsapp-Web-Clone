// ConversationComponents.js
import styled from "styled-components";
import { messagesList } from "../Data";
import { SearchContainer } from "./Sidebar";
import { IoVideocam } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RxPlus } from "react-icons/rx";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

import { FaMicrophone } from "react-icons/fa6";




import { FiMoreVertical } from "react-icons/fi";

const Container = styled.div`
display: flex ;
flex-direction: column;
min-height: 94vh;
 height:100%  ;
width: 100vw;
flex:  1/2;
background: #f6f7f8;

@media   (max-width:680px) {
    display: none;
    font-size: 12px;
    
}
`;
const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 10px 15px;
    align-items: center;
    gap : 10px;
     
     
  
`;

const ProfileImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const ChatBox = styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom : 0;

`;

const EmojiImage = styled.img`
width:30px;
height: 28px;
opacity: 0.4;
cursor: pointer;
`;
const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height :  calc(94vh - 70px);
background: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
`;

const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
display:flex;
margin: 5px 16px;
`;

const Message = styled.div`
background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
max-width:50%;
color: #303030;
padding: 8px 10px;
display: flex;
font-size: 15px;
border-radius: 14px
 
 10px 3px 12px;
`;

const SearchInput = styled.input`
width: 100%;
outline: none;
border: none;
padding-left: 15px;
font-size: 12px;
border-radius: 2px;
margin-left: 2px;
`;

const MessageComponent = ({ }) => {
    const [first, setfirst] = useState(false)
    const [dates, setdate] = useState(new Date())
    useEffect(() => {
        const updateTime = setTimeout(() => {
            setdate(new Date())

        }, 1000)
    }, [])


    return (


        <Container     >

            <ProfileHeader className=" flex   justify-between"  >




                <div className=" flex  ">
                    <ProfileImage src="https://img.freepik.com/free-photo/portrait-interesting-young-man-winter-clothes_158595-911.jpg?t=st=1708940307~exp=1708943907~hmac=ffa85b6be64a68fda7c4c768101e983ff778fc3f881de3ae898f5f1e885f3b9d&w=740" />
                    <span className="pl-4">Anubhav Sharma</span>

                </div>
                <div className=" flex items-center justify-between gap-4 text-2xl text-gray-600">
                    <IoVideocam />
                    <CiSearch />
                    <FiMoreVertical className='' />





                </div>
            </ProfileHeader>
            <MessageContainer className="  text-sm  px-6  overflow-y-auto ">
                <div className=" text-center my-3 ">
                    <span className="p-2  bg-white rounded-md">TODAY</span>
                </div>
                <>
                    <div className="   text-center mt-4">
                        <span className=" p-2 bg-white rounded-md">YESTERDAY</span>


                    </div>



                    <MessageDiv isYours={messagesList.senderID === 0}>

                        <Message isYours={messagesList.senderID === 0} className= " md:text-sm mt-2 ">{[messagesList.text]}
                            <span className="  block     text-sm mt-3 ml-3">{dates.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>

                        </Message>

                    </MessageDiv>

                </>
                

            </MessageContainer>
            <ChatBox>
                <div className=" flex items-center gap-4">
                    <EmojiImage src={"/data.svg"} className=" ml-2" />
                    <RxPlus className="   text-3xl  mr-6 " />

                </div>
                <SearchContainer>


                    <SearchInput placeholder="Type a message" onKeyDown={() => setfirst(true)} />
                </SearchContainer>

                <div>
                    {!first ? <FaMicrophone className=" text-gray-400 text-2xl mx-4 " /> : <RiSendPlane2Fill className=" text-gray-400 text-2xl mx-4 hover:text-green-600 " />
                    }

                </div>
            </ChatBox>

        </Container>


    );
};
export default MessageComponent;