/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const { mount, shallow } = require('enzyme')
import ClientInput from '../client/components/Dashboard/Create/clientInput'

// Test for client ClientInput component which renders form for submitting new database or collection


describe('ClientInput />', () => {

	xit('should render 2 input fields with className = form-control', () => {
		const wrapper = shallow(<ClientInput />)
		expect(wrapper.find('input .form-control')).to.have.length(2)
	})
	xit('should have props = onChange && onClick', () => {
		const onChange=()=>{};
		const onClick=()=>{}
		const wrapper = shallow(<ClientInput onChange={onChange} onClick={onClick}/>)
		expect(wrapper.props().onChange).to.be.defined
		expect(wrapper.props().onClick).to.be.defined
	})
	xit('should render a text area', () => {
		const wrapper = shallow(<ClientInput />)
		expect(wrapper.find('textarea')).to.have.length(1)
	})
	xit('should render a button', () => {
		const wrapper = shallow(<ClientInput />)
		expect(wrapper.find('button')).to.have.length(1)
	})
})





// it('should have onClick and onChange props', () => {
// 		const props = {
// 			onChange : () => {},
// 			onClick: () => {}
// 		}
// 		const wrapper = shallow(<ClientInput {...props}/>)
// 		console.log(wrapper.debug())
// 		expect(wrapper.props().onChanggggge).to.be.defined
// 		expect(wrapper.props().onCreateClick).to.be.defined
// 	})