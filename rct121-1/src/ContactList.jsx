import ContactCard from "./ContactCard";
import {useState} from "react";
const contactData = [
  {
    id : 1,
    name : "Annette Murphy",
    email : "Anne@murphy.com",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU",
    phone : "+91-1234567890"
  },
  {
    id : 2,
    name : "Lisa Mona",
    email : "lisa@mona.com",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazXFSad_h84pkFPwzKONF3ryfF4vDRkoIPG8_3XsuO4x05ZyIKsZ1K5QMTYmnOq0_DOk&usqp=CAU",
    phone : "+91-45646384783"
  },
  {
    id : 3,
    name : "Gabriel Nate",
    email : "gab@nate.com",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwWwNcMNvNB9gXrUi1IR7Aty1nv0ZtdvMqQ&usqp=CAU",
    phone : "+91-78974878458"
  },
  {
    id : 4,
    name : "Kevin Timber",
    email : "kevin@timber.com",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1swg_s97U6630NGVC_NPsEp2w3EPPTMbvNA&usqp=CAU",
    phone : "+91-48758497547"
  },
  {
    id : 5,
    name : "Ben Ten",
    email : "ben@ten10.com",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WbWTbpSwd-p1fYgmqmSnZPU0rOx6fnUVEg&usqp=CAU",
    phone : "+91-76783894848"
  },
  {
    id : 6,
    name : "Gwen Ten",
    email : "gwen@kevin.com",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcEdZi7p573u3M6VAblPHqzpGvEBsGpPM6A&usqp=CAU",
    phone : "+91-48758497547"
  },
]

function ContactList(){
  const [data,setData] = useState(contactData);
  return (
    <div>
      {data.map((e)=> (
        <ContactCard name={e.name} key={e.id} email={e.email} phone={e.phone} img={e.img}/>
      ))}
    </div>
  )
}
export default ContactList;