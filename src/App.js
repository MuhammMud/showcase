
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of NFTs. Start Selling & Growing"
        description="Buy, collect, exchange & earn NFTs. Join 5+ million people using this growing Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience the smooth UI of EthBloc Marketplace. Consistent colors built using a fluent and integrated UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="EthBloc is built using Expo which runs natively on all users' devices. Easily allowing you to get your app out in the world."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="A new way to showcase the store"
        description="The app contains two screens. The first shows a list of all NFTs while the second focuses on the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">MMudassir</span>
        </p>
      </div>
    </>
  );
}

export default App;
