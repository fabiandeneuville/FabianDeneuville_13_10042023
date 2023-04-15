import Banner from "../components/Banner";
import Feature from "../components/Feature";
import iconChat from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecurity from '../assets/img/icon-security.png';

function Home(){
    return (
        <main>
            <Banner/>
            <div className="features__container">
                <Feature
                title={"You are our #1 priority"}
                text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                image={{
                    image: iconChat,
                    altText: "Chat"
                }}
                />
                <Feature
                title={"More savings means higher rates"}
                text={"The more you save with us, the higher your interest rate will be!"}
                image={{
                    image: iconMoney,
                    altText: "Savings"
                }}
                />
                <Feature
                title={"Security you can trust"}
                text={"We use top of the line encryption to make sure your data and money is always safe."}
                image={{
                    image: iconSecurity,
                    altText: "Security"
                }}
                />
            </div>
        </main>
    );
};

export default Home;