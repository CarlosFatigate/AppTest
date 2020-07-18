const RequestError = async (error: any, navigation: any) => {
	switch (error.code) {
		case undefined:
			return error.message
		case 100:
			navigation.navigate("Connection")
			break
		default:
			navigation.navigate("Connection")
			break
	}
}

export default {
	RequestError
}
