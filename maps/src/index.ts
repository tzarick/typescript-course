import { User } from './User'; // anytime we use export explicity on a class somewhere when multiple things in a file, we receive them via {} so we know which thing to receive
import { Company } from './Company';
import { CustomMap } from './CustomMap';
// import blue from './User';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();
customMap.addMarker(user);
customMap.addMarker(company);
customMap.setZoom(4);
