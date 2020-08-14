import React from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import {makePost} from '../actions/smurfActions'
import {connect} from 'react-redux'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const SmurfForm = (props) => {
    
    const {register, handleSubmit} = useForm()
    
    const onSubmit = (data) => {
        const newObj = {
            name: data.name,
            age: data.age,
            height: data.height,
            id: uuid()
        }
        props.makePost(newObj)
    }

    return (
        <div>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        ref={register}
                    /> 
                </label>
                <label>Age:&nbsp;
                    <input 
                        type='text'
                        name='age'
                        ref={register}
                    /> 
                </label>
                <label>Height:&nbsp;
                    <input 
                        type='text'
                        name='height'
                        ref={register}
                    /> 
                </label>
                <button>Submit Smurf</button>
            </StyledForm>
        </div>
    )
}


export default connect(null,{makePost})(SmurfForm);