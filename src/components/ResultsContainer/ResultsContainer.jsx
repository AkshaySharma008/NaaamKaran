import React from 'react'
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'

const ResultsContainer = ({suggestNames}) => {
    const suggestedNamesJsx = suggestNames.map((suggestName) => {
        return <NameCard key={suggestName} suggestedName={suggestName} />;
    });

    return(
        <div className="result-container">
            {suggestedNamesJsx}
        </div>
    )
}

export default ResultsContainer