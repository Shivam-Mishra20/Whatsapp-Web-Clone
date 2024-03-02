// ContactListComponents.js
import styled from "styled-components";
import { contactList } from "../Data";


import { useState } from "react";

import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import Roundedbtn from "./Roundedbtn";
import Chatwindow from "./Chatwindow";
import MessageComponent from "./MessageComponent";
import { IoFilter } from "react-icons/io5";





//contactcomponent for return

const ContactComponent = ({ userData }) => {

    return (

         


        <ContactItem className=" bg-gray-600   border  border-b    h-[80px]    "     >

           

                <div className="">
                    <ProfileIcon src={userData.profilePic} />

                </div>

                <ContactInfo>
                    <ContactName>{userData.name}</ContactName>
                    <MessageText className="  whitespace-nowrap  ">{userData.lastText}</MessageText>
                </ContactInfo>
                <div className=" flex flex-col items-end  ">
                    <div>
                        <MessageText className=" whitespace-nowrap" > {userData.lastTextTime}</MessageText>
                    </div>
                    <div>
                        <span className="  text-[9px] rounded-full px-1.5 bg-green-500  text-white"> {userData.message} </span>
                    </div>



                </div>

        </ContactItem>
        
        
    );
};

const Sidebar = () => {
    const [first, setfirst] = useState(false)

    const handle = () => {
        setfirst(!first)
    }
    const [openChats, setChats] = useState(false)


    return (
        <Container className={`min-w-[25vw]  max-w-[auto]    w-100`}       onClick={() => setChats(!openChats)}>

            {openChats ? <Chatwindow /> : (
                <>

                    <ProfileInfoDiv className=" flex justify-between border-r-2  border-gray-300  " onClick={handle}>
                        <ProfileImage src="https://img.freepik.com/free-vector/x9maha-shivratri-festival-background-with-shiv-ling-card-holiday-design_1035-22319.jpg?t=st=1709109846~exp=1709113446~hmac=9c3596562763c284cc7aea8527ac4c7ce423f86b2c85ed0cfed3deab31ea2fe8&w=740" />






                        {/* Profile nav buttons */}
                        <div className="flex justify-between w-[175px]">
                            <Roundedbtn icon={<MdPeopleAlt />} />
                            <Roundedbtn icon={<TbCircleDashed />} />
                            <Roundedbtn icon={<BsFillChatLeftTextFill />} />
                            <Roundedbtn icon={<HiDotsVertical />} />
                        </div>


                    </ProfileInfoDiv>
                    <SearchBox className=" items-center">
                        <SearchContainer>
                            <SearchIcon src={"/search-icon.svg"} />
                            <SearchInput placeholder="Search or start new chat" />
                        </SearchContainer>

                        <IoFilter className="  text-gray-400  w-[10%] text-2xl px-2" />



                    </SearchBox>

                    <div className=" custom-scrollbar overflow-y-scroll">

                     

                    {contactList.map((userData, id) => (

                        <ContactComponent userData={userData} />
                    ))}
                    </div>



                </>

            )}



        </Container>
    );
};

export default Sidebar;



//styled components

const Container = styled.div`
display:flex;
flex-direction: column;
min-height:    calc(100vh - 46px);
 
height:  100%;
width: 100%;
flex:0.8;
 
 
`;
const ProfileInfoDiv = styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 10px 15px;
`;
const ProfileImage = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 `;
const SearchBox = styled.div`
display: flex;
background: #f6f6f6;
padding:10px ;
`;
export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
background: white;
border-radius: 6px;
width: 90%;
padding: 5px 0;
font-size: 12px;
`;
const SearchIcon = styled.img`
width: 28px;
height: 28px;
padding-left: 10px;
`;
  const SearchInput = styled.input`
width: 100%;
outline: none;
border: none;
padding-left: 10px;
font-size: 12px;
border-radius: 2px;
margin-left: 2px;
`;
const ContactItem = styled.div`
    display: flex;
    flex-direction : row;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
`;

const ProfileIcon = styled(ProfileImage)` 
width: 46px;
height: 38px;
`;
const ContactName = styled.span`
width: 100%;
font-size: 16px;
color:black;
`;
const MessageText = styled.span`
width: 20%;
font-size: 14px;
margin-top: 3px;
color: rgba (0,0,0,0.8);
`;
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 19px;
`;