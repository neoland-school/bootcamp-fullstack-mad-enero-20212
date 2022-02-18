
/**
 * filters a list of countries by country name and capital city name ignoring case.
 * @param {Array<Countries>} countries the list of countries to be filtered
 * @param {string} countrySearch the country name search value
 * @param {string} capitalSearch the capital city name search value
 * @returns a new array with the countries that contains name value and capital value
 */
export const filterByCountriesAndCapital = (countries, countrySearch, capitalSearch) => {
    const co = countrySearch.toLowerCase();
    const ca = capitalSearch.toLowerCase();
    return countries.filter(c => c.name.toLowerCase().includes(co) 
                              && c.capital.toLowerCase().includes(ca));
}