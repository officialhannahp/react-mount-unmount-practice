import React from 'react';
import { Spring } from 'react-spring';

export default function Component1() {
    return (
            <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1 , marginTop: 0}} >
                {props => (
                    <div style={props}>
                        <div style={c1style}>
                            <h1>Component 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Magni distinctio minima dolor accusamus ea?
                                Illum iure nostrum esse. Ab ut distinctio id maiores
                                dolorem sapiente minus obcaecati est vitae laboriosam.</p>
                        </div>
                    </div>
                )}
            </Spring>
    )
}

const c1style = {
    background: 'lightgray',
    color: 'gray',
    padding: '5rem'
}


