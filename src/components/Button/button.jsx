function Button({ labelName, ...props }) {
    return (<button {...props}>{labelName}</button>)
}
export default Button;