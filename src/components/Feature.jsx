import PropTypes from 'prop-types';

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

Feature.propTypes = {
    image: PropTypes.shape({
        image: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
