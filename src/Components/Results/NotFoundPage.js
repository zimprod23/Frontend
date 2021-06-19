import React from 'react'
import { Result, Button } from 'antd';

function NotFoundPage() {
    return (
        <div style={{
            display:"flex",
            padding:"15px",
            margin:"15px",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div style={{
                padding:"1px",
                margin:"1px",
                width:"90vw"
            }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
            </div>
        </div>
    )
}

export default NotFoundPage
