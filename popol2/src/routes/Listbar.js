import React from 'react';
import { Drawer, List, ListItem, ListItemText} from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { removeCookie } from "../cookie";

const drawerWidth = 245;

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});


const Listb = () => {
  
  const logout = () => {
    removeCookie("accessToken");
    window.location.replace("/");
  }

  return(
    <DrawerContainer>
      <Drawer variant="permanent" sx={{width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, zIndex:'0'} }}>
        <List style={{height : '100%', background : 'linear-gradient(45deg, rgb(0, 0, 0), rgb(201, 52, 221), rgb(0, 0, 0)'}}>
          <h2 style={{color:'white', paddingLeft:'20px'}}>MusciHub</h2>
            <ListItem button>
              <NavLink to='/user/mypage' style={{color: '#fff'}}>Mypage</NavLink>
            </ListItem>
            <ListItem button>
              <NavLink onClick={logout} style={{ textDecoration: 'none' }}>
                <ListItemText style={{ color: 'white', float: 'left' }} primary={"로그아웃"}/> 
                <LogoutIcon style={{color :'white', position:'relative' , top:'4px'}}/>
              </NavLink>
              </ListItem>
            <ListItem button>
              <NavLink to='/musics'><ListItemText style={{color: 'white'}} primary="투데이" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/chart'><ListItemText style={{color: 'white'}} primary="차트" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/new'><ListItemText style={{color: 'white'}} primary="최신 음악" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/month'><ListItemText style={{color: 'white'}} primary="이달의 노래" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/dj'><ListItemText style={{color: 'white'}} primary="DJ 스테이션" /></NavLink>
            </ListItem>
            <ListItem button style={{ marginTop: '2vw' }}>
                <NavLink to='/playlist'><ListItemText style={{color: 'white'}} primary="플레이리스트" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/video'><ListItemText style={{color: 'white'}} primary="내돈내산" /></NavLink>
            </ListItem>
        </List>
      </Drawer>
    </DrawerContainer>
  );
}
export default Listb