import axios from 'axios'
// eslint-disable-next-line
import _ from 'lodash'
import {apiUrl} from "../config";


export const getDownloadInfo = (id) => {

    const url = `${apiUrl}/posts/${id}`;

    return axios.get(url);
}