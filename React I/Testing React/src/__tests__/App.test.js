
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'

test('button starts off with label "Play Game"', () =>{
  const app = mount(<App />)
  expect(app.find('button').text()).toEqual('Play Game')
})
test ('starts out with no text in main container', () =>{
  const app = mount(<App />)
  expect(app.find('#main_text').text()).toEqual('')
})
test('button changes to "Excellent!" when clicked', () =>{
  const app = mount(<App />)
  app.find('button').simulate('click')
  expect(app.find('button').text()).toEqual('Excellent!')
})
test('displays game results when button clicked', () =>{
const app = mount(<App />)
app.find('button').simulate('click')
expect(app.find('#main_text').text()).toContain('Good Job')
})

test('hides game results when results visible and button clicked', () =>{
const app = mount(<App />)
app.find('button').simulate('click')
app.find('button').simulate('click')
expect(app.find('#main_text').text()).toEqual('')
})

test('changes button text when button clicked a second time', () => {
  const app = mount(<App />)
  app.find('button').simulate('click')
  app.find('button').simulate('click')
  expect(app.find('button').text()).toEqual('Play again')
})

test('display result of heads or tails', () => {
  const app = mount (<App />)
  app.find('button').simulate('click')
  expect(app.find('#main_test').text()).toContain('You\'ve Got')
})
