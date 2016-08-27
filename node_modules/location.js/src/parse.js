/*
 * parse a string like 'userName=yangxiaofu&age=22' and return an object
 * { userName: 'yangxiaofu', age: 22}
 * @Author: yangxiaofu
 */

/*
 * @params { string } str
 * @return { object }  
 */
 function parse(str){
 	let parsedObj = Object.create(null)
 	
 	if(!str) return parsedObj

 	str = str.substring(1)
 	let strArray = str.split('&')
 	strArray.forEach((item)=>{
 		let equalOper = item.indexOf('=')
 		if(equalOper != -1){
 			let key = item.substring(0, equalOper)
 			let val = item.substring(equalOper + 1)

 			if(key){
 				parsedObj[key] = val
 			}
 		}
 	})

 	return parsedObj
 }

 export default parse