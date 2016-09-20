/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import sinon from 'sinon'
import Dashboard from '../client/components/Dashboard/Dashboard.js'

console.log(Dashboard)

describe('Dashboard />', () => {
	xit('calls componentDidMount', () => {
		sinon.spy(Dashboard.prototype, 'componentDidMount')
		const username="myUsername"
		const wrapper = mount(<Dashboard params={username}/>)
		expect(Dashboard.prototype.componentDidMount.calledOnce).to.equal(true)
	})
}) 