import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './MovieSearch.scss'

const MovieSearch = () => {
    return(
        <div>
            <Form>
            <FormGroup className="mySearchForm">
                {/* <Label for="exampleSearch">Search</Label> */}
                <Input
                type="search"
                name="search"
                id="exampleSearch"
                className="searchInput"
                placeholder="search movie"
                />
                <Button>Submit</Button>
            </FormGroup>
            
            </Form>
        
        </div>
    )
}

export default MovieSearch;