const initState = null;
// remove ...state thing and see persistance
const selectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COMPANY_DOCUMENT':
      return {
        ...state,
        companyData: action.doc.data()
      };
    case 'COMPANY_NOT_EXIST':
      return {
        ...state,
        notExistError: action.err.message
      };
    case 'COUNTRY_DOCUMENT':
      return {
        ...state,
        countryData: action.countryData
      };
    case 'COUNTRY_NOT_EXIST':
      return {
        ...state,
        notExistError: action.err
      };
    case 'COMPANY_NAMES':
      return {
        ...state,
        companyNames: action.companyNames
      };
    case 'COMPANY_DOCUMENT_NOT_EXIST':
      return {
        ...state,
        notExistError: action.err.message
      };
    case 'COUNTRY_NAMES':
      return {
        ...state,
        countryNames: action.countryNames
      };
    case 'COUNTRY_NAME_NOT_EXIST':
      return {
        ...state,
        notExistError: action.err.message
      };
    default:
      return state;
  }
};

export default selectionReducer;
