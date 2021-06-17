import React from 'react'
import { Result } from 'antd';

function WaitForVerification(props) {
    return (
        <div>
              <Result
                    status={props.status}
                    title={props.title}
                    subTitle={props.subTitle}
                    extra={[
                     props.children
                    ]}
    />
        </div>
    )
}

export default WaitForVerification
