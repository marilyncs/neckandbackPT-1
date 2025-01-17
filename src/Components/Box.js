import React from 'react'

const Box = props => {
    const { title, description, icon } = props
    return (
    <div className='box'>
      {/* <div className='symb userclock'> */}
        {/* <img
            alt='icon'
            src='/images/icons/poll.svg'
            style={{ transform: 'rotate(-90deg)', size: '20px' }}
        /> */}
        <i className={ icon } />
        <h3>{ title }</h3>
        <p>{ description }</p>
      {/* </div> */}
    </div>)
}

export default Box