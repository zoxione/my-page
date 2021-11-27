import React from "react";

class Progress extends React.Component {


    render() {
        var fullWidth = 150;
        var userWidth = this.props.percent * 0.01 * fullWidth;

        return (
            <div className="flex flex-row">
                <div style={{ width: userWidth }} className="bg-second1 h-3 rounded-l-lg"></div>
                <div style={{ width: fullWidth - userWidth }} className="bg-second2 h-3 rounded-r-lg"></div>    
            </div>
        );
    }
}

export default Progress;