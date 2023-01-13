import request from 'request'
import { geocode } from './geocode.mjs'
import dotenv from 'dotenv'
dotenv.config()

const forecast = (latitude, longitude, callback) => {
	const URL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${latitude},${longitude}`

	request({ url: URL, json: true }, (err, { body }) => {
		if (err) {
			callback('Unable to connect!')
		} else if (body.error) {
			callback('Unable to find location!')
		} else {
			callback(undefined, {
				weather: body.current.weather_descriptions[0],
				temperature: body.current.temperature,
				feelsLike: body.current.feelslike
			})
		}
	})
}

export { forecast }
