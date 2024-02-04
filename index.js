// получаем данные с сервера по курсу ЦБ
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')

//потребляем fetch внутри ассинхронной функции через then
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// .then(function(data){
// 	return data.json()
// }).then(function(data){
// 	console.log(data)
// })

//потребляем fetch внутри ассинхронной функции через async await
async function getCurrencies(){
	const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
	const response = await fetch(url)
	const data = await response.json()

	const usdRate = data.Valute.USD.Value.toFixed(2)
	const eurRate = data.Valute.EUR.Value.toFixed(2)

	//отображаем данные на странице html
	const usdElement = document.querySelector('#usd')
	const eurElement = document.querySelector('#eur')

	usdElement.innerText = usdRate
	eurElement.innerText = eurRate

}

getCurrencies()