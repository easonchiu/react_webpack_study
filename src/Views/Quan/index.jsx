import './style.scss'
import React, { Component, PropTypes } from 'react'

import Header from '../../Components/Header/index.jsx'
import QuanCover from '../../Components/QuanCover/index.jsx'
import QuanItem from '../../Components/QuanItem/index.jsx'

class Quan extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header title="朋友圈" />
				<div className="app-body">
					<QuanCover />
					<QuanItem />
					<QuanItem />
					<QuanItem />
					<QuanItem />
					<QuanItem />
				</div>
			</div>
		);
	}
}

export default Quan;