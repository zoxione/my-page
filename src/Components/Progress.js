export default function Progress(props) {
    var fullWidth = 150;
    var userWidth = props.percent * 0.01 * fullWidth;

    return (
        <div className={props.className}>
            <div className="flex flex-row">
                <div style={{ width: userWidth }} className="bg-second1 h-3 rounded-l-lg"></div>
                <div style={{ width: fullWidth - userWidth }} className="bg-second2 h-3 rounded-r-lg"></div>    
            </div> 
        </div>
    );
}