import React from "react";

//-mt-5
//<h1 className="flex items-center justify-center my-16 h-20 tracking-wide font-semibold text-4xl text-white bg-gradient-to-r from-header to-border uppercase">{props.title}</h1>
class Header extends React.Component {

    render() {
        return (
            <div className="my-16">
                <div className="border-t-2 border-text2" />
                <h1 className="tracking-wider font-semibold text-2xl md:text-4xl text-white uppercase opacity-50">{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;