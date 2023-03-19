import { geocode } from './controllers/geocodeController.mjs'
import { forecast } from './controllers/forecastController.mjs'

const address = process.argv[2]

if (!address) {
	console.log('Please provide an address!')
} else {
	geocode(address, (err, { latitude, longitude, location } = {}) => {
		if (err) {
			return console.log(err)
		}

		forecast(latitude, longitude, (err, forecastData) => {
			if (err) {
				return console.log(err)
			}

			console.log(location)
			console.log(forecastData)
		})
	})
}
