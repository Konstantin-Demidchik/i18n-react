import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
  
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header>
        <div className="container ">
          <div className="logo">
            C / L
          </div>
          <div className="menu"></div>
          <div className="languages"></div>
          <div className="docs">
            <button onClick={() => changeLanguage('ru')}>ru</button>
            <button onClick={() => changeLanguage('en')}>en</button>
          </div>
        </div>
        {/*<Welcome />*/}



      </header>
      <div className="App-intro">
        {/*<MyComponentWrapped />*/}
      </div>
      <span>Hello {t('title')}</span>
    </>
  );
}

export default App;