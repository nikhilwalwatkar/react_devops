import {render, screen} from '@testing-library/react'
import App from './App'

test("checking the render",()=>{
    render(<App/>)
    let torender=screen.getByRole("goodWord")
    expect(torender).toBeInTheDocument()
})