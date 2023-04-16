function BalanceCard(props){
    return (
        <div className="balanceCard">
            <div className="balanceCard__info">
                <p className="balanceCard__info__text">{`${props.account.name} (${props.account.reference})`}</p>
                <p className="balanceCard__info__amount">{`${props.balance.currency}${props.balance.amount}`}</p>
                <p className="balanceCard__info__text">Available Balance</p>
            </div>
            <button className="button">View transactions</button>
        </div>
    );
};

export default BalanceCard;