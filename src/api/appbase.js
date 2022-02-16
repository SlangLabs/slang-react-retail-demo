import axios from 'axios';

const headers = {};
headers['Authorization'] = 'Basic ' + btoa('c01a01a09fbe:cdf60413-bc1d-4edc-b578-434fff1e2002');
headers['Content-Type'] = 'application/json';

const appbase = axios.create({
    baseURL: 'https://vamo-ajeayre-arc.searchbase.io/list',
    headers: headers
})

export const query = async (term) => {
     const data = await appbase.post('/_reactivesearch.v3', JSON.stringify(
        {
            query: [
                {
                    id: "search",
                    value: term,
                    size: 1053,
                    dataField: ['brand', 'name', 'size', 'unit']
                }
            ]
        })
    )


    return data.data;
}

export default appbase;
