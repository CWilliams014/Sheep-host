/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import LoginForm from '../client/components/login/LoginForm'
import LoginInput from '../client/components/login/LoginInput'
import LoginPage from '../client/components/login/LoginPage'

describe('LoginForm />', () => {
	xit('should render LoginInput component', () => {
		const wrapper = mount(<LoginForm />)
		expect(wrapper.contains(<LoginInput />)).to.equal.true
	})
})

