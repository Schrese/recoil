import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { charCountState, textState } from '../helpers';

function CharacterCounter() {
    return (
        <div>
            <p>Character Counter</p>
            <TextInput />
            <CharacterCount />
        </div>
    )
}

function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return(
        <div>
            Character Count: {count}
        </div>
    )
};

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input type='text' value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    )
}

export default CharacterCounter;