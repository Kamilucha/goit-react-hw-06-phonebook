import PropTypes from 'prop-types'
import { SectionDiv, Title } from './Section.styled'



export const Section = ({ children, title }) => {
    return (
        <SectionDiv>
            <Title>{title}</Title>
            <>{ children}</>
        </SectionDiv>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}