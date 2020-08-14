import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {fetchData} from '../actions/smurfActions'


const StyledSmurf = styled.div`
    border: 2px solid black;
    width: 50%;
    text-align: center;
`

const SmurfCard = (props) => {
    
    useEffect(() => {
        props.fetchData()
    },[])
    console.log(props)
    return (
        <StyledSmurf>
            {props.data.map(smurf => {
                return (
                    <div key={smurf.id}>
                        <div>{smurf.name}</div>
                        <div>{smurf.age}</div>
                        <div>{smurf.height}</div>
                    </div>
                )
                    
            })}
        </StyledSmurf>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps,{fetchData})(SmurfCard);