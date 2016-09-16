/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const  enzyme = require('enzyme')
const  ColNavBar  = require('../client/components/Dashboard/Data/ColNavBar')

console.log(ColNavBar)

describe('ColNavbar />', () => {
	it('should pass test', () => {
		expect(1 + 1).to.equal(2);
	})
})

describe('ColNavbar />',function() {
	it('should render div', function() {
		const wrapper = enzyme.shallow(<ColNavBar />)
		expect(wrapper.contains(<div></div>)).to.be.true
	})
})