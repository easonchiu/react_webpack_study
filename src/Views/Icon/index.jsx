import './style'

import React, { Component, PropTypes } from 'react'

import Layout from '../../Xui/Components/Layout'
import Icon from '../../Xui/Components/Icon'
import Cell from '../../Xui/Components/Cell'
import Grid from '../../Xui/Components/Grid'


class Icons extends Component {
	constructor(props) {
		super(props);
		this.icons = [
			{ name: 'check', p: 'check' },
			{ name: 'close', p: 'close' },
			{ name: 'round-check-fill', p: 'round-check-fill' },
			{ name: 'round-check', p: 'round-check' },
			{ name: 'round-right', p: 'round-right' },
			{ name: 'unfold', p: 'unfold' },
			{ name: 'right', p: 'right' },
			{ name: 'square-check-fill', p: 'square-check-fill' },
			{ name: 'square', p: 'square' },
			{ name: 'square-check', p: 'square-check' },
			{ name: 'round', p: 'round' },
			{ name: 'fold', p: 'fold' },
			{ name: 'pull-right', p: 'pull-right' },
			{ name: 'refresh-arrow', p: 'refresh-arrow' },
			{ name: 'add', p: 'add' },
			{ name: 'search', p: 'search' },
			{ name: 'back', p: 'back' },
			{ name: 'rmb', p: 'rmb' },
			{ name: 'user', p: 'user' },
			{ name: 'scan', p: 'scan' },
			{ name: 'phone', p: 'phone' },
			{ name: 'mobile', p: 'mobile' },
			{ name: 'address', p: 'address' },
			{ name: 'home', p: 'home' },
			{ name: 'more', p: 'more' },
			{ name: 'friend', p: 'friend' },
			{ name: 'help', p: 'help' },
			{ name: 'tag', p: 'tag' },
			{ name: 'mail', p: 'mail' },
			{ name: 'delete', p: 'delete' },
			{ name: 'refresh', p: 'refresh' },
			{ name: 'top', p: 'top' },
			{ name: 'pic', p: 'pic' },
			{ name: 'idcard', p: 'idcard' },
			{ name: 'v', p: 'v' },
			{ name: 'time', p: 'time' },
			{ name: 'cart', p: 'cart' },
		];
	}
	render() {
		return (
			<Layout>

				<Layout.Header
					title="图标"
					start={ <a onClick={ this.props.router.goBack }><Icon name="back" />返回</a> } />

				<Layout.Body>
					<Cell.Title title="图标列表" />

					<Cell>
						{
							this.icons.map((e, i) => (
								<Cell.Row key={ i }>
									<Cell.Row.Header>
										<Icon name={ e.name } />
									</Cell.Row.Header>
									<Cell.Row.Body>
										<p>{ e.p }</p>
									</Cell.Row.Body>
								</Cell.Row>
							))
						}
					</Cell>

					<Cell.Title title="带颜色的" />
					<Grid border className="myGrid">
						<Grid.Row>
							<Grid.Item col={ 1/4 } className="flex">
								<Icon name="home" large type="primary" />
							</Grid.Item>
							<Grid.Item col={ 1/4 } className="flex">
								<Icon name="home" large type="warn" />
							</Grid.Item>
							<Grid.Item col={ 1/4 } className="flex">
								<Icon name="home" large type="default" />
							</Grid.Item>
							<Grid.Item col={ 1/4 } className="flex">
								<Icon name="home" large type="vital" />
							</Grid.Item>
						</Grid.Row>
					</Grid>

					<Cell.Title title="大尺寸" />
					<Grid border className="myGrid">
						<Grid.Row>
							{
								this.icons.map((e, i) => (
									<Grid.Item key={ i } col={ 1/5 } className="flex">
										<Icon name={ e.name } large />
									</Grid.Item>
								))
							}
						</Grid.Row>
					</Grid>

				</Layout.Body>
			</Layout>
		);
	}
}

export default Icons;