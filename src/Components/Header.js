export default function Header(props) {
    return (
        <div className={props.className}>
            <div className="mt-16 mb-8">
                <div className="border-t-2 border-text2" />
                <h1 className="tracking-wider font-semibold text-4xl md:text-6xl text-text2 uppercase text-center">{props.title}</h1>
            </div>
        </div>
    );
}