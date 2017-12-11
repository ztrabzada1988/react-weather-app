
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines'; // package for charts lines


// since we are not going to be make use of any component state we will keep this as a functional component install of class
export default (props) => {
    return (
        <div>
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>  
        </div>
    )
}


