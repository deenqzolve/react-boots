import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Search= (props) => {
  return (
    <div>
    
     
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary"><i className="fa fa-search"></i></Button>
        </InputGroupAddon>
      </InputGroup>
     
      
    </div>
  );
};

export default Search;