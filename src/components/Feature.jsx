function Feature(props){
    return (
        <div className="feature">
            <div className="feature__image__container">
                <img src={props.image.image} alt={props.image.altText} />
            </div>
            <h4 className="feature__title">{props.title}</h4>
            <p className="feature__text">{props.text}</p>
        </div>
    );
};

export default Feature;
