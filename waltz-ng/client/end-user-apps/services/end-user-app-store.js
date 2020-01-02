
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

export function store($http, baseUrl) {

    const BASE = `${baseUrl}/end-user-application`;

    const findBySelector = (selector) =>
        $http
            .post(`${BASE}/selector`, selector)
            .then(result => result.data);

    const countByOrganisationalUnit = () => $http
        .get(`${BASE}/count-by/org-unit`)
        .then(result => result.data);

    return {
        findBySelector,
        countByOrganisationalUnit
    };
}

store.$inject = ['$http', 'BaseApiUrl'];


export const serviceName = 'EndUserAppStore';


export const EndUserAppStore_API = {
    findBySelector: {
        serviceName,
        serviceFnName: 'findBySelector',
        description: 'find EUC apps by org unit selector'
    },
    countByOrganisationalUnit: {
        serviceName,
        serviceFnName: 'countByOrganisationalUnit',
        description: 'count EUC apps across all OUs'
    }
};

