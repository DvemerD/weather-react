
import twitterThumbnail from '../../assets/icons/twitter-thumbnail.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';

const TwitterFeed = () => {
    return (
        <div className="twitter">
            <div className="twitter__header">
                <img src={twitterIcon} alt="twitter icon" className="twitter__icon" />
                <h2 className="twitter__title">Twitter Feed</h2>
                <div className="twitter__hashtag">#France</div>
            </div>
            <div className="twitter__list">
                <div className="twitter__list-item">
                    <img src={twitterThumbnail} alt="twitter thumbnail"
                        className="twitter__thumbnail" />
                    <p className="twitter__descr">Don't Forget your sunscreen tomorrow!</p>
                </div>
                <div className="twitter__list-item">
                    <img src={twitterThumbnail} alt="twitter thumbnail"
                        className="twitter__thumbnail" />
                    <p className="twitter__descr">Amazing weather in Paris!</p>
                </div>
            </div>
            <button className="twitter__btn">NEXT</button>
        </div>
    )
}

export default TwitterFeed;