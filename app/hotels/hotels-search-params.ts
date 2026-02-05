import { createLoader, parseAsFloat, parseAsInteger, } from 'nuqs/server'


export const searchParamsLoader = createLoader({
    lat: parseAsFloat.withOptions({ shallow: false }),
    lng: parseAsFloat.withOptions({ shallow: false }),
});

