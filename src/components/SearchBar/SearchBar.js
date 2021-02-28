import React from 'react';
import {Row, Col} from 'react-bootstrap';

const SearchBar = ({ searchfield , searchChange }) => {
  return (
    <Row className="mt5">
      <Col>
        <input
          className='f4 w-100 pa2 br2 white ba b--light-purple bg-near-black'
          type='search'
          placeholder='Search stores'
          onChange={searchChange}
        />
      </Col>
    </Row>
  )
}

export default SearchBar;