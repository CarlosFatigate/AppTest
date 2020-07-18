import React, { Component } from "react"

import { View, Platform, Text } from "react-native"
import StylesHeader from "./style"


interface Props {
	title: String
}

export default class HeaderTitle extends Component<Props> {
	render() {
		const { title } = this.props

		return (
			<View
				style={{
					alignSelf: "flex-end",
					marginBottom: 22,
					paddingHorizontal: Platform.OS == "android" ? 32 : 0
				}}
			>
				<Text style={StylesHeader.title} numberOfLines={1}>{title}</Text>
			</View>
		)
	}
}
