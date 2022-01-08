
import './singleSearchPage.scss';

import SearchCityForm from '../../searchCityForm/SearchCityForm';
import SearchCityContent from '../../searchCityContent/SearchCityContent';

const SingleSearchPage = () => {
    return (
        <section className="search">
            <div className="container">
                <div className="search__wrapper">
                    <SearchCityForm/>
                    <SearchCityContent/>    
                </div>
            </div>
        </section>
    )
}

export default SingleSearchPage;