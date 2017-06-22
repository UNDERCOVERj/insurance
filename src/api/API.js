/*
* @Author: Administrator
* @Date:   2017-06-04 18:59:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-06 11:08:00
*/
import axios from 'axios'

export default {
	getIndex: (url) => axios.get(url),
	getDetail: (url) => axios.get(url),
	getCity: (url) => axios.get(url)
}