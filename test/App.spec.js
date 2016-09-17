/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import  ColNavBar from '../client/components/Dashboard/Data/ColNavBar'
import ApiSandBox from '../client/components/Dashboard/Data/ApiSandBox'



describe('test test 12 12 />', () => {
	it('should pass test', () => {
		expect(1 + 1).to.equal(2);
	})
})

describe('ColNavbar />', function() {
	it('should render div with className = display', function() { 
		const names=[1,2,3,4]
		const wrapper = shallow(<ColNavBar names={names} />)
		console.log('wrapper', wrapper)
		expect(wrapper.find('div .display')).to.have.length(1)
	})
})

describe('ApiSandBox />', function() {
	it('should render 4 input fields', function() {
		const wrapper = shallow(<ApiSandBox />)
		expect(wrapper.find('input')).to.have.length(4)
	})
})