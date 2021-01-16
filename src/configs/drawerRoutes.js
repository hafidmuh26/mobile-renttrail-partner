import { TransactionScreen } from '../screens/transaction';
import { ScannerScreen } from '../screens/scanner';
import { ExploreScreen } from '../screens/explore';
import { ProfileScreen } from '../screens/profile';
import { ListItemScreen } from '../screens/items';

const drawerRoutes = [
  {
    name: "Explore",
    component: ExploreScreen,
    icon: 'shopping-bag'
  },
  {
    name: "Transaction",
    component: TransactionScreen,
    icon: 'hand-holding-usd'
  },
  {
    name: "QRCode",
    component: ScannerScreen,
    icon: 'qrcode'
  },
  {
    name: "ListItem",
    component: ListItemScreen,
    icon: 'boxes',
  },
  {
    name: "Profile ",
    component: ProfileScreen,
    icon: 'user-secret'
  },
];


export default drawerRoutes;

