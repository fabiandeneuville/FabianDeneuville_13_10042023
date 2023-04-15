import banktree from '../assets/img/bank-tree.jpeg';

function Banner(){
    return (
        <div className='banner'>
            <img className='banner__image' src={banktree} alt="tree"/>
            <div className='banner__card'>
                <h3>No fees. No minimum deposit. High interest rates.</h3>
                <p>Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    );
};

export default Banner;