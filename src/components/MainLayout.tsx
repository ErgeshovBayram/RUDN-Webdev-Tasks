import { Outlet, Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

function MainLayout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <nav>
            <Button component={Link} to="/" color="inherit" sx={{ mr: 2 }}>
              Главная
            </Button>
            <Button component={NavLink} to="/" color="inherit" sx={{ mr: 2 }}>
              Промокод
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
