import axios from 'axios';

const headers = {};
headers['Authorization'] = 'Basic ' + btoa('f0d086393945:c457169d-7560-4124-9b39-d8ee07894e6e');
headers['Content-Type'] = 'application/json';

const appbase = axios.create({
    baseURL: 'https://slang-react-demo-hqtxxeb-arc.searchbase.io/slang-react',
    headers: headers
})

export const query = async (term) => {
     const data = await appbase.post('/_reactivesearch.v3', JSON.stringify(
        {
            "query": [
                {
                    "id": "search",
                    "value": term,
                    "size": 10000,
                }
            ]
        })
    )

    return data.data;
}

export default appbase;
