import React, {useEffect} from 'react';

const About = () => {
    const [isOpen, setIsOpen] = React.useState(true)
    const [color1, setColor1] = React.useState(0)
    const [color2, setColor2] = React.useState(0)
    const [color3, setColor3] = React.useState(0)
    function toggleOpen() {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        setColor1(Math.floor(Math.random() * 255))
        setColor2(Math.floor(Math.random() * 255))
        setColor3(Math.floor(Math.random() * 255))
    },[isOpen])

    return (
        <div>

            <button onClick={toggleOpen}>{
                isOpen ? "Close" : "Open"
            }</button>
            { isOpen &&
                <div className={`h-[100px] w-[100px] `}
                     style={{ backgroundColor: `rgb(${color1}, ${color2}, ${color3})` }}></div>}
        </div>
    );
};

export default About;