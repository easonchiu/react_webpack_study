import '../Styles/Cell.scss'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import fastclick from '../../Assets/Js/fastclick.js'
import classnames from 'classnames'


class Cell extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		let css = classnames('x-cell', this.props.className);
		return (
			<section className={ css }>
				{ this.props.children }
			</section>
		);
	}
}

class CellRow extends Component {
	constructor(props) {
		super(props);
	}
	clickHandle(e) {
		this.props.onClick(e);
	}
	render(){
		var others = {};
		if (this.props.onClick){
			others.onClick = this.clickHandle.bind(this);
		}
		if (this.props.link && !this.props.radio) {
			return (
				<Link to={ this.props.link } className="x-cell__row" { ...others }>
					{ this.props.children }
				</Link>
			);
		}
		let css = classnames({
			'x-cell__row': true,
			'x-cell__row--radio': this.props.radio,
			'x-cell__row--radio-checked': this.props.radio && this.props.checked,
			'x-cell__row--checkbox': this.props.checkbox,
			'x-cell__row--checkbox-checked': this.props.checkbox && this.props.checked,
		});
		return (
			<article className={ css } { ...others }>
				{ this.props.children }
			</article>
		);
	}
}

CellRow.propTypes = {
	link: PropTypes.string,
	onClick: PropTypes.func
}

class CellRowHeader extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="x-cell__row__header">
				{ this.props.children }
			</div>
		);
	}
}

class CellRowBody extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="x-cell__row__body">
				{ this.props.children }
			</div>
		);
	}
}

class CellRowFooter extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="x-cell__row__footer">
				{ this.props.children }
			</div>
		);
	}
}

class CellTitle extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h2 className="x-cell__title">
				{ this.props.title }
			</h2>
		);
	}
}

export default Cell;
export { CellRow, CellRowHeader, CellRowBody, CellRowFooter, CellTitle };