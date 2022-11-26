import React from 'react'

export const GreetReactCreateElement = () => {
  return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            {id: 'greetId'},
            'New element created using ReactCreateElement method'
        )
    )

}
