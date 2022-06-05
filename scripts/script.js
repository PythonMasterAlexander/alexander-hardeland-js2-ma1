import  apiCall  from "./components/apiCall.js";
import { urlAddress } from './constants/urlAddress.js';
import { searchItemsInput } from './constants/constants.js';
import { filterFunction } from './components/filterFunction.js';

apiCall(urlAddress);

searchItemsInput.addEventListener('keyup', filterFunction);