/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import SignupForm from '../client/components/signup/SignupForm'
import SignupInput from '../client/components/signup/SignupInput'
import SignupPage from '../client/components/signup/SignupPage'

describe('SignupForm />', () => {
	it('should update SignupForm state.userName with Username input', () => {
		const wrapper = mount(<SignupForm />)
		const input = wrapper.find('input .userName')
		input.node.value = 'good'
		input.simulate('change')
		expect(wrapper.state('userName')).to.equal('good')
	})
		it('should update SignupForm state.email with E-mail input', () => {
		const wrapper = mount(<SignupForm />)
		const input = wrapper.find('input .email')
		input.node.value = 'day'
		input.simulate('change')
		expect(wrapper.state('email')).to.equal('day')
	})
		it('should update SignupForm state.password with Password input', () => {
		const wrapper = mount(<SignupForm />)
		const input = wrapper.find('input .password')
		input.node.value = 'sunshine'
		input.simulate('change')
		expect(wrapper.state('password')).to.equal('sunshine')
	})
})