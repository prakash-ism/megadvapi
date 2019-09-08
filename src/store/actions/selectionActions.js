export const getCompanyNames = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    let companyNames = [];
    const firestore = getFirestore();
    firestore
      .collection('companyData')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          companyNames.push(doc.data().companyName);
        });
        dispatch({ type: 'COMPANY_NAMES', companyNames });
      })
      .catch(err => {
        dispatch({ type: 'COMPANY_DOCUMENT_NOT_EXIST', err });
      });
  };
};

export const getCountryNames = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    let countryNames = [];
    const firestore = getFirestore();
    firestore
      .collection('companyData')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (countryNames.indexOf(doc.data().country) === -1) countryNames.push(doc.data().country);
        });
        dispatch({ type: 'COUNTRY_NAMES', countryNames });
      })
      .catch(err => {
        dispatch({ type: 'COUNTRY_NAME_NOT_EXIST', err });
      });
  };
};

export const selectCompany = companyName => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection('companyData')
      .doc(companyName)
      .get()
      .then(doc => {
        dispatch({ type: 'COMPANY_DOCUMENT', doc });
      })
      .catch(err => {
        dispatch({ type: 'COMPANY_NOT_EXIST', err });
      });
  };
};

export const selectCountry = countryName => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const countryData = [];
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection('companyData')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().country == countryName) countryData.push(doc.data());
        });
        dispatch({ type: 'COUNTRY_DOCUMENT', countryData });
      })
      .catch(err => {
        dispatch({ type: 'COUNTRY_NOT_EXIST', err });
      });
  };
};
