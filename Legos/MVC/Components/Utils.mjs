import {createRequire} from 'module';
const require = createRequire(import.meta.url);
export const ReadJSON = (path) => require(path);