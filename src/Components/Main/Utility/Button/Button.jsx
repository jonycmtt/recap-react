
const Button = ({bgColor,title,large,small}) => {
    return (
        <div>
            <button className={`btn ${large} ${bgColor}  ${small}`}>{title}</button>
        </div>
    );
};

export default Button;