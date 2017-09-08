import React from 'react';
import ReactDOM from 'react-dom';
import Cats from '../Cats';
import NewCat from '../NewCat';
import { mount } from 'enzyme'

const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach.",
    city: "SD"
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire.",
    city: "Los Angeles"
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge.",
    city: "Chula Vista"
  }
]

it('Cats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cats cats={cats} />, div);
});

it('Renders the cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h4 > .cat-name')
  expect(headings.length).toBe(3)

})

it('Renders the cats name', ()=>{
  const component = mount(<Cats cats={cats} />)
  const name = component.find('h4 > .cat-name').first()
  expect(name.text()).toBe("Morris")
})

it('Renders the cat age', ()=>{
  const component = mount(<Cats cats={cats} />)
  const age = component.find('h4 > .cat-age').first()
  expect(age.text()).toBe("2 years old")
})

it('Renders what the cat enjoys', ()=>{
  const component = mount(<Cats cats={cats} />)
  const enjoys = component.find('.cat-enjoys').first()
  expect(enjoys.text()).toBe("Long walks on the beach.")
})

it('Renders the cat city', ()=>{
  const component = mount(<Cats cats={cats} />)
  const city = component.find('.cat-city').first()
  expect(city.text()).toBe("SD")
})

it("calls submitHandler on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button: 0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})
