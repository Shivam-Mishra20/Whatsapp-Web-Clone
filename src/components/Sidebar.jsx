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
import { BsChatText } from "react-icons/bs";

import Groups from "./Groups";






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
                    <span className="  text-[9px] rounded-full px-1 bg-green-500  text-white"> {userData.message} </span>
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
    //for PRofile 
    const [openProfile, setProfile] = useState(false)
    //for group

    //the main container 

    const [ profilleinfo ,setProfileInfo ] =useState(ProfileInfoDiv)


    const [openGrooup, setGroup] = useState(false);

     

    const [showBox, setShowBox] = useState(false);

    const handleClick = () => {
        setShowBox(!showBox); // Toggle the showBox state
        setProfileInfo('')
         
    };




    return (
        <Container className="min-w-[350px]  max-w-[450px]  w-100  relative " >


            <>

                <ProfileInfoDiv className=" flex justify-between border-r-2  border-gray-300   "   >
                    <ProfileImage src="https://img.freepik.com/free-vector/x9maha-shivratri-festival-background-with-shiv-ling-card-holiday-design_1035-22319.jpg?t=st=1709109846~exp=1709113446~hmac=9c3596562763c284cc7aea8527ac4c7ce423f86b2c85ed0cfed3deab31ea2fe8&w=740" onClick={() => { setProfile(!openProfile), setSelectedIcon('') }} />






                    {/* Profile nav buttons */}
                    <div className="flex   gap-1 justify-between w-[185px]">

                        <Roundedbtn icon={<MdPeopleAlt />} onClick={() => setGroup(!openGrooup)} />
                        <Roundedbtn icon={<TbCircleDashed />} />
                        <Roundedbtn icon={<BsChatText />} />
                        <Roundedbtn icon={<BsFillChatLeftTextFill />} />
                        <Roundedbtn icon={<HiDotsVertical />} onClick={handleClick} />



                    </div>


                </ProfileInfoDiv>


                <SearchBox className=" items-center">
                    <SearchContainer>
                        <SearchIcon src={"/search-icon.svg"} />
                        <SearchInput placeholder="Search or start new chat" />
                    </SearchContainer>

                    <IoFilter className="  text-gray-400  w-[10%] text-2xl px-2" />



                </SearchBox>

                <div>
                    {openProfile && <  Chatwindow open={openProfile} setprofile={setProfile} /> }
                    { openGrooup && <Groups open={openGrooup} setopen={setGroup}   />}
                    {showBox && (
                        <div
                            style={{
                                width: '250px',
                                height: '260px',
                                background:"white",
                                position: 'absolute',
                                top: '58px',
                                right: '20px',
                                zIndex: '0',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                                borderRadius:"4px",
                                fontWeight:"lighter"
                            }} 
                            onClick={handleClick}
                           
                        >
                            <ul className=" flex flex-col gap-2 p-4  hover: bg-gray-100 ">
                                <li> <a>New Group </a> </li>
                                <li> <a>New Message </a> </li>
                                <li> <a>New Chats </a> </li>
                                <li> <a>Status Setting </a> </li>
                                <li> <a>Setting </a> </li>
                                <li> <a>Logout </a> </li>
                                 
                                <li className=" border-t-2">Get whatsapp premimum</li>
                            </ul>

                            
                        </div>

                    )}


                </div>

                <div className=" custom-scrollbar overflow-y-scroll">



                    {contactList.map((userData, id) => (

                        <ContactComponent userData={userData} />
                    ))}
                </div>

            </>







        </Container>
    );
};

export default Sidebar;



//styled components

export const Container = styled.div`
display:flex;
flex-direction: column;
min-height:  94vh;
max-height: 94vh;
height:  100%;
width: 100%;
flex:0.8;

@media (max-width:600px){
    overflow-y: scroll;
}
 
 
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
width: 66px;
height: 48px;
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