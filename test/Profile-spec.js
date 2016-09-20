/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import UserProfile from '../client/components/Dashboard/Profile/UserProfileInfo'
import SecretClick from '../client/components/Dashboard/Profile/SecretClick'

describe('UserProfile />', () => {
	it('should render SecretClick component', () => {
		const wrapper = shallow(<UserProfile />)
		expect(wrapper.find(SecretClick)).to.have.length(1)
	})
	it('should have props = onClick, profileInfo, secretKeyVisible', () => {
		const wrapper = shallow(<UserProfile />)
		expect(wrapper.props().profileInfo).to.be.defined
	})
})