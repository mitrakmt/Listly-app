## location.js

a fast window location parse library.

## usage

```js
<script type="text/javascript" src='location.js'></script>
<script type="text/javascript">
	var hash = locationJS.getHash()
	var search = locationJS.getSearch()
</script>
```

## Api

* getHash([key])

```js
/*
 * url: www.yangxiaofu.com/#name=yangxiaofu
 */
 var hash = locationJS.getHash() 		/*get the hash object*/
 var name = locationJS.getHash('name')	/*get the name hash value*/
```
* getSearch([key])

```js
/*
 * url: www.yangxiaofu.com/?name=yangxiaofu
 */
 var searcg = locationJS.getSearch() 		/*get the hash object*/
 var name = locationJS.getSearch('name')	/*get the name hash value*/
```