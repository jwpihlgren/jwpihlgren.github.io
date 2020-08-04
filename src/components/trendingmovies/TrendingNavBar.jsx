import React from 'react';
import { Menu, MenuMenu} from 'semantic-ui-react';
import { Link} from 'react-router-dom';

function TrendingNavBar(props){
    return(
    <Menu inverted>
        <Menu.Item as={Link} to={props.path}>
            TrendingMovies
        </Menu.Item>
        <MenuMenu position={"right"}>
         <Menu.Item as={Link} to={"/"}>
            Back to portfolio
            </Menu.Item>
        </MenuMenu>
    </Menu>
    )
}

export default TrendingNavBar;