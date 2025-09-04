import React from 'react';


const Home = () => {
    const [width, setWidth] = React.useState(200);
    const[top, setTop] = React.useState(0);
    const[left, setLeft] = React.useState(0);
    function minus(){
        setWidth(width - 20);
    }
    function plus(){
        setWidth(width + 20);
    }
    function topp (){
            setTop(top + 20)
    }
    function bottomm (){
            setTop(top - 20)
    }
    function leftt (){
        setLeft(left + 20)
    }
    function right (){
        setLeft(left - 20)
    }
    return (
        <div className={"flex justify-center items-center flex-col gap-2"}>
            <button onClick={minus}>-</button>  <button onClick={plus}>+</button>
            <div style={{height: `${width}px`, width: `${width}px`, backgroundColor: '#d97706' ,position:"relative", }}>
                <div style={{
                    height: `${width/6}px`,
                    width: `${width/6}px`,
                    backgroundColor: 'black',
                    position:"absolute",
                    top:`${top}px`,
                    bottom:`${top}px`,
                    left:`${left}px`
                }}></div>
            </div>

            <div style={{height:"200px", width:"300px",position:"relative"  }}>
                <button className={"absolute left-[36%]"}  onClick={bottomm}>top</button>
                <button className={"absolute right-0 top-[36%]"} onClick={leftt}>rigth</button>
                <button className={"absolute left-0 top-[36%]"}  onClick={right} >left</button>
                <button className={"absolute left-[36%] bottom-0"} onClick={topp}>bot</button>
            </div>
        </div>
    );
};

export default Home;