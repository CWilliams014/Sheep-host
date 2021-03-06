/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import  ColNavBar from '../client/components/Dashboard/Data/ColNavBar'
import ApiSandBox from '../client/components/Dashboard/Data/ApiSandBox'
import DataItem from '../client/components/Dashboard/Data/DataItem'
import DBNavBar from '../client/components/Dashboard/Data/DBNavBar'
import Display from '../client/components/Dashboard/Data/Display'

// Tests for all components in Data folder

describe('test test 12 12 />', () => {
	it('should pass test', () => {
		expect(1 + 1).to.equal(2);
	})
})

describe('ColNavbar />', function() {
	const names=[1,2,3,4]
	it('should render div with className = display', function() { 
		const wrapper = shallow(<ColNavBar names={names}/>)
		expect(wrapper.find('div .display')).to.have.length(1)
	})
	it('should have props = names', function() {
		const wrapper = shallow(<ColNavBar names={names}/>)
		expect(wrapper.props().names).to.be.defined
	})
})

describe('ApiSandBox />', function() {
	it('should render 4 input fields', function() {
		const wrapper = shallow(<ApiSandBox />)
		expect(wrapper.find('input')).to.have.length(4)
	})
	it('should render div with className = display jumbotron', function() {
		const wrapper = shallow(<ApiSandBox />)
		expect(wrapper.find('div .display jumbotron'))
	})
})

describe('DataItem />', function() {
	it('should have props = info', function() {
		const wrapper = shallow(<DataItem />)
		expect(wrapper.props().info).to.be.defined
	})
	it('should render a list item with className = i list-group-item', function() {
		const info = [3,4,5,6]
		const wrapper = shallow(<DataItem info={info}/>)
		expect(wrapper.find('li')).to.have.length(1)
	})
})

describe('DBNavBar />', () => {
	const names = ['h', 'e', 'l', 'l', 'o']
	it('should have props = names', () => {
		const wrapper = shallow(<DBNavBar names={names}/>)
		expect(wrapper.props().names).to.be.defined
	})
	it('should return proper amount of button tabs', () => {
		const wrapper = shallow(<DBNavBar names={names}/>)
		expect(wrapper.find('button')).to.have.length(5)
	})
})

describe('Display />', () => {
	const display=[1,2,3,4,5]
	it('should have props = display', () => {
		const wrapper = shallow(<Display display={display}/>)
		expect(wrapper.props().display).to.be.defined
	})
	it('should render an unordered list', () => {
		const wrapper = shallow(<Display display={display}/>)
		expect(wrapper.find('ul')).to.have.length(1)
	})
})



