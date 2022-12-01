import { Section } from "../Section/Section";
import {Stats} from "./Statistics.styled";
import PropTypes from 'prop-types';


export const Statistics = ({title, stats}) => {
    return (
    <Section sectionTitle={title}>
        <Stats numberOfItems = {stats.length}>
            {stats.map(({id, label, percentage}) =>
            <li key = {id}>
                <span>{label}</span>
                <span>{percentage}</span>
            </li>)}
        </Stats>
    </Section>);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }
    )),
};