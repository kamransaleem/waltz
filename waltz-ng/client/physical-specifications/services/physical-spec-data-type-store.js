
/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */

export function store($http, BaseApiUrl) {

    const BASE = `${BaseApiUrl}/physical-spec-data-type`;

    const findBySpecificationId = (id) => {
        return $http.get(`${BASE}/specification/${id}`)
            .then(result => result.data);
    };

    const findBySpecificationSelector = (options) => {
        return $http.post(`${BASE}/specification/selector`, options)
            .then(result => result.data);
    };

    const save = (specId, command) => {
        return $http.post(`${BASE}/specification/${specId}`, command)
            .then(result => result.data);
    };

    return {
        findBySpecificationId,
        findBySpecificationSelector,
        save
    };
}


store.$inject = [
    '$http',
    'BaseApiUrl'
];


export const serviceName = 'PhysicalSpecDataTypeStore';


export const PhysicalSpecDataTypeStore_API = {
    findBySpecificationId: {
        serviceName,
        serviceFnName: 'findBySpecificationId',
        description: 'finds data types for a given specification id'
    },
    findBySpecificationSelector: {
        serviceName,
        serviceFnName: 'findBySpecificationSelector',
        description: 'finds data types for a given specification id selector'
    },
    save: {
        serviceName,
        serviceFnName: 'save',
        description: 'saves (inserts/deletes) data types for a given specification id'
    }
};

