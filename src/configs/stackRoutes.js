import { TransactionScreen, TransactionDetailScreen} from '../screens/transaction';
import { ProfileScreen, UpdateProfileScreen } from '../screens/profile';
import {UnitScreen} from '../screens/units';
import {LoginScreen} from '../screens/login';
import {MainScreen} from '../screens/main';
import {SplashScreen} from '../screens/splash';
import {StartScreen} from '../screens/start';
import {SignupScreen} from '../screens/signup';
import {ForgotPwdScreen} from '../screens/forgotpwd';
import ViewAllStoreScreen from '../screens/explore/viewAllStore/ViewAllStoreScreen';
import ViewAllEqScreen from '../screens/explore/viewAllEquipment/ViewAllEqScreen';
import DetailEqScreen from '../screens/explore/viewAllEquipment/detailEquipment/DetailEqScreen';
import ViewMountScreen from '../screens/explore/viewMount/ViewMountScreen';
import {ExploreScreen} from '../screens/explore';
import {BookingScreen, BorrowedScreen, BookingDetailScreen, BorrowedDetailScreen} from '../screens/order';
import { ListItemScreen, UpdateListItemScreen } from '../screens/items';
import {RegisterScreen} from '../screens/register';

const stackRoutes = [
 
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Start',
    component: StartScreen,
  },
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Forgot',
    component: ForgotPwdScreen,
  },
  {
    name: 'Signup',
    component: SignupScreen,
  },
  {
    name: 'Register',
    component: RegisterScreen,
  },
  {
    name: 'Main',
    component: MainScreen,
  },
  {
    name: 'Explore',
    component: ExploreScreen,
  },
  {
    name: 'Booking',
    component: BookingScreen,
  },
  {
    name: 'BookingDetail',
    component: BookingDetailScreen,
  },
  {
    name: 'Borrowed',
    component: BorrowedScreen,
  },
  {
    name: 'BorrowedDetail',
    component: BorrowedDetailScreen,
  },
  {
    name: 'Transaction',
    component: TransactionScreen,
  },
  {
    name: 'TransactionDetail',
    component: TransactionDetailScreen,
  },
  {
    name: "Profile",
    component: ProfileScreen,
  },
  {
    name: "UpdateProfile",
    component: UpdateProfileScreen,
  },
  {
    name:"ListItem",
    component:ListItemScreen,
  },
  {
    name:"UpdateListItem",
    component: UpdateListItemScreen,
  },
  {
    name: 'Unit',
    component: UnitScreen,
  },
  {
    name: 'ViewAllStore',
    component: ViewAllStoreScreen,
  },
  {
    name: 'ViewAllEquipment',
    component: ViewAllEqScreen,
  },
  {
    name: 'DetailEquipment',
    component: DetailEqScreen,
  },
  {
    name: 'ViewMount',
    component: ViewMountScreen,
  },
];

export default stackRoutes;
