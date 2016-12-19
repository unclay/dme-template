module.exports = function () {
	// document用于测试浏览器端
	let div = document.createElement('div')
	div.innerHTML = 'Hello world'
	document.body.appendChild(div)
  return 'Hello World'
}