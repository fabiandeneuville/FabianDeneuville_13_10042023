import PropTypes from 'prop-types';

function UserGreeting(props){
    return (
        <div className="user-greeting">
            <h2>Welcome back</h2>
            <h2>{props.firstName} {props.lastName}</h2>
        </div>
    );
};

export default UserGreeting;

UserGreeting.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};