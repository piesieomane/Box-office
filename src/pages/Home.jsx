/* eslint-disable */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import apiGet from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    apiGet(`/search/${searchOption}?q=${input}`).then(data => {
      setResults(data);
      console.log(data);
    });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="Search for something"
        value={input}
      />

      <label htmlFor="shows-search">
        Shows
        <input
          type="radio"
          id="shows-search"
          value="shows"
          checked={isShowsSearch}
          onChange={onRadioChange}
        />
      </label>

      <label htmlFor="actors-search">
        Actors
        <input
          type="radio"
          id="actors-search"
          value="people"
          checked={!isShowsSearch}
          onChange={onRadioChange}
        />
      </label>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
