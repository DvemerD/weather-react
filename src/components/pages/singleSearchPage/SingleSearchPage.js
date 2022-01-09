
import './singleSearchPage.scss';

import SearchCityForm from '../../searchCityForm/SearchCityForm';
import SearchCityContent from '../../searchCityContent/SearchCityContent';
import ButtonBack from '../../buttonBack/ButtonBack';

const SingleSearchPage = () => {
    return (
        <section className="search">
            <div className="container">
                <ButtonBack />
                <div className="search__inner">
                    <div className="search__wrapper">
                        <SearchCityForm />
                        <SearchCityContent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleSearchPage;