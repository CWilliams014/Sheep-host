/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import LoginForm from '../client/components/login/LoginForm'
import LoginInput from '../client/components/login/LoginInput'
import LoginPage from '../client/components/login/LoginPage'

describe('LoginPage />', () => {
	const wrapper = shallow(<LoginPage />)
	it('should render LoginForm component', () => {
		expect(wrapper.contains(<LoginForm />)).to.equal.true
	})
})