import React from 'react'
import {MDBFooter} from 'mdb-react-ui-kit'
import "./Footer.css"

const Footer : React.FC = () => {
    return (
        <MDBFooter className ='Footer'>
            <div className='text-center p-4'>
                Footer
            </div>
        </MDBFooter>
    );
}

export default Footer;