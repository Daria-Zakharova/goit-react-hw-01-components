import { Section, SectionTitle, Stats} from "./Statistics.styled";
import PropTypes from 'prop-types';


function Statistics({data}) {
    return <Section color = "#efefef">
        <SectionTitle>Upload Stats</SectionTitle>
        <Stats numberOfItems = {data.length}>
            {data.map(({id, label, percentage}) => 
            <li key = {id}>
                <span>{label}</span>
                <span>{percentage}</span>
            </li>)}
        </Stats>
    </Section>;
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }
    )),
};

export default Statistics;