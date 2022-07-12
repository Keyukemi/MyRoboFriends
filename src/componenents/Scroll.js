
const Scroll = (props) =>{
    return (
        <div style={{overflowY: "scroll", border:"1px solid grey", height:"1000px"}}>
            {props.children}
        </div>
    );
};

export default Scroll;