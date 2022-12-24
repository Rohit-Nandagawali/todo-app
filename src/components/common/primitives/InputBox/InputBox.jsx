import './InputBox.scss'

const InputBox = ({type,placeholder}) => {
    return ( 
        <div className="InputBox">
            <input type={type} placeholder={placeholder}/>
        </div>
     );
}
 
export default InputBox;  