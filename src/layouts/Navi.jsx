import React from 'react'
import {Link} from "react-router-dom"
  import {routes} from "../Routing"
  import{Button,Dropdown,Menu} from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
               <Menu size="massive">
        
        {routes.map(route=> (
            <Menu.Item key={route.title} name = {route.title}> <Link to = {route.path}>{route.title}</Link> </Menu.Item>
        ) ) }
        
        

        <Menu.Menu position="right">
          <Dropdown item text="Ara">
            <Dropdown.Menu>
              <Dropdown.Item>İş İlanları</Dropdown.Item>
              <Dropdown.Item>Açık CV'ler</Dropdown.Item>
              <Dropdown.Item>Pozisyonlar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button class ="ui button" primary>Sign In</Button>
            <div class="ui button primary"  tabindex="0" style={{marginLeft:'0.5em'}}>
            Sign Up
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
        </div>
    )
}



