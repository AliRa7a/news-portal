// everything/LanguageSelect.js
import React from 'react';

const LanguageSelect = ({ language, setLanguage }) => {
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language">Language:</label>
      <select id="language" value={language} onChange={handleChange}>
        <option value="">All Languages</option>
        <option value="ar">Arabic</option>
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="he">Hebrew</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="no">Norwegian</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="sv">Swedish</option>
        <option value="ud">Urdu</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
