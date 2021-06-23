import React from 'react'
import ContactForm from './ContactForm'


function Contact() {
    return (
        <div style={{
            display:"flex",
            backgroundColor:"#eee"
        }}
        id="Contact"
        >
            <div id="Social-media" style={{
                margin:"20px",
                display:"block",
                width:"33vw",
                padding:"15px",
                textAlign:"center",
                borderRight:"1px solid black"
            }}>
                 <div><a>Facebook</a></div>
                 <br />
                 <div><a>Twitter</a></div>
                 <br />
                 <div><a>Instagram</a></div>
            </div>
             {/* <Divider type="vertical" /> */}
            <div id="contact" style={{
               margin:"20px",
               display:"block",
               width:"33vw",
               padding:"15px",
               textAlign:"center"
            }}>
               <ContactForm />
            </div>
        </div>
    )
}

export default Contact
