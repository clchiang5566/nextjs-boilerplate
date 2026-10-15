import { isArray } from 'lodash';
import qs from 'qs';

const setQueryStringWithoutPageReload = (qsValue, router) => {
    const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + qsValue;

    if (router) {
        router.push(newUrl, newUrl, { shallow: true, scroll: false });
    } else {
        window.history.pushState({ path: newUrl }, '', newUrl);
    }
};

export const setQueryStringValue = (key, value, queryString = '', router = null) => {
    if (!queryString && typeof window !== 'undefined') {
        queryString = window.location.search;
    }
    const values = qs.parse(queryString.replace('?', ''));
    const newQsValue = qs.stringify({ ...values, [key]: value });
    setQueryStringWithoutPageReload(`?${newQsValue}`, router);
};

export const getQueryStringValue = (key, queryString = '') => {
    if (!queryString && typeof window !== 'undefined') {
        queryString = window.location.search;
    }
    const values = qs.parse(queryString.replace('?', ''));
    if (key) {
        return values[key];
    } else {
        return values;
    }
};

export const convertFiltersToObject = selectedFilters => {
    const obj = {};
    selectedFilters.forEach(f => {
        if (f.single) {
            obj[f.type] = f.value;
        } else if (!obj[f.type] && !isArray(f.value)) {
            obj[f.type] = [f.value];
        } else if (!obj[f.type] && isArray(f.value)) {
            obj[f.type] = f.value;
        } else {
            obj[f.type].push(f.value);
        }
    });
    return obj;
};

export const convertFiltersToString = selectedFilters => {
    return JSON.stringify(convertFiltersToObject(selectedFilters));
};

export const convertObjectToFilters = filtersFromQueryString => {
    const result = [];
    if (filtersFromQueryString) {
        Object.entries(filtersFromQueryString).forEach(([key, value]) => {
            if (isArray(value)) {
                value.forEach(v => {
                    const filter = { type: key, value: v, label: v, single: false };
                    result.push(filter);
                });
            } else {
                const filter = { type: key, value, label: value, single: true };
                result.push(filter);
            }
        });
    }
    return result;
};

export const getFiltersFromQueryString = (key, queryString = '') => {
    const obj = getQueryStringValue(key, queryString);
    return convertObjectToFilters(obj);
};

export const removeQuery = asPath => {
    return asPath.split('?').shift();
};
