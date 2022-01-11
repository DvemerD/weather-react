const WeatherListSvgSelector = ({ id }) => {
    switch (id) {
        case 'prev-arrow':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.968 81.935">
                    <path id="Previous_btn" data-name="Previous btn" d="M1821.368,414.361l40.968,40.968L1821.368,496.3Z" transform="translate(1862.335 496.296) rotate(180)" fill="#0fb" />
                </svg>
            );
        case 'next-arrow':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.968 81.935">
                    <path id="Next_btn" data-name="Next btn" d="M1821.368,414.361l40.968,40.968L1821.368,496.3Z" transform="translate(-1821.368 -414.361)" fill="#0fb" />
                </svg>
            );
        default:
            return <svg></svg>
    }
}

export default WeatherListSvgSelector;